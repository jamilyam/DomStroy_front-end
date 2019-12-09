import React from 'react';
import './ShoppingCart.scss';
import { withRouter } from "react-router-dom";

export class ShoppingCart extends React.Component {
  render() {
    return
  }
}

//   constructor(props) {
//     super(props);
//     this.state = {
//       product: null
//     }
//   }
//
//   async componentDidMount() {
//     const productId = this.props.match.params.productId;
//     const response = await fetch(`http://localhost:3000/products/${productId}`);
//     const product = await response.json();
//
//     debugger;
//     this.setState({
//       product: product
//     });
//   }
// }

export default withRouter(ShoppingCart);


// //create a stateless component to display the shopping cart items
// export const ShoppingCart = (props) => {
//   //if the shopping cart has no items, let user know the cart is empty.
//   if (props.products.length === 0) {
//     return (
//       <div className="EmptyCart">
//         <header/>
//         Корзина пуста
//       </div>)
//   } else{
//     return (
//       <div className="shoppingCart" id="shoppingCartScroll" onClick={(e) => props.lockScroll(e)}>
//         <header/>
//         <ProductDisplay removeItem={props.removeItem} productUpdate={props.productUpdate} items={props.products} checkout={props.checkout} ppPrices={props.ppPrices} mgmPrices={props.mgmPrices} />
//       </div>)
//   };
// }
//
// class Quantity extends React.Component {
//   constructor(props){
//     super(props)
//     this.state = {
//       quantity: this.props.quantity,
//     }
//     this.handleQuantityChange = this.handleQuantityChange.bind(this);
//   }
//
//   handleQuantityChange = async (e) => {
//     const userInput = e.target.value;
//     await this.setState({quantity: userInput})
//     this.props.quantityCallBack(this.state.quantity)
//   }
//
//   render(){
//     return(
//       <td>
//         <input
//           name="number"
//           type="number"
//           value={this.state.quantity}
//           onChange={this.handleQuantityChange}
//           max="10"
//           min="1"/>
//       </td>
//     )
//   }
// }
// //A function to display all the cart items the user selected and allow them to change type, size, and quantity
// class ProductDisplay extends React.Component {
//   constructor(props) {
//     super(props);
//     this.productUpdate = this.productUpdate.bind(this)
//     this.state = {
//       products: []
//     }
//   }
//
//   async componentDidMount() {
//
//     const response = await fetch("http://localhost:3000/products");
//     const products = await response.json();
//     this.setState( {
//       products: products
//     });
//   }
//
//
//   //update products upon any change.
//   productUpdate = (quantity, index) => {
//     this.props.productUpdate(quantity, index);
//   }
//
//   //simple render function
//   render() {
//     return (
//       <div className="cartList">
//         {this.props.products.map((product, index)=>
//           <Display item={product} removeItem={this.props.removeItem} index={index} key={index} productUpdate={this.productUpdate} ppPrices={this.props.ppPrices} mgmPrices={this.props.mgmPrices} />
//         )}
//         <div className="checkoutButton" onClick={(e) => this.props.checkout()}>Checkout</div>
//       </div>
//     )
//   }
// }
// //component that handles the display of each individual product
// class Display extends React.Component{
//   //will update size, type and quantity in this component, then send values to parent product display
//   constructor(props) {
//     super(props);
//     this.state = {
//       quantity: this.props.product.order.quantity
//     }
//     this.quantityCallBack = this.quantityCallBack.bind(this);
//   }
//
// //get quantity from child, then send to parent(ProductDisplay)
//   quantityCallBack = (changedQuantity) => {
//     this.setState({
//       quantity: changedQuantity,
//       total: this.state.price*changedQuantity
//     })
//     this.props.productUpdate(this.state.quantity, this.props.index)
//   }
//
//   render() {
//     return (
//       <div key={this.props.index} className="CartItem">
//         <figure>
//           <img src={this.props.product.image.src} alt={this.props.product.image.name} id={this.props.index} />
//           <figcaption onClick={(e) => this.removeItem(this.props.index)}>удалить</figcaption>
//         </figure>
//         <form>
//           <table className="ContentInformation"><tbody>
//           <tr>
//             <td><b>Image Description: </b></td>
//             <td>{this.props.product.image.description}</td>
//           </tr>
//           <tr>
//             <td><b>Quantity:</b></td>
//             <Quantity quantityCallBack={this.quantityCallBack} quantity={this.state.quantity} />
//           </tr>
//           <tr>
//             <td><b>Price Per:</b></td>
//             <td>${this.state.product.price}.00</td>
//           </tr>
//           <tr>
//             <td><b>Total:</b></td>
//             <td>${this.state.total}.00</td>
//           </tr>
//           </tbody></table>
//         </form>
//       </div>
//     )
//   }
// }
//
//
