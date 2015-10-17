angular.module('instaSearchApp', [])
    .controller('QueryController', function($scope,$http) {

        $scope.queryInstagram = function(hashtag){

            $scope.hashtag = hashtag;
           var reqUrl = "https://api.instagram.com/v1/tags/" + hashtag + "/media/recent";
            console.log(reqUrl);
            $scope.test = reqUrl;
            //Request Object..
            var request = {
                client_id: "fbed9053fc5643d1af493fb0c06fa5f0",
                text: hashtag,
                outputMode: 'json',
                showSourceText: '1',
                callback: 'JSON_CALLBACK'
            };

            $http({
                method: 'JSONP',
                url: reqUrl,
                params: request
            }).then(function(response) {
                    console.log("success...");
                    $scope.results = response.data;
                },
                function(response) {
                    console.log("failed...");

                });
        }
    });