
Assignment for QA role.

!!!Important!!!

Due to lack of requirements some assumptions for open test assignment were made.
In real work environment no assumptions should be made!!!

# Introduction

System Under Test (SUT): 
Single Page Web Application containing header, two sections and footer.
Sections 'login' & 'content'
with the following UI elements – images, labels, input fields and buttons.
Buttons allow user redirect between sections (web pages) - login and signout accordingly.


Assignment was done using:

- Mac PC
- Node.js
- VS Code IDE
- Java script language
- Playwright Test Framework
- Git

# Test approach

I use Playwright framework for creating tests for web app.
As far as it is open assignment without specific requirements,
I have implemented test cases that check availability and behavior of web components and
covered basic scan for possible accessibility issues.

I created a high-level API for the appication using Page Object Model that simplify 
maintenance and create reusable code to avoid repetition.

There are several types of tests examples created:
 - ui
 - functional
 - accessibility (basic page scan)
 located in correspondant folders. 
 Although there are more types of tests to be covered.
 See section #Test coverage areas


Creating a local copy of project:

1. Navigate to the repository https://github.com/MariaSkvortcova/WebAssignment, click Clone or Download button to download the assignment as a project
2. Copy GitHub URL displayed
3. Launch terminal on macOS or command prompt on Windows PC.
4. Navigate to the folder where project is to be saved locally by typing this command cd , for example
5. Create an actual local copy of the project by running git clone , where URL is the link from Step 2

# Running tests and test report

Test cases can be run in different ways.
For example, from VS Code using Playwright plugin
The results of tests run can be found in file playwright-report/index.html

Another way is to use local server:
just run a command in terminal: npx playwright test
when tests finish test report will be open automatically in the default browser

# Essential test coverage areas 

1.	UI & accessibility tests
-	layout is consistent, following the design documentation
-	all elements following design doc should be presented in correct states, and no extra elements should be presented that are not in the design
-	ensure page can be used by people with disabilities:
- HTML-semantic works properly
- All interactive elements are accessible with keyboard, pointing devices etc
- Sufficient color contrast
- Screen readers can interpret the content (like Talk back)
- font scaling supported

2.	Functional tests
- buttons, links, any actions work correctly
- validation
- navigation
- correctness of data
- form submission
- errors handles

3.	Performance tests
-	How fast and efficient page is:
    o	Optimal page load time 
    o	Lazy-loading
    o	No rendering
    o	Responsiveness

4.	Security tests
-	No sensitieve data visible
-	HTTP is enforced
-	Input fields are validated (for xss, injections, etc)
-	Cookies with HttpOnly and Secure flags
-	No libraries used with vulnarabilities
-	Compliance with GDPR, ePrivacy

5.	Cross browser compatibility (Desktop Chrome, Desktop Firefox, Google Chrome, Safari, MS Edge,     Mobile browsers etc)

6.  Dimentions and layouts 
    - horizontal/ vertical layouts supported
    - support for different screen sizes

All test cases could be automated with different frameworks.

# Bugs found and potential ares of improvement (based on assumptions and common sense)

1.	Consistency of the input fields on login page is incorrect (example, hint is only presented for ‘User’ input field and not for ‘Password’)
2.	When wrong credentials are used no warning or error message presented 
3.	Contrast of some elements/backgrounds is not correct
4.	When user is logged in and press “Log out ” button then some elements of Login page presented are not in the initial “state”
5.	Sensitive data (user credentials) still presented in UI when user is logged out
6.	Architectural/security bug: passwords used by users can be very simple and not secure strong enough (short length, only digits etc.)
7.	Accessibility: Login button has no highlight state when user access it with keyboard
8.	Accessibility: Read Aloud (talk back) missed “Login” button
9.	Accessibility: “Sign out” button can not be accessed with keyboard and missed by Talk back

