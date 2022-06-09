export default function Random(props) {
    const {vlMin, vlMax} = props
    const vlRandom = parseInt(Math.floor(Math.random() * (vlMax - vlMin + 1)) + vlMin);

    return (
        <div>
            <h1>Number Random</h1>
            <p>Number Min: {vlMin}</p>
            <p>Number Max: {vlMax}</p> 
            <p>Number Random is: {vlRandom} </p>
        </div>
    )
}