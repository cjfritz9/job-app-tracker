import express from 'express';
import { httpGetJobApps, httpPatchJobApp, httpPostJobApp } from '../controllers/jobApps.controller.js';
const jobAppRouter = express.Router();
jobAppRouter.get('/', httpGetJobApps);
jobAppRouter.post('/', httpPostJobApp);
jobAppRouter.patch('/:docId', httpPatchJobApp);
export default jobAppRouter;
