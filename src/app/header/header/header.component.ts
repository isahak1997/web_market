import {Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  ngOnInit() {
    window.addEventListener('scroll', this.scroll, true);
  }

  ngOnDestroy() {
    window.removeEventListener('scroll', this.scroll, true);
  }

  scroll = (): void => {
    const navbar = document.getElementById('navbar');
    const sticky = navbar.offsetTop;


    if (window.pageYOffset >= sticky) {
      navbar.classList.add('sticky');
      navbar.style.backgroundColor  = '#D4D4D4';
    } else {
      navbar.classList.remove('sticky');
    }
  }


  public voidSaveHideState(hide: string): void {
    localStorage.setItem('headerMessageHide', hide);
    console.log(this.getHideState());
  }

  public getHideState(): string {
    return localStorage.getItem('headerMessageHide');
  }
}
