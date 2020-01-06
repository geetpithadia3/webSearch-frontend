import { Component, OnInit } from '@angular/core';
import { SearchPageService } from "./search-page.service"

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {
  searchQuery: any;
  results: any;
  stringSearched: any=false;
  suggestions;
  constructor(public searchApi: SearchPageService) { }

  ngOnInit() {
    
  }

  getSuggestions() {
    
    this.searchApi.getSuggestions(this.searchQuery).subscribe(
      suggestionResult => {
        this.suggestions = suggestionResult;
      }
    )
  }

  searchResults() {
    this.stringSearched = true;
    this.searchApi.getSearchResults(this.searchQuery).subscribe(
      queryResult => {
        this.results = queryResult;
      }
    )
  }
  
}
