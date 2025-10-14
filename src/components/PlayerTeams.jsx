export default function PlayerTeams(prop) {
    const teamsList = prop.teams.map(team => <li>{team}</li>);
    return (
        <ul>
            {teamsList}
        </ul>
    )
}