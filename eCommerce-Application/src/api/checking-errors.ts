export type commercetoolsError = {
  code?: string,
  error?: {code:string,message:string}[],
  message: string,
  name: string,
  statusCode: number,
}

export  function checkingError(error:commercetoolsError) {
  if (error.name === 'BadRequest') {
    if (error.code === 'invalid_customer_account_credentials') {
    }
    return error.message; /// здесь должна  всплывать подсказка что пользователь с такими  данными не  найден
  }

}
