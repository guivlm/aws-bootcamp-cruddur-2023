FROM node:16.18

ENV PORT=3000
DOCKER 
COPY . /frontend-react-js
WORKDIR /frontend-react-js
RUN npm install
#RUN npm install react
#RUN npm i react-script --save 
EXPOSE ${PORT}
CMD ["npm", "start"]