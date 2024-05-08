import TawkMessengerReact from '@tawk.to/tawk-messenger-react';
import { useRef } from 'react';

function Chat() {
    const tawkMessengerRef = useRef();
    const handleMinimize = () => {
      tawkMessengerRef.current.minimize();
    };

  return (
    <div>
         <TawkMessengerReact
        propertyId="65ef5b3f8d261e1b5f6c0a9e"
        widgetId="1hssjqs9p"  useRef={tawkMessengerRef} />
    </div>
  )
}

export default Chat