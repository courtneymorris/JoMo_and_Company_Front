import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProductSidebarList = (props) => {
  const productList = props.data.map((productItem) => {
    return (
      <div key={productItem.id} className="product-item-thumb">
        <div className="product-thumb-img">
          <img src={productItem.featured_image} />
        </div>

        <div className="text-content">
          <div className="title">{productItem.name}</div>

          <div className="actions">
            <a
              className="action-icon"
              onClick={() => props.handleEditClick(productItem)}
            >
              <FontAwesomeIcon icon="edit" />
            </a>

            <a
              className="action-icon"
              onClick={() => props.handleDeleteClick(productItem)}
            >
              <FontAwesomeIcon icon="trash" />
            </a>
          </div>
        </div>
      </div>
    );
  });
  return <div className="product-sidebar-list-wrapper">{productList}</div>;
};

export default ProductSidebarList;
