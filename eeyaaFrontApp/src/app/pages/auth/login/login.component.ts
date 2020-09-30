import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  validateForm!: FormGroup;
  loading: boolean;
  dataSlide: ({ text: string, description: string })[] = [
    {
      text: 'eeyaa',
      description: "Entrez dans l'ère du participatif"
    },
    /*{
      text: 'Lorem ipsum dolor sit amet',
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit"
    },*/
  ];

  constructor(private fb: FormBuilder, private router: Router) {
    this.validateForm = this.fb.group({});
  }

  submitForm(value: any): void {
    this.loading = true;
    // @TODO call api
    setTimeout(() => {
      this.router.navigate(['/welcome']);
    }, 2000);

  }

  ngOnInit(): void {
  }

}
