import {Injectable} from "@angular/core";
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/Rx";
import {BookMark} from "./bookmark-list/bookmark.module";


@Injectable()
export class BookMarkService {

  private getListBookMark:string = "/all-bookmarks";
  private getOneBookMark:string = "/one-bookmark";
  private createBookMark:string = "/create-bookmark";
  private deleteBookMarks:string = "/delete-bookmarks";
  private updateBookMarkUr:string = "/update-bookmark";

  private headers = new Headers({'Content-Type': "application/json"});
  private options = new RequestOptions({headers: this.headers});

  constructor(private http:Http) {
  }

  findAll():Observable<BookMark[]> {
    return this.http.get(this.getListBookMark)
      .map((response:Response) => response.json())
      .catch(this.handleError);
  }

  findAllByTitle(title:string):Observable<BookMark[]> {
    return this.http.get(`${this.getListBookMark}/${title}`)
      .map((response:Response) => response.json())
      .catch(this.handleError);
  }

  findOne(id:number):Observable<BookMark> {
    return this.http.get(`${this.getOneBookMark}/${id}`)
      .map((response:Response) => response.json())
      .catch(this.handleError);
  }

  create(bookMark:BookMark):Observable<BookMark> {
    let body = JSON.stringify(bookMark);
    return this.http.post(this.createBookMark, body, this.options)
      .map((response:Response) => response.json())
      .catch(this.handleError);
  }


  delete(id:number[]):Observable<number[]> {
    let body = JSON.stringify(id);
    return this.http.post(this.deleteBookMarks, body, this.options)
      .map((response:Response) => response.json())
      .catch(this.handleError);
  }

  updateBookMark(bookMark:BookMark):Observable<BookMark> {
    let body = JSON.stringify(bookMark);
    return this.http.put(this.updateBookMarkUr, body, this.options)
      .map((response:Response) => response.json())
      .catch(this.handleError);
  }


  private handleError(err) {
    let errMessage:string;
    if (err instanceof Response) {
      let body = err.json() || '';
      let error = body.error || JSON.stringify(body);
      errMessage = `${err.status} - ${err.statusText || ''} ${error}`;
    } else {
      errMessage = err.message ? err.message : err.toString();
    }
    return Observable.throw(errMessage);
  }
}
