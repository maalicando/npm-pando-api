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
proto.pando.api.vault.v1 = require('./documents-beta_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.pando.api.vault.v1.DocumentBetaServiceClient =
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
proto.pando.api.vault.v1.DocumentBetaServicePromiseClient =
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
 *   !proto.pando.api.vault.v1.ExecClaimDocumentRequest,
 *   !proto.pando.api.Empty>}
 */
const methodDescriptor_DocumentBetaService_ExecClaimDocument = new grpc.web.MethodDescriptor(
  '/pando.api.vault.v1.DocumentBetaService/ExecClaimDocument',
  grpc.web.MethodType.UNARY,
  proto.pando.api.vault.v1.ExecClaimDocumentRequest,
  pando_api_shared_pb.Empty,
  /**
   * @param {!proto.pando.api.vault.v1.ExecClaimDocumentRequest} request
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
 *   !proto.pando.api.vault.v1.ExecClaimDocumentRequest,
 *   !proto.pando.api.Empty>}
 */
const methodInfo_DocumentBetaService_ExecClaimDocument = new grpc.web.AbstractClientBase.MethodInfo(
  pando_api_shared_pb.Empty,
  /**
   * @param {!proto.pando.api.vault.v1.ExecClaimDocumentRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_shared_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.pando.api.vault.v1.ExecClaimDocumentRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pando.api.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pando.api.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pando.api.vault.v1.DocumentBetaServiceClient.prototype.execClaimDocument =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pando.api.vault.v1.DocumentBetaService/ExecClaimDocument',
      request,
      metadata || {},
      methodDescriptor_DocumentBetaService_ExecClaimDocument,
      callback);
};


/**
 * @param {!proto.pando.api.vault.v1.ExecClaimDocumentRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pando.api.Empty>}
 *     Promise that resolves to the response
 */
proto.pando.api.vault.v1.DocumentBetaServicePromiseClient.prototype.execClaimDocument =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pando.api.vault.v1.DocumentBetaService/ExecClaimDocument',
      request,
      metadata || {},
      methodDescriptor_DocumentBetaService_ExecClaimDocument);
};


module.exports = proto.pando.api.vault.v1;

