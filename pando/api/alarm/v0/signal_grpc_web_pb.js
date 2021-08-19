/**
 * @fileoverview gRPC-Web generated client stub for signal_service
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var pando_api_alarm_v0_equipment$model_pb = require('../../../../pando/api/alarm/v0/equipment-model_pb.js')

var pando_api_alarm_v0_signal$model_pb = require('../../../../pando/api/alarm/v0/signal-model_pb.js')

var pando_api_extensions_pb = require('../../../../pando/api/extensions_pb.js')

var pando_api_shared_pb = require('../../../../pando/api/shared_pb.js')
const proto = {};
proto.signal_service = require('./signal_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.signal_service.SignalServiceClient =
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
proto.signal_service.SignalServicePromiseClient =
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
 *   !proto.signal.TypeList>}
 */
const methodDescriptor_SignalService_GetAllTypes = new grpc.web.MethodDescriptor(
  '/signal_service.SignalService/GetAllTypes',
  grpc.web.MethodType.UNARY,
  pando_api_shared_pb.Empty,
  pando_api_alarm_v0_signal$model_pb.TypeList,
  /**
   * @param {!proto.pando.api.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_alarm_v0_signal$model_pb.TypeList.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pando.api.Empty,
 *   !proto.signal.TypeList>}
 */
const methodInfo_SignalService_GetAllTypes = new grpc.web.AbstractClientBase.MethodInfo(
  pando_api_alarm_v0_signal$model_pb.TypeList,
  /**
   * @param {!proto.pando.api.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_alarm_v0_signal$model_pb.TypeList.deserializeBinary
);


/**
 * @param {!proto.pando.api.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.signal.TypeList)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.signal.TypeList>|undefined}
 *     The XHR Node Readable Stream
 */
proto.signal_service.SignalServiceClient.prototype.getAllTypes =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/signal_service.SignalService/GetAllTypes',
      request,
      metadata || {},
      methodDescriptor_SignalService_GetAllTypes,
      callback);
};


/**
 * @param {!proto.pando.api.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.signal.TypeList>}
 *     Promise that resolves to the response
 */
proto.signal_service.SignalServicePromiseClient.prototype.getAllTypes =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/signal_service.SignalService/GetAllTypes',
      request,
      metadata || {},
      methodDescriptor_SignalService_GetAllTypes);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.signal_service.GetTypeRequest,
 *   !proto.signal.Type>}
 */
const methodDescriptor_SignalService_GetType = new grpc.web.MethodDescriptor(
  '/signal_service.SignalService/GetType',
  grpc.web.MethodType.UNARY,
  proto.signal_service.GetTypeRequest,
  pando_api_alarm_v0_signal$model_pb.Type,
  /**
   * @param {!proto.signal_service.GetTypeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_alarm_v0_signal$model_pb.Type.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.signal_service.GetTypeRequest,
 *   !proto.signal.Type>}
 */
const methodInfo_SignalService_GetType = new grpc.web.AbstractClientBase.MethodInfo(
  pando_api_alarm_v0_signal$model_pb.Type,
  /**
   * @param {!proto.signal_service.GetTypeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_alarm_v0_signal$model_pb.Type.deserializeBinary
);


/**
 * @param {!proto.signal_service.GetTypeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.signal.Type)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.signal.Type>|undefined}
 *     The XHR Node Readable Stream
 */
proto.signal_service.SignalServiceClient.prototype.getType =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/signal_service.SignalService/GetType',
      request,
      metadata || {},
      methodDescriptor_SignalService_GetType,
      callback);
};


/**
 * @param {!proto.signal_service.GetTypeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.signal.Type>}
 *     Promise that resolves to the response
 */
proto.signal_service.SignalServicePromiseClient.prototype.getType =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/signal_service.SignalService/GetType',
      request,
      metadata || {},
      methodDescriptor_SignalService_GetType);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.signal_service.GetTypeListRequest,
 *   !proto.signal.TypeList>}
 */
const methodDescriptor_SignalService_GetTypeList = new grpc.web.MethodDescriptor(
  '/signal_service.SignalService/GetTypeList',
  grpc.web.MethodType.UNARY,
  proto.signal_service.GetTypeListRequest,
  pando_api_alarm_v0_signal$model_pb.TypeList,
  /**
   * @param {!proto.signal_service.GetTypeListRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_alarm_v0_signal$model_pb.TypeList.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.signal_service.GetTypeListRequest,
 *   !proto.signal.TypeList>}
 */
const methodInfo_SignalService_GetTypeList = new grpc.web.AbstractClientBase.MethodInfo(
  pando_api_alarm_v0_signal$model_pb.TypeList,
  /**
   * @param {!proto.signal_service.GetTypeListRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_alarm_v0_signal$model_pb.TypeList.deserializeBinary
);


/**
 * @param {!proto.signal_service.GetTypeListRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.signal.TypeList)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.signal.TypeList>|undefined}
 *     The XHR Node Readable Stream
 */
proto.signal_service.SignalServiceClient.prototype.getTypeList =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/signal_service.SignalService/GetTypeList',
      request,
      metadata || {},
      methodDescriptor_SignalService_GetTypeList,
      callback);
};


/**
 * @param {!proto.signal_service.GetTypeListRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.signal.TypeList>}
 *     Promise that resolves to the response
 */
proto.signal_service.SignalServicePromiseClient.prototype.getTypeList =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/signal_service.SignalService/GetTypeList',
      request,
      metadata || {},
      methodDescriptor_SignalService_GetTypeList);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.signal_service.GetTypeListFromEquipmentGuidRequest,
 *   !proto.signal.EquipmentTypeList>}
 */
const methodDescriptor_SignalService_GetTypeListFromEquipmentGuid = new grpc.web.MethodDescriptor(
  '/signal_service.SignalService/GetTypeListFromEquipmentGuid',
  grpc.web.MethodType.UNARY,
  proto.signal_service.GetTypeListFromEquipmentGuidRequest,
  pando_api_alarm_v0_signal$model_pb.EquipmentTypeList,
  /**
   * @param {!proto.signal_service.GetTypeListFromEquipmentGuidRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_alarm_v0_signal$model_pb.EquipmentTypeList.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.signal_service.GetTypeListFromEquipmentGuidRequest,
 *   !proto.signal.EquipmentTypeList>}
 */
const methodInfo_SignalService_GetTypeListFromEquipmentGuid = new grpc.web.AbstractClientBase.MethodInfo(
  pando_api_alarm_v0_signal$model_pb.EquipmentTypeList,
  /**
   * @param {!proto.signal_service.GetTypeListFromEquipmentGuidRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_alarm_v0_signal$model_pb.EquipmentTypeList.deserializeBinary
);


/**
 * @param {!proto.signal_service.GetTypeListFromEquipmentGuidRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.signal.EquipmentTypeList)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.signal.EquipmentTypeList>|undefined}
 *     The XHR Node Readable Stream
 */
proto.signal_service.SignalServiceClient.prototype.getTypeListFromEquipmentGuid =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/signal_service.SignalService/GetTypeListFromEquipmentGuid',
      request,
      metadata || {},
      methodDescriptor_SignalService_GetTypeListFromEquipmentGuid,
      callback);
};


/**
 * @param {!proto.signal_service.GetTypeListFromEquipmentGuidRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.signal.EquipmentTypeList>}
 *     Promise that resolves to the response
 */
proto.signal_service.SignalServicePromiseClient.prototype.getTypeListFromEquipmentGuid =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/signal_service.SignalService/GetTypeListFromEquipmentGuid',
      request,
      metadata || {},
      methodDescriptor_SignalService_GetTypeListFromEquipmentGuid);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.signal_service.GetTypeRequest,
 *   !proto.equipment.ModelList>}
 */
const methodDescriptor_SignalService_GetEquipmentModelList = new grpc.web.MethodDescriptor(
  '/signal_service.SignalService/GetEquipmentModelList',
  grpc.web.MethodType.UNARY,
  proto.signal_service.GetTypeRequest,
  pando_api_alarm_v0_equipment$model_pb.ModelList,
  /**
   * @param {!proto.signal_service.GetTypeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_alarm_v0_equipment$model_pb.ModelList.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.signal_service.GetTypeRequest,
 *   !proto.equipment.ModelList>}
 */
const methodInfo_SignalService_GetEquipmentModelList = new grpc.web.AbstractClientBase.MethodInfo(
  pando_api_alarm_v0_equipment$model_pb.ModelList,
  /**
   * @param {!proto.signal_service.GetTypeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_alarm_v0_equipment$model_pb.ModelList.deserializeBinary
);


/**
 * @param {!proto.signal_service.GetTypeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.equipment.ModelList)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.equipment.ModelList>|undefined}
 *     The XHR Node Readable Stream
 */
proto.signal_service.SignalServiceClient.prototype.getEquipmentModelList =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/signal_service.SignalService/GetEquipmentModelList',
      request,
      metadata || {},
      methodDescriptor_SignalService_GetEquipmentModelList,
      callback);
};


/**
 * @param {!proto.signal_service.GetTypeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.equipment.ModelList>}
 *     Promise that resolves to the response
 */
proto.signal_service.SignalServicePromiseClient.prototype.getEquipmentModelList =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/signal_service.SignalService/GetEquipmentModelList',
      request,
      metadata || {},
      methodDescriptor_SignalService_GetEquipmentModelList);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.signal.Type,
 *   !proto.signal.TypeList>}
 */
const methodDescriptor_SignalService_CreateType = new grpc.web.MethodDescriptor(
  '/signal_service.SignalService/CreateType',
  grpc.web.MethodType.UNARY,
  pando_api_alarm_v0_signal$model_pb.Type,
  pando_api_alarm_v0_signal$model_pb.TypeList,
  /**
   * @param {!proto.signal.Type} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_alarm_v0_signal$model_pb.TypeList.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.signal.Type,
 *   !proto.signal.TypeList>}
 */
const methodInfo_SignalService_CreateType = new grpc.web.AbstractClientBase.MethodInfo(
  pando_api_alarm_v0_signal$model_pb.TypeList,
  /**
   * @param {!proto.signal.Type} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_alarm_v0_signal$model_pb.TypeList.deserializeBinary
);


/**
 * @param {!proto.signal.Type} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.signal.TypeList)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.signal.TypeList>|undefined}
 *     The XHR Node Readable Stream
 */
proto.signal_service.SignalServiceClient.prototype.createType =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/signal_service.SignalService/CreateType',
      request,
      metadata || {},
      methodDescriptor_SignalService_CreateType,
      callback);
};


/**
 * @param {!proto.signal.Type} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.signal.TypeList>}
 *     Promise that resolves to the response
 */
proto.signal_service.SignalServicePromiseClient.prototype.createType =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/signal_service.SignalService/CreateType',
      request,
      metadata || {},
      methodDescriptor_SignalService_CreateType);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.signal.Type,
 *   !proto.signal.TypeList>}
 */
const methodDescriptor_SignalService_UpdateType = new grpc.web.MethodDescriptor(
  '/signal_service.SignalService/UpdateType',
  grpc.web.MethodType.UNARY,
  pando_api_alarm_v0_signal$model_pb.Type,
  pando_api_alarm_v0_signal$model_pb.TypeList,
  /**
   * @param {!proto.signal.Type} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_alarm_v0_signal$model_pb.TypeList.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.signal.Type,
 *   !proto.signal.TypeList>}
 */
const methodInfo_SignalService_UpdateType = new grpc.web.AbstractClientBase.MethodInfo(
  pando_api_alarm_v0_signal$model_pb.TypeList,
  /**
   * @param {!proto.signal.Type} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_alarm_v0_signal$model_pb.TypeList.deserializeBinary
);


/**
 * @param {!proto.signal.Type} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.signal.TypeList)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.signal.TypeList>|undefined}
 *     The XHR Node Readable Stream
 */
proto.signal_service.SignalServiceClient.prototype.updateType =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/signal_service.SignalService/UpdateType',
      request,
      metadata || {},
      methodDescriptor_SignalService_UpdateType,
      callback);
};


/**
 * @param {!proto.signal.Type} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.signal.TypeList>}
 *     Promise that resolves to the response
 */
proto.signal_service.SignalServicePromiseClient.prototype.updateType =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/signal_service.SignalService/UpdateType',
      request,
      metadata || {},
      methodDescriptor_SignalService_UpdateType);
};


module.exports = proto.signal_service;

