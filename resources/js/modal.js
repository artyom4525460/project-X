import { getCanderModalHtml, changeWidgetToEdit, setOrderIdentityToInput } from './html'
import * as api from './api'
import { setOrderIdentity } from './storage'
import { stopScroll, startScroll } from './scroll'

export default class Modal {
  constructor() {
    document.body.insertAdjacentHTML('afterend', getCanderModalHtml())
    this.canderModal = document.getElementById('canderModal')
    this.canderContent = document.getElementById('canderContent')
  }

  show() {
    this.canderModal.classList.remove('cander-hide')
    this.canderModal.classList.add('cander-show')
    const canderIframe = document.createElement('iframe')
    canderIframe.setAttribute('src', '/apps/proxy/getIframe')
    canderIframe.setAttribute('id', 'canderIframe')
    this.canderContent.appendChild(canderIframe)
    stopScroll()
  }

  hide() {
    this.canderModal.classList.remove('cander-show')
    this.canderModal.classList.add('cander-hide')
    document.getElementById('canderIframe').remove()
    startScroll()
  }

  async confirm(cardId, media, phone) {
    try {
      const {
        orderIdentity
      } = await api.messages(cardId, media, phone)
      setOrderIdentity(orderIdentity)
      setOrderIdentityToInput(orderIdentity)
      changeWidgetToEdit()
      api.analytics.widgetActionEvent()
      this.hide()
    } catch {

    }
  }
}



