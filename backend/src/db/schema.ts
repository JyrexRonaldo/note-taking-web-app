import { pgTable, varchar, boolean , timestamp } from "drizzle-orm/pg-core";

export const notesTable = pgTable("notes", {
  id: varchar().primaryKey(),
  title: varchar({ length: 255 }).notNull(),
  content: varchar({ length: 255 }).notNull(),
  lastEdited: timestamp("last_visited", { mode: "date" }),
  isArchived: boolean("is_archived").default(false),
});