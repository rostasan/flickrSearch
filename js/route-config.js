/**
 * Created by 0 on 2/13/2016.
 */
(function() {
    angular
        .module('flickrApp')
        .config(config);
    function config($routeProvider) {
        $routeProvider
            .when('/cats', {
                templateUrl: 'templates/cats.html',
                controller: 'catsController'

            })
    }
})();