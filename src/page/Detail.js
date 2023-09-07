import React from 'react'
import { useParams } from 'react-router-dom'
import { db } from './instans';
import axios from 'axios';
import { useState, useEffect } from 'react';


function Detail() {

    const [data, setData] = useState([]);
    let param = useParams();


    let imgBig = "https://image.tmdb.org/t/p/original";
    let imgSmall = "https://image.tmdb.org/t/p/w500";

    async function  loadData (){
        
        const load = await db.db_Movie(`${param.catagory}/${param.id}`);
        setData(load.data)
    }
    
    useEffect(()=>{
        loadData();
    },[param.id])
    
    // console.log(data);

    // const id = param.id;
    
    
    
    return (
        <>
        <div>
            <img src={`${imgSmall}${data.poster_path}`} alt='' />
        </div>
        <h1>{data.title}</h1>

        <ul>
        {
            data.genres && data.genres.map((v)=>(
            
                <li key={v.id}>
                    {v.name}
                </li>
            
            ))
        }
        </ul>

        <p>{data.overview}</p>
        </>
    )
}

export default Detail