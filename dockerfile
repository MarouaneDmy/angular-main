FROM node:12.20.0-alpine3.12
# Create app directory
WORKDIR /usr/src/app
# add `node_modules/.bin` to $PATH
# ENV PATH /usr/src/app/node_modules/.bin:$PATH
# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./
RUN npm i -no-progress --loglevel=error && npm i -g @angular/cli@11.0.5 --no-progress --loglevel=error
# Bundle app source
# COPY . /usr/src/app
# EXPOSE 4200
CMD [ "ng", "serve", "--host", "0.0.0.0", "--port", "4200" ]