import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Route, Router } from '@angular/router';
 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
 })
export class AppComponent implements OnInit,OnChanges{
  title = 'ecom-front';
  showHedear = true
  constructor(private router:Router){
     
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.loadScript("../assets/js/navbar.js")

    this.router.events.subscribe((d)=>{
      if(d instanceof NavigationEnd){
        if(d.url == '/dashboard'){
          this.showHedear = false
        }
      }
    })
    console.log(this.showHedear)
    }
  ngOnInit(): void {
    this.loadScript("../assets/js/navbar.js")

    this.router.events.subscribe((d)=>{
      if(d instanceof NavigationEnd){
        if(d.url.includes('dashboard')){
          this.showHedear = false
        }
      }
    })
    console.log(this.showHedear)

     
  }

  public loadScript(url: string) {
    const body = <HTMLDivElement> document.body;
    const script = document.createElement('script');
    script.innerHTML = '';
    script.src = url;
    script.async = false;
    script.defer = true;
    body.appendChild(script);
  }

}
