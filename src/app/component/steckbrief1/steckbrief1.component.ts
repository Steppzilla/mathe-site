import { Component, OnInit } from '@angular/core';
import { AfterContentInit } from '@angular/core';
import {LoadExternalScriptService} from 'src/app/services/load-external-script.service';

@Component({
  selector: 'app-steckbrief1',
  templateUrl: './steckbrief1.component.html',
  styleUrls: ['./steckbrief1.component.css']
})
export class Steckbrief1Component implements OnInit,AfterContentInit {
  
  show="hide";
  schritt0="hide";
  schritt1="hide";
  schritt2="hide";
  schritt3="hide";
  schritt4="hide";

  loesunganzeigen(){
    this.show="show";;
  }
  schritt(zahl){
    if(zahl==0){
      this.schritt0="show";

    }else if(zahl==1){
      this.schritt1="show";
      
    }
    else if(zahl==2){
      this.schritt2="show";
      
    }
    else if(zahl==3){
      this.schritt3="show";
      
    }
    else if(zahl==4){
      this.schritt4="show";
      
    }
  }



  //Mathjax:
  //<script src='https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.4/latest.js?config=AM_CHTML'></script>
  

  constructor(public dynamicScript: LoadExternalScriptService) { }


  ngAfterContentInit():void{
    // asciimath.translate();
    this.dynamicScript.loadScript("mathjax");
    }
  ngOnInit(): void {
  }

}





