# eCommerce-Application
This is an educational project which represents a website for sale vinyl records, audio cassettes and compact disks with music.

[About the project](#about-the-project)\
[How to start the application](#how-to-start-the-application)\
[Scripts](#scripts)\
[The technology stack](#the-technology-stack)\
[Authors](#authors)

## About the project
The project represents a website where you can find vinyl records, audio cassettes and compact disks with music. Each item has its own card with information. You can find a catalog with items and sort them by different parameters. You can also create and manage your personal account. It enables you to add items to the basket and proceed to checkout.

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
