import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: "app-client",
  templateUrl: "./client.component.html",
  styleUrls: ["./client.component.scss"],
})
export class ClientComponent implements OnInit {
  validateForm: FormGroup;
  loading: boolean;
  isVisibleModal: boolean;
  radioValue = "Entreprise";

  constructor(private fb: FormBuilder, private router: Router) {
    this.validateForm = this.fb.group({
      name: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]],
      confirmPpassword: [null, [Validators.required, this.confirmationValidator]],
      radioValue: ["Entreprise", [Validators.required]],
    });
  }

  confirmationValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return {required: true};
    } else if (control.value !== this.validateForm.controls.password.value) {
      return {confirm: true, error: true};
    }
    // return {};
  };

  submitForm(value: any): void {
    this.loading = true;
    console.log(value);
    // @TODO call api
    setTimeout(() => {
      // this.router.navigate([""]);
      this.loading = false;
    }, 2000);

  }

  ngOnInit(): void {
  }

  goWelcome(): void {
    this.router.navigate(["/welcome"]);
  }

  showModal(): void {
    this.isVisibleModal = true;
  }

  goRegisterProvider(): void {
    this.isVisibleModal = false;

    this.router.navigate(["/auth/register/provider"]);
  }

  goRegisterClient(): void {
    this.isVisibleModal = false;
    this.router.navigate(["/auth/register/client"]);
  }

  goLogin(): void {
    this.router.navigate(["/auth/login"]);

  }

}
