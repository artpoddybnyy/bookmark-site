export class BookMark {


    public id?: number;
    public title?: string;
    public link?: string;
    public dateCreation?: Date;

    constructor ( id?: number, title?: string, link?: string, dateCreation?: Date){
    this.id = id ? id : null;
    this.title = title ? title : null;
    this.link = link ? link : null;
    this.dateCreation = dateCreation ? dateCreation: null;
}

}
