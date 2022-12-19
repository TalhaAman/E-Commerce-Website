import React,{useState} from "react";
import { useSelector, useDispatch } from "react-redux";

import { updateCartUI, addWorkshopsToCart  } from "../../Redux/cartSlice";
import ProductCard from "../home/ProductCard";
import '../../styles/similarItems.css';

const SimilarItems = ({item}) => {
  const dispatch = useDispatch();
  const {workshopList} = useSelector(state => state.list);
  const [similar, setSimilar] = useState('similar-section');

  const openCart = (item) => {
    dispatch(updateCartUI(true));
    dispatch(addWorkshopsToCart(item));     
 }
  // workshopList.map(product => {
  //   let number = 0;
  //   if(product.category === item.category){
  //     number++;
  //   }
  //   return number <= 1 ? setSimilar('similar-none') : '';
  // })
  
  return (
    <div className={similar}>
        <h2 className="similar-heading">Similar Workshops</h2>
        <div className="similar-item">
          {workshopList.map(product => {
            if(item.category === product.category && item.id != product.id){
            return (
                    <div>
                      <ProductCard item={product} key={product.id} /*onBtnClick={() => openCart(item)}*/ />
                    </div>
                  )
          }
          })}
        </div> 
    </div>
  )
}

export default SimilarItems;