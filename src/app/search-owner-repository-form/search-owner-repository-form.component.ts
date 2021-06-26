import {Component, Injector, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {SearchService} from '../service/search.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'search-owner-repository-form',
  templateUrl: './search-owner-repository-form.component.html',
  styleUrls: ['./search-owner-repository-form.component.css']
})
export class SearchOwnerRepositoryFormComponent implements OnInit {

  public form: FormGroup;
  protected formBuilder: FormBuilder;
  repository: any;
  searchItems: any;

  constructor(public searchService: SearchService,
              public route: ActivatedRoute,
              injector: Injector) {
    this.formBuilder = injector.get(FormBuilder);

    this.form = this.formBuilder.group({
      'search': [null, []]
    });
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

}
