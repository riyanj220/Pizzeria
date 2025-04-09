import { FC } from "react";
import { useAppDispatch} from "../store/hooks";
import { addItem, CartItem, deleteItem, removeItem } from "../store/cartSlice";
import { useLocation } from "react-router-dom";

export type MenuItemProps = {
  item: CartItem;
  readonly?: boolean;
};
const MenuItem: FC<MenuItemProps> = ({ item, readonly }) => {
  const quantity = item.quantity;
  const dispatch = useAppDispatch(); 

  const location = useLocation();
  const imagePath = location.pathname.includes('/order/') ? `../images/pizzas/${item.image}`
  : `./images/pizzas/${item.image}`;

  return (

    <div className="card px-4 card-side bg-base-300 shadow-xl">
      <figure className="w-20 min-w-32 mask mask-squircle">

        <img src={imagePath} alt="Pizza" />
        
      </figure>
      <div className="card-body p-2.5 sm:p-8">
        <h2 className="card-title">{item.title}</h2>
        <div>{item.ingredients.join(", ")}</div>


        <div className={`card-actions justify-between items-end`}>
          <b className="font-semibold">€{item.price}</b>
          {
            quantity === 0 && !readonly ? <button className="btn btn-primary w-20 sm:w-32" onClick={() => {
              dispatch(addItem(item));
          }}>Add to Cart</button>:
          <div className="flex gap-2 sm:gap-4 items-center">
            {!readonly && (
              <button className="btn btn-sm md:btn-md btn-primary btn-circle" onClick={() => {
                dispatch(removeItem(item));
              }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.25 12a.75.75 0 0 1 .75-.75h14a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1-.75-.75Z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            )}
            <span>{!readonly ? quantity : `Quantity: ${quantity}`}</span>
            {!readonly && (
              <>
                <button className="btn btn-sm md:btn-md btn-primary btn-circle" onClick={() => {
                    dispatch(addItem(item));
                    }} >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                <button className="btn btn-sm md:btn-md btn-primary ml-4" onClick={() => {
                  dispatch(deleteItem(item));
                }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6 md:hidden block"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                    />
                  </svg>

                  <span className="hidden md:block">Delete</span>
                </button>{" "}
              </>
            )}
          </div>
          }
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
