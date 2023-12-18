import { Model } from '@nozbe/watermelondb';
import { field } from '@nozbe/watermelondb/decorators';

export class JournalEntry extends Model {
  static table = 'journal_entries';

  @field('title') title;
  @field('date') date;
  @field('description') description;
  @field('icon') icon;
}
