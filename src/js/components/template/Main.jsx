import React from 'react';
import ProductsData from '../../model/ProductsData.jsx';
import AllProductsTable from '../list/AllProductsTable.jsx';
import SearchBar from '../search/SearchBar.jsx';

import NotFound from '../fails/NotFound.jsx'

class Main extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            products: null,
            filters: {
                q: false,
                category: null
            },
            reloadData: true //właściwość do zabezpieczenie przed przeładowywaniem danych w nieskończoność (patrz. metoda componentDidUpdate)
        }
    }

    handleFilterQuery = (event) => {
        this.state.filters.q = (event.target.value.length)?event.target.value:false;

        this.setState( {
            filters: this.state.filters,
            reloadData: true
        });
    }

    handleFilterCategory = (event) => {
        if(event.target.value){
            this.state.filters.category = event.target.value;

            this.setState( {
                filters: this.state.filters,
                reloadData: true
            });
        }

    }



    prepareFilters(){
        let filters = [];

        for (let key in this.state.filters){
            // console.log(key);//nazwa właściwości z obiektu
            // console.log(this.state.filters[key]); //pobranie wartości dla ww. właściwości (key)
            if (this.state.filters[key]){
                filters.push( key+'='+this.state.filters[key]); //q=Fi
            }
        }

        return filters;
    }

    componentDidMount(){

        ProductsData.loadAll( this.prepareFilters() , (products) => {
            this.setState({ products: products });
        })
    }

    componentDidUpdate(){

        if(this.state.reloadData) { //zabezpieczenie przed wykonaniem w nieskończoność - wewnętrzna rekurencja
            ProductsData.loadAll(this.prepareFilters(), (products) => {
                this.setState({products: products, reloadData: false});
            })
        }
    }

    render(){
        if(this.state.products === null) return null;

        return (
                   <section className='container'>
                       <SearchBar parentThis={this} updateSearchQuery={this.handleFilterQuery} updateCategory={this.handleFilterCategory} />
                       <AllProductsTable products={this.state.products} />

                   </section>
                );
    }

}

module.exports = Main;