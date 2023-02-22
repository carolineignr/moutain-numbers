function increasing(arr, currentIndex, lastIndex) {
  // stop points
  if (arr.length < 3) return false;
  if (currentIndex === arr.length) return false;
  if (arr[currentIndex] === arr[lastIndex]) return false;

  if (arr[currentIndex] > arr[lastIndex]) {
    lastIndex = currentIndex;
    currentIndex = lastIndex + 1;
    return increasing(arr, currentIndex, lastIndex);
  } else {
    return decreasing(arr, currentIndex, lastIndex);
  }
}

function decreasing(arr, currentIndex, lastIndex) { 
  // stop points
  if (currentIndex === arr.length) return true; 
  if (arr[currentIndex] === arr[lastIndex]) return false;
  
  if (arr[currentIndex] < arr[lastIndex]) {
    lastIndex = currentIndex;
    currentIndex = lastIndex + 1;
    return decreasing(arr, currentIndex, lastIndex);
  } else {
    return false;
  };
}

module.exports = increasing;

