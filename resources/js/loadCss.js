import { canderConfig } from './config'
export default function () {
  const element = document.createElement('link')
  element.setAttribute('rel', 'stylesheet')
  element.setAttribute('type', 'text/css')
  element.setAttribute('href', `${canderConfig.api_url}/css/custom.css`)
  document.getElementsByTagName('head')[0].appendChild(element)
}
