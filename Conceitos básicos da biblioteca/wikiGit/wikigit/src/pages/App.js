import { useState } from 'react';
import gitLogo from '../assets/github.png'
import Input from '../components/Input';
import ItemRepositorio from '../components/ItemRepositorio';
import { Container } from "./styles";
import { api } from '../services/api'
import CustomButton from '../components/Button';

function App() {

  const [currentRepo, setCurrentRepo] = useState('')
  const [repos, setRepos] = useState([])
  
  const handleSearchRep = async () => {
    try {
      const { data } = await api.get(`repos/${currentRepo}`)
      setCurrentRepo('')

      const isExist = repos.find(rep => rep.id === data.id)

      if (data.id) {

        if (!isExist) 
          setRepos(prev => [...prev, data])
        else
          alert('Repositorio na lista exibida')
        
      } else {
        alert('Repositorio nao encontrado')
      }
    } catch {
      alert('Repositorio nao encontrado')
    }
  }

  const handleRemoveRepo = (id) => {
    const updatedRepos = repos.filter(rep => rep.id !== id);
    setRepos(updatedRepos);
  }
  

  return (
    <Container>
      <img src={gitLogo} width={72} height={72} alt="git logo" />
      <Input value={currentRepo} onChange={(e) => setCurrentRepo(e.target.value)}/>
      <CustomButton onClick={handleSearchRep}/>
      {repos.map(item => <ItemRepositorio handleRemoveRepo={handleRemoveRepo} key={item.id} itemRepo={ item} /> )}

      
    </Container>
  );
}

export default App;
