// const cart = [
//     { item: "Laptop", price: 800, quantity: 1 },
//     { item: "Mouse", price: 20, quantity: 2 },
//     { item: "Keyboard", price: 50, quantity: 1 }
//   ];
  
//    let total= cart.reduce((sum,items)=>sum+(items.price*items.quantity),0)
//    console.log(total>100?total-(total*0.10):"")
   
   
// A traffic light changes based on car density:
// High traffic → green light for 60 seconds
// Medium traffic → green light for 40 seconds
// Low traffic → green light for 20 seconds
// Write a function that takes the number of cars and returns the green light duration.

// Example:-
// console.log(trafficLight(100)); // Output: 60 seconds
// console.log(trafficLight(30));  // Output: 40 seconds
// console.log(trafficLight(5));   // Output: 20 seconds

// const trafficLight=(numberOfCars)=>{

//     if (numberOfCars>50){
//         console.log("hightraffic:60seconds")
//     }
//     else if(numberOfCars<=50&&numberOfCars>=20){
//         console.log("mediumtraffic:40seconds")

//         }
//     else if(numberOfCars<20){
//         console.log("lowtraffic:20secons")
//     }
//     }
// trafficLight(100)


// Auto-Suggestion in Search Bar
// Implement a simple auto-suggest system:
// Given an array of words and a user input, return possible suggestions.

// Example:-
// const words = ["apple", "banana", "grape", "apricot", "avocado"];

// function autoSuggest(input) {
  
// }

// console.log(autoSuggest("ap")); // Output: ["apple", "apricot", "avocado"]
// const autoSuggestion=(input)=>{
//     const words=['apple','banna','grape','apricot','avocado']
//     let filter=words.filter((word)=>word.startsWith(input))
//     console.log(filter)
// }
// autoSuggestion('ap')

//  Movie Recommendation System

const products = [
    { name: "iPhone 13", category: "Electronics" },
    { name: "MacBook Pro", category: "Electronics" },
    { name: "Nike Shoes", category: "Fashion" },
    { name: "Adidas Jacket", category: "Fashion" }
  ];
  
  function filterProducts(query) {
    return products
      .filter(p => p.name.includes(query) || p.category.includes(query))
      .map(p => p.name);
  }
  
  console.log(filterProducts("Electronics")); 
  console.log(filterProducts("Nike"));       
const products = [
    { name: "iPhone 13", category: "Electronics" },
    { name: "MacBook Pro", category: "Electronics" },
    { name: "Nike Shoes", category: "Fashion" },
    { name: "Adidas Jacket", category: "Fashion" }
  ];
  
  function filterProducts(query) {
    return products
      .filter(p => p.name.includes(query) || p.category.includes(query))
      .map(p => p.name);
  }
  
  console.log(filterProducts("Electronics")); // ["iPhone 13", "MacBook Pro"]
  console.log(filterProducts("Nike"));        // ["Nike Shoes"]