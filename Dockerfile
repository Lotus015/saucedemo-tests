FROM cypress/included:12.8.1
WORKDIR /app
COPY . .
RUN yarn install
ENTRYPOINT ["yarn", "cypress", "run"]