function getRandomN(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
function getRandomF(min, max) {
  return Math.random() * (max - min) + min;
}

function CreateVect(n){
	var arr=[];
	for (var i = 0; i<n;i++)
		arr.push(getRandomF(-10,10));
	return arr;
}
function T1(arr){
	var maximum = -2200;
	var minimum = 2200;
	var MinInd;
	var MaxInd;
	var Mult=1;
	var Neg =0;
	arr.forEach(function(item, index){
		if (item<0){Neg+=item;}
		if (item < minimum){minimum = item;MinInd=index;}
		if (item > maximum){maximum = item;MaxInd=index;}
	});
	if (MaxInd>MinInd){
	for (var i = MinInd; i<= MaxInd;i++) {
		Mult*=arr[i];
		}
	
	}
	else {
		for (var i = MaxInd;i<= MinInd;i++ ){
			Mult*=arr[i];
		} 
	}
	alert('Произв. между мин и макс'+Mult);
	alert('Сумма отриц.'+Neg);
}

function T6(arr){
	var maximum = -2200;
	var minimum = 2200;
	
	var MaxInd;
	var Sum=0;
	
	var Pos =false;
	arr.forEach(function(item, index){
		if (item>0){Pos=true;}
		if (Pos == true){
			Sum+=item;
		}
		if (item > maximum){maximum = item;MaxInd=index;}
	});
	alert('Максим. индекс:'+(MaxInd));
	alert('Сумма после 1ого целого:'+Sum);
	
}

var n = Number(prompt('n=','5'));
var arr=CreateVect(n);
alert('Массив: '+ arr);
T1(arr);
alert('T6!');
T6(arr);