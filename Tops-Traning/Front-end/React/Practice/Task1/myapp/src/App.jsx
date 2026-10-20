import {BrowserRouter, Route, Routes} from 'react-router-dom'

import './App.css'
import ApiCall from './components/ApiCall'
import Apifun from './components/apiCallwithAxios'
import ApiProduct from './components/ApiProduct'
import ApiProfile from './components/ApiProfile'
import Header from './components/Header'
import MainLoading from './components/Lagyloading/MainLoading'
import PostData from './components/post/PostData'
import MainProp from './components/prop/mainProp'
import MainPut from './components/Put/MainPut'
import CreateUsers from './components/allInOne/CreateUsers'
import ShowUsers from './components/allInOne/ShowUsers'



export default function App() {
  return (
    <div>
      {/* <ApiProduct/>
      <hr />
      <Apifun />
      <hr />
      <ApiCall />
      <hr />
      <ApiProfile />
      <hr />
      <h3><b><u>Props</u></b></h3>
      <MainProp /> */}
      {/* <PostData /> */}
      {/* <MainLoading   /> */}
      {/* <MainPut /> */}
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path='/' element={<CreateUsers/>}/>
          <Route path='/ShowUsers' element={<ShowUsers/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

