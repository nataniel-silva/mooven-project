import {Component, Injector, OnInit} from '@angular/core';
import {SearchService} from '../service/search.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'search-owner-repository-form',
  templateUrl: './search-owner-repository-form.component.html',
  styleUrls: ['./search-owner-repository-form.component.css']
})
export class SearchOwnerRepositoryFormComponent implements OnInit {

  repository: any;
  searchItems: any;

  constructor(public searchService: SearchService,
              public route: ActivatedRoute,
              private _router: Router,
              injector: Injector) {
    this.route.queryParams.subscribe((data) => {
      this.repository = data.owner;
    });
  }

  ngOnInit() {
    this.searchService.searchOwnerRepository(this.repository).subscribe(
      (data) => {
        console.log(data);
        if (data && data) {
          this.searchItems = data;
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }

  redirectToSearchRepository() {
    this._router.navigate(['/repository'], {});
  }

  redirectToFavorite() {
    this._router.navigate(['/favorite-repository'], {});
  }

}
