import { database } from './database';


export const fetchJournals = async () => {
    try {
        return await database.get('journal_entries').query().fetch();
    } catch (error) {
        console.error("Failed to fetch journals:", error);
        return [];
    }
};
