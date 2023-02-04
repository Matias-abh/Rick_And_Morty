import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

import css from './detail.module.css';

const Detail = () => {
    
    const { detailId } = useParams();
    const [ character, setCharacter ] = useState({});
    const apiUrl = 'http://localhost:3001/rickandmorty/detail';


    const apiChar = async () => {
        const response = await axios(`${apiUrl}/${detailId}`)
        const data = await response.data;
        setCharacter(data);
    };



    useEffect(() => {
        apiChar();
    }, []);

    return (
        <>
                <Link to='/' >Home</Link>
            <div className={css.container}>
                <h1>{character?.name}</h1>
                <p>{character?.status}</p>
                <p>{character?.species}</p>
                <p>{character?.gender}</p>
                <p>{character?.origin?.name}</p>
                <img src={character?.image} alt={character.name} />
            </div>
        </>
    )
};

export default Detail;