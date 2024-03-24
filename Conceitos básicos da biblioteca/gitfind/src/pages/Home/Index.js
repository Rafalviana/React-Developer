import React, { useState } from 'react';
import Header from '../../components/Header/Index' 
import background from '../../assests/7857148_github_programming_code_hub_git_icon.png'
import './styles.css';
import { ItemList } from '../../components/ItemList/Index'

function App() {
  const [user, setUser] = useState('');
  const [currentUser, setCurrentUser] = useState(null);
  const [repos, setRepos] = useState(null);

  const handleGetData = async () => {
    const userData = await fetch(`https://api.github.com/users/${user}`);
    const newUser = await userData.json();

    if (newUser.name) {
      const { avatar_url, name, bio, login } = newUser;
      setCurrentUser({ avatar_url, name, bio, login });

      const reposData = await fetch(`https://api.github.com/users/${user}/repos`);
      const newRepos = await reposData.json();

      if (newRepos.length) {
        setRepos(newRepos);
      }
    }
  };

  return (
    <div className="App">
      <Header />
      <div className="conteudo">
        <img src={background} className="background" alt="bg-img" />
        <div className="info">
          <div>
            <input
              name="usuario"
              value={user}
              onChange={(event) => setUser(event.target.value)}
              placeholder="@username"
            />
            <button onClick={() => handleGetData(user)}>Search</button>
          </div>
          {currentUser?.name ? (
            <>
              <div className='perfil'>
                <img className='profile' src={currentUser.avatar_url} alt="user-avatar" />
                <div>
                  <h3>{currentUser.name}</h3>
                  <span>{currentUser.login}</span>
                  <p>{currentUser.bio}</p>
                </div>
              </div>
              <hr />
            </>
          ) : null}
          {repos?.length ? ( // Corregido aquí
            <>
              <h1>Repositórios</h1>
              {repos.map(rep => (
                <ItemList key={rep.id} title={rep.name} description={rep.description} /> // Corregido aquí
              ))}
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default App;
