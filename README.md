This is source for Refine, a Figma plugin for Karat design team to quickly set up Figma files.

* [Loom with plugin overview](https://www.loom.com/share/fb1b04cd19a84b799a2120c4e7420ca5)
* [Link to plugin itself](https://www.figma.com/community/plugin/1109189187994466813/Refine)

The plugin consists of two parts:
1. Creating and naming pages
2. Pulling in a notepad + instructions component to Getting Started page

You can use this code to create your own plugin. 

Keep in mind that you'd need to have your own instructions component and add its key* to the code. In order for the plugin to work, the instructions component should live in your team's shared library.

#

*To find your component's key, open Figma desktop app, select component, and run this in console: <code>figma.currentPage.selection[0].key</code>

<img width="1145" alt="Screen Shot 2022-06-09 at 2 55 42 PM" src="https://user-images.githubusercontent.com/30293108/172923582-d5d54bc1-d1fb-437c-8ffb-a39d7b3e26ab.png">
