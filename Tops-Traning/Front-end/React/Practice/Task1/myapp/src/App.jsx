import  './App.css'
import ApiCall from './components/ApiCall'
import Apifun from './components/apiCallwithAxios'
import ApiProduct from './components/ApiProduct'
import ApiProfile from './components/ApiProfile'


export default function App(){
  return(
    <div>
      <ApiProduct/>
      <hr />
      <Apifun />
      <hr />
      <ApiCall />
      <hr />
      <ApiProfile />
    </div>
  )
}

