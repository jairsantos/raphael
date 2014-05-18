function indexOfById(array, id) {
  // return array.findIndex(function(item){
  //   return item.id === id;
  // });
  for(var i = 0; i < array.length; i++) {
    if (array[i].id === id) {
    	return i;
    }
  }
}

function removeById(array, id) {
  var index = indexOfById(array, id);
  array.splice(index, 1);
}