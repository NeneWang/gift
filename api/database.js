import { Database } from '@nozbe/watermelondb';
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite';
import schema from './schema';
import { JournalEntry } from './model';

const adapter = new SQLiteAdapter({
  schema,
  jsi: false,
  onSetUpError: error => {
    console.error("Database setup error:", error);
  },
});

const database = new Database({
  adapter,
  modelClasses: [JournalEntry],
  actionsEnabled: true,
});

export const fetchAllJournalEntries = async () => {
  const journalEntriesCollection = database.get('journal_entries');
  const entries = await journalEntriesCollection.query().fetch();
  return entries.map(entry => {
    return {
      id: entry.id,
      title: entry.title,
      date: entry.date,
      description: entry.description,
      icon: entry.icon,
    };
  });
};

export const insertJournalEntry = async (entryData) => {
  const journalEntriesCollection = database.get('journal_entries');
  await database.action(async () => {
    await journalEntriesCollection.create(entry => {
      entry.title = entryData.title;
      entry.date = entryData.date;
      entry.description = entryData.description;
      entry.icon = entryData.icon;
    });
  });
};

export const clearAllJournalEntries = async () => {
  const journalEntriesCollection = database.get('journal_entries');
  const entries = await journalEntriesCollection.query().fetch();
  await database.action(async () => {
    for (const item of entries) {
      await item.markAsDeleted(); // Mark as deleted (syncable)
      // await item.destroyPermanently(); // For permanent deletion
    }
  });

};


