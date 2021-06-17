import '../../public/css/custom.css'
import { canderConfig } from './config'

import { mainScreen } from './cander-main-screen'
import { canderItScreen } from './cander-it'
import { canderChooseScreen } from './cander-choose-screen'
import { canderVideo } from './cander-video'
import { canderAudio } from './cander-audio'
import { canderResult } from './cander-result'
import { canderImageScreen } from './cander-image'
import { analytics } from './analytics'
import IMask from 'imask'
import intlTelInput from 'intl-tel-input'
import { sentry } from './sentry'
// import { fullstory } from './fullstory'  // temporary disable
import { RecorderService } from './audio/RecorderService'

import instance from './instance'

function isOrderPage () {
  return typeof Shopify !== 'undefined' && Shopify.checkout !== undefined
}

function isCartPage () {
  return window.location.pathname.includes('/cart')
}

function allowWidgetForPrecheckout () {
  const queryString = window.location.search
  const urlParams = new URLSearchParams(queryString)
  return isCartPage() && (urlParams.get('canderpreview') == 'true')
}

function loadAddPipe () {
  const scriptAddPipe = document.createElement('script')
  scriptAddPipe.src = '//cdn.addpipe.com/2.0/pipe.js'
  document.body.appendChild(scriptAddPipe)
}

const canderOrderResult = {
  media: {
    file: null,
    url: null,
    type: null
  },
  sender: { // +
    name: null,
    emailAddress: null,
    phoneNumber: null
  }, // +
  recipient: { // +
    name: 'Test',
    emailAddress: null,
    phoneNumber: null
  },
  card: { // +
    id: null
  },
  order: { // *
    id: null,
    identity: null,
    domain: null,
    checkout: {
      token: null
    }
  }
}

let canderWidgetHtml

function getCanderWidgetHtml (precheckout = false) {
  return `
    <div ${(precheckout ? ' class="canderInitial cander-initial-precheckout"' : 'class="canderInitial"')} onload="loadCander()">
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

function getCanderWidgetProductPageHtml () {
  return `
    <div class="canderInitial canderProductPage" onload="loadCander()">
        <div class="cander-initial-block">
            <a href="#" class="canderButton cander-button cander-primary-button"><img class="cander-image-product" src="${canderConfig.api_url}/images/present-product-page.svg"/>ADD VIRTUAL GIFT MESSAGE<span class="cander-hide button-preloader canderButtonPreloader"><img src="${canderConfig.api_url}/images/preloader.gif"></span></a>
            <a href="#" class="canderButtonNoThanks cander-button cander-secondary-button cander-hide"><img class="cander-image-product" src="${canderConfig.api_url}/images/present-product-page.svg"/>EDIT VIRTUAL GIFT MESSAGE</a>
        </div>
    </div>
`
}

const getOrderDetails = () => {
  const params = {
    orderId: Shopify.checkout.order_id,
    checkoutToken: Shopify.checkout.token
  }

  return instance.get(`${canderConfig.proxyPrefix}/orders/details`, { params })
    .then(r => r.data)
    .catch(console.error)
}

function loadCanderToCartPage () {
  return new Promise((resolve, reject) => {
    sentry()
    canderOrderResult.order.domain = Shopify.shop
    addWidgetToCart()
    resolve('OK')
  })
}

function loadCanderToOrderPage () {
  sentry()
  initCanderOrderResult()
  canderWidgetHtml = getCanderWidgetHtml()
  addContentBox().then(() => {
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
    getOrderDetails().then(res => {
      if (!res.identity && !res.canderMessageId) {
        element.style.display = 'block'
      }
      if (localStorage.getItem('canderOrderIdentity')) {
        localStorage.removeItem('canderOrderIdentity')
      }
      if (localStorage.getItem('canderConfirmUrls')) {
        localStorage.removeItem('canderConfirmUrls')
      }
      if (localStorage.getItem('canderPhoneNumbers')) {
        localStorage.removeItem('canderPhoneNumbers')
      }
    })
  })
}

function loadCanderToCartPageOnlyInput (orderIdentity = null) {
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

function addContentBox () {
  return new Promise((resolve, reject) => {
    const res = Shopify.Checkout.OrderStatus.addContentBox(canderWidgetHtml)
    resolve('OK')
  })
}

function addWidgetToCart () {
  const castomCanderContainer = document.getElementById('canderContainer')
  const inputCanderQrRef = '<input class="cander-qr-ref" type="hidden" name="attributes[cander qr ref]" value>'
  canderWidgetHtml = getCanderWidgetHtml(true)
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

function loadCanderToProductPage () {
  return new Promise((resolve, reject) => {
    sentry()
    canderOrderResult.order.domain = Shopify.shop
    addWidgetToProduct()
    resolve('OK')
  })
}

function addWidgetToProduct () {
  const castomCanderContainer = document.getElementById('canderContainer')
  canderWidgetHtml = getCanderWidgetProductPageHtml()
  if (castomCanderContainer) {
    castomCanderContainer.innerHTML = canderWidgetHtml // + inputCanderQrRef
  }
}

function initCanderOrderResult () {
  if (isOrderPage()) {
    canderOrderResult.order.id = Shopify.checkout.order_id
    canderOrderResult.order.domain = Shopify.shop
    canderOrderResult.order.checkout.token = Shopify.checkout.token
    canderOrderResult.sender.emailAddress = Shopify.checkout.email
    canderOrderResult.sender.phoneNumber = null // Shopify.checkout.phone
    canderOrderResult.sender.name = Shopify.checkout.billing_address.first_name ? `${Shopify.checkout.billing_address.first_name} ${Shopify.checkout.billing_address.last_name}` : Shopify.checkout.billing_address.last_name
    // let phoneNumber
    // if (Shopify.checkout.shipping_address && Shopify.checkout.shipping_address.phone) {
    //     phoneNumber = Shopify.checkout.shipping_address.phone.replace(/\D+/g, "");
    // } else {
    //     phoneNumber = null
    // }
    // canderOrderResult.recipient.phoneNumber = phoneNumber
  } else {
    canderOrderResult.order.domain = Shopify.shop
  }
}

const data = {
  cardCategories: []
}
// import data from './cards-data-prod.json'
let loadedCards = false

instance.get(`${canderConfig.proxyPrefix}/getSettings`)
  .then(response => {
    if (response.data.error) {
      console.log(response.data.error)
      return
    }
    initCander(response.data)
  })
  .catch(error => {
    console.log('error', error)
  })

function initCander (settings) {
  const orderIdentity = localStorage.getItem('canderOrderIdentity')
  if (allowWidgetForPrecheckout()) {
    loadCanderToCartPage().then(() => {
      pageLoaded()
    })
    return
  }
  if (!settings.activated) {
    return
  }
  if (window.location.pathname.includes('/products/') && document.getElementById('canderContainer')) {
    canderOrderResult.order.domain = Shopify.shop
    loadCanderToProductPage(orderIdentity)
    pageLoaded()
    return
  }
  if (isOrderPage() && settings.showOnOrder) {
    loadCanderToOrderPage()
    pageLoaded()
    return
  }
  if (isCartPage() && !settings.showOnCart) {
    if (orderIdentity) {
      loadCanderToCartPageOnlyInput(orderIdentity)
      return
    }
    return
  }
  if (isCartPage() && settings.showOnCart) {
    /* if(orderIdentity){
            loadCanderToCartPageOnlyInput(orderIdentity)
            return
        } */
    loadCanderToCartPage().then(() => {
      pageLoaded()
    })
  }
}

const loadCards = () => {
  instance.get(`${canderConfig.proxyPrefix}/cander/cards`)
    .then(function (response) {
      data.cardCategories = response.data
      loadedCards = true
    })
    .catch(function (error) {
      console.log('error', error)
    })
}

async function loadCander () {
  // fullstory() temporary disabled
  loadAddPipe()
  const modal = `
        <div id="canderModal">
            <div id="canderContent">

            </div>
            <div class="cander-chosen-card-preloader cander-hide" id="canderChosenCardPreloader">
                <img src="${canderConfig.api_url}/images/preloader.gif">
            </div>
        </div>
    `
  document.body.insertAdjacentHTML('afterend', modal)
  mainScreen.getCss()
}

function pageLoaded () {
  if (localStorage.getItem('canderPhoneNumbers')) {
    canderOrderResult.recipient.phoneNumber = getCanderPhoneNumber()
  }
  loadCander().then(function () {
    analytics.widgetImpressionEvent()
    loadCards()

    const canderButtons = [...document.getElementsByClassName('canderButton')]
    const canderButtonDisableds = [...document.getElementsByClassName('canderButtonDisabled')]
    const canderButtonPreloaders = [...document.getElementsByClassName('canderButtonPreloader')]
    const canderButtonsNoThanks = [...document.getElementsByClassName('canderButtonNoThanks')]
    const canderModal = document.getElementById('canderModal')
    const canderContent = document.getElementById('canderContent')
    const canderTexts = [...document.getElementsByClassName('canderText')]
    const activeCard = null
    let sessionConfig = {
      isUseCard: false,
      card: {},
      source: {
        type: null,
        data: null,
        video_image: null
      }
    }
    const steps = {
      currentScreen: null,
      step: 0,
      previousArray: []
    }

    let creatFromScratchFlag = false

    if (isConfirmed()) {
      changeWidgetToEdit()
    }

    canderButtons.map((canderButton) => {
      canderButton.addEventListener('click', function (event) {
        event.preventDefault()
        startModal()
      })
    })

    canderButtonsNoThanks.map((canderButtonNoThanks) => {
      canderButtonNoThanks.addEventListener('click', function (event) {
        event.preventDefault()
        sessionConfig = {
          isUseCard: false,
          card: {},
          source: {
            type: null,
            data: null,
            video_image: null
          }
        }
        startModal()
      })
    })

    function startModal () {
      analytics.widgetClickEvent()
      if (loadedCards) {
        canderButtonClick()
        showFirstScreen()
      } else {
        toggleElements(canderButtonPreloaders)
        const waitGettingCard = setInterval(() => {
          if (loadedCards) {
            toggleElements(canderButtonPreloaders)
            canderButtonClick()
            showFirstScreen()
            clearInterval(waitGettingCard)
          }
        }, 500)
      }
    }

    function showFirstScreen () {
      stopScroll()
      changeScreen(mainScreen.getMainHtml()).then(response => {
        const themesList = document.getElementById('themesList')
        const cardsList = document.getElementById('cardsList')
        // let createFromScratch = document.getElementById('createFromScratch')
        const canderMainScreen = document.getElementById('canderMainScreen')
        const createGiftMessage = document.getElementById('createGiftMessage')
        const createAudioMessage = document.getElementById('createAudioMessage')
        const createVideoMessage = document.getElementById('createVideoMessage')
        const canderMainScreenTopBlock = document.getElementById('canderMainScreenTopBlock')
        // cardsList.style.paddingTop = canderMainScreenTopBlock.offsetHeight + 'px'
        const canderChosenCardPreloader = document.getElementById('canderChosenCardPreloader')
        themesList.innerHTML = mainScreen.getCategoryListHtml(data.cardCategories)
        cardsList.innerHTML = mainScreen.getCardsHtmlByCategory(data.cardCategories, data.cardCategories[0].id)
        mainScreen.initTabs(data)
        hideButtonInit()

        const canderCards = document.getElementsByClassName('cander-card')
        Array.from(canderCards).forEach(function (element) {
          element.addEventListener('click', function (e) {
            sessionConfig.isUseCard = true
            sessionConfig.card = mainScreen.getCarbById(data, this.dataset.cardId)
            canderChosenCardPreloader.classList.remove('cander-hide')
            showcanderItScreen()
          })
        })

        themesList.addEventListener('change', (event) => {
          Array.from(canderCards).forEach(function (element) {
            element.addEventListener('click', function (e) {
              sessionConfig.isUseCard = true
              sessionConfig.card = mainScreen.getCarbById(data, this.dataset.cardId)
              canderChosenCardPreloader.classList.remove('cander-hide')
              showcanderItScreen()
            })
          })
        })

        createGiftMessage.addEventListener('click', function (e) {
          e.preventDefault()
          sessionConfig.isUseCard = false
          creatFromScratchFlag = true
          hideScreen(canderMainScreen).then(() => {
            startCanderText()
          })
        })
        createAudioMessage.addEventListener('click', function (e) {
          e.preventDefault()
          sessionConfig.isUseCard = false
          creatFromScratchFlag = true
          hideScreen(canderMainScreen).then(() => {
            startCanderAudio()
          })
        })
        createVideoMessage.addEventListener('click', function (e) {
          e.preventDefault()
          sessionConfig.isUseCard = false
          creatFromScratchFlag = true
          hideScreen(canderMainScreen).then(() => {
            startCanderVideo()
          })
        })
      })
    }

    function hideButtonInit () {
      const canderCloseButton = document.getElementById('canderCloseButton')
      canderCloseButton.addEventListener('click', function (e) {
        e.preventDefault()
        hideModal()
      })
    }

    function hideModal () {
      canderModal.classList.add('cander-hide')
      startScroll()
    }

    function showcanderItScreen (notRotate = false) {
      changeScreen(canderItScreen.getCanderItHtml(sessionConfig.card.media.path, notRotate)).then(() => {
        const canderItScreen = document.getElementById('canderItScreen')
        const canderChosenCardImg = document.getElementById('canderChosenCardImg')
        const canderChosenCard = document.getElementById('canderChosenCard')
        const canderItButton = document.getElementById('canderItButton')
        const canderTitleText = document.getElementById('canderTitleText')
        if (notRotate) {
          canderItButton.classList.add('cander-hide')
          canderTitleText.innerText = 'Select Message Option'
        }
        hideButtonInit()
        canderChosenCardImg.addEventListener('load', () => {
          showScreen(canderItScreen).then(() => {
            const canderChosenCardPreloader = document.getElementById('canderChosenCardPreloader')
            canderChosenCardPreloader.classList.add('cander-hide')
            creatFromScratchFlag = false

            const canderChooseVideoButton = document.getElementById('createVideoMessage')
            const canderChooseAudioButton = document.getElementById('createAudioMessage')
            const canderChooseTextButton = document.getElementById('createGiftMessage')
            const buttonBackCanderModal = document.getElementById('buttonBackCanderModal')
            buttonBackCanderModal.addEventListener('click', function () {
              showFirstScreen()
            })

            canderChosenCard.style.width = canderChosenCardImg.width + 'px'
            canderChooseVideoButton.addEventListener('click', function () {
              startCanderVideo()
            })

            canderChooseAudioButton.addEventListener('click', function () {
              startCanderAudio()
            })

            canderChooseTextButton.addEventListener('click', async function () {
              startCanderText()
            })
          })
        }, false)

        canderItButton.addEventListener('click', async (e) => {
          if (!notRotate) {
            canderChosenCard.classList.add('rotate')
            canderItButton.classList.add('cander-hide')
            canderTitleText.innerText = 'Select Message Option'
          }
        })
      })
    }

    function canderButtonClick () {
      canderModal.style.display = 'block'
      canderModal.classList.remove('cander-hide')
    }

    // function closeCanderModal(){
    //     canderModal.style.display = "none";
    // }

    function hideScreen (oldScreen) {
      return new Promise((resolve, reject) => {
        animate(oldScreen, 'opacity', 1, 0, 500)
        resolve('OK')
      })
    }
    function showScreen (newScreen) {
      return new Promise((resolve, reject) => {
        animate(newScreen, 'opacity', 0, 1, 1000)
        resolve('OK')
      })
    }

    async function showResultScreen () {
      await changeScreen(canderResult.getResultHtml(sessionConfig)).then(() => {

      })
      const canderResultPage = document.getElementById('canderResultPage')
      const canderResultRecipientInput = document.getElementById('canderResultRecipientInput')
      const iti = intlTelInput(canderResultRecipientInput, {
        initialCountry: 'auto',
        separateDialCode: true,
        geoIpLookup: function (success, failure) {
          $.get('https://ipinfo.io', function () {}, 'jsonp').always(function (resp) {
            const countryCode = (resp && resp.country) ? resp.country : 'us'
            success(countryCode)
          })
        }
      })

      canderResultPage.style.minHeight = canderContent.offsetHeight + 'px'
      showScreen(canderResultPage).then(() => {
        hideButtonInit()
        const buttonBackCanderModal = document.getElementById('buttonBackCanderModal')
        buttonBackCanderModal.addEventListener('click', () => {
          if (creatFromScratchFlag) {
            // showChoosenScreen()
            showFirstScreen()
          } else {
            showcanderItScreen(true)
          }
        })

        canderOrderResult.media.type = sessionConfig.source.type
        if (sessionConfig.source.type == 'Photo' || sessionConfig.source.datatype == 'base64') {
          canderOrderResult.media.url = null
          canderOrderResult.media.file = sessionConfig.source.data
        } else {
          canderOrderResult.media.file = null
          canderOrderResult.media.url = sessionConfig.source.data
        }
        canderOrderResult.card.id = sessionConfig.card.id ? sessionConfig.card.id : null

        const canderConfirmButton = document.getElementById('canderConfirmButton')
        const canderEditButton = document.getElementById('canderEditButton')
        const canderQrRefs = [...document.getElementsByClassName('cander-qr-ref')]
        const canderResultRecipientInputAlert = document.getElementById('canderResultRecipientInputAlert')
        const confirmError = document.getElementById('confirmError')
        const confirmPreloader = document.getElementById('confirmPreloader')

        if (sessionConfig.source.type == 'Audio' || sessionConfig.source.type == 'Video') {
          canderEditButton.innerText = 'Record again'
        }

        canderEditButton.addEventListener('click', () => {
          if (creatFromScratchFlag) {
            showFirstScreen()
          } else {
            showcanderItScreen(true)
          }
        })

        canderConfirmButton.addEventListener('click', () => {
          const code = document.getElementsByClassName('iti__selected-dial-code')
          if (!canderOrderResult.recipient.phoneNumber) {
            if (canderResultRecipientInput.value && canderResultRecipientInput.value != '') {
              // canderOrderResult.recipient.phoneNumber = code[0].innerText + canderResultRecipientInput.value
              canderOrderResult.recipient.phoneNumber = iti._getFullNumber()
              setCanderPhoneNumber(canderOrderResult.recipient.phoneNumber)
              // localStorage.setItem('canderPhoneNumber', canderOrderResult.recipient.phoneNumber)
            } else {
              canderOrderResult.recipient.phoneNumber = null
            }
          }
          if (!canderOrderResult.recipient.phoneNumber) {
            canderResultRecipientInputAlert.classList.remove('cander-hide')
            return
          }
          confirmPreloader.classList.remove('cander-hide')
          instance.post(`${canderConfig.proxyPrefix}/cander/messages`, canderOrderResult)
            .then(response => {
              if (canderQrRefs.length) {
                canderQrRefs.map((canderQrRef) => {
                  canderQrRef.value = response.data.orderIdentity
                })
                canderOrderResult.order.identity = response.data.orderIdentity
              }
              if (response.data.orderIdentity) {
                localStorage.setItem('canderOrderIdentity', response.data.orderIdentity)
              }
              canderModal.classList.add('cander-hide')
              changeWidgetToEdit()
              startScroll()
              analytics.widgetActionEvent()
              saveConfirmToSession()
            })
            .catch(error => {
              if (error.message) {
                alert(error.message)
              }
            })
        })
      })
        .then(() => {
          const canderResultItems = document.getElementById('canderResultItems')
          const maskOptions = {
            mask: '000000000000'
          }
          const canderInputsBlock = document.getElementById('canderInputsBlock')
          const canderResultRecipientInput = document.getElementById('canderResultRecipientInput')
          const mask = IMask(canderResultRecipientInput, maskOptions)
          if (canderOrderResult.recipient.phoneNumber) {
            canderInputsBlock.classList.add('cander-hide')
          }
          if (sessionConfig.source.type == 'Photo' || sessionConfig.source.type == 'Audio') {
            const canderResultImageCard = document.getElementById('canderResultImageCard')
            const canderResultImage = document.getElementById('canderResultImage')
            if (!creatFromScratchFlag) {
              const setImageHeight = setInterval(() => {
                if (canderResultImageCard.offsetHeight > 0) {
                  canderResultImage.style.height = canderResultImageCard.offsetHeight + 'px'
                  canderResultImageCard.style.height = canderResultImageCard.offsetHeight + 'px'
                  clearInterval(setImageHeight)
                }
              }, 100)
            } else {
              if (sessionConfig.source.type == 'Audio') {
                const setImageHeight = setInterval(() => {
                  if (canderResultImage.offsetWidth > 0) {
                    canderResultImage.style.height = Math.floor(canderResultImage.offsetWidth * 16 / 9) + 'px'
                    clearInterval(setImageHeight)
                  }
                }, 50)
              }
            }
            if (canderAudio.checkSafari() && sessionConfig.source.type == 'Audio') {
              const canderResultAudio = document.getElementById('canderResultAudio')
              canderResultAudio.style.width = '45px'
            }
          }
        })

      if (sessionConfig.source.type == 'Audio') {
        const canderSourcePreloader = document.getElementById('canderSourcePreloader')
        const canderResultImage = document.getElementById('canderResultImage')
        if (sessionConfig.source.datatype == 'base64') {
          canderSourcePreloader.classList.add('cander-hide')
          canderResultImage.innerHTML += canderResult.getAudioSource(sessionConfig)
        } else {
          const interval = setInterval(() => {
            instance.get(`${canderConfig.api_url}/api/checkurl`, {
              params: {
                url: sessionConfig.source.data
              }
            })
              .then((response) => {
                if (response.data) {
                  clearInterval(interval)
                  canderSourcePreloader.classList.add('cander-hide')
                  canderResultImage.innerHTML += canderResult.getAudioSource(sessionConfig)
                }
              })
              .catch(function (error) {
                // console.log(error)
              })
          }, 1000)
        }
      }
      if (sessionConfig.source.type == 'Video') {
        const canderResultItemSource = document.getElementById('canderResultItemSource')
        const canderResultImageCard = document.getElementById('canderResultImageCard')
        if (sessionConfig.card.id) {
          const setImageHeight = setInterval(() => {
            if (canderResultImageCard.offsetHeight > 0) {
              canderResultItemSource.style.height = canderResultImageCard.offsetHeight + 'px'
              canderResultImageCard.style.height = canderResultImageCard.offsetHeight + 'px'
              clearInterval(setImageHeight)
            }
          }, 100)
        }

        const interval = setInterval(() => {
          instance.get(`${canderConfig.api_url}/api/checkurl`, {
            params: {
              url: sessionConfig.source.data
            }
          })
            .then((response) => {
              if (response.data) {
                clearInterval(interval)
                canderResultItemSource.innerHTML = canderResult.getVideoSource(sessionConfig)
                const canderResultImageCard = document.getElementById('canderResultImageCard')
                const canderResultVideo = document.getElementById('canderResultVideo')
                canderResultVideo.style.height = canderResultImageCard.offsetHeight + 'px'
              }
            })
            .catch(function (error) {
              // console.log(error)
            })
        }, 1000)
      }
    }

    function closeSourceInit () {
      const canderCloseSourceButton = document.getElementById('canderCloseSourceButton')
      canderCloseSourceButton.addEventListener('click', () => {
        if (creatFromScratchFlag) {
          showFirstScreen()
        } else {
          showcanderItScreen(true)
        }
      })
    }

    async function startCanderVideo () {
      changeScreen(canderVideo.getVideoHtml()).then(async () => {
        const hash = 'a0981400e89999c33e7856c5bbde89b9'
        const pipeParams = { size: { width: 640, height: 510 }, qualityurl: 'avq/480p.xml', accountHash: hash, eid: 'ESVoM9', mrt: 120, dpv: 0, dup: 1, asv: 1 }
        PipeSDK.insert('canderVideoAdPipe', pipeParams, function (recorderObject) {
          recorderObject.onSaveOk = (recorderId, streamName, streamDuration, cameraName, micName, audioCodec, videoCodec, fileType, videoId, audioOnly, location) => {
            btRecordPressed = false
            success(location, streamName)
          }

          recorderObject.onVideoUploadSuccess = function (recorderId, filename, filetype, videoId, audioOnly, location) {
            success(location, filename)
          }

          recorderObject.onDesktopVideoUploadSuccess = function (recorderId, filename, filetype, videoId, audioOnly, location) {
            success(location, filename)
          }

          let btRecordPressed = false

          recorderObject.btRecordPressed = (recorderId) => {
            btRecordPressed = true
          }

          initStopAddpipe(recorderObject)

          const success = (location, filename) => {
            recorderObject.remove()
            const video_url = `https://${location}/${hash}/${filename}.mp4`
            const video_image = `https://${location}/${hash}/${filename}.jpg`
            sessionConfig.source.type = 'Video'
            sessionConfig.source.data = video_url
            sessionConfig.source.video_image = video_image
            sessionConfig.source.datatype = null
            showResultScreen().then(function () {})
          }
        })
      })
    }

    function initStopAddpipe (recorderObject) {
      const canderCloseButton = document.getElementById('canderCloseButton')
      const canderCloseSourceButton = document.getElementById('canderCloseSourceButton')

      canderCloseButton.addEventListener('click', (e) => {
        e.preventDefault()
        recorderObject.remove()
        hideModal()
      })

      canderCloseSourceButton.addEventListener('click', () => {
        recorderObject.remove()
        if (creatFromScratchFlag) {
          showFirstScreen()
        } else {
          showcanderItScreen(true)
        }
      })
    }

    async function startCanderAudio () {
      if (canderAudio.checkSafari()) {
        changeScreen(canderAudio.getAudioHtmlSafary()).then(async () => {
          closeSourceInit()
          hideButtonInit()

          const canderBtnRecord = document.getElementById('cander-btn-record')
          const canderBtnStop = document.getElementById('cander-btn-stop')
          const canderRecordingDebugTxt = document.getElementById('cander-recording-debug-txt')
          let recorderSrvc

          canderBtnRecord.addEventListener('click', evt => {
            recorderSrvc = new RecorderService()
            recorderSrvc.startRecording()
            recorderSrvc.em.addEventListener('recording', event => {
              setTimeout(() => {
                sessionConfig.source.type = 'Audio'
                sessionConfig.source.data = event.detail.recording.blob
                sessionConfig.source.datatype = 'base64'
                showResultScreen()
              }, 1000)
            })

            canderBtnRecord.classList.add('cander-hide')
            canderBtnStop.classList.remove('cander-hide')
            canderRecordingDebugTxt.classList.remove('cander-hide')
          })

          canderBtnStop.addEventListener('click', evt => {
            recorderSrvc.stopRecording()
          })
        })
      } else {
        changeScreen(canderAudio.getAudioHtml()).then(async () => {
          const hash = 'a0981400e89999c33e7856c5bbde89b9'
          const pipeParams = { size: { width: 640, height: 390 }, qualityurl: 'avq/360p.xml', accountHash: hash, eid: 'ESVoM9', mrt: 120, ao: 1, dup: 1 }
          PipeSDK.insert('canderVideoAdPipe', pipeParams, function (recorderObject) {
            recorderObject.onSaveOk = (recorderId, streamName, streamDuration, cameraName, micName, audioCodec, videoCodec, fileType, videoId, audioOnly, location) => {
              btRecordPressed = false
              success(location, streamName)
            }

            recorderObject.onVideoUploadSuccess = function (recorderId, filename, filetype, videoId, audioOnly, location) {
              success(location, filename)
            }

            recorderObject.onDesktopVideoUploadSuccess = function (recorderId, filename, filetype, videoId, audioOnly, location) {
              success(location, filename)
            }

            let btRecordPressed = false

            recorderObject.btRecordPressed = (recorderId) => {
              btRecordPressed = true
            }

            initStopAddpipe(recorderObject)

            const success = (location, filename) => {
              recorderObject.remove()
              const audio_url = `https://${location}/${hash}/${filename}.mp4`
              sessionConfig.source.type = 'Audio'
              sessionConfig.source.data = audio_url
              sessionConfig.source.datatype = null
              showResultScreen()
            }

            // initStopAddpipe(recorderObject)
          })
        })
      }
    }

    async function startCanderText () {
      const code = Math.random().toString().substr(3, 15)
      const frameUrl = `${canderConfig.api_url}/photoeditor?code=${code}`

      await changeScreen(canderImageScreen.getCanderImageHtml()).then(() => {
        const photoEditorFrame = document.getElementById('photoEditorFrame')
        photoEditorFrame.src = frameUrl
        window.setTimeout(photoEditorFrame.classList.remove('cander-hide'), 500)
      })
      const canderImageScreenBlock = document.getElementById('canderImageScreen')

      await showScreen(canderImageScreenBlock).then(() => {
        hideButtonInit()
        const buttonBackCanderModal = document.getElementById('buttonBackCanderModal')
        buttonBackCanderModal.addEventListener('click', () => {
          if (creatFromScratchFlag) {
            showFirstScreen()
          } else {
            showcanderItScreen(true)
          }
        })
        const iFrameInterval = setInterval(() => {
          instance.get(`${canderConfig.proxyPrefix}/photoeditor/get/${code}`)
            .then((response) => {
              if (response.data) {
                sessionConfig.source.type = 'Photo'
                sessionConfig.source.data = response.data
                canderImageScreenBlock.remove()
                showResultScreen()
                clearInterval(iFrameInterval)
              }
            })
            .catch((e) => {
              // This iframe will be deleted in the future
              // alert(`cander ${e.message}`)
            })
        }, 5000)
      })
    }

    async function showChoosenScreen () {
      await changeScreen(canderChooseScreen.getChooseScreenHtml())
      const canderChooseScreenPage = document.getElementById('canderChooseScreen')
      const canderChooseVideoButton = document.getElementById('canderChooseVideo')
      const canderChooseAudioButton = document.getElementById('canderChooseAudio')
      const canderChooseTextButton = document.getElementById('canderChooseText')
      creatFromScratchFlag = true

      await showScreen(canderChooseScreenPage).then(() => {
        const buttonBackCanderModal = document.getElementById('buttonBackCanderModal')
        buttonBackCanderModal.addEventListener('click', function () {
          showFirstScreen()
        })
      })

      canderChooseVideoButton.addEventListener('click', function () {
        startCanderVideo()
      })

      canderChooseAudioButton.addEventListener('click', function () {
        startCanderAudio()
      })

      canderChooseTextButton.addEventListener('click', async function () {
        startCanderText()
      })
    }

    function changeScreen (newScreen) {
      return new Promise((resolve, reject) => {
        canderContent.innerHTML = newScreen
        resolve('OK')
      })
    }

    function toggleElements (elements) {
      elements.map((element) => {
        if (element.classList.contains('cander-hide')) {
          element.classList.remove('cander-hide')
        } else {
          element.classList.add('cander-hide')
        }
      })
    }

    function changeWidgetToEdit () {
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

    function stopScroll () {
      document.body.classList.add('cander-stop-scroll')
    }
    function startScroll () {
      document.body.classList.remove('cander-stop-scroll')
    }

    function animate (object, property, start_value, end_value, time) {
      const frame_rate = 0.1
      let frame = 0
      let value
      const delta = (end_value - start_value) / time / frame_rate
      const handle = setInterval(function () {
        frame++
        if (start_value < end_value) {
          value = start_value + Math.abs(delta * frame)
        } else {
          value = start_value - Math.abs(delta * frame)
        }
        object.style[property] = value
        if (value == end_value) {
          clearInterval(handle)
        }
      }, 1 / frame_rate)
    }
  })

  function saveConfirmToSession () {
    let urlsArray = []
    if (localStorage.getItem('canderConfirmUrls')) {
      urlsArray = JSON.parse(localStorage.getItem('canderConfirmUrls'))
    }
    urlsArray.push(window.location.origin + window.location.pathname)
    localStorage.setItem('canderConfirmUrls', JSON.stringify(urlsArray))
  }

  function setCanderPhoneNumber (phone) {
    let phonesArray = []
    if (localStorage.getItem('canderPhoneNumbers')) {
      phonesArray = JSON.parse(localStorage.getItem('canderPhoneNumbers'))
    }
    phonesArray.push({ url: window.location.origin + window.location.pathname, phone: phone })
    localStorage.setItem('canderPhoneNumbers', JSON.stringify(phonesArray))
  }

  function getCanderPhoneNumber () {
    let phonesArray = []
    if (localStorage.getItem('canderPhoneNumbers')) {
      phonesArray = JSON.parse(localStorage.getItem('canderPhoneNumbers'))
      const result = phonesArray.find(item => {
        if (item.url == window.location.origin + window.location.pathname) {
          return true
        }
      })
      if (result) {
        return result.phone
      }
    }
    return null
  }

  function isConfirmed () {
    if (localStorage.getItem('canderConfirmUrls')) {
      const urlsArray = JSON.parse(localStorage.getItem('canderConfirmUrls'))
      return urlsArray.find((url) => {
        if (url == window.location.origin + window.location.pathname) {
          return true
        }
        return false
      })
    }
    return false
  }
}
