import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ModeloSelect = ({ marca, onChange }) => {
    const [modelos, setModelos] = useState([]);

    useEffect(() => {
        if (marca) {
            axios.get('https://parallellum.com.br/fipe/api/v1/carros/${marcas}/mode')
                .then(Response => {
                    setModelos(Response.data.modelos);
                })
                .catch(
                    error => {
                        console.error('Erro ao buscar modelos:', error);
                    });
        }
    }, [marca]);
    return (
        <select onCchange={(e) => onChange(e.target.value)} disabled={!marca}>
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
