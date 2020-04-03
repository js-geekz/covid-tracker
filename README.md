# covid-tracker

Workshop for learning building UI with react, typescript and API's with nodejs, express.

## Install Dependencies
```
yarn install
```
This will install root packages as well as npm dependencies of all internal packages as well

## Start all services
```
yarn start
```
This will start serving UI on http://localhost:3000 <br>
API's will be accessible at http://localhost:8000

In order to start individual services,
```
# For UI
cd packages/client
yarn start

# For API's
cd packages/server
yarn start
```
The URLs will remain same as give above

## Code Linting
```
yarn lint-all-packages
```
