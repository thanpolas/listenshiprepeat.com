FROM shawnzhu/ruby-nodejs:4.2.2

MAINTAINER thanpolas <thanpolas@gmail.com>

# Install gems
RUN gem install jekyll:3.1.2

# Install app npm packages
RUN mkdir -p /app/listenshiprepeat.com/

WORKDIR /app/listenshiprepeat.com/

ADD package.json /app/listenshiprepeat.com/

RUN set progress=false && \
    npm install --progress=false

ADD . /app/listenshiprepeat.com/

# Expose ports to host
EXPOSE 3000 3001

# Default command
CMD ["/app/listenshiprepeat.com/node_modules/.bin/gulp"]
