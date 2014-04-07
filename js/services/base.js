function indexOfById(array, id) {
  return array.findIndex(function(item){
    return item.id === id;
  });
}

function removeById(array, id) {
  var index = indexOfById(array, id);
  array.splice(index, 1);
}