import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { flatMap, merge } from 'rxjs';
import { ApiService } from '../api.service';
import { NovetlyModel } from '../models';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.scss']
})
export class NewsDetailComponent implements OnInit {

  constructor(private apiSvc:ApiService,
    private route:ActivatedRoute) { }
    @Input() isAdminPanel:boolean = false;
  detail:NovetlyModel = NovetlyModel.impilementEmptyNovetly;
  ngOnInit(): void {
   this.route.paramMap.subscribe(res=>{
     this.apiSvc.getNew(Number(res.get('id'))).subscribe(match=>{
       this.detail=(match);
     })
   })
  }

}
