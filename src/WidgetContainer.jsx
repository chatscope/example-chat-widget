import { useEffect, useMemo } from "react";
import { Widget } from "./Widget";
import { nanoid } from "nanoid";
import {useChat} from "./ChatProvider";

export const WidgetContainer = ({license = "", greeting = ""}) => {

    const {messages, sendMessage} = useChat();

    useEffect( () => {
        if ( greeting && messages.length === 0 ) {
            sendMessage({
                _id: nanoid(),
                message: greeting,
                sender: "remote",
                direction: "incoming",
            });
        }
    },[greeting, messages]);

    const remoteName = useMemo( () => {
        if ( license === "123" ) {
            return "Chatscope";
        } else if (license === "456" ) {
            return "ChatKitty";
        } else if (license === "789" ) {
            return "EvilNull";
        }
    },[license]);

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
        sendMessage(newMessages);
    };

    return <Widget remoteName={remoteName} messages={messages} onSend={handleSend} />

};

