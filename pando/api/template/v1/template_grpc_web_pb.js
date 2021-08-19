/**
 * @fileoverview gRPC-Web generated client stub for pando.api.template.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js')

var pando_api_extensions_pb = require('../../../../pando/api/extensions_pb.js')

var pando_api_shared_pb = require('../../../../pando/api/shared_pb.js')
const proto = {};
proto.pando = {};
proto.pando.api = {};
proto.pando.api.template = {};
proto.pando.api.template.v1 = require('./template_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.pando.api.template.v1.TemplateServiceClient =
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
proto.pando.api.template.v1.TemplateServicePromiseClient =
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
 *   !proto.pando.api.template.v1.RenderTemplateRequest,
 *   !proto.pando.api.Empty>}
 */
const methodDescriptor_TemplateService_ExecValidateData = new grpc.web.MethodDescriptor(
  '/pando.api.template.v1.TemplateService/ExecValidateData',
  grpc.web.MethodType.UNARY,
  proto.pando.api.template.v1.RenderTemplateRequest,
  pando_api_shared_pb.Empty,
  /**
   * @param {!proto.pando.api.template.v1.RenderTemplateRequest} request
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
 *   !proto.pando.api.template.v1.RenderTemplateRequest,
 *   !proto.pando.api.Empty>}
 */
const methodInfo_TemplateService_ExecValidateData = new grpc.web.AbstractClientBase.MethodInfo(
  pando_api_shared_pb.Empty,
  /**
   * @param {!proto.pando.api.template.v1.RenderTemplateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_shared_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.pando.api.template.v1.RenderTemplateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pando.api.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pando.api.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pando.api.template.v1.TemplateServiceClient.prototype.execValidateData =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pando.api.template.v1.TemplateService/ExecValidateData',
      request,
      metadata || {},
      methodDescriptor_TemplateService_ExecValidateData,
      callback);
};


/**
 * @param {!proto.pando.api.template.v1.RenderTemplateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pando.api.Empty>}
 *     Promise that resolves to the response
 */
proto.pando.api.template.v1.TemplateServicePromiseClient.prototype.execValidateData =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pando.api.template.v1.TemplateService/ExecValidateData',
      request,
      metadata || {},
      methodDescriptor_TemplateService_ExecValidateData);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pando.api.template.v1.RenderTemplateRequest,
 *   !proto.pando.api.template.v1.RenderedHtml>}
 */
const methodDescriptor_TemplateService_ExecRenderHtml = new grpc.web.MethodDescriptor(
  '/pando.api.template.v1.TemplateService/ExecRenderHtml',
  grpc.web.MethodType.UNARY,
  proto.pando.api.template.v1.RenderTemplateRequest,
  proto.pando.api.template.v1.RenderedHtml,
  /**
   * @param {!proto.pando.api.template.v1.RenderTemplateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pando.api.template.v1.RenderedHtml.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pando.api.template.v1.RenderTemplateRequest,
 *   !proto.pando.api.template.v1.RenderedHtml>}
 */
const methodInfo_TemplateService_ExecRenderHtml = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pando.api.template.v1.RenderedHtml,
  /**
   * @param {!proto.pando.api.template.v1.RenderTemplateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pando.api.template.v1.RenderedHtml.deserializeBinary
);


/**
 * @param {!proto.pando.api.template.v1.RenderTemplateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pando.api.template.v1.RenderedHtml)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pando.api.template.v1.RenderedHtml>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pando.api.template.v1.TemplateServiceClient.prototype.execRenderHtml =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pando.api.template.v1.TemplateService/ExecRenderHtml',
      request,
      metadata || {},
      methodDescriptor_TemplateService_ExecRenderHtml,
      callback);
};


/**
 * @param {!proto.pando.api.template.v1.RenderTemplateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pando.api.template.v1.RenderedHtml>}
 *     Promise that resolves to the response
 */
proto.pando.api.template.v1.TemplateServicePromiseClient.prototype.execRenderHtml =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pando.api.template.v1.TemplateService/ExecRenderHtml',
      request,
      metadata || {},
      methodDescriptor_TemplateService_ExecRenderHtml);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pando.api.template.v1.RenderTemplateRequest,
 *   !proto.pando.api.template.v1.RenderedPdf>}
 */
const methodDescriptor_TemplateService_ExecRenderPdf = new grpc.web.MethodDescriptor(
  '/pando.api.template.v1.TemplateService/ExecRenderPdf',
  grpc.web.MethodType.UNARY,
  proto.pando.api.template.v1.RenderTemplateRequest,
  proto.pando.api.template.v1.RenderedPdf,
  /**
   * @param {!proto.pando.api.template.v1.RenderTemplateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pando.api.template.v1.RenderedPdf.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pando.api.template.v1.RenderTemplateRequest,
 *   !proto.pando.api.template.v1.RenderedPdf>}
 */
const methodInfo_TemplateService_ExecRenderPdf = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pando.api.template.v1.RenderedPdf,
  /**
   * @param {!proto.pando.api.template.v1.RenderTemplateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pando.api.template.v1.RenderedPdf.deserializeBinary
);


/**
 * @param {!proto.pando.api.template.v1.RenderTemplateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pando.api.template.v1.RenderedPdf)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pando.api.template.v1.RenderedPdf>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pando.api.template.v1.TemplateServiceClient.prototype.execRenderPdf =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pando.api.template.v1.TemplateService/ExecRenderPdf',
      request,
      metadata || {},
      methodDescriptor_TemplateService_ExecRenderPdf,
      callback);
};


/**
 * @param {!proto.pando.api.template.v1.RenderTemplateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pando.api.template.v1.RenderedPdf>}
 *     Promise that resolves to the response
 */
proto.pando.api.template.v1.TemplateServicePromiseClient.prototype.execRenderPdf =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pando.api.template.v1.TemplateService/ExecRenderPdf',
      request,
      metadata || {},
      methodDescriptor_TemplateService_ExecRenderPdf);
};


module.exports = proto.pando.api.template.v1;

