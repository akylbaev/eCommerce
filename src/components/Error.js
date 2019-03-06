import React, {Component} from 'react'

class Error extends Component{
    render(){
        return(
            <div style={{display: 'flex', flexGrow: 1, height: window.innerHeight-70,alignItems: 'center', justifyContent: 'center', fontSize: 40, fontWeight: 'bold', color: '#282c34'}}>
                404 Page Not Found!
            </div>
        );
    }
}

export default Error;