import $ from "jquery";

import {AppRouter} from "./components/app.router";

$(function () {
  let $rootEl = $('.js-main');
  let appRouter = new AppRouter({
    $rootEl: $rootEl
  });
  appRouter.start(true);
});