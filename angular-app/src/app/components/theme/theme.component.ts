import { Component,OnInit } from '@angular/core';
import { faMoon,faSun } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.css']
})
export class ThemeComponent implements OnInit {
  faSun = faSun;
  faMoon = faMoon;

  dark:boolean;

  toggleTheme():void{
    this.dark = !this.dark ;
    this.setTheme()
  }

  setTheme():void{
    if(this.dark){
      localStorage.setItem("THEME",'dark')
      document.querySelector('body')?.classList.add('dark-mode')
      document.querySelector('body')?.classList.remove('light-mode')

    }else{
      localStorage.setItem("THEME",'light')
      document.querySelector('body')?.classList.add('light-mode')
      document.querySelector('body')?.classList.remove('dark-mode')
    }
  }
  ngOnInit():void{
    this.dark = localStorage.getItem('THEME') === 'dark' || false;
    this.setTheme()
  }


}
