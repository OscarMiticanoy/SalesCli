import { computed, inject, Injectable, signal } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { delay, map, Observable } from 'rxjs';
import { SalesDatePrediction } from '../Model/Interface/SalesDatePrediction';


interface State {
  data: SalesDatePrediction[];
  loading: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  url:string = "https://localhost:7190/api"

  #state = signal<State>({
    data: [],
    loading: true
  })

  private http = inject( HttpClient) ;

  public data = computed( () => this.#state().data);
  public loading = computed( () => this.#state().loading);

  constructor() {
    let ruta : string = "/Cosultas";
    this.http.get<SalesDatePrediction[]>(this.url+ruta)
      .pipe(delay(1500)).subscribe(res =>
        this.#state.set({
          data: res,
          loading: false,
        })
      );
    console.log(this.#state);
  }
  
  getSalesDatePrediction() : Observable<SalesDatePrediction>{
    let ruta : string = "/Cosultas";
    return this.http.get<SalesDatePrediction>(this.url+ruta);
  }

}
