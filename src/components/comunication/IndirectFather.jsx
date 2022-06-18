import { useState } from "react";
import IndirectSon from "./IndirectSon";

export default function IndirectFather(){

    const [name, setName] = useState('?');
    let [age, setAge] = useState(0);
    let [geek, setGreek] = useState(false);

    function infoFather(name, age, geek) {
        setName(name);
        setAge(age);
        setGreek(geek);
    }

    return(
        <div>
            <span>{name} </span>      
            <span>{age} </span>      
            <span>{geek ? 'true' : 'false'}</span>      
            <IndirectSon fun={infoFather}></IndirectSon> 
        </div>
    );
}