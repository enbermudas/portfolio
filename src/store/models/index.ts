import { Models } from "@rematch/core";
import { windows } from "./windows";

export interface RootModel extends Models<RootModel> {
  windows: typeof windows;
}
export const models: RootModel = { windows };
