/**
 * Created by 0 on 2/13/2016.
 */
(function() {
    angular
        .module('flickrApp')
        .controller('catsController', function($scope,$q, $timeout, $http) {

            $scope.embedUrl = "https://api.flickr.com/services/rest";

            function wait() {
                return $q(function(resolve, reject){
                    $timeout(function() {
                        resolve();
                    }, 2000);
                });
            }
            function notify() {
                $scope.notifySaved = true;
                return wait().then(function() {
                    $scope.notifySaved = false;
                });
            }

            $scope.searchFlikr = function(keyword) {

                $scope.keyword = keyword;
// need promise function    per_page: "20"
                var url = "https://api.flickr.com/services/rest";
                var request = {
                    method: 'flickr.photos.search',
                    api_key: '4c4d5edb11788c89c7fadd67e55d5059',
                    text: $scope.keyword,
                    format: "json",
                    nojsoncallback: 1,


                };

                $http({
                    method: 'GET',
                    url: url,
                    params: request
                })
                    .then(function(response) {
                        $scope.results = response.data.photos.photo;
                    },
                    function(response) {
                        alert('error');
                    });
            };

        });
})();