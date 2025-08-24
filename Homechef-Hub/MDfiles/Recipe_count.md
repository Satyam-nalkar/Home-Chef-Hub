# Recipe_count
```
GET /recipes/count/{id}

```

##  Request Headers
```
Content-Type : Application/Json

```
## Request Boby
```
  "id": "int",
  "recipecount": number

```
## Response
```
200 - Success
Boby
{
"recipeCont" : "Id"
}
400 - Bad Request -  Invalid ID format
404 - Not Found
500 - Internal Server Error
```
