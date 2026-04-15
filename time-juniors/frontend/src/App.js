import "./App.css";
import React, { useState } from "react";

function App() {
  // const ws = new WebSocket("ws:localhost:8000");

  // console.log(ws)

  // if (!ws) {
  //   console.log("ERROOOOOOOO 🚫")
  // }

  // async function vote(voteOption) {
  //   let optionObject = {
  //     option: voteOption
  //   }
  //   ws.on('open', function open() {
  //     ws.send({ option: optionObject });
  //   });
  // }



  var aVotesLocal = window.localStorage.getItem('aVotes');
  var bVotesLocal = window.localStorage.getItem('bVotes');

  var aVotes = JSON.parse(aVotesLocal);
  var bVotes = JSON.parse(bVotesLocal);

  let [voteA, setVoteA] = useState(aVotes ? aVotes : 0);
  let [voteB, setVoteB] = useState(bVotes ? bVotes : 0);

  function handleVoteA() {
    setVoteA(voteA + 1)
    const votes = JSON.stringify(voteA+1)
    localStorage.setItem("aVotes", votes)
  }

  function handleVoteB() {
    setVoteB(voteB + 1)
    const votes = JSON.stringify(voteB+1)
    localStorage.setItem("bVotes", votes)
  }

  return (
    <body className="body">
      <h1 className="tituloH1">Enquete 📚</h1>
      <main className="main">
        <h2 className="tituloH2">Opção A 📍</h2>
        <div className="firstOption">
          <p className="txt">{`${voteA}`} votos 🎉</p>
        </div>
        <button className="voteBtn" onClick={handleVoteA}>
          <p className="txt2">Votar 🖱️</p>
        </button>
        <h2 className="tituloH2">Opção B 📍</h2>
        <div className="secondOption">
          <p className="txt">{`${voteB}`} votos 🎉</p>
        </div>
        <button className="voteBtn" onClick={handleVoteB}>
          <p className="txt2">Votar 🖱️</p>
        </button>
      </main>
    </body>
  );
}

export default App;
