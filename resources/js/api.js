import { canderConfig } from './config'
import { getOrderIdentity } from './storage'

async function get (url) {
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
  });
  return response.json();
}

async function post(url, data = {}) {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
  return response.json()
}

export const analytics = {
  widgetImpressionEvent: () => post(`${canderConfig.proxyPrefix}/analytics/events/widget/impression`).then().catch(),
  widgetClickEvent: () => post(`${canderConfig.proxyPrefix}/analytics/events/widget/click`).then().catch(),
  widgetActionEvent: () => post(`${canderConfig.proxyPrefix}/analytics/events/widget/action`).then().catch(),
}

export function getSettings () {
  return get(`${canderConfig.proxyPrefix}/getSettings`)
}

export function getOrderDetails ({ order_id, token }) {
  return get(`${canderConfig.proxyPrefix}/orders/details?orderId=${order_id}&checkoutToken=${token}`)
}

export function checkUrl (url) {
  return get(`${canderConfig.api_url}/api/checkurl?url=${url}`)
}

export function messages(cardId, media, recipientPhoneNumber) {
  const {
    email, billing_address, token, order_id
  } = Shopify.checkout || {}

  return post(`${canderConfig.proxyPrefix}/cander/messages`, {
    card: {
      id: cardId || null
    },
    media: {
      url: media.url,
      type: media.type,
      file: media.file
    },
    order: {
      id: order_id || null,
      identity: null,
      domain: Shopify.shop,
      checkout: {
        token: token || null
      }
    },
    recipient: {
      name: "Test",
      emailAddress: null,
      phoneNumber: recipientPhoneNumber
    },
    sender: {
      name: billing_address ? `${billing_address.first_name} ${billing_address.last_name}`.trim() : null,
      emailAddress: email || null,
      phoneNumber: null,
    },
  })
}