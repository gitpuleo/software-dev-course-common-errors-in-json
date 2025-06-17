/*
===========================================
🏨 JSON Syntax Debugging: Hotel Booking Data
===========================================

🎯 Objective:
Students will analyze a JSON file containing multiple syntax errors,
identify the issues, and correct them.

This activity helps practice spotting and fixing common JSON mistakes such as:
- Missing commas
- Incorrect use of quotation marks
- Unmatched brackets/braces
- Trailing commas
- Invalid data types
*/


// ============================================
// 🧭 Instructions:
// ============================================

/*
📘 Scenario:
You’re a developer on a team building a travel booking API.

A teammate submitted a JSON file to represent a hotel booking, 
but it contains multiple syntax errors that prevent it from being parsed.

🔧 Your Task:
1️⃣ Review the provided JSON file
2️⃣ Identify all syntax errors
3️⃣ Write down what each error is and why it causes a problem
4️⃣ Correct the JSON structure so that it is valid
5️⃣ Validate your corrected version using a JSON linter or validator

🧪 Deliverables:
- A corrected version of the JSON
- A list of the corrections made and why each was necessary
*/


// ============================================
// 🔍 Provided JSON File with Errors
// ============================================

{
  "hotelName": "Grand City Hotel",
  "checkInDate": "2024-05-15",
  "checkOutDate": "2024-05-20",
  "guests": [
    {
      "name": "Alice Johnson",
      "age": 30,
      "email": "alice.johnson@example.com"
    },
    {
      "name": "Bob Smith",
      "age": null,
      "email": "bob.smith@example"
    }
  ],
  "roomDetails": {
    "type": "Suite",
    "pricePerNight": 200,
    "amenities": ["WiFi", "Breakfast", "Parking",]
  }
}


// ============================================
// ✅ Requirements
// ============================================

/*
- Use a JSON validator or linter (e.g., https://jsonlint.com/) to test your final version
- Keep track of each fix:
  • What was wrong?
  • Why is it a problem in JSON?
  • What did you change to fix it?
*/

//Comments on exercises:
/*
From line one, const and a variable are not used in JSON objects--they start with a curly brace. Remove. 
The JSON object is enclosed in backticks as if it were a template literal, which is not proper JSON syntax. Remove.
Missing comma after the value of checoutDate, which will casue parsing to fail. Remove.
Name key in the first element of the array of objects "guests" is not enclosed in double quotes and so will not parse. Add them in. 
Bob Smith's age is listed as undefined, an unsupported data type--null should be used instead. 
There is a trailing comma in the amenities array which must be removed for the parser not to hang. 
Semicolon after the closing curly brace also not a part of JSON syntax, needs to be removed so as not to upset the parser. 

*/
// ============================================
// 🤔 Follow-Up Questions
// ============================================

/*
💬 Reflect and answer the following:

1️⃣ What tools or techniques did you use to identify the errors?
First I did a visual pass, noting what I could just by my own observations. Then, I looked for hints of problems from the editor such as squiggly red lines pointing to some errors.

2️⃣ How did you confirm that your corrected JSON file was valid?
By plugging in the code into an online linter, which found a few more errors I had missed before clearing the code as valid. 

3️⃣ Which errors were the most difficult to spot? Why?
The use of undefined, the trailing comma in the array, and the use of const and a variable at the beginnigng alluded me until I checked the linter. The const to declare a variable because I am so used to regular JS object syntax that nothing registered to me as out of place at first. The undefined for similar reasons: I forgot that was a data type JSON does not accept. And finally the trailing comma, which although I noticed I mistakenly assumed was alright given that it was within an array and not "part of the JSON structure". This thinking was malformed, as the whole thing must obey the stricter JSON syntax in order to maintain its interoperability. 

4️⃣ What strategies can help you avoid these kinds of errors in the future?
   Certainly writing a JSON object in a file which your editor already knows is a JSON will help the editor point out JSON specific syntax errors for you, so start by making sure you are writing a JSON object within a file that has a .JSON ending. Finally, make sure to use a linter to catch any slip-ups you may have made in using JS object syntax presumptions. 
