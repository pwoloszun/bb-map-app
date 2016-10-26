import BackBone from "backbone";
import Handlebars from "handlebars";

// TODO
import templateHtml from "./my-view.template.html!text";

export const MyView = BackBone.View.extend({
  template: Handlebars.compile(templateHtml),

  //TODO
  events: {},

  //TODO
  initialize: function (params) {
  },

  //TODO
  render: function () {
    const htmlContent = this.template();
    this.$el.html(htmlContent);
  }

});
