# Edit_Recipes
```
POST /recipes/{id}

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
    "id": "int",
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
400 - Bad Request - Invalid or missing fields
404 - Not Found
500 - Internal Server Error
```
