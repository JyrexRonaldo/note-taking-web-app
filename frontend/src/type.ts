export type ThemeVariableType = "light" | "dark" | "system";

export type NoteDataType = {
  id: number;
  title: string;
  tags: string[];
  content: string;
  lastEdited: string;
  isArchived: boolean;
};
