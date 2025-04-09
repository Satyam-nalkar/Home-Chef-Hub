# Add_Recipe
```
POST /user/recipe

```

##  Request Headers
```
Content-Type : Application/Json

```
## Request Boby
```

  "Id": "int",
  "RecipeName": "string",
  "Time": "string",
  "Type": "string",
  "Ingredient": "string",
  "Image": "string",
  "Url": "string",
  "Discription": "string"

```
## Response
```
200 - Success
Boby
{
"message" : "Recipe added successfully!"
}
```
## Error Response
```
400 - Bad Request - Incorrect/User/Password
404 - Not Found
500 - Internal Server Error
```
