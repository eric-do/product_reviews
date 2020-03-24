# Vapor Market: Reviews Module
This reviews module is a component that contains multiple features pertaining to the Vapor Market product detail page:
- Historical data displaying reviews over time
- Reviews list - sortable and filterable by language, helpfulness, etc.
- Buttons to flag reviews as helpful/funny
- Modal to submit comments on each review

## Screenshots
![User reviews and historical data](screenshot1.png)
![Review comment modal](screenshot2.png)

## Demo clip
[![Video demo](https://img.youtube.com/vi/yFk6rN6DdSs/0.jpg)](https://youtu.be/yFk6rN6DdSs)

## Installing and running the app

### Front end
From within the root directory:

```sh
npm install -g webpack
npm run react-prod
```

### Back end
#### Import schema
From root directory
```sh
mysql -u root -p < schema.sql
```

#### Seed database
From root directory
```sh
npm run seed
```

### Running the app
From root directory
```sh
npm start
```

