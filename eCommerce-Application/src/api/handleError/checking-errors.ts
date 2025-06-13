import type { ErrorResponse, ErrorObject } from '@commercetools/platform-sdk';

export function checkingError(error: ErrorResponse): string {
  let message: string = 'Undefined error';

  if (error.statusCode === 400 && error.errors) {
    for (const error_ of error.errors as ErrorObject[]) {
      switch (error_.code as string) {
        case 'InvalidCustomerAccountCredentials': {
          message = error_.message;
          break;
        }

        case 'DuplicateField': {
          message = `${error_.message} Please log in or use another email address.`;
          break;
        }

        case 'InvalidOperation': {
          if (
            (error_.message.includes('email') && error_.message.includes('empty')) ||
            (error_.message.includes('password') && error_.message.includes('empty'))
          ) {
            message = 'Customer email and password are required.';
          }
          break;
        }

        case 'InvalidJsonInput': {
          if (error_.message.includes('email') || error_.message.includes('password')) {
            message = 'Customer email and password are required.';
          }
          break;
        }

        default: {
          message = error_.message || message;
          break;
        }
      }
    }
  } else if (error.statusCode === 500) {
    message = 'Something went wrong during the registration process. Please try again later.';
  } else if (error.message) {
    message = error.message;
  }

  return message;
}
