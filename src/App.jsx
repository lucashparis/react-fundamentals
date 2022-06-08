import React from 'react';
import First from './components/basics/First';
import WithParameters from './components/basics/WithParameters';
import Fragment from './components/basics/Fragment';
import Random from './components/basics/Random';

export default function App(props) {
    return (
    <div id="app">
        <h1>React fundamentals</h1>
        <hr />
        <Random
            vlMin={1}
            vlMax={100}
        />
        <hr />
        <Fragment/> 
        <WithParameters 
            titulo="Two Component"
            subtitulo="Sub Title"
        />
        <First/>
    </div>)
}