# Ad_view
```
GET /ad/{id}

```

##  Request Headers
```
Content-Type : Application/Json

```
## Request Boby
```
```{
  "Id":"int",
  "Image": "string",
  "Name": "string",
  "Discription": "string",
  "Url": "string"
}

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
400 - Bad Request -  Invalid ID format
404 - Not Found
500 - Internal Server Error
```
