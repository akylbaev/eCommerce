import React, {Component} from 'react'
import ProductContainer from './ProductContainer'
import SideBar from './SideBar'

class Products extends Component{
    render(){
        return(
            <div style={{display: 'flex'}}>
                <SideBar />
                <ProductContainer />
            </div>
        );
    }
}

export default Products;