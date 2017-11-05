FROM node:6.11
RUN npm install -g create-react-native-app
RUN mkdir /app
WORKDIR /app/HundredOneRandomNumbers/
ADD . /app/
