import React, { useState } from "react";
import style from "./PostsList.module.css";
import data from "../../data/data.json";
import Item from "./Item/Item";
import { IPost } from "../../types/index";

const ITEMS_PER_PAGE = 10;

interface PostsListProps {
  searchQuery: string;
}

const PostsList: React.FC<PostsListProps> = ({ searchQuery }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const filteredData = data.filter((post: IPost) =>
    post.body.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalPages = Math.ceil(filteredData.length / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentItems = filteredData.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className={style.container}>
      <div className={style.listContainer}>
        {currentItems.map((item: IPost) => (
          <Item key={item.id} post={item} />
        ))}
      </div>

      <div className={style.pagination}>
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>

        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            className={`${style.paginationNumber} ${
              currentPage === index + 1 ? style.active : ""
            }`}
            onClick={() => handlePageChange(index + 1)}
            disabled={index + 1 === currentPage}
          >
            {index + 1}
          </button>
        ))}

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PostsList;
