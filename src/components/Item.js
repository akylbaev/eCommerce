import React, { Component } from 'react'

class Item extends Component {
    
    render() {
        return (
            <div style={{ display: 'flex', flexDirection: 'column', width: 150, height: 240, boxShadow: '3px 3px 10px #dadada', marginTop: 20, marginLeft: 10, marginRight: 10}} key={this.props.key}>
                <img src={this.props.img} style={{ width: 150, height: 150 }} alt={this.props.title} />
                <div style={{ width: 150, height: 40 }}>
                    <p style={{ fontSize: 12, textAlign: 'center' }}>{this.props.title}</p>
                </div>
                <div style={{display: 'flex', width: 150, height: 20, justifyContent: 'center', alignItems: 'center' }}>
                    <p style={{ fontSize: 10, textAlign: 'center' }}>{this.props.price} ₸</p>
                </div>
                <button style={{ width: 150, height: 30, background: '#61dafb', color: '#282c34', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, fontWeight: '600' }} onClick={this.props.button}>Add to cart</button>
            </div>
        );
    }
}

export default Item;