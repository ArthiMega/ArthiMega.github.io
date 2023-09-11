import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-translator',
  templateUrl: './translator.component.html',
  styleUrls: ['./translator.component.css']
})
export class TranslatorComponent implements OnInit {

  nameformControl = new FormControl('', Validators.required)
  constructor(private translate: TranslateService) { 
    translate.setDefaultLang('en')
  }

  switchLanguage(language: string){
      this.translate.use(language)
  }

  ngOnInit() {
  }

}
