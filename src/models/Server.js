import express from 'express';

import routerAuth from '../routes/auth';

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.path = {
            signUp: '/signup',
            signin: '/signin'
        }


        this.route();
        this.listen();
    };

    route() {
        this.app.use(this.path.signUp, routerAuth);
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Listenner on port ${this.port}`);
        })
    }
};

export default Server;