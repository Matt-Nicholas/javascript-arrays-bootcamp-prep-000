var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function destructivelyAddElementToBeginningOfArray(array, newValue){
  return array.unshift(newValue);
}

function addElementToBeginningOfArray(array, newValue){
  var newArray = [newValue, array];
  return newArray;
}

function addElementToEndOfArray (array, newValue){
  var newArray = [array, newValue];
  return newArray;
}

function destructivelyAddElementToEndOfArray(array, newValue){
  return array.push(newValue);
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  return array.shift();
}

function removeElementFromBeginningOfArray(array){
  return array.slice();
}

function destructivelyRemoveElementFromEndOfArray(){
  
}