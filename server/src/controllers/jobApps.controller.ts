import { Request, Response } from 'express';
import {
  addApplication,
  getAllApplications,
  updateApplication
} from '../models/jobApps.model';
import { JobAppData, JobAppDocument } from '../@types/JobApp';

export const httpGetJobApps = async (_req: Request, res: Response) => {
  const response = await getAllApplications();

  if (response) {
    res.status(200).send(response);
  } else {
    res.status(500).send({ error: 'Internal Application Error' });
  }
};

export const httpPostJobApp = async (req: Request, res: Response) => {
  const data: JobAppData = req.body;

  const result = await addApplication(data);

  if (result) {
    res.status(200).send(result);
  } else {
    res.status(500).send({ error: 'Internal Application Error' });
  }
};

export const httpPatchJobApp = async (req: Request, res: Response) => {
  const { docId } = req.params;
  const data: JobAppDocument = req.body;

  const appData: JobAppData = {
    id: docId,
    ...data
  }

  const result = await updateApplication(appData);

  if (result) {
    res.status(200).send(result);
  } else {
    res.status(500).send({ error: 'Internal Application Error' });
  }
};
