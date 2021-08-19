/**
 * @fileoverview gRPC-Web generated client stub for pando.api.contact.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js')

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js')

var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js')

var pando_api_extensions_pb = require('../../../../pando/api/extensions_pb.js')

var pando_api_shared_pb = require('../../../../pando/api/shared_pb.js')
const proto = {};
proto.pando = {};
proto.pando.api = {};
proto.pando.api.contact = {};
proto.pando.api.contact.v1 = require('./contact_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.pando.api.contact.v1.ContactServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.pando.api.contact.v1.ContactServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pando.api.contact.v1.Account,
 *   !proto.pando.api.contact.v1.Account>}
 */
const methodDescriptor_ContactService_CreateAccount = new grpc.web.MethodDescriptor(
  '/pando.api.contact.v1.ContactService/CreateAccount',
  grpc.web.MethodType.UNARY,
  proto.pando.api.contact.v1.Account,
  proto.pando.api.contact.v1.Account,
  /**
   * @param {!proto.pando.api.contact.v1.Account} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pando.api.contact.v1.Account.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pando.api.contact.v1.Account,
 *   !proto.pando.api.contact.v1.Account>}
 */
const methodInfo_ContactService_CreateAccount = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pando.api.contact.v1.Account,
  /**
   * @param {!proto.pando.api.contact.v1.Account} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pando.api.contact.v1.Account.deserializeBinary
);


/**
 * @param {!proto.pando.api.contact.v1.Account} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pando.api.contact.v1.Account)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pando.api.contact.v1.Account>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pando.api.contact.v1.ContactServiceClient.prototype.createAccount =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pando.api.contact.v1.ContactService/CreateAccount',
      request,
      metadata || {},
      methodDescriptor_ContactService_CreateAccount,
      callback);
};


/**
 * @param {!proto.pando.api.contact.v1.Account} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pando.api.contact.v1.Account>}
 *     Promise that resolves to the response
 */
proto.pando.api.contact.v1.ContactServicePromiseClient.prototype.createAccount =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pando.api.contact.v1.ContactService/CreateAccount',
      request,
      metadata || {},
      methodDescriptor_ContactService_CreateAccount);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pando.api.contact.v1.Address,
 *   !proto.pando.api.contact.v1.Address>}
 */
const methodDescriptor_ContactService_CreateAddress = new grpc.web.MethodDescriptor(
  '/pando.api.contact.v1.ContactService/CreateAddress',
  grpc.web.MethodType.UNARY,
  proto.pando.api.contact.v1.Address,
  proto.pando.api.contact.v1.Address,
  /**
   * @param {!proto.pando.api.contact.v1.Address} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pando.api.contact.v1.Address.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pando.api.contact.v1.Address,
 *   !proto.pando.api.contact.v1.Address>}
 */
const methodInfo_ContactService_CreateAddress = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pando.api.contact.v1.Address,
  /**
   * @param {!proto.pando.api.contact.v1.Address} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pando.api.contact.v1.Address.deserializeBinary
);


/**
 * @param {!proto.pando.api.contact.v1.Address} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pando.api.contact.v1.Address)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pando.api.contact.v1.Address>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pando.api.contact.v1.ContactServiceClient.prototype.createAddress =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pando.api.contact.v1.ContactService/CreateAddress',
      request,
      metadata || {},
      methodDescriptor_ContactService_CreateAddress,
      callback);
};


/**
 * @param {!proto.pando.api.contact.v1.Address} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pando.api.contact.v1.Address>}
 *     Promise that resolves to the response
 */
proto.pando.api.contact.v1.ContactServicePromiseClient.prototype.createAddress =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pando.api.contact.v1.ContactService/CreateAddress',
      request,
      metadata || {},
      methodDescriptor_ContactService_CreateAddress);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pando.api.contact.v1.Contact,
 *   !proto.pando.api.contact.v1.Contact>}
 */
const methodDescriptor_ContactService_CreateContact = new grpc.web.MethodDescriptor(
  '/pando.api.contact.v1.ContactService/CreateContact',
  grpc.web.MethodType.UNARY,
  proto.pando.api.contact.v1.Contact,
  proto.pando.api.contact.v1.Contact,
  /**
   * @param {!proto.pando.api.contact.v1.Contact} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pando.api.contact.v1.Contact.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pando.api.contact.v1.Contact,
 *   !proto.pando.api.contact.v1.Contact>}
 */
const methodInfo_ContactService_CreateContact = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pando.api.contact.v1.Contact,
  /**
   * @param {!proto.pando.api.contact.v1.Contact} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pando.api.contact.v1.Contact.deserializeBinary
);


/**
 * @param {!proto.pando.api.contact.v1.Contact} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pando.api.contact.v1.Contact)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pando.api.contact.v1.Contact>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pando.api.contact.v1.ContactServiceClient.prototype.createContact =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pando.api.contact.v1.ContactService/CreateContact',
      request,
      metadata || {},
      methodDescriptor_ContactService_CreateContact,
      callback);
};


/**
 * @param {!proto.pando.api.contact.v1.Contact} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pando.api.contact.v1.Contact>}
 *     Promise that resolves to the response
 */
proto.pando.api.contact.v1.ContactServicePromiseClient.prototype.createContact =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pando.api.contact.v1.ContactService/CreateContact',
      request,
      metadata || {},
      methodDescriptor_ContactService_CreateContact);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pando.api.contact.v1.GetAccountRequest,
 *   !proto.pando.api.contact.v1.Account>}
 */
const methodDescriptor_ContactService_GetAccount = new grpc.web.MethodDescriptor(
  '/pando.api.contact.v1.ContactService/GetAccount',
  grpc.web.MethodType.UNARY,
  proto.pando.api.contact.v1.GetAccountRequest,
  proto.pando.api.contact.v1.Account,
  /**
   * @param {!proto.pando.api.contact.v1.GetAccountRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pando.api.contact.v1.Account.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pando.api.contact.v1.GetAccountRequest,
 *   !proto.pando.api.contact.v1.Account>}
 */
const methodInfo_ContactService_GetAccount = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pando.api.contact.v1.Account,
  /**
   * @param {!proto.pando.api.contact.v1.GetAccountRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pando.api.contact.v1.Account.deserializeBinary
);


/**
 * @param {!proto.pando.api.contact.v1.GetAccountRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pando.api.contact.v1.Account)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pando.api.contact.v1.Account>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pando.api.contact.v1.ContactServiceClient.prototype.getAccount =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pando.api.contact.v1.ContactService/GetAccount',
      request,
      metadata || {},
      methodDescriptor_ContactService_GetAccount,
      callback);
};


/**
 * @param {!proto.pando.api.contact.v1.GetAccountRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pando.api.contact.v1.Account>}
 *     Promise that resolves to the response
 */
proto.pando.api.contact.v1.ContactServicePromiseClient.prototype.getAccount =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pando.api.contact.v1.ContactService/GetAccount',
      request,
      metadata || {},
      methodDescriptor_ContactService_GetAccount);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pando.api.contact.v1.GetAddressRequest,
 *   !proto.pando.api.contact.v1.Address>}
 */
const methodDescriptor_ContactService_GetAddress = new grpc.web.MethodDescriptor(
  '/pando.api.contact.v1.ContactService/GetAddress',
  grpc.web.MethodType.UNARY,
  proto.pando.api.contact.v1.GetAddressRequest,
  proto.pando.api.contact.v1.Address,
  /**
   * @param {!proto.pando.api.contact.v1.GetAddressRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pando.api.contact.v1.Address.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pando.api.contact.v1.GetAddressRequest,
 *   !proto.pando.api.contact.v1.Address>}
 */
const methodInfo_ContactService_GetAddress = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pando.api.contact.v1.Address,
  /**
   * @param {!proto.pando.api.contact.v1.GetAddressRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pando.api.contact.v1.Address.deserializeBinary
);


/**
 * @param {!proto.pando.api.contact.v1.GetAddressRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pando.api.contact.v1.Address)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pando.api.contact.v1.Address>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pando.api.contact.v1.ContactServiceClient.prototype.getAddress =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pando.api.contact.v1.ContactService/GetAddress',
      request,
      metadata || {},
      methodDescriptor_ContactService_GetAddress,
      callback);
};


/**
 * @param {!proto.pando.api.contact.v1.GetAddressRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pando.api.contact.v1.Address>}
 *     Promise that resolves to the response
 */
proto.pando.api.contact.v1.ContactServicePromiseClient.prototype.getAddress =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pando.api.contact.v1.ContactService/GetAddress',
      request,
      metadata || {},
      methodDescriptor_ContactService_GetAddress);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pando.api.contact.v1.GetContactRequest,
 *   !proto.pando.api.contact.v1.Contact>}
 */
const methodDescriptor_ContactService_GetContact = new grpc.web.MethodDescriptor(
  '/pando.api.contact.v1.ContactService/GetContact',
  grpc.web.MethodType.UNARY,
  proto.pando.api.contact.v1.GetContactRequest,
  proto.pando.api.contact.v1.Contact,
  /**
   * @param {!proto.pando.api.contact.v1.GetContactRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pando.api.contact.v1.Contact.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pando.api.contact.v1.GetContactRequest,
 *   !proto.pando.api.contact.v1.Contact>}
 */
const methodInfo_ContactService_GetContact = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pando.api.contact.v1.Contact,
  /**
   * @param {!proto.pando.api.contact.v1.GetContactRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pando.api.contact.v1.Contact.deserializeBinary
);


/**
 * @param {!proto.pando.api.contact.v1.GetContactRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pando.api.contact.v1.Contact)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pando.api.contact.v1.Contact>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pando.api.contact.v1.ContactServiceClient.prototype.getContact =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pando.api.contact.v1.ContactService/GetContact',
      request,
      metadata || {},
      methodDescriptor_ContactService_GetContact,
      callback);
};


/**
 * @param {!proto.pando.api.contact.v1.GetContactRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pando.api.contact.v1.Contact>}
 *     Promise that resolves to the response
 */
proto.pando.api.contact.v1.ContactServicePromiseClient.prototype.getContact =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pando.api.contact.v1.ContactService/GetContact',
      request,
      metadata || {},
      methodDescriptor_ContactService_GetContact);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pando.api.contact.v1.GetAccountsRequest,
 *   !proto.pando.api.contact.v1.GetAccountsResponse>}
 */
const methodDescriptor_ContactService_GetAccounts = new grpc.web.MethodDescriptor(
  '/pando.api.contact.v1.ContactService/GetAccounts',
  grpc.web.MethodType.UNARY,
  proto.pando.api.contact.v1.GetAccountsRequest,
  proto.pando.api.contact.v1.GetAccountsResponse,
  /**
   * @param {!proto.pando.api.contact.v1.GetAccountsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pando.api.contact.v1.GetAccountsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pando.api.contact.v1.GetAccountsRequest,
 *   !proto.pando.api.contact.v1.GetAccountsResponse>}
 */
const methodInfo_ContactService_GetAccounts = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pando.api.contact.v1.GetAccountsResponse,
  /**
   * @param {!proto.pando.api.contact.v1.GetAccountsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pando.api.contact.v1.GetAccountsResponse.deserializeBinary
);


/**
 * @param {!proto.pando.api.contact.v1.GetAccountsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pando.api.contact.v1.GetAccountsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pando.api.contact.v1.GetAccountsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pando.api.contact.v1.ContactServiceClient.prototype.getAccounts =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pando.api.contact.v1.ContactService/GetAccounts',
      request,
      metadata || {},
      methodDescriptor_ContactService_GetAccounts,
      callback);
};


/**
 * @param {!proto.pando.api.contact.v1.GetAccountsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pando.api.contact.v1.GetAccountsResponse>}
 *     Promise that resolves to the response
 */
proto.pando.api.contact.v1.ContactServicePromiseClient.prototype.getAccounts =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pando.api.contact.v1.ContactService/GetAccounts',
      request,
      metadata || {},
      methodDescriptor_ContactService_GetAccounts);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pando.api.contact.v1.GetAddressesRequest,
 *   !proto.pando.api.contact.v1.GetAddressesResponse>}
 */
const methodDescriptor_ContactService_GetAddresses = new grpc.web.MethodDescriptor(
  '/pando.api.contact.v1.ContactService/GetAddresses',
  grpc.web.MethodType.UNARY,
  proto.pando.api.contact.v1.GetAddressesRequest,
  proto.pando.api.contact.v1.GetAddressesResponse,
  /**
   * @param {!proto.pando.api.contact.v1.GetAddressesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pando.api.contact.v1.GetAddressesResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pando.api.contact.v1.GetAddressesRequest,
 *   !proto.pando.api.contact.v1.GetAddressesResponse>}
 */
const methodInfo_ContactService_GetAddresses = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pando.api.contact.v1.GetAddressesResponse,
  /**
   * @param {!proto.pando.api.contact.v1.GetAddressesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pando.api.contact.v1.GetAddressesResponse.deserializeBinary
);


/**
 * @param {!proto.pando.api.contact.v1.GetAddressesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pando.api.contact.v1.GetAddressesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pando.api.contact.v1.GetAddressesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pando.api.contact.v1.ContactServiceClient.prototype.getAddresses =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pando.api.contact.v1.ContactService/GetAddresses',
      request,
      metadata || {},
      methodDescriptor_ContactService_GetAddresses,
      callback);
};


/**
 * @param {!proto.pando.api.contact.v1.GetAddressesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pando.api.contact.v1.GetAddressesResponse>}
 *     Promise that resolves to the response
 */
proto.pando.api.contact.v1.ContactServicePromiseClient.prototype.getAddresses =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pando.api.contact.v1.ContactService/GetAddresses',
      request,
      metadata || {},
      methodDescriptor_ContactService_GetAddresses);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pando.api.contact.v1.GetContactsRequest,
 *   !proto.pando.api.contact.v1.GetContactsResponse>}
 */
const methodDescriptor_ContactService_GetContacts = new grpc.web.MethodDescriptor(
  '/pando.api.contact.v1.ContactService/GetContacts',
  grpc.web.MethodType.UNARY,
  proto.pando.api.contact.v1.GetContactsRequest,
  proto.pando.api.contact.v1.GetContactsResponse,
  /**
   * @param {!proto.pando.api.contact.v1.GetContactsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pando.api.contact.v1.GetContactsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pando.api.contact.v1.GetContactsRequest,
 *   !proto.pando.api.contact.v1.GetContactsResponse>}
 */
const methodInfo_ContactService_GetContacts = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pando.api.contact.v1.GetContactsResponse,
  /**
   * @param {!proto.pando.api.contact.v1.GetContactsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pando.api.contact.v1.GetContactsResponse.deserializeBinary
);


/**
 * @param {!proto.pando.api.contact.v1.GetContactsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pando.api.contact.v1.GetContactsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pando.api.contact.v1.GetContactsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pando.api.contact.v1.ContactServiceClient.prototype.getContacts =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pando.api.contact.v1.ContactService/GetContacts',
      request,
      metadata || {},
      methodDescriptor_ContactService_GetContacts,
      callback);
};


/**
 * @param {!proto.pando.api.contact.v1.GetContactsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pando.api.contact.v1.GetContactsResponse>}
 *     Promise that resolves to the response
 */
proto.pando.api.contact.v1.ContactServicePromiseClient.prototype.getContacts =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pando.api.contact.v1.ContactService/GetContacts',
      request,
      metadata || {},
      methodDescriptor_ContactService_GetContacts);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pando.api.contact.v1.GetCountriesRequest,
 *   !proto.pando.api.contact.v1.GetCountriesResponse>}
 */
const methodDescriptor_ContactService_GetCountries = new grpc.web.MethodDescriptor(
  '/pando.api.contact.v1.ContactService/GetCountries',
  grpc.web.MethodType.UNARY,
  proto.pando.api.contact.v1.GetCountriesRequest,
  proto.pando.api.contact.v1.GetCountriesResponse,
  /**
   * @param {!proto.pando.api.contact.v1.GetCountriesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pando.api.contact.v1.GetCountriesResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pando.api.contact.v1.GetCountriesRequest,
 *   !proto.pando.api.contact.v1.GetCountriesResponse>}
 */
const methodInfo_ContactService_GetCountries = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pando.api.contact.v1.GetCountriesResponse,
  /**
   * @param {!proto.pando.api.contact.v1.GetCountriesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pando.api.contact.v1.GetCountriesResponse.deserializeBinary
);


/**
 * @param {!proto.pando.api.contact.v1.GetCountriesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pando.api.contact.v1.GetCountriesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pando.api.contact.v1.GetCountriesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pando.api.contact.v1.ContactServiceClient.prototype.getCountries =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pando.api.contact.v1.ContactService/GetCountries',
      request,
      metadata || {},
      methodDescriptor_ContactService_GetCountries,
      callback);
};


/**
 * @param {!proto.pando.api.contact.v1.GetCountriesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pando.api.contact.v1.GetCountriesResponse>}
 *     Promise that resolves to the response
 */
proto.pando.api.contact.v1.ContactServicePromiseClient.prototype.getCountries =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pando.api.contact.v1.ContactService/GetCountries',
      request,
      metadata || {},
      methodDescriptor_ContactService_GetCountries);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pando.api.contact.v1.GetStatesRequest,
 *   !proto.pando.api.contact.v1.GetStatesResponse>}
 */
const methodDescriptor_ContactService_GetStates = new grpc.web.MethodDescriptor(
  '/pando.api.contact.v1.ContactService/GetStates',
  grpc.web.MethodType.UNARY,
  proto.pando.api.contact.v1.GetStatesRequest,
  proto.pando.api.contact.v1.GetStatesResponse,
  /**
   * @param {!proto.pando.api.contact.v1.GetStatesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pando.api.contact.v1.GetStatesResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pando.api.contact.v1.GetStatesRequest,
 *   !proto.pando.api.contact.v1.GetStatesResponse>}
 */
const methodInfo_ContactService_GetStates = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pando.api.contact.v1.GetStatesResponse,
  /**
   * @param {!proto.pando.api.contact.v1.GetStatesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pando.api.contact.v1.GetStatesResponse.deserializeBinary
);


/**
 * @param {!proto.pando.api.contact.v1.GetStatesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pando.api.contact.v1.GetStatesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pando.api.contact.v1.GetStatesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pando.api.contact.v1.ContactServiceClient.prototype.getStates =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pando.api.contact.v1.ContactService/GetStates',
      request,
      metadata || {},
      methodDescriptor_ContactService_GetStates,
      callback);
};


/**
 * @param {!proto.pando.api.contact.v1.GetStatesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pando.api.contact.v1.GetStatesResponse>}
 *     Promise that resolves to the response
 */
proto.pando.api.contact.v1.ContactServicePromiseClient.prototype.getStates =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pando.api.contact.v1.ContactService/GetStates',
      request,
      metadata || {},
      methodDescriptor_ContactService_GetStates);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pando.api.contact.v1.UpdateAccountRequest,
 *   !proto.pando.api.contact.v1.Account>}
 */
const methodDescriptor_ContactService_UpdateAccount = new grpc.web.MethodDescriptor(
  '/pando.api.contact.v1.ContactService/UpdateAccount',
  grpc.web.MethodType.UNARY,
  proto.pando.api.contact.v1.UpdateAccountRequest,
  proto.pando.api.contact.v1.Account,
  /**
   * @param {!proto.pando.api.contact.v1.UpdateAccountRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pando.api.contact.v1.Account.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pando.api.contact.v1.UpdateAccountRequest,
 *   !proto.pando.api.contact.v1.Account>}
 */
const methodInfo_ContactService_UpdateAccount = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pando.api.contact.v1.Account,
  /**
   * @param {!proto.pando.api.contact.v1.UpdateAccountRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pando.api.contact.v1.Account.deserializeBinary
);


/**
 * @param {!proto.pando.api.contact.v1.UpdateAccountRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pando.api.contact.v1.Account)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pando.api.contact.v1.Account>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pando.api.contact.v1.ContactServiceClient.prototype.updateAccount =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pando.api.contact.v1.ContactService/UpdateAccount',
      request,
      metadata || {},
      methodDescriptor_ContactService_UpdateAccount,
      callback);
};


/**
 * @param {!proto.pando.api.contact.v1.UpdateAccountRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pando.api.contact.v1.Account>}
 *     Promise that resolves to the response
 */
proto.pando.api.contact.v1.ContactServicePromiseClient.prototype.updateAccount =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pando.api.contact.v1.ContactService/UpdateAccount',
      request,
      metadata || {},
      methodDescriptor_ContactService_UpdateAccount);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pando.api.contact.v1.UpdateContactRequest,
 *   !proto.pando.api.contact.v1.Contact>}
 */
const methodDescriptor_ContactService_UpdateContact = new grpc.web.MethodDescriptor(
  '/pando.api.contact.v1.ContactService/UpdateContact',
  grpc.web.MethodType.UNARY,
  proto.pando.api.contact.v1.UpdateContactRequest,
  proto.pando.api.contact.v1.Contact,
  /**
   * @param {!proto.pando.api.contact.v1.UpdateContactRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pando.api.contact.v1.Contact.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pando.api.contact.v1.UpdateContactRequest,
 *   !proto.pando.api.contact.v1.Contact>}
 */
const methodInfo_ContactService_UpdateContact = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pando.api.contact.v1.Contact,
  /**
   * @param {!proto.pando.api.contact.v1.UpdateContactRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pando.api.contact.v1.Contact.deserializeBinary
);


/**
 * @param {!proto.pando.api.contact.v1.UpdateContactRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pando.api.contact.v1.Contact)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pando.api.contact.v1.Contact>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pando.api.contact.v1.ContactServiceClient.prototype.updateContact =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pando.api.contact.v1.ContactService/UpdateContact',
      request,
      metadata || {},
      methodDescriptor_ContactService_UpdateContact,
      callback);
};


/**
 * @param {!proto.pando.api.contact.v1.UpdateContactRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pando.api.contact.v1.Contact>}
 *     Promise that resolves to the response
 */
proto.pando.api.contact.v1.ContactServicePromiseClient.prototype.updateContact =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pando.api.contact.v1.ContactService/UpdateContact',
      request,
      metadata || {},
      methodDescriptor_ContactService_UpdateContact);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pando.api.contact.v1.DeleteAccountRequest,
 *   !proto.pando.api.Empty>}
 */
const methodDescriptor_ContactService_DeleteAccount = new grpc.web.MethodDescriptor(
  '/pando.api.contact.v1.ContactService/DeleteAccount',
  grpc.web.MethodType.UNARY,
  proto.pando.api.contact.v1.DeleteAccountRequest,
  pando_api_shared_pb.Empty,
  /**
   * @param {!proto.pando.api.contact.v1.DeleteAccountRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_shared_pb.Empty.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pando.api.contact.v1.DeleteAccountRequest,
 *   !proto.pando.api.Empty>}
 */
const methodInfo_ContactService_DeleteAccount = new grpc.web.AbstractClientBase.MethodInfo(
  pando_api_shared_pb.Empty,
  /**
   * @param {!proto.pando.api.contact.v1.DeleteAccountRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_shared_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.pando.api.contact.v1.DeleteAccountRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pando.api.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pando.api.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pando.api.contact.v1.ContactServiceClient.prototype.deleteAccount =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pando.api.contact.v1.ContactService/DeleteAccount',
      request,
      metadata || {},
      methodDescriptor_ContactService_DeleteAccount,
      callback);
};


/**
 * @param {!proto.pando.api.contact.v1.DeleteAccountRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pando.api.Empty>}
 *     Promise that resolves to the response
 */
proto.pando.api.contact.v1.ContactServicePromiseClient.prototype.deleteAccount =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pando.api.contact.v1.ContactService/DeleteAccount',
      request,
      metadata || {},
      methodDescriptor_ContactService_DeleteAccount);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pando.api.contact.v1.DeleteAddressRequest,
 *   !proto.pando.api.Empty>}
 */
const methodDescriptor_ContactService_DeleteAddress = new grpc.web.MethodDescriptor(
  '/pando.api.contact.v1.ContactService/DeleteAddress',
  grpc.web.MethodType.UNARY,
  proto.pando.api.contact.v1.DeleteAddressRequest,
  pando_api_shared_pb.Empty,
  /**
   * @param {!proto.pando.api.contact.v1.DeleteAddressRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_shared_pb.Empty.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pando.api.contact.v1.DeleteAddressRequest,
 *   !proto.pando.api.Empty>}
 */
const methodInfo_ContactService_DeleteAddress = new grpc.web.AbstractClientBase.MethodInfo(
  pando_api_shared_pb.Empty,
  /**
   * @param {!proto.pando.api.contact.v1.DeleteAddressRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_shared_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.pando.api.contact.v1.DeleteAddressRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pando.api.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pando.api.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pando.api.contact.v1.ContactServiceClient.prototype.deleteAddress =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pando.api.contact.v1.ContactService/DeleteAddress',
      request,
      metadata || {},
      methodDescriptor_ContactService_DeleteAddress,
      callback);
};


/**
 * @param {!proto.pando.api.contact.v1.DeleteAddressRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pando.api.Empty>}
 *     Promise that resolves to the response
 */
proto.pando.api.contact.v1.ContactServicePromiseClient.prototype.deleteAddress =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pando.api.contact.v1.ContactService/DeleteAddress',
      request,
      metadata || {},
      methodDescriptor_ContactService_DeleteAddress);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pando.api.contact.v1.DeleteContactRequest,
 *   !proto.pando.api.Empty>}
 */
const methodDescriptor_ContactService_DeleteContact = new grpc.web.MethodDescriptor(
  '/pando.api.contact.v1.ContactService/DeleteContact',
  grpc.web.MethodType.UNARY,
  proto.pando.api.contact.v1.DeleteContactRequest,
  pando_api_shared_pb.Empty,
  /**
   * @param {!proto.pando.api.contact.v1.DeleteContactRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_shared_pb.Empty.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pando.api.contact.v1.DeleteContactRequest,
 *   !proto.pando.api.Empty>}
 */
const methodInfo_ContactService_DeleteContact = new grpc.web.AbstractClientBase.MethodInfo(
  pando_api_shared_pb.Empty,
  /**
   * @param {!proto.pando.api.contact.v1.DeleteContactRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_shared_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.pando.api.contact.v1.DeleteContactRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pando.api.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pando.api.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pando.api.contact.v1.ContactServiceClient.prototype.deleteContact =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pando.api.contact.v1.ContactService/DeleteContact',
      request,
      metadata || {},
      methodDescriptor_ContactService_DeleteContact,
      callback);
};


/**
 * @param {!proto.pando.api.contact.v1.DeleteContactRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pando.api.Empty>}
 *     Promise that resolves to the response
 */
proto.pando.api.contact.v1.ContactServicePromiseClient.prototype.deleteContact =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pando.api.contact.v1.ContactService/DeleteContact',
      request,
      metadata || {},
      methodDescriptor_ContactService_DeleteContact);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pando.api.contact.v1.ExecVerifyAddressRequest,
 *   !proto.pando.api.contact.v1.ExecVerifyAddressResponse>}
 */
const methodDescriptor_ContactService_ExecVerifyAddress = new grpc.web.MethodDescriptor(
  '/pando.api.contact.v1.ContactService/ExecVerifyAddress',
  grpc.web.MethodType.UNARY,
  proto.pando.api.contact.v1.ExecVerifyAddressRequest,
  proto.pando.api.contact.v1.ExecVerifyAddressResponse,
  /**
   * @param {!proto.pando.api.contact.v1.ExecVerifyAddressRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pando.api.contact.v1.ExecVerifyAddressResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pando.api.contact.v1.ExecVerifyAddressRequest,
 *   !proto.pando.api.contact.v1.ExecVerifyAddressResponse>}
 */
const methodInfo_ContactService_ExecVerifyAddress = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pando.api.contact.v1.ExecVerifyAddressResponse,
  /**
   * @param {!proto.pando.api.contact.v1.ExecVerifyAddressRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pando.api.contact.v1.ExecVerifyAddressResponse.deserializeBinary
);


/**
 * @param {!proto.pando.api.contact.v1.ExecVerifyAddressRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pando.api.contact.v1.ExecVerifyAddressResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pando.api.contact.v1.ExecVerifyAddressResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pando.api.contact.v1.ContactServiceClient.prototype.execVerifyAddress =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pando.api.contact.v1.ContactService/ExecVerifyAddress',
      request,
      metadata || {},
      methodDescriptor_ContactService_ExecVerifyAddress,
      callback);
};


/**
 * @param {!proto.pando.api.contact.v1.ExecVerifyAddressRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pando.api.contact.v1.ExecVerifyAddressResponse>}
 *     Promise that resolves to the response
 */
proto.pando.api.contact.v1.ContactServicePromiseClient.prototype.execVerifyAddress =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pando.api.contact.v1.ContactService/ExecVerifyAddress',
      request,
      metadata || {},
      methodDescriptor_ContactService_ExecVerifyAddress);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pando.api.contact.v1.ExecQualifyContactRequest,
 *   !proto.pando.api.contact.v1.ExecQualifyContactResponse>}
 */
const methodDescriptor_ContactService_ExecQualifyContact = new grpc.web.MethodDescriptor(
  '/pando.api.contact.v1.ContactService/ExecQualifyContact',
  grpc.web.MethodType.UNARY,
  proto.pando.api.contact.v1.ExecQualifyContactRequest,
  proto.pando.api.contact.v1.ExecQualifyContactResponse,
  /**
   * @param {!proto.pando.api.contact.v1.ExecQualifyContactRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pando.api.contact.v1.ExecQualifyContactResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pando.api.contact.v1.ExecQualifyContactRequest,
 *   !proto.pando.api.contact.v1.ExecQualifyContactResponse>}
 */
const methodInfo_ContactService_ExecQualifyContact = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pando.api.contact.v1.ExecQualifyContactResponse,
  /**
   * @param {!proto.pando.api.contact.v1.ExecQualifyContactRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pando.api.contact.v1.ExecQualifyContactResponse.deserializeBinary
);


/**
 * @param {!proto.pando.api.contact.v1.ExecQualifyContactRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pando.api.contact.v1.ExecQualifyContactResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pando.api.contact.v1.ExecQualifyContactResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pando.api.contact.v1.ContactServiceClient.prototype.execQualifyContact =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pando.api.contact.v1.ContactService/ExecQualifyContact',
      request,
      metadata || {},
      methodDescriptor_ContactService_ExecQualifyContact,
      callback);
};


/**
 * @param {!proto.pando.api.contact.v1.ExecQualifyContactRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pando.api.contact.v1.ExecQualifyContactResponse>}
 *     Promise that resolves to the response
 */
proto.pando.api.contact.v1.ContactServicePromiseClient.prototype.execQualifyContact =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pando.api.contact.v1.ContactService/ExecQualifyContact',
      request,
      metadata || {},
      methodDescriptor_ContactService_ExecQualifyContact);
};


module.exports = proto.pando.api.contact.v1;

