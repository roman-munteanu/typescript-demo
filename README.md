typescript-demo
-----

## Init

initialize project and create package.json:
```
npm init -y
```

install TS:
```
npm install -g typescript
```

install parcel-bundler tool:
```
npm install -g parcel-bundler
```

install JSON Server:
```
npm install -g json-server
```

install axios (HTTP Client):
```
npm install axios
```

create tsconfig.json - configuration for the TS compiler:
```
tsc --init
```

## Run

run JSON server:
```
json-server -w db.json
```

parcel:
```
parcel index.html
```

## Commands

Prerequisite: NodeJS should be installed (to use `npm`)

`typescript` gives the access to TS compiler `tsc`

install modules:
```
npm install -g typescript

npm install -g ts-node

tsc --help

tsc using-ts.ts
```

initialize project and create package.json:
```
npm init -y
```

axios:
```
npm install axios
```

TypeScript compiler:
```
tsc index.ts
```

node command-line tool to run compiled js files:
```
node index.js
```

to combine `tsc` and `node` commands into just one:
```
ts-node index.ts
```

tool which helps us run TS in the browser:
```
npm install -g parcel-bundler

npx parcel index.html
```



## Resources

TypeScript:
https://www.typescriptlang.org/docs/

in-browser TS compiler:
https://www.typescriptlang.org/play

Axios:
https://axios-http.com/docs/intro

Express:
https://expressjs.com/

http://jsonplaceholder.typicode.com/todos/1

