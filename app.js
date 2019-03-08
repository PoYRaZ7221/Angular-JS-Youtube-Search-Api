const myapp=angular.module("myapp",[]);
myapp.controller("mycontrol",function($scope,$http){
  $scope.ara=function(){
  const api_key="AIzaSyAckagHRXjWelr4B4rjTiQMHITYYbpOIUQ";
  const url = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q="+$scope.veri+"&key="+api_key;
  $http.get(url).then(function(a){
    $scope.sonuc=a.data.items;
  });
  }
});
