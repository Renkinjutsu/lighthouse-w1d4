function findWaldo(arr, found) {
    arr.forEach(function(element, index){
      if(element === "Waldo"){
        found(element, index)
      }
    })
}

function actionWhenFound(name, index) {
    console.log(`Found ${name} at index ${index}!`);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);