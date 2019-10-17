
export class Announcement {
    created :string;
    creator : Creator;
    information: string;
    subject : string;
}
class Creator{
    name : string;
    username : string;
    generation : Generation
}
class Generation{
    generation :string
}