import './App.css'
import React from 'react';
import First from './components/basics/First';
import WithParameters from './components/basics/WithParameters';
import Fragment from './components/basics/Fragment';
import Random from './components/basics/Random';
import Card from './components/layout/Card';
import Family from './components/basics/Family';

export default function App(props) {
    return (
        <div className='app'>
            <h1>React fundamentals</h1>
            <div className="cards">
                <Card title='#05 - Components with children' color='#000'>
                    <Family lastName = 'Paris'></Family>
                </Card>
                
                <Card title='#04 - Challenge Random' color='#000'>
                    <Random vlMin={1} vlMax={100} />
                </Card>

                <Card title='#03 - Fragment' color='#979728'>
                    <Fragment/> 
                </Card>

                <Card title='#02 - Component With Parameters'>
                    <WithParameters 
                        title='Two Component'
                        subtitle='Sub Title'
                    />
                </Card>
                
                <Card title='#01 - First Component'>
                    <First/>
                </Card>
            </div>
        </div>
    )
}