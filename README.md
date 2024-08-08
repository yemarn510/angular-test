# Frontend

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.1.3.

## Folder Structure

### Constants
This folder includes the constant data that is shared across the project. It has the mocked data constants as well, to use in unit test cases.
```
frontend
  ├── src
  │   ├── app
  │   │   ├── constants
  │   │   │   ├── api.constants.ts
  │   │   │   └── mocked-artworks.constant.ts
```

### Models
This folder includes the interface, types and classes to help with the type safeness across the project. 
```
frontend
  ├── src
  │   ├── app
  │   │   ├── models
  │   │   │   ├── artwork.model.ts
  │   │   │   └── common.model.ts
```
### Module
Modules can be lazily loaded by the related url path and has two folders inside,

- Pages -> For Url Routed Pages components
- Components -> For shared component within the same module
Each module can has it's own module where the third part librar modules can be imported, own service and sometimes it's own interface model files.

```
frontend
  ├── src
  │   ├── app
  │   │   ├── modules
  │   │   │   └── artwork
  │   │   │       ├── artwork-routing.module.ts
  │   │   │       ├── artwork.module.ts
  │   │   │       ├── artwork.service.spec.ts
  │   │   │       ├── artwork.service.ts
  │   │   │       ├── components
  │   │   │       |   └── ...
  │   │   │       └── pages
  │   │   │           └── artwork-list
```

### Services
The services under this folders are shared across the project. It has it's own spec file for testing.
```
frontend
  ├── src
  │   │   ├── services
  │   │   │   ├── api.service.spec.ts
  │   │   │   └── api.service.ts
```

### Standalone
These are the standalone components that can be imported by the modules within the project.
```
frontend
  ├── src
  │   ├── app
  │   │   └── standalone
  │   │       └── loading-spinner
  │   │           ├── loading-spinner.component.html
  │   │           ├── loading-spinner.component.scss
  │   │           ├── loading-spinner.component.spec.ts
  │   │           └── loading-spinner.component.ts
```

### Environments
This folder has the variables that is used when the project is built. If the build command use the `--configuration=prod`, it will use the environment variables from the `environment.prod.ts` file.
```
frontend
  ├── src
  │   ├── app
  │   ├── environments
  │   │   ├── environment.prod.ts
  │   │   └── environment.ts
```
--------
## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
