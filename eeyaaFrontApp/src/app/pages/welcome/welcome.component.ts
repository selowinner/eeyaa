import {Component, OnInit} from "@angular/core";
import {FormBuilder} from "@angular/forms";
import {Router} from "@angular/router";
import {NzModalService} from "ng-zorro-antd";

@Component({
  selector: "app-welcome",
  templateUrl: "./welcome.component.html",
  styleUrls: ["./welcome.component.scss"],
})
export class WelcomeComponent implements OnInit {
  dataSlide: ({ text: string, description: string })[] = [
    {
      text: "eeyaa",
      description: "Entrez dans l'ère du participatif",
    },
    {
      text: "Lorem ipsum",
      description: "Lorem ipsum dolor sit amet",
    },
  ];
  isVisibleModal = false;

  constructor(private fb: FormBuilder,
              private modal: NzModalService,
              private router: Router) {
  }

  ngOnInit(): void {
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

  afterOpenModal(): void {
    console.log("afterOpenModal");
  }
}
