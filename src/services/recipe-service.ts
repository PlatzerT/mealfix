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
    console.error(e);
  }
}

export async function getMealsByIngredients(ingredients: string[]) {}

export async function getAllMeals(){
    return await api.get("/search.php", {
      params: {
        f: "c",
      },
    }).then(res => res.data.meals).catch(e => console.error(e));
}
