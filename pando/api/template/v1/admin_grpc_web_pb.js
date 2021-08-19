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

var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js')

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js')

var pando_api_extensions_pb = require('../../../../pando/api/extensions_pb.js')

var pando_api_shared_pb = require('../../../../pando/api/shared_pb.js')
const proto = {};
proto.pando = {};
proto.pando.api = {};
proto.pando.api.template = {};
proto.pando.api.template.v1 = require('./admin_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.pando.api.template.v1.TemplateAdminServiceClient =
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
proto.pando.api.template.v1.TemplateAdminServicePromiseClient =
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
 *   !proto.pando.api.template.v1.TemplateRequest,
 *   !proto.pando.api.template.v1.Template>}
 */
const methodDescriptor_TemplateAdminService_GetTemplate = new grpc.web.MethodDescriptor(
  '/pando.api.template.v1.TemplateAdminService/GetTemplate',
  grpc.web.MethodType.UNARY,
  proto.pando.api.template.v1.TemplateRequest,
  proto.pando.api.template.v1.Template,
  /**
   * @param {!proto.pando.api.template.v1.TemplateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pando.api.template.v1.Template.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pando.api.template.v1.TemplateRequest,
 *   !proto.pando.api.template.v1.Template>}
 */
const methodInfo_TemplateAdminService_GetTemplate = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pando.api.template.v1.Template,
  /**
   * @param {!proto.pando.api.template.v1.TemplateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pando.api.template.v1.Template.deserializeBinary
);


/**
 * @param {!proto.pando.api.template.v1.TemplateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pando.api.template.v1.Template)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pando.api.template.v1.Template>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pando.api.template.v1.TemplateAdminServiceClient.prototype.getTemplate =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pando.api.template.v1.TemplateAdminService/GetTemplate',
      request,
      metadata || {},
      methodDescriptor_TemplateAdminService_GetTemplate,
      callback);
};


/**
 * @param {!proto.pando.api.template.v1.TemplateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pando.api.template.v1.Template>}
 *     Promise that resolves to the response
 */
proto.pando.api.template.v1.TemplateAdminServicePromiseClient.prototype.getTemplate =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pando.api.template.v1.TemplateAdminService/GetTemplate',
      request,
      metadata || {},
      methodDescriptor_TemplateAdminService_GetTemplate);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pando.api.template.v1.TemplateListRequest,
 *   !proto.pando.api.template.v1.TemplateList>}
 */
const methodDescriptor_TemplateAdminService_GetTemplateList = new grpc.web.MethodDescriptor(
  '/pando.api.template.v1.TemplateAdminService/GetTemplateList',
  grpc.web.MethodType.UNARY,
  proto.pando.api.template.v1.TemplateListRequest,
  proto.pando.api.template.v1.TemplateList,
  /**
   * @param {!proto.pando.api.template.v1.TemplateListRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pando.api.template.v1.TemplateList.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pando.api.template.v1.TemplateListRequest,
 *   !proto.pando.api.template.v1.TemplateList>}
 */
const methodInfo_TemplateAdminService_GetTemplateList = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pando.api.template.v1.TemplateList,
  /**
   * @param {!proto.pando.api.template.v1.TemplateListRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pando.api.template.v1.TemplateList.deserializeBinary
);


/**
 * @param {!proto.pando.api.template.v1.TemplateListRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pando.api.template.v1.TemplateList)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pando.api.template.v1.TemplateList>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pando.api.template.v1.TemplateAdminServiceClient.prototype.getTemplateList =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pando.api.template.v1.TemplateAdminService/GetTemplateList',
      request,
      metadata || {},
      methodDescriptor_TemplateAdminService_GetTemplateList,
      callback);
};


/**
 * @param {!proto.pando.api.template.v1.TemplateListRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pando.api.template.v1.TemplateList>}
 *     Promise that resolves to the response
 */
proto.pando.api.template.v1.TemplateAdminServicePromiseClient.prototype.getTemplateList =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pando.api.template.v1.TemplateAdminService/GetTemplateList',
      request,
      metadata || {},
      methodDescriptor_TemplateAdminService_GetTemplateList);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pando.api.template.v1.TemplateVariablesRequest,
 *   !proto.pando.api.template.v1.TemplateVariables>}
 */
const methodDescriptor_TemplateAdminService_GetTemplateVariables = new grpc.web.MethodDescriptor(
  '/pando.api.template.v1.TemplateAdminService/GetTemplateVariables',
  grpc.web.MethodType.UNARY,
  proto.pando.api.template.v1.TemplateVariablesRequest,
  proto.pando.api.template.v1.TemplateVariables,
  /**
   * @param {!proto.pando.api.template.v1.TemplateVariablesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pando.api.template.v1.TemplateVariables.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pando.api.template.v1.TemplateVariablesRequest,
 *   !proto.pando.api.template.v1.TemplateVariables>}
 */
const methodInfo_TemplateAdminService_GetTemplateVariables = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pando.api.template.v1.TemplateVariables,
  /**
   * @param {!proto.pando.api.template.v1.TemplateVariablesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pando.api.template.v1.TemplateVariables.deserializeBinary
);


/**
 * @param {!proto.pando.api.template.v1.TemplateVariablesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pando.api.template.v1.TemplateVariables)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pando.api.template.v1.TemplateVariables>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pando.api.template.v1.TemplateAdminServiceClient.prototype.getTemplateVariables =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pando.api.template.v1.TemplateAdminService/GetTemplateVariables',
      request,
      metadata || {},
      methodDescriptor_TemplateAdminService_GetTemplateVariables,
      callback);
};


/**
 * @param {!proto.pando.api.template.v1.TemplateVariablesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pando.api.template.v1.TemplateVariables>}
 *     Promise that resolves to the response
 */
proto.pando.api.template.v1.TemplateAdminServicePromiseClient.prototype.getTemplateVariables =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pando.api.template.v1.TemplateAdminService/GetTemplateVariables',
      request,
      metadata || {},
      methodDescriptor_TemplateAdminService_GetTemplateVariables);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pando.api.template.v1.TemplateVariablesWithTypeRequest,
 *   !proto.pando.api.template.v1.TemplateVariablesWithTypeResponse>}
 */
const methodDescriptor_TemplateAdminService_GetTemplateVariablesWithType = new grpc.web.MethodDescriptor(
  '/pando.api.template.v1.TemplateAdminService/GetTemplateVariablesWithType',
  grpc.web.MethodType.UNARY,
  proto.pando.api.template.v1.TemplateVariablesWithTypeRequest,
  proto.pando.api.template.v1.TemplateVariablesWithTypeResponse,
  /**
   * @param {!proto.pando.api.template.v1.TemplateVariablesWithTypeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pando.api.template.v1.TemplateVariablesWithTypeResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pando.api.template.v1.TemplateVariablesWithTypeRequest,
 *   !proto.pando.api.template.v1.TemplateVariablesWithTypeResponse>}
 */
const methodInfo_TemplateAdminService_GetTemplateVariablesWithType = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pando.api.template.v1.TemplateVariablesWithTypeResponse,
  /**
   * @param {!proto.pando.api.template.v1.TemplateVariablesWithTypeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pando.api.template.v1.TemplateVariablesWithTypeResponse.deserializeBinary
);


/**
 * @param {!proto.pando.api.template.v1.TemplateVariablesWithTypeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pando.api.template.v1.TemplateVariablesWithTypeResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pando.api.template.v1.TemplateVariablesWithTypeResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pando.api.template.v1.TemplateAdminServiceClient.prototype.getTemplateVariablesWithType =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pando.api.template.v1.TemplateAdminService/GetTemplateVariablesWithType',
      request,
      metadata || {},
      methodDescriptor_TemplateAdminService_GetTemplateVariablesWithType,
      callback);
};


/**
 * @param {!proto.pando.api.template.v1.TemplateVariablesWithTypeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pando.api.template.v1.TemplateVariablesWithTypeResponse>}
 *     Promise that resolves to the response
 */
proto.pando.api.template.v1.TemplateAdminServicePromiseClient.prototype.getTemplateVariablesWithType =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pando.api.template.v1.TemplateAdminService/GetTemplateVariablesWithType',
      request,
      metadata || {},
      methodDescriptor_TemplateAdminService_GetTemplateVariablesWithType);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pando.api.template.v1.GetVariableItemsRequest,
 *   !proto.pando.api.template.v1.VariableItemList>}
 */
const methodDescriptor_TemplateAdminService_GetVariables = new grpc.web.MethodDescriptor(
  '/pando.api.template.v1.TemplateAdminService/GetVariables',
  grpc.web.MethodType.UNARY,
  proto.pando.api.template.v1.GetVariableItemsRequest,
  proto.pando.api.template.v1.VariableItemList,
  /**
   * @param {!proto.pando.api.template.v1.GetVariableItemsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pando.api.template.v1.VariableItemList.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pando.api.template.v1.GetVariableItemsRequest,
 *   !proto.pando.api.template.v1.VariableItemList>}
 */
const methodInfo_TemplateAdminService_GetVariables = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pando.api.template.v1.VariableItemList,
  /**
   * @param {!proto.pando.api.template.v1.GetVariableItemsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pando.api.template.v1.VariableItemList.deserializeBinary
);


/**
 * @param {!proto.pando.api.template.v1.GetVariableItemsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pando.api.template.v1.VariableItemList)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pando.api.template.v1.VariableItemList>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pando.api.template.v1.TemplateAdminServiceClient.prototype.getVariables =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pando.api.template.v1.TemplateAdminService/GetVariables',
      request,
      metadata || {},
      methodDescriptor_TemplateAdminService_GetVariables,
      callback);
};


/**
 * @param {!proto.pando.api.template.v1.GetVariableItemsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pando.api.template.v1.VariableItemList>}
 *     Promise that resolves to the response
 */
proto.pando.api.template.v1.TemplateAdminServicePromiseClient.prototype.getVariables =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pando.api.template.v1.TemplateAdminService/GetVariables',
      request,
      metadata || {},
      methodDescriptor_TemplateAdminService_GetVariables);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pando.api.template.v1.GetVariableItemRequest,
 *   !proto.pando.api.template.v1.VariableItem>}
 */
const methodDescriptor_TemplateAdminService_GetVariable = new grpc.web.MethodDescriptor(
  '/pando.api.template.v1.TemplateAdminService/GetVariable',
  grpc.web.MethodType.UNARY,
  proto.pando.api.template.v1.GetVariableItemRequest,
  proto.pando.api.template.v1.VariableItem,
  /**
   * @param {!proto.pando.api.template.v1.GetVariableItemRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pando.api.template.v1.VariableItem.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pando.api.template.v1.GetVariableItemRequest,
 *   !proto.pando.api.template.v1.VariableItem>}
 */
const methodInfo_TemplateAdminService_GetVariable = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pando.api.template.v1.VariableItem,
  /**
   * @param {!proto.pando.api.template.v1.GetVariableItemRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pando.api.template.v1.VariableItem.deserializeBinary
);


/**
 * @param {!proto.pando.api.template.v1.GetVariableItemRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pando.api.template.v1.VariableItem)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pando.api.template.v1.VariableItem>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pando.api.template.v1.TemplateAdminServiceClient.prototype.getVariable =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pando.api.template.v1.TemplateAdminService/GetVariable',
      request,
      metadata || {},
      methodDescriptor_TemplateAdminService_GetVariable,
      callback);
};


/**
 * @param {!proto.pando.api.template.v1.GetVariableItemRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pando.api.template.v1.VariableItem>}
 *     Promise that resolves to the response
 */
proto.pando.api.template.v1.TemplateAdminServicePromiseClient.prototype.getVariable =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pando.api.template.v1.TemplateAdminService/GetVariable',
      request,
      metadata || {},
      methodDescriptor_TemplateAdminService_GetVariable);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pando.api.template.v1.CreateOrUpdateTemplateRequest,
 *   !proto.pando.api.template.v1.Template>}
 */
const methodDescriptor_TemplateAdminService_CreateOrUpdateTemplate = new grpc.web.MethodDescriptor(
  '/pando.api.template.v1.TemplateAdminService/CreateOrUpdateTemplate',
  grpc.web.MethodType.UNARY,
  proto.pando.api.template.v1.CreateOrUpdateTemplateRequest,
  proto.pando.api.template.v1.Template,
  /**
   * @param {!proto.pando.api.template.v1.CreateOrUpdateTemplateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pando.api.template.v1.Template.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pando.api.template.v1.CreateOrUpdateTemplateRequest,
 *   !proto.pando.api.template.v1.Template>}
 */
const methodInfo_TemplateAdminService_CreateOrUpdateTemplate = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pando.api.template.v1.Template,
  /**
   * @param {!proto.pando.api.template.v1.CreateOrUpdateTemplateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pando.api.template.v1.Template.deserializeBinary
);


/**
 * @param {!proto.pando.api.template.v1.CreateOrUpdateTemplateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pando.api.template.v1.Template)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pando.api.template.v1.Template>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pando.api.template.v1.TemplateAdminServiceClient.prototype.createOrUpdateTemplate =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pando.api.template.v1.TemplateAdminService/CreateOrUpdateTemplate',
      request,
      metadata || {},
      methodDescriptor_TemplateAdminService_CreateOrUpdateTemplate,
      callback);
};


/**
 * @param {!proto.pando.api.template.v1.CreateOrUpdateTemplateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pando.api.template.v1.Template>}
 *     Promise that resolves to the response
 */
proto.pando.api.template.v1.TemplateAdminServicePromiseClient.prototype.createOrUpdateTemplate =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pando.api.template.v1.TemplateAdminService/CreateOrUpdateTemplate',
      request,
      metadata || {},
      methodDescriptor_TemplateAdminService_CreateOrUpdateTemplate);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pando.api.template.v1.VariableItem,
 *   !proto.pando.api.template.v1.VariableItem>}
 */
const methodDescriptor_TemplateAdminService_CreateVariable = new grpc.web.MethodDescriptor(
  '/pando.api.template.v1.TemplateAdminService/CreateVariable',
  grpc.web.MethodType.UNARY,
  proto.pando.api.template.v1.VariableItem,
  proto.pando.api.template.v1.VariableItem,
  /**
   * @param {!proto.pando.api.template.v1.VariableItem} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pando.api.template.v1.VariableItem.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pando.api.template.v1.VariableItem,
 *   !proto.pando.api.template.v1.VariableItem>}
 */
const methodInfo_TemplateAdminService_CreateVariable = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pando.api.template.v1.VariableItem,
  /**
   * @param {!proto.pando.api.template.v1.VariableItem} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pando.api.template.v1.VariableItem.deserializeBinary
);


/**
 * @param {!proto.pando.api.template.v1.VariableItem} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pando.api.template.v1.VariableItem)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pando.api.template.v1.VariableItem>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pando.api.template.v1.TemplateAdminServiceClient.prototype.createVariable =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pando.api.template.v1.TemplateAdminService/CreateVariable',
      request,
      metadata || {},
      methodDescriptor_TemplateAdminService_CreateVariable,
      callback);
};


/**
 * @param {!proto.pando.api.template.v1.VariableItem} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pando.api.template.v1.VariableItem>}
 *     Promise that resolves to the response
 */
proto.pando.api.template.v1.TemplateAdminServicePromiseClient.prototype.createVariable =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pando.api.template.v1.TemplateAdminService/CreateVariable',
      request,
      metadata || {},
      methodDescriptor_TemplateAdminService_CreateVariable);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pando.api.template.v1.UpdateVariableItemRequest,
 *   !proto.pando.api.template.v1.VariableItem>}
 */
const methodDescriptor_TemplateAdminService_UpdateVariable = new grpc.web.MethodDescriptor(
  '/pando.api.template.v1.TemplateAdminService/UpdateVariable',
  grpc.web.MethodType.UNARY,
  proto.pando.api.template.v1.UpdateVariableItemRequest,
  proto.pando.api.template.v1.VariableItem,
  /**
   * @param {!proto.pando.api.template.v1.UpdateVariableItemRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pando.api.template.v1.VariableItem.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pando.api.template.v1.UpdateVariableItemRequest,
 *   !proto.pando.api.template.v1.VariableItem>}
 */
const methodInfo_TemplateAdminService_UpdateVariable = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pando.api.template.v1.VariableItem,
  /**
   * @param {!proto.pando.api.template.v1.UpdateVariableItemRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pando.api.template.v1.VariableItem.deserializeBinary
);


/**
 * @param {!proto.pando.api.template.v1.UpdateVariableItemRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pando.api.template.v1.VariableItem)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pando.api.template.v1.VariableItem>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pando.api.template.v1.TemplateAdminServiceClient.prototype.updateVariable =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pando.api.template.v1.TemplateAdminService/UpdateVariable',
      request,
      metadata || {},
      methodDescriptor_TemplateAdminService_UpdateVariable,
      callback);
};


/**
 * @param {!proto.pando.api.template.v1.UpdateVariableItemRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pando.api.template.v1.VariableItem>}
 *     Promise that resolves to the response
 */
proto.pando.api.template.v1.TemplateAdminServicePromiseClient.prototype.updateVariable =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pando.api.template.v1.TemplateAdminService/UpdateVariable',
      request,
      metadata || {},
      methodDescriptor_TemplateAdminService_UpdateVariable);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pando.api.template.v1.TemplateRequest,
 *   !proto.pando.api.Empty>}
 */
const methodDescriptor_TemplateAdminService_DeleteTemplate = new grpc.web.MethodDescriptor(
  '/pando.api.template.v1.TemplateAdminService/DeleteTemplate',
  grpc.web.MethodType.UNARY,
  proto.pando.api.template.v1.TemplateRequest,
  pando_api_shared_pb.Empty,
  /**
   * @param {!proto.pando.api.template.v1.TemplateRequest} request
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
 *   !proto.pando.api.template.v1.TemplateRequest,
 *   !proto.pando.api.Empty>}
 */
const methodInfo_TemplateAdminService_DeleteTemplate = new grpc.web.AbstractClientBase.MethodInfo(
  pando_api_shared_pb.Empty,
  /**
   * @param {!proto.pando.api.template.v1.TemplateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_shared_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.pando.api.template.v1.TemplateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pando.api.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pando.api.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pando.api.template.v1.TemplateAdminServiceClient.prototype.deleteTemplate =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pando.api.template.v1.TemplateAdminService/DeleteTemplate',
      request,
      metadata || {},
      methodDescriptor_TemplateAdminService_DeleteTemplate,
      callback);
};


/**
 * @param {!proto.pando.api.template.v1.TemplateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pando.api.Empty>}
 *     Promise that resolves to the response
 */
proto.pando.api.template.v1.TemplateAdminServicePromiseClient.prototype.deleteTemplate =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pando.api.template.v1.TemplateAdminService/DeleteTemplate',
      request,
      metadata || {},
      methodDescriptor_TemplateAdminService_DeleteTemplate);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pando.api.template.v1.DeleteVariableItemRequest,
 *   !proto.pando.api.Empty>}
 */
const methodDescriptor_TemplateAdminService_DeleteVariable = new grpc.web.MethodDescriptor(
  '/pando.api.template.v1.TemplateAdminService/DeleteVariable',
  grpc.web.MethodType.UNARY,
  proto.pando.api.template.v1.DeleteVariableItemRequest,
  pando_api_shared_pb.Empty,
  /**
   * @param {!proto.pando.api.template.v1.DeleteVariableItemRequest} request
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
 *   !proto.pando.api.template.v1.DeleteVariableItemRequest,
 *   !proto.pando.api.Empty>}
 */
const methodInfo_TemplateAdminService_DeleteVariable = new grpc.web.AbstractClientBase.MethodInfo(
  pando_api_shared_pb.Empty,
  /**
   * @param {!proto.pando.api.template.v1.DeleteVariableItemRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_shared_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.pando.api.template.v1.DeleteVariableItemRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pando.api.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pando.api.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pando.api.template.v1.TemplateAdminServiceClient.prototype.deleteVariable =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pando.api.template.v1.TemplateAdminService/DeleteVariable',
      request,
      metadata || {},
      methodDescriptor_TemplateAdminService_DeleteVariable,
      callback);
};


/**
 * @param {!proto.pando.api.template.v1.DeleteVariableItemRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pando.api.Empty>}
 *     Promise that resolves to the response
 */
proto.pando.api.template.v1.TemplateAdminServicePromiseClient.prototype.deleteVariable =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pando.api.template.v1.TemplateAdminService/DeleteVariable',
      request,
      metadata || {},
      methodDescriptor_TemplateAdminService_DeleteVariable);
};


module.exports = proto.pando.api.template.v1;

