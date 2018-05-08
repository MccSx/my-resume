let mySkill = echarts.init(document.querySelector('.skill'))

let option = {
  title: {
      text: '个人技能'
  },
  color: {
    colorStops: [{
        offset: 0, color: '#FA6A2E' // 0% 处的颜色
    }, {
        offset: 1, color: '#FA6A2E' // 100% 处的颜色
    }],
},
  radar: {
    name: {
        textStyle: {
            color: 'black',
            backgroundColor: '',
            borderRadius: 3,
            padding: [3, 5]
        }
    },
    indicator: [
      { name: 'HTML 5 & CSS 3', max: 100},
      { name: '移动端页面', max: 100},
      { name: 'jQuery', max: 100},
      { name: '小程序制作', max: 100},
      { name: '前端框架', max: 100},
      { name: 'Vue', max: 100}
    ]
  },
  series: [{
    type: 'radar',
    data : [
        {
            value : [90, 85, 80, 70, 80, 85]
        }
    ]
  }]
}

mySkill.setOption(option)