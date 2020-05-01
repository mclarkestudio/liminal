# Liminal

A personal media library for the web.

For a technical guide, see the starter doc: [./DEV-STACK.md](./DEV-STACK.md)  
For current development to do's, see: [./DEV-TODO.md](./DEV-TODO.md)  
For a product roadmap, see: [./DEV-ROADMAP.md](./DEV-ROADMAP.md)  

<!-- New technical set up guide goes here -->

## Local development

`mongod`

`yarn start`


Links:

http://192.168.50.232:3000/  
http://localhost:19002/  

https://github.com/mclarkestudio/liminal/  
https://cloud.mongodb.com/  

@TODO: these could auto open on `yart start` to be truly full stack, one command  

## Entry Points

## Configs

[Mobile Expo Config](./client/app.json)  
[Web Manifest](./client/core/public/manifest.json)  

[Static storage of client registration](./server/models/OAuth/ClientCollection.ts)  

## Design

Search `@DESIGN` to find where to add new display components.

Libraries to remove:
Semantic-ui
native-base

Mobile
Expo Splashscreen
Android colors

Web
Favicon

## Development Patterns

Need a new screen?
[Add a Mobile Route](./client/src/Routes.tsx)
Add a Web Route

