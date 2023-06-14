# LJUSKRISTALLEN

## Development server

First, ensure you have installed nodejs and npm on your machine, and you have git on it.

Then, clone the project:

```bash
git clone https://github.com/grafika-dzifors/ljuskristallen

# Or, if you want to make changes to the project,
# add your ssh key in github settings and clone using this command:
git clone git@github.com:grafika-dzifors/ljuskristallen
```

Then, you can spin up a development server using this command:

```bash
npm run dev
```

Open [`http://localhost:3000`](http://localhost:3000) with your browser to see the result.

## How to deploy

If you want to deploy a production server, run the below commands:

```bash
npm run build
npm run start
```

This will open a server at [`http://localhost:3000`](http://localhost:3000). You can use a web server like [`nginx`](https://www.nginx.com/) to route traffic from a public domain to your server.

I will add instructions for nginx deployment and a sample config later
