import { CartItem } from '../../components/cart/cart-item/CartItem';
import { Button, Empty, message, Typography, Popconfirm } from 'antd';
import { PromocodeForm } from '../../components/cart/promocode-form/PromocodeForm';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { PageRoutes } from '../../types/enums';
import { CartTitles } from '../../components/cart/cart-titles/CarTitles';
import {
  getCartProductsPasswordFlow,
  getTotalCost,
  getCartPasswordFlow,
  getCartProducts,
  getCartProductsAnonymous,
} from '../../api/Cart/get';
import { useUserSession } from '../../store/userSession.store';
import { removedCart, removedProduct } from '../../api/Cart/remove';
import './cart.css';
import { modifyQuantity } from '../../api/Cart/modify';
import { applyPromoCode } from '../../api/Cart/add';
import { useAuth } from '../../hooks/hooks';

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
  const auth = useAuth();

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
  const [totalPriceWithPromocode, setTotalPriceWithPromocode] = useState(0);
  const [disablePromocode, setDisablePromocode] = useState(false);
  const resetCart = async () => {
    const result = await removedCart();
    if (result) {
      success('Cart has been cleared');
      fetchData();
    }
  };
  const applyPromocode = async (promocode: string) => {
    const result = await applyPromoCode(promocode, user?.email, user?.password);
    console.log(result);
    if (result) {
      success('Promocode has been applied');
      setDisablePromocode(true);
      const totalPriceWithPromocode = await getTotalCost();
      if (totalPriceWithPromocode) {
        setTotalPriceWithPromocode(totalPriceWithPromocode);
      }
    } else {
      error('Promocode doesnt exist');
      setDisablePromocode(false);
    }
  };
  const deleteCartItem = async (id: string) => {
    const result = await removedProduct(id);
    if (result) {
      fetchData();
      success('Product has been removed');
    } else {
      error('Product has not been removed');
    }
  };
  const changeQuantities = async (id: string, quantities: number) => {
    const result = await modifyQuantity(id, quantities);
    if (result) {
      fetchData();
    } else {
      error('Something went wrong');
    }
  };
  const goShopping = () => {
    navigate(PageRoutes.CATALOG);
  };

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
    if (auth.itemsInCart.length > 0) {
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
          quantity: product.quantity,
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

      const items = await getCartPasswordFlow(user?.email, user?.password);
      auth.setItemsInCart(items.lineItems);
    }
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
            <Popconfirm
              title="Remove all goods?"
              description="Are you sure to delete all goods?"
              onConfirm={resetCart}
              okText="Yes"
              cancelText="No"
            >
              <Button type="default">Remove all goods</Button>
            </Popconfirm>
          </div>
          <div className="cart-bottom">
            <PromocodeForm onClick={applyPromocode} disabled={disablePromocode} />
            <div className="checkout">
              <Typography.Title level={5} style={{ padding: 0, margin: 0 }}>
                Total:
                <span className={`${totalPriceWithPromocode ? 'price-crossed' : ''}`}> ${total}</span>
                {!!totalPriceWithPromocode && <span className="discount"> ${totalPriceWithPromocode}</span>}
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
