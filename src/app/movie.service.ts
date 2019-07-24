import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { User } from './User';

@Injectable()
export class MovieService {

  constructor(private httpClient: HttpClient) { }

register(user: User){
      console.log("Registering: ", user);
      this.httpClient.post("http://localhost:8080", user);
}

login(user: User){
      console.log('logging in: ', user);
      this.httpClient.post("http://localhost:8080", user);
}
}