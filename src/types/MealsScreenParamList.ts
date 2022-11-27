import { Ingredient } from "./ingredient";

export type MealsScreenParamList = {
  Meals:
    | {
        ingredientIds: string[];
      }
    | undefined;
};
