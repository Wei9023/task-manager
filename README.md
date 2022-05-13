# task-manager
=================================================

## Login and Auth

### Author: Vanessa

### Links and Resources
* [Code sandbox](https://codesandbox.io/s/p5wqx064jj)


#### Migrate and Modularize
* Refactor the app to make use of the Context API
* Create a `context` for the Application
* Create a separate `<Counter />` component that reads and displays the `count` from Context
* Create separate components for the main To App elements
  * `form` - Adds and updates to do list items
  * `list` - Lists items, manages complete state and form visibility
  
  
#### Login/Auth Features
* Hide the entire interface until the user has logged in.
  * Provide a login and logout option in the main menu
* Implement the following RBAC rules:
    * Logged In Users with 'read' permissions can see the summary/count
    * Logged In Users with 'read' permissions can see the list of To Do Items
    * Logged In Users with 'delete' permissions can click the records to mark them as complete
    * Logged In Users with 'update' permissions can edit existing items
    * Logged In Users with 'create' permissions can create new items

### Notes
* You may not alter the functionality of the existing application
* You may only grant access using RBAC
* You may test with your own API server
* You must either deploy that server and configure your React application to use it, or you may use the official API deployment at https://api-js401.herokuapp.com
* The API server has the following user accounts (username:password) that you can use to login as a user with varying permissions
  * admin:ADMIN (create, read, update, delete)
  * editor:EDITOR (create, read, update)
  * user:USER (read)
  
### Setup
#### `.env` requirements
* `npm i` install dependencies

#### Running the app
* open sandbox link

### Components
Auth
Counter
If
Todo


#### UML
![Data flow](./uml.jpg)
