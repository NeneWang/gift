import { Database } from '@nozbe/watermelondb';
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite';

import { databaseSchema } from './schema';
import { JournalEntry } from './model';

// import { mySchema } from './path/to/schema';
// import JournalEntry from './path/to/JournalEntry';

const adapter = new SQLiteAdapter({
    dbName: 'GiftDatabase',
    schema: databaseSchema,
});

export const database = new Database({
    adapter,
    modelClasses: [JournalEntry],
});
