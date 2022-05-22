# Drag-tags

## Requirements

- Vue@^3.2.33
- Element-plus@^2.2.0
- Node@^16.5.0
- Pnpm@^6.16.1

## Project setup
```
pnpm install
```

### Compiles and hot-reloads for development
```
pnpm run serve
```

### Compiles and minifies for production
```
pnpm run build
```

### Run your unit tests
```
pnpm run test:unit
```

### Run your end-to-end tests
```
pnpm run test:e2e
```

### Lints and fixes files
```
pnpm run lint
```

### List detail

```txt
├─public              // public resource
├─src
│  ├─assets           // assets resource
│  ├─components       // vue─components
│  ├─domain           // domain logic
│  ├─types            // common types
│  └─utils            // util list
│      └─Draggable
└─tests
    ├─e2e             // e2e test list
    │  ├─plugins
    │  ├─specs
    │  └─support
    └─unit            // unit test list
        ├─components  // vue-component unit test list
        └─domain      // pure js/ts test list
```
