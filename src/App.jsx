import './App.css'
import React from 'react';
import First from './components/basics/First';
import WithParameters from './components/basics/WithParameters';
import Fragment from './components/basics/Fragment';
import Random from './components/basics/Random';
import Card from './components/layout/Card';
import Family from './components/basics/Family';
import MemberFamily from './components/basics/MemberFamily';
import ListStudents from './components/repeat/ListStudents';
import ListProducts from './components/repeat/ProductsTable';
import EvenOrOdd from './components/conditional/EvenOrOdd';
import UserInfo from './components/conditional/UserInfo';

export default function App(props) {
    return (
        <div className='app'>
            <h1>React fundamentals</h1>

            <div className="cards">
                
                <Card title='#08 - Conditional Rendering' color='#000'>
                    <EvenOrOdd number={20}></EvenOrOdd>
                    <UserInfo user={{name: 'Lucas'}}></UserInfo>
                </Card>

                <Card title='#07 - Repeat Products' color='#000'>
                    <ListProducts></ListProducts>
                </Card>
                
                <Card title='#06 - Repeat Students' color='#000'>
                    <ListStudents></ListStudents>
                </Card>

                <Card title='#05 - Components with children' color='#000'>
                    <Family lastName = 'Paris'>
                        <MemberFamily name='Fran'></MemberFamily>
                        <MemberFamily name='Loh'></MemberFamily>
                        <MemberFamily name='Luh'></MemberFamily>
                    </Family>
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