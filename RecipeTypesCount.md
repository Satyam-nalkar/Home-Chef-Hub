# Recipe_count
```
GET /recipes/Type/count/{id}

```

##  Request Headers
```
Content-Type : Application/Json

```
## Request Boby
```
  "id": "string",
  "Type": "string",
  "recipecount": number

```
## Response
```
200 - Success
Boby
{
"recipeTypeCount" : "Id"
}
```
## Error Response
```
400 - Bad Request -  Invalid ID format
404 - Not Found
500 - Internal Server Error
```
