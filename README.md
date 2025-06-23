# eCommerce-Application
This is an educational project which represents a website for sale vinyl records, audio cassettes and compact disks with music.

[About the project](#about-the-project)\
[How to start the application](#how-to-start-the-application)\
[Scripts](#scripts)\
[The technology stack](#the-technology-stack)\
[Authors](#authors)

## About the project
**The project represents a website where you can find vinyl records, audio cassettes and compact disks with music.** Each product has its own **page with detailed information**. You can find all of the products on the **Catalog page**. You can add every product to a cart on the Catalog page or on the page of some particular product. All the products that have been added to the cart are displayed on the **Cart page**. On this page you can change an amount of every product or delete it or you can also clean the whole basket. This page also provides the ability to apply a promocode for discount. You have the ability to create your personal account on the **Registration page** and manage it on the **Profile page**. To log in you account use the form on the **Login page**. The backend part of the project is implemented with using the CommerceTools platform.

## How to start the application
1. Run this command to clone the repository:
```bash
git clone https://github.com/dmalashev/eCommerce-Application.git
```

2. Switch to the `develop` branch:
```bash
git checkout develop
```

3. Go to `/eCommerce-Application` folder
```bash
cd eCommerce-Application
```

4. Install all dependencies
```bash
npm install
```

5. Run this command to start the application on the local server:
```bash
npm run dev
```
or run this command to create a final bundle of the application:
```bash
npm run build
```
You can find all available commands [here](#scripts).

## Scripts
Here are scripts you can use during the interaction with the project. Run the command `npm run <script>` changing `<script>` with one of the following scripts:

`dev` - start Vite development server with development bundle

`build` - create build for production

`preview` - locally preview the production build

`test` - run tests

`test:ui` -  run Vitest providing UI for runnning tests

`coverage` - check the information about test coverage of the code

`format` - check the code of `.ts`, `.tsx` and `.css` files by Prettier formatter and fix all possible problems

`format:check` - check the code of `.ts`, `.tsx` and `.css` files by Prettier formatter

`lint` - check the code of `.ts` and `.tsx` files by ESLint linter

`lint:fix` - check the code of `.ts` and `.tsx` files by ESLint linter and fix all possible problems

`stylelint` - check the code of `.css` files by StyleLint linter

`pre-commit` - run formatters and linters for `.ts`, `.tsx` and `.css` files

`prepare` - initialize Husky in the project
  
## The technology stack
Here is the technology stack used for creating this application:
- TypeScript
- React
- React Router
- Zustand
- Ant Design
- Commercetools platform-sdk
- Prettier
- Eslint (with eslint-plugin-unicorn)
- StyleLint
- Husky (with lintstaged and commitlint)
- Vite (with vite-plugin-checker)
- Vitest

## Authors
[Artyom Migalev](https://github.com/artmigalev)\
[Dmitrii Malashev](https://github.com/dmalashev)\
[Shakhperi Ramaldanova](https://github.com/Shakhrii)
