# student-app — Lab implementation summary

## Project overview

Angular application **`student-app`** (NgModule-based, CSS, no routing). Bootstrap: `AppModule` loads `AppComponent`, whose template hosts the custom **`students`** component.

## Exercise 1 — Manual component

- **Created** `src/app/students.component.ts` by hand (no `ng generate`).
- **Registered** `StudentsComponent` in `AppModule.declarations`.
- **Root template** `src/app/app.component.html` contains only `<students></students>`.
- **Angular 19 note:** `StudentsComponent` uses `standalone: false` so it can be declared in an `NgModule` (CLI-generated `AppComponent` uses the same pattern).

## Exercise 2 — CLI component

- **Command:** `ng generate component student` (equivalent: `ng g c student`).
- **Output folder:** `src/app/student/` with `.ts`, `.html`, `.css`, and `.spec.ts`.
- **Registration:** `StudentComponent` was added to `AppModule` automatically by the schematic.
- The **`StudentComponent`** is not required on the home page for the lab; the UI is driven by **`StudentsComponent`**.

## Exercise 3 — Data binding on StudentsComponent

- **Selector:** `students` (unchanged).
- **Template:** inline only; uses interpolation `{{ getTitle() }}` and `{{ getCurrentDate() }}`.
- **Class:** `title` string, `getTitle()`, and `getCurrentDate()` (returns `new Date().toLocaleDateString()`).
- **Expected UI:** heading *Welcome to the Students Component* and a line *Current Date: …* (locale-dependent).

## Module layout

`AppModule` declares:

- `AppComponent`
- `StudentsComponent`
- `StudentComponent`

and imports `BrowserModule`.

## How to run

From the `student-app` directory:

```bash
npx ng serve
```

Open `http://localhost:4200`.

Production build:

```bash
npx ng build
```

## Cleanup (comments removed)

The following project-owned files were stripped of block or line comments (dependencies under `node_modules` were not modified):

- `src/styles.css`
- `tsconfig.json`, `tsconfig.app.json`, `tsconfig.spec.json`
- `.vscode/extensions.json`, `.vscode/launch.json`, `.vscode/tasks.json`

## Final verification

- **`npx ng build`** completed successfully after the comment cleanup.
