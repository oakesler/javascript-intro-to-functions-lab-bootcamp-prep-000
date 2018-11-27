function shout(string) {
  return string.toUpperCase()
  
}

function whisper(string) {
  return string.toLowerCase()

}

function logShout(string) {
  var spy = string.toUpperCase()
  console.log(spy)
}

function logWhisper(string) {
  var spy = string.toLowerCase()
  console.log(spy)
}

function sayHiToGrandma(string) {
  var lowercase = string.toLowerCase()
  lowercase === string
  return "I can't hear you!"
  
  var uppercase = string.toUpperCase()
  uppercase === string
  return "YES INDEED!"
  
  var loveyou = string 
  loveyou === "I love you, Grandma."
  return "I love you, too."
  
}
