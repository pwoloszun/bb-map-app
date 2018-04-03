import BackBone from "backbone";
import Handlebars from "handlebars";

import templateHtml from "./estate-details-view.template.html!text";

export const EstateDetailsView = BackBone.View.extend({
  template: Handlebars.compile(templateHtml),

  initialize() {
  },

  render() {
  }

});
