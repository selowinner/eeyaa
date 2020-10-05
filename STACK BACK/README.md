


## PreRunning the app
Install Nestjs on your device
[Backend](https://github.com/nestjs/nest) framework TypeScript starter repository.


CREATE DATABASE eeyaa_db IF NOT EXIST
Verify if your MYSQL RUNNING ON PORT 3306 (DEFAULT PORT)


## Running the app

```bash
# In Folder STACK BACK
$ npm run start

```

## Routing

```bash
localhost:2888/login
```
for connect Creatif or Client in App.
Request Header : {email: string, password: string, isClient: boolean} // isClient for checked case of type User

Response Server : if Error => HttpException. else return Object of type { access_token : string } // access_token is valid in 86400 seconds


```bash
localhost:2888/users/signup
```
for create Creatif in App.
Request Header : {name: string, email: string, pseudo: string, password: string, confirmPassword: string, numero: string, nationnalite: string, sexe: "Masculin" || "Feminin", isClient: boolean}

Response Server : if Error => HttpException. else return Object of type { access_token : string } // access_token is valid in 86400 seconds


```bash
localhost:2888/clients/signup
```
for create Entreprise in App.
Request Header : {name?: string, email: string, password: string, confirmPassword: string, nameEntreprise?: string, type: "Particulier" || "Entreprise"}

Response Server : if Error => HttpException. else return Object of type { access_token : string } // access_token is valid in 86400 seconds

## License

  eeyaa is [MIT licensed](LICENSE).
