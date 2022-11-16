import { FaShoppingCart } from "react-icons/fa";
import { Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";

const CartWidget = () => {
    const { totalQuantity, cartList } = useCartContext();
    if (cartList.length === 0) {
        return <FaShoppingCart />
    }

    return (
        <NavLink to="/cart">
            <FaShoppingCart />
            <Text className="badge" fontSize="lg" as="b">
                {totalQuantity()}
            </Text>
        </NavLink>
    );
};

export { CartWidget };
