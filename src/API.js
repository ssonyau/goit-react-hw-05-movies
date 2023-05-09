import axios from 'axios';
const MOVIE_SOURCE = 'https://api.themoviedb.org/3/';

const queryOptions = {
  key: 'cbb59fc78e4181a5b517a2b7815cc579',
 search:'search/movie',
 language:'en-US',
 };

async function tranding(){
  const colectedURL = `${MOVIE_SOURCE}trending/all/day?api_key=${queryOptions.key}`;
  // console.log('colectedURL', colectedURL)
  return axios.get(colectedURL).then(r => r.data.results);
}

async function movieDetail(id){
  const colectedURL = `${MOVIE_SOURCE}movie/${`${id}`}?api_key=${queryOptions.key}&language=${queryOptions.language}`;
  // console.log('colectedURL', colectedURL)
  const result = axios.get(colectedURL).then(r => r.data).catch(e=>`${e.request.status}`);
  if(result === '404'){
    return '404'
  }else
  {
    return result
  }
  
}

async function movieCastFetch(id){
  const colectedURL = `${MOVIE_SOURCE}movie/${`${id}`}/credits?api_key=${queryOptions.key}&language=${queryOptions.language}`;
  // console.log('colectedURL', colectedURL)
  const result = axios.get(colectedURL).then(r => r.data).catch(e=>`${e.request.status}`);
  if(result === '404'){
    return '404'
  }else
  {
    return result
  }
  
}

async function movieReviewsFetch(id){
  const colectedURL = `${MOVIE_SOURCE}movie/${`${id}`}/reviews?api_key=${queryOptions.key}&language=${queryOptions.language}`;
  // console.log('colectedURL', colectedURL)
  const result = axios.get(colectedURL).then(r => r.data).catch(e=>`${e.request.status}`);
  if(result === '404'){
    return '404'
  }else
  {
    return result
  }
  
}

async function movieSearchByKeyWord(keyWord,page){
  const colectedURL = `${MOVIE_SOURCE}search/movie?api_key=${queryOptions.key}&query=${keyWord}&language=${queryOptions.language}&page=${page}`;
  // console.log('colectedURL', colectedURL)
  const result = axios.get(colectedURL).then(r => r.data).catch(e=>`${e.request.status}`);
  if(result === '404'){
    return '404'
  }else
  {
    return result
  }
}




export { tranding, movieDetail, movieCastFetch, movieReviewsFetch, movieSearchByKeyWord };
