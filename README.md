# UI-tool-set
## Grid system
UI-tool-set's grid system allows up to 12 columns across the page

UI-tool-set grid system has 4 types of column classes:
* s-col-* - for mobile phones (wide screen less than 480px)
* m-col-* - for tablets (wide screen from 480px to 768px)
* l-col-* - for notebooks (wide screen from 768 to 960px)
* xl-col-* - for desktops (wide screen greater than 960px)
* *is the value that determines the width of column, for example:
```
<div class="m-col-4"></div>
```
creates a column, that has a width of 4/12 of parent container and is displayed on tablets. 

You can choose between 2 types of wrappers:
* .wrapper - (has a max-width = 1200px)
* .wrapper-static (has a fixed width that depends on screen resolution (maximum - 950px))

You can also place your columns into row container (class="row") 

#### Basic Structure of a UI-tool-set Grid
```
<div class="wrapper">
  <div class="row">
    <div class="s-col-12 m-col-6 l-col-6 xl-col-4"></div>
    <div class="s-col-12 m-col-12 l-col-4 xl-col-4"></div>
  </div>
</div>
```
## Moving elements
You can offset your block elements using .*-offset-** classes, where:
* *is the type of class, which depends of screen resolution
* **is the value that determines the width of offset 

Example:
```
    <div class="m-offset-6 m-col-6"></div>  
```
As a result of this solution the element has a width of 6 column and margin-left equal to 6 column width.

## Typography
Ui-tool-set default font size is 16px (1em).

#### Line-height
Line-height depends on the type of device you are using:
| Desktops | Notebooks | Tablets | Phones |
| -------- | --------- | ------- | ------ |
| 1.375em  | 1.375em   | 1.25em  | 1.25em |


