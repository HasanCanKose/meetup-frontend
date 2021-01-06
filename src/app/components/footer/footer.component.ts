import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { StyleService } from '../../services/style.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  isPage;
  isCollapsed;
  isProfilePage;
  constructor(private styleService: StyleService) {}

  ngOnInit(): void {
    this.styleService.registerPage$.subscribe((res) => (this.isPage = res));
    this.styleService.eventPage$.subscribe((res) => (this.isPage = res));
    this.styleService.profilePage$.subscribe((res) => (this.isProfilePage = res));
    this.styleService.collapsed$.subscribe((res) => (this.isCollapsed = res));
  }
}
