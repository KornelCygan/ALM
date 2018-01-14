class ProductsData{

    static loadAll( filtersArr, callback ){

        let url = 'http://localhost:3000/products';
        if(filtersArr.length) {
            let filters = filtersArr.reduce((prev, curr) => prev + '&' + curr);
            if (filters.length) {
                url += '?' + filters;
            }
        }

        fetch(url)
            .then( resp => resp.json())
            .then( data => callback(data) )  //dopiero w momencie wywołania mówię co będzie się działo  z tymi danymi np. Products.loadAll( [], (products) => this.setState({products} );
            .catch( e => console.log('catch', e) );
    }

}

module.exports = ProductsData;