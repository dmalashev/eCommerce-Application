import { CartItem } from '../../components/cart/cart-item/CartItem';
import { Button, Empty, message, Typography } from 'antd';
import { PromocodeForm } from '../../components/cart/promocode-form/PromocodeForm';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { PageRoutes } from '../../types/enums';
import { CartTitles } from '../../components/cart/cart-titles/CarTitles';
import { getCartProductsPasswordFlow } from '../../api/Cart/get';
import { useUserSession } from '../../store/userSession.store';
import { removedProduct } from '../../api/Cart/remove';
import './cart.css';

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
  const [messageApi, contextHolder] = message.useMessage();

  const success = (message: string) => {
    messageApi.open({
      type: 'success',
      content: message,
    });
  };

  const error = (message: string) => {
    messageApi.open({
      type: 'error',
      content: message,
    });
  };

  const navigate = useNavigate();
  const { user } = useUserSession();
  const [cartProducts, setCartProducts] = useState(new Array<CartProduct>());
  const [total, setTotal] = useState(0);
  const resetCart = () => {};
  const applyPromocode = () => {};
  const deleteCartItem = async (id: string) => {
    const result = await removedProduct(id);
    if (result) {
      fetchData();
      success('Product has been removed');
    } else {
      error('Product has not been removed');
    }
  };
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
    let totalSum = 0;
    for (const item of cartProducts) {
      const price = item.discount ?? item.price;
      totalSum += price * item.quantity;
    }
    setTotal(totalSum);
  };
  //добавление товара
  // useEffect(() => {
  //   const addItem = async () => {
  //     const product = {
  //       id: '4066e859-8728-4df7-b24a-73cbb7e3f0b4',
  //     };

  //     const result = await addItemToCart(product as ProductProjection, 1);
  //     console.log(result);
  //   };
  //   addItem();
  // }, []);

  const fetchData = async () => {
    const results = await getCartProductsPasswordFlow(user?.email, user?.password);
    console.log(results);
    const cartProducts = results.map((product) => {
      const item: CartProduct = {
        id: product.id,
        name: product.name.en,
        author: product.masterVariant.attributes?.find((attribute) => attribute.name === 'artist')?.value,
        cover: product.masterVariant.images?.[0].url || '',
        discount: product.masterVariant.prices ? product.masterVariant.prices[0].discounted?.value.centAmount : 0,
        price: product.masterVariant.prices ? product.masterVariant.prices[0].value.centAmount : 0,
        quantity: 1,
      };
      if (item.price) {
        item.price = item.price / 100;
      }

      if (item.discount) {
        item.discount = item.discount / 100;
      }

      return item;
    });

    setCartProducts(cartProducts);
    calculateTotal();
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    calculateTotal();
  }, [cartProducts]);

  return (
    <>
      {contextHolder}
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
