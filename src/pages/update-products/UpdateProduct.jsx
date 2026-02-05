import React from 'react';
import { DiVim } from 'react-icons/di';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';

const UpdateProduct = () => {
  const product_data = useLoaderData()
  const { _id, productName, productBaseTitle, brandName, sizeOfProducts, availableQty, productColor, productMaterial, productOriginal, gender, specifications, productImgUrl, productQrCodeUrl, subImg1, subImg2, subImg3, subImg4, subImg5, presentPrice, previousPrice, discountPercentage, deliveryDhaka, deliveryOutDhaka, warranty, category } = product_data;
  console.log(product_data);

  const handleUpdate = e => {
    e.preventDefault();
    const form = e.target;
    const formDatas = new FormData(form);
    const products = Object.fromEntries(formDatas.entries());
    console.log(products);

    // update data to the server
    fetch(`http://localhost:3000/products/${_id}`, {
      method: "put",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(products)
    })
      .then(res => res.json())
      .then(data => {
        if (data.modifiedCount) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "your product is updated",
            showConfirmButton: false,
            timer: 1500
          });
        }
      })
  }

  return (
    <div>
      <div className="form-container">
        <h2>Update Product</h2>
        <br />
        <p className="text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum, at sunt. Vitae autem officia quia. Enim excepturi provident adipisci mollitia maxime? Fugiat temporibus sequi vitae odit suscipit similique cumque, consequuntur ut maiores sed eius repudiandae iusto blanditiis unde a sapiente adipisci earum nam quas illo vel? Sunt rem magni nesciunt maxime? Optio fuga doloremque illo quasi perspiciatis in ducimus, natus debitis, facere nihil veniam autem esse quis alias vitae consectetur labore architecto vero numquam atque. Modi ad possimus aspernatur voluptate rem doloribus a magni alias omnis! Aliquam rem libero corrupti sint amet dolorum. Temporibus alias illum consectetur fuga! Ipsam, ad!</p>
        <br />
        <form onSubmit={handleUpdate} className="product-form">
          {/* Row 1 */}
          <div className="form-row">
            <input name="productName" defaultValue={productName} placeholder="Product Name" />
            <input name="productBaseTitle" defaultValue={productBaseTitle} placeholder="Product Base Title" />
          </div>

          {/* Row 2 */}
          <div className="form-row">
            <input name="brandName" defaultValue={brandName} placeholder="Brand Name" />
            <input name="sizeOfProducts" defaultValue={sizeOfProducts} placeholder="Size Of Products" />
          </div>

          {/* Row 3 */}
          <div className="form-row">
            <input type="number" name="availableQty" defaultValue={availableQty} placeholder="Available Quantity" />
            <input name="productColor" defaultValue={productColor} placeholder="Product Color" />
          </div>

          {/* Row 4 */}
          <div className="form-row">
            <input name="productMaterial" defaultValue={productMaterial} placeholder="Product Material" />
            <input name="productOriginal" defaultValue={productOriginal} placeholder="Product Original (Yes / No)" />
          </div>

          {/* Row 5 */}
          <div className="form-row">
            <input name="gender" defaultValue={gender} placeholder="Gender" />
            <input name="specifications" defaultValue={specifications} placeholder="Specifications Of Products" />
          </div>

          {/* Row 6 */}
          <div className="form-row">
            <input name="productImgUrl" defaultValue={productImgUrl} placeholder="Product Image URL" />
            <input name="productQrCodeUrl" defaultValue={productQrCodeUrl} placeholder="Product QR Code URL" />
          </div>

          {/* Sub Images */}
          <div className="form-row">
            <input name="subImg1" defaultValue={subImg1} placeholder="Product Sub Image URL 1" />
            <input name="subImg2" defaultValue={subImg2} placeholder="Product Sub Image URL 2" />
          </div>

          <div className="form-row">
            <input name="subImg3" defaultValue={subImg3} placeholder="Product Sub Image URL 3" />
            <input name="subImg4" defaultValue={subImg4} placeholder="Product Sub Image URL 4" />
          </div>

          <div className="form-row">
            <input name="subImg5" defaultValue={subImg5} placeholder="Product Sub Image URL 5" />
            <input type="number" name="presentPrice" defaultValue={presentPrice} placeholder="Present Price" />
          </div>

          {/* Prices */}
          <div className="form-row">
            <input type="number" name="previousPrice" defaultValue={previousPrice} placeholder="Previous Price" />
            <input type="number" name="discountPercentage" defaultValue={discountPercentage} placeholder="Discount Percentage" />
          </div>

          {/* Delivery */}
          <div className="form-row">
            <input type="number" name="deliveryDhaka" defaultValue={deliveryDhaka} placeholder="Delivery Rate in Dhaka" />
            <input type="number" name="deliveryOutDhaka" defaultValue={deliveryOutDhaka} placeholder="Delivery Rate Out of Dhaka" />
          </div>

          {/* Category */}
          <div className="form-row">
            <input name="warranty" defaultValue={warranty} placeholder="Product Warranty (Yes / No)" />
            <input name="category" defaultValue={category} placeholder="Product Category" />
          </div>

          {/* Placement */}
          <div className="form-row">
            <input
              className="full-width"
              name="placementSection"
              placeholder="Product Placement Section Name"
            />
          </div>

          <button type="submit" className="submit-btn">
            Submit Product
          </button>
        </form>
      </div>
    </div>

  );
};

export default UpdateProduct;