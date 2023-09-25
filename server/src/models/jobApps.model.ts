import { DocumentData, QueryDocumentSnapshot } from 'firebase-admin/firestore';
import { JobAppDocument, JobAppData } from '../@types/JobApp';
import firestore from '../services/firestore';

const collection = firestore.collection('applications');

export const getAllApplications = async () => {
  const jobApps: JobAppData[] = [];
  const snap = await collection.get();

  snap.forEach((doc) => {
    if (doc.id === 'schema') return;
    jobApps.push({ id: doc.id, ...(doc.data() as JobAppDocument) });
  });

  console.log({ snapShotDocs: snap.docs, size: snap.size });

  return jobApps.sort((a, b) => b.status.weight - a.status.weight);
};

export const addApplication = async (data: JobAppDocument) => {
  const response = await collection.add(data);

  console.log({ response });

  if (response?.id) {
    return { success: `${response.id} added to database` };
  } else {
    return;
  }
};

export const updateApplication = async (data: JobAppData) => {
  const response = await collection.doc(data.id).update({ ...data });

  if (response.writeTime) {
    return { success: `${data.id} successfully updated` };
  } else {
    return;
  }
};
