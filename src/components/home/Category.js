import React from "react";
import DesignIcon from '../../assets/icons/design.svg';
import FrontEndIcon from '../../assets/icons/frontend.svg';
import BackendIcon from '../../assets/icons/backend.svg';
import Marketing from '../../assets/icons/marketing.svg';
import '../../styles/category.css';

const Category = ({onCategoryClick}) => {
  return (
  <div className="category">
    <h6 className="category-heading">Filter by Category:</h6>
    <div className="all" onClick={() => onCategoryClick('all')}>
      <h5>All</h5>
    </div>
    <div className='icon-text' onClick={() => onCategoryClick('design')}>
    <img src={DesignIcon} alt='icon' />
      <h5>Design</h5>
    </div>
    <div className='icon-text' onClick={() => onCategoryClick('frontend')}>
      <img src={FrontEndIcon}  alt='icon' />
      <h5>Frontend</h5>
    </div>
    <div className='icon-text' onClick={() => onCategoryClick('backend')} >
      <img  src={BackendIcon} alt='icon' />
      <h5>Backend</h5>
    </div>
    <div className='icon-text' onClick={() => onCategoryClick('marketing')} >
      <img  src={Marketing} alt='icon' />
      <h5>Marketing</h5>
    </div>
  </div>
  )
}

export default Category;