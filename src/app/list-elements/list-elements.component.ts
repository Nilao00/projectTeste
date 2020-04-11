import { Component, OnInit } from '@angular/core';
import { ListElementServiceService } from './list-element-service.service';
import Urls from '../Services/urlDefault/urlsDefaults';
import { Router } from '@angular/router';
@Component({
  selector: 'app-list-elements',
  templateUrl: './list-elements.component.html',
  styleUrls: ['./list-elements.component.css']
})
export class ListElementsComponent implements OnInit {
  users: any;
  search: string = '';
  limit = 0;
  setUrl: string = '';
  constructor(private service: ListElementServiceService, private router: Router) { }

  ngOnInit() {
    this.listElements();
  }
  /* list elements */
  listElements() {
    if (this.limit == 0) {
      this.setUrl = Urls.list;
    } else {
      this.setUrl = Urls.list + "?limit=" + this.limit;
    }
    this.service.listElementsService(Urls.endpointDefault, this.setUrl, true).subscribe(
      data => {
        this.users = data['data'];
      }, error => {
        if (error.status == 401) {
          this.router.navigate(['login']);
        }
      }
    )
  }
  /* filter for any number */
  filterNumber(event) {
    this.limit = event;
    console.log(this.limit)
    this.listElements();
  }
  /* logout */
  logout() {
    localStorage.removeItem('token');
    window.location.reload();
  }
}
