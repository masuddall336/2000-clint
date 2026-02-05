
import Swal from "sweetalert2";
import "./addProducts.css";

const AddProducts = () => {
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const formDatas = new FormData(form);
    const products = Object.fromEntries(formDatas.entries());
    console.log(products);

    // send data to db
    fetch('https://2000-server.vercel.app/products', {
      method: "POST",
      headers: {
        "COntent-type": "application/json"
      },
      body: JSON.stringify(products)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        
        if (data.insertedId) {
          Swal.fire({
            title: "Added Product Successfully",
            icon: "success",
            draggable: true
          });
        }
      })


  }
  return (
    <div className="form-container">
      <h2>Add Product</h2>
      <br />
      <p className="text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum, at sunt. Vitae autem officia quia. Enim excepturi provident adipisci mollitia maxime? Fugiat temporibus sequi vitae odit suscipit similique cumque, consequuntur ut maiores sed eius repudiandae iusto blanditiis unde a sapiente adipisci earum nam quas illo vel? Sunt rem magni nesciunt maxime? Optio fuga doloremque illo quasi perspiciatis in ducimus, natus debitis, facere nihil veniam autem esse quis alias vitae consectetur labore architecto vero numquam atque. Modi ad possimus aspernatur voluptate rem doloribus a magni alias omnis! Aliquam rem libero corrupti sint amet dolorum. Temporibus alias illum consectetur fuga! Ipsam, ad!</p>
      <br />
      <form onSubmit={handleSubmit} className="product-form">
        {/* Row 1 */}
        <div className="form-row">
          <input name="productName" placeholder="Product Name" />
          <input name="productBaseTitle" placeholder="Product Base Title" />
        </div>

        {/* Row 2 */}
        <div className="form-row">
          <input name="brandName" placeholder="Brand Name" />
          <input name="sizeOfProducts" placeholder="Size Of Products" />
        </div>

        {/* Row 3 */}
        <div className="form-row">
          <input type="number" name="availableQty" placeholder="Available Quantity" />
          <input name="productColor" placeholder="Product Color" />
        </div>

        {/* Row 4 */}
        <div className="form-row">
          <input name="productMaterial" placeholder="Product Material" />
          <input name="productOriginal" placeholder="Product Original (Yes / No)" />
        </div>

        {/* Row 5 */}
        <div className="form-row">
          <input name="gender" placeholder="Gender" />
          <input name="specifications" placeholder="Specifications Of Products" />
        </div>

        {/* Row 6 */}
        <div className="form-row">
          <input name="productImgUrl" placeholder="Product Image URL" />
          <input name="productQrCodeUrl" placeholder="Product QR Code URL" />
        </div>

        {/* Sub Images */}
        <div className="form-row">
          <input name="subImg1" placeholder="Product Sub Image URL 1" />
          <input name="subImg2" placeholder="Product Sub Image URL 2" />
        </div>

        <div className="form-row">
          <input name="subImg3" placeholder="Product Sub Image URL 3" />
          <input name="subImg4" placeholder="Product Sub Image URL 4" />
        </div>

        <div className="form-row">
          <input name="subImg5" placeholder="Product Sub Image URL 5" />
          <input type="number" name="presentPrice" placeholder="Present Price" />
        </div>

        {/* Prices */}
        <div className="form-row">
          <input type="number" name="previousPrice" placeholder="Previous Price" />
          <input type="number" name="discountPercentage" placeholder="Discount Percentage" />
        </div>

        {/* Delivery */}
        <div className="form-row">
          <input type="number" name="deliveryDhaka" placeholder="Delivery Rate in Dhaka" />
          <input type="number" name="deliveryOutDhaka" placeholder="Delivery Rate Out of Dhaka" />
        </div>

        {/* Category */}
        <div className="form-row">
          <input name="warranty" placeholder="Product Warranty (Yes / No)" />
          <input name="category" placeholder="Product Category" />
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
  );
};

export default AddProducts;
