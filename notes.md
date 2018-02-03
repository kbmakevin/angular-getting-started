# Angular 2 Getting Started

This course will cover:
1. Components
2. Templates, data bindings and directives
3. Services and dependency injection
4. Http and observables
5. Navigation and routing
6. Angular CLI

## what is angular?
- framework for building client side applications
    - html
    - css
    - programming language such as javascript

## why angular?
- expressive html
- powerful data binding
- modular by design
- built-in back-end integration

## why a new angular?
- built for speed
- modern javascript but also supports legacy code
- simplified api
- enhances productivity

## anatomy of an angular application
    application = set of components and services that provide functionality across those components 

## component 
---
comprised of :
1. a **template** which is the html fragment defining a view for the application
2. a **class** to associate with the view
    - properties, data elements available for use in the view
    - methods, which perform actions for the view such as responding to a button click
3. **metadata**
    - provides additional info about the component to angular
    - identifies a class as an angularcomponent
---
    view defined with a template
    associated code defined with a class
    additional info defined with metadata

how do we pull these components into an application?
- define **angular modules**
- they help us organize application into cohesive blocks of functionality

every ng app has at least one ng module, called application root ng module 
- can have any number of other modules eg. feature ng module which 
consolidate components for specific application features

need a component for everything so that we can reuse it and modularize application
    welcome component
    product list component
    product detail component
    start component
    app component
    product data service 
    index.html

can use any javascript version for developing ng application since it is a js framework
    e.g.
        es5
            runs in the browser, no compile required
        es6/2015
            lots of new features (classes, let, arrow, etc.)
        typescript
            superset of javascript
            strong typing
            great ide tooling
        dart
            no javascript, usable in ng

typescript
    open source language
    superset of javascript
    transpiles to plain javascript
    strongly typed
        typescript type definition files (*.d.ts)
    implements es6 class-based object-orientation
    
npm (node package manager)
    command line utility
    installs librareis, packages, and applications

setting up an ng app
    1. Create an app folder
    2. Add package defn and cfg files
    3. install the packages
    4. create the app's ng modules
    5. create the main.ts file
    6. create the host web page (index.html)

can do all this manually, or use angular cli (for building, testing and deploying angular applications)
    this scaffolds our boilerplate

with js, always problem of namespaces
if not careful can easily end up with var/fuinctions in global namespace 
in addition js, didnt provide features that help with code organization
    modules help resolve these issues

in es6, a file IS a module, dont need to define a module, simply export and import

ES2015 modules
---
export
product.ts

`export class Product{}`

import
product-list.ts

`import {Product} from './product`

Angular modules
---
help organize components into cohesive blocks of functionality

every app has Root Angular Module
can also have Feature Angular Modules and Shared modules

in each module, we define the components and any other code associated with the module and their dependencies

ES Modules vs Angular Modules
---
ES Modules (bout code files)
-
Code files that import or export something
Organize our code files
Modularize our code
Promote code reuse

Angular Modules (about angular application)
-
Code files that organize the application into cohesive blocks of functionality
Organize our application
Modularize our application 
Promote application boundaries

What is a component?
---
component = template + class (contains properties and methods) + metadata

template
-
view layout
created with html
includes bindings and directives

class
-
code supporting the view
created with typescript
properties:data
methods:logic

metadata
-
defines this as a component
extra data for angular
defined with a decorator

decorator
---
function that adds metadata to a class, its members, or its method arguments
prefixed with an @
angular provides built-in decorators
e.g. `@Component()`

can also build our own decorators
goes above the thing we are decorating, eg. a class

before we use an external function or class, we define where to find it

import statement

import allows us to use exported members from external ES modules

import from a third-party library, our own ES modules, or from Angular

Angular Is Modular
-
contains many modules which we can import from
e.g.
    @angular/core
    @angular/animate
    @angular/http
    @angular/router

Bootstrapping Our App Component
---
load our root component

Single Page Application (SPA)
---
index.html contains the main page for the application
this is often the only web page of the application
hence an angular application is often called a Single Page Application (SPA)

Hosting the Application
---
we simply add the selector which we want displayed in the index.html file

index.html
```
    <body>
        <pm-root></pm-root>
    </body>
```

in the template, we call this a directive
    a custom element

when the page finishes loading, the custom html content from our template replaces the directive in the index.html file 

how does angular compiler know about these custom html elements/directives?

it looks at an Angular Module; 
angular modules help us organize our app into cohesive blocks of functionality and 
provide boundaries within our app
also provide template resolution environment

inside @NGModule({})
    the properties are arrays
    declarations
        which components BELONG to this module
            eg. AppComponent belongs to the root module: app.module.ts
    imports
        external modules we want to be available to all of the components which belong to THIS module
            can be angular modules, third party, or our own custom

        BrowserModule
            every browser app must import
            registers important app service providers such as error handling

    bootstrap 
        defines startup component of the application which is our AppComponent
            should contain the selector we use in the index.html

    providers
        for services

In order to use a component, include its selector in the template of another component, then include the new component in the declaration of the module it belongs to

Binding
---
coordinates communication b/t the component's class and its template and often involves passing data

template raises events which back to the class which triggers methods

Interpolation
---
uses double {{ }}

put in an expression or a variable in between the braces (this is known as the Tempalte Exprssion)

angular uses the component of the template as a basis for context for the variables inside the expression

Directive
---
custom HTML element or attr used to power up and extend our HTML
    custom or built-in available

Structural Directives
---
modifies the structure or layout of a view by adding/removing/manipulating eleemtns and their children
* marks these directives as structural directives
    e.g. built-in ones:
        *ngIf: If logic
        *ngFor: For loops

*ngIf: If logic
---
removes/adds elements to the DOM tree depending on the evaluation of the expression
e.g. only display table if there are elements in the table
   ` <table class='table' *ngIf='products && products.length'>`

*ngIf and *ngFor is included inside of BrowserModule, so anyone who has access to BrowserModule can use these structural directivies

*ngFor
---
define how we want to display one item, repeat this for certain number of times using for looping logic

es2015 for loops
---
for...of
-
iterates over iterable objects, such as an array.
result: di, boo, punkeye

for...in
-
iterates over the properties of an object.
result: 0, 1, 2
    "IN" interates over their INDEX

Components and DOM
---
we want to use component properties to dynamically change DOM
we want DOM to send events to Components

Property Binding
---
`<img [src]='product.imageUrl'>`
    src is element property
    '...' is tempalte expression which normally goes in {{ }}

    [] is binding target
    '' is binding source

another  way to do this:
    `<img src={{product.imageUrl}}>`

first way, property binding is preferred

Event Binding
---
`<button (click)='toggleImage()'>`

    () target event
    '' template statement

Two-way Binding
---
tempalte <=> class

display element in template and update property in class when user makes a change

`<input [(ngModel)]='listFilter'>`
    [()]    "banana in a box"

need import FormsModule in app.module.ts
external, or third party, add to imports
declarations are internal components

pipes
---
transforms data, data not appropaite to be output as is, need to use pipes

built-in pipes
-
date, number, decimal, percent, currency
json, slice
etc

can also build custom pipes

pipes can accept input args with help of colon char

eg.
    `{{ product.price | curency:'USD':true:'1.2-2' }}`

true here makes it display $x.xx instead of USDx.xx
1.2-2
1 digit before dp
min 2, max 2 digits following dp

    ***started doing markdown here!

# Interface
- a **specification** identifying a related set of properties and methods
- a class commits to supporting the specification by **implementing** the interface
- use the interface as a **data type**
- development time only!

```
export interface IProduct {
    productId: number;
    productName: string;
    productCode: string;
    releaseDate: string;
    price: number;
    description: string;
    starRating: number;
    imageUrl: string;
}
```

We use interfaces to create types, so that we can strongly type our applications. 

    NOTE: we only need to create a class if we require business methods, if simply properties, use an interface!

need to add component styles using an ARRAY, not normal value

e.g.

`styleUrls: ['./product-list.component.css']`

vs

`templateUrl: './product-list.component.html',`

# Component Lifecycle
1. Create
2. Render
3. Create and render children
4. Process changes
5. Destroy

## Component Lifecycle Hooks
1. OnInit: Perform component initialization, retrieve data
2. OnChanges: perform action after change to input properties
3. OnDestroy: Perform cleanup

eg.
```
import { Component, OnInit } from '@angular/core';
export class ProductListComponent implements OnInit {
    ...

    ngOnInit(): void {
        ...
    }
}
```
## Building a Custom Pipe
```
@Pipe({
    name: 'convertToSpaces'
})
export class ConvertToSpacesPipe implements PipeTransform {
    transform(value: string, character: string): string {

    }
}
```
only mandatory arg for the transform method is **value**, everything else is optional needed for us to transform the data

# Filtering Data
should do filtering in component logic as opposed to creating a custom pipe for this

```
performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct) =>      product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1
    );
}
```
# Building Nested Components
we have used components in two ways so far:
1. As a Directive
    - e.g. putting `<pm-root></pm-root>` inside of index.html, selector for AppComponent.ts
2. As a Routing target
    - e.g. putting `<pm-products></pm-products>` inside of app.component.html
        - this would make it so that we are routed to product-list.component.html from index.html

## What Makes a Component Nest-able?
1. Its template only manages a fragment of a larger view
2. It has a selector
3. It optionally communicates  with its container

We call outer component as the **container** component, and the inner component as the **nested** component
- nested component needs to pass output to container
- container needs to provide input to nested

## Passing Data to a Nested Component (@Input)
```
export class StarComponent {
    @Input() rating: number;
    ...
}
```
## Raising an Event (@Output)
passes data from *nested* to *container*
this data **must** be an event

in star.component.ts
```
export class StarComponent {
    ...
    @Output() notify: EventEmitter<string> = new EventEmitter<string>();

    onClick() {
        this.notify.emit('clicked!');
    }
}
```
in star.component.html
`<div (click)='onClick()'>`

in product-list.component.html
```
<pm-star [rating]='product.starRating'
         (notify)='onNotify($event)'> ...
```

in product-list.component.ts
```
export class ProductListComponent {
    onNotify(message: string): void { ... }
}
```

$event is used to access the **event payload**

eg. the event payload here is The rating 3.7 was clicked!
```
this.ratingClicked.emit(`The rating ${this.rating} was clicked!`);
```

# Services and Dependency Injection
What is a service?

## Service
- a class with a focused purpose
- used for features that:
    - are independent from any particular component
    - provide shared data or logic across components
    - encapsulate external interactions

^easier to test, debug and reuse

## How Does It Work?
We can create an instance of the service from within a component...but that would be local to that component and cannot share resources with other components

Alternatively, we can register the service with Angular

- angular creates a single instance of the service class, called a **singleton** and holds onto it
    - specifically angular provides a built-in **injector**

- we register our services with angular's injector and it manages all our services/singletons
    - aka **dependency injection**

## Dependency Injection
Definition:
```
A coding pattern in which a class receives the instances of objects it needs (called dependencies) from an external source rather than creating them itself.
```
## Building a Service
1. Create the service class
2. define the metadata with a decorator (@Injectable())
3. Import what we need

## Registering a Service
### Register a provider
- Code that can create or return a service
- typically the service class itself

### Define in component OR Angular module metadata

### Registered in component:
- Injectable to component AND its children

e.g.
```
@Component({
  selector: 'pm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ProductService]
})
```

### Registered in Angular module:
- Injectable everywhere in the application

### Injecting the Service
where do we inject dependencies in typescript?
- in the **constructor**
```
export class ProductListComponent {
    constructor(privat _productService:ProductService){
    }    
}
```

# Retrieving Data Using Http
1. Web browser sends http **request** to Web server
2. Web Server retrieves data, often using a database
3. Web Server returns the data in an http response
4. Web application then processes the response

## Observables and Reactive Extensions
Observables:
- help us manage asynchornous data, such as data coming from a back-end service
- treat events as a collection
    - an array whose items arrive asynchronously over time
- are a proposed feature for ES 2016
- use **reactive extensions (RxJS)**
    - THIS IS DIFFERENT REACT, don't confuse the two!
- are used within angular

## Observable Operators
- methods on observables that compose new observables
- transform the source observable in some way
- process each value as it is emitted
    - do not wait for all data to process at once
- examples: map, filter, take, merge, ...

asynchronous data previously in javascript => **Promises**

## Promise vs Observable

| Promise                        | Observable                                         |
| ------------------------------ | -------------------------------------------------- |
| Provides a single future value | Emits multiple values over time                    |
| Not lazy                       | Lazy                                               |
| Not cancellable                | Cancellable                                        |
|                                | Supports map, filter, reduce and similar operators |

***lazy = does not emit values until subscribed to

***it is possible to use promises isntead of observables in angular

# Sending an Http Request
1. Product Data Service sends Get request to Http Service
2. Http Service sends GET req to Web Server
3. Web Server Response to Http Service
4. Http Response as an observable back to our data service

e.g.
```
import {HttpClient} from '@angular/common/http';

@Injectable()
export class ProductService {
    private _productUrl='www.xxx.com/api/products'

    constructor(private _http: HttpClient){}

    getProducts(): Observable<IProduct[]> {
        return this._http.get<IProduct[]>(this._productUrl);
    }
}
```
NOTE: the http request returns to us the type we specified in the <>, so we don't need to convert it from JSON

# Exception Handling
1. do operator
    - allows us to peek at the data w/o disturbing the flow
2. catch
    - allows us to pass a error handler

eg. 
```
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
...
getProducts(): Observable<IProduct[]> {
    return this._http.get<IProduct[]>(this._productUrl)
        .do(data => console.log('All: ' + JSON.stringify(data)))
        .catch(this.handleError);
}

private handleError(err: HttpErrorResponse){}
```

# Subscribing to an Observable
//Promise
```
x.then(valueFn, errorFn)
```

//Observable
```
x.subscribe(valueFn, errorFn)
x.subscribe(valueFn, errorFn, completeFn)
let sub = x.subscribe(valueFn, errorFn, completeFn)
```

# Http Checklist
Setup
1. Add HttpClientModule to the imports array of one of the application's Angular Modules

Service

2. Import what we need
3. Define a dependency for the http client service
    - use a constructor parameter
4. Create a method for each http request
5. Call the desired http method, such as get
    - Pass in the Url
6. Use generics to specify the returned type
7. Add error handling

Subscribing

8. Call the subscribe method of the returned observable
9. Provide a function to handle an emitted item
    - Normally assigns a property to the returned JSON object
10. Provide an error function to handle any returned errors

# Angular CLI
`ng g c products/product-detail.component --flat`

ng  - angular
g   - generate
c   - component
--flat -no extra folder

we will learn much more about angular cli later...

## Safe Navigation Operator (?)
`{{pageTitle + ': ' +product?.productName}}`
- guards against undefined or null values
- simply returns null and does not access the property or give us an error
- down side is that it does not work with ngModel two way-binding
`[(ngModel)]='product?.productName'`
- can use ngIf to check if the object exists instead
- `<div class="panel panel-primary" *ngIf="product">`

# How Routing Works
an angular application is a single page application
- that means all of our views are displayed in one page; normally defined in the index.html file
- each of the 5, 10, 100s of views takes turn appearning on this single page
- routing manges how and when each view displayed
1. Configure a route for each component
2. Define options/actions
3. Tie a route to each option/action
4. Activate the route based on user action
5. Activating a route displays he component's view

## Configuring Routes
1. Define the base elemtn in index.html
2. Add RouterModule, in app.module.ts:

`import { RouterModule } from '@angular/router';`
- registers the router service
- declares the router directives
- exposes configured roots

- to establish the routes of our application, inside of app.module.ts, add each route (RouterModule.forRoot), order matters:
```
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([], { useHash: true })
  ],
```
NOTE: this config is for us to use hash-style routes instead of HTML5 routes

- path
    - url segment for the route
    - no leading slash
    - " for default root
    - '**' for wildcard route
- component
    - not string namel not enclosed in quotes

e.g. www.acm.com/#/products vs www.acm.com/products
- using HTML5 routes, we would need to customize the routing inside of our web server

```
    RouterModule.forRoot([
      { path: 'products', component: ProductListComponent },
      { path: 'products/:id', component: ProductDetailComponent },
      { path: 'welcome', component: WelcomeComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', component: PageNotFoundComponent }
    ], { useHash: true })
```
NOTE: the : in products/:id is used for arguments
- e.g. www.myWebService.com/#/products/5, where the id is passed value of 5
- order of routes matter, app looks from top to bottom searching in list

1. In index.html `<base href="/">`
2. In app.module.ts `import { RouterModule } from '@angular/router';`
3. In app.module.ts 
```
    imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'products', component: ProductListComponent },
      { path: 'products/:id', component: ProductDetailComponent },
      { path: 'welcome', component: WelcomeComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', component: PageNotFoundComponent }
    ], { useHash: true })
  ],
```
## Navigatin the Application Routes
- menu option, link, image or button that activates a route
- typing the Url in the address bar / bookmark
- the browser's forwrd or back buttons

## Tying Routes to Actions
- using the **routerLink** directive in templates
    - add to any kind of clickable element
    - enclose in quare brackets
- Bind to a link parameters array
    - first element is the path
    - all other elements are route parameters
```
  template: `
    <ul class='nav navbar-nav'>
      <li><a [routerLink]="['/welcome']">Home</a></li>
      <li><a [routerLink]="['/products']">Product List</a></li>
    </ul>
  `
```
## Placing the Views
- when a route is activated, the associated component's template is displayed
- we specify where it is displayed using the `<router-outlet></router-outlet>` in the host component's template
    - identifies where to display the routed component's view
    - specified in the host component's template

### Nest-able components
- define a selector
- nest in another component
- no route required

### Routed components
- no selector
- configure routes
- tie routes to actions
- place the view

# Navigation and Routing Additional Techniques
- passing parameters to a route
- activating a route with code
- protecting routes with guards

## Passing Parameters to a Route
1. route definition `{ path: 'products/:id', component: ProductDetailComponent },`
2. Tie route to action
```
<td>
    <a [routerLink]="['/products', product.productId]">
        {{ product.productName }}
    </a>
</td>
```
## Reading Parameters from a Route
1. import ActivatedRoute
    - don't need to register this because it is registered as part of the RouterModule to our app.module.ts already
    - `import { ActivatedRoute } from '@angular/router';`
2. add dependency of ActivatedRoute in constructor
    - `constructor(private _route: ActivatedRoute) { }`
    - two ways to get value from this:
        - 1. snapshot, gets initial value
            - `const id = +this._route.snapshot.paramMap.get('id');`
        - 2. observable, if expect value to change w/o leaving the page

## Activating a Route with Code
1. use Router service
    - add a dependency `    private _router: Router) { }` by adding constructor parameter
2. create callback function
```
    onBack(): void {
        this._router.navigate(['/products']);
    }
```  
3. call the function from an invoked event `    <a class="btn btn-default" (click)='onBack()' style="width:80px">`

## Protecting Routes with Guards
- there may be times we want to limit access to routes
- e.g only for administrators
- or we want a user to confirm saving before leaving a page

we use Guards for this:
- CanActivate
    - Guard navigation to a route
- CanDeactivate
    - guard navigation from a route
- Resolve
    - pre-fetch data before activating a route
- CanLoad
    - Prevent asynchronous routing

## Building a Guard
- we can create our guard using angular cli
    - `ng g s products/product-guard.service -m app.module`
    - s for service
    - followed by service path/name
    - by default angular cli won't register our service
    - -m tells it which module to register the service in; followed by the module file name

this follows common pattern we use throughout Angular:
1. create a class `export class ProductGuardService implements CanActivate`
2. add a decorator `@Injectable()`
3. import what we need

```
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
```
4. implement the appropiate method for the guard
```
 canActivate(route: ActivatedRouteSnapshot): boolean {
    const id = +route.url[1].path;
    if (isNaN(id) || id < 1) {
      alert('Invalid product Id');
      this._router.navigate(['/products']);
      return false;
    }
    return true;
  }
```
- for simple cases we can return a boolean, for more complex we can return an observable or a promise
5. because the Guard is a service, we need to register it with Angular's injector
    - unlike other services, the guard's service provider must be provided at the angular modular level
    - by providing the service at the module level, the module can use these services during the navigation process 
```
import { ProductGuardService } from './products/product-guard.service';
...
@NgModule({
...
  providers: [ProductGuardService]
})
```

6. next we need to hook-up this guard to the appropiate route
```
@NgModule({
...
  imports: [
    ...
    RouterModule.forRoot([
        ...
        {
            path: 'products/:id',
            canActivate: [ProductGuardService],
            component: ProductDetailComponent
        },
    ], { useHash: true })
})
```

# Angular Modules

## What is an Angular Module?
- A class with an **NgModule** decorator
- Its purpose:
    - Organize the pieces of our application
    - Arrange them into blocks
    - Extend our application with capabilities from external libraries
    - Provide a template resolution environment
- Aggregate and re-export

Angular Modules
- declares and bootstraps components, directives and pipes
- exports angular modules, modules, 3rd party modules, component, directives, and pipes
- imports angular modules, modules, 3rd party modules, component, directives, and pipes
- register service providers

We can think of an angular module as a box
- define components inside the box or imort another module which has the component already inside of it
- ngFor and ngIf inside BrowserModule/CommonModule

Template Resolution Environment
- module determines what is available to template in each component

## Bootstrap Array
- every ng application has at least one module `AppModule` and one COmponent `AppComponent`
- bootstrap array defines the starting component/root component when application launches
- Every application must bootstrap at least one component, the root application component
- The bootstrap array should only be used in the root application module, AppModule.

## Declaration Array
- defines components, directives and pipes which belong to this module
- every component, directive and pipe we create must belong to ONE AND ONLY ONE Angular module
- only declare components, directives and pipes; don't declare other services or classes, etc.
- never re-declare components, directives or pipes that belong to another module
- all declared components, directives and pipes are private by default
    - they are only accesible to other components, directives and pipes declared in the same module
- ng module provides the template resolution environment for its component templates
    - components/directives/pipes used by a component of a particular module are resolved WITHIN that module

## Exports Array
- exports a module's component/directives/pipes, @angular modules, other 3rd party modules, or our own modules
- Export any component, directive or pipe if other components need it
- re-export modules to re-export their components,directives and pipes
- we can re-export something without importing it first
- never export a service
    - they are registered with the root application injector
    - avail for injection into any class within the application; no point exporting, already shared throughout the application

## Imports Array
- extend functionality by importing capabilites from other angular modules
- import supporting modules which export components, directives or pipes
- importing a modules makes avail any exported components, directives and pieps from that module
- only import what this module needs
- importing a module does NOT provide access to its imported modules
    - imports are NOT inherited
    - UNLESS the imported module re-exports its own imported modules, then the module which imported the module can use its imported modules
```
When thinking about modules, think more about a BOX than a TREE structure.
```
## Providers Array
- allows us to register service providers at the module level
- any service provider added to the providers array is registered at the root of the application
    - if we register the provider to a module
    - if we want to encapsulate the service, and only have it provided to a certain component, register the service at the component level isnteead of at module level
- don't add services to the providers array of a shared module
    - consider building a `CoreModule` for services and importing it once in the AppModule
    - we want to follow singleton pattern
- routing guards must be added to the providers array of an Angular module

## Creating a new Feature Module using NG CLI
`ng g m products/product --flat -m app.module`
- m for module
- --flat to not generate new folder
- -m to import product module into app.module
- NOTE: CLI auto imports CommonModule for us since it is required in EVERY feature module

## Router differences for Root Module vs Feature Modules
RouterModule.forRoot
- registers router service
- declares router directives
- exposes configured routes

RouterModule.forChild
- declares router differences
- exposes configured routes

## Defining a Shared Module
- can package commonly used modules/components, re-export everything from this SharedModule
- then simply import this SharedModule into every module which requires those common functionalities
- `ng g m shared/shared --flat -m products/product.module`

## Revisiting App Module
- every browser application must import **BrowserModule**
    - registers critical application service providers, imports and exports CommonModule (exports directives such as ngIf and ngFor)
- also imports **HttpClientModule**
- import **RouterModule** and call .forRoot, passing in configured routes for the application
- then import **each feature module**

NOTE: we do `    RouterModule.forChild([` for each feature module instead of .forRoot() to ensure that we do not register the service a second time

## Module Structure
- Root application module (called AppModule)
- Feature modules - for each feature set, e.g. product, customer, accounting modules
- Shared module (SharedModule)
    - primarily use the export and declaration arrays
- Core module (CoreModule)
    - if u have a set of services that u want to ensure are loaded when the application is loaded
    - be sure to only import the CoreModule once, in the AppModule since this is for services, it has providers, none of which is exported 
- Routing modules

## NgModule Metadata
- used to decorate a class which represents an angular module
- Bootstrap: Startup component(s)
- Declarations: What belogns to this module
- Exports: What an importing module can use
- Imports: Supporting modules
- Providers: Lists service providers

# Building, Testing, and Deploying with the CLI


---
Questions I have
---
- What does adding + in front of string do in JavaScript?

    `let id = +route.url[1].path;` vs `let id = route.url[1].path;`
    - **It converts the string to a number**
- What is a promise?
- How is a promise different from an observable?