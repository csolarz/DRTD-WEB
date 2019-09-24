import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

class Product extends Component {
	render() {
		return (
			<ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3">
				<div className="card mb-3">
						{
							
								<div
									className="img-container p-5"
									onClick={() => { /* value.handleDetail(this.props.product.uniqueID) */ }}
								>
								<Link to={{
									pathname: `/productos/${this.props.product.uniqueID}`,
									state: {
										product: this.props.product,
									}
								}}>
									<img src={this.props.product.fullImage} alt={this.props.product.name} className="card-img-top" />
								</Link>
							</div>
						}

					{/* Card footer */}
					<div className="card-footer d-flex justify-content-between">
						<p className="align-self-center mb-0">{this.props.product.shortDescription || this.props.product.name}</p>
						<h6 className="mb-0">
							<span className="mr-1">CLP</span>
							{this.props.product.prices.listPrice}
						</h6>
					</div>
				</div>
			</ProductWrapper>
		);
	}
}

// Set up PropTypes to check for propTypes and make them required
Product.propTypes = {
	product: PropTypes.shape({
		id: PropTypes.number,
		img: PropTypes.string,
		title: PropTypes.string,
		prices: PropTypes.object
	})
};

const ProductWrapper = styled.div`
	.card {
		border-radius: 0;
		border-color: transparent;
		transition: all .25s linear;
	}
	.card-footer {
		border-top: transparent;
		background: transparent;
		transition: all .25s linear;
	}
	&:hover {
		.card {
			border: 0.04rem solid rgba(247, 247, 247);
			box-shadow: 2px 2px 5px 0 rgba(0, 0, 0, 0.2);
		}
		.card-footer {
			background: rgba(247, 247, 247);
		}
	}
	.img-container {
		position: relative;
		overflow: hidden;
	}
	.img-container:hover .card-img-top {
		transform: scale(1.2);
	}
	.card-img-top {
		transition: all .25s linear;
	}
`;

export default Product;