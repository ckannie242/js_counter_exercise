(function(){

//items i need from the dom to work with
let incrementButton = document.querySelector("#increment");
let decrementButton = document.querySelector("#decrement");
let counter = document.querySelector("#counter");

//functionality for increment button
// when button is clicke the number should increase
//when the number is 10 or above turn red
incrementButton.addEventListener("click", function(){
  //get the value for the counter and increase it by one
  //since the value comes out of the dom as a string i need parseInt
  counter.innerHTML = parseInt(counter.innerHTML) + 1

  //if the counter is 10 or above turn it red
  if(counter.innerHTML >= 10){
    counter.style.color = "red";
  }

})

//functionality for decrement button
// when button is clicked the number should decrease
//the number should not drop below 0
decrementButton.addEventListener("click", function(){

  //only decrement if counter is greater than 0
  if(counter.innerHTML > 0){
    counter.innerHTML = parseInt(counter.innerHTML) - 1
  }

  //change counter back to black if below 10
  if(counter.innerHTML < 10){
    counter.style.color = "black";
  }

})

})();
