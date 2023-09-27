import firestore from '../services/firestore';
const collection = firestore.collection('applications');
export const getAllApplications = async () => {
    const jobApps = [];
    const snap = await collection.get();
    snap.forEach((doc) => {
        if (doc.id === 'schema')
            return;
        jobApps.push({ id: doc.id, ...doc.data() });
    });
    return jobApps.sort((a, b) => b.status.weight - a.status.weight);
};
export const addApplication = async (data) => {
    const response = await collection.add(data);
    if (response?.id) {
        return { success: `${response.id} added to database` };
    }
    else {
        return;
    }
};
export const updateApplication = async ({ id, ...data }) => {
    const response = await collection.doc(id).update({ ...data });
    if (response.writeTime) {
        return { success: `${id} successfully updated` };
    }
    else {
        return;
    }
};
