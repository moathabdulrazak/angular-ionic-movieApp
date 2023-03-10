import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor( private http: HttpClient) { }



  getTopMovies(): Observable<any>{
    return this.http.get(`${environment.baseUrl}/movie/popular?api_key=${environment.apiKey}`);
  }

  getDetails(){

  }
}
