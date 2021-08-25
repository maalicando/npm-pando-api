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


var google_api_annotations_pb = require('../../../../../google/api/annotations_pb.js')

var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js')

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js')

var pando_api_extensions_pb = require('../../../../../pando/api/extensions_pb.js')

var pando_api_shared_pb = require('../../../../../pando/api/shared_pb.js')
const proto = {};
proto.pando = {};
proto.pando.api = {};
proto.pando.api.template = {};
proto.pando.api.template.v1 = require('./admin-beta_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.pando.api.template.v1.TemplateAdminBetaServiceClient =
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
proto.pando.api.template.v1.TemplateAdminBetaServicePromiseClient =
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
 *   !proto.pando.api.template.v1.GetFormFieldRequest,
 *   !proto.pando.api.template.v1.FormField>}
 */
const methodDescriptor_TemplateAdminBetaService_GetFormField = new grpc.web.MethodDescriptor(
  '/pando.api.template.v1.TemplateAdminBetaService/GetFormField',
  grpc.web.MethodType.UNARY,
  proto.pando.api.template.v1.GetFormFieldRequest,
  proto.pando.api.template.v1.FormField,
  /**
   * @param {!proto.pando.api.template.v1.GetFormFieldRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pando.api.template.v1.FormField.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pando.api.template.v1.GetFormFieldRequest,
 *   !proto.pando.api.template.v1.FormField>}
 */
const methodInfo_TemplateAdminBetaService_GetFormField = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pando.api.template.v1.FormField,
  /**
   * @param {!proto.pando.api.template.v1.GetFormFieldRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pando.api.template.v1.FormField.deserializeBinary
);


/**
 * @param {!proto.pando.api.template.v1.GetFormFieldRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pando.api.template.v1.FormField)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pando.api.template.v1.FormField>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pando.api.template.v1.TemplateAdminBetaServiceClient.prototype.getFormField =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pando.api.template.v1.TemplateAdminBetaService/GetFormField',
      request,
      metadata || {},
      methodDescriptor_TemplateAdminBetaService_GetFormField,
      callback);
};


/**
 * @param {!proto.pando.api.template.v1.GetFormFieldRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pando.api.template.v1.FormField>}
 *     Promise that resolves to the response
 */
proto.pando.api.template.v1.TemplateAdminBetaServicePromiseClient.prototype.getFormField =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pando.api.template.v1.TemplateAdminBetaService/GetFormField',
      request,
      metadata || {},
      methodDescriptor_TemplateAdminBetaService_GetFormField);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pando.api.template.v1.GetFormFieldsRequest,
 *   !proto.pando.api.template.v1.GetFormFieldsResponse>}
 */
const methodDescriptor_TemplateAdminBetaService_GetFormFields = new grpc.web.MethodDescriptor(
  '/pando.api.template.v1.TemplateAdminBetaService/GetFormFields',
  grpc.web.MethodType.UNARY,
  proto.pando.api.template.v1.GetFormFieldsRequest,
  proto.pando.api.template.v1.GetFormFieldsResponse,
  /**
   * @param {!proto.pando.api.template.v1.GetFormFieldsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pando.api.template.v1.GetFormFieldsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pando.api.template.v1.GetFormFieldsRequest,
 *   !proto.pando.api.template.v1.GetFormFieldsResponse>}
 */
const methodInfo_TemplateAdminBetaService_GetFormFields = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pando.api.template.v1.GetFormFieldsResponse,
  /**
   * @param {!proto.pando.api.template.v1.GetFormFieldsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pando.api.template.v1.GetFormFieldsResponse.deserializeBinary
);


/**
 * @param {!proto.pando.api.template.v1.GetFormFieldsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pando.api.template.v1.GetFormFieldsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pando.api.template.v1.GetFormFieldsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pando.api.template.v1.TemplateAdminBetaServiceClient.prototype.getFormFields =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pando.api.template.v1.TemplateAdminBetaService/GetFormFields',
      request,
      metadata || {},
      methodDescriptor_TemplateAdminBetaService_GetFormFields,
      callback);
};


/**
 * @param {!proto.pando.api.template.v1.GetFormFieldsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pando.api.template.v1.GetFormFieldsResponse>}
 *     Promise that resolves to the response
 */
proto.pando.api.template.v1.TemplateAdminBetaServicePromiseClient.prototype.getFormFields =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pando.api.template.v1.TemplateAdminBetaService/GetFormFields',
      request,
      metadata || {},
      methodDescriptor_TemplateAdminBetaService_GetFormFields);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pando.api.template.v1.CreateOrUpdateFormFieldRequest,
 *   !proto.pando.api.template.v1.FormField>}
 */
const methodDescriptor_TemplateAdminBetaService_CreateOrUpdateFormField = new grpc.web.MethodDescriptor(
  '/pando.api.template.v1.TemplateAdminBetaService/CreateOrUpdateFormField',
  grpc.web.MethodType.UNARY,
  proto.pando.api.template.v1.CreateOrUpdateFormFieldRequest,
  proto.pando.api.template.v1.FormField,
  /**
   * @param {!proto.pando.api.template.v1.CreateOrUpdateFormFieldRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pando.api.template.v1.FormField.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pando.api.template.v1.CreateOrUpdateFormFieldRequest,
 *   !proto.pando.api.template.v1.FormField>}
 */
const methodInfo_TemplateAdminBetaService_CreateOrUpdateFormField = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pando.api.template.v1.FormField,
  /**
   * @param {!proto.pando.api.template.v1.CreateOrUpdateFormFieldRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pando.api.template.v1.FormField.deserializeBinary
);


/**
 * @param {!proto.pando.api.template.v1.CreateOrUpdateFormFieldRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pando.api.template.v1.FormField)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pando.api.template.v1.FormField>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pando.api.template.v1.TemplateAdminBetaServiceClient.prototype.createOrUpdateFormField =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pando.api.template.v1.TemplateAdminBetaService/CreateOrUpdateFormField',
      request,
      metadata || {},
      methodDescriptor_TemplateAdminBetaService_CreateOrUpdateFormField,
      callback);
};


/**
 * @param {!proto.pando.api.template.v1.CreateOrUpdateFormFieldRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pando.api.template.v1.FormField>}
 *     Promise that resolves to the response
 */
proto.pando.api.template.v1.TemplateAdminBetaServicePromiseClient.prototype.createOrUpdateFormField =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pando.api.template.v1.TemplateAdminBetaService/CreateOrUpdateFormField',
      request,
      metadata || {},
      methodDescriptor_TemplateAdminBetaService_CreateOrUpdateFormField);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pando.api.template.v1.DeleteFormFieldRequest,
 *   !proto.pando.api.Empty>}
 */
const methodDescriptor_TemplateAdminBetaService_DeleteFormField = new grpc.web.MethodDescriptor(
  '/pando.api.template.v1.TemplateAdminBetaService/DeleteFormField',
  grpc.web.MethodType.UNARY,
  proto.pando.api.template.v1.DeleteFormFieldRequest,
  pando_api_shared_pb.Empty,
  /**
   * @param {!proto.pando.api.template.v1.DeleteFormFieldRequest} request
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
 *   !proto.pando.api.template.v1.DeleteFormFieldRequest,
 *   !proto.pando.api.Empty>}
 */
const methodInfo_TemplateAdminBetaService_DeleteFormField = new grpc.web.AbstractClientBase.MethodInfo(
  pando_api_shared_pb.Empty,
  /**
   * @param {!proto.pando.api.template.v1.DeleteFormFieldRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_shared_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.pando.api.template.v1.DeleteFormFieldRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pando.api.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pando.api.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pando.api.template.v1.TemplateAdminBetaServiceClient.prototype.deleteFormField =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pando.api.template.v1.TemplateAdminBetaService/DeleteFormField',
      request,
      metadata || {},
      methodDescriptor_TemplateAdminBetaService_DeleteFormField,
      callback);
};


/**
 * @param {!proto.pando.api.template.v1.DeleteFormFieldRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pando.api.Empty>}
 *     Promise that resolves to the response
 */
proto.pando.api.template.v1.TemplateAdminBetaServicePromiseClient.prototype.deleteFormField =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pando.api.template.v1.TemplateAdminBetaService/DeleteFormField',
      request,
      metadata || {},
      methodDescriptor_TemplateAdminBetaService_DeleteFormField);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pando.api.template.v1.GetStampRequest,
 *   !proto.pando.api.template.v1.Stamp>}
 */
const methodDescriptor_TemplateAdminBetaService_GetStamp = new grpc.web.MethodDescriptor(
  '/pando.api.template.v1.TemplateAdminBetaService/GetStamp',
  grpc.web.MethodType.UNARY,
  proto.pando.api.template.v1.GetStampRequest,
  proto.pando.api.template.v1.Stamp,
  /**
   * @param {!proto.pando.api.template.v1.GetStampRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pando.api.template.v1.Stamp.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pando.api.template.v1.GetStampRequest,
 *   !proto.pando.api.template.v1.Stamp>}
 */
const methodInfo_TemplateAdminBetaService_GetStamp = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pando.api.template.v1.Stamp,
  /**
   * @param {!proto.pando.api.template.v1.GetStampRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pando.api.template.v1.Stamp.deserializeBinary
);


/**
 * @param {!proto.pando.api.template.v1.GetStampRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pando.api.template.v1.Stamp)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pando.api.template.v1.Stamp>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pando.api.template.v1.TemplateAdminBetaServiceClient.prototype.getStamp =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pando.api.template.v1.TemplateAdminBetaService/GetStamp',
      request,
      metadata || {},
      methodDescriptor_TemplateAdminBetaService_GetStamp,
      callback);
};


/**
 * @param {!proto.pando.api.template.v1.GetStampRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pando.api.template.v1.Stamp>}
 *     Promise that resolves to the response
 */
proto.pando.api.template.v1.TemplateAdminBetaServicePromiseClient.prototype.getStamp =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pando.api.template.v1.TemplateAdminBetaService/GetStamp',
      request,
      metadata || {},
      methodDescriptor_TemplateAdminBetaService_GetStamp);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pando.api.template.v1.GetStampsRequest,
 *   !proto.pando.api.template.v1.GetStampsResponse>}
 */
const methodDescriptor_TemplateAdminBetaService_GetStamps = new grpc.web.MethodDescriptor(
  '/pando.api.template.v1.TemplateAdminBetaService/GetStamps',
  grpc.web.MethodType.UNARY,
  proto.pando.api.template.v1.GetStampsRequest,
  proto.pando.api.template.v1.GetStampsResponse,
  /**
   * @param {!proto.pando.api.template.v1.GetStampsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pando.api.template.v1.GetStampsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pando.api.template.v1.GetStampsRequest,
 *   !proto.pando.api.template.v1.GetStampsResponse>}
 */
const methodInfo_TemplateAdminBetaService_GetStamps = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pando.api.template.v1.GetStampsResponse,
  /**
   * @param {!proto.pando.api.template.v1.GetStampsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pando.api.template.v1.GetStampsResponse.deserializeBinary
);


/**
 * @param {!proto.pando.api.template.v1.GetStampsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pando.api.template.v1.GetStampsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pando.api.template.v1.GetStampsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pando.api.template.v1.TemplateAdminBetaServiceClient.prototype.getStamps =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pando.api.template.v1.TemplateAdminBetaService/GetStamps',
      request,
      metadata || {},
      methodDescriptor_TemplateAdminBetaService_GetStamps,
      callback);
};


/**
 * @param {!proto.pando.api.template.v1.GetStampsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pando.api.template.v1.GetStampsResponse>}
 *     Promise that resolves to the response
 */
proto.pando.api.template.v1.TemplateAdminBetaServicePromiseClient.prototype.getStamps =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pando.api.template.v1.TemplateAdminBetaService/GetStamps',
      request,
      metadata || {},
      methodDescriptor_TemplateAdminBetaService_GetStamps);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pando.api.template.v1.CreateOrUpdateStampRequest,
 *   !proto.pando.api.template.v1.Stamp>}
 */
const methodDescriptor_TemplateAdminBetaService_CreateOrUpdateStamp = new grpc.web.MethodDescriptor(
  '/pando.api.template.v1.TemplateAdminBetaService/CreateOrUpdateStamp',
  grpc.web.MethodType.UNARY,
  proto.pando.api.template.v1.CreateOrUpdateStampRequest,
  proto.pando.api.template.v1.Stamp,
  /**
   * @param {!proto.pando.api.template.v1.CreateOrUpdateStampRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pando.api.template.v1.Stamp.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pando.api.template.v1.CreateOrUpdateStampRequest,
 *   !proto.pando.api.template.v1.Stamp>}
 */
const methodInfo_TemplateAdminBetaService_CreateOrUpdateStamp = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pando.api.template.v1.Stamp,
  /**
   * @param {!proto.pando.api.template.v1.CreateOrUpdateStampRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pando.api.template.v1.Stamp.deserializeBinary
);


/**
 * @param {!proto.pando.api.template.v1.CreateOrUpdateStampRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pando.api.template.v1.Stamp)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pando.api.template.v1.Stamp>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pando.api.template.v1.TemplateAdminBetaServiceClient.prototype.createOrUpdateStamp =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pando.api.template.v1.TemplateAdminBetaService/CreateOrUpdateStamp',
      request,
      metadata || {},
      methodDescriptor_TemplateAdminBetaService_CreateOrUpdateStamp,
      callback);
};


/**
 * @param {!proto.pando.api.template.v1.CreateOrUpdateStampRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pando.api.template.v1.Stamp>}
 *     Promise that resolves to the response
 */
proto.pando.api.template.v1.TemplateAdminBetaServicePromiseClient.prototype.createOrUpdateStamp =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pando.api.template.v1.TemplateAdminBetaService/CreateOrUpdateStamp',
      request,
      metadata || {},
      methodDescriptor_TemplateAdminBetaService_CreateOrUpdateStamp);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pando.api.template.v1.DeleteStampRequest,
 *   !proto.pando.api.Empty>}
 */
const methodDescriptor_TemplateAdminBetaService_DeleteStamp = new grpc.web.MethodDescriptor(
  '/pando.api.template.v1.TemplateAdminBetaService/DeleteStamp',
  grpc.web.MethodType.UNARY,
  proto.pando.api.template.v1.DeleteStampRequest,
  pando_api_shared_pb.Empty,
  /**
   * @param {!proto.pando.api.template.v1.DeleteStampRequest} request
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
 *   !proto.pando.api.template.v1.DeleteStampRequest,
 *   !proto.pando.api.Empty>}
 */
const methodInfo_TemplateAdminBetaService_DeleteStamp = new grpc.web.AbstractClientBase.MethodInfo(
  pando_api_shared_pb.Empty,
  /**
   * @param {!proto.pando.api.template.v1.DeleteStampRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_shared_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.pando.api.template.v1.DeleteStampRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pando.api.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pando.api.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pando.api.template.v1.TemplateAdminBetaServiceClient.prototype.deleteStamp =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pando.api.template.v1.TemplateAdminBetaService/DeleteStamp',
      request,
      metadata || {},
      methodDescriptor_TemplateAdminBetaService_DeleteStamp,
      callback);
};


/**
 * @param {!proto.pando.api.template.v1.DeleteStampRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pando.api.Empty>}
 *     Promise that resolves to the response
 */
proto.pando.api.template.v1.TemplateAdminBetaServicePromiseClient.prototype.deleteStamp =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pando.api.template.v1.TemplateAdminBetaService/DeleteStamp',
      request,
      metadata || {},
      methodDescriptor_TemplateAdminBetaService_DeleteStamp);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pando.api.template.v1.CreateStampPageIndexesRequest,
 *   !proto.pando.api.template.v1.CreateStampPageIndexesResponse>}
 */
const methodDescriptor_TemplateAdminBetaService_CreateStampPageIndexes = new grpc.web.MethodDescriptor(
  '/pando.api.template.v1.TemplateAdminBetaService/CreateStampPageIndexes',
  grpc.web.MethodType.UNARY,
  proto.pando.api.template.v1.CreateStampPageIndexesRequest,
  proto.pando.api.template.v1.CreateStampPageIndexesResponse,
  /**
   * @param {!proto.pando.api.template.v1.CreateStampPageIndexesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pando.api.template.v1.CreateStampPageIndexesResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pando.api.template.v1.CreateStampPageIndexesRequest,
 *   !proto.pando.api.template.v1.CreateStampPageIndexesResponse>}
 */
const methodInfo_TemplateAdminBetaService_CreateStampPageIndexes = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pando.api.template.v1.CreateStampPageIndexesResponse,
  /**
   * @param {!proto.pando.api.template.v1.CreateStampPageIndexesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pando.api.template.v1.CreateStampPageIndexesResponse.deserializeBinary
);


/**
 * @param {!proto.pando.api.template.v1.CreateStampPageIndexesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pando.api.template.v1.CreateStampPageIndexesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pando.api.template.v1.CreateStampPageIndexesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pando.api.template.v1.TemplateAdminBetaServiceClient.prototype.createStampPageIndexes =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pando.api.template.v1.TemplateAdminBetaService/CreateStampPageIndexes',
      request,
      metadata || {},
      methodDescriptor_TemplateAdminBetaService_CreateStampPageIndexes,
      callback);
};


/**
 * @param {!proto.pando.api.template.v1.CreateStampPageIndexesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pando.api.template.v1.CreateStampPageIndexesResponse>}
 *     Promise that resolves to the response
 */
proto.pando.api.template.v1.TemplateAdminBetaServicePromiseClient.prototype.createStampPageIndexes =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pando.api.template.v1.TemplateAdminBetaService/CreateStampPageIndexes',
      request,
      metadata || {},
      methodDescriptor_TemplateAdminBetaService_CreateStampPageIndexes);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pando.api.template.v1.DeleteStampPageIndexesRequest,
 *   !proto.pando.api.Empty>}
 */
const methodDescriptor_TemplateAdminBetaService_DeleteStampPageIndexes = new grpc.web.MethodDescriptor(
  '/pando.api.template.v1.TemplateAdminBetaService/DeleteStampPageIndexes',
  grpc.web.MethodType.UNARY,
  proto.pando.api.template.v1.DeleteStampPageIndexesRequest,
  pando_api_shared_pb.Empty,
  /**
   * @param {!proto.pando.api.template.v1.DeleteStampPageIndexesRequest} request
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
 *   !proto.pando.api.template.v1.DeleteStampPageIndexesRequest,
 *   !proto.pando.api.Empty>}
 */
const methodInfo_TemplateAdminBetaService_DeleteStampPageIndexes = new grpc.web.AbstractClientBase.MethodInfo(
  pando_api_shared_pb.Empty,
  /**
   * @param {!proto.pando.api.template.v1.DeleteStampPageIndexesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_shared_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.pando.api.template.v1.DeleteStampPageIndexesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pando.api.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pando.api.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pando.api.template.v1.TemplateAdminBetaServiceClient.prototype.deleteStampPageIndexes =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pando.api.template.v1.TemplateAdminBetaService/DeleteStampPageIndexes',
      request,
      metadata || {},
      methodDescriptor_TemplateAdminBetaService_DeleteStampPageIndexes,
      callback);
};


/**
 * @param {!proto.pando.api.template.v1.DeleteStampPageIndexesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pando.api.Empty>}
 *     Promise that resolves to the response
 */
proto.pando.api.template.v1.TemplateAdminBetaServicePromiseClient.prototype.deleteStampPageIndexes =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pando.api.template.v1.TemplateAdminBetaService/DeleteStampPageIndexes',
      request,
      metadata || {},
      methodDescriptor_TemplateAdminBetaService_DeleteStampPageIndexes);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pando.api.template.v1.ExecPublishTemplateRequest,
 *   !proto.pando.api.Empty>}
 */
const methodDescriptor_TemplateAdminBetaService_ExecPublishTemplate = new grpc.web.MethodDescriptor(
  '/pando.api.template.v1.TemplateAdminBetaService/ExecPublishTemplate',
  grpc.web.MethodType.UNARY,
  proto.pando.api.template.v1.ExecPublishTemplateRequest,
  pando_api_shared_pb.Empty,
  /**
   * @param {!proto.pando.api.template.v1.ExecPublishTemplateRequest} request
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
 *   !proto.pando.api.template.v1.ExecPublishTemplateRequest,
 *   !proto.pando.api.Empty>}
 */
const methodInfo_TemplateAdminBetaService_ExecPublishTemplate = new grpc.web.AbstractClientBase.MethodInfo(
  pando_api_shared_pb.Empty,
  /**
   * @param {!proto.pando.api.template.v1.ExecPublishTemplateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_shared_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.pando.api.template.v1.ExecPublishTemplateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pando.api.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pando.api.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pando.api.template.v1.TemplateAdminBetaServiceClient.prototype.execPublishTemplate =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pando.api.template.v1.TemplateAdminBetaService/ExecPublishTemplate',
      request,
      metadata || {},
      methodDescriptor_TemplateAdminBetaService_ExecPublishTemplate,
      callback);
};


/**
 * @param {!proto.pando.api.template.v1.ExecPublishTemplateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pando.api.Empty>}
 *     Promise that resolves to the response
 */
proto.pando.api.template.v1.TemplateAdminBetaServicePromiseClient.prototype.execPublishTemplate =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pando.api.template.v1.TemplateAdminBetaService/ExecPublishTemplate',
      request,
      metadata || {},
      methodDescriptor_TemplateAdminBetaService_ExecPublishTemplate);
};


module.exports = proto.pando.api.template.v1;

