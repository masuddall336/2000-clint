import { MdOutlineFolderDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import Swal from "sweetalert2";
import { NavLink } from "react-router";



const FlashSale = ({ all_flash_sale, prodcuts, setProducts }) => {
  const { productImgUrl,
    productName, productBaseTitle, presentPrice, previousPrice, _id } = all_flash_sale;
  console.log(_id);

  const handleDelet = id => {
    console.log(id);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      console.log(result.isConfirmed);
      if (result.isConfirmed) {

        fetch(`https://2000-server.vercel.app/products/${id}`, {
          method: 'DELETE'
        })
          .then(res => res.json())
          .then(data => console.log("data after deleted", data)
          )

        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
        const remainingProducts = prodcuts.filter(single_Products => single_Products._id !== _id)
        setProducts(remainingProducts)
      }
    });

  }

  return (
    <div>
      <NavLink to={`product-details/${_id}`}>
        <div className="flashsale-card">
          <img
            className="flashsale-img"
            src={productImgUrl}
            alt={productBaseTitle}
            draggable="false"  // prevents dragging the image itself
          />
          <div className='pl-2'>
            <h3 className="flashsale-title pt-2">{
              productName}</h3>
            <p className="flashsale-price pt-1">${presentPrice}</p>
            <div className='flex gap-3'>
              <p className='line-through text-[#d2d1d15f]'>${previousPrice}</p>
              <p>{presentPrice}%</p>
            </div>
          </div>
        </div>
      </NavLink>
      {/* crud button */}
      <div className="crud_btn flex gap-3 justify-end items-center pt-1">
        <NavLink to={`/update-product/${_id}`}>
          <div id="edit">
            <CiEdit />
          </div>
        </NavLink>
        <div onClick={() => handleDelet(_id)} id="delete">
          <MdOutlineFolderDelete />
        </div>
      </div>
    </div>
  );
};

export default FlashSale;
