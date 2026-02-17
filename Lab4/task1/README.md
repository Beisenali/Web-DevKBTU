# Angular First App Tutorial

Housing locations app from the official [Learn Angular](https://angular.dev/tutorials/learn-angular) / [First App](https://angular.dev/tutorials/first-app) tutorial.

## Features

- **Components** — HomeComponent, HousingLocationComponent, DetailsComponent
- **Services** — HousingService (fetch locations via HTTP)
- **Routing** — Home and Details pages
- **Forms** — Reactive form for application submission
- **Directives** — *ngFor, *ngIf, property/event binding

## Run

```bash
npm install
ng serve
```

Open http://localhost:4200

## Optional: JSON API backend

To load data from `db.json` instead of fallback:

```bash
npm run backend
```

Then run `ng serve` in another terminal. The app fetches from http://localhost:3000/locations.
