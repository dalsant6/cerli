import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES, RouteSegment} from '@angular/router';
import {DataService} from "../../services/data.service";
import {PageContentComponent} from "../../shared/components/layout/page-content/page-content";
import {Url} from "../../shared/models/url";
import {ColComponent} from "../../shared/components/layout/col/col";
import {RowComponent} from "../../shared/components/layout/row/row";

@Component({
  moduleId: module.id,
  selector: 'redirect',
  templateUrl: 'redirect.html',
  directives: [ColComponent, RowComponent, PageContentComponent]
})
export class RedirectPage {
  url: Url;
  constructor(private route: RouteSegment,private _dataService: DataService) {
    let shortUrl = route.getParam("id");
    console.log('about to add redirect');
    this._dataService.getLongUrl(shortUrl).subscribe((data) => {
      console.log('got longUrl');
      this.url = new Url(data);
      _dataService.addRedirect(this.url.index.toString()).subscribe(() => {
        console.log('added redirect');
        window.location.href = this.url.longUrl;
      });
    });
  }
}
