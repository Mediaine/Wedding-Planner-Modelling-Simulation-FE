export interface ValidationItem {

    key:string;

    title:string;

    valid:boolean;

    message:string;

}

export interface ReviewValidation {

    ready:boolean;

    items:ValidationItem[];

}