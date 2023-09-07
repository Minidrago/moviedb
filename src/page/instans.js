import axios from 'axios';

export const themoviedb = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: { api_key: 'f89a6c1f22aca3858a4ae7aef10de967' }
})
// themoviedb.get('/movie/popular')  /*  >>>   이렇게만 해도 데이터를 가져온다. */
// .then(res=>{
// console.log(res);
// Object > config, data, headers... > data > page:1 , results : 20[{},{},...]
//   console.log(res.data.results);
// })


// let cStr_1 = ['movie','tv'];
// let cStr_2 = ['upcoming','popular','top_rated'];
// let img_origin = 'https://image.tmdb.org/t/p/original/';
// let img_poster = ' https://image.tmdb.org/t/p/w500/';

// 위처럼 해도 되지만 아래처럼 객체형태로 한 변수에 다 담으면 간결해진다. (심지어 함수3개 까지)
export let db = {
  cStr_1: ['movie', 'tv'],
  cStr_2: ['upcoming', 'popular', 'top_rated'],
  img_origin: 'https://image.tmdb.org/t/p/original/',
  img_poster: ' https://image.tmdb.org/t/p/w500/',
  db_All: async function () {
    // 전체
    let a = themoviedb.get(`/${this.cStr_1[0]}/${this.cStr_2[1]}`),
      b = themoviedb.get(`/${this.cStr_1[0]}/${this.cStr_2[2]}`),
      c = themoviedb.get(`/${this.cStr_1[1]}/${this.cStr_2[1]}`),
      d = themoviedb.get(`/${this.cStr_1[1]}/${this.cStr_2[2]}`);

    // 결과값을 바로 변수에 넣으면 .then아래 함수는 필요없어진다.     
    let result = await Promise.all([a, b, c, d]);

    // .then((result)=>{
    // console.log(result);
    // (4) [{…}, {…}, {…}, {…}]
    return {
      'Trending Movies': result[0],
      'Top Rated Movies': result[1],
      'Trending TV': result[3],
      'Top Rated TV': result[4]
    }
    // });
  },



  // 반복문은 배열을 돌리는게 편하니까 배열로 넣어줌
  // let all = [
  //   themoviedb.get(`/${this.cStr_1[0]}/${this.cStr_2[1]}`),
  //   themoviedb.get(`/${this.cStr_1[0]}/${this.cStr_2[2]}`),
  //   themoviedb.get(`/${this.cStr_1[1]}/${this.cStr_2[1]}`),
  //   themoviedb.get(`/${this.cStr_1[1]}/${this.cStr_2[2]}`)
  // ];
  // // 비동기에서 데이터를 반복문 돌리려면 뭔가(async,await?)가 필요하다 왜냐하면 데이터 처리도 안됐는데 반복하고 반복하면 ...꼬이기때문
  // for(let i=0; i<4; i++){
  //   all[i]
  //   .then(res=>{
  //     console.log(res,'----',i);
  //     //{data: {…}, status: 200, statusText: '', headers: AxiosHeaders, config: {…}, …} '----' 0
  //     //{data: {…}, status: 200, statusText: '', headers: AxiosHeaders, config: {…}, …} '----' 1
  //     //{data: {…}, status: 200, statusText: '', headers: AxiosHeaders, config: {…}, …} '----' 2
  //     //{data: {…}, status: 200, statusText: '', headers: AxiosHeaders, config: {…}, …} '----' 3
  //   }).
  // }

  db_Movie: async function (str, n,msg ) {
    // 영화
    console.log(str,n);
    return await themoviedb.get(str, { params: { page: n, query:msg } });
  },
  db_Tv: async function (str, n ) {
    // Tv

  }
}
