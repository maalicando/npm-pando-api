/**
 * @fileoverview gRPC-Web generated client stub for pando.api.localization.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js')

var pando_api_localization_v1_services_pb = require('../../../../pando/api/localization/v1/services_pb.js')

var pando_api_localization_v1_labels_pb = require('../../../../pando/api/localization/v1/labels_pb.js')

var pando_api_localization_v1_locales_pb = require('../../../../pando/api/localization/v1/locales_pb.js')
const proto = {};
proto.pando = {};
proto.pando.api = {};
proto.pando.api.localization = {};
proto.pando.api.localization.v1 = require('./localization_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.pando.api.localization.v1.LocalizationServiceClient =
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
proto.pando.api.localization.v1.LocalizationServicePromiseClient =
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
 *   !proto.pando.api.localization.v1.GetTextsFromServicesRequest,
 *   !proto.pando.api.localization.v1.GetLocalizedTextResponse>}
 */
const methodDescriptor_LocalizationService_GetLocalizedTextsFromServices = new grpc.web.MethodDescriptor(
  '/pando.api.localization.v1.LocalizationService/GetLocalizedTextsFromServices',
  grpc.web.MethodType.UNARY,
  proto.pando.api.localization.v1.GetTextsFromServicesRequest,
  proto.pando.api.localization.v1.GetLocalizedTextResponse,
  /**
   * @param {!proto.pando.api.localization.v1.GetTextsFromServicesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pando.api.localization.v1.GetLocalizedTextResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pando.api.localization.v1.GetTextsFromServicesRequest,
 *   !proto.pando.api.localization.v1.GetLocalizedTextResponse>}
 */
const methodInfo_LocalizationService_GetLocalizedTextsFromServices = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pando.api.localization.v1.GetLocalizedTextResponse,
  /**
   * @param {!proto.pando.api.localization.v1.GetTextsFromServicesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pando.api.localization.v1.GetLocalizedTextResponse.deserializeBinary
);


/**
 * @param {!proto.pando.api.localization.v1.GetTextsFromServicesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pando.api.localization.v1.GetLocalizedTextResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pando.api.localization.v1.GetLocalizedTextResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pando.api.localization.v1.LocalizationServiceClient.prototype.getLocalizedTextsFromServices =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pando.api.localization.v1.LocalizationService/GetLocalizedTextsFromServices',
      request,
      metadata || {},
      methodDescriptor_LocalizationService_GetLocalizedTextsFromServices,
      callback);
};


/**
 * @param {!proto.pando.api.localization.v1.GetTextsFromServicesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pando.api.localization.v1.GetLocalizedTextResponse>}
 *     Promise that resolves to the response
 */
proto.pando.api.localization.v1.LocalizationServicePromiseClient.prototype.getLocalizedTextsFromServices =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pando.api.localization.v1.LocalizationService/GetLocalizedTextsFromServices',
      request,
      metadata || {},
      methodDescriptor_LocalizationService_GetLocalizedTextsFromServices);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pando.api.localization.v1.GetTextsFromLabelsRequest,
 *   !proto.pando.api.localization.v1.GetLocalizedTextResponse>}
 */
const methodDescriptor_LocalizationService_GetLocalizedTextsFromLabels = new grpc.web.MethodDescriptor(
  '/pando.api.localization.v1.LocalizationService/GetLocalizedTextsFromLabels',
  grpc.web.MethodType.UNARY,
  proto.pando.api.localization.v1.GetTextsFromLabelsRequest,
  proto.pando.api.localization.v1.GetLocalizedTextResponse,
  /**
   * @param {!proto.pando.api.localization.v1.GetTextsFromLabelsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pando.api.localization.v1.GetLocalizedTextResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pando.api.localization.v1.GetTextsFromLabelsRequest,
 *   !proto.pando.api.localization.v1.GetLocalizedTextResponse>}
 */
const methodInfo_LocalizationService_GetLocalizedTextsFromLabels = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pando.api.localization.v1.GetLocalizedTextResponse,
  /**
   * @param {!proto.pando.api.localization.v1.GetTextsFromLabelsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pando.api.localization.v1.GetLocalizedTextResponse.deserializeBinary
);


/**
 * @param {!proto.pando.api.localization.v1.GetTextsFromLabelsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pando.api.localization.v1.GetLocalizedTextResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pando.api.localization.v1.GetLocalizedTextResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pando.api.localization.v1.LocalizationServiceClient.prototype.getLocalizedTextsFromLabels =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pando.api.localization.v1.LocalizationService/GetLocalizedTextsFromLabels',
      request,
      metadata || {},
      methodDescriptor_LocalizationService_GetLocalizedTextsFromLabels,
      callback);
};


/**
 * @param {!proto.pando.api.localization.v1.GetTextsFromLabelsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pando.api.localization.v1.GetLocalizedTextResponse>}
 *     Promise that resolves to the response
 */
proto.pando.api.localization.v1.LocalizationServicePromiseClient.prototype.getLocalizedTextsFromLabels =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pando.api.localization.v1.LocalizationService/GetLocalizedTextsFromLabels',
      request,
      metadata || {},
      methodDescriptor_LocalizationService_GetLocalizedTextsFromLabels);
};


module.exports = proto.pando.api.localization.v1;

