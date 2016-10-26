import BackBone from "backbone";
import Handlebars from "handlebars";

import templateHtml from "./map-app-task-view.template.html!text";
import {GoogleMapView} from "../shared/google-map/google-map-view";
import {DataTableView} from "../shared/data-table/data-table-view";
import {RealEstatesCollection} from "./models/real-estates-collection";

export const MapAppTaskView = BackBone.View.extend({
  template: Handlebars.compile(templateHtml),

  render: function () {
    let htmlContent = this.template();
    this.$el.html(htmlContent);


    let realEstatesCollection = new RealEstatesCollection();
    let gmapView = new GoogleMapView({
      collection: realEstatesCollection
    });
    this.$(".js-map-cont").append(gmapView.$el);
    gmapView.render();

    let metaData = [
      {value: "street", text: "Ulica"},
      {value: "lat", text: "Wysokosc geo."},
      {value: "lng", text: "Dlugosc geo."}
    ];
    let dataTableView = new DataTableView({
      collection: realEstatesCollection,
      metaData: metaData
    });
    this.$(".js-list-cont:first").append(dataTableView.$el);
    dataTableView.render();
    realEstatesCollection.fetch();
  }

});
