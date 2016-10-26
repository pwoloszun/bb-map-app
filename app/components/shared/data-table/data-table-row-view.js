import BackBone from "backbone";
import Handlebars from "handlebars";
import _ from "underscore";

import templateHtml from "./data-table-row-view.template.html!text";

const highlightRowClass = "info";

export const DataTableRowView = BackBone.View.extend({
  template: Handlebars.compile(templateHtml),

  tagName: "tr",

  events: {
  },

  initialize: function (params) {
  },

  render: function () {
  }

});
