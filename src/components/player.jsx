import PlayerTeams from "./PlayerTeams";
export default function Player(player) {
    return (
        <div className="player-card">
            <h2>{player.name}</h2>
            {console.log(player.key)}
            <PlayerTeams teams={player.teams} />
        </div>
    );
}