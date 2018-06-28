# Week 4: Session 1

_**Libraries, Classes and Objects**_

#### Activity 1: Review Week 3

Input/Output

File I/O

JSON

Internet API's

#### Activity 2: Demostrate where Objects and Libraries are used in the Game

#### Activity 3: Libraries

#### Activity 4: Intro to Classes and Objects

**Objects** are nouns and can be described by their parts, or characteristics \(adjectives\) and what they can do \(verbs\)

**Classes** allow us to define code in the way we would define an object in real life.

The class code is a template for the object, and when we want to use the object we get an **instance** of a specific object.

**Exercise**:

Let's define a car class

characteristics \(nouns and adjectives\): make, model, color, year, max speed

what they can doe \(verbs\): start, stop, brake, move forward, move in reverse, park

#### Activity 5: Code a car class

Code a car object using Python language elements shown below

> **class**     This defines the name of the object template
>
> **self**        This is the variable that the object uses to refer to itself in code
>
> **def**        This is how you define a data or method
>
> **\_\_init\_\_**  This is code that runs when we want to create a new instance of the class which is an object
>
> **return**    Some methods can return data as we learned with functions

**Exercise**:

Get the car object code running and add a function to increase speed. Use the code below to start.

```
class Car:
    def __init__(self, year, make, model, color, max_speed):
        self.__year = year
        self.__make = make
        self.__model = year
        self.__color = year
        self.__max_speed = max_speed
        self.__current_speed = 0
        start, stop, move forward, move in reverse, park

    def start(self):
        console.log("Car starting")

    def stop(self):
        console.log("Car stopping")

    def move_forward(self):
        console.log("Moving forward")

    def move_reverse(self):
        console.log("Moving in reverse")
    
    def set_speed(self, speed):
        self.__current_speed = speed;
        console.log("Moving at this speed now:",self.current_speed)
    
    def brake(self):
        if self.__current_speed > 0:
          self.__current_speed = self.current_speed - 1;

    def park(self):
        console.log("Parking")

    def get_speed(self):
        return self.__speed
```

#### Activity 6: Code for instantiating an Object from a Class

Code a main function that gets an instance of the car class



