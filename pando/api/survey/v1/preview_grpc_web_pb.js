/**
 * @fileoverview gRPC-Web generated client stub for pando.api.survey.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js')

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js')

var pando_api_extensions_pb = require('../../../../pando/api/extensions_pb.js')

var pando_api_shared_pb = require('../../../../pando/api/shared_pb.js')

var pando_api_survey_v1_shared_pb = require('../../../../pando/api/survey/v1/shared_pb.js')
const proto = {};
proto.pando = {};
proto.pando.api = {};
proto.pando.api.survey = {};
proto.pando.api.survey.v1 = require('./preview_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.pando.api.survey.v1.PreviewServiceClient =
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
proto.pando.api.survey.v1.PreviewServicePromiseClient =
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
 *   !proto.pando.api.survey.v1.GetNextQuestionPreviewRequest,
 *   !proto.pando.api.survey.v1.GetNextQuestionPreviewResponse>}
 */
const methodDescriptor_PreviewService_GetNextQuestionPreview = new grpc.web.MethodDescriptor(
  '/pando.api.survey.v1.PreviewService/GetNextQuestionPreview',
  grpc.web.MethodType.UNARY,
  proto.pando.api.survey.v1.GetNextQuestionPreviewRequest,
  proto.pando.api.survey.v1.GetNextQuestionPreviewResponse,
  /**
   * @param {!proto.pando.api.survey.v1.GetNextQuestionPreviewRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pando.api.survey.v1.GetNextQuestionPreviewResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pando.api.survey.v1.GetNextQuestionPreviewRequest,
 *   !proto.pando.api.survey.v1.GetNextQuestionPreviewResponse>}
 */
const methodInfo_PreviewService_GetNextQuestionPreview = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pando.api.survey.v1.GetNextQuestionPreviewResponse,
  /**
   * @param {!proto.pando.api.survey.v1.GetNextQuestionPreviewRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pando.api.survey.v1.GetNextQuestionPreviewResponse.deserializeBinary
);


/**
 * @param {!proto.pando.api.survey.v1.GetNextQuestionPreviewRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pando.api.survey.v1.GetNextQuestionPreviewResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pando.api.survey.v1.GetNextQuestionPreviewResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pando.api.survey.v1.PreviewServiceClient.prototype.getNextQuestionPreview =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pando.api.survey.v1.PreviewService/GetNextQuestionPreview',
      request,
      metadata || {},
      methodDescriptor_PreviewService_GetNextQuestionPreview,
      callback);
};


/**
 * @param {!proto.pando.api.survey.v1.GetNextQuestionPreviewRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pando.api.survey.v1.GetNextQuestionPreviewResponse>}
 *     Promise that resolves to the response
 */
proto.pando.api.survey.v1.PreviewServicePromiseClient.prototype.getNextQuestionPreview =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pando.api.survey.v1.PreviewService/GetNextQuestionPreview',
      request,
      metadata || {},
      methodDescriptor_PreviewService_GetNextQuestionPreview);
};


module.exports = proto.pando.api.survey.v1;

