import './App.scss';
import {Link,Route,Routes,HashRouter} from 'react-router-dom';
import Home from './page/Home';
import List from './page/List';
import axios from 'axios';
import { useEffect } from 'react';
import { db } from './page/instans';
import Detail from './page/Detail';


function App() {

  useEffect(() => {
    (async function(){
      // console.log(  await db.db_Movie('popular',1)  ) 
    })();
  }, [])
  


  return (
    <HashRouter basename='./'>
    <div className="wrap">
      
      <header>
        <nav>
          <Link to="/"> YFLIX </Link>
          <Link to="/"> Home </Link>
          <Link to="/movie"> Movies </Link>
          <Link to="/tv"> TV Series </Link>
          {/* <Link to="/tv/123"> Detail </Link> */}
        </nav>
      </header>
      
      <main>
        <Routes>
          <Route path='/' element={ <Home/> } />
          {/* <List/>에는 path='/movie'혹은 '/tv'가 들어간다. 잘보면 디테일 페이지도 그럼. 그래서 :<<땡땡만 넣어주면 뒤에글자가 변수화 됨 */}
          {/* https://sychoi-apisite1.netlify.app/movie */}
          
            {/* {catagory:'movie' ,id:72829} */}

          <Route path='/:catagory' element={ <List/> } />
                      {/* tv / 72829 */}
          <Route path='/:catagory/:id' element={ <Detail/> } />
        </Routes>
      </main>

    </div>
    </HashRouter>
  );
}

export default App;
