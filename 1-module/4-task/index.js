function checkSpam(str) {

  let lowerStr = str.toLowerCase();

  if (lowerStr.includes('1xbet') || lowerStr.includes('xxx')) {
    return true;
  }

  return false;
}
console.log(checkSpam('1XbeT now')); 
// true

console.log(checkSpam('free xxxxx')); 
// true

console.log(checkSpam('innocent rabbit')); 
// false