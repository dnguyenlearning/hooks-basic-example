import {CountProvider} from "./count/counterContext";
import {UserProvider} from "./user/userContext";
import React from 'react';
export default function WrapperProvider(props){
    return (
        <React.Fragment>
            <UserProvider>
                <CountProvider>
                    {props.children}
                </CountProvider>
            </UserProvider>
        </React.Fragment>
    )
}