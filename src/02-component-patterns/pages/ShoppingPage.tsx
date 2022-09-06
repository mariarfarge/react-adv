// import { ProductButtons } from "../components/ProductButtons"
// import { ProductCard } from "../components/ProductCard"
// import { ProductImage } from "../components/ProductImage"
// import { ProductTitle } from "../components/ProductTitle"

import ProductCard, { ProductButtons, ProductImage, ProductTitle } from "../components"

const product = {
  id: '1',
  title: 'Cofee Mug - Card',
  img: './coffee-mug.png'
}


export const ShoppingPage = () => {
  
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
          <ProductCard product={ product }>
            <ProductCard.Image img={ product.img } />
            <ProductCard.Title title="hello world"/>
            <ProductCard.Buttons  />
          </ProductCard>

          <ProductCard product={ product }>
            <ProductImage img={ product.img } />
            <ProductTitle />
            <ProductButtons />
          </ProductCard>
        </div>
    </div>
  )
}
