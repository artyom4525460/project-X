// import '../../public/css/custom.css'
import * as canderApi from './api'
import { isOrderPage, isCartPage, isCustomProductPage } from './pageDetector'
import { getCanderWidgetHtml, getCanderWidgetProductPageHtml, changeWidgetToEdit } from './html'
import { canderConfig } from './config'
import loadCss from './loadCss'
import Modal from './modal'
import { getOrderIdentity, removeOrderIdentity } from './storage'
import { sentry } from './sentry'

window.api = canderApi

loadCss()

function loadCanderToProductPage () {
  sentry()
  const castomCanderContainer = document.getElementById('canderContainer')
  if (castomCanderContainer) {
    castomCanderContainer.innerHTML = getCanderWidgetProductPageHtml()
  }
}

function loadCanderToOrderPage () {
  sentry()
  const canderWidgetHtml = getCanderWidgetHtml()
  Shopify.Checkout.OrderStatus.addContentBox(canderWidgetHtml)
  document.querySelector('.canderInitial').parentElement.style.padding = '0px'
  const element = document.querySelector('.canderInitial').parentElement.parentElement
  const elements = document.getElementsByClassName('content-box')
  for (let i = 0; i < elements.length; i++) {
    if (elements[0] != element) {
      element.style.display = 'none'
      element.parentElement.insertBefore(element, element.previousSibling)
    } else {
      break
    }
  }
  canderApi.getOrderDetails(Shopify.checkout).then(res => {
    removeOrderIdentity()
    if (!res.identity && !res.canderMessageId) {
      element.style.display = 'block'
    }
  })
}

function loadCanderToCartPageOnlyInput (orderIdentity) {
  sentry()
  const inputCanderQrRef = `<input class="cander-qr-ref" type="hidden" name="attributes[cander qr ref]" value="${orderIdentity}">`
  const checkout = [...document.getElementsByName('checkout')]
  if (checkout.length) {
    checkout.map((item) => {
      const parent = item.parentElement.parentElement
      parent.innerHTML = inputCanderQrRef + parent.innerHTML
    })
  }
}

function loadCanderToCartPage () {
  sentry()
  const castomCanderContainer = document.getElementById('canderContainer')
  const inputCanderQrRef = '<input class="cander-qr-ref" type="hidden" name="attributes[cander qr ref]" value>'
  const canderWidgetHtml = getCanderWidgetHtml(true)
  if (castomCanderContainer) {
    castomCanderContainer.innerHTML = canderWidgetHtml + inputCanderQrRef
    return
  }
  const castomCanderContainers = [...document.getElementsByClassName('canderContainer')]
  if (castomCanderContainers.lenth) {
    castomCanderContainers.map((item) => {
      item.innerHTML = canderWidgetHtml + inputCanderQrRef
    })
    castomCanderContainers[0].innerHTML += inputCanderQrRef
    return
  }
  const checkout = [...document.getElementsByName('checkout')]
  if (checkout.length) {
    checkout.map((item) => {
      const parent = item.parentElement.parentElement
      parent.innerHTML = canderWidgetHtml + inputCanderQrRef + parent.innerHTML
    })
  }
}

canderApi.getSettings()
  .then(({ activated, showOnCart, showOnOrder }) => {
    const orderIdentity = getOrderIdentity()

    if (!activated) { return }
    if (isCustomProductPage()) { loadCanderToProductPage(); pageLoaded() }
    if (isOrderPage() && showOnOrder) { loadCanderToOrderPage(); pageLoaded() }
    if (isCartPage() && !showOnCart && orderIdentity) { loadCanderToCartPageOnlyInput(orderIdentity); pageLoaded() }
    if (isCartPage() && showOnCart) { loadCanderToCartPage(); pageLoaded() }
  })

function pageLoaded () {
  api.analytics.widgetImpressionEvent()

  window.modal = new Modal()

  const canderButtons = [...document.getElementsByClassName('canderButton')]
  const canderButtonsNoThanks = [...document.getElementsByClassName('canderButtonNoThanks')]

  canderButtons.map((canderButton) => {
    canderButton.addEventListener('click', function (event) {
      api.analytics.widgetClickEvent()
      event.preventDefault()
      modal.show()
    })
  })

  canderButtonsNoThanks.map((canderButtonNoThanks) => {
    canderButtonNoThanks.addEventListener('click', function (event) {
      api.analytics.widgetClickEvent()
      event.preventDefault()
      modal.show()
    })
  })

  if (getOrderIdentity()) {
    changeWidgetToEdit()
  }
}
