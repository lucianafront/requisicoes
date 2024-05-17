import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AnoSelect = ({ marca, modelo, onChange }) => {
    const [anos, setAnos] = useState([]);

    useEffect(() => {
        if (marca && modelo) {
            axios.get('https://parallelleum.com.br/fibe/api/v1/carros/marcas/${marca}/mode')
                .then(Response => {
                    setAnos(Response.data);
                })
                .catch(error => {
                    console.error('Erro ao buscar anos:', error);
                });
        }

    }, [marca, modelo]);

    return (
        <select onChange={(e)=> onChange(e.target.value)}disabled={!marca||!modelo}>
         <option value="">Selecione o Ano</option>     
            {anos.map(ano=>(
                <option key={ano.codigo}value={ano.codigo}>

                    {ano.nome}
                </option>
             ))}  
                                                                                           
        </select>
    );
    };
    export default AnoSelect