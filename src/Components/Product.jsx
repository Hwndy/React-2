import "./ProductList.css"

const Product = (props) =>{
    return(
      <div className={`ProductList ${props.Style}`}>
        <img src= {props.imageUrl} alt=""/>
        <h1>{props.ProductName}</h1>
        <h2>{props.Price}</h2>
        <p>{props.Description}</p>
        
      </div>
  
    );
  };
  
  export default Product;