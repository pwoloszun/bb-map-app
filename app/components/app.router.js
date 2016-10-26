import BackBone from "backbone";
import {AppView} from "./app-view";
import {DashboardView} from "./dashboard/dashboard-view";
import {MapAppTaskView} from "./map-app-task/map-app-task-view";
import {DataTableTaskView} from "./data-table-task/data-table-task-view";
import {GoogleMapTaskView} from "./google-map-task/google-map-task-view";

const AppRouter = BackBone.Router.extend({
  $rootEl: null,

  routes: {
    "dashboard": "showDashboard",
    "data-table": "showDataTableTask",
    "google-map": "showGoogleMapTask",
    "map-app": "showMapAppTask",
    //other
    "secret": "showAccessDenied",
    "*smth": "redirectToDefault"
  },

  initialize: function (params) {
    this.$rootEl = params.$rootEl;
    this.appView = new AppView();
    this.appView.render();
    this.$rootEl.html(this.appView.$el);
  },

  showDashboard: function () {
    let dashboardView = new DashboardView();
    this.appView.renderChild(dashboardView);
  },

  showDataTableTask: function () {
    // TODO
  },

  showGoogleMapTask: function () {
    //TODO
  },

  showMapAppTask: function () {
    //TODO
  },

  showAccessDenied: function () {
    this.appView.renderHtml("<h3>Access Denied</h3>");
  },

  redirectToDefault: function () {
    this.redirectTo("dashboard");
  },

  redirectTo: function (url) {
    this.navigate(url, {trigger: true});
  },

  start: function (usePushState) {
    if (usePushState) {
      this.$rootEl.find('a').on("click", (event) => {
        let isLink = !event.target.href.match(/^#/)
        if (isLink) {
          event.preventDefault();
          this.redirectTo(event.target.pathname);
        }
      });
      BackBone.history.start({pushState: true});
    } else {
      BackBone.history.start();
    }
  }

});

export {AppRouter};