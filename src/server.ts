// node module
import express, { Application, Request, Response } from 'express';
import cors, { CorsOptions } from 'cors';

import config from './config';
import limit from './lib/express_rate_limit';
import routerv1 from './routes/v1/index';
import logger from './lib/logger';

const app: Application = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const corsOptions: CorsOptions = {
  methods: ['GET', 'POST', 'DELETE', 'PUT'],
};

app.use(cors(corsOptions));
app.use(limit);

app.use('/api/v1', routerv1);

app.listen(config.PORT, () => {
  logger.info(`SERVER RUNNING IN: http://localhost:${config.PORT}`);
});
