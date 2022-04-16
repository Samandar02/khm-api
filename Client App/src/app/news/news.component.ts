import { Component, Input, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import { ApiService } from '../api.service';
import { NovetlyModel } from '../models';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  constructor(private router:Router,
    private route: ActivatedRoute,
    private apiSvc:ApiService) { }
    @Input() isAdmin:boolean = this.router.url.includes('admin')?true:false

  news:NovetlyModel[] = [];
  ngOnInit(): void {
    this.apiSvc.getNews().subscribe(res=>{
      this.news = res
    })
  }
  goDetail(id:number){
        this.router.navigate(['detail',id],{relativeTo:this.route})
      //else
        //this.router.navigate(['news',id])
  }
  method(n:any,method:'put'|'delete'){
    if(method == 'put'){
      this.apiSvc.setNovetly(n.id);
    }
    else{
      this.apiSvc.deleteNovetly(n.id).subscribe(res=>{
        let index = this.news.indexOf(this.news.find(n=>n.id == n.id)??NovetlyModel.impilementEmptyNovetly)
        this.news.splice(index,1)
      })
    }
  }
}
