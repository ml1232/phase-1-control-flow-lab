function scuberGreetingForFeet(someNumber){
  let result = ('This one is on me!', 'I will gladly take your 30 bucks.', 'No can do.');
  if (someNumber <= 400) {
    result= 'This one is on me!';
  }
    else if (someNumber > 400 && someNumber < 2000) {
      result = 'That will be twenty bucks.';
  }
      else if (someNumber > 2000 && someNumber < 2500) {
        result = 'I will gladly take your thirty bucks.';
    }
        else if (someNumber > 2500) {
         result = 'No can do.';
      }
      return result

}
function ternaryCheckCity(destination, tip) {
  return destination !== "NYC" ? "No go." :
    "Ok, sounds good." 
    tip > 20 ? "Thank you so much." :
    "Thank you."
}

function switchOnCharmFromTip(tip) {
  switch (tip) {
    case 'generous':
      return 'Thank you so much.';
    case 'not as generous':
      return 'Thank you.';
    case 'thanks for everything':
      return 'Bye.';
  }

}