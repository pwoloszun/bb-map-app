import BackBone from "backbone";
import Handlebars from "handlebars";

import templateHtml from "./map-app-task-view.template.html!text";
import { GoogleMapView } from "../shared/google-map/google-map-view";
import { DataTableView } from "../shared/data-table/data-table-view";
import { EstateDetailsView } from "./views/estate-details-view";
import { RealEstatesCollection } from "./models/real-estates-collection";

const metaData = [
  { value: "street", text: "Ulica" },
  { value: "lat", text: "Wysokosc geo." },
  { value: "lng", text: "Dlugosc geo." }
];

export const MapAppTaskView = BackBone.View.extend({
  template: Handlebars.compile(templateHtml),

  render() {
    let htmlContent = this.template();
    this.$el.html(htmlContent);

    // create collection

    // render gmap

    // render data-table

    // render details

    // fetch data

  }

});
