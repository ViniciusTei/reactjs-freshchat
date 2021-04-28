import * as React from 'react'
import './styles.css';
import ChatIcon from './assets/chat.svg';

//need to declare window for typescript stop complaining about fcWidget
declare const window: any;

interface FreshchatStyles {
  backgroundColor: string;
  color: string;
}

interface FreshChatProps {
  token: string;
  externalId?: string;
  firstName?: string;
  lastName?: string;
  label?: string;
  styles?: FreshchatStyles;
}

export const Freshchat: React.FC<FreshChatProps> =  ({ 
  token, 
  externalId, 
  firstName, 
  lastName,
  label,
  styles
}) => {
  const [isWidgetOpen, setIsWidgetOpen] = React.useState(false);
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

  const toggleWidget = () => {
    window.fcWidget.open();

    //desabilita o botao na tela
    setIsWidgetOpen(!isWidgetOpen)
    window.fcWidget.on("widget:closed", function(resp: any) {
      //reabilita o botao na tela
      setIsWidgetOpen(!isWidgetOpen)
    });
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
      <div className="buttonContainer" onClick={() => toggleWidget()}>
        <div 
          className="buttonContent"
          style={{
            backgroundColor: styles ? styles.backgroundColor : '#002d85',
            color: styles ? styles.color : '#ffffff',
            borderColor: styles ? 
              `transparent ${styles.backgroundColor} transparent transparent` :
              `transparent #002d85 transparent transparent`
          }} 
          
          >
          <label>{label}</label>
          <img 
            src={ChatIcon} 
            alt="chat icon"
            />
        </div>
      </div>
   ) : null) 
  
}