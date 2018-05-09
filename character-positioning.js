function countLetters(str) {
var str =  str.split(' ').join('').toLocaleLowerCase();
 var output = {}
for (var i = 0; i < str.length; i++) {
    if (output[str[i]]) {
       output[str[i]].push(i)    
   } else {
       output[str[i]] = [i]
   }
  } 
return output ;
} 
console.log(countLetters("Hello Number"));
