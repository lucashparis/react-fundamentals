import { useState } from "react";
import './Mega.css';

export default function Mega(props){
    
    function generateUncontainedNumbers(min, max, array) {
        const random = parseInt(Math.random() * (max + 1 - min)) + min
        return array.includes(random) ?
            generateUncontainedNumbers(min, max, array) :
            random
    }
    
    function generateNumbers(qtd) {
        const numbers =  Array(qtd)
            .fill(0)
            .reduce((nums) => {
                const newNumber = generateUncontainedNumbers(1, 60, nums)
                return [...nums, newNumber]
            }, [])
            .sort((n1, n2) => n1 - n2);
        
        return numbers;
    }
    
    const [qtd, setQtd] = useState(props.qtd || 6);
    const numbersInit = Array(qtd).fill(0);
    const [numbers, setNumbers] = useState(numbersInit);
    
    return (
        <div className="Mega">
           <h2>Mega</h2>
           <h3>{numbers.join(' ')}</h3>
           <div>
            <label>Qtd Numbers</label>
            <input
                min='5'
                max='12'
                type="number" 
                values={qtd} 
                onChange={(e)=> {
                    setQtd(+e.target.value)
                    setNumbers(generateNumbers(+e.target.value))
                }}
            />
           </div>
           <button onClick={() => setNumbers(generateNumbers(qtd))}>Generate Numbers</button>
        </div>
    );
};