import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor( private http: HttpClient) { }



  getTopMovies(page = 1 ): Observable<any>{
    return this.http.get(`${environment.baseUrl}/movie/popular?api_key=${environment.apiKey}&${page}`);
  }

  getDetails(id: string){
    return this.http.get(`${environment.baseUrl}/movie/${id}?api_key=${environment.apiKey}`);
  }
}
