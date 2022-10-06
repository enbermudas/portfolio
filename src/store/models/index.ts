import { Models } from "@rematch/core";
import { windows } from "./windows";
import { notification } from "./notification";

export interface RootModel extends Models<RootModel> {
  windows: typeof windows;
  notification: typeof notification;
}
export const models: RootModel = { windows, notification };
