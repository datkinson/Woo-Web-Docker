# Example 3

Basic nodejs example but using it completely inside of the container rather than mounting the host filesystem

To Run:

```bash
docker build -t node-example .
```

```bash
docker run -p 9000:80 node-example
```
