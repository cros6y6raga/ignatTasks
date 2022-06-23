import React from 'react'
import s from './Message.module.css';

type messagePropsType = {
    avatar: string,
    name: string,
    message: string,
    time: string,
}


function Message(props: messagePropsType) {
    return (
        <div className={s.header}>
            <img className={s.avatar} src={props.avatar}/>
            <div className={s.other}>
                <div>{props.name}</div>
                <div className={s.message}>
                    <div className={s.hello}>{props.message}</div>
                    <div>{props.time}</div>
                </div>
            </div>
        </div>
    )
}

export default Message;
