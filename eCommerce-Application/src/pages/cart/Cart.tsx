import { CartItem } from '../../components/cart/cart-item/CartItem';
import { Button, Empty, Typography } from 'antd';
import { PromocodeForm } from '../../components/cart/promocode-form/PromocodeForm';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { PageRoutes } from '../../types/enums';
import { CartTitles } from '../../components/cart/cart-titles/CarTitles';
import './cart.css';
import { addItemToCart } from '../../api/Cart/add';
import { ProductProjection } from '@commercetools/platform-sdk';
import { getCartProducts } from '../../api/Cart/get';

type CartProduct = {
  id: string;
  name: string;
  author: string;
  cover: string;
  price: number;
  discount?: number;
  quantity: number;
};

export const Cart = () => {
  const navigate = useNavigate();
  const [cartProducts, setCartProducts] = useState(new Array<CartProduct>());
  const [total, setTotal] = useState(0);
  const resetCart = () => {};
  const applyPromocode = () => {};
  const deleteCartItem = (id: string) => {};
  const changeQuantities = (id: string, quantities: number) => {
    setCartProducts((previousProducts) =>
      previousProducts.map((item) => (item.id === id ? { ...item, quantity: quantities } : item)),
    );
  };
  const goShopping = () => {
    navigate(PageRoutes.CATALOG);
  };

  // const getCartProducts = async () => {
  //   // const cartProduct1 = {
  //   //   id: '123',
  //   //   name: 'Meteora',
  //   //   author: 'Linkin park',
  //   //   cover: 'https://upload.wikimedia.org/wikipedia/ru/b/bf/Meteora.jpg',
  //   //   price: 100,
  //   //   quantity: 1,
  //   // };

  //   // const cartProduct2 = {
  //   //   id: '124',
  //   //   name: 'Numb',
  //   //   author: 'Linkin park',
  //   //   cover: 'https://upload.wikimedia.org/wikipedia/en/b/b9/Linkin_Park_-_Numb_CD_cover.jpg',
  //   //   price: 250,
  //   //   quantity: 2,
  //   // };
  //   const cartProducts = new Array<CartProduct>();
  //   // cartProducts.push(cartProduct1, cartProduct2);
  //   return cartProducts;
  // };

  const calculateTotal = () => {
    const totalSum = cartProducts.reduce((sum, item) => {
      return sum + item.price * item.quantity;
    }, 0);
    setTotal(totalSum);
  };
  //добавление товара
  // useEffect(() => {
  //   const addItem = async () => {
  //     const product = {
  //       id: '21ab7e7d-37bb-41e1-977d-8ae80ad51452',
  //     };

  //     const result = await addItemToCart(product as ProductProjection, 1);
  //     console.log(result);
  //   };
  //   addItem();
  // }, []);

  useEffect(() => {
    const fetchData = async () => {
      const cartProducts = await getCartProducts();
      console.log(cartProducts);
      // setCartProducts(cartProducts);
      // calculateTotal();
    };
    fetchData();
  }, []);

  useEffect(() => {
    calculateTotal();
  }, [cartProducts]);

  return (
    <>
      {cartProducts.length > 0 ? (
        <div className="cart">
          <CartTitles />
          {cartProducts.map((product) => (
            <CartItem cartItem={product} changeQuantities={changeQuantities} deleteItem={deleteCartItem} />
          ))}
          <div className="buttons">
            <Button type="default" onClick={goShopping}>
              Back to shopping
            </Button>
            <Button type="default" onClick={resetCart}>
              Remove all goods
            </Button>
          </div>
          <div className="cart-bottom">
            <PromocodeForm onClick={applyPromocode} />
            <div className="checkout">
              <Typography.Title level={5} style={{ padding: 0, margin: 0 }}>
                Total: ${total}
              </Typography.Title>
              <Button className="button-submit" type="primary">
                Checkout
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <div className="cart-empty">
          <Empty description={<Typography.Text>Your cart is empty</Typography.Text>}>
            <Button type="primary" className="button-submit" onClick={goShopping}>
              Let's go shopping
            </Button>
          </Empty>
        </div>
      )}
    </>
  );
};
