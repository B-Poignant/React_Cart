import React, { Component } from 'react';
import './App.css';

function Product(props) {
  return (
  <li className="media">
      <div class="media-object">
               <a href="https://www.firouza.fr/boutique/creations-joaillerie/tresors-de-venise/boutons-d-oreilles.html">
                <Pictures pictures={props.pictures}/>
				</a>
        </div>
		<div class="media-body">
                        <h3 class="media-heading">{props.title}</h3>
                    
                           
        </div>
      <div className="Product-ToCart">
         <ToCart id={props.id} onClickToCart={props.onClickToCart} />
      </div>
    </li>
	
	
  );
}
function Pictures(props) {
	
	  var picturesList = props.pictures.map(function(url){
                        return <li><img src={url} alt="" title="" class="img img-rounded"/></li>;
                      })

        return  (<ul>{ picturesList }</ul>);

}

function ToCart(props) {
	  
  return (
    <button data-product_id={props.id} className="btn btn-primary" type="button" onClick={props.onClickToCart}>Add to cart</button>
  );
}
function Cart(props) {
	  
  return (
     <div className="Cart">
	 {props.products.length}
	 </div>
  );
}

class App extends Component {
	 constructor(props) {
    super(props);
    this.handleClickToCart = this.handleClickToCart.bind(this);
    this.state = {products: []};
  }

 handleClickToCart(e) {
	 let product_id = e.target.dataset.product_id;
	 if(this.state.products.indexOf(product_id)<0){
	 
		this.setState((state, props) => {
		  return {counter: state.products.push(product_id)};
		});
	 }
  }
  
  render() {
    const products = this.state.products;
    return (
      <div>
       
   
<Cart products={products} />

<h1 className="view-title">Amazing Shop</h1>
<ul className="media-list media-thumbnails">    
	<Product id="test1" title="qdsds" pictures={['https://images.pexels.com/photos/104842/bmw-vehicle-ride-bike-104842.jpeg?auto=compress&cs=tinysrgb&w=250']} onClickToCart = { this.handleClickToCart }/>
	<Product id="test2" title="qdsds" pictures={['https://images.pexels.com/photos/301584/pexels-photo-301584.jpeg?auto=compress&cs=tinysrgb&w=250']} onClickToCart = { this.handleClickToCart }/>
</ul>
      </div>
    );
  }
}

export default App;
