import { useRouteError } from "react-router-dom";
import BackBtn from "../components/BackBtn";

const OrderNotFound = () => {
  const error = useRouteError();
  return (
    <div className="text-center my-6 flex flex-col gap-8">
      <BackBtn to={"/Pizzeria/menu"}>Back to menu</BackBtn>
      <h2 className="text-3xl">{(error as Error).message}</h2>
    </div>
  );
};

export default OrderNotFound;
