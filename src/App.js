import React from 'react'

import {
  Routes, Route, HashRouter,
} from 'react-router-dom'

import Header from './components/footer/header'
import Footer from './components/footer'

import Home from "./pages/home"
import Login from "./pages/home/login"
import Register from './pages/home/login/register'
import CategoryDetail from './pages/home/category_detail'
import { connect } from 'react-redux'
import useApi from './hooks/useApi'
import { REMOVE_APP_DATA, SET_APP_DATA } from './store/reducers/appDataReducer'
import { REMOVE_TOKEN } from './store/reducers/authReducer'




function App(props) {
 //TODO burada appData bilgisini al.
  console.log("APP COMPONENT PROPS",props)
  const api=useApi()
//token var appData yok ise appData bilgisini api'den al
  if(props.authState.token && (!props.appDataState.appData)){
    api.get("user/appData")
    .then((response)=>{
      console.log(">>App data Resp",response)
      const action={
        type:SET_APP_DATA,
        payload:{
          appData:response.data.data
        },
      }
      props.dispatch(action)
    })
    .catch((err)=>{
      console.error("APP APİ ERR",err)

      if(err.response.data.status==="error"){
        if(err.response.data.exeptionType==="UserNotLoggedInExeption"){
          //bu hatayı aldığımıza göre artık bizdeki token bilgisi invalid
          //localStorage den token bilgisini sil
          localStorage.removeItem("token")
          
          const action={
            type:REMOVE_TOKEN            
          }
          props.dispatch(action)

          const actionAppdata={
            type:REMOVE_APP_DATA           
          }
          props.dispatch(actionAppdata)
          
          window.location.href="/#"
        }
      }
        else{
          //genel hata mesajı ver
          alert("Genel hata Oluştu Lütfen Daha Sonrs Tekrar Deneyin")
        }
    })
  }
  return (
  <div className="container py-3">
    <Header />
    <CategoryDetail/>

    <HashRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="category/:slug" element={<CategoryDetail />} />
      </Routes>
    </HashRouter>

    <Footer />
  </div>
  )

}

const mapProps=(state)=>{
  return{
    ...state
  }
}

export default connect(mapProps)(App)
