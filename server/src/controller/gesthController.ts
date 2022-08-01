import {Request, Response } from 'express';

import pool from '../database';

class GesthController {

    public index (req: Request, res: Response) {
       pool.query('DESCRIBE gesth');
       res.json('gesth');
    }
}

const gamesController = new GesthController();
export default gamesController;
