import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  SERVER_URL : string;

  constructor(private http: HttpClient) {
    this.SERVER_URL = 'https://localhost:44372/api/';
  }

  listEmployee(): Observable<any> {
    let url = `${this.SERVER_URL}Invoice/ListEmployee`;
    console.log(url);

    // const params: URLSearchParams = new URLSearchParams();
    //   for (const key in situacaoTalaoFiltro) {
    //     if (situacaoTalaoFiltro.hasOwnProperty(key)) {
    //       const element = situacaoTalaoFiltro[key];
    //       if (element) {
    //         params.set(key, element);
    //       }
    //     }
    //   }

      return this.http.get<any[]>(url);
  }

}
