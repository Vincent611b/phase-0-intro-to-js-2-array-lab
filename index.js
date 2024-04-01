// Define the cats array
var cats = ["Milo", "Otis", "Garfield"];

// Define the function to append a cat destructively
function destructivelyAppendCat(cat) {
    // Use the push method to add the cat to the end of the array
    cats.push(cat);
}

// Define the function to prepend a cat to the beginning of the array
function destructivelyPrependCat(cat){
    // Use the unshift method to add the cat to the beginning of the array
    cats.unshift(cat);
}

// Define the function to remove the last cat from the array
function destructivelyRemoveLastCat(cat){
    // Use the pop method to remove the last cat from the array
    cats.pop(cat)
}

// Define the function to remove the first cat from the array
function destructivelyRemoveFirstCat(){
    // Use the shift method to remove the first cat from the array
    cats.shift();
}


// Define the function to append a new cat to the array
function appendCat (name) {
    return [...cats, name]; 
  }

// Define the function to prepend a new cat to the array
  function prependCat (name) {
    return [name, ...cats];
  }

  function removeLastCat (name){
    return [...cats.slice(0, -1)]
  }

  function removeFirstCat (name){
    return [...cats.slice(1)]
  }
// Reset the cats array before each test
beforeEach(function () {
    cats.length = 0;
    cats.push("Milo", "Otis", "Garfield");
});
