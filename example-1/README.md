# Example 1

Very basic nodejs example covering installed dependancies and running a hello world application

To Run:

```bash
docker exec --rm -it -v `pwd`:/src -w /src node:latest npm install
```

```bash
docker exec --rm -it -v `pwd`:/src -w /src -p 9000:80  node:latest npm start
```
