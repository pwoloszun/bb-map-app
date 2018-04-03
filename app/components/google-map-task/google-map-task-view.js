import BackBone from "backbone";
import Handlebars from "handlebars";

import templateHtml from "./google-map-task-view.template.html!text";
import {GoogleMapView} from "../shared/google-map/google-map-view";
import {CitiesCollection} from "./models/cities-collection";

export const GoogleMapTaskView = BackBone.View.extend({
  template: Handlebars.compile(templateHtml),

  render() {
    let htmlContent = this.template();
    this.$el.html(htmlContent);

    let citiesCollection = new CitiesCollection();
    let gmapView = new GoogleMapView({
      collection: citiesCollection
    });
    this.$(".js-cont:first").append(gmapView.$el);
    gmapView.render();
    citiesCollection.fetch();
  }

});
