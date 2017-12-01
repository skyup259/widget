var graphApp = angular.module('graphApp', []);
/**
creating GraphCtrl controller
*/
graphApp.controller('GraphCtrl', function ($scope) {
	$scope.chart = null;
	$scope.config={};
	// different data used for the chart
	$scope.config.data1="22315474, 13076300, 13691836, 10076300, 9691836";
	$scope.config.data2="65421331, 65464313, 52434364, 223686464, 55564649";
	$scope.config.data3="Hyderabad, Delhi, Kolkata, Mumbai, Patna";
	$scope.userInfo = []; // adding all user infromation in this array that is type, xaxis data and yaxis data 
	var typeVar=''; // for assigning the type of the chart

	// function create chart by taking type of chart and data for both axis
	$scope.showGraph = function(type, data1 , data2) {
		 typeVar = type;
		var config = {};
		config.bindto = '#'+type;
		config.data = {};
		config.data.json = {};
		config.data.json.data1 = data1.split(",");
		config.data.json.data2 = data2.split(",");
		config.axis = {"y":{"label":{"text":"Number of items","position":"outer-middle"}}};
		config.data.types={"data1":type,"data2":type};
		$scope.chart = c3.generate(config);	

	// Adding all user information 
		$scope.userInfo.push(type);
		$scope.userInfo.push(data1);
		$scope.userInfo.push(data2);
		$scope.users = null;	
	}
	

// adding all new tab in parents div(id= "tabs")
	$(document).ready(function() {
	    $("div#tabs").tabs();

	    $("button#newtab").click(function() {

	        var num_tabs = typeVar;
	        $("div#tabs ul").append(
	            "<li><a href='#" + num_tabs + "'>" + num_tabs + "</a></li>"
	        );
	$("div#tabs").append(
	          "<div id=" + num_tabs +" > </div>"
	        );
	        $("div#tabs").tabs("refresh");
	    });                    
	});
	
});


// add-graph button hide and show controller
graphApp.controller('myCtrl', function($scope) { // a controller
});

// for new tab each time when you click on button


