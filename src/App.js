import React,{useState} from'react';
import MarcaSelect from './componentes/MarcaSelect';
import ModeloSelect from './componentes/ModeloSelect'
import AnoSelect from './componentes/AnoSelect';
import Resultado from './componentes/Resultado';

const App = () =>{
  const[marca, setMarca]=useState('');
  const[modelo,setModelo]=useState('');
  const[ano,setAno]=useState('');

  return(
<div>
  <h1>Consuta Tabela FiPE</h1>
  <MarcaSelect onChange={setMarca}/>
  <ModeloSelect marca={marca}onChange={setModelo}/>
  <AnoSelect marca={marca} modelo={modelo} onChange={setAno}/>
  <Resultado marca={marca}modelo={modelo}ano={ano}/>
</div>

  );
};
export default App;


