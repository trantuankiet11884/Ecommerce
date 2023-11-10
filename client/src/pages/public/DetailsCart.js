import React from "react";
import { Breadcrumb, Button, OrderItem } from "components";
import { withNavigate } from "hocs";
import { useSelector } from "react-redux";
import { formatMoney } from "utils/fn";
import path from "utils/path";
import { Link } from "react-router-dom";

const DetailsCart = ({ location }) => {
  const { currentCart } = useSelector((state) => state.user);
  return (
    <div className="w-main">
      <div>
        <h3 className="font-bold uppercase text-lg"> My Cart</h3>
        {/* <Breadcrumb
          category={location?.pathname?.replace("/", "")?.split("-")?.join(" ")}
        /> */}
      </div>
      <div className="flex flex-col border rounded-md w-main mx-auto my-4 text-center">
        <div className="w-main mx-auto bg-main text-white font-bold py-3 grid grid-cols-10">
          <span className="col-span-6 w-full">Products</span>
          <span className="col-span-1 w-full">Quantity</span>
          <span className="col-span-3 w-full">Price</span>
        </div>
        {currentCart.map((item) => (
          <OrderItem
            item={item}
            key={item._id}
            color={item?.color}
            defaultQuantity={item?.quantity}
            title={item?.title}
            thumbnail={item?.thumbnail}
            price={item?.price}
            pid={item?.product?._id}
          />
        ))}
      </div>
      <div className="w-main mx-auto flex items-end justify-end my-4 gap-3">
        <div>
          <p>
            <span>Subtoal: </span>
            <span className="text-black font-bold">
              {formatMoney(
                currentCart.reduce(
                  (acc, item) => +acc + Number(item?.price) * item.quantity,
                  0
                )
              ) + " VNĐ"}
            </span>
          </p>
          <div className="text-end my-3">
            <Link
              to={`/${path.CHECKOUT}`}
              target="_blank"
              className="px-4 py-2 border bg-main text-white rounded-lg"
            >
              Checkout
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
{
}
export default withNavigate(DetailsCart);
