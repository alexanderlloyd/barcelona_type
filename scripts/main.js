(function(){
    //Place your own Instagram client_id below. Go to https://instagram.com/developer/clients/manage/ and register your app to get a client ID
  var client_id = '6bde83080a1541ea81e1c267b7d4cdbc';
    //To get your user ID go to http://jelled.com/instagram/lookup-user-id and enter your Instagram user name to get your user ID
  var user_id = '1455811625';
 var access_token = '1455811625.71119c1.ce62603d34944c5c9cf3856d3bc1a0d0';

  var app = angular.module('instafeed', ['ngAnimate']);
    app.filter('getFirstCommentFrom',function(){
  return function(arr, user){
    for(var i=0;i<arr.length;i++)
    {
      if(arr[i].from.username==user)
        return arr[i].text;
    }
    return '';
  }
})

  app.factory("InstagramAPI", ['$http', function($http) {
    return {
      fetchPhotos: function(callback){
      /*     var endpoint = "https://api.instagram.com/v1/users/self/media/liked/";
        endpoint += "?access_token=179735937.83aaab0.e44fe9abccb5415290bfc0765edd45ad";
        endpoint += "&callback=JSON_CALLBACK";*/
        var endpoint = "https://api.instagram.com/v1/users/" + user_id + "/media/recent/?";
        endpoint += "?count=99";
        endpoint += "&client_id=" + client_id;
        endpoint += "&access_token=" + access_token;
        endpoint += "&callback=JSON_CALLBACK";
        console.log(endpoint)
        $http.jsonp(endpoint).success(function(response){
          callback(response.data);

        });
      }
    }
  }]);

  app.controller('ShowImages', function($scope, InstagramAPI){
    $scope.layout = 'grid';
    $scope.data = {};
    $scope.pics = [];
    $scope.shuffle = function() {
       $scope.pics.sort(function() { return 0.5 - Math.random() });
    }


    InstagramAPI.fetchPhotos(function(data){
      $scope.pics = data;
      console.log("length is "+data.length)
    });
  });


})();
