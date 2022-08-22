function scuberGreetingForFeet(feet){
  // Write your code here!
  if (feet <= 400) {
    return 'This one is on me!';
  }else if (feet > 2000 && feet <= 2500) {
    return 'I will gladly take your thirty bucks.';
  }else{
    return 'No can do.';
  }
}

console.log(scuberGreetingForFeet(199));

function ternaryCheckCity(city){
  // Write your code here!
  if (city === "NYC") {
    return "Ok, sounds good.";
  }else {
    return "No go.";
  }
}

console.log(ternaryCheckCity("NYC"));

function switchOnCharmFromTip(tip){
  // Write your code here!
  switch (tip) {
    case "generous":
      return "Thank you so much.";
    case "not as generous":
      return "Thank you.";
    default:
      return "Bye.";
  }
}