import React, { Component } from 'react'
import { connect } from 'react-redux'
import Item from './Item'
import { addToCart } from '../actions/cartActions'

class ProductContainer extends Component {

    handeAddItem = (id) => {
        this.props.addToCart(id)
    }

    render() {
        return (
            <div style={{ display: 'flex', flex: 4, height: window.innerHeight - 70, overflowY: 'scroll', flexWrap: 'wrap', paddingLeft: 20, paddingRight: 20 }}>
                {this.props.items.map(item => {
                    return (
                        <Item key={item.id} img={item.img} title={item.title} price={item.price} button={() => { this.handeAddItem(item.id) }} />
                    )
                })}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.items
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (id) => { dispatch(addToCart(id)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductContainer);