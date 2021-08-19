# Pando Contact Service V1


## Authentication ##
Authentication is controlled by the Pando Identity Server. An `"Authorization", "Bearer {Token}"` Header is required on all requests. The Token should be the JWT Token provided by the Pando Identity Server.

### Users ###
The Pando Identity Server has two kinds of Users.

* Client
    * An API Client for an Organization who uses the contact service.
* User
    * A User who has signed up for an Account with Pando.
    * This may be a Representative or Agent of an Organization.
    * This may also be a customer/patron of an Organization.

## Authorization ##
Authorization is controlled Claims on the Authenticated User's JWT Token.
Claims are granted by the Organization, via API call or through the Admin site.

When creating a JWT Token, the Client requests Scopes which the User must consent to.

## Scopes ##
The following Scopes are recognized by the contact service API.

* `contact`
    * Required
    * Permit Client to:
        * Use the contact service

## Claims ##
Claims have a key and value. The key is the Resource controlled by the Claim, and the value is the Permission granted for that Resource. Claims are set on the Pando Identity Server and are derived from the JWT Token produced by the Pando Identity Server; they are not set manually when making an API call.

### Resources ###
* `contact`
    * Contact information for an account.
* `contact:account`
    * Information about an account.
* `contact:address`
    * Information about the address for an account.

### Permissions ###
* __read__
    * Ability to view the resource.
* __write__
    * Ability to create or update the resource.
    * Ability to execute procedures upon the resource.
    * Does *not* implicitly provide *read* access to the resource; this must be granted explicitly.
* __delete__
    * Ability to delete the resource.
    