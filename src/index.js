import ReactDom from 'react-dom'
import React from 'react'
import './index.css'

const tag = <strong>Olá React!</strong>
const el = document.getElementById('root')
ReactDom.render(
    <div>
        {tag}
    </div>, 
    el
)