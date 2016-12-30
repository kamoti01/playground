var app = angular.module('VidProj', ['ngResource','ngRoute']);
app.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/', {
            templateUrl: 'partials/home.html',
            controller: 'HomeCtrl'
        })
        .when('/add-video', {
            templateUrl: 'partials/video-form.html',
            controller: 'AddVideoCtrl'
        })
        .when('/videos/:id', {
            templateUrl: 'partials/edit-video-form.html',
            controller: 'EditVideoCtrl'
        })
         .when('/videos/delete/:id', {
            templateUrl: 'partials/video-delete.html',
            controller: 'DeleteVideoCtrl'
        })       
        .otherwise({
            redirectTo: '/'
        });
}]);
app.controller('HomeCtrl', ['$scope', '$resource', 
    function($scope, $resource){
        var Videos = $resource('/api/videos');
        Videos.query(function(videos){
            $scope.videos = videos;
        });
    }]);
app.controller('AddVideoCtrl', ['$scope', '$resource', '$location',
    function($scope, $resource, $location){
        $scope.save = function(){
            var Videos = $resource('/api/videos');
            Videos.save($scope.video, function(){
                $location.path('/');
            });
        };
    }]);
app.controller('EditVideoCtrl', ['$scope', '$resource', '$location', '$routeParams', function($scope, $resource, $location, $routeParams){
    var videos = $resource('api/videos/:id', {id: '@_id'}, {update: {method: 'PUT'}
    
    });
    videos.get({id: $routeParams.id}, function(video){
        $scope.video = video;
    });

    $scope.save = function(){
        videos.update($scope.video, function() {
            $location.path('/');
        });
    }
}]);
app.controller('DeleteVideoCtrl', ['$scope', '$resource', '$location', '$routeParams', function($scope, $resource, $location, $routeParams) {
    var videos = $resource('api/videos/:id');

    videos.get({id: $routeParams.id}, function(video) {
        $scope.video = video;
    });
    $scope.delete = function(){
        videos.delete({id: $routeParams.id}, function(video) {
            $location.path('/');
        });
    }
}]);
