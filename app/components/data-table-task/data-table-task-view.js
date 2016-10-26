import BackBone from "backbone";
import Handlebars from "handlebars";

import templateHtml from "./data-table-task-view.template.html!text";
import {DataTableView} from "../shared/data-table/data-table-view";
import {HeroesCollection} from "./models/heroes-collection";

export const DataTableTaskView = BackBone.View.extend({
  template: Handlebars.compile(templateHtml),

  render: function () {
    let htmlContent = this.template();
    this.$el.html(htmlContent);

    let heroesCollection = new HeroesCollection();
    let metaData = [
      {value: "universe", text: "Komiksowe Uniwersum"},
      {value: "name", text: "Imie"},
      {value: "secretIdentity", text: "Tozsamosc"}
    ];
    let dataTableView = new DataTableView({
      collection: heroesCollection,
      metaData: metaData
    });
    this.$(".js-cont:first").html(dataTableView.$el);
    dataTableView.render();
    // heroesCollection.fetch(); // TODO
  }

});
