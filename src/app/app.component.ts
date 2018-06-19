import { Component } from "@angular/core";
import { reject } from "q";
import { promise } from "protractor";
import { resolve } from "dns";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  nombre = "Marcio Ramos";

  nombre2 = "marcIo aLVes raMos";

  array: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  pi = Math.PI;

  a = 0.234;

  salario = 15342.5123456;

  hereo = {
    nome: "Logan",
    apelido: "Wolvwrine",
    poder: "regeneração",
    endereco: {
      rua: "Alameda dos Anjos",
      numero: "436",
      telefone: [123456789, 1232435654]
    }
  };

  valorPromessa = new Promise((resolve, reject) => {
    setTimeout(() => resolve("ae deu cert"), 3500);
  });

  fecha = new Date();

  video = "Nl2Wfc17DHQ";

  senha = "1234a5d";

  active = false;
}
