source ~/env_vars.sh

meteor update --release 1.3.1

npm install --production

meteor build --directory ~

cd ~/bundle/programs/server

npm install --production
