
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import { players } from "./players";

function App() {

  return (
    <>
    <Header></Header>
      <div className="card-container">
        {players.map((player) => (
          <Player
            key = {player.name}
            position = {player.position}
            stats = {player.stats}
          />
        ))}
      </div>
    <Footer></Footer>
    </>
  )
}

export default App
