import React, { useRef, useState, useEffect } from 'react';
import {Link,Route,Routes,HashRouter} from 'react-router-dom';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';



function Home() {
  const [data, setData] = useState([]);
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);
  const [data3, setData3] = useState([]);
  let imgBig = "https://image.tmdb.org/t/p/original";
  let imgSmall = "https://image.tmdb.org/t/p/w500";
  
  useEffect(()=>{
    axios.get('https://api.themoviedb.org/3/movie/popular?api_key=f89a6c1f22aca3858a4ae7aef10de967')
    .then(res=> setData(res.data.results))
  },[])

  useEffect(()=>{
    axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=f89a6c1f22aca3858a4ae7aef10de967')
    .then(res=> setData1(res.data.results))
  },[])

  useEffect(()=>{
    axios.get('https://api.themoviedb.org/3/tv/popular?api_key=f89a6c1f22aca3858a4ae7aef10de967')
    .then(res=> setData2(res.data.results))
  },[])

  useEffect(()=>{
    axios.get('https://api.themoviedb.org/3/tv/top_rated?api_key=f89a6c1f22aca3858a4ae7aef10de967')
    .then(res=> setData3(res.data.results))
  },[])


  return (
    <>
      <div className='topWrap'>
        <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
      {
        data.map((v,k)=>(
          <SwiperSlide key={v.id}>
            <div  className="back" style={{ backgroundImage: `url(${imgBig}${v.backdrop_path})` }}>
                <div className='thumbWrap'>
                  <div>
                    <h2>{v.title}</h2>
                    <p>{v.overview}</p>
                    <div>
                      <Link to = {`/movie/${v.id}`}>
                        <button>Watch now</button>
                      </Link>
                      <button>Watch trailer</button>
                    </div>
                  </div>
                  <div className='thumb'><img src={`${imgSmall}${v.poster_path}`} alt='' /></div>
                  
                </div>
            </div>
          </SwiperSlide>
        ))
      }
      </Swiper>
      </div>
    
    <section className='s01'>
      <div>
        <h2>Trending Movies</h2>
        <button>view more</button>      
      </div>
      
      <ul>
      <Swiper
        slidesPerView={6.5}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        // modules={[Pagination]}
        className="mySwiper"
      >
      {
        data.map((v,k)=>(
          <SwiperSlide key={v.id}>
            <Link to = {`/movie/${v.id}`}>
            <li>
              <div><img src={`${imgSmall}${v.poster_path}`} alt='' /></div>
              <h3>{v.title}</h3>
            </li>
            </Link>   
          </SwiperSlide> 
        ))
      }
      </Swiper>
      </ul>
    </section>

    <section className='s02'>
      <div>
        <h2>Top Rated Movies</h2>
        <button>view more</button>      
      </div>
      
      <ul>
      <Swiper
        slidesPerView={6.5}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        // modules={[Pagination]}
        className="mySwiper"
      >
      {
        data1.map((v,k)=>(
          <SwiperSlide key={v.id}>
            <Link to = {`/movie/${v.id}`}>

            <li>
              <div><img src={`${imgSmall}${v.poster_path}`} alt='' /></div>
              <h3>{v.title}</h3>
            </li>   
            </Link>
          </SwiperSlide> 
        ))
      }
      </Swiper>
      </ul>
    </section>

    <section className='s03'>
      <div>
        <h2>Trending TV</h2>
        <button>view more</button>      
      </div>
      
      <ul>
      <Swiper
        slidesPerView={6.5}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        // modules={[Pagination]}
        className="mySwiper"
      >
      {
        data2.map((v,k)=>(
          <SwiperSlide key={v.id}>
            <Link to = {`/tv/${v.id}`}>

            <li>
              <div><img src={`${imgSmall}${v.poster_path}`} alt='' /></div>
              <h3>{v.title}</h3>
            </li> 
            </Link>  
          </SwiperSlide> 
        ))
      }
      </Swiper>
      </ul>
    </section>

    <section className='s04'>
      <div>
        <h2>Top Rated TV</h2>
        <button>view more</button>      
      </div>
      
      <ul>
      <Swiper
        slidesPerView={6.5}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        // modules={[Pagination]}
        className="mySwiper"
      >
      {
        data3.map((v,k)=>(
          <SwiperSlide key={v.id}>
            <Link to = {`/tv/${v.id}`}>

            <li>
              <div><img src={`${imgSmall}${v.poster_path}`} alt='' /></div>
              <h3>{v.title}</h3>
            </li>  
            </Link>
          </SwiperSlide> 
        ))
      }
      </Swiper>
      </ul>
    </section>

    </>
  )
}

export default Home