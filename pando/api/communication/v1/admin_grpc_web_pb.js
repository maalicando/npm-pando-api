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


var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js')

var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js')

var pando_api_extensions_pb = require('../../../../pando/api/extensions_pb.js')

var pando_api_shared_pb = require('../../../../pando/api/shared_pb.js')
const proto = {};
proto.pando = {};
proto.pando.api = {};
proto.pando.api.communication = {};
proto.pando.api.communication.v1 = require('./admin_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.pando.api.communication.v1.CommunicationAdminServiceClient =
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
proto.pando.api.communication.v1.CommunicationAdminServicePromiseClient =
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
 *   !proto.pando.api.communication.v1.OrganizationContactInfo,
 *   !proto.pando.api.communication.v1.OrganizationContactInfo>}
 */
const methodDescriptor_CommunicationAdminService_CreateOrganizationContactInfo = new grpc.web.MethodDescriptor(
  '/pando.api.communication.v1.CommunicationAdminService/CreateOrganizationContactInfo',
  grpc.web.MethodType.UNARY,
  proto.pando.api.communication.v1.OrganizationContactInfo,
  proto.pando.api.communication.v1.OrganizationContactInfo,
  /**
   * @param {!proto.pando.api.communication.v1.OrganizationContactInfo} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pando.api.communication.v1.OrganizationContactInfo.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pando.api.communication.v1.OrganizationContactInfo,
 *   !proto.pando.api.communication.v1.OrganizationContactInfo>}
 */
const methodInfo_CommunicationAdminService_CreateOrganizationContactInfo = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pando.api.communication.v1.OrganizationContactInfo,
  /**
   * @param {!proto.pando.api.communication.v1.OrganizationContactInfo} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pando.api.communication.v1.OrganizationContactInfo.deserializeBinary
);


/**
 * @param {!proto.pando.api.communication.v1.OrganizationContactInfo} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pando.api.communication.v1.OrganizationContactInfo)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pando.api.communication.v1.OrganizationContactInfo>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pando.api.communication.v1.CommunicationAdminServiceClient.prototype.createOrganizationContactInfo =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pando.api.communication.v1.CommunicationAdminService/CreateOrganizationContactInfo',
      request,
      metadata || {},
      methodDescriptor_CommunicationAdminService_CreateOrganizationContactInfo,
      callback);
};


/**
 * @param {!proto.pando.api.communication.v1.OrganizationContactInfo} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pando.api.communication.v1.OrganizationContactInfo>}
 *     Promise that resolves to the response
 */
proto.pando.api.communication.v1.CommunicationAdminServicePromiseClient.prototype.createOrganizationContactInfo =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pando.api.communication.v1.CommunicationAdminService/CreateOrganizationContactInfo',
      request,
      metadata || {},
      methodDescriptor_CommunicationAdminService_CreateOrganizationContactInfo);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pando.api.communication.v1.CreateOrUpdateDefaultOrganizationContactInfoRequest,
 *   !proto.pando.api.communication.v1.DefaultOrganizationContactInfo>}
 */
const methodDescriptor_CommunicationAdminService_CreateOrUpdateDefaultOrganizationContactInfo = new grpc.web.MethodDescriptor(
  '/pando.api.communication.v1.CommunicationAdminService/CreateOrUpdateDefaultOrganizationContactInfo',
  grpc.web.MethodType.UNARY,
  proto.pando.api.communication.v1.CreateOrUpdateDefaultOrganizationContactInfoRequest,
  proto.pando.api.communication.v1.DefaultOrganizationContactInfo,
  /**
   * @param {!proto.pando.api.communication.v1.CreateOrUpdateDefaultOrganizationContactInfoRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pando.api.communication.v1.DefaultOrganizationContactInfo.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pando.api.communication.v1.CreateOrUpdateDefaultOrganizationContactInfoRequest,
 *   !proto.pando.api.communication.v1.DefaultOrganizationContactInfo>}
 */
const methodInfo_CommunicationAdminService_CreateOrUpdateDefaultOrganizationContactInfo = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pando.api.communication.v1.DefaultOrganizationContactInfo,
  /**
   * @param {!proto.pando.api.communication.v1.CreateOrUpdateDefaultOrganizationContactInfoRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pando.api.communication.v1.DefaultOrganizationContactInfo.deserializeBinary
);


/**
 * @param {!proto.pando.api.communication.v1.CreateOrUpdateDefaultOrganizationContactInfoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pando.api.communication.v1.DefaultOrganizationContactInfo)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pando.api.communication.v1.DefaultOrganizationContactInfo>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pando.api.communication.v1.CommunicationAdminServiceClient.prototype.createOrUpdateDefaultOrganizationContactInfo =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pando.api.communication.v1.CommunicationAdminService/CreateOrUpdateDefaultOrganizationContactInfo',
      request,
      metadata || {},
      methodDescriptor_CommunicationAdminService_CreateOrUpdateDefaultOrganizationContactInfo,
      callback);
};


/**
 * @param {!proto.pando.api.communication.v1.CreateOrUpdateDefaultOrganizationContactInfoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pando.api.communication.v1.DefaultOrganizationContactInfo>}
 *     Promise that resolves to the response
 */
proto.pando.api.communication.v1.CommunicationAdminServicePromiseClient.prototype.createOrUpdateDefaultOrganizationContactInfo =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pando.api.communication.v1.CommunicationAdminService/CreateOrUpdateDefaultOrganizationContactInfo',
      request,
      metadata || {},
      methodDescriptor_CommunicationAdminService_CreateOrUpdateDefaultOrganizationContactInfo);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pando.api.communication.v1.CreateOrUpdateTemplateRequest,
 *   !proto.pando.api.communication.v1.Template>}
 */
const methodDescriptor_CommunicationAdminService_CreateOrUpdateTemplate = new grpc.web.MethodDescriptor(
  '/pando.api.communication.v1.CommunicationAdminService/CreateOrUpdateTemplate',
  grpc.web.MethodType.UNARY,
  proto.pando.api.communication.v1.CreateOrUpdateTemplateRequest,
  proto.pando.api.communication.v1.Template,
  /**
   * @param {!proto.pando.api.communication.v1.CreateOrUpdateTemplateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pando.api.communication.v1.Template.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pando.api.communication.v1.CreateOrUpdateTemplateRequest,
 *   !proto.pando.api.communication.v1.Template>}
 */
const methodInfo_CommunicationAdminService_CreateOrUpdateTemplate = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pando.api.communication.v1.Template,
  /**
   * @param {!proto.pando.api.communication.v1.CreateOrUpdateTemplateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pando.api.communication.v1.Template.deserializeBinary
);


/**
 * @param {!proto.pando.api.communication.v1.CreateOrUpdateTemplateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pando.api.communication.v1.Template)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pando.api.communication.v1.Template>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pando.api.communication.v1.CommunicationAdminServiceClient.prototype.createOrUpdateTemplate =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pando.api.communication.v1.CommunicationAdminService/CreateOrUpdateTemplate',
      request,
      metadata || {},
      methodDescriptor_CommunicationAdminService_CreateOrUpdateTemplate,
      callback);
};


/**
 * @param {!proto.pando.api.communication.v1.CreateOrUpdateTemplateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pando.api.communication.v1.Template>}
 *     Promise that resolves to the response
 */
proto.pando.api.communication.v1.CommunicationAdminServicePromiseClient.prototype.createOrUpdateTemplate =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pando.api.communication.v1.CommunicationAdminService/CreateOrUpdateTemplate',
      request,
      metadata || {},
      methodDescriptor_CommunicationAdminService_CreateOrUpdateTemplate);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pando.api.communication.v1.GetOrganizationContactInfoRequest,
 *   !proto.pando.api.communication.v1.OrganizationContactInfo>}
 */
const methodDescriptor_CommunicationAdminService_GetOrganizationContactInfo = new grpc.web.MethodDescriptor(
  '/pando.api.communication.v1.CommunicationAdminService/GetOrganizationContactInfo',
  grpc.web.MethodType.UNARY,
  proto.pando.api.communication.v1.GetOrganizationContactInfoRequest,
  proto.pando.api.communication.v1.OrganizationContactInfo,
  /**
   * @param {!proto.pando.api.communication.v1.GetOrganizationContactInfoRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pando.api.communication.v1.OrganizationContactInfo.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pando.api.communication.v1.GetOrganizationContactInfoRequest,
 *   !proto.pando.api.communication.v1.OrganizationContactInfo>}
 */
const methodInfo_CommunicationAdminService_GetOrganizationContactInfo = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pando.api.communication.v1.OrganizationContactInfo,
  /**
   * @param {!proto.pando.api.communication.v1.GetOrganizationContactInfoRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pando.api.communication.v1.OrganizationContactInfo.deserializeBinary
);


/**
 * @param {!proto.pando.api.communication.v1.GetOrganizationContactInfoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pando.api.communication.v1.OrganizationContactInfo)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pando.api.communication.v1.OrganizationContactInfo>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pando.api.communication.v1.CommunicationAdminServiceClient.prototype.getOrganizationContactInfo =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pando.api.communication.v1.CommunicationAdminService/GetOrganizationContactInfo',
      request,
      metadata || {},
      methodDescriptor_CommunicationAdminService_GetOrganizationContactInfo,
      callback);
};


/**
 * @param {!proto.pando.api.communication.v1.GetOrganizationContactInfoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pando.api.communication.v1.OrganizationContactInfo>}
 *     Promise that resolves to the response
 */
proto.pando.api.communication.v1.CommunicationAdminServicePromiseClient.prototype.getOrganizationContactInfo =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pando.api.communication.v1.CommunicationAdminService/GetOrganizationContactInfo',
      request,
      metadata || {},
      methodDescriptor_CommunicationAdminService_GetOrganizationContactInfo);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pando.api.communication.v1.GetOrganizationContactInfoListRequest,
 *   !proto.pando.api.communication.v1.OrganizationContactInfoList>}
 */
const methodDescriptor_CommunicationAdminService_GetOrganizationContactInfoList = new grpc.web.MethodDescriptor(
  '/pando.api.communication.v1.CommunicationAdminService/GetOrganizationContactInfoList',
  grpc.web.MethodType.UNARY,
  proto.pando.api.communication.v1.GetOrganizationContactInfoListRequest,
  proto.pando.api.communication.v1.OrganizationContactInfoList,
  /**
   * @param {!proto.pando.api.communication.v1.GetOrganizationContactInfoListRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pando.api.communication.v1.OrganizationContactInfoList.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pando.api.communication.v1.GetOrganizationContactInfoListRequest,
 *   !proto.pando.api.communication.v1.OrganizationContactInfoList>}
 */
const methodInfo_CommunicationAdminService_GetOrganizationContactInfoList = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pando.api.communication.v1.OrganizationContactInfoList,
  /**
   * @param {!proto.pando.api.communication.v1.GetOrganizationContactInfoListRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pando.api.communication.v1.OrganizationContactInfoList.deserializeBinary
);


/**
 * @param {!proto.pando.api.communication.v1.GetOrganizationContactInfoListRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pando.api.communication.v1.OrganizationContactInfoList)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pando.api.communication.v1.OrganizationContactInfoList>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pando.api.communication.v1.CommunicationAdminServiceClient.prototype.getOrganizationContactInfoList =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pando.api.communication.v1.CommunicationAdminService/GetOrganizationContactInfoList',
      request,
      metadata || {},
      methodDescriptor_CommunicationAdminService_GetOrganizationContactInfoList,
      callback);
};


/**
 * @param {!proto.pando.api.communication.v1.GetOrganizationContactInfoListRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pando.api.communication.v1.OrganizationContactInfoList>}
 *     Promise that resolves to the response
 */
proto.pando.api.communication.v1.CommunicationAdminServicePromiseClient.prototype.getOrganizationContactInfoList =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pando.api.communication.v1.CommunicationAdminService/GetOrganizationContactInfoList',
      request,
      metadata || {},
      methodDescriptor_CommunicationAdminService_GetOrganizationContactInfoList);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pando.api.communication.v1.GetDefaultOrganizationContactInfoRequest,
 *   !proto.pando.api.communication.v1.DefaultOrganizationContactInfo>}
 */
const methodDescriptor_CommunicationAdminService_GetDefaultOrganizationContactInfo = new grpc.web.MethodDescriptor(
  '/pando.api.communication.v1.CommunicationAdminService/GetDefaultOrganizationContactInfo',
  grpc.web.MethodType.UNARY,
  proto.pando.api.communication.v1.GetDefaultOrganizationContactInfoRequest,
  proto.pando.api.communication.v1.DefaultOrganizationContactInfo,
  /**
   * @param {!proto.pando.api.communication.v1.GetDefaultOrganizationContactInfoRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pando.api.communication.v1.DefaultOrganizationContactInfo.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pando.api.communication.v1.GetDefaultOrganizationContactInfoRequest,
 *   !proto.pando.api.communication.v1.DefaultOrganizationContactInfo>}
 */
const methodInfo_CommunicationAdminService_GetDefaultOrganizationContactInfo = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pando.api.communication.v1.DefaultOrganizationContactInfo,
  /**
   * @param {!proto.pando.api.communication.v1.GetDefaultOrganizationContactInfoRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pando.api.communication.v1.DefaultOrganizationContactInfo.deserializeBinary
);


/**
 * @param {!proto.pando.api.communication.v1.GetDefaultOrganizationContactInfoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pando.api.communication.v1.DefaultOrganizationContactInfo)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pando.api.communication.v1.DefaultOrganizationContactInfo>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pando.api.communication.v1.CommunicationAdminServiceClient.prototype.getDefaultOrganizationContactInfo =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pando.api.communication.v1.CommunicationAdminService/GetDefaultOrganizationContactInfo',
      request,
      metadata || {},
      methodDescriptor_CommunicationAdminService_GetDefaultOrganizationContactInfo,
      callback);
};


/**
 * @param {!proto.pando.api.communication.v1.GetDefaultOrganizationContactInfoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pando.api.communication.v1.DefaultOrganizationContactInfo>}
 *     Promise that resolves to the response
 */
proto.pando.api.communication.v1.CommunicationAdminServicePromiseClient.prototype.getDefaultOrganizationContactInfo =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pando.api.communication.v1.CommunicationAdminService/GetDefaultOrganizationContactInfo',
      request,
      metadata || {},
      methodDescriptor_CommunicationAdminService_GetDefaultOrganizationContactInfo);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pando.api.communication.v1.GetTemplateRequest,
 *   !proto.pando.api.communication.v1.Template>}
 */
const methodDescriptor_CommunicationAdminService_GetTemplate = new grpc.web.MethodDescriptor(
  '/pando.api.communication.v1.CommunicationAdminService/GetTemplate',
  grpc.web.MethodType.UNARY,
  proto.pando.api.communication.v1.GetTemplateRequest,
  proto.pando.api.communication.v1.Template,
  /**
   * @param {!proto.pando.api.communication.v1.GetTemplateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pando.api.communication.v1.Template.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pando.api.communication.v1.GetTemplateRequest,
 *   !proto.pando.api.communication.v1.Template>}
 */
const methodInfo_CommunicationAdminService_GetTemplate = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pando.api.communication.v1.Template,
  /**
   * @param {!proto.pando.api.communication.v1.GetTemplateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pando.api.communication.v1.Template.deserializeBinary
);


/**
 * @param {!proto.pando.api.communication.v1.GetTemplateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pando.api.communication.v1.Template)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pando.api.communication.v1.Template>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pando.api.communication.v1.CommunicationAdminServiceClient.prototype.getTemplate =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pando.api.communication.v1.CommunicationAdminService/GetTemplate',
      request,
      metadata || {},
      methodDescriptor_CommunicationAdminService_GetTemplate,
      callback);
};


/**
 * @param {!proto.pando.api.communication.v1.GetTemplateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pando.api.communication.v1.Template>}
 *     Promise that resolves to the response
 */
proto.pando.api.communication.v1.CommunicationAdminServicePromiseClient.prototype.getTemplate =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pando.api.communication.v1.CommunicationAdminService/GetTemplate',
      request,
      metadata || {},
      methodDescriptor_CommunicationAdminService_GetTemplate);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pando.api.communication.v1.GetTemplatesRequest,
 *   !proto.pando.api.communication.v1.TemplateList>}
 */
const methodDescriptor_CommunicationAdminService_GetTemplates = new grpc.web.MethodDescriptor(
  '/pando.api.communication.v1.CommunicationAdminService/GetTemplates',
  grpc.web.MethodType.UNARY,
  proto.pando.api.communication.v1.GetTemplatesRequest,
  proto.pando.api.communication.v1.TemplateList,
  /**
   * @param {!proto.pando.api.communication.v1.GetTemplatesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pando.api.communication.v1.TemplateList.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pando.api.communication.v1.GetTemplatesRequest,
 *   !proto.pando.api.communication.v1.TemplateList>}
 */
const methodInfo_CommunicationAdminService_GetTemplates = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pando.api.communication.v1.TemplateList,
  /**
   * @param {!proto.pando.api.communication.v1.GetTemplatesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pando.api.communication.v1.TemplateList.deserializeBinary
);


/**
 * @param {!proto.pando.api.communication.v1.GetTemplatesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pando.api.communication.v1.TemplateList)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pando.api.communication.v1.TemplateList>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pando.api.communication.v1.CommunicationAdminServiceClient.prototype.getTemplates =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pando.api.communication.v1.CommunicationAdminService/GetTemplates',
      request,
      metadata || {},
      methodDescriptor_CommunicationAdminService_GetTemplates,
      callback);
};


/**
 * @param {!proto.pando.api.communication.v1.GetTemplatesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pando.api.communication.v1.TemplateList>}
 *     Promise that resolves to the response
 */
proto.pando.api.communication.v1.CommunicationAdminServicePromiseClient.prototype.getTemplates =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pando.api.communication.v1.CommunicationAdminService/GetTemplates',
      request,
      metadata || {},
      methodDescriptor_CommunicationAdminService_GetTemplates);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pando.api.communication.v1.GetOrganizationContactInfoRequest,
 *   !proto.pando.api.communication.v1.OrganizationContactInfo>}
 */
const methodDescriptor_CommunicationAdminService_DeleteOrganizationContactInfo = new grpc.web.MethodDescriptor(
  '/pando.api.communication.v1.CommunicationAdminService/DeleteOrganizationContactInfo',
  grpc.web.MethodType.UNARY,
  proto.pando.api.communication.v1.GetOrganizationContactInfoRequest,
  proto.pando.api.communication.v1.OrganizationContactInfo,
  /**
   * @param {!proto.pando.api.communication.v1.GetOrganizationContactInfoRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pando.api.communication.v1.OrganizationContactInfo.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pando.api.communication.v1.GetOrganizationContactInfoRequest,
 *   !proto.pando.api.communication.v1.OrganizationContactInfo>}
 */
const methodInfo_CommunicationAdminService_DeleteOrganizationContactInfo = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pando.api.communication.v1.OrganizationContactInfo,
  /**
   * @param {!proto.pando.api.communication.v1.GetOrganizationContactInfoRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pando.api.communication.v1.OrganizationContactInfo.deserializeBinary
);


/**
 * @param {!proto.pando.api.communication.v1.GetOrganizationContactInfoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pando.api.communication.v1.OrganizationContactInfo)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pando.api.communication.v1.OrganizationContactInfo>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pando.api.communication.v1.CommunicationAdminServiceClient.prototype.deleteOrganizationContactInfo =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pando.api.communication.v1.CommunicationAdminService/DeleteOrganizationContactInfo',
      request,
      metadata || {},
      methodDescriptor_CommunicationAdminService_DeleteOrganizationContactInfo,
      callback);
};


/**
 * @param {!proto.pando.api.communication.v1.GetOrganizationContactInfoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pando.api.communication.v1.OrganizationContactInfo>}
 *     Promise that resolves to the response
 */
proto.pando.api.communication.v1.CommunicationAdminServicePromiseClient.prototype.deleteOrganizationContactInfo =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pando.api.communication.v1.CommunicationAdminService/DeleteOrganizationContactInfo',
      request,
      metadata || {},
      methodDescriptor_CommunicationAdminService_DeleteOrganizationContactInfo);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pando.api.communication.v1.DeleteTemplateRequest,
 *   !proto.pando.api.Empty>}
 */
const methodDescriptor_CommunicationAdminService_DeleteTemplate = new grpc.web.MethodDescriptor(
  '/pando.api.communication.v1.CommunicationAdminService/DeleteTemplate',
  grpc.web.MethodType.UNARY,
  proto.pando.api.communication.v1.DeleteTemplateRequest,
  pando_api_shared_pb.Empty,
  /**
   * @param {!proto.pando.api.communication.v1.DeleteTemplateRequest} request
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
 *   !proto.pando.api.communication.v1.DeleteTemplateRequest,
 *   !proto.pando.api.Empty>}
 */
const methodInfo_CommunicationAdminService_DeleteTemplate = new grpc.web.AbstractClientBase.MethodInfo(
  pando_api_shared_pb.Empty,
  /**
   * @param {!proto.pando.api.communication.v1.DeleteTemplateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_shared_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.pando.api.communication.v1.DeleteTemplateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pando.api.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pando.api.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pando.api.communication.v1.CommunicationAdminServiceClient.prototype.deleteTemplate =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pando.api.communication.v1.CommunicationAdminService/DeleteTemplate',
      request,
      metadata || {},
      methodDescriptor_CommunicationAdminService_DeleteTemplate,
      callback);
};


/**
 * @param {!proto.pando.api.communication.v1.DeleteTemplateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pando.api.Empty>}
 *     Promise that resolves to the response
 */
proto.pando.api.communication.v1.CommunicationAdminServicePromiseClient.prototype.deleteTemplate =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pando.api.communication.v1.CommunicationAdminService/DeleteTemplate',
      request,
      metadata || {},
      methodDescriptor_CommunicationAdminService_DeleteTemplate);
};


module.exports = proto.pando.api.communication.v1;

