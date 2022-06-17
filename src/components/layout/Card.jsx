import './Card.css';

export default function Card(props) {
    
    const styleCard = {
        backgroundColor: props.color || '#F00',
        borderColor: props.color || '#F00'
    }
    
    return (
        <div className='card' style={styleCard}>
            <div className='title'>{props.title}</div>
            <div className='content'>{props.children}</div>
        </div>
    )
}