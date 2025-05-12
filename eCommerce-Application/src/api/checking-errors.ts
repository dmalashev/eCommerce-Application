export type commercetoolsError = {
  code?: string;
  error?: { code: string; message: string }[];
  message: string;
  name: string;
  statusCode: number;
};

export function checkingError(error: commercetoolsError) {
  let message;
  if (error.name === 'BadRequest') {
    switch (error.code) {
      case 'invalid_customer_account_credentials':
        message = error.message;
        break;

      default:
        message = 'Неизвестная  ошибка';
        break;
    }
  } else {
    return 'Неизвестная  ошибка';
  }
  return message; /// здесь должна  всплывать подсказка что пользователь с такими  данными не  найден
}
