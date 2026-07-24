Array.prototype.myMap = function(callback, thisArg) {
  
  if (typeof callback !== 'function') {
    throw new TypeError(callback + ' is not a function');
  }

  if (this == null) {
    throw new TypeError('Array.prototype.myMap called on null or undefined');
  }

  const O = Object(this);

  const len = O.length >>> 0;

  const result = new Array(len);

  for (let i = 0; i < len; i++) {

    if (i in O) {

      result[i] = callback.call(thisArg, O[i], i, O);
    }
  }

  return result;
};