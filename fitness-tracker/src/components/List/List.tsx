import { IFormData } from "../Form/Form";
import Item from "../Item/Item";
import React from "react";

interface IListProps {
  list: IFormData[];
  handleDelete: (el: IFormData) => void;
}

export default function List({ list, handleDelete }: IListProps) {
  return (
    <>
    <div className="titles">
          <span className="title_item">
              Дата (ДД.ММ.ГГ)
          </span>
          <span className="title_item">
              Пройдено км
          </span>
          <span className="title_item">
              Действия
          </span>
      </div>
      <div className="list">
              {list.map((el) => (
                  <Item key={el.id} item={el} handleDelete={handleDelete} />
              ))}
          </div>
    </>
  );
}
