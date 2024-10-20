import { IMessage } from "../models";
import { Response } from "./Response";
import { Message } from "./Message";
import { Typing } from "./Typing";

interface IMessageHistory {
    list: IMessage[]
}

export const MessageHistory = ({ list }: IMessageHistory) => {
    return (<ul>
        {list.map(item => {
            if (item.type === "response") {
                return (
                    <Response key={item.id} item={item} />
                )
            }
            if (item.type === "message") {
                return (
                    <Message key={item.id} item={item} />
                )
            }
            if (item.type === "typing") {
                return (
                    <Typing key={item.id} item={item} />
                )
            }
        }
        )}
    </ul>
    )
}
