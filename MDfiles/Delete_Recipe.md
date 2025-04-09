# Delete_Recipes
```
DELETE /recipe/delete/{id}

```

##  Request Headers
```
Content-Type : Application/Json

```
## Request Boby
```
{
  "message": "Recipe updated successfully",
  "updatedRecipe": {
    "id": "string",
    "Image": "string",
    "Time": "string",
    "Type": "string",
    "Ingredients": "string",
    "Rating": number,
    "Url": "string",
    "Discription": "string"
  }
}
```
## Response
```
200 - Success
Boby
{
"Id" : "int"
}

```
## Error Response
```
400 - Bad Request - Invalid recipe format
404 - Not Found
500 - Internal Server Error
```
