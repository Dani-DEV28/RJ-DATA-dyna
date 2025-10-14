export default function PlayerTeams(prop) {
    const teamsList = prop.teams.map(team => <li>{team}</li>);
    return (
        <>
            <h3>Former Teams</h3>
            <ul>
                {teamsList}
            </ul>
        </>
    )
}