#!/usr/bin/env sh                                                              

# abort on errors                                                               
set -e

# build                                                                         
npm run build

# navigate into the build output directory                                      
cd dist

# if you are deploying to a custom domain                                       
# echo 'www.example.com' > CNAME                                                

git init
git add -A
git commit -m 'deploy'
git branch -M main
git remote add origin git@github.com:phenyxKev/kantuta.git                                                       

# if you are deploying to https://<USERNAME>.github.io/<REPO>                                                                                                                                              
git push -f git@github.com:phenyxKev/kantuta.git main:gh-pages

cd -