import React from 'react';

class SearchBar extends React.Component{

    render(){
        return (
            <section className="container search">
                <div className='row  justify-content-around'>
                    <input className='col-4' type="text" placeholder="Search" onChange={this.props.updateSearchQuery}/>

                    <select className='custom-select col-4' onChange={this.props.updateCategory}>
                        <option>Choose category</option>
                        <option value="camera">Cameras</option>
                        <option value="tv">TV`s</option>
                        <option value="laptop">Laptops</option>
                    </select>
                </div>

            </section>


        )
    }
}

module.exports = SearchBar;