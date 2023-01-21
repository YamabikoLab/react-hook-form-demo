# react-hook-form-demo

# reactインストール
https://vitejs.dev/

```bash
npm create vite@latest client -- --template react-ts
npm install
npm run dev
```

package.json

```json
    "dev": "vite --host",
```

実行

```bash
npm run dev
```

# vscode debug

/home/node/app/.vscode/launch.json
```json
{
    "version": "0.2.0",
    "configurations": [
    
    
      {
        "name": "Chrome",
        "type": "chrome",
        "request": "launch",
        "url": "http://localhost:5173",
        "webRoot": "${workspaceFolder}/src"
      }
    ]
  }
```

# ESLint
- https://eslint.org/
- https://eslint.org/docs/latest/use/command-line-interface

```bash
$ npx eslint --init
Need to install the following packages:
  eslint@8.32.0
Ok to proceed? (y) y
You can also run this command directly using 'npm init @eslint/config'.
Need to install the following packages:
  @eslint/create-config@0.4.2
Ok to proceed? (y) y
✔ How would you like to use ESLint? · style
✔ What type of modules does your project use? · esm
✔ Which framework does your project use? · react
✔ Does your project use TypeScript? · No / Yes
✔ Where does your code run? · browser
✔ How would you like to define a style for your project? · guide
✔ Which style guide do you want to follow? · standard-with-typescript
✔ What format do you want your config file to be in? · JSON
Checking peerDependencies of eslint-config-standard-with-typescript@latest
Local ESLint installation not found.
The config that you've selected requires the following dependencies:

eslint-plugin-react@latest eslint-config-standard-with-typescript@latest @typescript-eslint/eslint-plugin@^5.0.0 eslint@^8.0.1 eslint-plugin-import@^2.25.2 eslint-plugin-n@^15.0.0 eslint-plugin-promise@^6.0.0 typescript@*
✔ Would you like to install them now? · No / Yes
✔ Which package manager do you want to use? · npm
Installing eslint-plugin-react@latest, eslint-config-standard-with-typescript@latest, @typescript-eslint/eslint-plugin@^5.0.0, eslint@^8.0.1, eslint-plugin-import@^2.25.2, eslint-plugin-n@^15.0.0, eslint-plugin-promise@^6.0.0, typescript@*

added 221 packages, and audited 305 packages in 12s

95 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
Successfully created .eslintrc.json file in /home/node/app/client
```

# ESLint React Hook
https://www.npmjs.com/package/eslint-plugin-react-hooks

```bash
npm install eslint-plugin-react-hooks --save-dev
```

# prettier
https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode

```
npm install prettier -D --save-exact
```

# MUI
https://mui.com/

```bash
npm install @mui/material @emotion/react @emotion/styled
npm install @fontsource/roboto
```

client/index.html
```html
<meta name="viewport" content="initial-scale=1, width=device-width" />
```

react routerとの統合  
https://mui.com/material-ui/guides/routing/

# React Hook Form
https://react-hook-form.com/

```bash
npm install react-hook-form
```