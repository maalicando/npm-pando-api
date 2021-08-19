/**
 * @fileoverview gRPC-Web generated client stub for zonetype_service
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var pando_api_alarm_v0_zonetype$model_pb = require('../../../../pando/api/alarm/v0/zonetype-model_pb.js')

var pando_api_extensions_pb = require('../../../../pando/api/extensions_pb.js')

var pando_api_shared_pb = require('../../../../pando/api/shared_pb.js')
const proto = {};
proto.zonetype_service = require('./zonetype_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.zonetype_service.ZoneTypeServiceClient =
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
proto.zonetype_service.ZoneTypeServicePromiseClient =
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
 *   !proto.pando.api.Empty,
 *   !proto.zonetype.ModelList>}
 */
const methodDescriptor_ZoneTypeService_GetAllTypes = new grpc.web.MethodDescriptor(
  '/zonetype_service.ZoneTypeService/GetAllTypes',
  grpc.web.MethodType.UNARY,
  pando_api_shared_pb.Empty,
  pando_api_alarm_v0_zonetype$model_pb.ModelList,
  /**
   * @param {!proto.pando.api.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_alarm_v0_zonetype$model_pb.ModelList.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pando.api.Empty,
 *   !proto.zonetype.ModelList>}
 */
const methodInfo_ZoneTypeService_GetAllTypes = new grpc.web.AbstractClientBase.MethodInfo(
  pando_api_alarm_v0_zonetype$model_pb.ModelList,
  /**
   * @param {!proto.pando.api.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_alarm_v0_zonetype$model_pb.ModelList.deserializeBinary
);


/**
 * @param {!proto.pando.api.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.zonetype.ModelList)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.zonetype.ModelList>|undefined}
 *     The XHR Node Readable Stream
 */
proto.zonetype_service.ZoneTypeServiceClient.prototype.getAllTypes =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/zonetype_service.ZoneTypeService/GetAllTypes',
      request,
      metadata || {},
      methodDescriptor_ZoneTypeService_GetAllTypes,
      callback);
};


/**
 * @param {!proto.pando.api.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.zonetype.ModelList>}
 *     Promise that resolves to the response
 */
proto.zonetype_service.ZoneTypeServicePromiseClient.prototype.getAllTypes =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/zonetype_service.ZoneTypeService/GetAllTypes',
      request,
      metadata || {},
      methodDescriptor_ZoneTypeService_GetAllTypes);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.zonetype_service.GetTypeRequest,
 *   !proto.zonetype.Model>}
 */
const methodDescriptor_ZoneTypeService_GetType = new grpc.web.MethodDescriptor(
  '/zonetype_service.ZoneTypeService/GetType',
  grpc.web.MethodType.UNARY,
  proto.zonetype_service.GetTypeRequest,
  pando_api_alarm_v0_zonetype$model_pb.Model,
  /**
   * @param {!proto.zonetype_service.GetTypeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_alarm_v0_zonetype$model_pb.Model.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.zonetype_service.GetTypeRequest,
 *   !proto.zonetype.Model>}
 */
const methodInfo_ZoneTypeService_GetType = new grpc.web.AbstractClientBase.MethodInfo(
  pando_api_alarm_v0_zonetype$model_pb.Model,
  /**
   * @param {!proto.zonetype_service.GetTypeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_alarm_v0_zonetype$model_pb.Model.deserializeBinary
);


/**
 * @param {!proto.zonetype_service.GetTypeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.zonetype.Model)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.zonetype.Model>|undefined}
 *     The XHR Node Readable Stream
 */
proto.zonetype_service.ZoneTypeServiceClient.prototype.getType =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/zonetype_service.ZoneTypeService/GetType',
      request,
      metadata || {},
      methodDescriptor_ZoneTypeService_GetType,
      callback);
};


/**
 * @param {!proto.zonetype_service.GetTypeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.zonetype.Model>}
 *     Promise that resolves to the response
 */
proto.zonetype_service.ZoneTypeServicePromiseClient.prototype.getType =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/zonetype_service.ZoneTypeService/GetType',
      request,
      metadata || {},
      methodDescriptor_ZoneTypeService_GetType);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.zonetype_service.GetTypeListRequest,
 *   !proto.zonetype.ModelList>}
 */
const methodDescriptor_ZoneTypeService_GetTypeList = new grpc.web.MethodDescriptor(
  '/zonetype_service.ZoneTypeService/GetTypeList',
  grpc.web.MethodType.UNARY,
  proto.zonetype_service.GetTypeListRequest,
  pando_api_alarm_v0_zonetype$model_pb.ModelList,
  /**
   * @param {!proto.zonetype_service.GetTypeListRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_alarm_v0_zonetype$model_pb.ModelList.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.zonetype_service.GetTypeListRequest,
 *   !proto.zonetype.ModelList>}
 */
const methodInfo_ZoneTypeService_GetTypeList = new grpc.web.AbstractClientBase.MethodInfo(
  pando_api_alarm_v0_zonetype$model_pb.ModelList,
  /**
   * @param {!proto.zonetype_service.GetTypeListRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_alarm_v0_zonetype$model_pb.ModelList.deserializeBinary
);


/**
 * @param {!proto.zonetype_service.GetTypeListRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.zonetype.ModelList)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.zonetype.ModelList>|undefined}
 *     The XHR Node Readable Stream
 */
proto.zonetype_service.ZoneTypeServiceClient.prototype.getTypeList =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/zonetype_service.ZoneTypeService/GetTypeList',
      request,
      metadata || {},
      methodDescriptor_ZoneTypeService_GetTypeList,
      callback);
};


/**
 * @param {!proto.zonetype_service.GetTypeListRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.zonetype.ModelList>}
 *     Promise that resolves to the response
 */
proto.zonetype_service.ZoneTypeServicePromiseClient.prototype.getTypeList =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/zonetype_service.ZoneTypeService/GetTypeList',
      request,
      metadata || {},
      methodDescriptor_ZoneTypeService_GetTypeList);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.zonetype.Model,
 *   !proto.zonetype.ModelList>}
 */
const methodDescriptor_ZoneTypeService_CreateZoneType = new grpc.web.MethodDescriptor(
  '/zonetype_service.ZoneTypeService/CreateZoneType',
  grpc.web.MethodType.UNARY,
  pando_api_alarm_v0_zonetype$model_pb.Model,
  pando_api_alarm_v0_zonetype$model_pb.ModelList,
  /**
   * @param {!proto.zonetype.Model} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_alarm_v0_zonetype$model_pb.ModelList.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.zonetype.Model,
 *   !proto.zonetype.ModelList>}
 */
const methodInfo_ZoneTypeService_CreateZoneType = new grpc.web.AbstractClientBase.MethodInfo(
  pando_api_alarm_v0_zonetype$model_pb.ModelList,
  /**
   * @param {!proto.zonetype.Model} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_alarm_v0_zonetype$model_pb.ModelList.deserializeBinary
);


/**
 * @param {!proto.zonetype.Model} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.zonetype.ModelList)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.zonetype.ModelList>|undefined}
 *     The XHR Node Readable Stream
 */
proto.zonetype_service.ZoneTypeServiceClient.prototype.createZoneType =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/zonetype_service.ZoneTypeService/CreateZoneType',
      request,
      metadata || {},
      methodDescriptor_ZoneTypeService_CreateZoneType,
      callback);
};


/**
 * @param {!proto.zonetype.Model} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.zonetype.ModelList>}
 *     Promise that resolves to the response
 */
proto.zonetype_service.ZoneTypeServicePromiseClient.prototype.createZoneType =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/zonetype_service.ZoneTypeService/CreateZoneType',
      request,
      metadata || {},
      methodDescriptor_ZoneTypeService_CreateZoneType);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.zonetype.Model,
 *   !proto.zonetype.ModelList>}
 */
const methodDescriptor_ZoneTypeService_UpdateZoneType = new grpc.web.MethodDescriptor(
  '/zonetype_service.ZoneTypeService/UpdateZoneType',
  grpc.web.MethodType.UNARY,
  pando_api_alarm_v0_zonetype$model_pb.Model,
  pando_api_alarm_v0_zonetype$model_pb.ModelList,
  /**
   * @param {!proto.zonetype.Model} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_alarm_v0_zonetype$model_pb.ModelList.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.zonetype.Model,
 *   !proto.zonetype.ModelList>}
 */
const methodInfo_ZoneTypeService_UpdateZoneType = new grpc.web.AbstractClientBase.MethodInfo(
  pando_api_alarm_v0_zonetype$model_pb.ModelList,
  /**
   * @param {!proto.zonetype.Model} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_alarm_v0_zonetype$model_pb.ModelList.deserializeBinary
);


/**
 * @param {!proto.zonetype.Model} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.zonetype.ModelList)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.zonetype.ModelList>|undefined}
 *     The XHR Node Readable Stream
 */
proto.zonetype_service.ZoneTypeServiceClient.prototype.updateZoneType =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/zonetype_service.ZoneTypeService/UpdateZoneType',
      request,
      metadata || {},
      methodDescriptor_ZoneTypeService_UpdateZoneType,
      callback);
};


/**
 * @param {!proto.zonetype.Model} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.zonetype.ModelList>}
 *     Promise that resolves to the response
 */
proto.zonetype_service.ZoneTypeServicePromiseClient.prototype.updateZoneType =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/zonetype_service.ZoneTypeService/UpdateZoneType',
      request,
      metadata || {},
      methodDescriptor_ZoneTypeService_UpdateZoneType);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.zonetype.Model,
 *   !proto.zonetype.ModelList>}
 */
const methodDescriptor_ZoneTypeService_DeleteZoneType = new grpc.web.MethodDescriptor(
  '/zonetype_service.ZoneTypeService/DeleteZoneType',
  grpc.web.MethodType.UNARY,
  pando_api_alarm_v0_zonetype$model_pb.Model,
  pando_api_alarm_v0_zonetype$model_pb.ModelList,
  /**
   * @param {!proto.zonetype.Model} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_alarm_v0_zonetype$model_pb.ModelList.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.zonetype.Model,
 *   !proto.zonetype.ModelList>}
 */
const methodInfo_ZoneTypeService_DeleteZoneType = new grpc.web.AbstractClientBase.MethodInfo(
  pando_api_alarm_v0_zonetype$model_pb.ModelList,
  /**
   * @param {!proto.zonetype.Model} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_alarm_v0_zonetype$model_pb.ModelList.deserializeBinary
);


/**
 * @param {!proto.zonetype.Model} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.zonetype.ModelList)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.zonetype.ModelList>|undefined}
 *     The XHR Node Readable Stream
 */
proto.zonetype_service.ZoneTypeServiceClient.prototype.deleteZoneType =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/zonetype_service.ZoneTypeService/DeleteZoneType',
      request,
      metadata || {},
      methodDescriptor_ZoneTypeService_DeleteZoneType,
      callback);
};


/**
 * @param {!proto.zonetype.Model} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.zonetype.ModelList>}
 *     Promise that resolves to the response
 */
proto.zonetype_service.ZoneTypeServicePromiseClient.prototype.deleteZoneType =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/zonetype_service.ZoneTypeService/DeleteZoneType',
      request,
      metadata || {},
      methodDescriptor_ZoneTypeService_DeleteZoneType);
};


module.exports = proto.zonetype_service;

