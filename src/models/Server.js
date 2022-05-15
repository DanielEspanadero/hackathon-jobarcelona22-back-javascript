import express from 'express';
import cors from 'cors';
import { connectDB } from '../db/config';

import routerAuth from '../routes/auth';

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.path = {
            auth: '/auth',
        }

        this.middleware();
        this.dbConnect();
        this.route();
        this.listen();
    };

    middleware(){
        this.app.use(cors());
        this.app.use(express.json());
    }

    async dbConnect() {
        await connectDB();
    }

    route() {
        this.app.use(this.path.auth, routerAuth);
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Listenner on port ${this.port}`);
        })
    }
};

export default Server;