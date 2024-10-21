import Product from './Product';
import './Product.css'
import './ProductList.css'
// import ImageUrl from '../Components/Images/ImageUrl.url'


const ProductList = () => {
  
    return (
      <div className="Cards">
        <div className="flex1">
            <Product imageUrl='https://images.app.goo.gl/yg4aB3KKc2jEp5qX9' ProductName= "Sulaimon Ibrahim" Price= "30" Description= "U.S.A" Style= "a"/>  
        <Product ImageUrl= "" ProductName= "Sulaimon Ibrahim" Price= "40" Description= "U.K.A" Style= "b"/>
        <Product ImageUrl= "" ProductName= "Sulaimon Ibrahim" Price= "50" Description= "U.H.A" Style= "c"/>
        </div>
        <hr />
      <div className="flex2">
        <Product ImageUrl= "" ProductName= "Sulaimon Ibrahim" Price= "60" Description= "U.N.A" Style= "d"/>
        <Product ImageUrl= "" ProductName= "Sulaimon Ibrahim" Price= "70" Description= "U.B.A" Style= "e"/>
        <Product ImageUrl= "" ProductName= "Sulaimon Ibrahim" Price= "80" Description= "U.R.A" Style= "f"/>
        
      </div>   
      </div>
    );
  };
  
  export default ProductList;