import React, { Component } from "react";
import DropzoneComponent from "react-dropzone-component";
import {
  Button,
  Typography,
  TextField,
  Input,
  InputLabel,
  FormControl,
  InputAdornment,
  MenuItem,
  Box,
} from "@material-ui/core";

import "../../../node_modules/react-dropzone-component/styles/filepicker.css";
import "../../../node_modules/dropzone/dist/min/dropzone.min.css";

export default class ProductCRUDForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      price: 0.0,
      description: "",
      category: "Scrunchies",
      collection: "Classic",
      apiAction: "POST",
      editMode: false,
      addMode: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidUpdate() {
    if (Object.keys(this.props.productToEdit).length > 0) {
      const { id, name, price, description, category, collection } =
        this.props.productToEdit;

      this.props.clearProductToEdit();

      fetch(`http://127.0.0.1:5000/product/update/id/${id}`, {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          name: this.state.name,
          price: this.state.price,
          description: this.state.description,
          category: this.state.category,
          collection: this.state.collection,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          this.setState({
            id: id,
            name: name || "",
            price: price || 0.0,
            description: description || "",
            category: category || "Scrunchies",
            collection: collection || "",
            apiAction: "PUT",
            editMode: true,
            addMode: false,
          });
        });
    } else if (this.state.addMode) {
      fetch("http://127.0.0.1:5000/product/add", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          name: this.state.name,
          price: this.state.price,
          description: this.state.description,
          category: this.state.category,
          collection: this.state.collection,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          this.setState({
            id: data.id,
            name: data.name || "",
            price: data.price || 0.0,
            description: data.description || "",
            category: data.category || "Scrunchies",
            collection: data.collection || "",
            apiAction: "POST",
            editMode: false,
            addMode: true,
          });
        });
    }
  }

  buildForm() {
    let formData = new FormData();

    formData.append("product_item[name]", this.state.name);
    formData.append("product_item[price]", this.state.price);
    formData.append("product_item[description]", this.state.description);
    formData.append("product_item[category]", this.state.category);
    formData.append("product_item[collection]", this.state.collection);

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
          collection: "Classic",
          apiAction: "POST",
          editMode: false,
          addMode: false,
        });
      })
      .catch((error) => {
        console.log("product form handleSubmit error", error);
      });
    event.preventDefault();
  }

  render() {
    return (
      <Box>
        <FormControl variant="standard">
          <TextField
            type="text"
            name="name"
            label="Name"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </FormControl>

        <FormControl sx={{ m: 1 }} variant="standard">
          <InputLabel htmlFor="standard-adornment-amount">Price</InputLabel>
          <Input
            id="standard-adornment-amount"
            type="text"
            name="price"
            label="Price"
            value={this.state.price}
            onChange={this.handleChange}
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
          />
        </FormControl>

        <FormControl fullWidth sx={{ m: 1 }}>
          <TextField
            sx={{ m: 1 }}
            select
            variant="standard"
            name="collection"
            label="Collection"
            value={this.state.collection}
            onChange={this.handleChange}
          >
            <MenuItem value="Classic">Classic</MenuItem>
            <MenuItem value="Premium">Premium</MenuItem>
            <MenuItem value="Joeys">Joeys</MenuItem>
            <MenuItem value="Studs">Studs</MenuItem>
            <MenuItem value="Drops">Drops</MenuItem>
            <MenuItem value="Stunners">Stunners</MenuItem>
            <MenuItem value="Buddies">Buddies</MenuItem>
          </TextField>
        </FormControl>

        <FormControl fullWidth sx={{ m: 1 }}>
          <TextField
            sx={{ m: 1 }}
            select
            variant="standard"
            name="category"
            label="Category"
            value={this.state.category}
            onChange={this.handleChange}
          >
            <MenuItem value="Scrunchies">Scrunchies</MenuItem>
            <MenuItem value="Earrings">Earrings</MenuItem>
            <MenuItem value="Charms">Charms</MenuItem>
            <MenuItem value="Clips & More">Clips & More</MenuItem>
          </TextField>
        </FormControl>

        <FormControl fullWidth>
          <TextField
            multiline
            rows={3}
            id="outlined-multiline-static"
            name="description"
            label="Description"
            value={this.state.description}
            onChange={this.handleChange}
          />
        </FormControl>

        {/* {this.state.featured_image && this.state.editMode ? (
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
        )} */}

        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Save
        </Button>
      </Box>
    );
  }
}
