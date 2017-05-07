import {Injectable} from "@angular/core";
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/Rx";
import {BookMark} from "./bookmark-list/bookmark.module";


@Injectable()
export class BookMarkService {

  private getListBookMark:string = "/all-bookmarks";
  private getOneBookMark:string = "/one-bookmark";
  private createBookMarkUrl:string = "/create-bookmark";
  private deleteBookMarks:string = "/delete-bookmarks";
  private updateBookMarkUrl:string = "/update-bookmark";

  constructor(private http:Http) {
  }

  findAll():Observable<BookMark[]> {
    return this.http.get(this.getListBookMark)
      .map(this.extractData)
      .catch(this.handleError);
  }

  findAllByTitle(title:string):Observable<BookMark[]> {
    return this.http.get(`${this.getListBookMark}/${title}`)
      .map(this.extractData)
      .catch(this.handleError);
  }

  findOneBookMark(id:number):Observable<BookMark> {
    return this.http.get(`${this.getOneBookMark}/${id}`)
      .map(this.extractData)
      .catch(this.handleError);
  }

  createBookMark(bookMark:BookMark):Observable<Response> {
    return this.http.post(this.createBookMarkUrl, bookMark)
      .catch(this.urlError);
  }


  deleteBookMark(id:number[]):Observable<Response> {
      return this.http.post(this.deleteBookMarks, id)
        .catch(this.handleError);
  }

  updateBookMark(bookMark:BookMark):Observable<Response> {
       return this.http.put(this.updateBookMarkUrl,bookMark )
          .catch(this.handleError);
  }

  private extractData(res:Response) {
    let body;
       if (res.text()) {
      body = res.json();
    }
    return body || {};
  }

  private handleError(err:Response | any) {
    let errMessage:string;
    if (err instanceof Response) {
      let body = err.json() || '';
      let error = body.error || JSON.stringify(body);
      errMessage = `${err.status} - ${err.statusText || ''} ${error}`;
    } else {
      errMessage = err.message ? err.message : err.toString();
    }
    console.error(errMessage);
    return Observable.throw(errMessage);

  }

  private urlError(err: Response | any) :any {
    if (err.status < 200 || err.status >= 300) {
      return Observable.throw("Введенный адрес не существует, проверте и попробуйте снова!");
    }else return Observable.throw(err);
  }
}
