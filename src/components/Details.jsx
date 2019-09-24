import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { ButtonContainer } from './Button';

class Details extends Component {
  constructor(props) {
    super(props);

    this.state = {
      detailProduct: !!this.props.location.state ? this.props.location.state.product : undefined,
      productId:  this.props.match.params.id
    }

    this.showComponent = this.showComponent.bind(this);
  }

  componentDidMount() {
    console.log("did mount: " + !!this.state.detailProduct);
    console.log(this.state.detailProduct);
  }

  showComponent() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto text-center my-3">
            <h1>{ this.state.detailProduct.shortDescription || this.state.detailProduct.name}</h1>
          </div>
        </div>

        <div className="row">
          <div className="col-10 mx-auto col-md-6 my-3">
            <img src={ this.state.detailProduct.fullImage} alt={ this.state.detailProduct.name} className="img-fluid" />
          </div>

          <div className="col-10 mx-auto col-md-6 my-3">
            <h3>{this.state.detailProduct.name}</h3>
            <h6>Precio Normal: <strong> $ <span>{this.state.detailProduct.prices.listPrice}</span> </strong></h6>
            <h6>Precio Oferta: <strong> $ <span>{this.state.detailProduct.prices.offerPrice}</span> </strong></h6>
            <p className="mt-3 mb-0">
              {this.state.detailProduct.attributes.map((atributo, index) =>
                <p key={index}><strong>{atributo.name} : </strong>{atributo.value}></p>
              )}
            </p>
            <p className="text-muted">clase mute {this.state.detailProduct.name}</p>

            <div className="">
              <Link to="/">
                <ButtonContainer>
                  Volver
                </ButtonContainer>
                </Link>
            </div>
          </div>
        </div>
      </div>
      )
  }

  render() {
    if (!!!this.state.detailProduct) {
      return (<span>cargando...</span>)
    }
    return this.showComponent();
  }
}

export default Details;