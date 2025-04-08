# Login
```
GET /recipes/search?recope.Id={id}

```

##  Request Headers
```
Content-Type : Application/Json

```
## Request Boby
```
 "id": "string"
 "Ingredient": "string"
```
## Response
```
200 - Success
Boby
{
"Ingredients" : "String"
}

```
## Error Response
```
400 - Bad Request - Incorrect/User/Password
404 - Not Found
500 - Internal Server Error
```
