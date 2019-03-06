import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'

class Header extends Component{
    render(){
        return(
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', background: '#282c34', height: 70}}>
                <NavLink to='/' style={{textDecoration: 'none', fontSize: 20, color: '#fff'}}>Shop</NavLink>
                <div style={{width: 1, height: 40, background: '#fff', marginLeft: 20, marginRight: 20}}/>
                <NavLink to='/Cart' style={{textDecoration: 'none', fontSize: 20, color: '#fff'}}>Cart</NavLink>
            </div>
        );
    }
}

export default Header;