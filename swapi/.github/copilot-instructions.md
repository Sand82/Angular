# Copilot Instructions for swapi (Angular)

## Project Overview
- This is an Angular 18+ application scaffolded with Angular CLI.
- The entry point is `src/main.ts`, which bootstraps `AppComponent` using configuration from `app/app.config.ts`.
- Routing is set up in `app/app.routes.ts` (currently empty, but use this for route definitions).
- Styles use SCSS, with global styles in `src/styles.scss` and per-component styles (e.g., `app.component.scss`).
- The `public/` directory is used for static assets, referenced in `angular.json`.

## Key Workflows
- **Development server:** `npm start` or `ng serve` (default: http://localhost:4200/)
- **Build:** `npm run build` or `ng build` (output: `dist/`)
- **Unit tests:** `npm test` or `ng test` (uses Karma)
- **Scaffolding:** Use `ng generate component|service|module ...` for new code (see README for details).

## Project Conventions
- **Standalone Components:** Components are defined with `standalone: true` and imported directly (see `AppComponent`).
- **Routing:** Use `provideRouter(routes)` in `app.config.ts` for router setup. Add new routes in `app.routes.ts`.
- **Strict TypeScript:** Strict mode is enabled in `tsconfig.json` and `angularCompilerOptions`.
- **SCSS:** All styles use SCSS. Set `style: scss` in schematics for new components.
- **No legacy Angular modules:** Prefer standalone components and modern Angular patterns.

## Integration & Patterns
- **Dependencies:** See `package.json` for Angular and dev dependencies. No custom backend or API integration is present by default.
- **Testing:** Unit tests are configured via Karma/Jasmine. No e2e setup by default—add as needed.
- **Assets:** Place static files in `public/` (referenced in `angular.json`).

## Examples
- To add a new route: Edit `app.routes.ts` and update the `routes` array.
- To add a new component: `ng generate component my-feature` (will use SCSS by default).
- To run tests: `npm test` (runs all unit tests).

## References
- See `README.md` for CLI usage and more help.
- See `angular.json` for build/test configuration.
- See `tsconfig.json` for TypeScript and Angular compiler options.

---
For more, see the [Angular CLI docs](https://angular.dev/tools/cli).
