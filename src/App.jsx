import { useState } from 'react'

import './App.css'


function App() {
  
  const [formData, setFormData] = useState({
    raça: '',
    local: '',
    perdido: '',
    foto: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Dados do formulário enviados:', formData);
    
  };

  return (
    
    <div className="app">
      <h1>Cadastrar Animal Perdido:</h1>
  
      <form onSubmit={handleSubmit}>
        <label>
          Raça:
          <input type="raça" name="Raça" value={formData.nome} onChange={handleChange} />
        </label>
        <br/>
        <br></br>
        <label>
          Local :
          <input type="local" name="Local" value={formData.email} onChange={handleChange} />
        </label>
        <br />
        <br></br>
        <label>
          Perdido ou Resgatado:
          <input type="perdido" name="Perdido ou Resgatado" value={formData.senha} onChange={handleChange} />
        </label>
        <br />
        <br></br>
        <label>
          Foto do Animal:
          <input type="foto" name="foto" value={formData.senha} onChange={handleChange} />
        </label>
        <br></br>
        <br></br>
        <button type="submit">Concluir</button>
      </form>
    </div>
  );
}

export default App;
