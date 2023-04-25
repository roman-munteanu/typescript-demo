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
