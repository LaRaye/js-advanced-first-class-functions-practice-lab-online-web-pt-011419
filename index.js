const logNameCallback = function (el, i, arr) {
  console.log(el.name);
};

function logDriverNames(arr) {
  arr.forEach(logNameCallback);
}

function logDriversByHometown(arr, loc) {
  hometownArr = arr.filter( function (driver) {return driver.hometown === loc});
  
  logDriverNames(hometownArr);
}