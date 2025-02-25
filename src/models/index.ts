export interface IMessage {
    id: string
    from: { name: string }
    type: string
    time: string
    text?: string
}

export interface IMessageItem {
    item: IMessage
}