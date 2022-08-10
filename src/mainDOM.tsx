import React from 'react'
import ReactDOM from 'react-dom/client'
import './mainDOM.sass'
import {main as Main} from './components/main';

//bootstrap:
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
<React.StrictMode><Main/></React.StrictMode>
)
