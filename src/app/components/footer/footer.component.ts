import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { StyleService } from '../../services/style.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  isRegisterPage;
  constructor(private styleService: StyleService) {}

  ngOnInit(): void {
    this.styleService.registerPage$.subscribe((res) => (this.isRegisterPage = res));
  }
}
