!function () {
  let view = document.querySelector('.portfolio')

  let controller = {
    view: null,
    init: function (view) {
      this.view = view
      this.bindEvents()
    },
    bindEvents: function () {
      let openTags = this.view.querySelectorAll('.open')
      let workTags = this.view.querySelector('.works-wrapper').children
      let bgTag = this.view.querySelector('.bg')
      for (let i=0; i<openTags.length; i++) {
        openTags[i].onclick = (e) => {
          let n,m
          for (let i=0; i<workTags.length; i++) {
            if (e.currentTarget.parentNode === workTags[i]) {
              workTags[i].classList.remove('left')
              workTags[i].classList.remove('right')
              workTags[i].classList.add('active')
              bgTag.style.backgroundImage = `url("./img/${workTags[i].classList[0]}.jpg")`
              n = i
              m = i
            } else {
              workTags[i].classList.remove('active')
            }
          }
          while(n>0) {
            workTags[n-1].classList.remove('right')
            workTags[n-1].classList.add('left')
            n--
          }
          while(m<openTags.length-1) {
            workTags[m+1].classList.remove('left')
            workTags[m+1].classList.add('right')
            m++
          }
        }
      }
    }
  }

  controller.init(view)
}.call()