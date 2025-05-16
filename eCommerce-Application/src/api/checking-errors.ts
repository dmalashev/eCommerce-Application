export type commercetoolsError = {
  code?: string;
  error?: { code: string; message: string }[];
  message: string;
  name: string;
  statusCode: number;
};

export function checkingError(error: commercetoolsError): string {
  let message: string;
  if (error.name === 'BadRequest') {
    switch (error.code) {
      case 'invalid_customer_account_credentials': {
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
