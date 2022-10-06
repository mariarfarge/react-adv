import ProductCard, { ProductButtons, ProductImage, ProductTitle } from "../components"
import '../styles/custom-styles.css';

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
          <ProductCard product={ product } className="bg-dark text-white">
            <ProductCard.Image img={ product.img } className="custom-image" />
            <ProductCard.Title title="hello world" className="text-bold" />
            <ProductCard.Buttons className="custom-buttons" />
          </ProductCard>

          <ProductCard 
            product={ product }
            className="bg-dark text-white"
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

          <ProductCard 
            product={ product }
            style={{
              backgroundColor: '#70D1F8',
              color: 'black',
            }}
          >
            <ProductImage 
              img={ product.img } 
              style= {{
                  // padding: '20px',
                  // width: 'calc( 100% - 40px)',
                  // borderRadius: '25px',
                  boxShadow: '10px 10px 10px rgba(0,0,0,0.2)'
              }}
            />
            <ProductTitle 
              title="New Mug"
              style={{
                fontWeight: 'bold'
              }}
            />
            <ProductButtons 
              style={{
                display: 'flex',
                justifyContent: 'end'
              }}
            />
          </ProductCard>
        </div>
    </div>
  )
}
