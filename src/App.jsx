

function App() {

  return (
    <div className="card-container">
      {players.map((player) => (
        <Player
          key = {player.name}
          position = {player.position}
          stats = {player.stats}
        />
      ))}
    </div>
  )
}

export default App
