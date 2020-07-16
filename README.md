# Start the application

## On premise

```
npm run start-standalone
```

Open your browser - [Standalone](https://localhost:8002/)

## On Insghts

This method is just for RedHat employees.

```shell
npm run start
```

In a second terminal:

```shell
SPANDX_CONFIG=profiles/local-frontend-and-api.js bash ../insights-proxy/scripts/run.sh
```

open your browser - [Insights](https://ci.foo.redhat.com:1337/beta/migrations/migration-analytics)
