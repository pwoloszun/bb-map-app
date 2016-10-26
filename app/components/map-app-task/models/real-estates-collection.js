import BackBone from "backbone";
import {RealEstate} from "./real-estate";

export const RealEstatesCollection = BackBone.Collection.extend({
  url: "server/real-estates.json",

  model: RealEstate,

  selected: null,

  toggleSelected: function (realEstate) {
    let index = null;
    if (this.selected === realEstate) {
      this.selected = null;
    } else {
      this.selected = realEstate;
      index = this.indexOf(this.selected);
    }
    this.trigger("selected:changed", this.selected, index);
  },

  isSelected: function (realEstate) {
    return this.selected === realEstate;
  }
});
