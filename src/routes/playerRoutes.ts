import { Router } from 'express';
import { getTopFivePlayers } from '../services/playerService';

const router = Router();

// Get top 5 players
router.get('/top-five', (req, res) => {
    try {
        const topPlayers = getTopFivePlayers();
        res.json(topPlayers);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch top players' });
    }
});

export const playerRoutes = router; 