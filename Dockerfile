# Use an official Nodejs runtime as a parent image
FROM node:carbon

# Create a directory where our app will be placed
RUN mkdir -p /usr/src/app

# Change directory so that our commands run inside this new directory
WORKDIR /usr/src/app

# Copy dependency definitions
COPY package.json /usr/src/app

# Install dependecies
RUN npm install

# Get all the code needed to run the app
COPY . /usr/src/app

# Change NPM's global installation path to avoid permission issue
# RUN mkdir ~/.npm-global
# RUN npm config set prefix '~/.npm-global'
# RUN touch ~/.profile 
# RUN echo "export PATH=~/.npm-global/bin:$PATH" >> ~/.profile
# RUN /bin/bash -c "source ~/.profile"

EXPOSE 4200

# Run app.py when the container launches
CMD [ "npm", "start" ]