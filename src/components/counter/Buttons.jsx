export default function Buttons(props){
    
    return (
        <div>
            <button onClick={props.dec}> - </button>
            <button onClick={props.inc}> + </button>
        </div>
    );
};