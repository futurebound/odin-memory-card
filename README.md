# Template Setup

This template repository was created utilizing Vite. It reflects the execution of the following commands:

```
npm create vite@latest <app-name> -- --template react
cd <app-name>
npm install
npm install --save-dev eslint-config-prettier
```

## eslint-config-prettier

To complete setup of [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier), confirm that "prettier" is listed as the **last** item in the extends array of the `.eslintrc.*` file (so that it can override other configs).

```
// .eslintrc.*
{
  "extends": [
    ... ,
    "some-other-config-you-use",
    "prettier"
  ]
}
```

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
