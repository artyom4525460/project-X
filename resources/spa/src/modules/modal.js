export default {
  hide: () => {
    return window.parent.modal.hide()
  },
  confirm: async (cardId, media, phone) => {
    return window.parent.modal.confirm(
      cardId, media, phone
    )
  }
}