import React from 'react';
import CategoryRow from '../list/CategoryRow.jsx';
import ProductRow from './ProductRow.jsx';

class TvPr extends React.Component{

    render(){
        return (
            <div className='container'>
                <ul className='list-group'>
                    <CategoryRow category="tv"/>
                    {
                        this.props.products
                            .filter( product =>product.category == 'tv')
                            .map( tvProduct => <ProductRow product={tvProduct} key={tvProduct.id}/>)
                    }
                </ul>
            </div>

        );
    }
}

module.exports = TvPr;