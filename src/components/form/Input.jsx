import { useState } from "react";

export default function Input(){

    const [value, setValue] = useState('initial');

    function whenChanged(e) {
        setValue(e.target.value);
    }
    
    return(
        <div>
            <h2>{value}</h2>
            <div style={{
                display: 'flex',
                flexDirection: 'column'
            }}>
                <input value={value} onChange={whenChanged} />
                <input value={value} readOnly />
                <input value={undefined} />
            </div>
        </div>
    );
}