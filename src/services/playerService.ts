import fs from 'fs';
import path from 'path';
import { parse } from 'csv-parse/sync';

export interface NRLPlayer {
    playerName: string;
    position: string;
    averageRating: number;
    team: string;
}

export const getTopFivePlayers = (): NRLPlayer[] => {
    try {
        // Read the CSV file
        const filePath = path.join(__dirname, '../../nrl_players.csv');
        const fileContent = fs.readFileSync(filePath, 'utf-8');

        // Parse CSV content
        const records = parse(fileContent, {
            columns: true,
            skip_empty_lines: true
        });

        // Convert string ratings to numbers and sort by rating
        const players: NRLPlayer[] = records.map((record: any) => ({
            playerName: record['Player Name'],
            position: record['Position'],
            averageRating: parseFloat(record['Average Rating']),
            team: record['Team']
        }));

        // Sort by rating in descending order and get top 5
        return players
            .sort((a, b) => b.averageRating - a.averageRating)
            .slice(0, 5);
    } catch (error) {
        console.error('Error reading or processing the CSV file:', error);
        return [];
    }
}; 