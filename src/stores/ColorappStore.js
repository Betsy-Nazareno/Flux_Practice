import dispatcher from "../Dispatcher";
import * as ColorAppActions from "../actions/ColorappActions";
import { EventEmitter } from "events";

class ColorappStore extends EventEmitter {
  constructor(props) {
    super(props);
    this.activeColor = "#ff0000";
  }

  handleActions(action) {
    switch (action.type) {
      case ColorAppActions.COLOR_APP_ACTIONS.CHANGE_COLOR: {
        this.activeColor = action.value;
        this.emit("storeUpdated");
        break;
      }
      default: {
      }
    }
  }

  getActiveColor() {
    return this.activeColor;
  }
}

const ColorAppStore = new ColorappStore();
dispatcher.register(ColorAppStore.handleActions.bind(ColorAppStore));

export default ColorAppStore;
