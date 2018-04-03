import BackBone from "backbone";
import Handlebars from "handlebars";

import templateHtml from "./app-view.template.html!text";

const AppView = BackBone.View.extend({
  template: Handlebars.compile(templateHtml),
  childView: null,

  render() {
    const htmlContent = this.template();
    this.$el.html(htmlContent);
  },

  renderChild(childView) {
    this.$(".js-cont:first").html(childView.$el);
    childView.render();
  },

  renderHtml(htmlContent) {
    this.$(".js-cont").html(htmlContent);
  }
});

export { AppView };
