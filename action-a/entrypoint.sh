# !/bin/sh -l

echo Hello world my name is $MY_NAME
sudo apt update
sudo apt install git
git --version

echo "Cloning express-mono-upstream..."
sh -c "git clone git@github.com:CuBoulder/express-mono-upstream.git"
