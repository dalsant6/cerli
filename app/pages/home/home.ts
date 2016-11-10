import {Component, OnInit} from '@angular/core';
import {RowComponent} from "../../shared/components/layout/row/row";
import {ColComponent} from "../../shared/components/layout/col/col";
import {ControlGroup, FormBuilder} from "@angular/common";
import {Url} from "../../shared/models/url";
import {DataService} from "../../services/data.service";
import {PageContentComponent} from "../../shared/components/layout/page-content/page-content";
@Component({
  moduleId: module.id,
  selector: 'home',
  templateUrl: 'home.html',
  directives: [ColComponent, RowComponent, PageContentComponent]
})

export class HomePage implements OnInit{
  urlForm: ControlGroup;
  analyzeForm: ControlGroup;
  url: Url;
  analyzeUrl: Url;
  shortenedUrl: string = '';
  percentDecrease: string = '';
  baseUrl: string = 'cer.li/';

  constructor(private _fb: FormBuilder, private _dataService: DataService){
    this.urlForm = _fb.group({
      url: ['']
    });
    this.analyzeForm = _fb.group({
      analyzeUrl: ['']
    });
    console.log('in home');
  }
  ngOnInit(){

  }
  submitUrl(url: string){
    this._dataService.submitUrl(url).subscribe((data) => {
      this.url = new Url(data);
      this.percentDecrease = Math.floor(((this.urlForm.find('url').value.length - this.url.shortUrl.length)/this.urlForm.find('url').value.length)*100).toString();
    });
  }
  getAnalytics(url: string){
    url = this.strip(url);
    let appended = url.substr(url.indexOf("/")+1);
    console.log('appended = '+appended);
    console.log('analyzing '+url);
    if(url.indexOf("cer.li/") != -1){
      this._dataService.getLongUrl(appended).subscribe((data) => {
        this.analyzeUrl = new Url(data);
        console.log("got the new new");
      });
    }else{
      //dont get analytics
    }
  }
  strip(url: string){ //strip the input field of anything but the url
    url = url.substr(url.indexOf("cer.li/")); //remove the prefix
    let append = url.substr(url.indexOf("/")+1);
    if(append.indexOf("/") >= 0){
      append = append.substr(0, append.indexOf("/"));
    }
    if(append.length > 5){
      append = append.substr(0,5);
    }
    url = url.substr(0, url.indexOf("/")+1)+append;
    return url;
  }
}
