import { canderConfig } from './config'

export function getCanderWidgetHtml (precheckout = false) {
  return `
        <div ${(precheckout ? ' class="canderInitial cander-initial-precheckout"' : 'class="canderInitial"')}>
            <div class="cander-initial-block-background" style="background-image: url('${canderConfig.api_url}/images/present-qr-illustration.svg')"></div>
            <div class="cander-initial-block">
                <img class="canderInitial-image" src="${canderConfig.api_url}/images/present-qr-illustration.svg">
                <p class="canderText">Make this gift a memory by adding a complimentary virtual message.</p>
                <a href="#" class="canderButton cander-button cander-primary-button">Add virtual gift message<span class="cander-hide button-preloader canderButtonPreloader"><img src="${canderConfig.api_url}/images/preloader.gif"></span></a>
                <div id="canderButtonDisabled" class="canderButtonDisabled cander-success-text cander-hide">Your gift message was added!</div>
                <a href="#" class="canderButtonNoThanks cander-button cander-secondary-button cander-hide">Edit</a>
            </div>
        </div>
    `
}

export function getCanderWidgetProductPageHtml () {
  return `
        <div class="canderInitial canderProductPage">
            <div class="cander-initial-block">
                <a href="#" class="canderButton cander-button cander-primary-button">
                    <img class="cander-image-product" src="${canderConfig.api_url}/images/present-product-page.svg"/>
                    ADD VIRTUAL GIFT MESSAGE<span class="cander-hide button-preloader canderButtonPreloader">
                    <img src="${canderConfig.api_url}/images/preloader.gif">
                </span></a>
                <a href="#" class="canderButtonNoThanks cander-button cander-secondary-button cander-hide">
                    <img class="cander-image-product" src="${canderConfig.api_url}/images/present-product-page.svg"/>
                    EDIT VIRTUAL GIFT MESSAGE
                </a>
            </div>
        </div>
    `
}

export function getCanderModalHtml () {
  return `
        <div id="canderModal" class="cander-hide">
            <div id="canderContent">
            </div>
        </div>
    `
}

export function setOrderIdentityToInput(orderIdentity) {
    let canderQrRefs = [...document.getElementsByClassName('cander-qr-ref')];

    if(canderQrRefs.length) {
        canderQrRefs.map((canderQrRef) => {
            canderQrRef.value = orderIdentity
        })
    }
}

export function changeWidgetToEdit() {
    var canderButtons = [...document.getElementsByClassName("canderButton")]
    var canderButtonDisableds = [...document.getElementsByClassName("canderButtonDisabled")]
    var canderTexts = [...document.getElementsByClassName("canderText")]
    var canderButtonsNoThanks = [...document.getElementsByClassName("canderButtonNoThanks")]

    canderButtons.map((element) => {
        element.classList.add('cander-hide')
    })
    canderButtonDisableds.map((element) => {
        element.classList.remove('cander-hide')
    })
    canderButtonsNoThanks.map((element) => {
        element.classList.remove('cander-hide')
    })
    canderTexts.map((element) => {
        element.classList.add('cander-hide')
    })
}