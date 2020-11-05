```sh
git clone https://github.com/[your-account]/[your-app].git
cd [your-app] && npm i
```
## Separate client/server

The boilerplate is also set up to host the client using `webpack-dev-server` with hot module reloading etc. To use this method, in one terminal run:
```sh
npm run client
```
and in the other:
```sh
npm run server
```
The client will be available on http://localhost:8080 and the server on http://localhost:3000. Note that you will still need to manage CORS between the two, as they are on different ports.

=======
# imageSelector

To Do

1. Image selection gets stored and retrieved from DB
2. Image is tied to selections table
3. Text also updates when dropdown selection is made

