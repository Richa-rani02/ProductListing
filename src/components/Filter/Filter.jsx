import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { sortByCategory, clearAll } from "../../redux/productSlice";
import "./Filter.css";
export const Filter = () => {
  let { productList, filters } = useSelector((state) => state.product);
  const uniqueCategory = [...new Set(productList.map(item => item.category))];
  const dispatch = useDispatch();
  const changeHandler = (e) => {
    dispatch(sortByCategory(e.target.value));
  }

  const ClearHandler = () => {
    dispatch(clearAll());
  }
  return (
    <section>
      {uniqueCategory.map((item,index) => (
        <>
          <input key={index} type="checkbox" id={item} name={item} value={item} className="checkbox" onChange={changeHandler} checked={filters.includes(item.toLowerCase())} />
          <label for={item}>{item}</label>
        </>

      ))}
      <button className='clear-btn' onClick={ClearHandler}>clear All</button>
    </section>
  )
}
