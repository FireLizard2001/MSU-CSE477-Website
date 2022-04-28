# Rubric 

This assignment is graded on a 100 point scale. The following guide will be used when grading your submission: 



**Specific Requirements:**

* <u> xx/45 points:</u>  Authentication System Requirements 

  * In the database utility
    * <u>xx/5 points</u>:  `createUser()` method met all requirements.
    * <u>xx/5 points:</u>   `authenticate()` method met all requirements.
  * In routes.py:
    * <u>xx/15 points:</u> `/login` route met all requirements. 
    * <u>xx/20 points:</u>  `/processlogin` route met all requirements. 

* <u>xx /45 points:</u>  Chat System Requirements

  * <u>xx/5:</u> Room entry requirement met
  * <u>xx/15:</u> message entry requirement met
  * <u>xx/10:</u> room departure requirement met
  * <u>xx/15:</u> Message styling requri

  

**General Requirements:**

* <u>xx/2.5 points:</u> Does the code adhere to <u>HTML best practices</u> including:

  * Separates Javascript/CSS code from HTML (no inline styling)

  * `<script>` tags always occur at the bottom of the document

  * `<img>` tags always include `alt` attribute and `loading="lazy"` attribute

  * Includes a `<title>` 

  * `<input>` tags always contain a `title` attribute that describe the input pattern required.

  * Hierarchy is implied using appropriate tags: `<h1>,<h2>,<h3>` etc.

  * `<meta>` tag is used for responsive rendering.

  * Document type (i.e. `<!DOCTYPE html>` ) and language (.e.g `<html lang="en">` ) are both specified 

  * Avoids style tags, such as `<i>` and `<b>`

  * Code is commented and properly formatted for readability

    

* <u>xx/5 points:</u> Does the code adhere to <u>CSS best practices</u> including:

  * Style is never defined inline; style sheets are contained in separate `.css` documents.

  * All text formatting is handled with CSS

  * Use of color codes in HEX, instead of color names (e.g. `red`,`blue`, etc.)

  * Use of relative units (`%`) instead of absolute (`px`) for sizing.

  * Style definitions are associated with classes or ids, not tags (e.g. `<div>`, `<p>` ,`<a>`)

  * Files names reflect their purpose (e.g. `navigation-style.css`, not `style.css`)

  * CSS is commented, and properly formatted for readability

  * Variables are used, when appropriate.

  * Style accommodates viewing content on multiple devices (e.g. both phones and desktops)

  * Follows a CSS methodology: BEM, ITCSS, or OOCSS

    

* <u>xx/2.5 points:</u> Does the code adhere to <u>Javascript best practices</u> including: 

  * Uses Function expressions and Function Declarations appropriately; unless the javascript function need to be [hoisted](https://developer.mozilla.org/en-US/docs/Glossary/Hoisting), it should be an expression, not a function.
  * Code is well commented, structured, and easy to follow
  * Functions and variables are named to reflect what they do or contain (i.e. not `func_1()`)
  * Appropriate us of constants (i.e. `const`) 
  * Use `===` operator for logical comparisons; this checks for both value and type.
  * Variable declarations should always be initialized, not undefined
  * Understand the difference between when to use `for…in` and `for…of`
  * Always add semicolons. to indicate line termination
  * Use regex when manipulating strings



<hr>
**Please note that you will receive a 0 on the assignment if any of the following conditions are met:**



* The assignment requirements were not met
* Your containerized application does not compile
* Your application is non-functional
* Your submission was late
* Your work was plagiarized, borrowed, or copied
  * If this condition is met, you will also fail the course.
