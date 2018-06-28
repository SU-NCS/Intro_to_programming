# Week 4: Session 2

_**Modules and Design and Implement a Complex Challenge**_

#### Activity 1: Review Week 4 Session 1

* Classes
* Objects
* Instantiate an object

#### Activity 1: Modules

Modules help us to organize code into a separate files. Using the import command we can access module code from another file.

The import command names the file \(without the .py extension\) that contains the code you want to import.  You can reference functions in that file by using the dot\(.\).

**Exercise**

Create a file \(name\_prompt.py\) that contains a function that asks you your name.

Create a file \(use\_name\_prompt.py\) that import the first file and executes the function in it.

Here's an example of two files \(name\__prompt.py and use\_name\_prompt.py\) that are working together using the import command._

```
# age_prompt.py
def ask_age():
  age = input("Enter your age:")
  return age
```

```
# use_age_prompt.py
import age_prompt

age = age_prompt.ask_age()
print("Hello ",age," year old!")
```

#### Activity 3: Work on a challenge that incorporates all of the following

* Flow chart
* Decision making: variables, logic, looping
* Input/Output: Console, File, Internet
* Libraries
* Objects



