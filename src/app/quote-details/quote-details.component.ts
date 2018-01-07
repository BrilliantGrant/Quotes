import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import {Quote} from '../quote'

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {

  @Input() quote:Quote;
  @Output() isComplete= new EventEmitter<boolean>();

 quoteComplete(complete:boolean){
    this.isComplete.emit(complete);
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
