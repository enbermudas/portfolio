import { createModel } from "@rematch/core";
import { RootModel } from ".";

export interface NotificationType {
  title: string;
  text: string;
  show: boolean;
};

export const notification = createModel<RootModel>()({
  state: {
    id: "",
    title: "",
    text: "",
    show: false
  } as NotificationType,
  reducers: {
    setNotification(state, payload: NotificationType) {
      return {...payload};
    },
    showNotification(state) {
      return {...state, show: true};
    },
    hideNotification(state) {
      return {...state, show: false};
    }
  }
});
