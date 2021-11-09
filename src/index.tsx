import * as React from 'react'
import styles from './styles.module.css'

// need to declare window for typescript stop complaining about fcWidget
declare const window: any

type FreshchatInitProps = {
  token: string
  externalId?: string
  firstName?: string
  lastName?: string
  host?: string
  restoreId?: string
  email?: string
  phone?: string
  phoneCountryCode?: string
  config?: any
  open?: boolean
  tags?: [string]
  faqTags?: any
  locale?: string
}

export interface FreshchatStyles {
  backgroundColor: string
  color: string
}

export interface FreshChatProps extends FreshchatInitProps {
  label?: string
  ic_styles?: FreshchatStyles
}

export const Freshchat: React.FC<FreshChatProps> = ({
  label,
  ic_styles,
  ...rest
}) => {
  const [isWidgetOpen, setIsWidgetOpen] = React.useState(false)
  const UrlIcon =
    'https://firebasestorage.googleapis.com/v0/b/repfinder-450e2.appspot.com/o/chat.svg?alt=media&token=885c5d28-2165-4a24-a96c-c1b0c98fab3f'

  // Inject FreshChat script in the html
  // oficial doc: https://developers.freshchat.com/web-sdk/#intro
  const loadScript = () => {
    const id = 'freshchat-lib'

    if (document.getElementById(id) || window.fcWidget) return

    const script = document.createElement('script')
    script.async = true
    script.type = 'text/javascript'
    script.src = 'https://wchat.freshchat.com/js/widget.js'
    script.id = id
    document.head.appendChild(script)
  }

  // Init FreshChat with the data passed in
  const init = () => {
    if (label) {
      if (!rest.config) {
        rest.config = {}
      } else {
        rest.config = {
          ...rest.config,
          headerProperty: {
            hideChatButton: true
          }
        }
      }
    }

    if (!rest.host) rest.host = 'https://wchat.freshchat.com'

    window.fcWidget.init({
      ...rest
    })
  }

  const toggleWidget = () => {
    window.fcWidget.open()

    // hide button
    setIsWidgetOpen(true)
    const script = document.createElement('script')
    script.async = true
    script.type = 'text/javascript'
    script.src = `${window.fcWidget.on('widget:closed', function () {
      // show button
      setIsWidgetOpen(false)
    })}`
    document.head.appendChild(script)

    const script_event = document.createElement('script')
    script_event.async = true
    script_event.type = 'text/javascript'
    script_event.src = `${window.fcWidget.on('user:created', function () {
      console.log('User has been created')
      // Function to do some task
    })}`
    document.head.appendChild(script_event)
  }

  React.useEffect(() => {
    loadScript()

    // need check if the FresChat was initalized before try to init the icon
    const interval = setInterval(() => {
      if (window.fcWidget) {
        clearInterval(interval)
        try {
          init()
        } catch (error) {
          console.log(error)
        }
      }
    }, 1000)
  })

  return label ? (
    !isWidgetOpen ? (
      <div className={styles.buttonContainer} onClick={() => toggleWidget()}>
        <div
          className={styles.buttonContent}
          style={{
            backgroundColor: ic_styles ? ic_styles.backgroundColor : '#002d85',
            color: ic_styles ? ic_styles.color : '#ffffff',
            borderColor: ic_styles
              ? `transparent ${ic_styles.backgroundColor} transparent transparent`
              : `transparent #002d85 transparent transparent`
          }}
        >
          <label>{label}</label>
          <img src={UrlIcon} alt='chat icon' width='22px' height='22px' />
        </div>
      </div>
    ) : null
  ) : null
}
