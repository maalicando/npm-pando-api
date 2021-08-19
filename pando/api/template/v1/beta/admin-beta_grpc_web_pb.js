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
 *   !proto.pando.api.template.v1.GetCheckboxRequest,
 *   !proto.pando.api.template.v1.Checkbox>}
 */
const methodDescriptor_TemplateAdminBetaService_GetCheckbox = new grpc.web.MethodDescriptor(
  '/pando.api.template.v1.TemplateAdminBetaService/GetCheckbox',
  grpc.web.MethodType.UNARY,
  proto.pando.api.template.v1.GetCheckboxRequest,
  proto.pando.api.template.v1.Checkbox,
  /**
   * @param {!proto.pando.api.template.v1.GetCheckboxRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pando.api.template.v1.Checkbox.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pando.api.template.v1.GetCheckboxRequest,
 *   !proto.pando.api.template.v1.Checkbox>}
 */
const methodInfo_TemplateAdminBetaService_GetCheckbox = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pando.api.template.v1.Checkbox,
  /**
   * @param {!proto.pando.api.template.v1.GetCheckboxRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pando.api.template.v1.Checkbox.deserializeBinary
);


/**
 * @param {!proto.pando.api.template.v1.GetCheckboxRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pando.api.template.v1.Checkbox)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pando.api.template.v1.Checkbox>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pando.api.template.v1.TemplateAdminBetaServiceClient.prototype.getCheckbox =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pando.api.template.v1.TemplateAdminBetaService/GetCheckbox',
      request,
      metadata || {},
      methodDescriptor_TemplateAdminBetaService_GetCheckbox,
      callback);
};


/**
 * @param {!proto.pando.api.template.v1.GetCheckboxRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pando.api.template.v1.Checkbox>}
 *     Promise that resolves to the response
 */
proto.pando.api.template.v1.TemplateAdminBetaServicePromiseClient.prototype.getCheckbox =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pando.api.template.v1.TemplateAdminBetaService/GetCheckbox',
      request,
      metadata || {},
      methodDescriptor_TemplateAdminBetaService_GetCheckbox);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pando.api.template.v1.GetCheckboxesRequest,
 *   !proto.pando.api.template.v1.GetCheckboxesResponse>}
 */
const methodDescriptor_TemplateAdminBetaService_GetCheckboxes = new grpc.web.MethodDescriptor(
  '/pando.api.template.v1.TemplateAdminBetaService/GetCheckboxes',
  grpc.web.MethodType.UNARY,
  proto.pando.api.template.v1.GetCheckboxesRequest,
  proto.pando.api.template.v1.GetCheckboxesResponse,
  /**
   * @param {!proto.pando.api.template.v1.GetCheckboxesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pando.api.template.v1.GetCheckboxesResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pando.api.template.v1.GetCheckboxesRequest,
 *   !proto.pando.api.template.v1.GetCheckboxesResponse>}
 */
const methodInfo_TemplateAdminBetaService_GetCheckboxes = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pando.api.template.v1.GetCheckboxesResponse,
  /**
   * @param {!proto.pando.api.template.v1.GetCheckboxesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pando.api.template.v1.GetCheckboxesResponse.deserializeBinary
);


/**
 * @param {!proto.pando.api.template.v1.GetCheckboxesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pando.api.template.v1.GetCheckboxesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pando.api.template.v1.GetCheckboxesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pando.api.template.v1.TemplateAdminBetaServiceClient.prototype.getCheckboxes =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pando.api.template.v1.TemplateAdminBetaService/GetCheckboxes',
      request,
      metadata || {},
      methodDescriptor_TemplateAdminBetaService_GetCheckboxes,
      callback);
};


/**
 * @param {!proto.pando.api.template.v1.GetCheckboxesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pando.api.template.v1.GetCheckboxesResponse>}
 *     Promise that resolves to the response
 */
proto.pando.api.template.v1.TemplateAdminBetaServicePromiseClient.prototype.getCheckboxes =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pando.api.template.v1.TemplateAdminBetaService/GetCheckboxes',
      request,
      metadata || {},
      methodDescriptor_TemplateAdminBetaService_GetCheckboxes);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pando.api.template.v1.CreateOrUpdateCheckboxRequest,
 *   !proto.pando.api.template.v1.Checkbox>}
 */
const methodDescriptor_TemplateAdminBetaService_CreateOrUpdateCheckbox = new grpc.web.MethodDescriptor(
  '/pando.api.template.v1.TemplateAdminBetaService/CreateOrUpdateCheckbox',
  grpc.web.MethodType.UNARY,
  proto.pando.api.template.v1.CreateOrUpdateCheckboxRequest,
  proto.pando.api.template.v1.Checkbox,
  /**
   * @param {!proto.pando.api.template.v1.CreateOrUpdateCheckboxRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pando.api.template.v1.Checkbox.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pando.api.template.v1.CreateOrUpdateCheckboxRequest,
 *   !proto.pando.api.template.v1.Checkbox>}
 */
const methodInfo_TemplateAdminBetaService_CreateOrUpdateCheckbox = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pando.api.template.v1.Checkbox,
  /**
   * @param {!proto.pando.api.template.v1.CreateOrUpdateCheckboxRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pando.api.template.v1.Checkbox.deserializeBinary
);


/**
 * @param {!proto.pando.api.template.v1.CreateOrUpdateCheckboxRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pando.api.template.v1.Checkbox)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pando.api.template.v1.Checkbox>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pando.api.template.v1.TemplateAdminBetaServiceClient.prototype.createOrUpdateCheckbox =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pando.api.template.v1.TemplateAdminBetaService/CreateOrUpdateCheckbox',
      request,
      metadata || {},
      methodDescriptor_TemplateAdminBetaService_CreateOrUpdateCheckbox,
      callback);
};


/**
 * @param {!proto.pando.api.template.v1.CreateOrUpdateCheckboxRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pando.api.template.v1.Checkbox>}
 *     Promise that resolves to the response
 */
proto.pando.api.template.v1.TemplateAdminBetaServicePromiseClient.prototype.createOrUpdateCheckbox =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pando.api.template.v1.TemplateAdminBetaService/CreateOrUpdateCheckbox',
      request,
      metadata || {},
      methodDescriptor_TemplateAdminBetaService_CreateOrUpdateCheckbox);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pando.api.template.v1.DeleteCheckboxRequest,
 *   !proto.pando.api.Empty>}
 */
const methodDescriptor_TemplateAdminBetaService_DeleteCheckbox = new grpc.web.MethodDescriptor(
  '/pando.api.template.v1.TemplateAdminBetaService/DeleteCheckbox',
  grpc.web.MethodType.UNARY,
  proto.pando.api.template.v1.DeleteCheckboxRequest,
  pando_api_shared_pb.Empty,
  /**
   * @param {!proto.pando.api.template.v1.DeleteCheckboxRequest} request
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
 *   !proto.pando.api.template.v1.DeleteCheckboxRequest,
 *   !proto.pando.api.Empty>}
 */
const methodInfo_TemplateAdminBetaService_DeleteCheckbox = new grpc.web.AbstractClientBase.MethodInfo(
  pando_api_shared_pb.Empty,
  /**
   * @param {!proto.pando.api.template.v1.DeleteCheckboxRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_shared_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.pando.api.template.v1.DeleteCheckboxRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pando.api.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pando.api.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pando.api.template.v1.TemplateAdminBetaServiceClient.prototype.deleteCheckbox =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pando.api.template.v1.TemplateAdminBetaService/DeleteCheckbox',
      request,
      metadata || {},
      methodDescriptor_TemplateAdminBetaService_DeleteCheckbox,
      callback);
};


/**
 * @param {!proto.pando.api.template.v1.DeleteCheckboxRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pando.api.Empty>}
 *     Promise that resolves to the response
 */
proto.pando.api.template.v1.TemplateAdminBetaServicePromiseClient.prototype.deleteCheckbox =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pando.api.template.v1.TemplateAdminBetaService/DeleteCheckbox',
      request,
      metadata || {},
      methodDescriptor_TemplateAdminBetaService_DeleteCheckbox);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pando.api.template.v1.GetTextFieldRequest,
 *   !proto.pando.api.template.v1.TextField>}
 */
const methodDescriptor_TemplateAdminBetaService_GetTextField = new grpc.web.MethodDescriptor(
  '/pando.api.template.v1.TemplateAdminBetaService/GetTextField',
  grpc.web.MethodType.UNARY,
  proto.pando.api.template.v1.GetTextFieldRequest,
  proto.pando.api.template.v1.TextField,
  /**
   * @param {!proto.pando.api.template.v1.GetTextFieldRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pando.api.template.v1.TextField.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pando.api.template.v1.GetTextFieldRequest,
 *   !proto.pando.api.template.v1.TextField>}
 */
const methodInfo_TemplateAdminBetaService_GetTextField = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pando.api.template.v1.TextField,
  /**
   * @param {!proto.pando.api.template.v1.GetTextFieldRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pando.api.template.v1.TextField.deserializeBinary
);


/**
 * @param {!proto.pando.api.template.v1.GetTextFieldRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pando.api.template.v1.TextField)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pando.api.template.v1.TextField>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pando.api.template.v1.TemplateAdminBetaServiceClient.prototype.getTextField =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pando.api.template.v1.TemplateAdminBetaService/GetTextField',
      request,
      metadata || {},
      methodDescriptor_TemplateAdminBetaService_GetTextField,
      callback);
};


/**
 * @param {!proto.pando.api.template.v1.GetTextFieldRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pando.api.template.v1.TextField>}
 *     Promise that resolves to the response
 */
proto.pando.api.template.v1.TemplateAdminBetaServicePromiseClient.prototype.getTextField =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pando.api.template.v1.TemplateAdminBetaService/GetTextField',
      request,
      metadata || {},
      methodDescriptor_TemplateAdminBetaService_GetTextField);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pando.api.template.v1.GetTextFieldsRequest,
 *   !proto.pando.api.template.v1.GetTextFieldsResponse>}
 */
const methodDescriptor_TemplateAdminBetaService_GetTextFields = new grpc.web.MethodDescriptor(
  '/pando.api.template.v1.TemplateAdminBetaService/GetTextFields',
  grpc.web.MethodType.UNARY,
  proto.pando.api.template.v1.GetTextFieldsRequest,
  proto.pando.api.template.v1.GetTextFieldsResponse,
  /**
   * @param {!proto.pando.api.template.v1.GetTextFieldsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pando.api.template.v1.GetTextFieldsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pando.api.template.v1.GetTextFieldsRequest,
 *   !proto.pando.api.template.v1.GetTextFieldsResponse>}
 */
const methodInfo_TemplateAdminBetaService_GetTextFields = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pando.api.template.v1.GetTextFieldsResponse,
  /**
   * @param {!proto.pando.api.template.v1.GetTextFieldsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pando.api.template.v1.GetTextFieldsResponse.deserializeBinary
);


/**
 * @param {!proto.pando.api.template.v1.GetTextFieldsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pando.api.template.v1.GetTextFieldsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pando.api.template.v1.GetTextFieldsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pando.api.template.v1.TemplateAdminBetaServiceClient.prototype.getTextFields =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pando.api.template.v1.TemplateAdminBetaService/GetTextFields',
      request,
      metadata || {},
      methodDescriptor_TemplateAdminBetaService_GetTextFields,
      callback);
};


/**
 * @param {!proto.pando.api.template.v1.GetTextFieldsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pando.api.template.v1.GetTextFieldsResponse>}
 *     Promise that resolves to the response
 */
proto.pando.api.template.v1.TemplateAdminBetaServicePromiseClient.prototype.getTextFields =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pando.api.template.v1.TemplateAdminBetaService/GetTextFields',
      request,
      metadata || {},
      methodDescriptor_TemplateAdminBetaService_GetTextFields);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pando.api.template.v1.CreateOrUpdateTextFieldRequest,
 *   !proto.pando.api.template.v1.TextField>}
 */
const methodDescriptor_TemplateAdminBetaService_CreateOrUpdateTextField = new grpc.web.MethodDescriptor(
  '/pando.api.template.v1.TemplateAdminBetaService/CreateOrUpdateTextField',
  grpc.web.MethodType.UNARY,
  proto.pando.api.template.v1.CreateOrUpdateTextFieldRequest,
  proto.pando.api.template.v1.TextField,
  /**
   * @param {!proto.pando.api.template.v1.CreateOrUpdateTextFieldRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pando.api.template.v1.TextField.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pando.api.template.v1.CreateOrUpdateTextFieldRequest,
 *   !proto.pando.api.template.v1.TextField>}
 */
const methodInfo_TemplateAdminBetaService_CreateOrUpdateTextField = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pando.api.template.v1.TextField,
  /**
   * @param {!proto.pando.api.template.v1.CreateOrUpdateTextFieldRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pando.api.template.v1.TextField.deserializeBinary
);


/**
 * @param {!proto.pando.api.template.v1.CreateOrUpdateTextFieldRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pando.api.template.v1.TextField)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pando.api.template.v1.TextField>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pando.api.template.v1.TemplateAdminBetaServiceClient.prototype.createOrUpdateTextField =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pando.api.template.v1.TemplateAdminBetaService/CreateOrUpdateTextField',
      request,
      metadata || {},
      methodDescriptor_TemplateAdminBetaService_CreateOrUpdateTextField,
      callback);
};


/**
 * @param {!proto.pando.api.template.v1.CreateOrUpdateTextFieldRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pando.api.template.v1.TextField>}
 *     Promise that resolves to the response
 */
proto.pando.api.template.v1.TemplateAdminBetaServicePromiseClient.prototype.createOrUpdateTextField =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pando.api.template.v1.TemplateAdminBetaService/CreateOrUpdateTextField',
      request,
      metadata || {},
      methodDescriptor_TemplateAdminBetaService_CreateOrUpdateTextField);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pando.api.template.v1.DeleteTextFieldRequest,
 *   !proto.pando.api.Empty>}
 */
const methodDescriptor_TemplateAdminBetaService_DeleteTextField = new grpc.web.MethodDescriptor(
  '/pando.api.template.v1.TemplateAdminBetaService/DeleteTextField',
  grpc.web.MethodType.UNARY,
  proto.pando.api.template.v1.DeleteTextFieldRequest,
  pando_api_shared_pb.Empty,
  /**
   * @param {!proto.pando.api.template.v1.DeleteTextFieldRequest} request
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
 *   !proto.pando.api.template.v1.DeleteTextFieldRequest,
 *   !proto.pando.api.Empty>}
 */
const methodInfo_TemplateAdminBetaService_DeleteTextField = new grpc.web.AbstractClientBase.MethodInfo(
  pando_api_shared_pb.Empty,
  /**
   * @param {!proto.pando.api.template.v1.DeleteTextFieldRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_shared_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.pando.api.template.v1.DeleteTextFieldRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pando.api.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pando.api.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pando.api.template.v1.TemplateAdminBetaServiceClient.prototype.deleteTextField =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pando.api.template.v1.TemplateAdminBetaService/DeleteTextField',
      request,
      metadata || {},
      methodDescriptor_TemplateAdminBetaService_DeleteTextField,
      callback);
};


/**
 * @param {!proto.pando.api.template.v1.DeleteTextFieldRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pando.api.Empty>}
 *     Promise that resolves to the response
 */
proto.pando.api.template.v1.TemplateAdminBetaServicePromiseClient.prototype.deleteTextField =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pando.api.template.v1.TemplateAdminBetaService/DeleteTextField',
      request,
      metadata || {},
      methodDescriptor_TemplateAdminBetaService_DeleteTextField);
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


module.exports = proto.pando.api.template.v1;

