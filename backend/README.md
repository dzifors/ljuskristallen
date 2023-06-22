# BACKEND

## How to deploy

Install the dependencies:

```bash
npm install
```

Then, set up a mysql user:

```sql
-- Replace 'username' and 'password' with actual credentials
CREATE USER 'username'@'localhost' IDENTIFIED WITH 'password';
GRANT ALL PRIVILEGES ON *.* TO 'username'@'localhost';
FLUSH PRIVILEGES;
```

Then, create the environment variables file:

```bash
# Rename the example file
mv .env.example .env

# Edit the environment variables file
nano .env
```

Then, run the database creation script:

```bash
npm run setup
```

And that's it! To run a server, run the command below:

```bash
npm run build
npm run start

# Development server, compiles in real time
# Do not run on a production server
npm run dev
```

This will open a server at [localhost:8000](http://localhost:8000)
