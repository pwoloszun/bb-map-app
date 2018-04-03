import BackBone from "backbone";
import Handlebars from "handlebars";
import _ from "underscore";

import templateHtml from "./data-table-view.template.html!text";

export const DataTableView = BackBone.View.extend({
  template: Handlebars.compile(templateHtml),

  initialize(params) {
  },

  render() {
    const htmlContent = this.template();
    this.$el.html(htmlContent);

    //TODO
  }

});
