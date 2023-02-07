# Weather App

## Getting started

Clone the repo

```bash
git clone https://github.com/Skinni-k/aa-weather-app.git
```

Install dependencies

```bash
yarn
```

Run tests

```bash
yarn test # run unit tests
```

Run the development server

```bash
yarn dev
```

Run Storybook locally

```bash
yarn storybook
```

## Principles to structure codebase

- Follow [Component Driven Development](https://www.componentdriven.org/)
- Group by module/feature
- Common directories for re-usable files such as components and hooks

##### Sample structure

```
src/
├── assets/
│   └── clouds.svg
├── components/
│   ├── Tabs.tsx
│   ├── Tabs.test.tsx
│   ├── Tabs.styled.ts
│   └── Tabs.stories.tsx
├── hooks
├── pages/
│   └── root/
│       ├── Root.tsx
│       ├── Root.test.tsx
│       ├── Root.styled.ts
│       └── Root.stories.tsx

```

## Development guidelines

### Data Fetching & Mutations

Fetching and mutating API state is managed by [React Query](https://tanstack.com/query).

Each API interaction should have it's own hook in the `src/hooks` folder.

For the actual requests themselves we use the `fetch` api.

### Storybook

The project includes Storybook for viewing and testing components in isolation.

When creating or modifying a component, please ensure to create or edit the story related to that component.

Stories should live alongside the corresponding component in the file structure and should be named `[ComponentName].stories.tsx`.

Where a component has multiple different visual states based on props, please try to provide an example for each state - this will reduce the effort needed by the user to identify how the component looks and behaves.

### Unit tests

These tests are run with [vitest](https://vitest.dev/). Vitest configuration can be found in [vite.config.ts](./vite.config.ts)

The test files should exist alongside the corresponding module or component they are asserting and should be named `[module|ComponentName].test.tsx`.

## References

- [TypeScript](https://www.typescriptlang.org/docs/handbook/intro.html)
- [React](https://reactjs.org/docs/getting-started.html) | [beta docs](https://beta.reactjs.org/)
- [vite](https://vitejs.dev)
- [Chakra UI](https://chakra-ui.com/)
- [Kent C. Dodds](https://kentcdodds.com/blog) - Kent is the Testing Library creator and Remix.run co-founder. Aside from Remix, he mostly writes about React and UI testing.
