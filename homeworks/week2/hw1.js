
function printOneStar(n){
  var result =''
  for (var i=1; i<=n; i++){
    result = '*'
  }

  console.log(result)
}

function printStars(n) {
  for(var i=1; i<=n; i++){
    printOneStar(i)
  } 
  
}
 
printStars(5)
