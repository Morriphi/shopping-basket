#Shopping Basket

An example Node + React application using the shopping cart kata as a domain.

The application was built using the following dependencies:

- Node v6.3.1
- Docker v1.12.0 (Docker for Mac)
- Docker-Compose v1.8.0

Ensure the correct node version. If you're using NVM you can run:

 ```
    $ cd shopping-basket
    $ nvm use
 ```

### Running the application

Run the application using:

```
$ npm run web
```
[This will run the application on port 3000](http://localhost:3000/)

### Testing the application

Build and test the application using:

```
$ npm test
```

### Unit test the application

To just run unit tests use:

```
$ npm run unit
```

### Acceptance test the application

To just run acceptance tests use:

```
$ ./run-acceptance-tests.sh
```

### Fix code style issues

Fix code style issues using:

```
$ ./node_modules/.bin/semistandard --fix
```

### Building the application

To just build the application use:

```
$ npm run build
```
