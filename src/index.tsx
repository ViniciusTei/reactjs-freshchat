import * as React from 'react'
import styles from  './styles.module.css';

//need to declare window for typescript stop complaining about fcWidget
declare const window: any;

export interface FreshchatStyles {
  backgroundColor: string;
  color: string;
}

export interface  FreshChatProps {
  token: string;
  externalId?: string;
  firstName?: string;
  lastName?: string;
  label?: string;
  ic_styles?: FreshchatStyles;
}

export const Freshchat: React.FC<FreshChatProps> =  ({ 
  token, 
  externalId, 
  firstName, 
  lastName,
  label,
  ic_styles
}) => {
  const [isWidgetOpen, setIsWidgetOpen] = React.useState(false);
  const UrlIcon = 'https://firebasestorage.googleapis.com/v0/b/repfinder-450e2.appspot.com/o/chat.svg?alt=media&token=885c5d28-2165-4a24-a96c-c1b0c98fab3f'
  
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
        config: {
          headerProperty: {
            hideChatButton: label ? true : false
          }
        },
      })
    
  }

  const toggleWidget = () => {
    window.fcWidget.open();

    //desabilita o botao na tela
    setIsWidgetOpen(true)
    let script = document.createElement('script')
    script.async = true
    script.type = 'text/javascript'
    script.src = `${window.fcWidget.on("widget:closed", function() {
      //reabilita o botao na tela
      setIsWidgetOpen(false)
    })}`
    document.head.appendChild(script)
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
    label ? (
      !isWidgetOpen ? <div className={styles.buttonContainer} onClick={() => toggleWidget()}>
        <div 
          className={styles.buttonContent}
          style={{
            backgroundColor: ic_styles ? ic_styles.backgroundColor : '#002d85',
            color: ic_styles ? ic_styles.color : '#ffffff',
            borderColor: ic_styles ? 
              `transparent ${ic_styles.backgroundColor} transparent transparent` :
              `transparent #002d85 transparent transparent`
          }} 
          
          >
          <label>{label}</label>
          <img 
            src={UrlIcon} 
            alt="chat icon"
            />
        </div>
      </div> : null
   ) : null) 
  
}