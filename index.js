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
  var lowercase = "hello!"
  string.toLowerCase() === lowercase
  return "I can't hear you!"
  
  var uppercase = "HELLO"
  string.toUpperCase() === uppercase
  return "YES INDEED!"
  
  string === "I love you, Grandma."
  return "I love you, too."
  
}
