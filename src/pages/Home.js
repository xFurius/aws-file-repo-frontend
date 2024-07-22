import { Authenticator } from "@aws-amplify/ui-react";

import '@aws-amplify/ui-react/styles.css';

export default function Home(){
    return (
        <>
        <div style={{position: "absolute", right: "10%", top: "25%"}}>
            <Authenticator />
        </div>
        
        </>
    );
};