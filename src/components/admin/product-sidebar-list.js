import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProductSidebarList = (props) => {
  const productList = props.data.map((product) => {
    return (
      <div key={product.id}>
        <div>
          <img src={product.featured_image} />
        </div>

        <div>
          <div className="title">{product.name}</div>

          <div className="actions">
            <a
              className="action-icon"
              onClick={() => props.handleEditClick(product)}
            >
              <FontAwesomeIcon icon="edit" />
            </a>

            <a
              className="action-icon"
              onClick={() => props.handleDeleteClick(product)}
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
