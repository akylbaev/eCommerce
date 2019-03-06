import React, { Component } from 'react'
import { connect } from 'react-redux'
import CartItem from './CartItem'
import { removeFromCart, plusQuantity, minusQuantity } from '../actions/cartActions'


class Cart extends Component {

    handleRemoveItem = (id) => {
        this.props.removeFromCart(id)
        console.log('remove')
    }
    handlePlus = (id) => {
        this.props.plusQuantity(id)
        console.log('+')
    }
    handleMinus = (id) => {
        this.props.minusQuantity(id)
        console.log('-')
    }

    render() {
        return (
            <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>

                <div style={{ display: 'flex', width: window.innerWidth * 0.7, height: 70, background: '#dadada', marginTop: 30, alignItems: 'center', color: '#555', fontSize: 18, fontWeight: 'bold' }}>
                    <p style={{ flex: 1, marginLeft: 30 }}>#</p>
                    <p style={{ flex: 5 }}>Product</p>
                    <p style={{ flex: 2 }}>Price</p>
                    <p style={{ flex: 2 }}>Quantity</p>
                    <p style={{ flex: 1, marginRight: 30 }}>Remove</p>
                </div>

                <div style={{ width: window.innerWidth * 0.7, background: '#dadada', marginTop: 5 }}>
                    {
                        this.props.items.map(item => {
                            return (
                                <CartItem key={item.id} title={item.title} price={item.price} quantity={item.quantity} plus={()=>{this.handlePlus(item.id)}} minus={()=>{this.handleMinus(item.id)}} remove={()=>{this.handleRemoveItem(item.id)}}/>
                            )
                        })
                    }
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', width: window.innerWidth * 0.7, background: '#dadada', marginTop: 5, height: 70, alignItems: 'center' }}>
                    <p style={{ marginLeft: 30, fontSize: 16, fontWeight: '600' }}>Sum: {this.props.total} tg</p>
                    <div style={{ display: 'flex', width: 120, height: 40, borderRadius: 5, background: '#61dafb', alignItems: 'center', justifyContent: 'center', fontSize: 16, color: '#fff', fontWeight: '600', marginRight: 30 }}>Pay Order</div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.addedItems,
        total: state.total
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeFromCart: (id) => { dispatch(removeFromCart(id)) },
        plusQuantity: (id) => { dispatch(plusQuantity(id)) },
        minusQuantity: (id) => { dispatch(minusQuantity(id)) },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);