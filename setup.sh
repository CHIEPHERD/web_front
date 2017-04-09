function InstallNodeAndNpm {
  curl -sL https://deb.nodesource.com/setup_7.x | sudo -E bash -
  apt-get install nodejs -y
  apt-get install npm -y
  ln -s /usr/bin/nodejs /usr/local/bin/node
}

function InstallVue {
  npm install -g js-beautify
  npm install -g node-dev
  npm install -g express-generator
  npm install -g vue-cli
  npm install /vagrant
}

echo 'Installing Node...'; InstallNodeAndNpm
echo 'Installing Vue...'; InstallVue
