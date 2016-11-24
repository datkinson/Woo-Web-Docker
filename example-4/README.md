# Example 4

Linking 2 containers together:

- redis
- nodejs

To Build:

```bash
docker build -t example4 .
```

To Run:

```bash
docker run -d --name redis redis
docker run -p 3000:80 --link redis:redis example4
```
