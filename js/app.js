var mathitup = angular.module('mathitup', ['ngRoute', 'firebase']);

mathitup.config(function($routeProvider) {
   $routeProvider
      .when("/play", {
         controller: "playController",
         templateUrl: "partials/play-view.html"
      })
      .when("/highscores", {
         controller: "highscoresController",
         templateUrl: "partials/highscores-view.html"
      })
      .when("/enter-name", {
         controller: "enterNameController",
         templateUrl: "partials/enter-name-view.html"
      })
      .otherwise({
         redirectTo: "/enter-name"
      })
});