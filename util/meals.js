import sql from "better-sqlite3";

const db = sql("meals.db");

export const getMeals = () => {
  return db.prepare("SELECT * FROM meals").all();
};

export const getMeal = (slug) => {
  return db.prepare("SELECt * FROM meals WHERE slug = ?").get(slug);
};

