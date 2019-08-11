This Task was provided by CrossLend, bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Deployment: Ubuntu

## Install Docker to Ubuntu

Please follow this Link to Install Docker in Ubuntu: https://docs.docker.com/install/linux/docker-ce/ubuntu/

Once you installed Docker to the ubuntu you can start copy the source code to machine as the following

## Copy Surce Code
before you clone the package make sure that you installed git in ubuntu.

- Using github: git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY

- Copy the code over storage like USB. (not recommended)

## Deploy 
After the souce code Avaliable on the server you can ru the following command:

- Build Docker image to the ubuntu Machine

```
$ docker build -t crosslend .
```
- Run Docker image for production, specify port 80  as a default

```
$ docker run -it -p 80:80 crosslend
```

Else for test you can specify port 3030 as the following:

```
$ docker run -it -p 3030:80 crosslend
```
Wait untill finished.

- Now you can open browser and goto url:

[http://localhost:3001/](http://localhost:3001/)


### e2e

For e2e Testing you can install [cypress.io](https://www.cypress.io/).

How to use cypress it [https://docs.cypress.io/guides/getting-started/writing-your-first-test.html#Add-a-test-file](https://docs.cypress.io/guides/getting-started/writing-your-first-test.html#Add-a-test-file)



### Ambiguity

So far, there is no major ambiguity in the task, the only minor issue in the task was the Pagination. It shows in the desgine "1 of 10", I think it should be "1-10 of 2" since "1-10" is the records index, and "2" Pages Count. I use the following pattern:

"1 of 10", Since "1": page index. "10": Pages Count.

## Available Scripts

In the project directory, you can run:

### `npm start`

### `npm test`

### `npm run build`

### `npm run eject`

 


