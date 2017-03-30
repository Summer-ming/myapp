// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
.config(function($stateProvider,$urlRouterProvider){
	 $stateProvider.state("tabs",{
	 	url:'/tab',
	 	templateUrl:'template/tabs.html'
	 })
	 .state("tabs.home",{ 
	 	   url:"/home",
	 	    views:{
	 	    	'tab-home':{
	 	    		 templateUrl:'template/home.html',
	 	    		 controller:'ctrl'
	 	    	}
	 	    }
	 })
	 .state("tabs.xiangqing",{ 
	 	   url:"/xiangqing/:id",
	 	    views:{
	 	    	'tab-home':{
	 	    		 templateUrl:'template/xiangqing.html',
	 	    		  controller:'ctrl1'
	 	    	}
	 	    }
	 })
	 .state("tabs.faxian",{
	 	  url:"/faxian",
	 	  views:{
	 	  	"tab-faxian":{
	 	  		templateUrl:'template/faxian.html',
	 	  		controller:"ctrl2"
	 	  	}
	 	  }
	 })
	 .state("tabs.shangdian",{
	 	  url:"/shangdian",
	 	 views:{
	 	 	"tab-shangdian":{
	 	 		 templateUrl:'template/shangdian.html',
	 	 		 controller:'faxian-ctrl'
	 	 	}
	 	 }
	 })
	 .state("tabs.me",{
	 	  url:"/me",
	 	  views:{
	 	  	"tab-me":{
	 	  		templateUrl:'template/me.html',
	 	  		controller:'show-ctrl'
	 	  	}
	 	  }
	 })
	 .state("tabs.regsit",{
	 	  url:"/regsit",
	 	  views:{
	 	  	"tab-me":{
	 	  		templateUrl:'template/regsit.html',
	 	  		controller:"me-ctrl"
	 	  	}
	 	  }
	 })
	 .state("tabs.login",{
	 	  url:"/login",
	 	  views:{
	 	  	"tab-me":{
	 	  		templateUrl:'template/login.html',
	 	  		controller:"login-ctrl"
	 	  	}
	 	  }
	 })
	 
	$urlRouterProvider.otherwise('/tab/home')
	 
})
.controller("ctrl",function($scope,$http){
	$http({
	     	url:"test.json"
	     }).success(function(data){
	    // console.log(data)
	     $scope.ls=data
	     });
})
.controller("ctrl1",function($scope,$http,$stateParams){
	  $scope.tab=function(){
	  	window.history.go(-1);
	  };
	  $http({
	     	url:"test1.json"
	     }).success(function(data){
	     //console.log(data)
	     
	     /*switch($stateParams.id){
		     	case "0":
		     		$scope.array1=data[0];
		     	break;
		     	case "1":
		     		$scope.array1=data[1];
		     	break;
	     }*/
	    $scope.array1 = data;
	     console.log($scope.array1)
	     });
	     
})
.controller("ctrl2",function($scope,$http){
	$http({
	     	url:"test2.json"
	     }).success(function(data){
	     console.log(data)
	     $scope.ima=data.ko;
	     $scope.yu=data.kp;
	     });
})
.controller("faxian-ctrl",function($scope,$http,$ionicSlideBoxDelegate){
	$http({
	     	url:"test3.json"
	     }).success(function(data){
	     console.log(data)
	     $scope.kl=data.sd
	     $scope.lo=data.tutu
});
	     function countDown(endtime){
    var $time=setInterval(function(){
        var $date=new Date();
        var $endDate=new Date(endtime);
        var $dis=$endDate-$date;
        var $day=Math.floor($dis/1000/60/60/24);
        var $h=Math.floor($dis/1000/60/60%24);
        var $m=Math.floor($dis/1000/60%60);
        var $s=Math.floor($dis/1000%60);
        if($s<10){$s="0"+ $s}
       
        $(".j2").text($h);
        $(".j3").text($m);
        $(".j4").text($s);
    },10)
}
$(function(){

    countDown("2017 5/19 00:00");

})
 /*$scope.nextSlide = function() {
    $ionicSlideBoxDelegate.next();
  }*/

})
.controller("me-ctrl",function($scope,$http){
	 $scope.tab=function(){
	  	window.history.go(-1);
	  };
})
.controller("login-ctrl",function($scope,$http){
	 $scope.tab=function(){
	  	window.history.go(-1);
	  };
	    $scope.shouji='';
	  $scope.hh=function(kw){
	  	 $scope.shouji=kw;
	  	 var rule=/^(156|158|188)\d{8}$/
        if(rule.test(kw)){
           $('.p-s').textContent="手机号可用"
        }
        else{
            $('.p-s').textContent="手机号错误"
        }
	  }
})
.controller("show-ctrl",function($scope,$http){
	
	 
})