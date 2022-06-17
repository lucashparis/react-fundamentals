export default function EvenOrOdd(props){
    
    const isEven = props.number % 2 === 0

    return (
        <div>
            { isEven ? <span>Even</span> : <span>Odd</span> }
        </div>
    );
};