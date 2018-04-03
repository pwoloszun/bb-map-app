import BackBone from "backbone";
import Handlebars from "handlebars";
import _ from "underscore";

import templateHtml from "./google-map-view.template.html!text";
import { GMap } from "./gmap";

export const GoogleMapView = BackBone.View.extend({
  template: Handlebars.compile(templateHtml),

  initialize(params) {
  },

  render() {
    let htmlContent = this.template({ name: Math.random() });
    this.$el.html(htmlContent);

    //TODO 1: init map
    // gmap = new GMap(gmapContDom);

    //TODO 2: render markers
    // marker = gmap.createMarker(json);

    //TODO 3: handle marker on click event
    // marker.on("click", (json) => {
    // });

    //TODO 4: highlight selected marker
    // marker.toggleHighlight(true);
  }

});
