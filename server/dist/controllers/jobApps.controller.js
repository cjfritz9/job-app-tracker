import { addApplication, getAllApplications, updateApplication } from '../models/jobApps.model';
export const httpGetJobApps = async (_req, res) => {
    const response = await getAllApplications();
    if (response) {
        res.status(200).send(response);
    }
    else {
        res.status(500).send({ error: 'Internal Application Error' });
    }
};
export const httpPostJobApp = async (req, res) => {
    const data = req.body;
    const result = await addApplication(data);
    if (result) {
        res.status(200).send(result);
    }
    else {
        res.status(500).send({ error: 'Internal Application Error' });
    }
};
export const httpPatchJobApp = async (req, res) => {
    const data = req.body;
    const result = await updateApplication(data);
    if (result) {
        res.status(200).send(result);
    }
    else {
        res.status(500).send({ error: 'Internal Application Error' });
    }
};
