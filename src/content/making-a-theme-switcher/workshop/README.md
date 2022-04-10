## How to program

When we write websites, we are practicing a different "style" of programming called event-driven programming. This is a little bit different from usual practice problems you might work on in AP Comp Sci for example. How? Imaging an APCS problem like: "Print all the even numbers from 1-100"

In this case, you're writing a program that you run once, does its job, and then quits. The code is pretty basic:

```python Python
for i in range(1, 101):
    if i % 2 == 0:
        print(i)
```

```java Java
for(int i = 0; i <= 100; i++){
    if(i % 2 == 0){
        System.out.println(i);
    }
}
```
