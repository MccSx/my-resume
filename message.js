!function () {
  //MVC中的V
    let view = document.querySelector('.message')
  
  //MVC中的M，获取数据
    let model = {
      init: function () {
        var APP_ID = 'Nq5s0mNtVbGCCwzwcBj82Pii-gzGzoHsz'
        var APP_KEY = 'ilXxqbt6LMEUXKLwgEtUSONn'
  
        AV.init({
          appId: APP_ID,
          appKey: APP_KEY
        })
      },
      fetch: function () {
        var query = new AV.Query('Message')
        return query.find()    //Promise对象
      },
      save: function (name, content) {
        var Message = AV.Object.extend('Message')
        var message = new Message()
        return message.save({
          name: name,
          content: content
        })    //Promise对象
      }
    }
  
  //MVC中的C
    let controller = {
      veiw: null,
      model: null,
      messageList: null,
      init: function (view) {
        this.view = view
        this.model = model
        this.messageList = view.querySelector('#messageList')
        this.myForm = view.querySelector('#postMessageForm')
        this.model.init()
        this.loadMessages()
        this.bindEvents()
      },
      loadMessages: function () {
        this.model.fetch().then(function (messages) {
          var arr = messages.map(item => item.attributes)
          arr.forEach(item => {
            var liTag = document.createElement('li')
            liTag.innerText = `${item.name}: ${item.content}`
            this.messageList.appendChild(liTag)
          })
        })
      },
      bindEvents: function () {
        this.myForm.addEventListener('submit', (e) => {
          e.preventDefault()
          this.postMessages()
        })
      },
      postMessages: function () {
        var myContent = this.myForm.querySelector('input[name=content]').value
        var myName = this.myForm.querySelector('input[name=name]').value
        this.model.save(myName, myContent).then((object) => {
          var liTag = document.createElement('li')
          liTag.innerText = `${object.attributes.name}: ${object.attributes.content}`
          this.messageList.appendChild(liTag)
          this.myForm.querySelector('input[name=content]').value = ''
        })
      }
    }
  
    controller.init(view, model)
  }.call()