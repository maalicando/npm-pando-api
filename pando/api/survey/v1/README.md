# Pando Survey APIs #

## Authentication ##
Authentication is controlled by the Pando Identity Server. An `"Authorization", "Bearer {Token}"` Header is required on all requests. The Token should be the JWT Token provided by the Pando Identity Server.

### Users ###
The Pando Identity Server has two kinds of Users.
​
* Client
    * An API Client for an Organization who uses Pando TPV Surveys.
* User
    * A User who has signed up for an Account with Pando.
    * This may be a Representative or Agent of an Organization.
    * This may also be a customer/patron of an Organization.
​
When a Survey Instance is created and sent to a Customer, a new Pando User is created. When the Customer clicks on the link and installs the Accord App, they are logged in to the device unless another User was already logged in. If another User *was* already logged in, the placeholder User is eliminated and the Survey Instance is reassigned to the logged-in Pando User. The same happens if the Customer elects to create a Pando Account; this Survey Instance is reassigned to that Pando Account. The same logic happens on the Accord website.

All Surveys should be executed with User credentials. Admin endpoints may be executed with User _or_ Client credentials. Client credentials will primarily be used to manage Users or generate Survey Instances programmatically, though a privileged User may do this as well.

## Authorization ##
Authorization is controlled Claims on the Authenticated User's JWT Token.
Claims are granted by the Organization, via API call or through the Admin site.

When creating a JWT Token, the Client requests Scopes which the User must consent to.

## Scopes ##
The following Scopes are recognized by the Pando TPV Survey APIs.
​
* `profile`
    * Required for Survey Instance Execution
    * Permit Client to:
        * Read Name, Phone Number, and/or E-Mail Address and other similar information.
* `survey`
    * Required for Survey Instance Execution
    * Permit Client to:
        * Read Customer Data necessary to Execute a TPV Survey.
        * View Completed Surveys.
* `survey:admin`
    * Required for Survey Template Administration
    * Permit Client to:
        * Create a new Survey template.
        * Make changes for the next Survey version.
        * Publish a new Suvey version.
* `survey:reports`
    * Required for Survey Report Administration
    * Permit Client to:
        * Pull reports of Survey data for the organization

## Claims ##
Claims have a key and value. The key is the Resource controlled by the Claim, and the value is the Permission granted for that Resource. Claims are set on the Pando Identity Server and are derived from the JWT Token produced by the Pando Identity Server; they are not set manually when making an API call.

### Values ###
Unless otherwise specified in the Types definition below, these are the values used in claims.
* __read__
    * Ability to view the resource.
* __write__
    * Ability to create or update the resource.
    * Ability to execute procedures upon the resource.
    * Does *not* implicitly provide *read* access to the resource; this must be granted explicitly.
* __delete__
    * Ability to delete the resource.

### Types ###
* `survey:template`
    * A Survey definition and associated metadata.
* `survey:instance`
    * An Instance of a Survey that can be executed by a User.
* `survey:reports`
    * Reports containing aggregated Survey data.
    * Values
        * `instances`
            * Ability to pull reports containing Survey Instance data.
* `personal_info`
    * Personal information, normally stored as a record in the Pando Vault (which is encrypted).


