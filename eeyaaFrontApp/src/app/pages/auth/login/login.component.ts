import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  validateForm!: FormGroup;
  loading: boolean;
  redirectRegister = '/auth/register';

  submitForm(value: any): void {
    console.log(value);
    this.loading = true;
    // @TODO call api
    setTimeout(() => {
      this.router.navigate(['/welcome']);
    }, 2000);

  }

  constructor(private fb: FormBuilder, private router: Router) {
    this.validateForm = this.fb.group({
      username: [null, Validators.required],
      password: [null, Validators.required],
    });
  }

  ngOnInit(): void {

  }

}
