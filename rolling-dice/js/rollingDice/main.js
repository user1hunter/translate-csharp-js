// Put your code here

console.log("Let's roll some dice, baby!")
console.log("---------------------------")

const dieValues = [
  "one",
  "two",
  "three",
  "four",
  "five",
  "six"
]

for (let i = 0; i < 10; i++) {

  let die1 = rollDie()
  let die2 = rollDie()

  let message = `${die1} + ${die2} = ${die1 + die2}`
  if (die1 === die2) {
    message += " DOUBLES!"
  }

  console.log(`${message}`)
}

function rollDie() {
  let roll = Math.floor(Math.random(dieValues) * 6)
  return roll
}