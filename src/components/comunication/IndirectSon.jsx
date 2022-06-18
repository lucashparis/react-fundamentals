
export default function IndirectSon(props){
    const min = 40;
    const max = 80;
    const randomAge = () => parseInt(Math.random() * (max - min)) + min
    const randomGeek = () => Math.random() > 0.5
    return(
        <div>
           <div>Son</div> 
           <button onClick={(e) => {
                props.fun('João', randomAge(), randomGeek())
           }}>Provide information</button>
        </div>
    );
}