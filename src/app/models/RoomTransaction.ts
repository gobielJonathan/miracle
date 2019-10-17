export class RoomTransaction {
    Campus: string;
    RoomName: string;
    StatusDetail: RoomTransactionDetail[]
}

export class RoomTransactionDetail {
    Assistant: string;
    ClassName: string;
    Description: string;
}
