
import If from './If'
export default function UserInfo(props){
    const user = props.user || {};
    return (
        <div>
            <If test = {user && user.name}>
                Welcome {user.name}
            </If>
        </div>
    );
};