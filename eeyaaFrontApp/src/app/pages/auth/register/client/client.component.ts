import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: "app-client",
  templateUrl: "./client.component.html",
  styleUrls: ["./client.component.scss"],
})
export class ClientComponent implements OnInit {
  validateForm!: FormGroup;
  loading: boolean;
  isVisibleModal: boolean;
  radioValue = 'Entreprise';

  constructor(private fb: FormBuilder, private router: Router) {
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true],
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
