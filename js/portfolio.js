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
      for (let i=0; i<openTags.length; i++) {
        openTags[i].onclick = (e) => {
          console.log(e.target.parentNode)
        }
      }
    },
    changeClassName:function (el, className) {
      let childs = el.parentNode.children
      for (let i=0; i<childs.length; i++) {
        if (childs[i] === el) {
          childs[i].classList.add(className)
        } else {
          childs[i].classList.remove(className)
        }
      }
    }
  }

  controller.init(view)
}.call()