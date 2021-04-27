import * as React from 'react'

//need to declare window for typescript stop complaining about fcWidget
declare const window: any;

interface FreshChatProps {
  token: string;
  externalId?: string;
  firstName?: string;
  lastName?: string;
}

export const Freshchat: React.FC<FreshChatProps> =  ({ token, externalId, firstName, lastName}) => {
  //Metodo que injeta o script do freschart
  //pode ser encontrado na doc: https://developers.freshchat.com/web-sdk/#intro
  const loadScript = () => {
    let id = 'freshchat-lib'
    if (document.getElementById(id) || window.fcWidget) return
    let script = document.createElement('script')
    script.async = true
    script.type = 'text/javascript'
    script.src = 'https://wchat.freshchat.com/js/widget.js'
    script.id = id
    document.head.appendChild(script)
  }

  //iniciar o fresch chart passando os dados do petshop
  const init = () => {
      window.fcWidget.init({
        host: 'https://wchat.freshchat.com',
        token: token,
        externalId: externalId || '',
        firstName: firstName || '',
        lastName: lastName || '',
      })
    
  }

  React.useEffect(() => {
    loadScript()

    //Precisa ficar testando se o scrpit foi injetado
    //para so entao iniciar o freschat.
    let interval = setInterval(() => {
      if(window.fcWidget) {
        clearInterval(interval)
        try {
          init()
        } catch (error) {
          console.log(error)
        }
      }
    }, 1000)
  })

  return (
    null
  )
}