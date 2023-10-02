import { IFormData } from "../Form/Form";
import React from 'react';

interface IItemProps {
    item: IFormData,
    handleDelete: (el: IFormData) => void
}


export default function Item( {item, handleDelete}: IItemProps) {
    return (
      <div className="item">
        <span className="date">{item.date}</span>
        <span className="distance">{item.distance}</span>
        <button className="btn_delete" onClick={()=> handleDelete(item)}>X</button>
      </div>
    )
    
}