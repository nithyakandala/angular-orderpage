import {Injectable} from '@angular/core';
@Injectable({providedIn:'root'})
export class ConsoleLogger{
  log(message:string){
    console.log(message);
  }
  logInfo(message:string){
    console.log('Info:',message);
  }
  
  logDebug(message:string){
    console.log('Debug:',message);
  }
}