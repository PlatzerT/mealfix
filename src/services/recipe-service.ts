import api from "../utils/api";

export async function getAllIngredients() {
  try {
    const res = await api.get("/list.php", {
      params: {
        i: "list",
      },
    });
    const ingredients = await res.data;
    console.log(ingredients.meals);
  } catch (e) {
    console.log(e);
  }
}

export async function getMealsByIngredients(ingredients: string[]) {}
