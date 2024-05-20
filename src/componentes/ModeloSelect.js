import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ModeloSelect = ({ marca, onChange }) => {
    const [modelos, setModelos] = useState([]);

    useEffect(() => {
        if (marca) {
            console.log(marca)
            var url = `https://parallelum.com.br/fipe/api/v1/carros/marcas/${marca}/modelos`;
            axios.get(url)
                .then(res => {
                    setModelos(res.data.modelos);
                })
                .catch(
                    error => {
                        console.error('Erro ao buscar modelos:', error);
                    });
        }
    }, [marca]);
    return (
        <select onChange={(e) => onChange(e.target.value)} disabled={!marca}>
            <option value="">Selecione o Modelo</option>
            {modelos.map(modelo => (
                <option key={modelo.codigo} value={modelo.codigo}>
                    {modelo.nome}
                </option>
            ))}
        </select>
    );
};
export default ModeloSelect;
