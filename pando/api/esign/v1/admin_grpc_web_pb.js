/**
 * @fileoverview gRPC-Web generated client stub for pando.api.esign.v1
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

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js')

var pando_api_extensions_pb = require('../../../../pando/api/extensions_pb.js')

var pando_api_shared_pb = require('../../../../pando/api/shared_pb.js')

var pando_api_esign_v1_shared_pb = require('../../../../pando/api/esign/v1/shared_pb.js')
const proto = {};
proto.pando = {};
proto.pando.api = {};
proto.pando.api.esign = {};
proto.pando.api.esign.v1 = require('./admin_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.pando.api.esign.v1.ESignAdminServiceClient =
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
proto.pando.api.esign.v1.ESignAdminServicePromiseClient =
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
 *   !proto.pando.api.esign.v1.CreateESignRequest,
 *   !proto.pando.api.esign.v1.ESignRequest>}
 */
const methodDescriptor_ESignAdminService_CreateRequest = new grpc.web.MethodDescriptor(
  '/pando.api.esign.v1.ESignAdminService/CreateRequest',
  grpc.web.MethodType.UNARY,
  proto.pando.api.esign.v1.CreateESignRequest,
  pando_api_esign_v1_shared_pb.ESignRequest,
  /**
   * @param {!proto.pando.api.esign.v1.CreateESignRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_esign_v1_shared_pb.ESignRequest.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pando.api.esign.v1.CreateESignRequest,
 *   !proto.pando.api.esign.v1.ESignRequest>}
 */
const methodInfo_ESignAdminService_CreateRequest = new grpc.web.AbstractClientBase.MethodInfo(
  pando_api_esign_v1_shared_pb.ESignRequest,
  /**
   * @param {!proto.pando.api.esign.v1.CreateESignRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_esign_v1_shared_pb.ESignRequest.deserializeBinary
);


/**
 * @param {!proto.pando.api.esign.v1.CreateESignRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pando.api.esign.v1.ESignRequest)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pando.api.esign.v1.ESignRequest>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pando.api.esign.v1.ESignAdminServiceClient.prototype.createRequest =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pando.api.esign.v1.ESignAdminService/CreateRequest',
      request,
      metadata || {},
      methodDescriptor_ESignAdminService_CreateRequest,
      callback);
};


/**
 * @param {!proto.pando.api.esign.v1.CreateESignRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pando.api.esign.v1.ESignRequest>}
 *     Promise that resolves to the response
 */
proto.pando.api.esign.v1.ESignAdminServicePromiseClient.prototype.createRequest =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pando.api.esign.v1.ESignAdminService/CreateRequest',
      request,
      metadata || {},
      methodDescriptor_ESignAdminService_CreateRequest);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pando.api.esign.v1.CreateOrUpdateTemplateRequest,
 *   !proto.pando.api.esign.v1.Template>}
 */
const methodDescriptor_ESignAdminService_CreateOrUpdateTemplate = new grpc.web.MethodDescriptor(
  '/pando.api.esign.v1.ESignAdminService/CreateOrUpdateTemplate',
  grpc.web.MethodType.UNARY,
  proto.pando.api.esign.v1.CreateOrUpdateTemplateRequest,
  pando_api_esign_v1_shared_pb.Template,
  /**
   * @param {!proto.pando.api.esign.v1.CreateOrUpdateTemplateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_esign_v1_shared_pb.Template.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pando.api.esign.v1.CreateOrUpdateTemplateRequest,
 *   !proto.pando.api.esign.v1.Template>}
 */
const methodInfo_ESignAdminService_CreateOrUpdateTemplate = new grpc.web.AbstractClientBase.MethodInfo(
  pando_api_esign_v1_shared_pb.Template,
  /**
   * @param {!proto.pando.api.esign.v1.CreateOrUpdateTemplateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_esign_v1_shared_pb.Template.deserializeBinary
);


/**
 * @param {!proto.pando.api.esign.v1.CreateOrUpdateTemplateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pando.api.esign.v1.Template)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pando.api.esign.v1.Template>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pando.api.esign.v1.ESignAdminServiceClient.prototype.createOrUpdateTemplate =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pando.api.esign.v1.ESignAdminService/CreateOrUpdateTemplate',
      request,
      metadata || {},
      methodDescriptor_ESignAdminService_CreateOrUpdateTemplate,
      callback);
};


/**
 * @param {!proto.pando.api.esign.v1.CreateOrUpdateTemplateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pando.api.esign.v1.Template>}
 *     Promise that resolves to the response
 */
proto.pando.api.esign.v1.ESignAdminServicePromiseClient.prototype.createOrUpdateTemplate =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pando.api.esign.v1.ESignAdminService/CreateOrUpdateTemplate',
      request,
      metadata || {},
      methodDescriptor_ESignAdminService_CreateOrUpdateTemplate);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pando.api.esign.v1.GetESignRequest,
 *   !proto.pando.api.esign.v1.ESignRequest>}
 */
const methodDescriptor_ESignAdminService_GetRequest = new grpc.web.MethodDescriptor(
  '/pando.api.esign.v1.ESignAdminService/GetRequest',
  grpc.web.MethodType.UNARY,
  proto.pando.api.esign.v1.GetESignRequest,
  pando_api_esign_v1_shared_pb.ESignRequest,
  /**
   * @param {!proto.pando.api.esign.v1.GetESignRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_esign_v1_shared_pb.ESignRequest.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pando.api.esign.v1.GetESignRequest,
 *   !proto.pando.api.esign.v1.ESignRequest>}
 */
const methodInfo_ESignAdminService_GetRequest = new grpc.web.AbstractClientBase.MethodInfo(
  pando_api_esign_v1_shared_pb.ESignRequest,
  /**
   * @param {!proto.pando.api.esign.v1.GetESignRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_esign_v1_shared_pb.ESignRequest.deserializeBinary
);


/**
 * @param {!proto.pando.api.esign.v1.GetESignRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pando.api.esign.v1.ESignRequest)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pando.api.esign.v1.ESignRequest>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pando.api.esign.v1.ESignAdminServiceClient.prototype.getRequest =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pando.api.esign.v1.ESignAdminService/GetRequest',
      request,
      metadata || {},
      methodDescriptor_ESignAdminService_GetRequest,
      callback);
};


/**
 * @param {!proto.pando.api.esign.v1.GetESignRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pando.api.esign.v1.ESignRequest>}
 *     Promise that resolves to the response
 */
proto.pando.api.esign.v1.ESignAdminServicePromiseClient.prototype.getRequest =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pando.api.esign.v1.ESignAdminService/GetRequest',
      request,
      metadata || {},
      methodDescriptor_ESignAdminService_GetRequest);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pando.api.esign.v1.GetESignRequestList,
 *   !proto.pando.api.esign.v1.ESignRequestList>}
 */
const methodDescriptor_ESignAdminService_GetRequestList = new grpc.web.MethodDescriptor(
  '/pando.api.esign.v1.ESignAdminService/GetRequestList',
  grpc.web.MethodType.UNARY,
  proto.pando.api.esign.v1.GetESignRequestList,
  pando_api_esign_v1_shared_pb.ESignRequestList,
  /**
   * @param {!proto.pando.api.esign.v1.GetESignRequestList} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_esign_v1_shared_pb.ESignRequestList.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pando.api.esign.v1.GetESignRequestList,
 *   !proto.pando.api.esign.v1.ESignRequestList>}
 */
const methodInfo_ESignAdminService_GetRequestList = new grpc.web.AbstractClientBase.MethodInfo(
  pando_api_esign_v1_shared_pb.ESignRequestList,
  /**
   * @param {!proto.pando.api.esign.v1.GetESignRequestList} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_esign_v1_shared_pb.ESignRequestList.deserializeBinary
);


/**
 * @param {!proto.pando.api.esign.v1.GetESignRequestList} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pando.api.esign.v1.ESignRequestList)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pando.api.esign.v1.ESignRequestList>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pando.api.esign.v1.ESignAdminServiceClient.prototype.getRequestList =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pando.api.esign.v1.ESignAdminService/GetRequestList',
      request,
      metadata || {},
      methodDescriptor_ESignAdminService_GetRequestList,
      callback);
};


/**
 * @param {!proto.pando.api.esign.v1.GetESignRequestList} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pando.api.esign.v1.ESignRequestList>}
 *     Promise that resolves to the response
 */
proto.pando.api.esign.v1.ESignAdminServicePromiseClient.prototype.getRequestList =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pando.api.esign.v1.ESignAdminService/GetRequestList',
      request,
      metadata || {},
      methodDescriptor_ESignAdminService_GetRequestList);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pando.api.esign.v1.GetTemplateRequest,
 *   !proto.pando.api.esign.v1.Template>}
 */
const methodDescriptor_ESignAdminService_GetTemplate = new grpc.web.MethodDescriptor(
  '/pando.api.esign.v1.ESignAdminService/GetTemplate',
  grpc.web.MethodType.UNARY,
  proto.pando.api.esign.v1.GetTemplateRequest,
  pando_api_esign_v1_shared_pb.Template,
  /**
   * @param {!proto.pando.api.esign.v1.GetTemplateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_esign_v1_shared_pb.Template.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pando.api.esign.v1.GetTemplateRequest,
 *   !proto.pando.api.esign.v1.Template>}
 */
const methodInfo_ESignAdminService_GetTemplate = new grpc.web.AbstractClientBase.MethodInfo(
  pando_api_esign_v1_shared_pb.Template,
  /**
   * @param {!proto.pando.api.esign.v1.GetTemplateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_esign_v1_shared_pb.Template.deserializeBinary
);


/**
 * @param {!proto.pando.api.esign.v1.GetTemplateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pando.api.esign.v1.Template)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pando.api.esign.v1.Template>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pando.api.esign.v1.ESignAdminServiceClient.prototype.getTemplate =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pando.api.esign.v1.ESignAdminService/GetTemplate',
      request,
      metadata || {},
      methodDescriptor_ESignAdminService_GetTemplate,
      callback);
};


/**
 * @param {!proto.pando.api.esign.v1.GetTemplateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pando.api.esign.v1.Template>}
 *     Promise that resolves to the response
 */
proto.pando.api.esign.v1.ESignAdminServicePromiseClient.prototype.getTemplate =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pando.api.esign.v1.ESignAdminService/GetTemplate',
      request,
      metadata || {},
      methodDescriptor_ESignAdminService_GetTemplate);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pando.api.esign.v1.GetTemplateListRequest,
 *   !proto.pando.api.esign.v1.TemplateList>}
 */
const methodDescriptor_ESignAdminService_GetTemplateList = new grpc.web.MethodDescriptor(
  '/pando.api.esign.v1.ESignAdminService/GetTemplateList',
  grpc.web.MethodType.UNARY,
  proto.pando.api.esign.v1.GetTemplateListRequest,
  pando_api_esign_v1_shared_pb.TemplateList,
  /**
   * @param {!proto.pando.api.esign.v1.GetTemplateListRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_esign_v1_shared_pb.TemplateList.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pando.api.esign.v1.GetTemplateListRequest,
 *   !proto.pando.api.esign.v1.TemplateList>}
 */
const methodInfo_ESignAdminService_GetTemplateList = new grpc.web.AbstractClientBase.MethodInfo(
  pando_api_esign_v1_shared_pb.TemplateList,
  /**
   * @param {!proto.pando.api.esign.v1.GetTemplateListRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_esign_v1_shared_pb.TemplateList.deserializeBinary
);


/**
 * @param {!proto.pando.api.esign.v1.GetTemplateListRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pando.api.esign.v1.TemplateList)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pando.api.esign.v1.TemplateList>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pando.api.esign.v1.ESignAdminServiceClient.prototype.getTemplateList =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pando.api.esign.v1.ESignAdminService/GetTemplateList',
      request,
      metadata || {},
      methodDescriptor_ESignAdminService_GetTemplateList,
      callback);
};


/**
 * @param {!proto.pando.api.esign.v1.GetTemplateListRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pando.api.esign.v1.TemplateList>}
 *     Promise that resolves to the response
 */
proto.pando.api.esign.v1.ESignAdminServicePromiseClient.prototype.getTemplateList =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pando.api.esign.v1.ESignAdminService/GetTemplateList',
      request,
      metadata || {},
      methodDescriptor_ESignAdminService_GetTemplateList);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pando.api.esign.v1.GetTemplateReportsRequest,
 *   !proto.pando.api.esign.v1.GetTemplateReportsResponse>}
 */
const methodDescriptor_ESignAdminService_GetTemplateReports = new grpc.web.MethodDescriptor(
  '/pando.api.esign.v1.ESignAdminService/GetTemplateReports',
  grpc.web.MethodType.UNARY,
  proto.pando.api.esign.v1.GetTemplateReportsRequest,
  proto.pando.api.esign.v1.GetTemplateReportsResponse,
  /**
   * @param {!proto.pando.api.esign.v1.GetTemplateReportsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pando.api.esign.v1.GetTemplateReportsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pando.api.esign.v1.GetTemplateReportsRequest,
 *   !proto.pando.api.esign.v1.GetTemplateReportsResponse>}
 */
const methodInfo_ESignAdminService_GetTemplateReports = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pando.api.esign.v1.GetTemplateReportsResponse,
  /**
   * @param {!proto.pando.api.esign.v1.GetTemplateReportsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pando.api.esign.v1.GetTemplateReportsResponse.deserializeBinary
);


/**
 * @param {!proto.pando.api.esign.v1.GetTemplateReportsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pando.api.esign.v1.GetTemplateReportsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pando.api.esign.v1.GetTemplateReportsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pando.api.esign.v1.ESignAdminServiceClient.prototype.getTemplateReports =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pando.api.esign.v1.ESignAdminService/GetTemplateReports',
      request,
      metadata || {},
      methodDescriptor_ESignAdminService_GetTemplateReports,
      callback);
};


/**
 * @param {!proto.pando.api.esign.v1.GetTemplateReportsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pando.api.esign.v1.GetTemplateReportsResponse>}
 *     Promise that resolves to the response
 */
proto.pando.api.esign.v1.ESignAdminServicePromiseClient.prototype.getTemplateReports =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pando.api.esign.v1.ESignAdminService/GetTemplateReports',
      request,
      metadata || {},
      methodDescriptor_ESignAdminService_GetTemplateReports);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pando.api.esign.v1.GetESignRequest,
 *   !proto.pando.api.Empty>}
 */
const methodDescriptor_ESignAdminService_DeleteRequest = new grpc.web.MethodDescriptor(
  '/pando.api.esign.v1.ESignAdminService/DeleteRequest',
  grpc.web.MethodType.UNARY,
  proto.pando.api.esign.v1.GetESignRequest,
  pando_api_shared_pb.Empty,
  /**
   * @param {!proto.pando.api.esign.v1.GetESignRequest} request
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
 *   !proto.pando.api.esign.v1.GetESignRequest,
 *   !proto.pando.api.Empty>}
 */
const methodInfo_ESignAdminService_DeleteRequest = new grpc.web.AbstractClientBase.MethodInfo(
  pando_api_shared_pb.Empty,
  /**
   * @param {!proto.pando.api.esign.v1.GetESignRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_shared_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.pando.api.esign.v1.GetESignRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pando.api.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pando.api.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pando.api.esign.v1.ESignAdminServiceClient.prototype.deleteRequest =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pando.api.esign.v1.ESignAdminService/DeleteRequest',
      request,
      metadata || {},
      methodDescriptor_ESignAdminService_DeleteRequest,
      callback);
};


/**
 * @param {!proto.pando.api.esign.v1.GetESignRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pando.api.Empty>}
 *     Promise that resolves to the response
 */
proto.pando.api.esign.v1.ESignAdminServicePromiseClient.prototype.deleteRequest =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pando.api.esign.v1.ESignAdminService/DeleteRequest',
      request,
      metadata || {},
      methodDescriptor_ESignAdminService_DeleteRequest);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pando.api.esign.v1.GetTemplateRequest,
 *   !proto.pando.api.Empty>}
 */
const methodDescriptor_ESignAdminService_DeleteTemplate = new grpc.web.MethodDescriptor(
  '/pando.api.esign.v1.ESignAdminService/DeleteTemplate',
  grpc.web.MethodType.UNARY,
  proto.pando.api.esign.v1.GetTemplateRequest,
  pando_api_shared_pb.Empty,
  /**
   * @param {!proto.pando.api.esign.v1.GetTemplateRequest} request
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
 *   !proto.pando.api.esign.v1.GetTemplateRequest,
 *   !proto.pando.api.Empty>}
 */
const methodInfo_ESignAdminService_DeleteTemplate = new grpc.web.AbstractClientBase.MethodInfo(
  pando_api_shared_pb.Empty,
  /**
   * @param {!proto.pando.api.esign.v1.GetTemplateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_shared_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.pando.api.esign.v1.GetTemplateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pando.api.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pando.api.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pando.api.esign.v1.ESignAdminServiceClient.prototype.deleteTemplate =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pando.api.esign.v1.ESignAdminService/DeleteTemplate',
      request,
      metadata || {},
      methodDescriptor_ESignAdminService_DeleteTemplate,
      callback);
};


/**
 * @param {!proto.pando.api.esign.v1.GetTemplateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pando.api.Empty>}
 *     Promise that resolves to the response
 */
proto.pando.api.esign.v1.ESignAdminServicePromiseClient.prototype.deleteTemplate =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pando.api.esign.v1.ESignAdminService/DeleteTemplate',
      request,
      metadata || {},
      methodDescriptor_ESignAdminService_DeleteTemplate);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pando.api.esign.v1.ExecSignatoryRequest,
 *   !proto.pando.api.esign.v1.ESignRequest>}
 */
const methodDescriptor_ESignAdminService_ExecAddSignatory = new grpc.web.MethodDescriptor(
  '/pando.api.esign.v1.ESignAdminService/ExecAddSignatory',
  grpc.web.MethodType.UNARY,
  proto.pando.api.esign.v1.ExecSignatoryRequest,
  pando_api_esign_v1_shared_pb.ESignRequest,
  /**
   * @param {!proto.pando.api.esign.v1.ExecSignatoryRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_esign_v1_shared_pb.ESignRequest.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pando.api.esign.v1.ExecSignatoryRequest,
 *   !proto.pando.api.esign.v1.ESignRequest>}
 */
const methodInfo_ESignAdminService_ExecAddSignatory = new grpc.web.AbstractClientBase.MethodInfo(
  pando_api_esign_v1_shared_pb.ESignRequest,
  /**
   * @param {!proto.pando.api.esign.v1.ExecSignatoryRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_esign_v1_shared_pb.ESignRequest.deserializeBinary
);


/**
 * @param {!proto.pando.api.esign.v1.ExecSignatoryRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pando.api.esign.v1.ESignRequest)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pando.api.esign.v1.ESignRequest>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pando.api.esign.v1.ESignAdminServiceClient.prototype.execAddSignatory =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pando.api.esign.v1.ESignAdminService/ExecAddSignatory',
      request,
      metadata || {},
      methodDescriptor_ESignAdminService_ExecAddSignatory,
      callback);
};


/**
 * @param {!proto.pando.api.esign.v1.ExecSignatoryRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pando.api.esign.v1.ESignRequest>}
 *     Promise that resolves to the response
 */
proto.pando.api.esign.v1.ESignAdminServicePromiseClient.prototype.execAddSignatory =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pando.api.esign.v1.ESignAdminService/ExecAddSignatory',
      request,
      metadata || {},
      methodDescriptor_ESignAdminService_ExecAddSignatory);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pando.api.esign.v1.ExecSignatoryRequest,
 *   !proto.pando.api.esign.v1.ESignRequest>}
 */
const methodDescriptor_ESignAdminService_ExecRemoveSignatory = new grpc.web.MethodDescriptor(
  '/pando.api.esign.v1.ESignAdminService/ExecRemoveSignatory',
  grpc.web.MethodType.UNARY,
  proto.pando.api.esign.v1.ExecSignatoryRequest,
  pando_api_esign_v1_shared_pb.ESignRequest,
  /**
   * @param {!proto.pando.api.esign.v1.ExecSignatoryRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_esign_v1_shared_pb.ESignRequest.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pando.api.esign.v1.ExecSignatoryRequest,
 *   !proto.pando.api.esign.v1.ESignRequest>}
 */
const methodInfo_ESignAdminService_ExecRemoveSignatory = new grpc.web.AbstractClientBase.MethodInfo(
  pando_api_esign_v1_shared_pb.ESignRequest,
  /**
   * @param {!proto.pando.api.esign.v1.ExecSignatoryRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_esign_v1_shared_pb.ESignRequest.deserializeBinary
);


/**
 * @param {!proto.pando.api.esign.v1.ExecSignatoryRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pando.api.esign.v1.ESignRequest)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pando.api.esign.v1.ESignRequest>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pando.api.esign.v1.ESignAdminServiceClient.prototype.execRemoveSignatory =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pando.api.esign.v1.ESignAdminService/ExecRemoveSignatory',
      request,
      metadata || {},
      methodDescriptor_ESignAdminService_ExecRemoveSignatory,
      callback);
};


/**
 * @param {!proto.pando.api.esign.v1.ExecSignatoryRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pando.api.esign.v1.ESignRequest>}
 *     Promise that resolves to the response
 */
proto.pando.api.esign.v1.ESignAdminServicePromiseClient.prototype.execRemoveSignatory =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pando.api.esign.v1.ESignAdminService/ExecRemoveSignatory',
      request,
      metadata || {},
      methodDescriptor_ESignAdminService_ExecRemoveSignatory);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pando.api.esign.v1.ExecDocumentRequest,
 *   !proto.pando.api.esign.v1.ESignRequest>}
 */
const methodDescriptor_ESignAdminService_ExecAddDocument = new grpc.web.MethodDescriptor(
  '/pando.api.esign.v1.ESignAdminService/ExecAddDocument',
  grpc.web.MethodType.UNARY,
  proto.pando.api.esign.v1.ExecDocumentRequest,
  pando_api_esign_v1_shared_pb.ESignRequest,
  /**
   * @param {!proto.pando.api.esign.v1.ExecDocumentRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_esign_v1_shared_pb.ESignRequest.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pando.api.esign.v1.ExecDocumentRequest,
 *   !proto.pando.api.esign.v1.ESignRequest>}
 */
const methodInfo_ESignAdminService_ExecAddDocument = new grpc.web.AbstractClientBase.MethodInfo(
  pando_api_esign_v1_shared_pb.ESignRequest,
  /**
   * @param {!proto.pando.api.esign.v1.ExecDocumentRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_esign_v1_shared_pb.ESignRequest.deserializeBinary
);


/**
 * @param {!proto.pando.api.esign.v1.ExecDocumentRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pando.api.esign.v1.ESignRequest)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pando.api.esign.v1.ESignRequest>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pando.api.esign.v1.ESignAdminServiceClient.prototype.execAddDocument =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pando.api.esign.v1.ESignAdminService/ExecAddDocument',
      request,
      metadata || {},
      methodDescriptor_ESignAdminService_ExecAddDocument,
      callback);
};


/**
 * @param {!proto.pando.api.esign.v1.ExecDocumentRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pando.api.esign.v1.ESignRequest>}
 *     Promise that resolves to the response
 */
proto.pando.api.esign.v1.ESignAdminServicePromiseClient.prototype.execAddDocument =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pando.api.esign.v1.ESignAdminService/ExecAddDocument',
      request,
      metadata || {},
      methodDescriptor_ESignAdminService_ExecAddDocument);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pando.api.esign.v1.ExecDocumentRequest,
 *   !proto.pando.api.esign.v1.ESignRequest>}
 */
const methodDescriptor_ESignAdminService_ExecRemoveDocument = new grpc.web.MethodDescriptor(
  '/pando.api.esign.v1.ESignAdminService/ExecRemoveDocument',
  grpc.web.MethodType.UNARY,
  proto.pando.api.esign.v1.ExecDocumentRequest,
  pando_api_esign_v1_shared_pb.ESignRequest,
  /**
   * @param {!proto.pando.api.esign.v1.ExecDocumentRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_esign_v1_shared_pb.ESignRequest.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pando.api.esign.v1.ExecDocumentRequest,
 *   !proto.pando.api.esign.v1.ESignRequest>}
 */
const methodInfo_ESignAdminService_ExecRemoveDocument = new grpc.web.AbstractClientBase.MethodInfo(
  pando_api_esign_v1_shared_pb.ESignRequest,
  /**
   * @param {!proto.pando.api.esign.v1.ExecDocumentRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_esign_v1_shared_pb.ESignRequest.deserializeBinary
);


/**
 * @param {!proto.pando.api.esign.v1.ExecDocumentRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pando.api.esign.v1.ESignRequest)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pando.api.esign.v1.ESignRequest>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pando.api.esign.v1.ESignAdminServiceClient.prototype.execRemoveDocument =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pando.api.esign.v1.ESignAdminService/ExecRemoveDocument',
      request,
      metadata || {},
      methodDescriptor_ESignAdminService_ExecRemoveDocument,
      callback);
};


/**
 * @param {!proto.pando.api.esign.v1.ExecDocumentRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pando.api.esign.v1.ESignRequest>}
 *     Promise that resolves to the response
 */
proto.pando.api.esign.v1.ESignAdminServicePromiseClient.prototype.execRemoveDocument =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pando.api.esign.v1.ESignAdminService/ExecRemoveDocument',
      request,
      metadata || {},
      methodDescriptor_ESignAdminService_ExecRemoveDocument);
};


module.exports = proto.pando.api.esign.v1;

