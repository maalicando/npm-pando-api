/**
 * @fileoverview gRPC-Web generated client stub for zonelocation_service
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var pando_api_alarm_v0_zonelocation$model_pb = require('../../../../pando/api/alarm/v0/zonelocation-model_pb.js')

var pando_api_extensions_pb = require('../../../../pando/api/extensions_pb.js')

var pando_api_shared_pb = require('../../../../pando/api/shared_pb.js')
const proto = {};
proto.zonelocation_service = require('./zonelocation_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.zonelocation_service.ZoneLocationServiceClient =
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
proto.zonelocation_service.ZoneLocationServicePromiseClient =
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
 *   !proto.zonelocation.ModelList>}
 */
const methodDescriptor_ZoneLocationService_GetAllModels = new grpc.web.MethodDescriptor(
  '/zonelocation_service.ZoneLocationService/GetAllModels',
  grpc.web.MethodType.UNARY,
  pando_api_shared_pb.Empty,
  pando_api_alarm_v0_zonelocation$model_pb.ModelList,
  /**
   * @param {!proto.pando.api.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_alarm_v0_zonelocation$model_pb.ModelList.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pando.api.Empty,
 *   !proto.zonelocation.ModelList>}
 */
const methodInfo_ZoneLocationService_GetAllModels = new grpc.web.AbstractClientBase.MethodInfo(
  pando_api_alarm_v0_zonelocation$model_pb.ModelList,
  /**
   * @param {!proto.pando.api.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_alarm_v0_zonelocation$model_pb.ModelList.deserializeBinary
);


/**
 * @param {!proto.pando.api.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.zonelocation.ModelList)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.zonelocation.ModelList>|undefined}
 *     The XHR Node Readable Stream
 */
proto.zonelocation_service.ZoneLocationServiceClient.prototype.getAllModels =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/zonelocation_service.ZoneLocationService/GetAllModels',
      request,
      metadata || {},
      methodDescriptor_ZoneLocationService_GetAllModels,
      callback);
};


/**
 * @param {!proto.pando.api.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.zonelocation.ModelList>}
 *     Promise that resolves to the response
 */
proto.zonelocation_service.ZoneLocationServicePromiseClient.prototype.getAllModels =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/zonelocation_service.ZoneLocationService/GetAllModels',
      request,
      metadata || {},
      methodDescriptor_ZoneLocationService_GetAllModels);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.zonelocation_service.GetModelRequest,
 *   !proto.zonelocation.Model>}
 */
const methodDescriptor_ZoneLocationService_GetModel = new grpc.web.MethodDescriptor(
  '/zonelocation_service.ZoneLocationService/GetModel',
  grpc.web.MethodType.UNARY,
  proto.zonelocation_service.GetModelRequest,
  pando_api_alarm_v0_zonelocation$model_pb.Model,
  /**
   * @param {!proto.zonelocation_service.GetModelRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_alarm_v0_zonelocation$model_pb.Model.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.zonelocation_service.GetModelRequest,
 *   !proto.zonelocation.Model>}
 */
const methodInfo_ZoneLocationService_GetModel = new grpc.web.AbstractClientBase.MethodInfo(
  pando_api_alarm_v0_zonelocation$model_pb.Model,
  /**
   * @param {!proto.zonelocation_service.GetModelRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_alarm_v0_zonelocation$model_pb.Model.deserializeBinary
);


/**
 * @param {!proto.zonelocation_service.GetModelRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.zonelocation.Model)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.zonelocation.Model>|undefined}
 *     The XHR Node Readable Stream
 */
proto.zonelocation_service.ZoneLocationServiceClient.prototype.getModel =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/zonelocation_service.ZoneLocationService/GetModel',
      request,
      metadata || {},
      methodDescriptor_ZoneLocationService_GetModel,
      callback);
};


/**
 * @param {!proto.zonelocation_service.GetModelRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.zonelocation.Model>}
 *     Promise that resolves to the response
 */
proto.zonelocation_service.ZoneLocationServicePromiseClient.prototype.getModel =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/zonelocation_service.ZoneLocationService/GetModel',
      request,
      metadata || {},
      methodDescriptor_ZoneLocationService_GetModel);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.zonelocation_service.GetModelListRequest,
 *   !proto.zonelocation.ModelList>}
 */
const methodDescriptor_ZoneLocationService_GetModelList = new grpc.web.MethodDescriptor(
  '/zonelocation_service.ZoneLocationService/GetModelList',
  grpc.web.MethodType.UNARY,
  proto.zonelocation_service.GetModelListRequest,
  pando_api_alarm_v0_zonelocation$model_pb.ModelList,
  /**
   * @param {!proto.zonelocation_service.GetModelListRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_alarm_v0_zonelocation$model_pb.ModelList.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.zonelocation_service.GetModelListRequest,
 *   !proto.zonelocation.ModelList>}
 */
const methodInfo_ZoneLocationService_GetModelList = new grpc.web.AbstractClientBase.MethodInfo(
  pando_api_alarm_v0_zonelocation$model_pb.ModelList,
  /**
   * @param {!proto.zonelocation_service.GetModelListRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_alarm_v0_zonelocation$model_pb.ModelList.deserializeBinary
);


/**
 * @param {!proto.zonelocation_service.GetModelListRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.zonelocation.ModelList)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.zonelocation.ModelList>|undefined}
 *     The XHR Node Readable Stream
 */
proto.zonelocation_service.ZoneLocationServiceClient.prototype.getModelList =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/zonelocation_service.ZoneLocationService/GetModelList',
      request,
      metadata || {},
      methodDescriptor_ZoneLocationService_GetModelList,
      callback);
};


/**
 * @param {!proto.zonelocation_service.GetModelListRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.zonelocation.ModelList>}
 *     Promise that resolves to the response
 */
proto.zonelocation_service.ZoneLocationServicePromiseClient.prototype.getModelList =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/zonelocation_service.ZoneLocationService/GetModelList',
      request,
      metadata || {},
      methodDescriptor_ZoneLocationService_GetModelList);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pando.api.Empty,
 *   !proto.zonelocation.DeviceTypeList>}
 */
const methodDescriptor_ZoneLocationService_GetAllDeviceTypes = new grpc.web.MethodDescriptor(
  '/zonelocation_service.ZoneLocationService/GetAllDeviceTypes',
  grpc.web.MethodType.UNARY,
  pando_api_shared_pb.Empty,
  pando_api_alarm_v0_zonelocation$model_pb.DeviceTypeList,
  /**
   * @param {!proto.pando.api.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_alarm_v0_zonelocation$model_pb.DeviceTypeList.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pando.api.Empty,
 *   !proto.zonelocation.DeviceTypeList>}
 */
const methodInfo_ZoneLocationService_GetAllDeviceTypes = new grpc.web.AbstractClientBase.MethodInfo(
  pando_api_alarm_v0_zonelocation$model_pb.DeviceTypeList,
  /**
   * @param {!proto.pando.api.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_alarm_v0_zonelocation$model_pb.DeviceTypeList.deserializeBinary
);


/**
 * @param {!proto.pando.api.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.zonelocation.DeviceTypeList)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.zonelocation.DeviceTypeList>|undefined}
 *     The XHR Node Readable Stream
 */
proto.zonelocation_service.ZoneLocationServiceClient.prototype.getAllDeviceTypes =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/zonelocation_service.ZoneLocationService/GetAllDeviceTypes',
      request,
      metadata || {},
      methodDescriptor_ZoneLocationService_GetAllDeviceTypes,
      callback);
};


/**
 * @param {!proto.pando.api.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.zonelocation.DeviceTypeList>}
 *     Promise that resolves to the response
 */
proto.zonelocation_service.ZoneLocationServicePromiseClient.prototype.getAllDeviceTypes =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/zonelocation_service.ZoneLocationService/GetAllDeviceTypes',
      request,
      metadata || {},
      methodDescriptor_ZoneLocationService_GetAllDeviceTypes);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.zonelocation_service.GetDeviceTypeListRequest,
 *   !proto.zonelocation.DeviceTypeList>}
 */
const methodDescriptor_ZoneLocationService_GetDeviceTypeList = new grpc.web.MethodDescriptor(
  '/zonelocation_service.ZoneLocationService/GetDeviceTypeList',
  grpc.web.MethodType.UNARY,
  proto.zonelocation_service.GetDeviceTypeListRequest,
  pando_api_alarm_v0_zonelocation$model_pb.DeviceTypeList,
  /**
   * @param {!proto.zonelocation_service.GetDeviceTypeListRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_alarm_v0_zonelocation$model_pb.DeviceTypeList.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.zonelocation_service.GetDeviceTypeListRequest,
 *   !proto.zonelocation.DeviceTypeList>}
 */
const methodInfo_ZoneLocationService_GetDeviceTypeList = new grpc.web.AbstractClientBase.MethodInfo(
  pando_api_alarm_v0_zonelocation$model_pb.DeviceTypeList,
  /**
   * @param {!proto.zonelocation_service.GetDeviceTypeListRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_alarm_v0_zonelocation$model_pb.DeviceTypeList.deserializeBinary
);


/**
 * @param {!proto.zonelocation_service.GetDeviceTypeListRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.zonelocation.DeviceTypeList)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.zonelocation.DeviceTypeList>|undefined}
 *     The XHR Node Readable Stream
 */
proto.zonelocation_service.ZoneLocationServiceClient.prototype.getDeviceTypeList =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/zonelocation_service.ZoneLocationService/GetDeviceTypeList',
      request,
      metadata || {},
      methodDescriptor_ZoneLocationService_GetDeviceTypeList,
      callback);
};


/**
 * @param {!proto.zonelocation_service.GetDeviceTypeListRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.zonelocation.DeviceTypeList>}
 *     Promise that resolves to the response
 */
proto.zonelocation_service.ZoneLocationServicePromiseClient.prototype.getDeviceTypeList =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/zonelocation_service.ZoneLocationService/GetDeviceTypeList',
      request,
      metadata || {},
      methodDescriptor_ZoneLocationService_GetDeviceTypeList);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.zonelocation_service.GetModelByDeviceTypeRequest,
 *   !proto.zonelocation.ModelList>}
 */
const methodDescriptor_ZoneLocationService_GetModelsFromDeviceType = new grpc.web.MethodDescriptor(
  '/zonelocation_service.ZoneLocationService/GetModelsFromDeviceType',
  grpc.web.MethodType.UNARY,
  proto.zonelocation_service.GetModelByDeviceTypeRequest,
  pando_api_alarm_v0_zonelocation$model_pb.ModelList,
  /**
   * @param {!proto.zonelocation_service.GetModelByDeviceTypeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_alarm_v0_zonelocation$model_pb.ModelList.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.zonelocation_service.GetModelByDeviceTypeRequest,
 *   !proto.zonelocation.ModelList>}
 */
const methodInfo_ZoneLocationService_GetModelsFromDeviceType = new grpc.web.AbstractClientBase.MethodInfo(
  pando_api_alarm_v0_zonelocation$model_pb.ModelList,
  /**
   * @param {!proto.zonelocation_service.GetModelByDeviceTypeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_alarm_v0_zonelocation$model_pb.ModelList.deserializeBinary
);


/**
 * @param {!proto.zonelocation_service.GetModelByDeviceTypeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.zonelocation.ModelList)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.zonelocation.ModelList>|undefined}
 *     The XHR Node Readable Stream
 */
proto.zonelocation_service.ZoneLocationServiceClient.prototype.getModelsFromDeviceType =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/zonelocation_service.ZoneLocationService/GetModelsFromDeviceType',
      request,
      metadata || {},
      methodDescriptor_ZoneLocationService_GetModelsFromDeviceType,
      callback);
};


/**
 * @param {!proto.zonelocation_service.GetModelByDeviceTypeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.zonelocation.ModelList>}
 *     Promise that resolves to the response
 */
proto.zonelocation_service.ZoneLocationServicePromiseClient.prototype.getModelsFromDeviceType =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/zonelocation_service.ZoneLocationService/GetModelsFromDeviceType',
      request,
      metadata || {},
      methodDescriptor_ZoneLocationService_GetModelsFromDeviceType);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.zonelocation_service.FindModelsByZoneLocationRequest,
 *   !proto.zonelocation.ModelList>}
 */
const methodDescriptor_ZoneLocationService_FindModelsByZoneLocation = new grpc.web.MethodDescriptor(
  '/zonelocation_service.ZoneLocationService/FindModelsByZoneLocation',
  grpc.web.MethodType.UNARY,
  proto.zonelocation_service.FindModelsByZoneLocationRequest,
  pando_api_alarm_v0_zonelocation$model_pb.ModelList,
  /**
   * @param {!proto.zonelocation_service.FindModelsByZoneLocationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_alarm_v0_zonelocation$model_pb.ModelList.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.zonelocation_service.FindModelsByZoneLocationRequest,
 *   !proto.zonelocation.ModelList>}
 */
const methodInfo_ZoneLocationService_FindModelsByZoneLocation = new grpc.web.AbstractClientBase.MethodInfo(
  pando_api_alarm_v0_zonelocation$model_pb.ModelList,
  /**
   * @param {!proto.zonelocation_service.FindModelsByZoneLocationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_alarm_v0_zonelocation$model_pb.ModelList.deserializeBinary
);


/**
 * @param {!proto.zonelocation_service.FindModelsByZoneLocationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.zonelocation.ModelList)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.zonelocation.ModelList>|undefined}
 *     The XHR Node Readable Stream
 */
proto.zonelocation_service.ZoneLocationServiceClient.prototype.findModelsByZoneLocation =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/zonelocation_service.ZoneLocationService/FindModelsByZoneLocation',
      request,
      metadata || {},
      methodDescriptor_ZoneLocationService_FindModelsByZoneLocation,
      callback);
};


/**
 * @param {!proto.zonelocation_service.FindModelsByZoneLocationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.zonelocation.ModelList>}
 *     Promise that resolves to the response
 */
proto.zonelocation_service.ZoneLocationServicePromiseClient.prototype.findModelsByZoneLocation =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/zonelocation_service.ZoneLocationService/FindModelsByZoneLocation',
      request,
      metadata || {},
      methodDescriptor_ZoneLocationService_FindModelsByZoneLocation);
};


module.exports = proto.zonelocation_service;

