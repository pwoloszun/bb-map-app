import BackBone from "backbone";
import { City } from "./city";

export const CitiesCollection = BackBone.Collection.extend({
  url: "server/cities.json",

  model: City,

  toggleSelected(city) {
    let index = null;
    if (this.selected === city) {
      this.selected = null;
    } else {
      this.selected = city;
      index = this.indexOf(this.selected);
    }
    this.trigger("selected:changed", this.selected, index);
  },

  isSelected(city) {
    return this.selected === city;
  }
});
