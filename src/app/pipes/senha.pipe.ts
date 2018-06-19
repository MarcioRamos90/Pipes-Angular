import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "password"
})
export class SenhaPipe implements PipeTransform {
  transform(value: string, active: boolean): any {
    if (active == false) {
      return value;
    }
    let asteristicos = "";
    for (let i = 0; i <= value.length; i++) {
      asteristicos += "*";
    }
    return asteristicos;
  }
}
