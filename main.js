"use babel";
let app = angular.module('app', []);

app.controller('ctrlMain', function($scope){
	
var dg = this;
dg.resultado = 0;
dg.resultado_tabla = [];
dg.calcular = function(num1, num2){
   
 dg.resultado = num1 * num2; 
}


dg.multiplicar = function(tabla){
	multiplicar_n(tabla); 
}

function multiplicar_n(dato1) {
	dg.resultado_tabla = [];
	var rango = 10;
	for (var i = 1; i <= rango; i++) {
	   dg.resultado_tabla.push({"a":i,"b":dato1,"c":i*dato1});
	}

}

})





// .service('rest', function($http){
// 	var obj = {};

// 	obj.absData = function(){
//         return $http.post('https://casacolombiana.com/api/v1/getMyApi').then(function(res){ return res.data})
//     }

//     return obj;

// });