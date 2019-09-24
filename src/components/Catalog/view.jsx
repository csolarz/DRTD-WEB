import React, { Component, Fragment } from 'react'
import { connect } from "react-redux";
import Product from './product';
import Title from '../Title';

class Catalog extends Component {

    render() {
        return(
            <Fragment>
                <div className="container">
                    <div className="row">
                        <Title title="Productos"/>
                    </div>
                    <div className="row">
                            {
                                this.props.productos.map( product => {
                                    return <Product 
                                        key={product.uniqueID} 
                                        product={product} />
                                    })
                            }
                    </div>
                </div>
            </Fragment>
        )
    }
}

const mapStateToProps = rootState => {
    return {
      nombre: rootState.main.nombre,
      productos: rootState.catalog.productos
    };
  };
  
const mapDispatchToProps = (dispatch) => ({
dispatch: (action) => { dispatch(action); },
});
  
export default connect(mapStateToProps, mapDispatchToProps)(Catalog);
