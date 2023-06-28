# How to install node.js (v18.16.0)

## Downloading nvm (node.js version manager)

```bash
sudo apt update
sudo apt install curl
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
```

Then log out of the machine and log back in

## Installing node.js v18.16.0

```bash
nvm install v18.16.0
```

Check if node.js got installed with
```bash
node -v
```