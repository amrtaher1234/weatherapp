import { Pipe, PipeTransform } from '@angular/core';
import { environment } from 'src/environments/environment';

@Pipe({
  name: 'errorMessage',
})
export class ErrorMessagePipe implements PipeTransform {
  transform(errorCode: number): string {
    return (environment.ERROR_MESSAGES as any)[errorCode]
      ? (environment.ERROR_MESSAGES as any)[errorCode]
      : environment.ERROR_MESSAGES.default;
  }
}
