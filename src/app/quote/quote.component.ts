import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
    quotes = [
        new Quote(1,'Napoleon Hill','Whatever the mind of man can conceive and believe, it can achieve.',new Date(2018,3,14)),
        new Quote(2,'Jim Rohn','It takes half your life before you discover life is a do-it-yourself project.',new Date(2018,3,14)),
        new Quote(3, 'Jeff Bezoz','Think twice before you speak, because your words and influence will plant the seed of either success or failure in the mind of another.',new Date(2018,3,14)),
        new Quote(4, 'Robert Kiyosaki','Ideas are the beginning points of all fortunes.',new Date(2018,3,14)),
        new Quote(5, 'Earl Nitingale','Put your heart, mind, and soul into even your smallest acts. This is the secret of success.',new Date(2018,3,14)),
        

    ]

     completeQuote(isComplete,index){
        if (isComplete){
            this.quotes.splice(index,1);
            }
            }

    toogleDetails(index){
        this.quotes[index].showDescription = !this.quotes[index].showDescription;
    }
    addNewQuote(quote){
        let quoteLength = this.quotes.length;
        quote.id=quoteLength+1;
       quote.completeDate = new Date(quote.completeDate)
        this.quotes.push(quote)

    }
     private title:string = "Get inspired!";
  private quote:any = {
    "quote":"loading quote...",
    "author":"loading author..."
  };


  constructor() { }
  ngOnInit() {
  }
}