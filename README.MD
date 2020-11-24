#SERVER POC

RUN project

```
./node_modules/.bin/ts-node -P ./server.tsconfig.json ./server.ts
```



### findAllItems

GET -http://localhost:9000/api/items

Response

```
{
    "payload": [
            {
                "id": 1,
                "ean": 3456297385905,
                "name": "Sasha",
                "images": [
                    "https://cdn1.staticpanvel.com.br/produtos/15/706040-15.jpg?ims=480x"
                ],
                "price": {
                    "originalPrice": 100
                }
            },
            {
                "id": 2,
                "ean": 618852056711,
                "name": "Valdez",
                "images": [
                    "https://cdn1.staticpanvel.com.br/produtos/15/706040-15.jpg?ims=480x"
                ],
                "price": {
                    "originalPrice": 100,
                    "dealPrice": 50,
                    "percentage": 50
                }
            },
        ....
    ]
}

```

### findItemById

GET - http://localhost:9000/api/items/33

Response

```
{
    "id": 33,
    "ean": 2610645676597,
    "name": "Velma",
    "ratingScore": 3.22,
    "description": "Qui nostrud non dolor non velit culpa fugiat deserunt ipsum ex deserunt. Sint ad non occaecat sunt consectetur cillum laborum mollit aliqua. Amet labore irure deserunt et aliquip esse minim Lorem amet anim ex eiusmod. Laborum magna laboris dolor laborum dolore esse. Dolor eu ut irure reprehenderit nostrud tempor veniam ea Lorem minim id deserunt deserunt do. Irure ad id enim excepteur cillum sit elit consequat duis consequat incididunt anim Lorem.",
    "images": [
        "https://cdn1.staticpanvel.com.br/produtos/15/119602-15.jpg?ims=480x"
    ],
    "price": {
        "originalPrice": 100,
        "dealPrice": 95,
        "percentage": 5
    }
}

```

GET - http://localhost:9000/api/items/30

Response

```
{
    "id": 30,
    "ean": 7034285075764,
    "name": "Jeanie",
    "ratingScore": 5,
    "description": "Tempor aliqua ipsum in do voluptate amet ut ut nostrud Lorem enim aute pariatur. Aliquip occaecat incididunt Lorem nostrud nostrud laborum ea. Incididunt dolor nisi commodo nisi in esse fugiat exercitation eiusmod et do ut Lorem.",
    "images": [
        "https://cdn1.staticpanvel.com.br/produtos/15/816370-15.jpg?ims=480x"
    ],
    "price": {
        "originalPrice": 100,
        "dealPrice": 95,
        "percentage": 5
    }
}

```

