import DirectSon from "./DirectSon";

export default function DirectFather(){
    return(
        <div>
            <DirectSon name='Ana' age={22} geek={false}></DirectSon>
            <DirectSon name='Ivy' age={26} geek={true}></DirectSon>
        </div>
    );
}