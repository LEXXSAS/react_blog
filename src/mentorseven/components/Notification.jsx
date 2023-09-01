import React, { useEffect, useRef } from 'react'
import { AppContext } from './context';

const Notification = () => {

    const {notifyR} = React.useContext(AppContext)

    const notifyRef = useRef(null);
    // setNotifyR(notifyRef.current)
    // if (notifyR) {
    useEffect(() => {
        if (notifyR !== null) {
            notifyRef.current.style = 'display: none'
        }
    }, [])
    // }
    // 
    // console.log(notifyRef.current)

  return (
    <div ref={notifyRef} className="toasty">
        <div className="toasty-content">
        <i className="bi bi-check"></i>
            <div className="message">
                <span className="toasty-text text-1">Данные обновлены</span>
                <span className="toasty-text text-2">Изменения сохранены</span>
            </div>
            <i className="bi bi-x toasty-close"></i>

            <div className="progression"></div>
        </div>
    </div>
  )
}

export default Notification;
