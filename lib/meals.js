import sql from "better-sqlite3";

const db = sql("meals.db");

export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 2000)); // to set delay to show loading state later
  return db.prepare("SELECT * FROM meals").all();
}
