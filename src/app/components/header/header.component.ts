import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { UserResponseModel } from '../../modules/user/models/user-response.model';
import { AuthService } from '../../services/auth.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ModalService } from '../../services/modal.service';
import { StyleService } from '../../services/style.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  user: UserResponseModel;
  isCollapsed = true;

  constructor(
    private userService: UserService,
    public authService: AuthService,
    private route: ActivatedRoute,
    private router: Router,
    private modalService: ModalService,
    private styleService: StyleService,
  ) {}

  ngOnInit(): void {
    this.userService.changedUser$.subscribe((user) => {
      this.user = user;
      this.modalService.user$.next(this.user);
    });
    this.styleService.collapsed$.next(true);
  }

  OnLogout() {
    this.authService.loggedOut();
    this.router.navigate(['/home']);
    this.styleService.collapsed$.next(true);
  }

  toggleCollapsed() {
    this.isCollapsed = !this.isCollapsed;
    this.styleService.collapsed$.next(this.isCollapsed);
  }

  onCollapse() {
    this.styleService.collapsed$.next(true);
  }
}
