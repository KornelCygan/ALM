import React from 'react';

class CategoryRow extends React.Component{

    render(){
        return <li className='list-group-item active'>{this.props.category}</li>

    }
}

module.exports = CategoryRow;