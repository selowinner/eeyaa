import {Component, OnInit} from "@angular/core";
import {FormBuilder} from "@angular/forms";
import {Router} from "@angular/router";
import {NzModalService} from "ng-zorro-antd";
import Typed from "typed.js";

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
      text: "Lorem",
      description: "nesciunt nisi quasi quos temporibus unde voluptas?",
    },
    {
      text: "Accusamus",
      description: "dolorum eveniet excepturi exercitationem fugit hic incidunt iusto maiores,",
    },
  ];
  dataSlideImage: Array<string> = [
    "../../../assets/images/138.jpg",
    "../../../assets/images/929.jpg",
    "../../../assets/images/1861.jpg",
  ];
  isVisibleModal = false;


  constructor(private fb: FormBuilder,
              private modal: NzModalService,
              private router: Router) {
  }

  ngOnInit(): void {

    const typed = new Typed("#element", {
      strings: [
        "eeyaa<h5 class='e-description'>Entrez dans l'ère du participatif</h5>",
        "Lorem<h5 class='e-description'>nesciunt nisi quasi quos temporibus unde voluptas?</h5>",
        "Accusamus<h5 class='e-description'> dolorum eveniet excepturi exercitationem fugit hic incidunt iusto maiores, </h5>",
      ],
      typeSpeed: 102,
      backSpeed: 2400,
      fadeOut: true,
      loop: true,
    });
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
