import React, { Component } from "react";
import DropzoneComponent from "react-dropzone-component";
import {
  Typography,
  TextField,
  Input,
  InputLabel,
  FormControl,
  InputAdornment,
  MenuItem,
  Box,
} from "@material-ui/core";
import axios from "axios";
import { Button } from "../styled-components/button.style";

export default class ProductCRUDForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: 0,
      name: "",
      price: 0.0,
      description: "",
      category: "Scrunchies",
      collection: "Classic",
      featured_image: "",
      apiAction: "POST",
      editMode: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
      } = this.props.productToEdit;

      this.props.clearProductToEdit();

      this.setState({
        id: id,
        name: name || "",
        price: price || 0.0,
        description: description || "",
        category: category || "Scrunchies",
        collection: collection || "",
        featured_image: featured_image || "",
        apiAction: "PUT",
        editMode: true,
      });
    }
  }

  buildForm() {
    let formData = new FormData();

    formData.append("name", this.state.name);
    formData.append("price", this.state.price);
    formData.append("description", this.state.description);
    formData.append("category", this.state.category);
    formData.append("collection", this.state.collection);

    console.log(formData.entries().next());
    return formData;
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    if (this.state.editMode) {
      axios({
        method: "put",
        url: `https://api-jomoandco.herokuapp.com/product/update/id/${this.state.id}`,
        data: {
          name: this.state.name,
          category: this.state.category,
          collection: this.state.collection,
          description: this.state.description,
          price: this.state.price,
          featured_image: this.state.featured_image,
        },
        headers: { "content-type": "application/json" },
      })
        .then(() => {
          this.props.handleEditFormSubmission();
        })
        .catch((error) => {
          console.log("product form handleSubmit error", error);
        });
      this.setState({
        name: "",
        price: 0,
        description: "",
        category: "Scrunchies",
        collection: "Classic",
        featured_image: "",
        apiAction: "POST",
        editMode: false,
      });
    } else {
      axios("https://api-jomoandco.herokuapp.com/product/add", {
        method: "POST",
        data: {
          name: this.state.name,
          category: this.state.category,
          collection: this.state.collection,
          description: this.state.description,
          price: this.state.price,
          featured_image: this.state.featured_image,
        },
        headers: { "content-type": "application/json" },
      })
        .then((response) => {
          this.props.handleNewFormSubmission(response.data.product);
        })
        .catch((error) => {
          console.log("product form handleSubmit error", error);
        });
      this.setState({
        name: "",
        price: 0,
        description: "",
        category: "Scrunchies",
        collection: "Classic",
        featured_image: "",
        apiAction: "POST",
        editMode: false,
        addMode: false,
      });
    }
  }

  render() {
    return (
      <Box style={{ padding: "1rem" }}>
        <form onSubmit={this.handleSubmit} className="crud-form-wrapper">
          <input
            className="crud-form-text"
            type="text"
            name="name"
            placeholder="Product Name"
            label="Name"
            value={this.state.name}
            onChange={this.handleChange}
          />

          <input
            className="crud-form-text"
            type="text"
            name="price"
            placeholder="$"
            label="Price"
            value={this.state.price}
            onChange={this.handleChange}
          />

          <input
            className="crud-form-text"
            type="text"
            name="featured_image"
            placeholder="Full Image URL"
            label="Featured Image"
            value={this.state.featured_image}
            onChange={this.handleChange}
          />

          <select
            className="crud-form-select"
            name="category"
            placeholder="Category"
            label="Category"
            value={this.state.category}
            onChange={this.handleChange}
          >
            <option value="Scrunchies">Scrunchies</option>
            <option value="Earrings">Earrings</option>
            <option value="Charms">Charms</option>
            <option value="Clips & More">Clips & More</option>
          </select>

          <select
            className="crud-form-select"
            name="collection"
            placeholder="Collection"
            label="Collection"
            value={this.state.collection}
            onChange={this.handleChange}
          >
            <option value="Classic">Classic</option>
            <option value="Premium">Premium</option>
            <option value="Joeys">Joeys</option>
            <option value="Studs">Studs</option>
            <option value="Drops">Drops</option>
            <option value="Stunners">Stunners</option>
            <option value="Buddies">Buddies</option>
          </select>

          <textarea
            className="crud-form-textarea"
            name="description"
            label="Description"
            placeholder="Product Description..."
            value={this.state.description}
            onChange={this.handleChange}
          />

          <Button type="submit">Save</Button>
        </form>
      </Box>
    );
  }
}
