import { getCart } from "./localStorage";

const appliedJobsLoader = async () => {
    const loadedJobs = await fetch('jobs.json');
    const jobs = await loadedJobs.json();

    const storedJob = getCart();
    
    const savedJob = [];

    for (const id in storedJob) {
        const addedJob = jobs.find(jb => jb.id == id);
        if (addedJob) {
            const quantity = storedJob[id];
            addedJob.quantity = quantity;
            savedJob.push(addedJob)
        }
    }
    
    return savedJob;
}

export default appliedJobsLoader;