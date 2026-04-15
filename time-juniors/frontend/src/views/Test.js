function Test() {

  return (
    <>
      <h1 className="tituloH1">Enquete</h1>
      <main className="main">
        <h2 className="tituloH2">Opção </h2>
        {/* <div className='progresso1'>{`${opcao1}`}</div> */}
        <div className="firstOption">
          <p className="txt">y votos</p>
        </div>
        <button className="voteBtn">Votar</button>
        <h2 className="tituloH2">Opção 2</h2>
        {/* <div className='progresso2'>{`${opcao2}`}</div> */}
        <div className="secondOption">
          <p className="txt">x votos</p>
        </div>
        <button className="voteBtn">Votar</button>
      </main>
    </>
  );
}

export default App;
