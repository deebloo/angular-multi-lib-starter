# Angular Module Repo [![CircleCI](https://circleci.com/gh/LiveSafe/lvsf-blocks.svg?style=svg&circle-token=fa0527715521e428609a6897b7881c6f29ee3462)](https://circleci.com/gh/LiveSafe/lvsf-blocks)

Packages for building front end applications.

#### Module Docs

| Module                            |
| --------------------------------- |
| [MyCommonModule](packages/common) |
| [MyCoreModule](packages/core)     |

#### Development

NOTE: Whenver you commit a new build should be generated via a precommit hook. This ensures that all
commits have a builds to check against

Clone:

```BASH
git clone https://github.com/your-repo.git
```

Install Deps:

```BASH
npm run i
```

Serve demo app:

```BASH
npm run serve:dev
```

Run tests

```BASH
npm test
```

to run demo app to test with final compiled modules

```BASH
npm run serve:packages
```

If wanting to test in a different application while building you will have to do the following.

1. link the dev packages from this repo

```BASH
npm run link-dev
```

2. Link the packages you are working on with your project. (run these from your app)

```BASH
npm link @my-lib/common

npm link @my-lib/core

# etc
```

3. Edit your app `tsconfig.app.json`

```JSON
{
  "exclude": [
    "test.ts",
    "**/*.spec.ts",
    "../node_modules/@my-lib/**/*.spec.ts"
  ],
  "include": ["**/*.ts", "../node_modules/@my-lib/**/*.ts"]
}
```
