import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import {Observable} from 'rxjs/Observable';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class SearchPageService {
    apiURL = 'http://localhost:8080';
    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    }
    constructor(private http: HttpClient) { }

    getSearchResults(query: String) {
      
        return this.http.get(this.apiURL + '/getSearchResults/' + query)
    }
    getSuggestions(query: String) {
      
        return this.http.get(this.apiURL + '/getSuggestions/' + query)
    }
}