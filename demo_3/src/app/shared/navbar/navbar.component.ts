import { Component, OnInit } from '@angular/core';
import { NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  providers: [NgbDropdownConfig]
})
export class NavbarComponent implements OnInit {
  
  constructor(config: NgbDropdownConfig) {
    config.placement = 'bottom-right';
  }

  ngOnInit() {
    // Horizontal menu fixed when scrolling
    window.addEventListener('scroll', function() { 
      let navbar = document.querySelector('.horizontal-menu');
      let body = document.querySelector('body');
      if (window.scrollY >= 70) { 
        navbar.classList.add('fixed-on-scroll');
        body.classList.add('horizontal-menu-fixed-on-scroll');
       }
      else { 
        navbar.classList.remove('fixed-on-scroll');
        body.classList.remove('horizontal-menu-fixed-on-scroll');
       }
    });

    // Horizontal menu navigation in mobile menu on click
    let navItemClicked = document.querySelectorAll('.horizontal-menu .page-navigation >.nav-item');
    navItemClicked.forEach(function (el) {
      el.addEventListener('click', function () {
        var result = [],
          node = this.parentNode.firstChild;
        while (node) {
          if (node !== this)
            result.push(node);
          node = node.nextElementSibling || node.nextSibling;
        }
        $(result).removeClass('show-submenu');
        this.classList.toggle('show-submenu');
      });
    })

  }

  focusInput() {
    const navbarSearchInput = <HTMLElement>document.querySelector('#navbar-search-input');
    navbarSearchInput.focus();
  }

  toggleRightSidebar() {
    document.querySelector('.bottom-navbar').classList.toggle('header-toggled');
  }

}
