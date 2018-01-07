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
        new Quote(2,'Jim Rohn','It takes half your life before you discover life is a do-it-yourself project.'),
        new Quote(3, 'Jeff Bezoz','Diana has her birthday coming up soon'),
        new Quote(4, 'Robert Kiyosaki','Pupper likes expensive sancks'),
        new Quote(5, 'Earl Nitingale','Damn Math'),
        

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