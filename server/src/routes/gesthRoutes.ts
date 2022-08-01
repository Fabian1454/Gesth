import { Router } from 'express';

import gesthController from '../controller/gesthController';

class GesthRoutes {

    public router: Router = Router();

    constructor () {
        this.config();

    }

    config(): void {
        this.router.get('/', gesthController.index);
    }
}

const gesthRoutes = new GesthRoutes();
export default gesthRoutes.router;