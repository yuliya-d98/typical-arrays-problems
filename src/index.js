
exports.min = function min (array) {
  let result;
  if (array == undefined) {
      result = 0;
  } else if (array.length == 0) {
      result = 0;
  } else {
      result = array.sort((a, b) => a - b)[0];
  }
  return result;
}

exports.max = function max (array) {
  let result;
  if (array == undefined) {
      result = 0;
  } else if (array.length == 0) {
      result = 0;
  } else {
      result = array.sort((a, b) => a - b)[array.length - 1];
  }
  return result;
}

exports.avg = function avg (array) {
  let result;
  if (array == undefined) {
      result = 0;
  } else if (array.length == 0) {
      result = 0;
  } else {
      result = (array.reduce((a,b) => a + b) / array.length);
  }
  return result;
}
