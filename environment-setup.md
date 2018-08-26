# Environment Setup

We'll use these tools in setting up the development environment.   The tools include:

**Python 3**: A interpreter for Python 3 code

**Git**: A file versioning program that provides a bash command line interface when working on Windows

**Visual Studio Code**: An interactive development environment

## Python 3

For Python 3 on Windows 7 install use this link to walk you through the install: [https://docs.python-guide.org/starting/install3/win/](https://docs.python-guide.org/starting/install3/win/).  The link describes how you will install  first install Chocolatey which is a Windows 7 package manager and then use it to install Python3 and will make it possible for your to install Python. Follow the Chocolatey instuctions here:  [https://docs.python-guide.org/starting/install3/win](https://docs.python-guide.org/starting/install3/win/).  Once Python is installed, you'll install **pip**, which is the Python package manager.

## Download and Install Git

[https://git-scm.com/downloads](https://git-scm.com/downloads)

This will install a Folder with a number of file and programs.

Open a bash window \( '`git bash`' on Windows\) and type in

`git --version`

This should return a confirmation that git is installed with a version number.

## Visual Studio Code

Download and install VS Code using the link below.

[https://code.visualstudio.com/](https://code.visualstudio.com/)

#### User Settings

VS Code allows you to customize settings for all projects \(User Settings\) or for a single project \(Workspace settings\).  To modify default settings select **Code** \| **Preferences** for the Mac or **File** \| **Preferences** for Windows and then **Settings**.  You will see 2 files side by side.  On the left are the default settings and on the right are the User setting overrides.

To change a default setting find the setting on the left and then copy it to the right with your desired setting.  For example, if you don't want to see the minimap on the right hand side of the application, you can make the following entry in the file on the right. Notice that options are key : value pairs and that they are commas separated.

`{`

`"editor.minimap.enabled":false`

`}`

Make "Git Bash" the default command line in VS Code terminal by adding the following to your User Settings:

`"terminal.integrated.shell.windows": "C:\\Program Files\\Git\\bin\\bash.exe"`

#### Add a Python Plugin

You can add a plugin by clicking on the lowest left icon and then search for and installing a plugin.  Install the "Python" extension by search for "Python" and then selecting and installing.  This plug helps with code formatting.

![](/assets/python-plugin.png)

## 



