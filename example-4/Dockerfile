FROM mhart/alpine-node
WORKDIR /src
ADD package.json /src/
ADD index.js /src/
ADD views/index.pug /src/views/
RUN npm install
EXPOSE 80
CMD npm start

