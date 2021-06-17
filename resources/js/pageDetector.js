export function isOrderPage () {
  return typeof Shopify !== 'undefined' && Shopify.checkout !== undefined
}

export function isCartPage () {
  return window.location.pathname.includes('/cart')
}

export function isCustomProductPage () {
  return window.location.pathname.includes('/products/') && document.getElementById('canderContainer')
}
