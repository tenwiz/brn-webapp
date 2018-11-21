#!/bin/bash
source ~/env_vars.sh

cd ~/brn-webapp
git pull

rm -rf node_modules
npm install
npm prune --production

meteor build --directory ~

cd ~/bundle/programs/server
npm install
npm prune --production

cd ~/bundle/programs/web.browser
for file in *.js *.css; do gzip "$file" ; done

cd ~
rm -rf backup
mv ~/portal ~/backup
mv ~/bundle ~/portal

# mkdir logs

export ROOT_URL="http://104.236.102.106"
export MONGO_URL="mongodb://localhost:27017/meteor"
export PORT=8080

cd ~/portal
forever stop "app"
# forever stop main.js
forever start --uid "app" -a -l ~/logs/forever.log -o ~/logs/portal.out -e ~/logs/portal.err main.js
