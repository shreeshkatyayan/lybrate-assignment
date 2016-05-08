var lybrateApp = angular.module('lybrateApp', ['ngRoute', 'ngAnimate']);

window.productsData = [
{
	"product_id"	: "prod121",
	"name"			: "Beer Shampoo",
	"imagePath"		: "http://placehold.it/1600x1200?text=1600x1200",
	"price"			: 350,
	"shippingCost"	: 0,
	"rating"		: 70,
	"reviews"		: 662,
	"description"	: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
},
{
	"product_id"	: "prod122",
	"name"			: "BSA Mountain Bike",
	"imagePath"		: "http://placehold.it/1600x1200?text=1600x1200",
	"price"			: 98,
	"shippingCost"	: 0,
	"rating"		: 30,
	"reviews"		: 28,
	"description"	: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
},
{
	"product_id"	: "prod123",
	"name"			: "Mother's Day Coffee Mug",
	"imagePath"		: "http://placehold.it/1600x1200?text=1600x1200",
	"price"			: 350,
	"shippingCost"	: 0,
	"rating"		: 70,
	"reviews"		: 662,
	"description"	: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
},
{
	"product_id"	: "prod124",
	"name"			: "WD My Passport Ultra 2TB",
	"imagePath"		: "http://placehold.it/1600x1200?text=1600x1200",
	"price"			: 7899,
	"shippingCost"	: 120,
	"rating"		: 96,
	"reviews"		: 1823,
	"description"	: "Lorem ipsum dolor sit amet, reebok consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
},
{
	"product_id"	: "prod125",
	"name"			: "Denim Jeans",
	"imagePath"		: "http://placehold.it/1600x1200?text=1600x1200",
	"price"			: 3500,
	"shippingCost"	: 80,
	"rating"		: 70,
	"reviews"		: 662,
	"description"	: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
},
{
	"product_id"	: "prod126",
	"name"			: "Reebok Running Shoes",
	"imagePath"		: "http://placehold.it/1600x1200?text=1600x1200",
	"price"			: 350,
	"shippingCost"	: 0,
	"rating"		: 65,
	"reviews"		: 662,
	"description"	: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
},
{
	"product_id"	: "prod127",
	"name"			: "Acer Aspire V3-571",
	"imagePath"		: "http://placehold.it/1600x1200?text=1600x1200",
	"price"			: 34899,
	"shippingCost"	: 500,
	"rating"		: 84,
	"reviews"		: 1103,
	"description"	: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
},
{
	"product_id"	: "prod128",
	"name"			: "Apple Iphone 6S",
	"imagePath"		: "http://placehold.it/1600x1200?text=1600x1200",
	"price"			: 350,
	"shippingCost"	: 0,
	"rating"		: 76,
	"reviews"		: 662,
	"description"	: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
}];
window.recommendation = [{
	"product_id"	: "prod121",
	"recommendation": ["prod122","prod123"]
},{
	"product_id"	: "prod122",
	"recommendation": ["prod123","prod124"]
},{
	"product_id"	: "prod123",
	"recommendation": ["prod124","prod125"]
},{
	"product_id"	: "prod124",
	"recommendation": ["prod125","prod126"]
},{
	"product_id"	: "prod125",
	"recommendation": ["prod126","prod127"]
},{
	"product_id"	: "prod126",
	"recommendation": ["prod127","prod128"]
},{
	"product_id"	: "prod127",
	"recommendation": ["prod128","prod121"]
},{
	"product_id"	: "prod128",
	"recommendation": ["prod121","prod122"]
}];

lybrateApp.config(function($routeProvider){
	$routeProvider
		.when('/product', {
			templateUrl: "partial-products.html",
			controller: 'displayController'
		})
		.when('/product/:pid', {
			templateUrl: "detail-product.html",
			controller: 'detailController'
		})
		.otherwise({
			redirectTo: "/product"
		});
});

lybrateApp.controller('displayController', function($scope){
	$scope.products = productsData;
});

lybrateApp.controller('detailController', function($scope, $routeParams){
	$scope.productID = $routeParams.pid;
	$scope.products = productsData;
	$scope.recommendation = recommendation;
	$scope.recommendProduct = [];

	$scope.getProduct = function(products, ID){
		for (var i = products.length - 1; i >= 0; i--) {
			if (products[i].product_id === ID) {
				return products[i];
			}
		}
	}
	$scope.getRecommendations = function(products, recommendations, ID){
		var output = [];
		for (i = recommendations.length - 1; i >= 0; i--) {
			if (recommendations[i].product_id === ID){
				for (j = recommendations[i].recommendation.length -1; j >= 0; j--){
					output[j] = $scope.getProduct(products, recommendations[i].recommendation[j]);
				}
			}
		}
		return output;
	}

	$scope.product = $scope.getProduct($scope.products, $scope.productID);
	$scope.recommendProduct = $scope.getRecommendations($scope.products, $scope.recommendation, $scope.productID);
});