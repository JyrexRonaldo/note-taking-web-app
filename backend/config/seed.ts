import data from "./../../frontend/src/data.ts";
import db from "./drizzle.ts";
import { notesTable } from "../src/db/schema.ts";
import z from "zod";

const Note = z.object({
  id: z.coerce.string(),
  title: z.string(),
  content: z.string(),
  lastEdited: z.coerce.date(),
  isArchived: z.boolean(),
});

const allNotes = data.notes.map((note) => {
  return Note.parse({
    id: note.id,
    title: note.title,
    content: note.content,
    lastEdited: note.lastEdited,
    isArchived: note.isArchived,
  });
});

// console.log(allNotes)

async function populateDb() {
  await db.insert(notesTable).values(allNotes);
}

await populateDb();