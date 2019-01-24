export class Book {
    id: number;
    thumb: string;
    name: string;
    description: string;
}

export class BookWComments {
    id: number;
    thumb: string;
    name: string;
    description: string;
    comments: Array<string>;
}
