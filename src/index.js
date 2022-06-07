import ReactDom from 'react-dom'
import React from 'react'
import './index.css'

import Primeiro from './components/basics/First'
const el = document.getElementById('root')
ReactDom.render(
    <div>
        <Primeiro></Primeiro>
    </div>, 
    el
)