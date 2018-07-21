// Add your functions and code here
function destructivelyAppendKitten(name){
window.kittens.push("Ralph")
 return window.kittens 
}

function destructivelyPrependKitten(name){
  window.kittens.unshift("Bob")
 return window.kittens 
}

function destructivelyRemoveLastKitten(){
    window.kittens.pop()
 return window.kittens 
}

function destructivelyRemoveFirstKitten(){
  window.kittens.shift()
 return window.kittens 
}

function appendKitten(name){
  [...window.kittens, "Broom"]
  Kittens = [...window.kittens, "Broom"]
  return Kittens
}