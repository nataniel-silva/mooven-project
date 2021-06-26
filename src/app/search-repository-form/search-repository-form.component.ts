import {Component, Injector, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {SearchService} from '../service/search.service';
import {Router} from '@angular/router';

@Component({
  selector: 'search-repository-form',
  templateUrl: './search-repository-form.component.html',
  styleUrls: ['./search-repository-form.component.css']
})
export class SearchRepositoryFormComponent implements OnInit {

  public form: FormGroup;
  protected formBuilder: FormBuilder;
  searchItems: any;

  constructor(public searchService: SearchService,
              private _router: Router,
              injector: Injector) {
    this.formBuilder = injector.get(FormBuilder);

    this.form = this.formBuilder.group({
      'search': [null, []]
    });
  }

  ngOnInit() {
    this.searchItems = [];
    this.form.get('search').valueChanges.subscribe(
      (value) => {
        if (value && value.length > 2) {
          this.searchService.searchRepository(value).subscribe(
            (data) => {
              if (data && data.items) {
                this.searchItems = data.items;
              }
            },
            (error) => {
              console.log(error);
            }
          )
        } else {
          this.searchItems = [];
        }
      }
    )
  }

  getOwnerRepository(repository: any) {
    const owner = repository.owner.login;
    this._router.navigate(['/owner-repository'], {
      queryParams: { owner: owner },
    });
  }

}
