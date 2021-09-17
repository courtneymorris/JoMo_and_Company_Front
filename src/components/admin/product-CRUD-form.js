import React, { Component } from "react";
import DropzoneComponent from "react-dropzone-component";

import "../../../node_modules/react-dropzone-component/styles/filepicker.css";
import "../../../node_modules/dropzone/dist/min/dropzone.min.css";

export default class ProductCRUDForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      price: 0,
      description: "",
      category: "eCommerce",
      collection: "",
      url: "",
      featured_image: "",
      image_url: "",
      editMode: true, // TODO: false when admin role is complete
      apiUrl: "http://127.0.0.1:5000/product",
      apiAction: "post",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.componentConfig = this.componentConfig.bind(this);
    this.djsConfig = this.djsConfig.bind(this);
    this.handleImageDrop = this.handleImageDrop.bind(this);
    this.handleFeaturedImageDrop = this.handleFeaturedImageDrop.bind(this);

    this.imageRef = React.createRef();
    this.featuredImageRef = React.createRef();
  }

  componentDidUpdate() {
    if (Object.keys(this.props.productToEdit).length > 0) {
      const {
        id,
        name,
        price,
        description,
        category,
        collection,
        featured_image,
        image_url,
      } = this.props.productToEdit;

      this.props.clearProductToEdit();

      this.setState({
        id: id,
        name: name || "",
        price: price || 0,
        description: description || "",
        category: category || "eCommerce",
        category: category || "",
        featured_image: featured_image || "",
        image_url: image_url || "",
        editMode: true,
        apiUrl: `http://127.0.0.1:5000/product/update/id/${id}`,
        apiAction: "put",
      });
    }
  }

  handleImageDrop() {
    return {
      addedfile: (file) => this.setState({ image_url: file }),
    };
  }

  handleFeaturedImageDrop() {
    return {
      addedfile: (file) => this.setState({ featured_image: file }),
    };
  }

  componentConfig() {
    return {
      iconFiletypes: [".jpg", ".png"],
      showFiletypeIcon: true,
      postUrl: "https://httpbin.org/post",
    };
  }

  djsConfig() {
    return {
      addRemoveLinks: true,
      maxFiles: 1,
    };
  }

  buildForm() {
    let formData = new FormData();

    formData.append("product_item[name]", this.state.name);
    formData.append("product_item[price]", this.state.price);
    formData.append("product_item[description]", this.state.description);
    formData.append("product_item[category]", this.state.category);
    formData.append("product_item[collection]", this.state.collection);

    if (this.state.featured_image) {
      formData.append(
        "product_item[featured_image]",
        this.state.featured_image
      );
    }
    if (this.state.image_url) {
      formData.append("product_item[image_url]", this.state.image_url);
    }

    return formData;
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit(event) {
    axios({
      method: this.state.apiAction,
      url: this.state.apiUrl,
      data: this.buildForm(),
    })
      .then((response) => {
        if (this.state.editMode) {
          this.props.handleEditFormSubmission();
        } else {
          this.props.handleNewFormSubmission(response.data.product);
        }

        this.setState({
          name: "",
          price: 0,
          description: "",
          category: "Scrunchies",
          collection: "",
          featured_image: "",
          image_url: "",
          editMode: false,
          apiUrl: "http://127.0.0.1:5000/product/add",
          apiAction: "post",
        });

        [this.featuredImageRef, this.imageRef].forEach((ref) => {
          ref.current.dropzone.removeAllFiles();
        });
      })
      .catch((error) => {
        console.log("product form handleSubmit error", error);
      });

    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="product-form-wrapper">
        <div className="two-column">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={this.state.name}
            onChange={this.handleChange}
          />

          <input
            type="text"
            name="price"
            placeholder="Price"
            value={this.state.price}
            onChange={this.handleChange}
          />
        </div>

        <div className="two-column">
          <input
            type="text"
            name="collection"
            placeholder="Collection"
            value={this.state.collection}
            onChange={this.handleChange}
          />

          <select
            name="category"
            placeholder="Category"
            value={this.state.category}
            onChange={this.handleChange}
            className="select-element"
          >
            <option value="Scrunchies">Scrunchies</option>
            <option value="Earrings">Earrings</option>
            <option value="Charms">Charms</option>
            <option value="Clips & More">Clips & More</option>
          </select>
        </div>

        <div className="one-column">
          <textarea
            type="text"
            name="description"
            placeholder="Description"
            value={this.state.description}
            onChange={this.handleChange}
          />
        </div>

        <div className="image-uploaders">
          {this.state.image_url && this.state.editMode ? (
            <div className="product-manager-image-wrapper">
              <img src={this.state.image_url} />

              <div className="image-removal-link">
                <a onClick={console.log("TODO: deleteImage")}>Remove File</a>
              </div>
            </div>
          ) : (
            <DropzoneComponent
              ref={this.imageRef}
              config={this.componentConfig()}
              djsConfig={this.djsConfig()}
              eventHandlers={this.handleImageDrop()}
            >
              <div className="dz-message">Image</div>
            </DropzoneComponent>
          )}

          {this.state.featured_image && this.state.editMode ? (
            <div className="product-manager-image-wrapper">
              <img src={this.state.featured_image} />
              <div className="image-removal-link">
                <a onClick={console.log("TODO: deleteFeaturedImage")}>
                  Remove File
                </a>
              </div>
            </div>
          ) : (
            <DropzoneComponent
              ref={this.featuredImageRef}
              config={this.componentConfig()}
              djsConfig={this.djsConfig()}
              eventHandlers={this.handleFeaturedImageDrop()}
            >
              <div className="dz-message">Featured Image</div>
            </DropzoneComponent>
          )}
        </div>

        <div>
          <button className="btn" type="submit">
            Save
          </button>
        </div>
      </form>
    );
  }
}
