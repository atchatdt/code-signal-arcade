// https://app.codesignal.com/arcade/intro/level-3/3AdBC97QNuhF6RwsQ

function isLucky(n) {
   let num = n.toString();
   let half = num.length / 2;
   let firstHalfSum = 0;
   let secondHalfSum = 0;
   for (let i = 0; i < half; i++) {
      firstHalfSum += parseInt(num[i]);
   }
   for (let j = half; j < num.length; j++) {
      secondHalfSum += parseInt(num[j]);
   }
   return firstHalfSum === secondHalfSum;
}

function isLucky(n) {
   let num = n.toString().split('');
   let half = parseInt( num.length/2);
  
   let firstHalfSum = num.slice(0,half).reduce((a,b)=>a+ parseInt(b, 10),0)
   let secondHalfSum = num.slice(half).reduce((a,b)=>a+ parseInt(b, 10),0)
   
   return firstHalfSum == secondHalfSum
}


console.log(isLucky(123));