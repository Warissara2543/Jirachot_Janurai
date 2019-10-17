
/* var moment = require('moment');
var today = Date();  
console.log("Hello, NPM");
console.log(today);


moment.locale('th')
console.log(moment().format('LLLL')); */

/*
var Jimp = require('jimp');
 
// open a file called "lenna.png"
Jimp.read('crayon.png', (err, lenna) => {
  if (err) throw err;
  lenna
    .resize(256, 256) // resize
    .quality(60) // set JPEG quality
    .greyscale() // set greyscale
    .write('crayon-small-bw.jpg'); // save
});
*/


/*const say = require('say')
say.speak('Hello!')*/

var QRCode = require('qrcode')
 
QRCode.toDataURL('I am a pony!', function (err, url) {
  console.log(url)
})
