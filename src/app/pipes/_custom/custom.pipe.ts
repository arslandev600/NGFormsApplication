import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'pipetitle'
})

export class TitlePipe implements PipeTransform {
    transform(value: any, ...args: any[]): any {

        if(args[0] == 'M'){
            return  'Mr' + value
        }else if(args[0] == 'F') {
            return  'Ms.' + value
        }else{
            return value
        }
    }
}