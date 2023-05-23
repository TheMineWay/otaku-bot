
# **Otaku BOT**

An Open Source Discord bot developed to ease otaku's community life.

[![CodeQL](https://github.com/TheMineWay/otaku-bot/actions/workflows/github-code-scanning/codeql/badge.svg)](https://github.com/TheMineWay/otaku-bot/actions/workflows/github-code-scanning/codeql)

## **Features**

Check the bot development status and programmed features.

| Feature | Last release |
|---|---|
| Anime progress tracker | ⌛ Programmed |
| Anime picker | ⌛ Programmed |
| Anime release tracker | ⌛ Programmed |

## **Setup**

### **0. Setup the environment**

Create a file named `.env` on the project's root folder. Then, copy the contents of the `example.env` file on the `.env` file.

Now, go to the [Discord developer portal](https://discord.com/developers/applications) and create a new application for the bot (or select an existing one).
Open the **Bot** tab and click on *Reset Token*, then copy the generated token onto the `.env` file.

The `.env` file should look like this:

```env
DISCORD_TOKEN=YOUR_TOKEN
REPOSITORY_URL=https://github.com/TheMineWay/otaku-bot
```

### **1. Install a MySQL database**

This bot uses a MySQL database to persist data. You need to provide the bot with credentials to a database (the user MUST have permissions to `select`, `insert`, `update` and `delete` rows and `create`, `alter` and `drop` tables and indexes).
It is recommended to provide an empty database for the bot (the server will generate/alter the DDL when it is booted).
If strange tables are present the bot might malfunction.

Once you have an operational database, you must provide some variables to the `.env` file:

```env
DATABASE_NAME= # The name of the database (fo example: otaku_bot)
DATABASE_USER= # The database user the bot will use to perform DML/DDL operations (it MUST have proper permissions)
DATABASE_PASSWORD= # The password the bot will use to authenticate with the provided user
DATABASE_HOST= # The address of the database (IP address, domain name, etc)
DATABASE_PORT=3306 # The operational database port (for MySQL it should be 3306)
```

#### **1.1. *(Optional)* Additional variables**

- **Database logging:** If you want to prompt all the database operations you can set `ENABLE_DATABASE_LOGGING=true`.

### **2. Install Docker**

In order to setup the project you need to download and install **Docker** on your computer (or *WSL*).
Download **Docker Engine**: <https://docs.docker.com/get-docker/>

Once you have **Docker** on your machine you need to open a new Terminal and run:

```console
docker compose up
```

Now you will see some green lines on the terminal. If you see `Bot <YOUR BOT NAME> was started!` it means the bot is up and running.

From now on you can start the bot by running the `otaku-bot` **Docker** container (if you repeat this steps again on the same computer, a new Bot instance will be created).

## **I18n project**

You can contribute to the bot development providing new translations to the bot's [Crowdin project](https://crowdin.com/project/otaku-bot).

## **Repository**

Check out the official GitHub repository: <https://github.com/TheMineWay/otaku-bot>

## **Backed by**

![Dependabot](https://img.shields.io/badge/dependabot-025E8C?style=for-the-badge&logo=dependabot&logoColor=white)
