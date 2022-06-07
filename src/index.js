import ReactDom from 'react-dom'
import React from 'react'
import './index.css'

import First from './components/basics/First'
import WithParameters from './components/basics/WithParameters'
import Fragment from './components/basics/Fragment'
const el = document.getElementById('root')
ReactDom.render(
    <div id="app">
        <First></First>
        <WithParameters 
            titulo="Two Component"
            subtitulo="Sub Title"
        >
        </WithParameters>
        <Fragment></Fragment> 
    </div>, 
    el
)