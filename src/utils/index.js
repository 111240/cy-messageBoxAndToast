
export const Toast = {
  open: parmas => {
    return new Promise((resolve, reject) => {
      let time = parmas.time || 2000
      let { message } = parmas
      let dom = document.createElement('div')
      let body = document.body
      dom.className = 'cy-toast'
      dom.style.animationDuration = time / 1000 + 's'
      dom.innerHTML = message
      body.appendChild(dom)
      dom.className = 'cy-toast cy-toast-fade'
      setTimeout(() => {
        body.removeChild(dom)
        resolve('OK')
      }, time)
    })
  }
}

export const MessageBox = {
  alert: parmas => {
    return new Promise((resolve, reject) => {
      let { message } = parmas
      let alertBox = document.createElement('div')
      let alertHead = document.createElement('div')
      let alertBody = document.createElement('div')
      let alertFoot = document.createElement('button')
      let mask = document.createElement('div')
      let body = document.body
      mask.className = 'cy-aler-mask'
      alertBox.className = 'cy-aler-box'
      alertHead.className = 'cy-aler-head'
      alertBody.className = 'cy-aler-body'
      alertFoot.className = 'cy-aler-foot'
      alertHead.innerHTML = '提示'
      alertBody.innerHTML = message
      alertFoot.innerHTML = '确定'
      alertBox.appendChild(alertHead)
      alertBox.appendChild(alertBody)
      alertBox.appendChild(alertFoot)
      body.appendChild(mask)
      body.appendChild(alertBox)
      alertFoot.onclick = () => {
        mask.className = 'cy-aler-mask cy-aler-maskm-fade-out'
        alertBox.className = 'cy-aler-box cy-aler-fade-out'
        setTimeout(() => {
          body.removeChild(alertBox)
          body.removeChild(mask)
          resolve('OK')
        }, 500)
      }
      mask.onclick = () => {
        mask.className = 'cy-aler-mask cy-aler-maskm-fade-out'
        alertBox.className = 'cy-aler-box cy-aler-fade-out'
        setTimeout(() => {
          body.removeChild(alertBox)
          body.removeChild(mask)
        }, 500)
      }
    })
  },
  confirm: parmas => {
    return new Promise((resolve, reject) => {
      let { message } = parmas
      let confirmBox = document.createElement('div')
      let confirmHead = document.createElement('div')
      let confirmBody = document.createElement('div')
      let confirmFoot = document.createElement('div')
      let confirmFootQue = document.createElement('button')
      let confirmFootCancel = document.createElement('button')
      let mask = document.createElement('div')
      let body = document.body
      mask.className = 'cy-confirm-mask'
      confirmBox.className = 'cy-confirm-box'
      confirmHead.className = 'cy-confirm-head'
      confirmBody.className = 'cy-confirm-body'
      confirmFoot.className = 'cy-confirm-foot'
      confirmHead.innerHTML = '提示'
      confirmBody.innerHTML = message
      confirmFootQue.innerHTML = '确认'
      confirmFootCancel.innerHTML = '取消'
      confirmFoot.appendChild(confirmFootCancel)
      confirmFoot.appendChild(confirmFootQue)
      confirmBox.appendChild(confirmHead)
      confirmBox.appendChild(confirmBody)
      confirmBox.appendChild(confirmFoot)
      body.appendChild(mask)
      body.appendChild(confirmBox)
      confirmFootQue.onclick = () => {
        mask.className = 'cy-confirm-mask cy-confirm-maskm-fade-out'
        confirmBox.className = 'cy-confirm-box cy-confirm-fade-out'
        setTimeout(() => {
          body.removeChild(confirmBox)
          body.removeChild(mask)
          resolve('OK')
        }, 500)
      }
      confirmFootCancel.onclick = () => {
        mask.className = 'cy-confirm-mask cy-confirm-maskm-fade-out'
        confirmBox.className = 'cy-confirm-box cy-confirm-fade-out'
        setTimeout(() => {
          body.removeChild(confirmBox)
          body.removeChild(mask)
        }, 500)
      }
      mask.onclick = () => {
        mask.className = 'cy-confirm-mask cy-confirm-maskm-fade-out'
        confirmBox.className = 'cy-confirm-box cy-confirm-fade-out'
        setTimeout(() => {
          body.removeChild(confirmBox)
          body.removeChild(mask)
        }, 500)
      }
    })
  },
  prompt: parmas => {
    return new Promise((resolve, reject) => {
      let input = document.createElement('input')
      let message, title
      try {
        message = parmas.message || input
        title = parmas.title || '提示'
      } catch (e) {
        message = parmas || input
        title = parmas || '提示'
      }
      let promptBox = document.createElement('div')
      let promptHead = document.createElement('div')
      let promptBody = document.createElement('div')
      let promptFoot = document.createElement('div')
      let promptFootQue = document.createElement('button')
      let promptFootCancel = document.createElement('button')
      let mask = document.createElement('div')
      let body = document.body
      mask.className = 'cy-prompt-mask'
      input.className = 'cy-prompt-input'
      promptBox.className = 'cy-prompt-box'
      promptHead.className = 'cy-prompt-head'
      promptBody.className = 'cy-prompt-body'
      promptFoot.className = 'cy-prompt-foot'
      promptHead.innerHTML = title
      if (typeof message === 'string') {
        promptBody.innerHTML = message
      } else {
        promptBody.appendChild(message)
      }
      promptFootQue.innerHTML = '确认'
      promptFootCancel.innerHTML = '取消'
      promptFoot.appendChild(promptFootCancel)
      promptFoot.appendChild(promptFootQue)
      promptBox.appendChild(promptHead)
      promptBox.appendChild(promptBody)
      promptBox.appendChild(promptFoot)
      body.appendChild(mask)
      body.appendChild(promptBox)
      promptFootQue.onclick = () => {
        mask.className = 'cy-prompt-mask cy-prompt-maskm-fade-out'
        promptBox.className = 'cy-prompt-box cy-prompt-fade-out'
        setTimeout(() => {
          body.removeChild(promptBox)
          body.removeChild(mask)
          resolve(input.value)
        }, 500)
      }
      promptFootCancel.onclick = () => {
        mask.className = 'cy-prompt-mask cy-prompt-maskm-fade-out'
        promptBox.className = 'cy-prompt-box cy-prompt-fade-out'
        setTimeout(() => {
          body.removeChild(promptBox)
          body.removeChild(mask)
        }, 500)
      }
      mask.onclick = () => {
        mask.className = 'cy-prompt-mask cy-prompt-maskm-fade-out'
        promptBox.className = 'cy-prompt-box cy-prompt-fade-out'
        setTimeout(() => {
          body.removeChild(promptBox)
          body.removeChild(mask)
        }, 500)
      }
    })
  }
}
