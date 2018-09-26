// Write your code in this file!

function scuberGreetingForFeet (ride){

  let cost;
  if (ride <= 400) {
    cost = 'This one is on me!'
  } else if (ride > 2000) {
    cost = 'I will gladly take your thirty bucks.'
  } else if (ride > 2500) {
    cost = 'No can do.'
  }
  return cost
}
