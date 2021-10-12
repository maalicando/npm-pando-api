/**
 * @fileoverview gRPC-Web generated client stub for pando.api.communication.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js')

var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js')

var pando_api_extensions_pb = require('../../../../pando/api/extensions_pb.js')

var pando_api_shared_pb = require('../../../../pando/api/shared_pb.js')
const proto = {};
proto.pando = {};
proto.pando.api = {};
proto.pando.api.communication = {};
proto.pando.api.communication.v1 = require('./communication_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.pando.api.communication.v1.CommunicationServiceClient =
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
proto.pando.api.communication.v1.CommunicationServicePromiseClient =
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
 *   !proto.pando.api.communication.v1.SendMessageRequest,
 *   !proto.pando.api.communication.v1.SendMessageResponse>}
 */
const methodDescriptor_CommunicationService_ExecSendMessage = new grpc.web.MethodDescriptor(
  '/pando.api.communication.v1.CommunicationService/ExecSendMessage',
  grpc.web.MethodType.UNARY,
  proto.pando.api.communication.v1.SendMessageRequest,
  proto.pando.api.communication.v1.SendMessageResponse,
  /**
   * @param {!proto.pando.api.communication.v1.SendMessageRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pando.api.communication.v1.SendMessageResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pando.api.communication.v1.SendMessageRequest,
 *   !proto.pando.api.communication.v1.SendMessageResponse>}
 */
const methodInfo_CommunicationService_ExecSendMessage = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pando.api.communication.v1.SendMessageResponse,
  /**
   * @param {!proto.pando.api.communication.v1.SendMessageRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pando.api.communication.v1.SendMessageResponse.deserializeBinary
);


/**
 * @param {!proto.pando.api.communication.v1.SendMessageRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pando.api.communication.v1.SendMessageResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pando.api.communication.v1.SendMessageResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pando.api.communication.v1.CommunicationServiceClient.prototype.execSendMessage =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pando.api.communication.v1.CommunicationService/ExecSendMessage',
      request,
      metadata || {},
      methodDescriptor_CommunicationService_ExecSendMessage,
      callback);
};


/**
 * @param {!proto.pando.api.communication.v1.SendMessageRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pando.api.communication.v1.SendMessageResponse>}
 *     Promise that resolves to the response
 */
proto.pando.api.communication.v1.CommunicationServicePromiseClient.prototype.execSendMessage =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pando.api.communication.v1.CommunicationService/ExecSendMessage',
      request,
      metadata || {},
      methodDescriptor_CommunicationService_ExecSendMessage);
};


module.exports = proto.pando.api.communication.v1;

