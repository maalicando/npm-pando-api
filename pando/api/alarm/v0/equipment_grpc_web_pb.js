/**
 * @fileoverview gRPC-Web generated client stub for equipment_service
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
proto.equipment_service = require('./equipment_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.equipment_service.EquipmentServiceClient =
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
proto.equipment_service.EquipmentServicePromiseClient =
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
 *   !proto.equipment.ModelList>}
 */
const methodDescriptor_EquipmentService_GetAllModels = new grpc.web.MethodDescriptor(
  '/equipment_service.EquipmentService/GetAllModels',
  grpc.web.MethodType.UNARY,
  pando_api_shared_pb.Empty,
  pando_api_alarm_v0_equipment$model_pb.ModelList,
  /**
   * @param {!proto.pando.api.Empty} request
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
 *   !proto.pando.api.Empty,
 *   !proto.equipment.ModelList>}
 */
const methodInfo_EquipmentService_GetAllModels = new grpc.web.AbstractClientBase.MethodInfo(
  pando_api_alarm_v0_equipment$model_pb.ModelList,
  /**
   * @param {!proto.pando.api.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_alarm_v0_equipment$model_pb.ModelList.deserializeBinary
);


/**
 * @param {!proto.pando.api.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.equipment.ModelList)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.equipment.ModelList>|undefined}
 *     The XHR Node Readable Stream
 */
proto.equipment_service.EquipmentServiceClient.prototype.getAllModels =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/equipment_service.EquipmentService/GetAllModels',
      request,
      metadata || {},
      methodDescriptor_EquipmentService_GetAllModels,
      callback);
};


/**
 * @param {!proto.pando.api.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.equipment.ModelList>}
 *     Promise that resolves to the response
 */
proto.equipment_service.EquipmentServicePromiseClient.prototype.getAllModels =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/equipment_service.EquipmentService/GetAllModels',
      request,
      metadata || {},
      methodDescriptor_EquipmentService_GetAllModels);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pando.api.Empty,
 *   !proto.equipment.ExtensionList>}
 */
const methodDescriptor_EquipmentService_GetExtensionList = new grpc.web.MethodDescriptor(
  '/equipment_service.EquipmentService/GetExtensionList',
  grpc.web.MethodType.UNARY,
  pando_api_shared_pb.Empty,
  pando_api_alarm_v0_equipment$model_pb.ExtensionList,
  /**
   * @param {!proto.pando.api.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_alarm_v0_equipment$model_pb.ExtensionList.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pando.api.Empty,
 *   !proto.equipment.ExtensionList>}
 */
const methodInfo_EquipmentService_GetExtensionList = new grpc.web.AbstractClientBase.MethodInfo(
  pando_api_alarm_v0_equipment$model_pb.ExtensionList,
  /**
   * @param {!proto.pando.api.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_alarm_v0_equipment$model_pb.ExtensionList.deserializeBinary
);


/**
 * @param {!proto.pando.api.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.equipment.ExtensionList)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.equipment.ExtensionList>|undefined}
 *     The XHR Node Readable Stream
 */
proto.equipment_service.EquipmentServiceClient.prototype.getExtensionList =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/equipment_service.EquipmentService/GetExtensionList',
      request,
      metadata || {},
      methodDescriptor_EquipmentService_GetExtensionList,
      callback);
};


/**
 * @param {!proto.pando.api.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.equipment.ExtensionList>}
 *     Promise that resolves to the response
 */
proto.equipment_service.EquipmentServicePromiseClient.prototype.getExtensionList =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/equipment_service.EquipmentService/GetExtensionList',
      request,
      metadata || {},
      methodDescriptor_EquipmentService_GetExtensionList);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.equipment_service.GetRequest,
 *   !proto.equipment.Model>}
 */
const methodDescriptor_EquipmentService_GetModel = new grpc.web.MethodDescriptor(
  '/equipment_service.EquipmentService/GetModel',
  grpc.web.MethodType.UNARY,
  proto.equipment_service.GetRequest,
  pando_api_alarm_v0_equipment$model_pb.Model,
  /**
   * @param {!proto.equipment_service.GetRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_alarm_v0_equipment$model_pb.Model.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.equipment_service.GetRequest,
 *   !proto.equipment.Model>}
 */
const methodInfo_EquipmentService_GetModel = new grpc.web.AbstractClientBase.MethodInfo(
  pando_api_alarm_v0_equipment$model_pb.Model,
  /**
   * @param {!proto.equipment_service.GetRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_alarm_v0_equipment$model_pb.Model.deserializeBinary
);


/**
 * @param {!proto.equipment_service.GetRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.equipment.Model)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.equipment.Model>|undefined}
 *     The XHR Node Readable Stream
 */
proto.equipment_service.EquipmentServiceClient.prototype.getModel =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/equipment_service.EquipmentService/GetModel',
      request,
      metadata || {},
      methodDescriptor_EquipmentService_GetModel,
      callback);
};


/**
 * @param {!proto.equipment_service.GetRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.equipment.Model>}
 *     Promise that resolves to the response
 */
proto.equipment_service.EquipmentServicePromiseClient.prototype.getModel =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/equipment_service.EquipmentService/GetModel',
      request,
      metadata || {},
      methodDescriptor_EquipmentService_GetModel);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.equipment_service.GetModelListRequest,
 *   !proto.equipment.ModelList>}
 */
const methodDescriptor_EquipmentService_GetModelList = new grpc.web.MethodDescriptor(
  '/equipment_service.EquipmentService/GetModelList',
  grpc.web.MethodType.UNARY,
  proto.equipment_service.GetModelListRequest,
  pando_api_alarm_v0_equipment$model_pb.ModelList,
  /**
   * @param {!proto.equipment_service.GetModelListRequest} request
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
 *   !proto.equipment_service.GetModelListRequest,
 *   !proto.equipment.ModelList>}
 */
const methodInfo_EquipmentService_GetModelList = new grpc.web.AbstractClientBase.MethodInfo(
  pando_api_alarm_v0_equipment$model_pb.ModelList,
  /**
   * @param {!proto.equipment_service.GetModelListRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_alarm_v0_equipment$model_pb.ModelList.deserializeBinary
);


/**
 * @param {!proto.equipment_service.GetModelListRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.equipment.ModelList)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.equipment.ModelList>|undefined}
 *     The XHR Node Readable Stream
 */
proto.equipment_service.EquipmentServiceClient.prototype.getModelList =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/equipment_service.EquipmentService/GetModelList',
      request,
      metadata || {},
      methodDescriptor_EquipmentService_GetModelList,
      callback);
};


/**
 * @param {!proto.equipment_service.GetModelListRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.equipment.ModelList>}
 *     Promise that resolves to the response
 */
proto.equipment_service.EquipmentServicePromiseClient.prototype.getModelList =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/equipment_service.EquipmentService/GetModelList',
      request,
      metadata || {},
      methodDescriptor_EquipmentService_GetModelList);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.equipment_service.GetRequest,
 *   !proto.signal.TypeList>}
 */
const methodDescriptor_EquipmentService_GetSignalList = new grpc.web.MethodDescriptor(
  '/equipment_service.EquipmentService/GetSignalList',
  grpc.web.MethodType.UNARY,
  proto.equipment_service.GetRequest,
  pando_api_alarm_v0_signal$model_pb.TypeList,
  /**
   * @param {!proto.equipment_service.GetRequest} request
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
 *   !proto.equipment_service.GetRequest,
 *   !proto.signal.TypeList>}
 */
const methodInfo_EquipmentService_GetSignalList = new grpc.web.AbstractClientBase.MethodInfo(
  pando_api_alarm_v0_signal$model_pb.TypeList,
  /**
   * @param {!proto.equipment_service.GetRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_alarm_v0_signal$model_pb.TypeList.deserializeBinary
);


/**
 * @param {!proto.equipment_service.GetRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.signal.TypeList)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.signal.TypeList>|undefined}
 *     The XHR Node Readable Stream
 */
proto.equipment_service.EquipmentServiceClient.prototype.getSignalList =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/equipment_service.EquipmentService/GetSignalList',
      request,
      metadata || {},
      methodDescriptor_EquipmentService_GetSignalList,
      callback);
};


/**
 * @param {!proto.equipment_service.GetRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.signal.TypeList>}
 *     Promise that resolves to the response
 */
proto.equipment_service.EquipmentServicePromiseClient.prototype.getSignalList =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/equipment_service.EquipmentService/GetSignalList',
      request,
      metadata || {},
      methodDescriptor_EquipmentService_GetSignalList);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.equipment_service.GetRequest,
 *   !proto.equipment.ExtensionValueList>}
 */
const methodDescriptor_EquipmentService_GetExtensionValueList = new grpc.web.MethodDescriptor(
  '/equipment_service.EquipmentService/GetExtensionValueList',
  grpc.web.MethodType.UNARY,
  proto.equipment_service.GetRequest,
  pando_api_alarm_v0_equipment$model_pb.ExtensionValueList,
  /**
   * @param {!proto.equipment_service.GetRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_alarm_v0_equipment$model_pb.ExtensionValueList.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.equipment_service.GetRequest,
 *   !proto.equipment.ExtensionValueList>}
 */
const methodInfo_EquipmentService_GetExtensionValueList = new grpc.web.AbstractClientBase.MethodInfo(
  pando_api_alarm_v0_equipment$model_pb.ExtensionValueList,
  /**
   * @param {!proto.equipment_service.GetRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_alarm_v0_equipment$model_pb.ExtensionValueList.deserializeBinary
);


/**
 * @param {!proto.equipment_service.GetRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.equipment.ExtensionValueList)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.equipment.ExtensionValueList>|undefined}
 *     The XHR Node Readable Stream
 */
proto.equipment_service.EquipmentServiceClient.prototype.getExtensionValueList =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/equipment_service.EquipmentService/GetExtensionValueList',
      request,
      metadata || {},
      methodDescriptor_EquipmentService_GetExtensionValueList,
      callback);
};


/**
 * @param {!proto.equipment_service.GetRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.equipment.ExtensionValueList>}
 *     Promise that resolves to the response
 */
proto.equipment_service.EquipmentServicePromiseClient.prototype.getExtensionValueList =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/equipment_service.EquipmentService/GetExtensionValueList',
      request,
      metadata || {},
      methodDescriptor_EquipmentService_GetExtensionValueList);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.equipment.Model,
 *   !proto.equipment.ModelList>}
 */
const methodDescriptor_EquipmentService_CreateModel = new grpc.web.MethodDescriptor(
  '/equipment_service.EquipmentService/CreateModel',
  grpc.web.MethodType.UNARY,
  pando_api_alarm_v0_equipment$model_pb.Model,
  pando_api_alarm_v0_equipment$model_pb.ModelList,
  /**
   * @param {!proto.equipment.Model} request
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
 *   !proto.equipment.Model,
 *   !proto.equipment.ModelList>}
 */
const methodInfo_EquipmentService_CreateModel = new grpc.web.AbstractClientBase.MethodInfo(
  pando_api_alarm_v0_equipment$model_pb.ModelList,
  /**
   * @param {!proto.equipment.Model} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_alarm_v0_equipment$model_pb.ModelList.deserializeBinary
);


/**
 * @param {!proto.equipment.Model} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.equipment.ModelList)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.equipment.ModelList>|undefined}
 *     The XHR Node Readable Stream
 */
proto.equipment_service.EquipmentServiceClient.prototype.createModel =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/equipment_service.EquipmentService/CreateModel',
      request,
      metadata || {},
      methodDescriptor_EquipmentService_CreateModel,
      callback);
};


/**
 * @param {!proto.equipment.Model} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.equipment.ModelList>}
 *     Promise that resolves to the response
 */
proto.equipment_service.EquipmentServicePromiseClient.prototype.createModel =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/equipment_service.EquipmentService/CreateModel',
      request,
      metadata || {},
      methodDescriptor_EquipmentService_CreateModel);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.equipment.Model,
 *   !proto.equipment.ModelList>}
 */
const methodDescriptor_EquipmentService_UpdateModel = new grpc.web.MethodDescriptor(
  '/equipment_service.EquipmentService/UpdateModel',
  grpc.web.MethodType.UNARY,
  pando_api_alarm_v0_equipment$model_pb.Model,
  pando_api_alarm_v0_equipment$model_pb.ModelList,
  /**
   * @param {!proto.equipment.Model} request
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
 *   !proto.equipment.Model,
 *   !proto.equipment.ModelList>}
 */
const methodInfo_EquipmentService_UpdateModel = new grpc.web.AbstractClientBase.MethodInfo(
  pando_api_alarm_v0_equipment$model_pb.ModelList,
  /**
   * @param {!proto.equipment.Model} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_alarm_v0_equipment$model_pb.ModelList.deserializeBinary
);


/**
 * @param {!proto.equipment.Model} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.equipment.ModelList)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.equipment.ModelList>|undefined}
 *     The XHR Node Readable Stream
 */
proto.equipment_service.EquipmentServiceClient.prototype.updateModel =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/equipment_service.EquipmentService/UpdateModel',
      request,
      metadata || {},
      methodDescriptor_EquipmentService_UpdateModel,
      callback);
};


/**
 * @param {!proto.equipment.Model} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.equipment.ModelList>}
 *     Promise that resolves to the response
 */
proto.equipment_service.EquipmentServicePromiseClient.prototype.updateModel =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/equipment_service.EquipmentService/UpdateModel',
      request,
      metadata || {},
      methodDescriptor_EquipmentService_UpdateModel);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.equipment.Extension,
 *   !proto.equipment.ExtensionList>}
 */
const methodDescriptor_EquipmentService_CreateExtension = new grpc.web.MethodDescriptor(
  '/equipment_service.EquipmentService/CreateExtension',
  grpc.web.MethodType.UNARY,
  pando_api_alarm_v0_equipment$model_pb.Extension,
  pando_api_alarm_v0_equipment$model_pb.ExtensionList,
  /**
   * @param {!proto.equipment.Extension} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_alarm_v0_equipment$model_pb.ExtensionList.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.equipment.Extension,
 *   !proto.equipment.ExtensionList>}
 */
const methodInfo_EquipmentService_CreateExtension = new grpc.web.AbstractClientBase.MethodInfo(
  pando_api_alarm_v0_equipment$model_pb.ExtensionList,
  /**
   * @param {!proto.equipment.Extension} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_alarm_v0_equipment$model_pb.ExtensionList.deserializeBinary
);


/**
 * @param {!proto.equipment.Extension} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.equipment.ExtensionList)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.equipment.ExtensionList>|undefined}
 *     The XHR Node Readable Stream
 */
proto.equipment_service.EquipmentServiceClient.prototype.createExtension =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/equipment_service.EquipmentService/CreateExtension',
      request,
      metadata || {},
      methodDescriptor_EquipmentService_CreateExtension,
      callback);
};


/**
 * @param {!proto.equipment.Extension} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.equipment.ExtensionList>}
 *     Promise that resolves to the response
 */
proto.equipment_service.EquipmentServicePromiseClient.prototype.createExtension =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/equipment_service.EquipmentService/CreateExtension',
      request,
      metadata || {},
      methodDescriptor_EquipmentService_CreateExtension);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.equipment.Extension,
 *   !proto.equipment.ExtensionList>}
 */
const methodDescriptor_EquipmentService_UpdateExtension = new grpc.web.MethodDescriptor(
  '/equipment_service.EquipmentService/UpdateExtension',
  grpc.web.MethodType.UNARY,
  pando_api_alarm_v0_equipment$model_pb.Extension,
  pando_api_alarm_v0_equipment$model_pb.ExtensionList,
  /**
   * @param {!proto.equipment.Extension} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_alarm_v0_equipment$model_pb.ExtensionList.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.equipment.Extension,
 *   !proto.equipment.ExtensionList>}
 */
const methodInfo_EquipmentService_UpdateExtension = new grpc.web.AbstractClientBase.MethodInfo(
  pando_api_alarm_v0_equipment$model_pb.ExtensionList,
  /**
   * @param {!proto.equipment.Extension} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_alarm_v0_equipment$model_pb.ExtensionList.deserializeBinary
);


/**
 * @param {!proto.equipment.Extension} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.equipment.ExtensionList)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.equipment.ExtensionList>|undefined}
 *     The XHR Node Readable Stream
 */
proto.equipment_service.EquipmentServiceClient.prototype.updateExtension =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/equipment_service.EquipmentService/UpdateExtension',
      request,
      metadata || {},
      methodDescriptor_EquipmentService_UpdateExtension,
      callback);
};


/**
 * @param {!proto.equipment.Extension} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.equipment.ExtensionList>}
 *     Promise that resolves to the response
 */
proto.equipment_service.EquipmentServicePromiseClient.prototype.updateExtension =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/equipment_service.EquipmentService/UpdateExtension',
      request,
      metadata || {},
      methodDescriptor_EquipmentService_UpdateExtension);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.equipment.ExtensionValue,
 *   !proto.equipment.ExtensionValueList>}
 */
const methodDescriptor_EquipmentService_UpdateExtensionValue = new grpc.web.MethodDescriptor(
  '/equipment_service.EquipmentService/UpdateExtensionValue',
  grpc.web.MethodType.UNARY,
  pando_api_alarm_v0_equipment$model_pb.ExtensionValue,
  pando_api_alarm_v0_equipment$model_pb.ExtensionValueList,
  /**
   * @param {!proto.equipment.ExtensionValue} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_alarm_v0_equipment$model_pb.ExtensionValueList.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.equipment.ExtensionValue,
 *   !proto.equipment.ExtensionValueList>}
 */
const methodInfo_EquipmentService_UpdateExtensionValue = new grpc.web.AbstractClientBase.MethodInfo(
  pando_api_alarm_v0_equipment$model_pb.ExtensionValueList,
  /**
   * @param {!proto.equipment.ExtensionValue} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_alarm_v0_equipment$model_pb.ExtensionValueList.deserializeBinary
);


/**
 * @param {!proto.equipment.ExtensionValue} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.equipment.ExtensionValueList)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.equipment.ExtensionValueList>|undefined}
 *     The XHR Node Readable Stream
 */
proto.equipment_service.EquipmentServiceClient.prototype.updateExtensionValue =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/equipment_service.EquipmentService/UpdateExtensionValue',
      request,
      metadata || {},
      methodDescriptor_EquipmentService_UpdateExtensionValue,
      callback);
};


/**
 * @param {!proto.equipment.ExtensionValue} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.equipment.ExtensionValueList>}
 *     Promise that resolves to the response
 */
proto.equipment_service.EquipmentServicePromiseClient.prototype.updateExtensionValue =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/equipment_service.EquipmentService/UpdateExtensionValue',
      request,
      metadata || {},
      methodDescriptor_EquipmentService_UpdateExtensionValue);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.equipment_service.EditSignalsRequest,
 *   !proto.signal.TypeList>}
 */
const methodDescriptor_EquipmentService_AddSignal = new grpc.web.MethodDescriptor(
  '/equipment_service.EquipmentService/AddSignal',
  grpc.web.MethodType.UNARY,
  proto.equipment_service.EditSignalsRequest,
  pando_api_alarm_v0_signal$model_pb.TypeList,
  /**
   * @param {!proto.equipment_service.EditSignalsRequest} request
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
 *   !proto.equipment_service.EditSignalsRequest,
 *   !proto.signal.TypeList>}
 */
const methodInfo_EquipmentService_AddSignal = new grpc.web.AbstractClientBase.MethodInfo(
  pando_api_alarm_v0_signal$model_pb.TypeList,
  /**
   * @param {!proto.equipment_service.EditSignalsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_alarm_v0_signal$model_pb.TypeList.deserializeBinary
);


/**
 * @param {!proto.equipment_service.EditSignalsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.signal.TypeList)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.signal.TypeList>|undefined}
 *     The XHR Node Readable Stream
 */
proto.equipment_service.EquipmentServiceClient.prototype.addSignal =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/equipment_service.EquipmentService/AddSignal',
      request,
      metadata || {},
      methodDescriptor_EquipmentService_AddSignal,
      callback);
};


/**
 * @param {!proto.equipment_service.EditSignalsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.signal.TypeList>}
 *     Promise that resolves to the response
 */
proto.equipment_service.EquipmentServicePromiseClient.prototype.addSignal =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/equipment_service.EquipmentService/AddSignal',
      request,
      metadata || {},
      methodDescriptor_EquipmentService_AddSignal);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.equipment_service.EditSignalsRequest,
 *   !proto.signal.TypeList>}
 */
const methodDescriptor_EquipmentService_RemoveSignal = new grpc.web.MethodDescriptor(
  '/equipment_service.EquipmentService/RemoveSignal',
  grpc.web.MethodType.UNARY,
  proto.equipment_service.EditSignalsRequest,
  pando_api_alarm_v0_signal$model_pb.TypeList,
  /**
   * @param {!proto.equipment_service.EditSignalsRequest} request
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
 *   !proto.equipment_service.EditSignalsRequest,
 *   !proto.signal.TypeList>}
 */
const methodInfo_EquipmentService_RemoveSignal = new grpc.web.AbstractClientBase.MethodInfo(
  pando_api_alarm_v0_signal$model_pb.TypeList,
  /**
   * @param {!proto.equipment_service.EditSignalsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_alarm_v0_signal$model_pb.TypeList.deserializeBinary
);


/**
 * @param {!proto.equipment_service.EditSignalsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.signal.TypeList)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.signal.TypeList>|undefined}
 *     The XHR Node Readable Stream
 */
proto.equipment_service.EquipmentServiceClient.prototype.removeSignal =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/equipment_service.EquipmentService/RemoveSignal',
      request,
      metadata || {},
      methodDescriptor_EquipmentService_RemoveSignal,
      callback);
};


/**
 * @param {!proto.equipment_service.EditSignalsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.signal.TypeList>}
 *     Promise that resolves to the response
 */
proto.equipment_service.EquipmentServicePromiseClient.prototype.removeSignal =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/equipment_service.EquipmentService/RemoveSignal',
      request,
      metadata || {},
      methodDescriptor_EquipmentService_RemoveSignal);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.equipment_service.GetEquipmentByExtensionRequest,
 *   !proto.equipment.ModelList>}
 */
const methodDescriptor_EquipmentService_GetEquipmentByExtension = new grpc.web.MethodDescriptor(
  '/equipment_service.EquipmentService/GetEquipmentByExtension',
  grpc.web.MethodType.UNARY,
  proto.equipment_service.GetEquipmentByExtensionRequest,
  pando_api_alarm_v0_equipment$model_pb.ModelList,
  /**
   * @param {!proto.equipment_service.GetEquipmentByExtensionRequest} request
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
 *   !proto.equipment_service.GetEquipmentByExtensionRequest,
 *   !proto.equipment.ModelList>}
 */
const methodInfo_EquipmentService_GetEquipmentByExtension = new grpc.web.AbstractClientBase.MethodInfo(
  pando_api_alarm_v0_equipment$model_pb.ModelList,
  /**
   * @param {!proto.equipment_service.GetEquipmentByExtensionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_alarm_v0_equipment$model_pb.ModelList.deserializeBinary
);


/**
 * @param {!proto.equipment_service.GetEquipmentByExtensionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.equipment.ModelList)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.equipment.ModelList>|undefined}
 *     The XHR Node Readable Stream
 */
proto.equipment_service.EquipmentServiceClient.prototype.getEquipmentByExtension =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/equipment_service.EquipmentService/GetEquipmentByExtension',
      request,
      metadata || {},
      methodDescriptor_EquipmentService_GetEquipmentByExtension,
      callback);
};


/**
 * @param {!proto.equipment_service.GetEquipmentByExtensionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.equipment.ModelList>}
 *     Promise that resolves to the response
 */
proto.equipment_service.EquipmentServicePromiseClient.prototype.getEquipmentByExtension =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/equipment_service.EquipmentService/GetEquipmentByExtension',
      request,
      metadata || {},
      methodDescriptor_EquipmentService_GetEquipmentByExtension);
};


module.exports = proto.equipment_service;

