## Getting Started

# Introduction

Starter file which have following installed:

- NextJs 14
- Storybook
- eslint
- husky
- shadcn/ui
- Redux toolkit
- pre-commit hooks & pre-push hooks

### Heads up for you to focus on coding

You can clone this repo and start working without any hassle for you to think about project setup.
Everything had been set up for you.

## NODE VERSION USED ==> (v20.0.0)

If you have difficulty in installing the packages then it is recommended for you to use the Version mentioned above. (v16.14.0)

## Only 'yarn' supported

## Project CI/CD Info:

We have setup the commit check for the project, so it is essential to follow these rules when creating the new branch.

For Example: If you are working on the Ticket issued to you and the Ticket Number on the board is `SN-1` your new branch name must be `feat/SN-1`

Also this must be followed when writing commit message as example below:
`git commit -m 'feat: commit message here..`

Note: If you do not follow this rule, you will not be able to commit your branch or will be able to push the branch.

Keys to be used for the branch are:

- feature -> for any new feature to be developed (recommended for most of the users)
- hotfix -> for minor fixes on the project
- bugfix -> for fixing bugs
- test -> for checking the test
- ci -> for changes in ci/cd of the project
- docs -> for updating the docs on the project
- build -> for pushing the local build
- revert -> for any revert to the codebase had to be done

# Note: (Branch Creation)

- Always create the new branch from `develop` as the base branch
- Branch created must have above mentioned keys as prefix followed by the task the branch is being forked for: `feature/SN-101`

# Storybook: (Intro)

We have storybook implemented on the project and for each component we can find it within the storybook

- We can start the storybook by running the following command as:

```
yarn storybook
```

## Default Notes Below (not Recommended)

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3008](http://localhost:3008) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

[http://localhost:3000/api/hello](http://localhost:3000/api/hello) is an endpoint that uses [Route Handlers](https://beta.nextjs.org/docs/routing/route-handlers). This endpoint can be edited in `app/api/hello/route.ts`.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

\*\*\* Check this out.....
