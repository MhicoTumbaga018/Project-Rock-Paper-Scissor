# Rock Paper Scissors

A simple Rock Paper Scissors game built with **HTML and JavaScript** as part of [The Odin Project](https://www.theodinproject.com/) Foundations course.

## 🎮 About the Project

This project demonstrates fundamental JavaScript concepts by creating a Rock Paper Scissors game played through the browser console and prompts.

The game:

* Allows the player to enter Rock, Paper, or Scissors.
* Generates a random choice for the computer.
* Plays 5 rounds.
* Keeps track of the human and computer scores.
* Announces the winner of each round.
* Announces the overall winner after 5 rounds.
* Accepts different capitalization such as `rock`, `ROCK`, or `Rock`.

## 🧠 JavaScript Concepts Practiced

This project helped practice:

* Variables with `let` and `const`
* Functions
* Function parameters
* Function return values
* Function calls
* `if`, `else if`, and `else`
* Comparison operators
* Logical `&&` operator
* String methods
* `.toLowerCase()`
* `Math.random()`
* `Math.floor()`
* Increment operator `++`
* `for` loops
* Variable scope
* Maintaining and updating state

## 🏗️ Program Structure

The program is divided into three main functions:

```text
getHumanChoice()
       │
       ▼
Get player's choice
       │
       ▼
getComputerChoice()
       │
       ▼
Generate computer choice
       │
       ▼
playRound()
       │
       ▼
Determine winner
       │
       ├──► Update humanScore
       │
       └──► Update computerScore
       │
       ▼
Repeat 5 times
       │
       ▼
Compare final scores
       │
       ▼
Determine overall winner
```

## ⚙️ How It Works

### 1. Getting the Computer's Choice

`getComputerChoice()` generates a random number between `0` and `2`.

```javascript
const computerChoice = Math.floor(Math.random() * 3);
```

The number is then converted into a choice:

```text
0 → rock
1 → paper
2 → scissors
```

### 2. Getting the Human's Choice

`getHumanChoice()` uses `prompt()` to ask the player for their choice.

```javascript
const humanChoice = prompt("Enter your choice: ");
```

The player's input is returned from the function.

### 3. Playing a Round

`playRound()` receives two arguments:

```javascript
playRound(humanChoice, computerChoice);
```

It checks the possible winning combinations.

```text
Rock beats Scissors
Scissors beats Paper
Paper beats Rock
```

When the human wins:

```javascript
humanScore++;
```

When the computer wins:

```javascript
computerScore++;
```

### 4. Playing Five Rounds

`playGame()` uses a `for` loop:

```javascript
for (let i = 0; i < 5; i++) {
    // play one round
}
```

Each iteration:

1. Gets a new human choice.
2. Gets a new computer choice.
3. Plays the round.
4. Updates the score.
5. Displays the result.

### 5. Determining the Final Winner

After five rounds, the scores are compared:

```javascript
if (humanScore > computerScore) {
    return "Human wins the game!";
} else if (computerScore > humanScore) {
    return "Computer wins the game!";
} else {
    return "The game is a tie!";
}
```

## 🚀 Running the Project

### Option 1 — Browser

Because the project uses `prompt()`, it can be run through a browser.

Create an HTML file:

```html
<!DOCTYPE html>
<html>
<head>
    <title>Rock Paper Scissors</title>
</head>
<body>

    <script src="script.js"></script>

</body>
</html>
```

Then open the HTML file in a browser.

Open:

```text
DevTools → Console
```

The game will ask for your choice using `prompt()`.

## 📂 Project Structure

```text
rock-paper-scissors/
│
├── index.html
├── script.js
└── README.md
```

## 📝 Example Output

```text
Enter your choice: rock

Human wins! Rock beats scissors.

Enter your choice: paper

Computer wins!

Enter your choice: scissors

Tie

...

Human wins the game!
Human score: 3
Computer score: 2
```

The results will vary because the computer's choice is randomly generated.

## 📚 What I Learned

The biggest lesson from this project was learning how multiple functions can work together.

Instead of putting the entire game into one large block of code, the program separates responsibilities:

```text
getHumanChoice()
    ↓
Get human input

getComputerChoice()
    ↓
Generate computer input

playRound()
    ↓
Determine round winner
    ↓
Update score

playGame()
    ↓
Run multiple rounds
    ↓
Determine final winner
```

This helped reinforce the idea that **functions can perform specific jobs and work together to build a larger program**.

## 🔨 Future Improvements

Possible improvements for a future version:

* Add a graphical user interface.
* Replace `prompt()` with buttons.
* Display the scores on the webpage.
* Add images for Rock, Paper, and Scissors.
* Add animations.
* Add a reset/restart button.
* Improve input validation.
* Add a first-to-5 or configurable winning score.

## 📖 Course

This project is part of:

**The Odin Project — Foundations**

[The Odin Project](https://www.theodinproject.com/)
