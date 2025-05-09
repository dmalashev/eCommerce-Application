import { login } from "./api/autorizateCustomer";
import { createCustomer } from "./api/createCustomer";

// eslint-disable-next-line unicorn/no-empty-file

const customer = {
  email: 'user@example.com',
  password: 'password',
};
createCustomer(customer)
// login(customer)