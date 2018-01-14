import React from 'react';
import CategoryRow from '../list/CategoryRow.jsx';
import ProductRow from './ProductRow.jsx';

class LaptopPr extends React.Component{

    render(){
        return (
            <div className='container'>
                <ul className='list-group'>
                    <CategoryRow category="laptop"/>
                    {
                        this.props.products
                            .filter( product => product.category == 'laptop')
                            .map( laptopProduct => <ProductRow product={laptopProduct} key={laptopProduct.id}/>)
                    }
                </ul>
            </div>

        );
    }
}

module.exports = LaptopPr;