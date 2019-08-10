import React from 'react'
import { Header, Footer } from './Components/index'
import Main from './Pages/Main/Main'
import { GlobalContextProvider } from './Context/GlobalContext';
import './App.scss'

function App() {
  return (
    <GlobalContextProvider >
      <Header />
      <Main />
      <Footer />
    </GlobalContextProvider>
  )
}

export default App;
