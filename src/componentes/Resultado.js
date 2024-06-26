import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Resultado = ({ marca, modelo, ano }) => {
    const [Resultado, setResultado] = useState(null);

    useEffect(() => {
        if (marca && modelo && ano) {
            var url = `https://parallelum.com.br/fipe/api/v1/carros/marcas/${marca}/modelos/${modelo}/anos/${ano}`;

            axios.get(url)
                .then(Response => {
                    setResultado(Response.data);
                })
                .catch(Error => {
                    console.error('Erro ao buscar resultado:', Error);
                });
        }
    }, [marca, modelo, ano]);
    if (!Resultado) {
        return null;
    }
    return (
        <div>
            <h2>Resultado</h2>
            <p>Marca: {Resultado.Marca}</p>
            <p>Modelo:{Resultado.Modelo}</p>
            <p>Ano:{Resultado.AnoModelo}</p>
            <p>Preço:{Resultado.Valor}</p>
        </div>
    );

};
export default Resultado;