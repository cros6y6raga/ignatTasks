import React from 'react'
import Message from "./Message";
import s from './Message.module.css';

const messageData = {
    avatar: 'https://upload.wikimedia.org/wikipedia/ru/thumb/7/7a/Manchester_United_FC_crest.svg/1200px-Manchester_United_FC_crest.svg.png',
    name: 'Sir Alex Ferguson',
    message: 'Hello!',
    time: '22:00',
}

function HW1() {
    return (
        <div>
            <hr/>
            <div className={s.title}>homeworks 1</div>
            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />
            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeMessage/>*/}
            <hr/>
        </div>
    )
}

export default HW1
