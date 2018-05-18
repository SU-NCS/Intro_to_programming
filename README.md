---
description: A Python Course Developed and Maintained by SU-NCS
---

# Introduction to Programming

## To build and publish ##

### To create content ###
You can download a gitbook editor and publish to the master branch. See this: [Gitbook Legacy Editor](https://github.com/GitbookIO/editor-legacy)

If you're using Visual Studio Code to edit, you can preview using CMD-SHIFT-V.  

### To run a script that automatically published to gh-pages using a yarn driven gulp script install the following: ###

Install node from  
[nodejs.org](https://nodejs.org/en/download/)  

Install gitbook-cli globally  
`npm install -g gitbook-cli` 

Install yarn globally (this is used instead of npm install)    
`npm install -g yarn`

Install gulp globally  
`npm install -g gulp`  

Install local dependicies from package.json     
`npm install` 

Call the publish command (calls publish task in gulpfile.js)   
`gulp publish`  



Build the book (render html from markdown)  

`gitbook serve` or `gitbook build`  



(https://gldraphael.com/blog/publishing-gitbook-to-github-pages/)[Article for reference]


