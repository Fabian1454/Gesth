"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class GesthRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', (req, res) => res.send('Gesth'));
    }
}
const gesthRoutes = new GesthRoutes();
exports.default = gesthRoutes.router;
