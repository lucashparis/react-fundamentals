export default function DirectSon(props){
    return(
        <div>
            <span>{props.name}</span>
            <span>{props.age}</span>
            <span>{props.geek ? 'True' : 'False'}</span>
        </div>
    );
}