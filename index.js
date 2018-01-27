if(process.argv.length < 3) {
  console.log('usage: paramaters.js joe')
  return
}
var param = process.argv[2]
return param%2 ? console.log('IMPAR') : console.log('PAR')

