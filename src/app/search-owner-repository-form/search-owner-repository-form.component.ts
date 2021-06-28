import {Component, Injector, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {map} from "rxjs/operators";
import {RepositoryService} from '../service/repository.service';
import {FavoriteService} from "../service/favorite.service";

@Component({
  selector: 'search-owner-repository-form',
  templateUrl: './search-owner-repository-form.component.html',
  styleUrls: ['./search-owner-repository-form.component.css']
})
export class SearchOwnerRepositoryFormComponent implements OnInit {

  repository: any;
  searchItems: any;
  favoritesItems: any

  constructor(public repositoryService: RepositoryService,
              public favoriteService: FavoriteService,
              public route: ActivatedRoute,
              private _router: Router,
              injector: Injector) {
    this.route.queryParams.subscribe((data) => {
      this.repository = data.owner;
    });
  }

  ngOnInit() {
    this.favoritesItems = [];
    this.listFavorite();
    this.searchRepositories();
  }

  searchRepositories() {
    this.repositoryService.searchOwnerRepository(this.repository).subscribe(
      (data) => {
        if (data) {
          this.searchItems = data;
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }

  favoriteItem(item: any, remove: boolean = false) {
    this.favoriteService.saveFavoriteRepository(item, remove).subscribe(
      (data) => {
        if (data) {
          this.favoritesItems.push(data);
          this.ngOnInit();
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }

  listFavorite() {
    this.favoriteService.searchFavoriteRepository().pipe(
      map((data) => data.data)
    ).subscribe(
      (data) => {
        if (data) {
          this.favoritesItems = data.records;
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }

  isFavorite(item: any): boolean {
    return this.favoritesItems && this.favoritesItems.filter( i => i.owner == item.owner.login && i.name == item.name && i.active == true).length > 0;
  }

  redirectToSearchRepository() {
    this._router.navigate(['/repository'], {});
  }

  redirectToFavorite() {
    this._router.navigate(['/favorite-repository'], {});
  }

}
