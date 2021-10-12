/**
 * @fileoverview gRPC-Web generated client stub for pando.api.vault.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_api_annotations_pb = require('../../../../../google/api/annotations_pb.js')

var pando_api_extensions_pb = require('../../../../../pando/api/extensions_pb.js')

var pando_api_shared_pb = require('../../../../../pando/api/shared_pb.js')
const proto = {};
proto.pando = {};
proto.pando.api = {};
proto.pando.api.vault = {};
proto.pando.api.vault.v1 = require('./securedata-beta_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.pando.api.vault.v1.SecureDataBetaServiceClient =
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
proto.pando.api.vault.v1.SecureDataBetaServicePromiseClient =
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
 *   !proto.pando.api.vault.v1.ExecClaimRecordRequest,
 *   !proto.pando.api.Empty>}
 */
const methodDescriptor_SecureDataBetaService_ExecClaimRecord = new grpc.web.MethodDescriptor(
  '/pando.api.vault.v1.SecureDataBetaService/ExecClaimRecord',
  grpc.web.MethodType.UNARY,
  proto.pando.api.vault.v1.ExecClaimRecordRequest,
  pando_api_shared_pb.Empty,
  /**
   * @param {!proto.pando.api.vault.v1.ExecClaimRecordRequest} request
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
 *   !proto.pando.api.vault.v1.ExecClaimRecordRequest,
 *   !proto.pando.api.Empty>}
 */
const methodInfo_SecureDataBetaService_ExecClaimRecord = new grpc.web.AbstractClientBase.MethodInfo(
  pando_api_shared_pb.Empty,
  /**
   * @param {!proto.pando.api.vault.v1.ExecClaimRecordRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_shared_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.pando.api.vault.v1.ExecClaimRecordRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pando.api.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pando.api.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pando.api.vault.v1.SecureDataBetaServiceClient.prototype.execClaimRecord =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pando.api.vault.v1.SecureDataBetaService/ExecClaimRecord',
      request,
      metadata || {},
      methodDescriptor_SecureDataBetaService_ExecClaimRecord,
      callback);
};


/**
 * @param {!proto.pando.api.vault.v1.ExecClaimRecordRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pando.api.Empty>}
 *     Promise that resolves to the response
 */
proto.pando.api.vault.v1.SecureDataBetaServicePromiseClient.prototype.execClaimRecord =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pando.api.vault.v1.SecureDataBetaService/ExecClaimRecord',
      request,
      metadata || {},
      methodDescriptor_SecureDataBetaService_ExecClaimRecord);
};


module.exports = proto.pando.api.vault.v1;

