FROM node:14.17.0 as builder
RUN mkdir -p /tmp/app
# working dir inside container
WORKDIR /tmp/app
#Copy dependencies filess
COPY . .

RUN npm install

# RUN yarn build:staging
RUN npm run build

FROM nginx:alpine
# copy the build folder from react to the root of nginx (www)
COPY --from=builder /tmp/app/build /usr/share/nginx/html
# expose port
EXPOSE 80