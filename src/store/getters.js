/* eslint-disable import/prefer-default-export,arrow-parens,arrow-body-style */
export const cartProducts = state => {
  return state.cart.added.map(({ id, quantity }) => {
    const product = state.products.all.find(p => p.id === id);
    return {
      title: product.title,
      price: product.price,
      quantity,
    };
  });
};
