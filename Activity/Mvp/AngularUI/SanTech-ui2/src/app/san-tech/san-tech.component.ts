import { Component, OnInit } from '@angular/core';
import { TranslateService } from 'ng2-translate';

@Component({
  selector: 'app-san-tech',
  templateUrl: './san-tech.component.html',
  styleUrls: ['./san-tech.component.css']
})
export class SanTechComponent implements OnInit {

  loginCredentials = { email : '', password : ''};

  constructor(private translate: TranslateService){
    translate.addLangs(["en", "tamil"]);
    translate.setDefaultLang('en');

    let browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|tamil/) ? browserLang : 'en');
  }

  login(x){
    console.log(x.email);
  }

  ngOnInit() {
  }

}
