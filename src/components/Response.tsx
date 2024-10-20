import { IMessageItem } from "../models";

export const Response = ({ item }: IMessageItem) => {
    return (
        <li className="clearfix">
            <div className="message-data align-right">
                <div className="message-data">
                    <span className="message-data-time">{item.time}</span>
                    <span className="message-data-name">{item.from.name}</span>
                    <i className="fa fa-circle me"></i>
                </div>
                <div className="message other-message float-right">{item.text}</div>
            </div>
        </li>
    )
}

