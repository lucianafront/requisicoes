import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AnoSelect = ({ marca, modelo, onChange }) => {
    const [anos, setAnos] = useState([]);

    useEffect(() => {
        if (marca && modelo) {
            var url=`https://parallelum.com.br/fipe/api/v1/carros/marcas/${marca}/modelos/${modelo}/anos`;
            axios.get(url)
                .then(res => {
                    console.log(res)
                    setAnos(res.data);
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