import { Component, Input } from "@angular/core";

@Component({
    selector:'app-posts-list',
    templateUrl:'./posts-list.component.html',
    styleUrls:['./posts-list.component.css']
})

export class PostsListComponent{
    /*posts = [
        {title:"Post A",content:"Post A\'s content"},
        {title:"Post B",content:"Post B\'s content"},
        {title:"Post C",content:"Post C\'s content"},
        {title:"Post D",content:"Post D\'s content"},
        {title:"Post E",content:"Post E\'s content"}
    ];*/

    @Input() posts:Post[]=[];//using *ngIf in html to render only if posts size > 0
}