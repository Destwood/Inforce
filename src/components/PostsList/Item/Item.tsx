import React from "react";
import { IPost } from "../../../types";
import style from "./Item.module.css";

interface IremProps {
  post: IPost;
}

const Item: React.FC<IremProps> = ({ post }) => {
  const { id, email, body } = post;

  return (
    <div className={style.container}>
      <span>{id}. </span>
      <span className={style.name}>{email}</span>
      <p>{body}</p>
    </div>
  );
};

export default Item;
