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
  string.toLowerCase() === string
  return "I can't hear you!"
  
  string.toUpperCase() === string
  return "YES INDEED!"
  
  string === "I love you, Grandma."
  return "I love you, too."
  
}
