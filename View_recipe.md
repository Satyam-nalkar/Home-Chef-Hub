# View_Recipe
```
GET /recipes/{id}

```

##  Request Headers
```
Content-Type : Application/Json

```
## Request Boby
```
```{
  "id": "string",
  "Image": "string",
  "RecipeName": "string",
  "Time": "string",
  "Type": "string",
  "Rating": "number",
  "Ingredients": "string",
  "Discription": "string",
  "Url": "string"
}

## Response
```
200 - Success
Boby
{
"Id" : "String"
}

```
## Error Response
```
400 - Bad Request - Incorrect/User/Password
404 - Not Found
500 - Internal Server Error
```
