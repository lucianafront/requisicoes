import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MarcaSelect = ({ onChange }) => {
    const [marcas, setMarcas] = useState([]);
    useEffect(() => {

        axios.get('https://parallelum.com.br/fipe/api/v1/carros/marcas')
            .then(res => {
                console.log(res.data)
                setMarcas(res.data);
            })
            .catch(error => {
                console.error('Erro ao buscar marcas:', error);
            });
    }, []);

    return (
        <select onChange={(e) => onChange(e.target.value)}>

            <option value="">Selecione a Marca </option>
            {marcas.map(marca => (
                <option key={marca.codigo} value={marca.codigo}>
                    {marca.nome}
                </option>

            ))}
        </select>
    );
};
export default MarcaSelect;