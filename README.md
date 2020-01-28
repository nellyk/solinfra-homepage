# solinfra-homepage

[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

![Lighthouse Accessbility badge](assets/badges/lighthouse/lighthouse_accessibility.svg)
![Lighthouse Best Practices badge](assets/badges/lighthouse/lighthouse_best-practices.svg)
![Lighthouse Performance badge](assets/badges/lighthouse/lighthouse_performance.svg)
![Lighthouse PWA badge](assets/badges/lighthouse/lighthouse_pwa.svg)
![Lighthouse SEO badge](assets/badges/lighthouse/lighthouse_seo.svg)

![auditor](https://github.com/D-Nice/solinfra-homepage/workflows/auditor/badge.svg)
![linter](https://github.com/D-Nice/solinfra-homepage/workflows/linter/badge.svg)
![profiler-local](https://github.com/D-Nice/solinfra-homepage/workflows/profiler-local/badge.svg)
![builder](https://github.com/D-Nice/solinfra-homepage/workflows/builder/badge.svg)
![deployer](https://github.com/D-Nice/solinfra-homepage/workflows/deployer/badge.svg)

Gatsby.js V2 Solinfra homepage

## Install

Install necessary dependencies via

```sh
npm install
```

*NOTE*: You may need additional packages installed for your distro to build
certain binary dependencies (such as for image processing). This project has a
pre-install hook for Alpine Linux currently, which may be used as a reference
for other distros in the 'scripts' folder. If the hook fails, for cases where
you're running as root, you may run it manually via

```sh
rm -rf node_modules/*
npm run preinstall && npm i
```

## Running

### Development

To launch a local development instance:

```sh
npm run develop
```

### Deployment

The deployment is part of a complete end-to-end CI/CD pipeline using Github
actions. Push whatever latest changes ought to be live, onto the master branch.
They must of course pass various checks before merging is permitted, such as
linting, auditing, profiling, etc.

It's good practice to run

```sh
npm run lighthouse:badge
```

to update the badge scores appropriately for new deployments, and merge it in to
master (must have chromium).

## Attributions

This site is possible thanks to the indirect help and work of the following

### Template

[@anubhavsrivastava](https://github.com/anubhavsrivastava) for the great
Gatsby.js V2 starter [template](https://github.com/anubhavsrivastava/gatsby-starter-grayscale)

### Images

In order of appearance

Masthead: on [pixabay.com](https://pixabay.com/) from [@jplenio](https://www.instagram.com/jplenio/)

Dock: on [unsplash.com](https://unsplash.com/) from [@helloitsammiel](https://unsplash.com/@helloitsammiel)

Footer: on [unsplash.com](https://unsplash.com/) from [@samuelzeller](https://unsplash.com/@samuelzeller)
