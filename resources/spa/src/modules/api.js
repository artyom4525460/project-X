export default {
  checkUrl: (url) => {
    return window.parent.api.checkUrl(url)
  }
}