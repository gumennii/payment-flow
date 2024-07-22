This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [Tailwind CSS](https://tailwindcss.com/)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load PlayFair Display font, which is a good replacement for Georgia font presented in Figma which requires licence.

## About Project

This project was meant to be completed in 3 hours, which is a pretty short time to execute all aspects of front-end development perfectly, including semantics, accessibility, performance, and so on. My main focus was recreating the Figma prototype and ensuring all styles and the user's state matched the initial designs.

- Project is built using Typescript/Next.JS/TailwindCSS
- ESlint and Prettier were added to keep code quality and consistency
- Cypress is used for quick e2e tests

## Project Structure

I followed the regular Next.JS file conventions with `/app,` `/components,` and other folders, each with its responsibilities.

`/app` - routing/pages
`/components` - UI components specific per each page including layouts and shared UI components
`/fonts` - defines additional custom fonts
`/styles` - represents additional/global styles for the app
`/utils` - shares utility/helper functions

## e2e Tests
Project has a few basic Cypress tests to cover basic payment flow

```bash
# open tests
npm run cy:open
# run tests
npm run cy:run
```

## Please note:

1. `<Input />` component incldes labels and error messages and acts more as FormControl component. It was much faster to implement it this way to keep consistency, however if I had more time I would split it into smaller components and create a proper FormControl components to be integrated with forms
2. I would've ask for Georgia font to replace Playfair if I had access to it
3. I would've perform more testing using browserstack to ensure app looks great on other browsers/devices
4. I would've use proper theme layer and organize CSS variables
5. I was trying to ensure accesebility for the form, but there is more work can be done
