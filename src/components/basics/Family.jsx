import MemberFamily from './MemberFamily'

export default function Family(props) {
    return (
        <div>
            <MemberFamily 
                name = 'Fran'
                lastName = {props.lastName}
            />
            <MemberFamily
                name = 'Breno'
                lastName = {props.lastName}
            />
            <MemberFamily
                name = 'Lucas'
                lastName = {props.lastName}
            />
        </div>
    )
}