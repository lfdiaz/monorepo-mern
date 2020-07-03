yarn install
lerna bootstrap
cd ./packages/ui
yarn run build
rm -rf ../backend/src/build
cp -r ./build ../backend/src/
cd ../../

PACKAGE_VERSION=$(cat package.json \
  | grep version \
  | head -1 \
  | awk -F: '{ print $2 }' \
  | sed 's/[",]//g')
PACKAGE_VERSION=`echo $PACKAGE_VERSION | sed 's/ *$//g'`

docker build -t "username/project-name:${PACKAGE_VERSION}" .
docker push "usernams/project-name:${PACKAGE_VERSION}"

yarn version --patch