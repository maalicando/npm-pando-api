# Pando ESign V1


## Authentication ##
Authentication is controlled by the Pando Identity Server. An `"Authorization", "Bearer {Token}"` Header is required on all requests. The Token should be the JWT Token provided by the Pando Identity Server.
​
### Users ###
The Pando Identity Server has two kinds of Users.
​
* Client
    * An API Client for an Organization who uses Pando TPV Surveys.
* User
    * A User who has signed up for an Account with Pando.
    * This may be a Representative or Agent of an Organization.
    * This may also be a customer/patron of an Organization.​

When an ESign Request is created, additional ESign Signatory resources are attached for each Signatory involved in the request. A Placeholder Pando User is created for each Signatory, unless this has already been created (for instance, by the Survey service when creating a Survey Instance). When the Customer clicks on the link and is redirected to the ESign web client, they are logged in to the browser unless another User was already logged in. If another User *was* already logged in, the the logged-in Pando User is granted Ownership over the ESign Signatory resource (and by extension the ESign Request). The same happens if the Customer elects to create a Pando Account; ownership over this ESign Signatory resource is granted to the new Pando Account.

All ESign Requests should be executed with User credentials. All Admin endpoints should also be executed with User credentials (the User must have sufficient claims to administrate). Client credentials will primarily be used to manage Users or generate ESign Requests / Signatories programmatically, though a privileged User may do this as well.

## Authorization ##
Authorization is controlled Claims on the Authenticated User's JWT Token.
Claims are granted by the Organization, via API call or through the Admin site.

When creating a JWT Token, the Client requests Scopes which the User must consent to.
​
## Scopes ##
The following Scopes are recognized by the Pando TPV Survey APIs.
​
* `profile`
    * Required
    * Permit Client to:
        * Read Name, Phone Number, and/or E-Mail Address and other similar information.
* `esign:request`
    * Required
    * Permit Client to:
        * Read Customer Data necessary to Execute an ESign Request.
        * View Completed ESign Requests.
        * Execute ESign Requests on behalf of an owned ESign Signatory.
* `esign:admin`
    * Permit Client to:
        * Administrate ESign Templates and ESign Requests
​
## Claims ##
Claims have a key and value. The key is the Resource controlled by the Claim, and the value is the Permission granted for that Resource. Claims are set on the Pando Identity Server and are derived from the JWT Token produced by the Pando Identity Server; they are not set manually when making an API call.

### Resources ###
* `esign:template`
    * An ESign Template definition and associated metadata.
* `esign:request`
    * An ESign Request resource. This is a group of ESign documents that must be signed by one or more Signatory.
* `esign:signatory`
    * An ESign Signatory resource. Using this resource, a User is able to execute an ESign Request on behalf of a Signatory.
    * Multiple Signatory resources may exist per ESign Request.
        * Every Signatory in the Request is considered an "owner" of the Request, meaning they can view the resulting documents and the real-time status of the request.
        * Only owners of an ESign Signatory Resource are able to Sign, Decline, Opt-in, Opt-out, or Acknowledge documents on behalf of the Signatory in question.
            * Ownership is strictly controlled by APIs
                * `AdminService.CreateRequest` will set the intial Signatory user.
                * `AdminService.ExecAddSignatoryUser` can add another owner to a Signatory.
    * Organization-Scoped `write` and `delete` access is not permitted for `esign:signatory` resources.
        * `esign:signatory,{org}:write` and `esign:signatory,{org}:delete` won't do anything.
* `profile`
    * A User's Name, Contact Info, and the list of Claims the User has.
​
### Permissions ###
* __read__
    * Ability to view the resoruce.
* __write__
    * Ability to create or update the resource.
    * Ability to execute procedures upon the resource.
    * Does *not* implicitly provide *read* access to the resource; this must be granted explicitly.
* __delete__
    * Ability to delete the resource.
​