# Week 3: Session 1

_**File I/O and the Operating System**_

#### Activity 1: Demostrate where file I/O is used in the Game.

#### **Activity 2: What is I/O?  Input/Output**

Review Console I/O

```
str = input("Input your favorite color? ")
print ("Outputting your favorite color: ",str)
```

**First, Create a file by Writing to It**

What does "\#write" mean?

```
#write
myfile = open("myfile","w")
myfile.write("hello")
myfile.close()
print (myfile.name, "is open?", myfile.closed)
```

**Next, Read the file and write its contents to the console**

```
#read
myfile = open("myfile","r")
str = myfile.read()
print ("contents of ",myfile.name,": ",str)
myfile.close()
```

##### Exercise

Create a text file in the IDE \(manually without code\).

Write a program that read the data from the file and writes the output to the console.

Write a program that asks the user a question and then writes the answer to a file.

Write a program that reads the file and prints the output to the console.

What happens if you run the read file program before the write  file program?

#### Activity 3: What is "os"? Operating System

Test that a file exists

```
import os
print("this file exists?",os.path.isfile("file-exists.py") )
```

**Renaming a file**

**What is the import command doing?  What is "os"?**

```
import os
os.rename( "myfile.txt", "test.txt" )
```

**Removing a file**

```
import os
os.remove("test.txt")
```



