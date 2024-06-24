import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";

const db = sql("meals.db");

export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 2000)); // to set delay to show loading state later
  // throw new Error("Failed to fetch meals");
  return db.prepare("SELECT * FROM meals").all();
}

export function getMeal(slug) {
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
}

export function saveMeal(meal) {
  // Generate a slug for the meal title
  meal.slug = slugify(meal.title, { lower: true });

  // Sanitize the meal instruction to prevent cross-site scripting (XSS) attacks
  meal.instruction = xss(meal.instruction);
}
