"use babel";
let app = angular.module('app', []);

app.controller('ctrlMain', function($scope){
	
var dg = this;
dg.resultado = 0;
dg.calcular = function(num1, num2){
   
 dg.resultado = num1 * num2; 
}

})

// .service('rest', function($http){
// 	var obj = {};

// 	obj.absData = function(){
//         return $http.post('https://casacolombiana.com/api/v1/getMyApi').then(function(res){ return res.data})
//     }

//     return obj;

// });