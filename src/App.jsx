
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

import { players } from "./players";

function App() {

  return (
    <>
      <Header></Header>
      <div className="card-container">
        {players.map((player) => (
          Player(player)
        ))}

      </div>
      <Footer></Footer>
    </>
  )
}

export default App
