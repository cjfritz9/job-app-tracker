import express from 'express';
const apiRouter = express.Router();
import jobAppRouter from './jobApps.router.js';
apiRouter.use('/job-apps', jobAppRouter);
export default apiRouter;
