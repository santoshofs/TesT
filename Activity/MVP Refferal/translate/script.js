var app = angular.module('myApp', ['ngCookies', 'pascalprecht.translate']);

app.config(['$translateProvider', function ($translateProvider) {

  // configures staticFilesLoader
  $translateProvider.useStaticFilesLoader({
    prefix: 'data/locale-',
    suffix: '.json'
  });
  // load 'en' table on startup
  $translateProvider.preferredLanguage('en');
}]);

app.controller('Ctrl', ['$translate', '$scope', function ($translate, $scope) {

  $scope.changeLanguage = function (langKey) {
    $translate.use(langKey);
  };
}]);
