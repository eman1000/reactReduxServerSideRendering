Isomophic React + Redux 
===========

Universal React + Redux App. Which can make API calls on the server before the page loads.

USEFUL LINKS
------------


GETTING STARTED WITH DEVELOPMENT
--------------------------------

1. Software installation:
    - Sublime Text 3
    - Currently stable Google Chrome
    - [NodeJS v6.10.2][] (for development, testing, previewing, compiling and optimizing processes)
    - [Webpack][] locally installed
2. Setting up Environment and running app
    - Install dependencies: In terminal, cd to __this__ folder: `npm install`
    - Run `npm run dev`
3. Optimize source code and prepare bundle for deployment: [TBD]
4. Prepare upload bundle and upload to server: [TBD]


TECHNICAL SOLUTIONS
-------------------

- [React][] 15.6.1 and [Redux][] 3.7.1 for the Frontend Architecture
- [Webpack] for building and bundling.
- SASS (SCSS dialect) as CSS preprocessor
- Form field validation: [TBD]
- Minimum browser's supports (as per overall TSD):
- [Jest] for Unit Testing
- [Flow] for type checking
    
### DEVELOPMENT DEPENDENCIES

- [NodeJS v6.10.2][]
- [Webpack][]
- See _dependencies_ in `package.json`

### VERSIONS

Below are list of main components

- React: __15.6.1__
- Redux: 3.7.1

FOLDER STRUCTURE
----------------

_Folder structure is Fractal


CONVENTIONS & BEST PRACTICES
----------------------------

### Folder and file name:
- Use PascalCase for all folder with components
- Use lowercase for remaining folder names 

### JavaScript
- Alignment by TABs (not SPACES, tab width is up to user's preference, but 4-space tab is recommended)
- Variable Naming:
    + use camelCase for variables and function names.
    
- Functions:
    + Prefix function name with 'on' if it is an ordinary event handling function
    Refer to `.eslintrc` for detailed global rules [TBD]

### SCSS
- __Comments__: 
    + Every CSS component/file (at high level)
- __OOCSS__:
    + NO IDs in CSS
    + Except for utilitily classes, avoid using !important

### Development Environment Setup
- Install Nodejs [v6.10.2]
- Install GIT
- Install React Developer Tools for Google Chrome.
- Go to Project root directory and run `npm install`. This will install Project dependencies.
- Run `npm run dev`. This will start development node server. 
- Go to http://localhost:8081/home from Browser.
- If you make any changes to messages, then you have to delete src/messages/en-US folder for now. and run `npm run compile`.
- Before every push, you have to run `npm run manage:translations`.

### Generating Bundle.
- Install Nodejs [v6.10.2]
- Install GIT
- Open Git Bash (if you are using windows) and Go to Project Root.
- Run `npm run bundle`. This will create a ~dist folder with compiled code.

BUILD & CI SERVER INSTALLATION [TBD]
------------------------------

[NodeJS v6.10.2]: http://nodejs.org/

