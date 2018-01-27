var y = [1,2,3,4,5,6,7,8,9,10]
var x = []

for (let k in y){

	x.push(k%2 == 0 ? k + "x" : k + "p")
}

console.log(x)