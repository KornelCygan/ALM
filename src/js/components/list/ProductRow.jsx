import React from 'react';

class ProductRow extends React.Component{

    render(){
        return <div>
                    <li className='list-group-item '>
                        <div className='row justify-content-between align-items-center'>
                                <h4 className='col-4'>{this.props.product.producer}</h4>
                                <p className='col-6'>{this.props.product.model}</p>
                                <button type='button' className='btn btn-primary col-2'>{this.props.product.price}</button>
                        </div>


                    </li>
                </div>
    }
}

module.exports = ProductRow;