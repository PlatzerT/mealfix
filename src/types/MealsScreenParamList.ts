import { Ingredient } from "./ingredient";

export type MealsScreenParamList = {
  Meals:
    | {
        ingredients: Ingredient[];
      }
    | undefined;
};
