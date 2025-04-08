# Admin Login
```
POST /Admin/login

```

##  Request Headers
```
Content-Type : Application/Json

```
## Request Boby
```
"username" : "String"
"password" : "String"

```
## Response
```
200 - Success
Boby
{
"Username" : "String"
}
400 - Bad Request - Incorrect/User/Password
404 - Not Found
500 - Internal Server Error
```
