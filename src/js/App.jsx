import React from 'react';
import ReactDOM from 'react-dom';
import Template from './components/template/Template.jsx';
import Main from './components/template/Main.jsx';
import AllProductsTable from './components/list/AllProductsTable.jsx';
import NotFound from './components/fails/NotFound.jsx'

// import CameraPr from './components/list/CameraPr.jsx';
// import TvPr from './components/list/TvPr.jsx';
// import LaptopPr from './components/list/LaptopPr.jsx';


import	{	Router,
    Route,
    Link,
    IndexLink,
    IndexRoute,
    hashHistory
}	from	'react-router';

class App extends React.Component {
    render() {
        return (
            <Router history={hashHistory}>
                <Route path='/' component={Template}>
                    <IndexRoute component={Main} />

                    <Route path='/products' component={AllProductsTable}>
                        {/*<Route path='/products/camera' component={CameraPr} />*/}
                        {/*<Route path='/products/tv' component={TvPr} />*/}
                        {/*<Route path='/products/laptop' component={LaptopPr} />*/}
                    </Route>
                    <Route	path='*' component={NotFound} />
                </Route>
            </Router>
        )
    }
}

document.addEventListener('DOMContentLoaded', function(){

    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    );

});
