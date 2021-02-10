import { useState, useEffect } from "react";
import { Widget } from "./Widget";
import { nanoid } from "nanoid";

export const WidgetContainer = ({license = "", greeting = ""}) => {

    const [messages, setMessages] = useState([]);

    useEffect( () => {
        if ( greeting && messages.length === 0 ) {
            setMessages(messages.concat({
                _id: nanoid(),
                message: greeting,
                sender: "remote",
                direction: "incoming",
            }));
        }
    },[greeting, messages]);
    
    const handleSend = (message) => {
        const newMessages = [
            {
                _id: nanoid(),
                message,
                sender: "me",
                direction: "outgoing",
            },
            {
                _id: nanoid(),
                message: `ECHO: ${message}`,
                sender: "remote",
                direction: "incoming",
            }
        ];
        setMessages(messages.concat(newMessages));
    };
    
    return <Widget messages={messages} onSend={handleSend} />
    
};

