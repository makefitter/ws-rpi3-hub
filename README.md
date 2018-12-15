# Raspberry PI 3 HUB for wearable sensors
<br />

### Project Setup:
1. Clone repository
2. Open ./ws-rpi3-hub
2. npm install
3. npm start (listening on port 5000)
4. Open ./ws-rpi3-hub/client/
5. npm install
6. npm start (listening on port 3000)

- Note: Sequelize CLI needs to be installed globally (Sequelize CLI [Node: 8.10.0, CLI: 3.2.0, ORM: 4.32.6] )

```
npm install -g sequelize-cli
``` 
### Database information (./config/config.json):
- Migrations (./migrations)
```
npm run migrate
```
- Seeders (./seeders)
```
npm run seed
```

- Removing all tables from db:
```
npm run drop
```

 **Description:**
```
 {
     "username": "inovatink",
    "password": "inovatink",
    "database": "ws_db",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
```
- Note: mySQL db  is needed for starting backend ([detailed setup](https://raspberry-projects.com/pi/software_utilities/web-servers/mysql))

<br />

Initialization of database with default seeders and start of the app:
```
npm run restartdb
```
<br />

- For running tests (./test):

```
npm test
```
<br />

With starting of backend Socket ([docs](https://socket.io/docs/))
is initialized.It is used for realtime control of python scripts.
Backend: **./src/scripts/eventBroadcaster.js**
Frontend: **./client/services/socket.service.ts**

**Project description**

Application collects data from wearable sensor in JSON format. Collection of data is done using bluetooth. Python scripts which are stored in **./src/scripts/python** are used for connecting device to the application and disconnecting device (application is tested on Raspberrry PI3 and w10 enviroments where scripts are used and developed just for RPI3). User authentication is done using PassportJS and token authorization. 
On frontend we are using Typescript and Webpack. Frontend is ready for production with `npm run build-prod`.

**Additional requirements:**
 - Node: v8.10.0
 - npm: v6.4.1

