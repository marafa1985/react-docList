import React from 'react'
import { Header, Footer } from './Components/index'
import Main from './Pages/Main/Main';
import { UserInfo } from './Helper/Http';
import { GlobalContextProvider } from './Context/GlobalContext';
import './App.scss'

function App() {
  return (
    <GlobalContextProvider >
      <Header profile={UserInfo.body.User.profile} />
      <Main />
    
      <Footer />
    </GlobalContextProvider>
  )
}

export default App;
