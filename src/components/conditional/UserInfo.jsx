import If, { Else } from './If'

export default function UserInfo(props){
    const user = props.user || {};
    return (
        <div>
            {/* <If test = {user && user.name}>
                Welcome {user.name}
            </If>
            <If test = {!user && !user.name}>
                Welcome Brother
            </If>
            <If test = {!user && !user.name}>
                Welcome Brother
            </If> */}

            <If test = {user && user.name}>
                Welcome {user.name}
                <Else>
                    Welcome Brother
                </Else>
            </If>
            
        </div>
    );
};