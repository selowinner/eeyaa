import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  validateForm!: FormGroup;
  loading: boolean;
  isVisibleModal: boolean;

  constructor(private fb: FormBuilder, private router: Router) {
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [false],
    });
  }

  submitForm(value: any): void {
    this.loading = true;
    // @TODO call api
    setTimeout(() => {
      this.router.navigate([""]);
    }, 2000);

  }

  ngOnInit(): void {
  }

  goWelcome(): void {
    this.router
      .navigate(["/welcome"]);
  }

  showModal(): void {
    this.isVisibleModal = true;
  }

  goRegisterProvider(): void {
    this.router.navigate(["/auth/register/provider"]);
  }

  goRegisterClient(): void {
    this.router.navigate(["/auth/register/client"]);
  }

  goLogin(): void {
    this.router.navigate(["/auth/login"]);

  }

  start(): void {
    console.log("start");
  }
}
