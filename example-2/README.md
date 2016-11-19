# Example 2

Simple example of using Docker to compile and run C#

To Run:

```bash
docker run --rm -it -v `pwd`:/src -w /src mono mcs Hello.cs
```

```bash
docker run --rm -it -v `pwd`:/src -w /src mono mono Hello.exe
```
