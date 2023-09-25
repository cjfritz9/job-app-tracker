import firestore from '../services/firestore';
const collection = firestore.collection('applications');
export const getAllApplications = async () => {
    const jobApps = [];
    const snap = await collection.get();
    snap.forEach((doc) => {
        jobApps.push({ id: doc.id, ...doc.data() });
    });
    console.log({ snapShotDocs: snap.docs, size: snap.size });
    return jobApps;
};
export const addApplication = async (data) => {
    const response = await collection.add(data);
    console.log({ response });
    if (response?.id) {
        return { success: `${response.id} added to database` };
    }
    else {
        return;
    }
};
export const updateApplication = async (data) => {
    const response = await collection.doc(data.id).update({ ...data });
    if (response.writeTime) {
        return { success: `${data.id} successfully updated` };
    }
    else {
        return;
    }
};
