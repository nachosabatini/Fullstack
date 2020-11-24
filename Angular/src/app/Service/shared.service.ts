import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  readonly APIurl="https://localhost:44357/api";
  
  constructor(private http:HttpClient) { }

  GetPersonsList():Observable<any[]>{
    return this.http.get<any>(this.APIurl+'/persons');
  }

  GetPerson(val:any){
    return this.http.get(this.APIurl+'/persons/'+val);
  }

  AddPerson(val:any){
    return this.http.post(this.APIurl+'/persons',val);
  }

  UpdatePerson(val:any){
    return this.http.put(this.APIurl+'/persons/'+val,val);
  }

  DeletePerson(val:any){
    return this.http.delete(this.APIurl+'/persons/'+val,val);
  }
}
