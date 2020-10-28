import React from 'react';
import api from './services/api'
import './styles.css'
import Header from './components/Header'
import Routes from './routes'

const App = () => (
  <div className="App">
    <Header />
    <Routes />
</div>
)

export default App;
