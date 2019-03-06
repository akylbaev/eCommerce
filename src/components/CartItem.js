import React, { Component } from 'react'

class CartItem extends Component {
    render() {
        return (
            <div style={{display: 'flex', width: window.innerWidth*0.7,  alignItems: 'center', color: '#555', fontSize: 18, fontWeight: 'bold'}} key={this.props.key}>
                <p style={{ marginLeft: 30, flex: 1 }}>1</p>
                <div style={{ display: 'flex', fontSize: 14, fontWeight: '500', flex: 5, alignItems: 'center' }}>
                    <img src="https://cf4.s3.souqcdn.com/item/2017/10/23/26/94/17/69/item_XL_26941769_55971083.jpg" style={{ width: 50, height: 50 }} alt='iphone X' />
                    <p style={{ marginLeft: 20 }}>{this.props.title}</p>
                </div>
                <p style={{flex: 2}}>{this.props.price} tg</p>
                <div style={{ flex: 2, display: 'flex', alignItems: 'center' }}>
                    <button style={{ display: 'flex', width: 25, height: 25, borderRadius: 4, background: '#fff', alignItems: 'center', justifyContent: 'center' }} onClick={this.props.minus}>-</button>
                    <p style={{ margin: 10 }}>{this.props.quantity}</p>
                    <button style={{ display: 'flex', width: 25, height: 25, borderRadius: 4, background: '#fff', alignItems: 'center', justifyContent: 'center' }} onClick={this.props.plus}>+</button>
                </div>
                <div style={{ marginRight: 30, flex: 1, alignItems: 'center' }}>
                    <button style={{ display: 'flex', width: 80, height: 30, borderRadius: 5, background: 'red', alignItems: 'center', justifyContent: 'center', fontSize: 14, color: '#fff' }}onClick={this.props.remove}>Remove</button>
                </div>
            </div>
        );
    }
}

export default CartItem;