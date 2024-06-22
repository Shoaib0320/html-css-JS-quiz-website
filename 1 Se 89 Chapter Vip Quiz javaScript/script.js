const questions = {
    html: [
        {
            "question": "What does HTML stand for?",
            "options": ["Hyper Text Markup Language", "High Text Markup Language", "Hyperlinks and Text Markup Language", "Home Tool Markup Language"],
            "answer": "Hyper Text Markup Language"
          },
          {
            "question": "Who is making the Web standards?",
            "options": ["Mozilla", "Microsoft", "The World Wide Web Consortium", "Google"],
            "answer": "The World Wide Web Consortium"
          },
          {
            "question": "Choose the correct HTML element for the largest heading:",
            "options": ["<heading>", "<h6>", "<head>", "<h1>"],
            "answer": "<h1>"
          },
          {
            "question": "What is the correct HTML element for inserting a line break?",
            "options": ["<br>", "<lb>", "<break>", "<line>"],
            "answer": "<br>"
          },
          {
            "question": "What is the correct HTML for adding a background color?",
            "options": ["<body bg='yellow'>", "<body style='background-color:yellow;'>", "<background>yellow</background>", "<body color='yellow'>"],
            "answer": "<body style='background-color:yellow;'>"
          },
          {
            "question": "Choose the correct HTML element to define important text:",
            "options": ["<strong>", "<i>", "<b>", "<important>"],
            "answer": "<strong>"
          },
          {
            "question": "Choose the correct HTML element to define emphasized text:",
            "options": ["<em>", "<i>", "<italic>", "<strong>"],
            "answer": "<em>"
          },
          {
            "question": "Which character is used to indicate an end tag?",
            "options": ["^", "<", "*", "/"],
            "answer": "/"
          },
          {
            "question": "How can you make a numbered list?",
            "options": ["<ol>", "<ul>", "<dl>", "<list>"],
            "answer": "<ol>"
          },
          {
            "question": "How can you make a bulleted list?",
            "options": ["<ul>", "<ol>", "<dl>", "<list>"],
            "answer": "<ul>"
          },
          {
            "question": "What is the correct HTML for making a checkbox?",
            "options": ["<input type='checkbox'>", "<input type='check'>", "<check>", "<checkbox>"],
            "answer": "<input type='checkbox'>"
          },
          {
            "question": "What is the correct HTML for making a text input field?",
            "options": ["<input type='textfield'>", "<input type='text'>", "<textinput>", "<textfield>"],
            "answer": "<input type='text'>"
          },
          {
            "question": "What is the correct HTML for making a drop-down list?",
            "options": ["<input type='dropdown'>", "<input type='list'>", "<select>", "<list>"],
            "answer": "<select>"
          },
          {
            "question": "What is the correct HTML for making a text area?",
            "options": ["<textarea>", "<input type='textarea'>", "<input type='text'>", "<text>"],
            "answer": "<textarea>"
          },
          {
            "question": "What is the correct HTML for inserting an image?",
            "options": ["<img src='image.gif' alt='MyImage'>", "<image src='image.gif' alt='MyImage'>", "<img alt='MyImage'>image.gif</img>", "<img href='image.gif' alt='MyImage'>"],
            "answer": "<img src='image.gif' alt='MyImage'>"
          },
          {
            "question": "What is the correct HTML for creating a hyperlink?",
            "options": ["<a href='http://www.example.com'>Example</a>", "<a>http://www.example.com</a>", "<a url='http://www.example.com'>Example</a>", "<link href='http://www.example.com'>Example</link>"],
            "answer": "<a href='http://www.example.com'>Example</a>"
          },
          {
            "question": "Which HTML element defines the title of a document?",
            "options": ["<title>", "<head>", "<meta>", "<document>"],
            "answer": "<title>"
          },
          {
            "question": "Which HTML element contains the metadata for a document?",
            "options": ["<meta>", "<head>", "<link>", "<title>"],
            "answer": "<head>"
          },
          {
            "question": "Which HTML element defines navigation links?",
            "options": ["<navigation>", "<nav>", "<navigate>", "<links>"],
            "answer": "<nav>"
          },
          {
            "question": "Which HTML element defines a section in a document?",
            "options": ["<section>", "<div>", "<article>", "<header>"],
            "answer": "<section>"
          },
          {
            "question": "Which HTML element defines an article?",
            "options": ["<article>", "<section>", "<div>", "<paragraph>"],
            "answer": "<article>"
          },
          {
            "question": "Which HTML element is used to specify a footer for a document or section?",
            "options": ["<bottom>", "<footer>", "<foot>", "<section>"],
            "answer": "<footer>"
          },
          {
            "question": "Which HTML element is used to specify a header for a document or section?",
            "options": ["<top>", "<header>", "<head>", "<section>"],
            "answer": "<header>"
          },
          {
            "question": "Which HTML element is used to specify a container for content?",
            "options": ["<container>", "<div>", "<section>", "<span>"],
            "answer": "<div>"
          },
          {
            "question": "Which HTML element is used to embed a video?",
            "options": ["<video>", "<media>", "<embed>", "<movie>"],
            "answer": "<video>"
          },
          {
            "question": "Which HTML element is used to embed an audio file?",
            "options": ["<sound>", "<audio>", "<music>", "<media>"],
            "answer": "<audio>"
          },
          {
            "question": "How do you define an internal style sheet?",
            "options": ["<style>", "<css>", "<script>", "<styles>"],
            "answer": "<style>"
          },
          {
            "question": "How do you define an external style sheet?",
            "options": ["<link rel='stylesheet' type='text/css' href='style.css'>", "<style src='style.css'>", "<stylesheet>style.css</stylesheet>", "<css>style.css</css>"],
            "answer": "<link rel='stylesheet' type='text/css' href='style.css'>"
          },
          {
            "question": "How do you add a comment in HTML?",
            "options": ["<!-- This is a comment -->", "// This is a comment", "/* This is a comment */", "' This is a comment"],
            "answer": "<!-- This is a comment -->"
          },
          {
            "question": "What is the correct HTML for creating a table?",
            "options": ["<table><tr><td></td></tr></table>", "<table><tr><th></th></tr></table>", "<table><row><column></column></row></table>", "<table><tr><td></td><td></td></tr></table>"],
            "answer": "<table><tr><td></td></tr></table>"
          }
          
        /* HTML quiz questions */
    ],
    css: [
        {
            "question": "Which property is used to change the background color of an element?",
            "options": ["background-color", "bg-color", "color-background", "bgcolor"],
            "answer": "background-color"
          },
          {
            "question": "How do you make text bold in CSS?",
            "options": ["font-weight: bold;", "text-weight: bold;", "font-bold: true;", "text-bold: true;"],
            "answer": "font-weight: bold;"
          },
          {
            "question": "Which property is used to change the text color of an element?",
            "options": ["color", "text-color", "font-color", "textstyle-color"],
            "answer": "color"
          },
          {
            "question": "How do you add a shadow to text?",
            "options": ["text-shadow", "text-glow", "font-shadow", "text-outline"],
            "answer": "text-shadow"
          },
          {
            "question": "Which property controls the spacing between lines of text?",
            "options": ["line-height", "text-spacing", "spacing", "line-spacing"],
            "answer": "line-height"
          },
          {
            "question": "How do you center an element horizontally?",
            "options": ["margin: auto;", "text-align: center;", "align: center;", "center-align: auto;"],
            "answer": "margin: auto;"
          },
          {
            "question": "What property is used to change the font of an element?",
            "options": ["font-family", "font-style", "font-weight", "font-type"],
            "answer": "font-family"
          },
          {
            "question": "How do you make a list not display bullet points?",
            "options": ["list-style-type: none;", "list-type: none;", "list-style: no-bullets;", "list-display: none;"],
            "answer": "list-style-type: none;"
          },
          {
            "question": "Which property is used to change the left margin of an element?",
            "options": ["margin-left", "left-margin", "padding-left", "left-padding"],
            "answer": "margin-left"
          },
          {
            "question": "How do you set the height of an element?",
            "options": ["height", "element-height", "top", "size-height"],
            "answer": "height"
          },
          {
            "question": "Which property is used to change the size of the text?",
            "options": ["font-size", "text-size", "font-height", "text-height"],
            "answer": "font-size"
          },
          {
            "question": "How do you change the cursor into a hand when hovering over a button?",
            "options": ["cursor: pointer;", "pointer-cursor: hand;", "hover: hand;", "cursor-hand: pointer;"],
            "answer": "cursor: pointer;"
          },
          {
            "question": "Which CSS property is used to control the space between the element's border and content?",
            "options": ["padding", "margin", "border-spacing", "content-spacing"],
            "answer": "padding"
          },
          {
            "question": "How do you make an element's text italic?",
            "options": ["font-style: italic;", "text-style: italic;", "font-weight: italic;", "text-italic: true;"],
            "answer": "font-style: italic;"
          },
          {
            "question": "Which property is used to create space between the elements?",
            "options": ["margin", "padding", "border-spacing", "element-spacing"],
            "answer": "margin"
          },
          {
            "question": "What property is used to align text to the center?",
            "options": ["text-align: center;", "align: center;", "font-align: center;", "content-align: center;"],
            "answer": "text-align: center;"
          },
          {
            "question": "How do you make the first letter of each word in a text capitalized?",
            "options": ["text-transform: capitalize;", "font-transform: capitalize;", "text-style: capitalize;", "text-transform: uppercase;"],
            "answer": "text-transform: capitalize;"
          },
          {
            "question": "Which property is used to control the visibility of an element?",
            "options": ["visibility", "display", "opacity", "hidden"],
            "answer": "visibility"
          },
          {
            "question": "How do you create a border around an element?",
            "options": ["border", "outline", "frame", "border-style"],
            "answer": "border"
          },
          {
            "question": "Which property is used to add or remove decoration to text?",
            "options": ["text-decoration", "font-decoration", "text-style", "font-style"],
            "answer": "text-decoration"
          },
          {
            "question": "How do you make an element take up the full width of its container?",
            "options": ["width: 100%;", "display: block;", "width: auto;", "full-width: true;"],
            "answer": "width: 100%;"
          },
          {
            "question": "Which property is used to change the left padding of an element?",
            "options": ["padding-left", "left-padding", "margin-left", "left-margin"],
            "answer": "padding-left"
          },
          {
            "question": "How do you change the background image of an element?",
            "options": ["background-image", "bg-image", "image-background", "background-picture"],
            "answer": "background-image"
          },
          {
            "question": "What property is used to set the space between the lines of text?",
            "options": ["line-height", "line-spacing", "text-spacing", "spacing"],
            "answer": "line-height"
          },
          {
            "question": "Which property is used to control the order of flex items?",
            "options": ["order", "flex-order", "item-order", "order-flex"],
            "answer": "order"
          },
          {
            "question": "How do you make an element stick to the top of the viewport when scrolling?",
            "options": ["position: sticky;", "position: fixed;", "position: absolute;", "position: static;"],
            "answer": "position: sticky;"
          },
          {
            "question": "Which property is used to change the left margin of an element?",
            "options": ["margin-left", "padding-left", "left-margin", "left-padding"],
            "answer": "margin-left"
          },
          {
            "question": "How do you add space between the border and the content inside it?",
            "options": ["padding", "margin", "border-spacing", "content-spacing"],
            "answer": "padding"
          },
          {
            "question": "Which property is used to control the space between the element's border and content?",
            "options": ["padding", "margin", "border-spacing", "content-spacing"],
            "answer": "padding"
          },
          {
            "question": "How do you make a list display its items horizontally?",
            "options": ["display: inline;", "list-style: horizontal;", "display: inline-block;", "list-style: block;"],
            "answer": "display: inline;"
          }
          
        /* CSS quiz questions */
    ],
    jS_1: [
        // Chapter 1: Alerts
        {
            "question": "How do you show an alert box in JavaScript?",
            "options": ["alertBox('Hello')", "msg('Hello')", "alert('Hello')", "message('Hello')"],
            "answer": "alert('Hello')"
        },
        {
            "question": "Which function is used to display a message in a dialog box?",
            "options": ["dialog()", "alert()", "message()", "notify()"],
            "answer": "alert()"
        },
        // Chapter 2: Variables for Strings
        {
            "question": "How do you declare a variable in JavaScript?",
            "options": ["var myVar", "v myVar", "variable myVar", "declare myVar"],
            "answer": "var myVar"
        },
        {
            "question": "Which of the following is a valid variable name in JavaScript?",
            "options": ["2names", "_myVar", "my-var", "my var"],
            "answer": "_myVar"
        },
        // Chapter 3: Variables for Numbers
        {
            "question": "How do you declare a number variable in JavaScript?",
            "options": ["var num = '5'", "var num = 5", "number num = 5", "num = 5"],
            "answer": "var num = 5"
        },
        {
            "question": "Which of the following is the correct syntax for declaring a variable that holds a number?",
            "options": ["num = 5", "var num = 5", "int num = 5", "number num = 5"],
            "answer": "var num = 5"
        },
        // Chapter 4: Variable Names Legal and Illegal
        {
            "question": "Which variable name is not valid in JavaScript?",
            "options": ["myVar", "my_var", "my-var", "myVar2"],
            "answer": "my-var"
        },
        {
            "question": "Which of the following is an illegal variable name?",
            "options": ["_name", "2name", "name2", "name_"],
            "answer": "2name"
        },
        // Chapter 5: Math Expressions: Familiar Operators
        {
            "question": "What is the result of 3 + 2 * 4?",
            "options": ["20", "14", "11", "10"],
            "answer": "11"
        },
        {
            "question": "Which operator is used for multiplication in JavaScript?",
            "options": ["x", "*", "/", "X"],
            "answer": "*"
        },
        // Chapter 6: Math Expressions: Unfamiliar Operators
        {
            "question": "What is the modulus operator (%) used for?",
            "options": ["Multiplication", "Division", "Exponentiation", "Remainder"],
            "answer": "Remainder"
        },
        {
            "question": "What will be the output of 5 % 2?",
            "options": ["2", "1", "0", "5"],
            "answer": "1"
        },
        // Chapter 7: Math Expressions: Eliminating Ambiguity
        {
            "question": "Which operator is used to group expressions and control the order of operations?",
            "options": ["{}", "[]", "()", "<>"],
            "answer": "()"
        },
        {
            "question": "What is the result of (2 + 3) * 2?",
            "options": ["10", "8", "7", "5"],
            "answer": "10"
        },
        // Chapter 8: Concatenating Text Strings
        {
            "question": "Which symbol is used to concatenate strings in JavaScript?",
            "options": ["&", "+", "&&", "#"],
            "answer": "+"
        },
        {
            "question": "What is the result of 'Hello' + ' ' + 'World'?",
            "options": ["HelloWorld", "Hello World", "HelloWorld ", "Hello World "],
            "answer": "Hello World"
        },
        // Chapter 9: Prompts
        {
            "question": "How do you create a prompt box in JavaScript?",
            "options": ["prompt('Enter your name')", "alert('Enter your name')", "message('Enter your name')", "promptBox('Enter your name')"],
            "answer": "prompt('Enter your name')"
        },
        {
            "question": "Which function is used to take input from the user?",
            "options": ["alert()", "input()", "prompt()", "message()"],
            "answer": "prompt()"
        },
        // Chapter 10: If Statements
        {
            "question": "Which of the following is the correct syntax for an if statement?",
            "options": ["if i == 5", "if (i == 5)", "if i = 5", "if (i = 5)"],
            "answer": "if (i == 5)"
        },
        {
            "question": "What will the following code output if x is 5? if (x == 5) { console.log('Hello'); }",
            "options": ["World", "5", "Hello", "undefined"],
            "answer": "Hello"
        },
        // Chapter 11: Comparison Operators
        {
            "question": "Which of the following is a comparison operator?",
            "options": ["+", "&&", "=", "=="],
            "answer": "=="
        },
        {
            "question": "What does the === operator do?",
            "options": ["Assignment", "Strict equality", "Comparison", "Logical AND"],
            "answer": "Strict equality"
        },
        // Chapter 12: If...Else and Else If Statements
        {
            "question": "What is the correct syntax for an else if statement?",
            "options": ["else if (condition) {}", "elseif (condition) {}", "else (condition) {}", "if else (condition) {}"],
            "answer": "else if (condition) {}"
        },
        {
            "question": "What will the following code output if x is 10? if (x < 10) { console.log('Less'); } else { console.log('More or equal'); }",
            "options": ["Less", "More", "Equal", "More or equal"],
            "answer": "More or equal"
        },
        // Chapter 13: Testing Sets of Conditions
        {
            "question": "Which operator is used to test multiple conditions that must all be true?",
            "options": ["||", "&&", "==", "==="],
            "answer": "&&"
        },
        {
            "question": "Which of the following will return true if both a and b are true?",
            "options": ["a && b", "a || b", "a == b", "a & b"],
            "answer": "a && b"
        },
        // Chapter 14: If Statements Nested
        {
            "question": "What is the purpose of nesting if statements?",
            "options": ["To create loops", "To handle multiple conditions", "To break out of a loop", "To concatenate strings"],
            "answer": "To handle multiple conditions"
        },
        {
            "question": "Which of the following correctly nests if statements?",
            "options": ["if (a) { if (b) { } }", "if (a) { } if (b) { }", "if { (a) if { (b) } }", "if (a) if (b) { } { }"],
            "answer": "if (a) { if (b) { } }"
        },
        // Chapter 15: Arrays
        {
            "question": "How do you declare an array in JavaScript?",
            "options": ["array myArray", "var myArray = []", "arr myArray = ()", "myArray = array()"],
            "answer": "var myArray = []"
        },
        {
            "question": "How do you access the first element of an array named myArray?",
            "options": ["myArray[1]", "myArray.first()", "myArray[0]", "myArray[2]"],
            "answer": "myArray[0]"
        },
        // Chapter 16: Arrays: Adding and Removing Elements
        {
            "question": "Which method is used to add an element to the end of an array?",
            "options": ["add()", "push()", "insert()", "append()"],
            "answer": "push()"
        },
        {
            "question": "Which method removes the last element from an array?",
            "options": ["pop()", "remove()", "delete()", "shift()"],
            "answer": "pop()"
        },
        // Chapter 17: Arrays: Removing, Inserting, and Extracting Elements
        {
            "question": "Which method removes the first element from an array?",
            "options": ["unshift()", "shift()", "splice()", "slice()"],
            "answer": "shift()"
        },
        {
            "question": "How do you add an element to the beginning of an array?",
            "options": ["push()", "pop()", "shift()", "unshift()"],
            "answer": "unshift()"
        },
        // Chapter 18: Arrays: Splicing and Slicing
        {
            "question": "Which method is used to add or remove elements at a specific index in an array?",
            "options": ["slice()", "splice()", "split()", "join()"],
            "answer": "splice()"
        },
        {
            "question": "Which method returns a shallow copy of a portion of an array into a new array?",
            "options": ["splice()", "slice()", "split()", "copy()"],
            "answer": "slice()"
        },
        // Chapter 19: Arrays: Finding Elements
        {
            "question": "Which method returns the first index at which a given element can be found in an array?",
            "options": ["find()", "indexOf()", "search()", "locate()"],
            "answer": "indexOf()"
        },
        {
            "question": "Which method returns the first element that passes a test function?",
            "options": ["find()", "filter()", "indexOf()", "map()"],
            "answer": "find()"
        },
        // Chapter 20: Arrays: Looping through Elements
        {
            "question": "Which loop is commonly used to iterate over the elements of an array?",
            "options": ["while", "for", "do-while", "foreach"],
            "answer": "for"
        },
        {
            "question": "How do you iterate through all elements in an array named arr?",
            "options": ["for (let i = 0; i < arr.length; i++)", "for (i = 0; i <= arr.length; i++)", "while (i < arr.length)", "foreach (i in arr)"],
            "answer": "for (let i = 0; i < arr.length; i++)"
        },
    ],
    jS_2:[
           // Chapter 21: Changing Case
           {
            "question": "Which method is used to convert a string to uppercase?",
            "options": ["toUpper()", "toUpperCase()", "upperCase()", "convertUpper()"],
            "answer": "toUpperCase()"
        },
        {
            "question": "How do you convert a string to lowercase?",
            "options": ["toLower()", "toLowerCase()", "lowerCase()", "convertLower()"],
            "answer": "toLowerCase()"
        },
        // Chapter 22: Strings: Measuring Length and Extracting Parts
        {
            "question": "Which property returns the length of a string?",
            "options": ["length()", "size", "length", "getSize()"],
            "answer": "length"
        },
        {
            "question": "Which method extracts a part of a string and returns it as a new string?",
            "options": ["slice()", "splice()", "extract()", "split()"],
            "answer": "slice()"
        },
        // Chapter 23: Strings: Finding Segments
        {
            "question": "Which method returns the index of the first occurrence of a specified text in a string?",
            "options": ["find()", "indexOf()", "search()", "locate()"],
            "answer": "indexOf()"
        },
        {
            "question": "Which method performs a case-sensitive search to find a match between a regular expression and a string?",
            "options": ["search()", "find()", "indexOf()", "match()"],
            "answer": "search()"
        },
        // Chapter 24: Strings: Finding a Character at a Location
        {
            "question": "Which method returns the character at a specified index in a string?",
            "options": ["charAt()", "char()", "characterAt()", "getChar()"],
            "answer": "charAt()"
        },
        {
            "question": "How do you get the Unicode of the character at a specific index in a string?",
            "options": ["charCodeAt()", "unicodeAt()", "getUnicode()", "charAt()"],
            "answer": "charCodeAt()"
        },
        // Chapter 25: Strings: Replacing Characters
        {
            "question": "Which method replaces a specified value with another value in a string?",
            "options": ["replace()", "substitute()", "change()", "modify()"],
            "answer": "replace()"
        },
        {
            "question": "Which of the following will replace all occurrences of 'dog' with 'cat' in a string?",
            "options": ["string.replace('dog', 'cat')", "string.replace(/dog/g, 'cat')", "string.replaceAll('dog', 'cat')", "string.substitute('dog', 'cat')"],
            "answer": "string.replace(/dog/g, 'cat')"
        },
        // Chapter 26: Rounding Numbers
        {
            "question": "Which method rounds a number to the nearest integer?",
            "options": ["Math.ceil()", "Math.floor()", "Math.round()", "Math.truncate()"],
            "answer": "Math.round()"
        },
        {
            "question": "What is the result of Math.round(4.7)?",
            "options": ["4", "5", "4.5", "4.6"],
            "answer": "5"
        },
        // Chapter 27: Generating Random Numbers
        {
            "question": "Which method generates a random number between 0 (inclusive) and 1 (exclusive)?",
            "options": ["Math.random()", "Math.randomNumber()", "Math.rand()", "Math.randomize()"],
            "answer": "Math.random()"
        },
        { 
            "options": ["Math.random() * 10", "Math.floor(Math.random() * 11)", "Math.round(Math.random() * 10)", "Math.ceil(Math.random() * 10)"],
            "question": "How do you generate a random integer between 0 and 10 in JavaScript?",
            "answer": "Math.floor(Math.random() * 11)"
        },
        // Chapter 28: Converting Strings to Integers and Decimals
        {
            "question": "Which function converts a string to an integer?",
            "options": ["parseInt()", "parseInteger()", "toInt()", "convertInt()"],
            "answer": "parseInt()"
        },
        {
            "question": "How do you convert a string to a floating-point number?",
            "options": ["parseFloat()", "toFloat()", "parseDouble()", "convertFloat()"],
            "answer": "parseFloat()"
        },
        // Chapter 29: Converting Strings to Numbers, Numbers to Strings
        {
            "question": "How do you convert a number to a string in JavaScript?",
            "options": ["toString()", "convertToString()", "parseString()", "stringify()"],
            "answer": "toString()"
        },
        {
            "question": "Which method converts a string to a number?",
            "options": ["Number()", "parseNumber()", "toNumber()", "convertNumber()"],
            "answer": "Number()"
        },
        // Chapter 30: Controlling the Length of Decimals
        {
            "question": "Which method formats a number using fixed-point notation?",
            "options": ["toFixed()", "fixedPoint()", "setFixed()", "formatFixed()"],
            "answer": "toFixed()"
        },
        {
            "question": "What will be the result of (3.14159).toFixed(2)?",
            "options": ["3.14", "3.14159", "3.142", "3.15"],
            "answer": "3.14"
        },
        // Chapter 31: Getting the Current Date and Time
        {
            "question": "Which object is used to work with dates and times in JavaScript?",
            "options": ["Calendar", "Clock", "Date", "Time"],
            "answer": "Date"
        },
        {
            "question": "How do you create a new Date object in JavaScript?",
            "options": ["new Date()", "Date()", "createDate()", "getDate()"],
            "answer": "new Date()"
        },
        // Chapter 32: Extracting Parts of a Date and Time
        {
            "question": "Which method returns the year of a date object?",
            "options": ["getYear()", "getFullYear()", "year()", "fullYear()"],
            "answer": "getFullYear()"
        },
        {
            "question": "How do you get the month of a date object?",
            "options": ["getMonth()", "month()", "getMonths()", "monthIndex()"],
            "answer": "getMonth()"
        },
        // Chapter 33: Specifying a Date and Time
        {
            "question": "How do you set the full year of a date object?",
            "options": ["setYear()", "year()", "setFullYear()", "fullYear()"],
            "answer": "setFullYear()"
        },
        {
            "question": "Which method sets the month of a date object?",
            "options": ["setMonth()", "month()", "setMonths()", "monthIndex()"],
            "answer": "setMonth()"
        },
        // Chapter 34: Changing HTML on the Fly
        {
            "question": "Which method is used to change the content of an HTML element?",
            "options": ["changeContent()", "modifyHTML()", "innerHTML()", "setContent()"],
            "answer": "innerHTML()"
        },
        {
            "question": "What will document.getElementById('demo').innerHTML = 'Hello'; do?",
            "options": ["Change the HTML element with id 'demo' to 'Hello'", "Add 'Hello' to the HTML element with id 'demo'", "Replace the HTML element with id 'demo' with 'Hello'", "Nothing"],
            "answer": "Change the HTML element with id 'demo' to 'Hello'"
        },
        // Chapter 35: Adding HTML Elements
        {
            "question": "Which method is used to create a new HTML element?",
            "options": ["createElement()", "newElement()", "addElement()", "generateElement()"],
            "answer": "createElement()"
        },
        {
            "question": "How do you add a new element to the DOM?",
            "options": ["appendChild()", "addChild()", "insertChild()", "createChild()"],
            "answer": "appendChild()"
        },
        // Chapter 36: Removing HTML Elements
        {
            "question": "Which method is used to remove an HTML element from the DOM?",
            "options": ["remove()", "delete()", "removeChild()", "deleteChild()"],
            "answer": "removeChild()"
        },
        {
            "question": "What does parentNode.removeChild(childNode) do?",
            "options": ["Removes the parentNode", "Removes the childNode", "Adds a childNode", "Adds a parentNode"],
            "answer": "Removes the childNode"
        },
        // Chapter 37: Replacing HTML Elements
        {
            "question": "Which method replaces an HTML element with another element?",
            "options": ["replaceChild()", "changeChild()", "modifyChild()", "updateChild()"],
            "answer": "replaceChild()"
        },
        {
            "question": "What does parentNode.replaceChild(newChild, oldChild) do?",
            "options": ["Replaces parentNode with newChild", "Replaces oldChild with newChild", "Replaces newChild with oldChild", "Adds newChild to parentNode"],
            "answer": "Replaces oldChild with newChild"
        },
        // Chapter 38: Copying HTML Elements
        {
            "question": "Which method is used to clone an HTML element?",
            "options": ["cloneElement()", "copyElement()", "duplicateElement()", "cloneNode()"],
            "answer": "cloneNode()"
        },
        {
            "question": "What does element.cloneNode(true) do?",
            "options": ["Clones the element", "Clones the element and its descendants", "Copies the element", "Duplicates the element's content"],
            "answer": "Clones the element and its descendants"
        },
        // Chapter 39: Disabling and Enabling Elements
        {
            "question": "How do you disable an HTML element?",
            "options": ["element.disabled = true", "element.disable()", "element.setAttribute('disabled', 'true')", "element.enable(false)"],
            "answer": "element.disabled = true"
        },
        {
            "question": "What does element.disabled = false do?",
            "options": ["Enables the element", "Disables the element", "Removes the element", "Hides the element"],
            "answer": "Enables the element"
        },
        // Chapter 40: Setting and Reading Attributes
        {
            "question": "Which method sets the value of an attribute on an element?",
            "options": ["setAttribute()", "setAttr()", "setElement()", "setProp()"],
            "answer": "setAttribute()"
        },
        {
            "question": "How do you get the value of an attribute on an element?",
            "options": ["getAttribute()", "getAttr()", "getElement()", "getProp()"],
            "answer": "getAttribute()"
        },
    ],
    jS_3:[
         // Chapter 41: Counting Elements
         {
            "question": "Which property returns the number of child elements of an element?",
            "options": ["childCount", "children", "childElementCount", "childElements"],
            "answer": "childElementCount"
        },
        {
            "question": "How do you get the number of elements in an array?",
            "options": ["length", "size", "count", "total"],
            "answer": "length"
        },
        // Chapter 42: Marking Elements
        {
            "question": "How do you mark an element in the DOM?",
            "options": ["element.mark = true", "element.tag = 'marked'", "element.className = 'marked'", "element.setAttribute('marked', 'true')"],
            "answer": "element.className = 'marked'"
        },
        {
            "question": "Which attribute is commonly used to mark an element?",
            "options": ["id", "name", "class", "tag"],
            "answer": "class"
        },
        // Chapter 43: Targeting Elements
        {
            "question": "How do you target an HTML element with a specific id?",
            "options": ["document.getElementById('id')", "document.querySelector('.id')", "document.getElement('id')", "document.select('id')"],
            "answer": "document.getElementById('id')"
        },
        {
            "question": "Which method is used to select an element by its class?",
            "options": ["document.getElementsByClassName('class')", "document.querySelector('.class')", "document.getElementByClass('class')", "document.selectClass('class')"],
            "answer": "document.getElementsByClassName('class')"
        },
        // Chapter 44: JavaScript Date Objects
        {
            "question": "How do you get the current date in JavaScript?",
            "options": ["Date.now()", "new Date()", "getCurrentDate()", "getTodayDate()"],
            "answer": "new Date()"
        },
        {
            "question": "Which method is used to get the month from a Date object in JavaScript?",
            "options": ["date.getMonth()", "date.getMonth", "date.getMonth", "date.month()"],
            "answer": "date.getMonth()"
        },
        // Chapter 45: JavaScript Math Object
        {
            "question": "What is the correct way to round a number to the nearest integer in JavaScript?",
            "options": ["Math.round(number)", "Math.floor(number)", "Math.ceil(number)", "Math.random(number)"],
            "answer": "Math.round(number)"
        },
        {
            "question": "Which method returns the largest integer less than or equal to a given number in JavaScript?",
            "options": ["Math.max(number)", "Math.ceil(number)", "Math.floor(number)", "Math.abs(number)"],
            "answer": "Math.floor(number)"
        },
        // Chapter 46: JavaScript Random Numbers
        {
            "question": "How do you generate a random number between 0 (inclusive) and 1 (exclusive) in JavaScript?",
            "options": ["Math.random()", "random.number()", "Number.random()", "random()"],
            "answer": "Math.random()"
        },
        {
            "question": "Which method returns a random integer between two specified numbers in JavaScript?",
            "options": ["Math.randomInt(min, max)", "Math.randomBetween(min, max)", "Math.randomInteger(min, max)", "Math.floor(Math.random() * (max - min + 1)) + min"],
            "answer": "Math.floor(Math.random() * (max - min + 1)) + min"
        },
        // Chapter 47: JavaScript Conditional Statements
        {
            "question": "How do you write an if statement in JavaScript?",
            "options": ["if (condition) {}", "if condition {}", "if {condition} {}", "if (condition)"],
            "answer": "if (condition) {}"
        },
        {
            "question": "Which operator is used to compare equality in JavaScript?",
            "options": ["==", "===", "=", "!="],
            "answer": "==="
        },
        // Chapter 48: JavaScript Switch Statement
        {
            "question": "How do you use a switch statement in JavaScript?",
            "options": ["switch {case}", "switch (expression) {}", "switch case {}", "switch (expression) case {}"],
            "answer": "switch (expression) {}"
        },
        {
            "question": "Which keyword is used to exit a switch statement in JavaScript?",
            "options": ["end", "break", "exit", "continue"],
            "answer": "break"
        },
        // Chapter 49: JavaScript Loops
        {
            "question": "What is the correct way to write a for loop in JavaScript?",
            "options": ["for (start; condition; increment) {}", "for (condition; increment; start) {}", "for (increment; condition; start) {}", "for (condition; start; increment) {}"],
            "answer": "for (start; condition; increment) {}"
        },
        {
            "question": "How do you exit a loop prematurely in JavaScript?",
            "options": ["exit", "stop", "end", "break"],
            "answer": "break"
        },
        // Chapter 50: JavaScript Functions
        {
            "question": "What is the syntax for defining a function in JavaScript?",
            "options": ["function functionName() {}", "def functionName() {}", "void functionName() {}", "function() {}"],
            "answer": "function functionName() {}"
        },
        {
            "question": "How do you call a function named 'myFunction' in JavaScript?",
            "options": ["myFunction()", "call myFunction()", "function myFunction()", "run myFunction()"],
            "answer": "myFunction()"
        },
        // Chapter 51: JavaScript Function Parameters
        {
            "question": "What are function parameters in JavaScript?",
            "options": ["Values passed to a function", "Variables defined inside a function", "Functions returned by a function", "Results of a function"],
            "answer": "Values passed to a function"
        },
        {
            "question": "How do you set default parameter values for a function in JavaScript?",
            "options": ["function myFunction(param = defaultValue) {}", "function myFunction(param || defaultValue) {}", "function myFunction(param : defaultValue) {}", "function myFunction(param => defaultValue) {}"],
            "answer": "function myFunction(param = defaultValue) {}"
        },
        // Chapter 52: JavaScript Arrow Functions
        {
            "question": "What is the syntax for an arrow function in JavaScript?",
            "options": ["function => {}", "function() => {}", "() => {}", "(param) => {}"],
            "answer": "() => {}"
        },
        {
            "question": "How do you write a single-line arrow function in JavaScript?",
            "options": ["() => return expression", "() => { return expression }", "() => expression", "() { return expression }"],
            "answer": "() => expression"
        },
        // Chapter 53: JavaScript Objects
        {
            "question": "How do you create an object in JavaScript?",
            "options": ["new Object()", "{}", "createObject()", "Object.create()"],
            "answer": "{}"
        },
        {
            "question": "Which method is used to access the value of a property in an object?",
            "options": ["getProperty('propertyName')", "object.getProperty('propertyName')", "object.propertyName", "object['propertyName']"],
            "answer": "object['propertyName']"
        },
        // Chapter 54: JavaScript Object Properties
        {
            "question": "How do you add a new property to an object in JavaScript?",
            "options": ["object.addProperty('newProperty', value)", "object.newProperty = value", "object.setProperty('newProperty', value)", "object.newProperty(value)"],
            "answer": "object.newProperty = value"
        },
        {
            "question": "Which notation is used to delete a property from an object in JavaScript?",
            "options": ["delete object.propertyName", "object.deleteProperty('propertyName')", "object.removeProperty('propertyName')", "object.remove('propertyName')"],
            "answer": "delete object.propertyName"
        },
        // Chapter 55: JavaScript Object Methods
        {
            "question": "What are object methods in JavaScript?",
            "options": ["Functions stored as object properties", "Methods to manipulate objects", "Methods that return objects", "Methods to compare objects"],
            "answer": "Functions stored as object properties"
        },
        {
            "question": "How do you call a method named 'myMethod' on an object in JavaScript?",
            "options": ["object.callMethod('myMethod')", "object.run('myMethod')", "object.myMethod()", "object['myMethod']()"],
            "answer": "object.myMethod()"
        },
        // Chapter 56: JavaScript Arrays
        {
            "question": "How do you create an array in JavaScript?",
            "options": ["new Array()", "Array.create()", "[]", "{}"],
            "answer": "[]"
        },
        {
            "question": "Which method is used to add new elements to the end of an array?",
            "options": ["array.push(element)", "array.append(element)", "array.add(element)", "array.insert(element)"],
            "answer": "array.push(element)"
        },
        // Chapter 57: JavaScript Array Methods
        {
            "question": "What does the forEach() method do in JavaScript arrays?",
            "options": ["Executes a function for each array element", "Finds the first element in the array", "Returns a new array with filtered elements", "Sorts the array elements"],
            "answer": "Executes a function for each array element"
        },
        {
            "question": "Which method is used to remove the last element from an array in JavaScript?",
            "options": ["array.removeLast()", "array.pop()", "array.deleteLast()", "array.splice(-1)"],
            "answer": "array.pop()"
        },
        // Chapter 58: JavaScript Array Sort
        {
            "question": "How do you sort an array in ascending order in JavaScript?",
            "options": ["array.sort()", "sort(array)", "array.order()", "order(array)"],
            "answer": "array.sort()"
        },
        {
            "question": "Which method is used to reverse the order of elements in an array?",
            "options": ["array.reverse()", "reverse(array)", "array.orderBy('desc')", "array.flip()"],
            "answer": "array.reverse()"
        },
        // Chapter 59: JavaScript Array Iteration
        {
            "question": "What does the map() method do in JavaScript arrays?",
            "options": ["Modifies each array element", "Filters array elements based on a condition", "Returns a new array with transformed elements", "Combines all array elements into a single value"],
            "answer": "Returns a new array with transformed elements"
        },
        {
            "question": "Which method is used to find the index of the first occurrence of a specified element in an array?",
            "options": ["array.indexOf(element)", "array.find(element)", "array.search(element)", "array.firstIndexOf(element)"],
            "answer": "array.indexOf(element)"
        },
        // Chapter 60: Changing CSS
        {
            "question": "Which method is used to change the style of an element in JavaScript?",
            "options": ["changeStyle()", "modifyCSS()", "setAttribute()", "element.style.property = value"],
            "answer": "element.style.property = value"
        },
        {
            "question": "How do you change the background color of an element using JavaScript?",
            "options": ["element.style.bgColor = 'red'", "element.style.background = 'red'", "element.style.colorBackground = 'red'", "element.style.changeBackground('red')"],
            "answer": "element.style.background = 'red'"
        },
    ],
    jS_4:[
        // Chapter 61: Get and Change Class Attribute
        {
            "question": "How do you add a class to an element in JavaScript?",
            "options": ["element.addClass('className')", "element.classList.add('className')", "element.setAttribute('class', 'className')", "element.style.className('className')"],
            "answer": "element.classList.add('className')"
        },
        {
            "question": "What method is used to check if an element has a particular class?",
            "options": ["element.hasClass('className')", "element.classList.contains('className')", "element.getAttribute('class') === 'className'", "element.style.hasClass('className')"],
            "answer": "element.classList.contains('className')"
        },
        // Chapter 62: Set Intervals and Timeouts
        {
            "question": "What method would you use to repeatedly execute a function every fixed number of milliseconds?",
            "options": ["setDelay()", "setTimeout()", "setInterval()", "repeatFunction()"],
            "answer": "setInterval()"
        },
        {
            "question": "How do you execute a function after a specified number of milliseconds using JavaScript?",
            "options": ["executeAfter(time, function)", "runIn(time, function)", "setTimeout(function, time)", "delay(function, time)"],
            "answer": "setTimeout(function, time)"
        },
        // Chapter 63: Clear Intervals and Timeouts
        {
            "question": "How do you stop a repeating timer set by setInterval()?",
            "options": ["clearTimeout(intervalID)", "stopInterval(intervalID)", "clearInterval(intervalID)", "cancelInterval(intervalID)"],
            "answer": "clearInterval(intervalID)"
        },
        {
            "question": "Which method is used to cancel a timeout set by setTimeout()?",
            "options": ["clearTimeout(timeoutID)", "cancelTimeout(timeoutID)", "stopTimeout(timeoutID)", "clearInterval(timeoutID)"],
            "answer": "clearTimeout(timeoutID)"
        },
        // Chapter 64: Node Relationships
        {
            "question": "What property would you use to access the parent node of an element?",
            "options": ["element.parentNode", "element.parentElement", "element.parent()", "element.rootNode"],
            "answer": "element.parentNode"
        },
        {
            "question": "How do you access the first child node of an element?",
            "options": ["element.firstChild", "element.firstNode", "element.childNode", "element.first()"],
            "answer": "element.firstChild"
        },
        // Chapter 65: Target Nodes
        {
            "question": "How do you access the next sibling of a node?",
            "options": ["node.next()", "node.nextSibling", "node.siblingNext", "node.sibling()"],
            "answer": "node.nextSibling"
        },
        {
            "question": "Which property is used to find the number of child nodes of an element?",
            "options": ["element.childNodes.length", "element.childCount", "element.children.length", "element.childNodeCount"],
            "answer": "element.childNodes.length"
        },
        // Chapter 66: Node List
        {
            "question": "What method returns a live HTMLCollection?",
            "options": ["document.querySelector()", "document.querySelectorAll()", "document.getElementsByClassName()", "document.createElement()"],
            "answer": "document.getElementsByClassName()"
        },
        {
            "question": "How do you convert an HTMLCollection to an array in JavaScript?",
            "options": ["Array.from(htmlCollection)", "htmlCollection.toArray()", "htmlCollection.convertToArray()", "Array.htmlCollection()"],
            "answer": "Array.from(htmlCollection)"
        },
        // Chapter 67: Creating Nodes
        {
            "question": "Which method is used to create a new HTML element in JavaScript?",
            "options": ["document.newElement()", "document.appendElement()", "document.createElement()", "document.addElement()"],
            "answer": "document.createElement()"
        },
        {
            "question": "How do you set attributes for a newly created element in JavaScript?",
            "options": ["element.newAttribute('attr', 'value')", "element.setAttribute('attr', 'value')", "element.attributes('attr', 'value')", "element.addAttr('attr', 'value')"],
            "answer": "element.setAttribute('attr', 'value')"
        },
        // Chapter 68: Appending Nodes
        {
            "question": "Which method adds a node to the end of the list of child nodes of a specified parent node?",
            "options": ["parentNode.appendNode(childNode)", "parentNode.addChild(childNode)", "parentNode.appendChild(childNode)", "parentNode.addElement(childNode)"],
            "answer": "parentNode.appendChild(childNode)"
        },
        {
            "question": "How do you add an element as the first child of another element?",
            "options": ["parentElement.prepend(childElement)", "parentElement.addChild(childElement)", "parentElement.insertBefore(childElement, parentElement.firstChild)", "parentElement.insertFirstChild(childElement)"],
            "answer": "parentElement.insertBefore(childElement, parentElement.firstChild)"
        },
        // Chapter 69: Removing Nodes
        {
            "question": "How do you remove a specified node from the DOM?",
            "options": ["node.delete()", "node.removeChild()", "node.removeElement()", "node.destroy()"],
            "answer": "node.removeChild()"
        },
        {
            "question": "How do you remove all child nodes from an element?",
            "options": ["element.removeAll()", "element.empty()", "element.removeChildren()", "element.clear()"],
            "answer": "element.removeChildren()"
        },
        // Chapter 70: Inserting Nodes
        {
            "question": "Which method inserts a new node before a specified existing node?",
            "options": ["parentNode.insert(childNode)", "parentNode.insertBefore(newNode, referenceNode)", "parentNode.addBefore(newNode, referenceNode)", "parentNode.append(newNode, referenceNode)"],
            "answer": "parentNode.insertBefore(newNode, referenceNode)"
        },
        {
            "question": "How do you insert an element after another element in JavaScript?",
            "options": ["element.insertAfter(newElement, targetElement)", "targetElement.insertAfter(element, newElement)", "element.addAfter(newElement, targetElement)", "targetElement.addAfter(element, newElement)"],
            "answer": "element.insertAfter(newElement, targetElement)"
        },
        // Chapter 71: Replacing Nodes
        {
            "question": "What method is used to replace a child node with another node?",
            "options": ["parentNode.replaceNode(newNode, oldNode)", "parentNode.replace(newNode, oldNode)", "parentNode.replaceChild(newNode, oldNode)", "parentNode.switchNode(newNode, oldNode)"],
            "answer": "parentNode.replaceChild(newNode, oldNode)"
        },
        {
            "question": "How do you replace an element with another element in JavaScript?",
            "options": ["element.replaceWith(newElement)", "newElement.replace(element)", "element.switchWith(newElement)", "newElement.switch(element)"],
            "answer": "element.replaceWith(newElement)"
        },
        // Chapter 72: Cloning Nodes
        {
            "question": "How do you clone a node in JavaScript?",
            "options": ["node.duplicate()", "node.copy()", "node.cloneNode()", "node.replicate()"],
            "answer": "node.cloneNode()"
        },
        {
            "question": "What is the difference between shallow copy and deep copy of an object in JavaScript?",
            "options": ["Shallow copy includes only the top-level properties, while deep copy includes nested objects and their properties.", "Shallow copy copies everything including prototypes, while deep copy only copies object properties.", "Shallow copy is faster than deep copy, while deep copy is slower but safer.", "There is no difference between shallow copy and deep copy in JavaScript."],
            "answer": "Shallow copy includes only the top-level properties, while deep copy includes nested objects and their properties."
        },
        // Chapter 73: Reading CSS Properties
        {
            "question": "How do you read the computed style of an element?",
            "options": ["element.getStyle()", "window.getComputedStyle(element)", "element.readStyle()", "element.style.read()"],
            "answer": "window.getComputedStyle(element)"
        },
        {
            "question": "Which method is used to get the value of a specific CSS property of an element?",
            "options": ["element.style.getProperty('property')", "element.getPropertyValue('property')", "element.getCSS('property')", "element.style.readProperty('property')"],
            "answer": "element.style.getProperty('property')"
        },
        // Chapter 74: Setting CSS Properties
        {
            "question": "What is the correct way to change the background color of an element?",
            "options": ["element.style.background = 'red'", "element.style.backgroundColor = 'red'", "element.setStyle('background-color', 'red')", "element.changeBackground('red')"],
            "answer": "element.style.backgroundColor = 'red'"
        },
        {
            "question": "How do you set multiple CSS properties for an element in JavaScript?",
            "options": ["element.setStyles({prop1: value1, prop2: value2})", "element.styles({prop1: value1, prop2: value2})", "element.style({prop1: value1, prop2: value2})", "element.applyStyles({prop1: value1, prop2: value2})"],
            "answer": "element.style({prop1: value1, prop2: value2})"
        },
        // Chapter 75: Measuring Element Width and Height
        {
            "question": "How do you get the width of an element including padding, but not border or margin?",
            "options": ["element.width()", "element.offsetWidth", "element.style.width", "element.clientWidth"],
            "answer": "element.offsetWidth"
        },
        {
            "question": "Which property is used to get the height of an element's content area?",
            "options": ["element.style.innerHeight", "element.scrollHeight", "element.offsetHeight", "element.clientHeight"],
            "answer": "element.clientHeight"
        },
        // Chapter 76: Positioning Elements
        {
            "question": "How do you set the position of an element to relative in CSS?",
            "options": ["position: relative;", "position: absolute;", "position: fixed;", "position: static;"],
            "answer": "position: relative;"
        },
        {
            "question": "What is the correct way to set the left offset of an element to 20px using JavaScript?",
            "options": ["element.offsetLeft = '20px'", "element.style.left = '20px'", "element.setOffset('left', '20px')", "element.moveLeft('20px')"],
            "answer": "element.style.left = '20px'"
        },
        // Chapter 77: Display and Visibility
        {
            "question": "How do you hide an element in JavaScript?",
            "options": ["element.display = 'none'", "element.visibility = 'hidden'", "element.style.hide()", "element.hide()"],
            "answer": "element.style.display = 'none'"
        },
        {
            "question": "Which property is used to show an element in JavaScript after it has been hidden?",
            "options": ["element.show()", "element.style.show = true", "element.style.display = 'block'", "element.visible()"],
            "answer": "element.style.display = 'block'"
        },
        // Chapter 78: Animating Elements
        {
            "question": "What method is used to create animations in JavaScript?",
            "options": ["createAnimation()", "animate()", "startAnimation()", "beginAnimation()"],
            "answer": "animate()"
        },
        {
            "question": "How do you specify the duration of an animation in JavaScript?",
            "options": ["animation.duration = '1s'", "animation.setDuration('1s')", "animation.style.duration = '1s'", "animation.time('1s')"],
            "answer": "animation.style.duration = '1s'"
        },
        // Chapter 79: Adding Event Listeners
        {
            "question": "How do you add an event listener to an element in JavaScript?",
            "options": ["element.addListener('click', myFunction)", "element.addEventListener('click', myFunction)", "element.onclick(myFunction)", "element.handleEvent('click', myFunction)"],
            "answer": "element.addEventListener('click', myFunction)"
        },
        {
            "question": "What is the purpose of event listeners in JavaScript?",
            "options": ["To handle errors in the code", "To handle asynchronous operations", "To execute functions when certain events occur", "To listen to changes in CSS properties"],
            "answer": "To execute functions when certain events occur"
        },
        // Chapter 80: Mouse Events
        {
            "question": "Which event occurs when a user clicks the mouse button on an element?",
            "options": ["onmouseclick", "onclick", "mouseclick", "click"],
            "answer": "click"
        },
        {
            "question": "How do you detect a right-click event in JavaScript?",
            "options": ["event.button === 0", "event.button === 1", "event.button === 2", "event.button === 3"],
            "answer": "event.button === 2"
        },
        // Chapter 81: Keyboard Events
        {
            "question": "Which event occurs when a user presses a key on the keyboard?",
            "options": ["keypress", "keydown", "keyup", "keyclick"],
            "answer": "keydown"
        },
        {
            "question": "How do you detect which key is pressed during a keyboard event in JavaScript?",
            "options": ["event.key", "event.keyCode", "event.which", "event.keyboard"],
            "answer": "event.key"
        },
        // Chapter 82: Form Events
        {
            "question": "Which event occurs when a user submits a form?",
            "options": ["onsubmit", "submit", "formsubmit", "submitform"],
            "answer": "submit"
        },

        //   Chapter 82: Removing Event Listeners
        {
            "question": "How do you remove an event listener from an element?",
            "options": ["element.detachEventListener('event', function)", "element.removeEvent('event', function)", "element.unbindEvent('event', function)", "element.removeEventListener('event', function)"],
            "answer": "element.removeEventListener('event', function)"
        },
        {
            "question": "Which property of the event object contains the element that triggered the event?",
            "options": ["event.source", "event.target", "event.element", "event.trigger"],
            "answer": "event.target"
        },
        
        // Chapter 83: Event Object
        {
            "question": "How do you prevent the default action of an event?",
            "options": ["event.stopDefault()", "event.preventDefault()", "event.cancelDefault()", "event.blockDefault()"],
            "answer": "event.preventDefault()"
        },
        {
            "question": "Which method stops the propagation of an event?",
            "options": ["event.stopPropagation()", "event.preventPropagation()", "event.haltPropagation()", "event.blockPropagation()"],
            "answer": "event.stopPropagation()"
        },
        
        // Chapter 84: Preventing Default Actions
        {
            "question": "What is event delegation?",
            "options": ["Attaching an event listener to every child element", "Attaching an event listener to a parent element to handle events from child elements", "Preventing event propagation", "Removing event listeners from child elements"],
            "answer": "Attaching an event listener to a parent element to handle events from child elements"
        },
        {
            "question": "How do you programmatically trigger a click event on an element?",
            "options": ["element.fireEvent('click')", "element.invokeEvent('click')", "element.triggerEvent('click')", "element.click()"],
            "answer": "element.click()"
        },
        
        // Chapter 85: Event Propagation
        {
            "question": "Which method is used to create a new HTML element in the DOM?",
            "options": ["document.createElement()", "document.newElement()", "document.addElement()", "document.generateElement()"],
            "answer": "document.createElement()"
        },
        {
            "question": "What does the getElementsByClassName() method return?",
            "options": ["An array of elements", "A NodeList", "An HTMLCollection", "A single element"],
            "answer": "An HTMLCollection"
        },
        
        // Chapter 86: Delegating Events
        {
            "question": "How do you attach an event listener to an element?",
            "options": ["element.on('event', function)", "element.attachEvent('event', function)", "element.addEventListener('event', function)", "element.bindEvent('event', function)"],
            "answer": "element.addEventListener('event', function)"
        },
        {
            "question": "How do you remove a specified node from the DOM?",
            "options": ["node.delete()", "node.removeChild()", "node.removeElement()", "node.destroy()"],
            "answer": "node.removeChild()"
        },
        
        // Chapter 87: Simulating Events
        {
            "question": "What method is used to replace a child node with another node?",
            "options": ["parentNode.replaceNode(newNode, oldNode)", "parentNode.replace(newNode, oldNode)", "parentNode.replaceChild(newNode, oldNode)", "parentNode.switchNode(newNode, oldNode)"],
            "answer": "parentNode.replaceChild(newNode, oldNode)"
        },
        {
            "question": "How do you read the computed style of an element?",
            "options": ["element.getStyle()", "window.getComputedStyle(element)", "element.readStyle()", "element.style.read()"],
            "answer": "window.getComputedStyle(element)"
        },
        
        // Chapter 88: Page Load Event
        {
            "question": "Which event occurs when the entire page has loaded, including all dependent resources?",
            "options": ["document.onload", "window.onload", "body.onload", "window.domContentLoaded"],
            "answer": "window.onload"
        },
        {
            "question": "How do you detect a right-click event in JavaScript?",
            "options": ["event.button === 0", "event.button === 1", "event.button === 2", "event.button === 3"],
            "answer": "event.button === 2"
        },
        
        // Chapter 89: Mouse Events
        {
            "question": "Which property would you use to check if an element is visible in the viewport?",
            "options": ["element.visible", "element.isVisible", "element.inViewport", "element.getBoundingClientRect()"],
            "answer": "element.getBoundingClientRect()"
        },
        {
            "question": "How do you prevent the default action of an event?",
            "options": ["event.stopDefault()", "event.preventDefault()", "event.cancelDefault()", "event.blockDefault()"],
            "answer": "event.preventDefault()"
        },
    ],
};

let currentTopic;
let currentQuestionIndex;
let score = 0;
let timer;

function startQuiz(topic) {
    currentTopic = topic;
    currentQuestionIndex = 0;
    score = 0;
    showQuestion();
    startTimer();
    showPage("quizPage");
}

function showQuestion() {
    const questionData = questions[currentTopic][currentQuestionIndex];
    document.getElementById("questionNumber").innerText = `Question ${currentQuestionIndex + 1}`;
    document.getElementById("question").innerText = questionData.question;

    const optionsForm = document.getElementById("optionsForm");
    optionsForm.innerHTML = "";

    questionData.options.forEach((option, index) => {
        const optionInput = document.createElement("input");
        optionInput.type = "radio";
        optionInput.name = "option";
        optionInput.id = `option${index}`;
        optionInput.value = option;

        const optionLabel = document.createElement("label");
        optionLabel.htmlFor = `option${index}`;
        optionLabel.innerText = option;

        optionsForm.appendChild(optionInput);
        optionsForm.appendChild(optionLabel);
        optionsForm.appendChild(document.createElement("br"));

        // Add event listener to show "Next" button when an option is selected
        optionInput.addEventListener("change", () => {
            document.getElementById("nextButton").style.display = "inline";
        });
    });

    // Hide "Next" button initially
    document.getElementById("nextButton").style.display = "none";
}

function nextQuestion() {
    const selectedOption = document.querySelector('input[name="option"]:checked');
    if (!selectedOption) {
        alert("Please select an option.");
        return;
    }

    const selectedAnswer = selectedOption.value;
    const correctAnswer = questions[currentTopic][currentQuestionIndex].answer;

    if (selectedAnswer === correctAnswer) {
        score++;
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < questions[currentTopic].length) {
        showQuestion();
    } else {
        endQuiz();
    }
}

function endQuiz() {
    clearInterval(timer);
    const resultText = document.getElementById("resultText");
    const happyGif = document.getElementById("happyGif");
    const sadGif = document.getElementById("sadGif");

    const percentageScore = (score / questions[currentTopic].length) * 100;

    if (percentageScore >= 70) {
        resultText.innerText = `Congratulations! You passed. ${percentageScore}`;
        happyGif.style.display = "block";
        sadGif.style.display = "none";
    } else {
        resultText.innerText = `Sorry! You failed. ${percentageScore}`;
        happyGif.style.display = "none";
        sadGif.style.display = "block";
    }

    showPage("resultPage");
}

function startTimer() {
    let timeLeft = 3600; // 60 minutes * 60 seconds
    timer = setInterval(() => {
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        document.getElementById("timer").innerText = `Time Left: ${minutes}:${seconds}`;

        if (timeLeft <= 0) {
            clearInterval(timer);
            endQuiz();
        }
        timeLeft--;
    }, 1000);
}

function showPage(pageId) {
    document.querySelectorAll(".page").forEach(page => {
        page.style.display = "none";
    });
    document.getElementById(pageId).style.display = "block";
}
