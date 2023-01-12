import { useState } from "react";
import ProductCard, { ProductButtons, ProductImage, ProductTitle } from "../components"
import { products } from "../data/products";
import { useShoppingCart } from "../hooks/useShoppingCart";
import { Product, ProductInCart } from "../interfaces/interfaces";
import '../styles/custom-styles.css';

// extender el objeto como extender una clase

export const ShoppingPage = () => {
  
  const {shoppingCart, onProductCountChange} = useShoppingCart();
  
  return (
    <div>
        <h1>
            Shopping Store
        </h1>
        <hr />
        <div style={{
          display:'flex',
          flexDirection:'row',
          flexWrap:'wrap'
        }}>
          {
            products.map( product => (
              <ProductCard 
                product={ product }
                className="bg-dark text-white"
                key={ product.id }
                onChange={ onProductCountChange }
                value= { shoppingCart[product.id]?.count }
              >
                <ProductImage
                  img={ product.img } 
                  className="custom-image"
                  style={{
                    boxShadow: '10px 10px 10px rgba(0,0,0,0.2)'
                  }}
                />
                <ProductTitle className="text-bold" />
                <ProductButtons className="custom-buttons" />
              </ProductCard>
            ))
          }
        </div>

        <div className="shopping-cart">
          {
            Object.entries(shoppingCart).map(([key, ProductInCart]) => {
              return (<ProductCard 
                key = { key }
                product={ ProductInCart }
                className="bg-dark text-white"
                style={{
                  width: '100px',
                }}
                onChange={ onProductCountChange }
                value= { ProductInCart.count }
              >
                <ProductImage
                  img={ ProductInCart.img } 
                  className="custom-image"
                  style={{
                    boxShadow: '10px 10px 10px rgba(0,0,0,0.2)'
                  }}
                />
                <ProductButtons
                  className="custom-buttons"
                  style={{
                    display: 'flex',
                    justifyContent: 'center'
                  }}
                   />
              </ProductCard>)
            }) 
          }
        </div>
        <div>
          <code> 
            {JSON.stringify(shoppingCart, null, 5)}
          </code>
        </div>
    </div>
  )
}
