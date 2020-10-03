import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import differenceInCalendarDays from "date-fns/differenceInCalendarDays";

@Component({
  selector: "app-creatif",
  templateUrl: "./creatif.component.html",
  styleUrls: ["./creatif.component.scss"],
})
export class CreatifComponent implements OnInit {
  validateForm!: FormGroup;
  loading: boolean;
  isVisibleModal: boolean;
  radioValue = "Masculin";
  currentStep = 1;
  /*

    goRegisterProvider(): void {
      this.isVisibleModal = false;
      this.router.navigate(["/auth/register/provider"]);
    }

    goRegisterClient(): void {
      this.isVisibleModal = false;

      this.router.navigate(["/auth/register/client"]);
    }
  */
  today = new Date();

  constructor(private fb: FormBuilder, private router: Router) {
    this.validateForm = this.fb.group({
      name: [null, [Validators.required]],
      pseudo: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]],
      confirmPpassword: [null, [Validators.required, this.confirmationValidator]],
      contact: [null, [Validators.required]],
      nationnalite: [null, [Validators.required]],
      dateNaissance: [null, [Validators.required]],
      radioValue: ["Masculin", [Validators.required]],
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

  disabledDate = (current: Date): boolean => {
    return differenceInCalendarDays(current, new Date()) > 0;
  };

  submitForm(value: any): void {
    this.loading = true;
    // @TODO call api
    setTimeout(() => {
      // this.router.navigate([""]);
    }, 2000);

  }

  ngOnInit(): void {
  }

  goWelcome(): void {
    this.router
      .navigate(["/welcome"]);
  }

  goLogin(): void {
    this.router.navigate(["/auth/login"]);

  }

  start(): void {
    console.log("start");
  }

  changeStep(currentStep: number): void {
    this.currentStep++;
  }
}
