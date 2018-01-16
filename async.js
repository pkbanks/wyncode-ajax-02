// async.js
console.log('async loaded');

window.addEventListener('load', function(){
  console.log('window loaded');
  const delayMe = function(){
    console.log("delay");
    return -1;
  };
  setTimeout(delayMe, 3000);
});