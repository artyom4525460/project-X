export const setOrderIdentity = orderIdentity => {
  localStorage.setItem('orderIdentity', orderIdentity)
}

export const getOrderIdentity = () => {
  return localStorage.getItem('orderIdentity')
}

export const removeOrderIdentity = () => {
  localStorage.removeItem('orderIdentity')
}