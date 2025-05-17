import { BadRequest, HttpError, ErrorsName } from '../types-api';
import Toastify from 'toastify-js';
import 'toastify-js/src/toastify.css';

export function checkingError(error: HttpError): string {
  let message: string = 'Undefined error';

  if (error.name === ErrorsName.BadRequest) {
    switch (error.code) {
      case BadRequest.InvalidCustomerAccountCredentials: {
        message = error.message;
        break;
      }
      case BadRequest.DuplicateField: {
        message = `${error.message} Please log in or use another email address.`;
        break;
      }
      case BadRequest.InvalidOperation: {
        const emailEmpty: boolean = error.body.message.includes('email') && error.body.message.includes('empty');
        const passwordEmpty: boolean = error.body.message.includes('password') && error.body.message.includes('empty');
        if (emailEmpty || passwordEmpty) {
          message = 'Customer email and password are required.';
          // console.log(message)
        }
        break;
      }
      case BadRequest.InvalidJsonInput: {
        const emailUndefined: boolean = error.body.errors.find((error: any) => error.detailedErrorMessage.includes('email'));
        const passwordUndefined: boolean = error.body.errors.find((error: any) =>
          error.detailedErrorMessage.includes('password'),
        );
        if (emailUndefined || passwordUndefined) {
          message = 'Customer email and password are required.';
          // console.log(message)
        }
        break;
      }
      default: {
        message = 'Undefined error';
        break;
      }
    }
  } else if (error.statusCode === 500) {
    message = 'something went wrong during the registration process. Please try again later.';
  }
  return message; /// must be hint
}

function showToast(message: string) {
  Toastify({
    text: message,
    duration: 3000,
    gravity: 'top', // top or bottom
    position: 'right', // left, center, or right
    backgroundColor: 'linear-gradient(to right, #00b09b, #96c93d)',
  }).showToast();
}
