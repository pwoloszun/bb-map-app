import BackBone from "backbone";
import { AppView } from "./app-view";
import { DashboardView } from "./dashboard/dashboard-view";
import { MapAppTaskView } from "./map-app-task/map-app-task-view";
import { DataTableTaskView } from "./data-table-task/data-table-task-view";
import { GoogleMapTaskView } from "./google-map-task/google-map-task-view";

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

  initialize(params) {
    this.$rootEl = params.$rootEl;
    this.appView = new AppView();
    this.appView.render();
    this.$rootEl.html(this.appView.$el);
  },

  showDashboard() {
    let dashboardView = new DashboardView();
    this.appView.renderChild(dashboardView);
  },

  showDataTableTask() {
    let dttV = new DataTableTaskView();
    this.appView.renderChild(dttV);
  },

  showGoogleMapTask() {
    let childV = new GoogleMapTaskView();
    this.appView.renderChild(childV);
  },

  showMapAppTask() {
    let childV = new MapAppTaskView();
    this.appView.renderChild(childV);
  },

  showAccessDenied() {
    this.appView.renderHtml("<h3>Access Denied</h3>");
  },

  redirectToDefault() {
    this.redirectTo("dashboard");
  },

  redirectTo(url) {
    this.navigate(url, { trigger: true });
  },

  start(usePushState) {
    if (usePushState) {
      this.$rootEl.find('a').on("click", (event) => {
        let isLink = !event.target.href.match(/^#/)
        if (isLink) {
          event.preventDefault();
          this.redirectTo(event.target.pathname);
        }
      });
      BackBone.history.start({ pushState: true });
    } else {
      BackBone.history.start();
    }
  }

});

export { AppRouter };
