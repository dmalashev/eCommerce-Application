import { BadRequest, CommercetoolsError, ErrorsName } from '../types-api';

export function checkingError(error: CommercetoolsError): string {
  let message: string;
  if (error.name === ErrorsName.BadRequest) {
    switch (error.code) {
      case BadRequest.InvalidCustomerAccountCredentials:
        message = error.message;
        break;
      }

      default:
        message = 'Undefined error';
        break;
      }
    }
  } else {
    return 'Undefined error';
  }
  return message; /// must be hint
}
