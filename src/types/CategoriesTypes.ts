import { Category } from "./APIResponsesTypes";

export interface IPropsSettingCategory {
  userCategory: string;
  setUserCategory: (category: Category) => void;
}
