# bs-atama

Bucklescript bindings for [atama](https://github.com/franciscop/atama) proxy state management.
A smart state manager for Javascript and React.

Atama is focused on:

- _productivity_ smooth learning curve while allowing for more advanced patterns.
- _testing_ easy to write tests for all kind of events
- _debugging_ detailed CRUD history is stored to a great detail on development

## Use

### Install

`npm i bs-atama`

Add `bs-atama` to `dependencies` in `bsconfig.json`

## Api

See [Atama API](https://github.com/franciscop/atama/blob/master/readme.md#api)

### Usage

See [examples](https://github.com/franciscop/atama/tree/master/examples)

```javascript
Atama.listen() |> component;
Atama.state({ name: "John" }) |> component;
```

## Build

```
npm run build
```

## Watch

```
npm run watch
```

## Editor

If you use `vscode`, Press `Windows + Shift + B` it will build automatically
