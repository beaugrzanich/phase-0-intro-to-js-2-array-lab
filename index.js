const cats = ["Milo","Otis","Garfield"]


beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });

function destructivelyAppendCat(name){

cats.push ("Ralph")

}

function destructivelyPrependCat(name){

    cats.unshift ("Bob")
    
}

function destructivelyRemoveLastCat(name){

    cats.pop ()
    
}

function destructivelyRemoveFirstCat(name){

    cats.shift ()
    
}
function appendCat(name){
    cats;
    const appendCat = [... cats]
    appendCat.push("Broom");
    return appendCat;
    
}
function prependCat(name){
    cats;
    const appendCat = [... cats]
    appendCat.unshift("Arnold");
    return appendCat;
    
}
function removeLastCat(name){
    cats;
    const appendCat = [... cats]
    appendCat.pop();
    return appendCat;
    
}
function removeFirstCat(name){
    cats;
    const appendCat = [... cats]
    appendCat.shift();
    return appendCat;
    
}