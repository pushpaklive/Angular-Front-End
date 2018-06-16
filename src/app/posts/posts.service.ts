import { Injectable } from "@angular/core";
import { Subject } from 'rxjs';

@Injectable({providedIn:'root'})
export class PostsService{
    private posts: Post[] = [];
    private postsUpdated = new Subject<Post[]>();

    getPosts(){
        return this.posts;//remove brackets to run
    }

    getPostupdatedAsObservable(){
       //forgot to use return here. so no subscribe() was available 
       return this.postsUpdated.asObservable();
    }

    addPost(title:String, content: String){
         const post = {title:title,content:content};
         this.posts.push(post);
         this.postsUpdated.next(this.posts);
    }
}