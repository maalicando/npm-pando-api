/**
 * @fileoverview gRPC-Web generated client stub for pando.api.identity.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js')

var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js')

var pando_api_extensions_pb = require('../../../../pando/api/extensions_pb.js')

var pando_api_shared_pb = require('../../../../pando/api/shared_pb.js')
const proto = {};
proto.pando = {};
proto.pando.api = {};
proto.pando.api.identity = {};
proto.pando.api.identity.v1 = require('./user_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.pando.api.identity.v1.UserServiceClient =
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
proto.pando.api.identity.v1.UserServicePromiseClient =
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
 *   !proto.pando.api.identity.v1.ClaimRequest,
 *   !proto.pando.api.identity.v1.Claim>}
 */
const methodDescriptor_UserService_CreateUserClaim = new grpc.web.MethodDescriptor(
  '/pando.api.identity.v1.UserService/CreateUserClaim',
  grpc.web.MethodType.UNARY,
  proto.pando.api.identity.v1.ClaimRequest,
  proto.pando.api.identity.v1.Claim,
  /**
   * @param {!proto.pando.api.identity.v1.ClaimRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pando.api.identity.v1.Claim.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pando.api.identity.v1.ClaimRequest,
 *   !proto.pando.api.identity.v1.Claim>}
 */
const methodInfo_UserService_CreateUserClaim = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pando.api.identity.v1.Claim,
  /**
   * @param {!proto.pando.api.identity.v1.ClaimRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pando.api.identity.v1.Claim.deserializeBinary
);


/**
 * @param {!proto.pando.api.identity.v1.ClaimRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pando.api.identity.v1.Claim)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pando.api.identity.v1.Claim>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pando.api.identity.v1.UserServiceClient.prototype.createUserClaim =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pando.api.identity.v1.UserService/CreateUserClaim',
      request,
      metadata || {},
      methodDescriptor_UserService_CreateUserClaim,
      callback);
};


/**
 * @param {!proto.pando.api.identity.v1.ClaimRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pando.api.identity.v1.Claim>}
 *     Promise that resolves to the response
 */
proto.pando.api.identity.v1.UserServicePromiseClient.prototype.createUserClaim =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pando.api.identity.v1.UserService/CreateUserClaim',
      request,
      metadata || {},
      methodDescriptor_UserService_CreateUserClaim);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pando.api.identity.v1.ClaimRequest,
 *   !proto.pando.api.Empty>}
 */
const methodDescriptor_UserService_DeleteUserClaim = new grpc.web.MethodDescriptor(
  '/pando.api.identity.v1.UserService/DeleteUserClaim',
  grpc.web.MethodType.UNARY,
  proto.pando.api.identity.v1.ClaimRequest,
  pando_api_shared_pb.Empty,
  /**
   * @param {!proto.pando.api.identity.v1.ClaimRequest} request
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
 *   !proto.pando.api.identity.v1.ClaimRequest,
 *   !proto.pando.api.Empty>}
 */
const methodInfo_UserService_DeleteUserClaim = new grpc.web.AbstractClientBase.MethodInfo(
  pando_api_shared_pb.Empty,
  /**
   * @param {!proto.pando.api.identity.v1.ClaimRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_shared_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.pando.api.identity.v1.ClaimRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pando.api.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pando.api.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pando.api.identity.v1.UserServiceClient.prototype.deleteUserClaim =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pando.api.identity.v1.UserService/DeleteUserClaim',
      request,
      metadata || {},
      methodDescriptor_UserService_DeleteUserClaim,
      callback);
};


/**
 * @param {!proto.pando.api.identity.v1.ClaimRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pando.api.Empty>}
 *     Promise that resolves to the response
 */
proto.pando.api.identity.v1.UserServicePromiseClient.prototype.deleteUserClaim =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pando.api.identity.v1.UserService/DeleteUserClaim',
      request,
      metadata || {},
      methodDescriptor_UserService_DeleteUserClaim);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pando.api.identity.v1.UserInfoRequest,
 *   !proto.pando.api.identity.v1.UserInfo>}
 */
const methodDescriptor_UserService_UpdateUserInfo = new grpc.web.MethodDescriptor(
  '/pando.api.identity.v1.UserService/UpdateUserInfo',
  grpc.web.MethodType.UNARY,
  proto.pando.api.identity.v1.UserInfoRequest,
  proto.pando.api.identity.v1.UserInfo,
  /**
   * @param {!proto.pando.api.identity.v1.UserInfoRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pando.api.identity.v1.UserInfo.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pando.api.identity.v1.UserInfoRequest,
 *   !proto.pando.api.identity.v1.UserInfo>}
 */
const methodInfo_UserService_UpdateUserInfo = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pando.api.identity.v1.UserInfo,
  /**
   * @param {!proto.pando.api.identity.v1.UserInfoRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pando.api.identity.v1.UserInfo.deserializeBinary
);


/**
 * @param {!proto.pando.api.identity.v1.UserInfoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pando.api.identity.v1.UserInfo)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pando.api.identity.v1.UserInfo>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pando.api.identity.v1.UserServiceClient.prototype.updateUserInfo =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pando.api.identity.v1.UserService/UpdateUserInfo',
      request,
      metadata || {},
      methodDescriptor_UserService_UpdateUserInfo,
      callback);
};


/**
 * @param {!proto.pando.api.identity.v1.UserInfoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pando.api.identity.v1.UserInfo>}
 *     Promise that resolves to the response
 */
proto.pando.api.identity.v1.UserServicePromiseClient.prototype.updateUserInfo =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pando.api.identity.v1.UserService/UpdateUserInfo',
      request,
      metadata || {},
      methodDescriptor_UserService_UpdateUserInfo);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pando.api.identity.v1.CreateUserRequest,
 *   !proto.pando.api.identity.v1.CreateUserRequest>}
 */
const methodDescriptor_UserService_CreateUser = new grpc.web.MethodDescriptor(
  '/pando.api.identity.v1.UserService/CreateUser',
  grpc.web.MethodType.UNARY,
  proto.pando.api.identity.v1.CreateUserRequest,
  proto.pando.api.identity.v1.CreateUserRequest,
  /**
   * @param {!proto.pando.api.identity.v1.CreateUserRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pando.api.identity.v1.CreateUserRequest.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pando.api.identity.v1.CreateUserRequest,
 *   !proto.pando.api.identity.v1.CreateUserRequest>}
 */
const methodInfo_UserService_CreateUser = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pando.api.identity.v1.CreateUserRequest,
  /**
   * @param {!proto.pando.api.identity.v1.CreateUserRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pando.api.identity.v1.CreateUserRequest.deserializeBinary
);


/**
 * @param {!proto.pando.api.identity.v1.CreateUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pando.api.identity.v1.CreateUserRequest)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pando.api.identity.v1.CreateUserRequest>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pando.api.identity.v1.UserServiceClient.prototype.createUser =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pando.api.identity.v1.UserService/CreateUser',
      request,
      metadata || {},
      methodDescriptor_UserService_CreateUser,
      callback);
};


/**
 * @param {!proto.pando.api.identity.v1.CreateUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pando.api.identity.v1.CreateUserRequest>}
 *     Promise that resolves to the response
 */
proto.pando.api.identity.v1.UserServicePromiseClient.prototype.createUser =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pando.api.identity.v1.UserService/CreateUser',
      request,
      metadata || {},
      methodDescriptor_UserService_CreateUser);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pando.api.identity.v1.SendEmailLoginLinkRequest,
 *   !proto.pando.api.Empty>}
 */
const methodDescriptor_UserService_ExecSendEmailLoginLink = new grpc.web.MethodDescriptor(
  '/pando.api.identity.v1.UserService/ExecSendEmailLoginLink',
  grpc.web.MethodType.UNARY,
  proto.pando.api.identity.v1.SendEmailLoginLinkRequest,
  pando_api_shared_pb.Empty,
  /**
   * @param {!proto.pando.api.identity.v1.SendEmailLoginLinkRequest} request
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
 *   !proto.pando.api.identity.v1.SendEmailLoginLinkRequest,
 *   !proto.pando.api.Empty>}
 */
const methodInfo_UserService_ExecSendEmailLoginLink = new grpc.web.AbstractClientBase.MethodInfo(
  pando_api_shared_pb.Empty,
  /**
   * @param {!proto.pando.api.identity.v1.SendEmailLoginLinkRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_shared_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.pando.api.identity.v1.SendEmailLoginLinkRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pando.api.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pando.api.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pando.api.identity.v1.UserServiceClient.prototype.execSendEmailLoginLink =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pando.api.identity.v1.UserService/ExecSendEmailLoginLink',
      request,
      metadata || {},
      methodDescriptor_UserService_ExecSendEmailLoginLink,
      callback);
};


/**
 * @param {!proto.pando.api.identity.v1.SendEmailLoginLinkRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pando.api.Empty>}
 *     Promise that resolves to the response
 */
proto.pando.api.identity.v1.UserServicePromiseClient.prototype.execSendEmailLoginLink =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pando.api.identity.v1.UserService/ExecSendEmailLoginLink',
      request,
      metadata || {},
      methodDescriptor_UserService_ExecSendEmailLoginLink);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pando.api.identity.v1.ValidateLoginCodeRequest,
 *   !proto.pando.api.identity.v1.ValidateLoginCodeResponse>}
 */
const methodDescriptor_UserService_ExecValidateLoginCode = new grpc.web.MethodDescriptor(
  '/pando.api.identity.v1.UserService/ExecValidateLoginCode',
  grpc.web.MethodType.UNARY,
  proto.pando.api.identity.v1.ValidateLoginCodeRequest,
  proto.pando.api.identity.v1.ValidateLoginCodeResponse,
  /**
   * @param {!proto.pando.api.identity.v1.ValidateLoginCodeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pando.api.identity.v1.ValidateLoginCodeResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pando.api.identity.v1.ValidateLoginCodeRequest,
 *   !proto.pando.api.identity.v1.ValidateLoginCodeResponse>}
 */
const methodInfo_UserService_ExecValidateLoginCode = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pando.api.identity.v1.ValidateLoginCodeResponse,
  /**
   * @param {!proto.pando.api.identity.v1.ValidateLoginCodeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pando.api.identity.v1.ValidateLoginCodeResponse.deserializeBinary
);


/**
 * @param {!proto.pando.api.identity.v1.ValidateLoginCodeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pando.api.identity.v1.ValidateLoginCodeResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pando.api.identity.v1.ValidateLoginCodeResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pando.api.identity.v1.UserServiceClient.prototype.execValidateLoginCode =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pando.api.identity.v1.UserService/ExecValidateLoginCode',
      request,
      metadata || {},
      methodDescriptor_UserService_ExecValidateLoginCode,
      callback);
};


/**
 * @param {!proto.pando.api.identity.v1.ValidateLoginCodeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pando.api.identity.v1.ValidateLoginCodeResponse>}
 *     Promise that resolves to the response
 */
proto.pando.api.identity.v1.UserServicePromiseClient.prototype.execValidateLoginCode =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pando.api.identity.v1.UserService/ExecValidateLoginCode',
      request,
      metadata || {},
      methodDescriptor_UserService_ExecValidateLoginCode);
};


module.exports = proto.pando.api.identity.v1;

