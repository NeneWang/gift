import { appSchema, tableSchema } from '@nozbe/watermelondb';

export const databaseSchema = appSchema({
  version: 1,
  tables: [
    tableSchema({
      name: 'journal_entries',
      columns: [
        { name: 'title', type: 'string' },
        { name: 'date', type: 'string' },
        { name: 'description', type: 'string' },
        { name: 'icon', type: 'string', isOptional: true },
      ],
    }),
  ],
});
