function countLetters(str) {
var str =  str.split(' ').join('').toLocaleLowerCase();
 var output = {}
for (var count = 0; count < str.length; count++) {
   if (output[str[count]]) {
       output[str[count]] ++    
   } else {
       output[str[count]] = 1
   }
  } 
return output;
} 
console.log(countLetters("Hello Number"));