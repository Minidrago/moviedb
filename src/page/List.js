import React, { useRef, useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom'
import axios from 'axios';
import { db } from './instans';

function List() {
  
  const {catagory} = useParams();
  const [data, setData] = useState([]);

  const [page, setPage] = useState(1); 
  
  async function loadData (type){
    switch(type){
      case 'more' : {
        setPage(page + 1); 
        const load = await db.db_Movie(`/${catagory}/popular`, page+1);
        const newData = load.data.results;
        setData([...data,...newData]); 
        break;
      }
      default : 
        const load = await db.db_Movie(`/${catagory}/popular`, 1);
        const newData = load.data.results;
        setData(newData)
    }
  }
  
  useEffect(()=>{ loadData(); },[catagory])

  console.log(page);


  // 빈 대괄호는 한번실행. 계속 변할때마다 실행시키려면 그곳(의존성 배열)에 변하는값을 넣어주면 된다.

  let imgBig = "https://image.tmdb.org/t/p/original";
  let imgSmall = "https://image.tmdb.org/t/p/w500";

  // useEffect(()=>{
  //   axios.get(`https://api.themoviedb.org/3/${param.catagory}/popular?api_key=f89a6c1f22aca3858a4ae7aef10de967`)
  //   .then(res=> setData(res.data.results))
  // },[])

  async function insert(e) {
    e.preventDefault();
    let msg = e.target.msg.value;
    console.log(msg);
      await db.db_Movie(`/search/${catagory}`,1,msg)
      .then(res => setData(res.data.results))
    }
  

  return (

    <article>

    
    <h2>{catagory === 'tv' ? 'TV Series' : 'Moives'}</h2>
    <form onSubmit={insert}>
        <input type='text' name='msg' />
        <input type='submit' value='search' />
    </form>

    <ul>
    {
      data.map((v,k)=>(
            <Link to = {`/${catagory}/${v.id}`}>
              <li key={v.id}>
                <div>
                  <img src={`${imgSmall}${v.poster_path}`} alt='' />
                </div>
                <h3>{v.title}</h3>
              </li>
            </Link>
      ))
    }
    </ul>
    <button onClick={()=>{loadData('more')}}>Load more</button>
    </article>
  )
}

export default List