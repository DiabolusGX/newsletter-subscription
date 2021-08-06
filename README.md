# Newslettwe Subscription

This repository contains source code for Newslettwe Subscription using ReactJS + Tailwind + Expressjs + MongoDB (with mongoose ODM) that lets you create new subscription and list all subscriptions that shows name, email and createdAt time of that subscription.

## Index

-   [Requirements](#Requirements)
-   [Installation](#Installation)
-   [Configuration](#Configuration)

## Getting Started

This reposetory only contains both backend + frontend so you need to install both.
There are scripts to make it easy for you.

### Requirements

This module requires the following modules:

-   [Node.js](https://nodejs.org/en/download/)
-   [Yarn](https://classic.yarnpkg.com/en/docs/install/#windows-stable)
-   [Git](https://git-scm.com/downloads)

### Installation

To clone the backend and serve it locally, where `newsletter-subscription` is the name of the repository:

```shell
$ git clone https://github.com/DiabolusGX/newsletter-subscription.git my-newsletter-subscription
$ cd my-newsletter-subscription
```

This will take you to the clonned project directory and ready to configure the project.

## Configuration

-   You have to add `.env` in `server` folder of the project where you have to add `MONGO_URI` (please contact me to get it) and `PORT` (default is `3001`) Also, please make sure to change `proxy` in client `package.json` if you another port.

    ```shell
    PORT=3001
    MONGO_URI=mongodb://[username:password@]host1[:port1][,...hostN[:portN]][/[defaultauthdb][?options]]
    ```

    `PORT` is set to `3001` by default but you MUST enter valid [`MONGO_URI`](https://docs.mongodb.com/manual/reference/connection-string/) (either mongo atlas cluster or localhost) for application to start and work properly.

    > If the username or password includes the `: / ? # [ ] @` characters,
    > those characters must be converted using [percent encoding](https://datatracker.ietf.org/doc/html/rfc3986#section-2.1).

After you've setup enviornment variables, you can continue with installing dependencies :

-   Run to install all rependencies, _please use custom script to install dependencies_.
    ```shell
    yarn install
    ```
-   Run to start the development server that'll run on `PORT` mentioned in `.env` file (or 3000 be default).
    ```shell
    yarn start
    ```
-   **OR** you an use `yarn client` or `yarn server` to start independently.

---

## Additional help

Please reachout to me anytime on [discord](https://boosterbot.xyz/support) or by mail 🙏
