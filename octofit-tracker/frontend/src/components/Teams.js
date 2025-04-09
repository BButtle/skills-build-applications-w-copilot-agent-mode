import React, { useEffect, useState } from 'react';

function Teams() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch('https://ominous-bassoon-gv5xx5pqjw52pvqj-8000.app.github.dev/api/teams')
      .then(response => response.json())
      .then(data => setTeams(data));
  }, []);

  return (
    <div>
      <h1>Teams</h1>
      <ul>
        {teams.map(team => (
          <li key={team.id}>{team.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Teams;
