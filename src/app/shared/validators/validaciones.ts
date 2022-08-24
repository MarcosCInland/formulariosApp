import { FormControl } from "@angular/forms";

export const  emailPattern          : string = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';
export const  nombreApellidoPattern : string = '([a-zA-Z]+) ([a-zA-Z]+)';

export const test = (argumento: FormControl) => {
    const value: string = argumento.value?.trim().toLowerCase();
    if (value === 'strider') {
      //  ERROR
      return { noStrider: true }  //RETORNAR OBJETO = ERROR
    }
    return null; //RETORNAR NULL = OK
}