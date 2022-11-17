import { Ingredient } from "../types/ingredient";
import api from "../utils/api";

export async function getAllIngredients(): Promise<Ingredient[]> {
  try {
    const res = await api.get("/list.php", {
      params: {
        i: "list",
      },
    });
    const ingredients = await res.data;
    console.log(ingredients.meals);
    return ingredients.meals;
  } catch (e) {
    console.log(e);
    return Promise.reject([]);
  }
}

export async function getMealsByIngredients(ingredients: string[]) {}
