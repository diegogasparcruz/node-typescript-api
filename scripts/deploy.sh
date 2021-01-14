mkdir -p ~/.ssh
echo -e "${SSH_KEY//_/\\n}" > ~/.ssh/id_rsa
chmod +x ~/.ssh/id_rsa

ssh-keyscan -p 9922 -t rsa kamino.deploy.umbler.com 2>&1 >> ~/.ssh/known_hosts