import BackBone from "backbone";
import Handlebars from "handlebars";

import templateHtml from "./app-view.template.html!text";

const AppView = BackBone.View.extend({
  template: Handlebars.compile(templateHtml),
  childView: null,

  render: function () {
    const htmlContent = this.template();
    this.$el.html(htmlContent);
  },

  renderChild: function (childView) {
    this.$(".js-cont:first").html(childView.$el);
    childView.render();
  },

  renderHtml: function (htmlContent) {
    this.$(".js-cont").html(htmlContent);
  }
});

export {AppView};