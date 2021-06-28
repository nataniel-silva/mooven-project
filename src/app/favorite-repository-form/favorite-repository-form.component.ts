import {Component, Injector, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FavoriteService} from '../service/favorite.service';
import {map} from "rxjs/operators";
import {Location} from "@angular/common";

@Component({
  selector: 'favorite-repository-form',
  templateUrl: './favorite-repository-form.component.html',
  styleUrls: ['./favorite-repository-form.component.css']
})
export class FavoriteRepositoryFormComponent implements OnInit {

  repository: any;
  searchItems: any;

  constructor(public favoriteService: FavoriteService,
              public route: ActivatedRoute,
              private _router: Router,
              private _location: Location,
              injector: Injector) {
    this.route.queryParams.subscribe((data) => {
      this.repository = data.owner;
    });
  }

  ngOnInit() {
    this.favoriteService.searchFavoriteRepository().pipe(
      map((data) => data.data)
    ).subscribe(
      (data) => {
        if (data) {
          this.searchItems = data.records;
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

  redirectToBack() {
    this._location.back();
  }

}
