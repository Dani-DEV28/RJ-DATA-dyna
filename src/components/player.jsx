import PlayerTeams from "./PlayerTeams";
import './styles.css';


export default function Player(player) {
    // const teamsList = player.teams.map(team => <li>{team}</li>);

    return (
        <div className="player-card">
            <h2>{player.name}</h2>
            <img src= {`public/${player.img}`} alt=""/>
            <PlayerTeams teams={player.teams} />
            <p className="position">{player.position}</p>
        </div>
        
    );
}