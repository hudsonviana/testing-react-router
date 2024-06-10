import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import MyComponent from './components/MyComponent.jsx'
import NumberList from './components/NumberList.jsx'
import GithubApi from './components/GithubApi.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <MyComponent /> */}
    {/* <NumberList /> */}
    <GithubApi />
  </React.StrictMode>
)
