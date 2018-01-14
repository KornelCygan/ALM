import React from 'react';
import CategoryRow from '../list/CategoryRow.jsx';
import ProductRow from './ProductRow.jsx';

class CameraPr extends React.Component{

    render(){
        return (
            <div className='container'>
                <ul className='list-group'>
                    <CategoryRow category="camera"/>
                    {
                        this.props.products
                            .filter( product =>product.category == 'camera')
                            .map( cameraProduct => <ProductRow product={cameraProduct} key={cameraProduct.id} />)
                    }
                </ul>
            </div>

        );
    }
}

module.exports = CameraPr;