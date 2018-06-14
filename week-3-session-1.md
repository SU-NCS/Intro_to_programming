# Week 3: Session 1

_**File I/O**_

#### **Activity 1: What is I/O?  Input/Output**

Review Console I/O

```
str = input("Input your favorite color? ")
print ("Outputting your favorite color: ",str)
```

First, Create a file by Writing to It

What does "\#write" mean?

```
#write
myfile = open("myfile","w")
myfile.write("hello")
myfile.close()
print (myfile.name, "is open?", myfile.closed)
```

Next, Read the file and write its contents to the console

```
#read
myfile = open("myfile","r")
str = myfile.read()
print ("contents of ",myfile.name,": ",str)
myfile.close()
```

Renaming a file

What is the import command doing?  What is "os"?

```
import os
os.rename( "myfile.txt", "becky.txt" )
```



