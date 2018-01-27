const crypto = require("./lib2")

if(!process.env.ALG){
  	console.log('USE SHA256')
  	console.log(crypto.MD5("DIEGO"))
} else {
	console.log('USE MD5')
	console.log(crypto.SHA256("DIEGO"))
}


