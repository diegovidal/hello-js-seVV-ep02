const CryptoJS = require("crypto-js") // o node acha ele sozinho

module.exports = {
  MD5 (word){
    
    return CryptoJS.MD5(word).toString(CryptoJS.enc.MD5)
  },

  SHA256 (word){
 
    return CryptoJS.SHA256(word).toString(CryptoJS.enc.SHA256)
  }
}