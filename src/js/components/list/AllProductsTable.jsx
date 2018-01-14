import React from 'react';
import CategoryRow from '../list/CategoryRow.jsx';
import ProductRow from './ProductRow.jsx';

class AllProductsTable extends React.Component{

    render(){
        return (
            <div>
                    <ul className='list-group'>
                        <CategoryRow category="camera"/>
                        {
                            this.props.products
                                .filter( product =>product.category == 'camera')
                                .map( cameraProduct => <ProductRow product={cameraProduct} key={cameraProduct.id} />)
                        }
                        <CategoryRow category="tv"/>
                        {
                            this.props.products
                                .filter( product =>product.category == 'tv')
                                .map( tvProduct => <ProductRow product={tvProduct} key={tvProduct.id}/>)
                        }
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

module.exports = AllProductsTable;