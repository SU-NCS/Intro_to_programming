# Week 3: Session 2

_**Internet API Read**_

The data format most used on the internet is called JSON \(pronounced JASON\).  It's an acronym for JavaScript Object Notation.  JSON looks kind of like a dictionary structure.  It is more strict and requires all strings use double quotes.

An API is an "Application Programming Interface".  It looks like a website and sometimes it can be pasted in the browser to pull back data like a web page.  We'll be working with the Numbers API.

Excecise

Copy and Paste this URL into a browser and see what you get back: [http://numbersapi.com/19](http://numbersapi.com/19)

Try changing the number from 19 to some other number.  What does this API do?

Copy and Paste this URL into a browser and see what you get back: [http://numbersapi.com/19?json](http://numbersapi.com/19?json)

We added "?json" and what changed?  We'll add the ?json when we make a request to numbers api from python code.

#### Activity 1: Demostrate where JSON is used in the Game.

#### Activity 2: Transform a Dictionary into a valid JSON string using _**dumps**_

Is there a difference between the Dictionary and the JSON?

```
import json
print(json.dumps({'name': 'Maria', 'age': 20, 'occupation': 'programmer'}))
```

What happens if you try to use dumps with invalid JSON

In Python **None **means nothing but it is not recognized by the Python dumps command. In JSON, the concept is nothing is specified by **null**.  What does the following code do?

```
import json
print(json.dumps({'name': 'Maria', 'age': 20, 'occupation': None}))
```

#### Activity 3: Transform a String into JSON using _**load as we read in a file**_

What do you see when you run this?  What happens if you change "programmer" to **null**?

```
import json
str = '{"name": "Maria", "age": 20, "occupation": "programmer"}'
j = json.loads(str)
print (j)
```

#### Activity 4: Write JSON to a local File

```
import json
myfile = open("local.json","w")
myfile.write(json.dumps({'name': 'Maria', 'age': 20, 'occupation': 'programmer'}))
myfile.close()
print (myfile.name, "is open?", myfile.closed)
```

#### Activity 5: Read JSON from a local File

#### 

#### Activity 6: Read JSON from the Internet

#### 



