import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  validateForm!: FormGroup;
  loading: boolean;
  redirectLogin = '/auth/login';

  submitForm(value: any): void {
    console.log(value);
    this.loading = true;
    // @TODO call api
    setTimeout(() => {
      this.router.navigate([this.redirectLogin]);
    }, 2000);

  }

  constructor(private fb: FormBuilder, private router: Router) {
    this.validateForm = this.fb.group({
      username: [null, Validators.required],
      password: [null, Validators.required],
      email: [null, Validators.required],
    });
  }

  ngOnInit(): void {

  }

}
