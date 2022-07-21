export function isWebp() {
  // Проверка поддержки webp
  function testWebp(callback) {
    let webP = new Image()
    webP.onload = webP.onerror = function () {
      callback(webP.height == 2)
    }
    webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA'
  }
  // Добавление класса _webp или _no-webp для HTML 
  testWebp(function (support) {
    let className = support === true ? 'webp' : 'no-webp'
    document.documentElement.classList.add(className)
  })
}

export function windowPopup() {
  const burgerBtn = document.querySelector('.header__burger-btn')
  const popupMenu = document.querySelector('.popup-menu')

  burgerBtn.onclick = () => {
    popupMenu.classList.add('popup-menu_show')
  }

  popupMenu.onclick = (event) => {
    const target = event.target
    const wrapper = target.classList.contains('popup-menu')
    const closeBtn = target.closest('button')

    if (wrapper || closeBtn) {
      popupMenu.classList.remove('popup-menu_show')
    }
  }
}

export function changeValue() {
  const formAction = document.querySelectorAll('form.promo__form')

  const chainsawInfo = {
    shtenli: {
      550: {
        id: '550',
        price: 508,
        weight: '6,5',
      },
      520: {
        id: '520',
        price: 485,
        weight: '6,3',
      },
      450: {
        id: '450',
        price: 466,
        weight: '6,2',
      },
      350: {
        id: '350',
        price: 422,
        weight: '6,0',
      },
    },
    profi: {
      550: {
        id: '5500',
        price: 420,
        weight: '6,5',
      },
      520: {
        id: '5200',
        price: 398,
        weight: '6,5',
      },
      450: {
        id: '4500',
        price: 376,
        weight: '6,5',
      },
      350: {
        id: '3500',
        price: 332,
        weight: '6,3',
      },
    },
  }
  const currentSet = {
    brand: 'shtenli',
    value: 550,
    setCurrentValue() {
      return chainsawInfo[this.brand][this.value]
    }
  }

  function animationNumber(currentPrice, priceLabel) {
    const time        = 150
    const stepNumber  = 72
    let counterPrice  = 0

    const timeInterval = Math.round(time / (currentPrice / stepNumber))
    const intervalChangeNumber = setInterval(() => {
      counterPrice += stepNumber

      if (counterPrice >= currentPrice) {
        clearInterval(intervalChangeNumber)
        priceLabel.innerHTML = currentPrice
      } else {
        priceLabel.innerHTML = counterPrice
      }
    }, timeInterval)
  }

  formAction.forEach((form) => {
    function setValue() {
      const priceLabel = form.querySelector('.price--new')
      const titleLabel = form.querySelector('.product-id')
      const weightLabel = form.querySelector('.product-weight')

      currentSet.brand = form.querySelector("input[name='product']").value
      currentSet.value = form.querySelector('input[name="chainsaw-shtenli"]:checked').value

      priceLabel.innerHTML = currentSet.setCurrentValue().price
      weightLabel.innerHTML = currentSet.setCurrentValue().weight
      titleLabel.innerHTML = currentSet.setCurrentValue().id

      animationNumber(currentSet.setCurrentValue().price, priceLabel)
    }

    setValue()
    form.addEventListener('input', setValue)
  })
}