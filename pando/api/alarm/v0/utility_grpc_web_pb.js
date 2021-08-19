/**
 * @fileoverview gRPC-Web generated client stub for ping_service
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var pando_api_shared_pb = require('../../../../pando/api/shared_pb.js')
const proto = {};
proto.ping_service = require('./utility_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.ping_service.UtilityServiceClient =
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
proto.ping_service.UtilityServicePromiseClient =
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
 *   !proto.pando.api.Empty,
 *   !proto.ping_service.OkResult>}
 */
const methodDescriptor_UtilityService_Ping = new grpc.web.MethodDescriptor(
  '/ping_service.UtilityService/Ping',
  grpc.web.MethodType.UNARY,
  pando_api_shared_pb.Empty,
  proto.ping_service.OkResult,
  /**
   * @param {!proto.pando.api.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ping_service.OkResult.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pando.api.Empty,
 *   !proto.ping_service.OkResult>}
 */
const methodInfo_UtilityService_Ping = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ping_service.OkResult,
  /**
   * @param {!proto.pando.api.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ping_service.OkResult.deserializeBinary
);


/**
 * @param {!proto.pando.api.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ping_service.OkResult)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ping_service.OkResult>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ping_service.UtilityServiceClient.prototype.ping =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ping_service.UtilityService/Ping',
      request,
      metadata || {},
      methodDescriptor_UtilityService_Ping,
      callback);
};


/**
 * @param {!proto.pando.api.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ping_service.OkResult>}
 *     Promise that resolves to the response
 */
proto.ping_service.UtilityServicePromiseClient.prototype.ping =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ping_service.UtilityService/Ping',
      request,
      metadata || {},
      methodDescriptor_UtilityService_Ping);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pando.api.Empty,
 *   !proto.ping_service.OkResult>}
 */
const methodDescriptor_UtilityService_ClearCache = new grpc.web.MethodDescriptor(
  '/ping_service.UtilityService/ClearCache',
  grpc.web.MethodType.UNARY,
  pando_api_shared_pb.Empty,
  proto.ping_service.OkResult,
  /**
   * @param {!proto.pando.api.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ping_service.OkResult.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pando.api.Empty,
 *   !proto.ping_service.OkResult>}
 */
const methodInfo_UtilityService_ClearCache = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ping_service.OkResult,
  /**
   * @param {!proto.pando.api.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ping_service.OkResult.deserializeBinary
);


/**
 * @param {!proto.pando.api.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ping_service.OkResult)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ping_service.OkResult>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ping_service.UtilityServiceClient.prototype.clearCache =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ping_service.UtilityService/ClearCache',
      request,
      metadata || {},
      methodDescriptor_UtilityService_ClearCache,
      callback);
};


/**
 * @param {!proto.pando.api.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ping_service.OkResult>}
 *     Promise that resolves to the response
 */
proto.ping_service.UtilityServicePromiseClient.prototype.clearCache =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ping_service.UtilityService/ClearCache',
      request,
      metadata || {},
      methodDescriptor_UtilityService_ClearCache);
};


module.exports = proto.ping_service;

