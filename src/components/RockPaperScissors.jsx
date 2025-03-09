import React from 'react'
import { useState } from 'react'

const choices = [
    { name: "rock", image: "/rock.png"},
    { name: "paper", image: "/paper.png"},
    { name: "scissors", image: "/scissors.png"}
]

const RockPaperScissors = () => {
    const [playerChoice, setPlayerChoice] = useState(null)
    const [computerChoice, setComputerChoice] = useState(null)
    const [result, setResult] = useState("")

    const playGame = (userChoice) => {
        const computerRandomChoice = choices[Math.floor(Math.random() * choices.length)];
        setPlayerChoice(userChoice);
        setComputerChoice(computerRandomChoice);
    
        if (userChoice.name === computerRandomChoice.name) {
            setResult("It's a Draw!");
        } else if (
            (userChoice.name === "rock" && computerRandomChoice.name === "scissors") ||
            (userChoice.name === "paper" && computerRandomChoice.name === "rock") ||
            (userChoice.name === "scissors" && computerRandomChoice.name === "paper")
        ) {
            setResult("You Win!!");
        } else {
            setResult("You Lose!");
        }
    }

    const reloadPage = () => {
        window.location.reload()
    }

  return (
      <div className="flex flex-col items-center mt-10 border-2 p-10 shadow-2xl rounded-2xl bg-amber-50">
          <h1 className="text-3xl font-bold mb-4">Rock Paper Scissors</h1>
          <p className="text-lg">Choose one:</p>

          <div className="flex gap-4 mt-4">
              {choices.map((choice) => (
                  <img
                      key={choice.name}
                      src={choice.image}
                      alt={choice.name}
                      className="w-24 h-24 cursor-pointer hover:scale-110 transition-transform"
                      onClick={() => playGame(choice)}
                  />
              ))}
          </div>

          <div className="flex gap-12 mt-6 text-center">
              <div>
                  <h3 className="text-lg font-semibold">You</h3>
                  <img
                      src={playerChoice ? playerChoice.image : "/question.png"}
                      alt="Your choice"
                      className="w-20 h-20 mx-auto mt-2"
                  />
              </div>
              <div>
                  <h3 className="text-lg font-semibold">Computer</h3>
                  <img
                      src={computerChoice ? computerChoice.image : "/question.png"}
                      alt="Computer choice"
                      className="w-20 h-20 mx-auto mt-2"
                  />
              </div>
          </div>

          <p className="text-2xl font-bold mt-6">{result}</p>

        {/* Play Again Button */}
        <button
                className="mt-6 px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition"
                onClick={reloadPage}
            >
                Play Again
        </button>

    </div>
  )
}

export default RockPaperScissors