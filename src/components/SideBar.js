import React, {Component} from 'react'

class SideBar extends Component{
    render(){
        return(
            <div style={{display: 'flex', flex: 1, background: '#dadada', height: window.innerHeight-70, overflowY: 'scroll'}}>
                <p>SideBar</p>
            </div>
        );
    }
}

export default SideBar;