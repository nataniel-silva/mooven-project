import {Component, Injector,  OnInit} from '@angular/core';
import {SearchService} from '../service/search.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'favorite-repository-form',
  templateUrl: './favorite-repository-form.component.html',
  styleUrls: ['./favorite-repository-form.component.css']
})
export class FavoriteRepositoryFormComponent implements OnInit {

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
    this.searchService.searchFavoriteRepository().subscribe(
      (data) => {
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

}
