import { createModel } from "@rematch/core";
import { WindowType } from "src/components/Window";
import { RootModel } from ".";

export const windows = createModel<RootModel>()({
  state: [] as WindowType[],
  reducers: {
    addWindow(state, payload) {
      const windowExists = state.find((window) => window.id === payload.id);
      if (!windowExists) return [...state, payload];
      return state;
    },
    closeWindow(state, id: string) {
      const newWindows = state.filter((window) => window.id !== id);
      return [...newWindows];
    },
    showWindow(state, id: string) {
      const newWindows = state.map((window) => {
        if (window.id === id) {
          window.visible = true;
          window.inactive = false;
        }
        return window;
      });

      return [...newWindows];
    },
    minimizeWindow(state, id: string) {
      const newWindows = state.map((window) => {
        if (window.id === id) {
          window.visible = false;
          window.inactive = true;
        }
        return window;
      });

      return [...newWindows];
    },
    setInactive(state, payload: { id: string, type: boolean }) {
      const newWindows = state.map((window) => {
        if (window.id === payload.id) window.inactive = payload.type;
        return window;
      });

      return [...newWindows];
    }
  }
});
