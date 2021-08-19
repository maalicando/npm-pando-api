/**
 * @fileoverview gRPC-Web generated client stub for central_station
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var pando_api_alarm_v0_centralstationtemplate$model_pb = require('../../../../pando/api/alarm/v0/centralstationtemplate-model_pb.js')

var pando_api_extensions_pb = require('../../../../pando/api/extensions_pb.js')

var pando_api_shared_pb = require('../../../../pando/api/shared_pb.js')
const proto = {};
proto.central_station = require('./centralstation_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.central_station.CentralStationServiceClient =
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
proto.central_station.CentralStationServicePromiseClient =
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
 *   !proto.central_station.TypeList>}
 */
const methodDescriptor_CentralStationService_GetAllTypes = new grpc.web.MethodDescriptor(
  '/central_station.CentralStationService/GetAllTypes',
  grpc.web.MethodType.UNARY,
  pando_api_shared_pb.Empty,
  proto.central_station.TypeList,
  /**
   * @param {!proto.pando.api.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.central_station.TypeList.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pando.api.Empty,
 *   !proto.central_station.TypeList>}
 */
const methodInfo_CentralStationService_GetAllTypes = new grpc.web.AbstractClientBase.MethodInfo(
  proto.central_station.TypeList,
  /**
   * @param {!proto.pando.api.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.central_station.TypeList.deserializeBinary
);


/**
 * @param {!proto.pando.api.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.central_station.TypeList)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.central_station.TypeList>|undefined}
 *     The XHR Node Readable Stream
 */
proto.central_station.CentralStationServiceClient.prototype.getAllTypes =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/central_station.CentralStationService/GetAllTypes',
      request,
      metadata || {},
      methodDescriptor_CentralStationService_GetAllTypes,
      callback);
};


/**
 * @param {!proto.pando.api.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.central_station.TypeList>}
 *     Promise that resolves to the response
 */
proto.central_station.CentralStationServicePromiseClient.prototype.getAllTypes =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/central_station.CentralStationService/GetAllTypes',
      request,
      metadata || {},
      methodDescriptor_CentralStationService_GetAllTypes);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pando.api.Empty,
 *   !proto.central_station.ConfigurationList>}
 */
const methodDescriptor_CentralStationService_GetAllConfigurations = new grpc.web.MethodDescriptor(
  '/central_station.CentralStationService/GetAllConfigurations',
  grpc.web.MethodType.UNARY,
  pando_api_shared_pb.Empty,
  proto.central_station.ConfigurationList,
  /**
   * @param {!proto.pando.api.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.central_station.ConfigurationList.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pando.api.Empty,
 *   !proto.central_station.ConfigurationList>}
 */
const methodInfo_CentralStationService_GetAllConfigurations = new grpc.web.AbstractClientBase.MethodInfo(
  proto.central_station.ConfigurationList,
  /**
   * @param {!proto.pando.api.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.central_station.ConfigurationList.deserializeBinary
);


/**
 * @param {!proto.pando.api.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.central_station.ConfigurationList)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.central_station.ConfigurationList>|undefined}
 *     The XHR Node Readable Stream
 */
proto.central_station.CentralStationServiceClient.prototype.getAllConfigurations =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/central_station.CentralStationService/GetAllConfigurations',
      request,
      metadata || {},
      methodDescriptor_CentralStationService_GetAllConfigurations,
      callback);
};


/**
 * @param {!proto.pando.api.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.central_station.ConfigurationList>}
 *     Promise that resolves to the response
 */
proto.central_station.CentralStationServicePromiseClient.prototype.getAllConfigurations =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/central_station.CentralStationService/GetAllConfigurations',
      request,
      metadata || {},
      methodDescriptor_CentralStationService_GetAllConfigurations);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.central_station.GetTypeRequest,
 *   !proto.central_station.Type>}
 */
const methodDescriptor_CentralStationService_GetType = new grpc.web.MethodDescriptor(
  '/central_station.CentralStationService/GetType',
  grpc.web.MethodType.UNARY,
  proto.central_station.GetTypeRequest,
  proto.central_station.Type,
  /**
   * @param {!proto.central_station.GetTypeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.central_station.Type.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.central_station.GetTypeRequest,
 *   !proto.central_station.Type>}
 */
const methodInfo_CentralStationService_GetType = new grpc.web.AbstractClientBase.MethodInfo(
  proto.central_station.Type,
  /**
   * @param {!proto.central_station.GetTypeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.central_station.Type.deserializeBinary
);


/**
 * @param {!proto.central_station.GetTypeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.central_station.Type)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.central_station.Type>|undefined}
 *     The XHR Node Readable Stream
 */
proto.central_station.CentralStationServiceClient.prototype.getType =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/central_station.CentralStationService/GetType',
      request,
      metadata || {},
      methodDescriptor_CentralStationService_GetType,
      callback);
};


/**
 * @param {!proto.central_station.GetTypeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.central_station.Type>}
 *     Promise that resolves to the response
 */
proto.central_station.CentralStationServicePromiseClient.prototype.getType =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/central_station.CentralStationService/GetType',
      request,
      metadata || {},
      methodDescriptor_CentralStationService_GetType);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.central_station.GetConfigurationRequest,
 *   !proto.central_station_template.ModelList>}
 */
const methodDescriptor_CentralStationService_GetTemplateList = new grpc.web.MethodDescriptor(
  '/central_station.CentralStationService/GetTemplateList',
  grpc.web.MethodType.UNARY,
  proto.central_station.GetConfigurationRequest,
  pando_api_alarm_v0_centralstationtemplate$model_pb.ModelList,
  /**
   * @param {!proto.central_station.GetConfigurationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_alarm_v0_centralstationtemplate$model_pb.ModelList.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.central_station.GetConfigurationRequest,
 *   !proto.central_station_template.ModelList>}
 */
const methodInfo_CentralStationService_GetTemplateList = new grpc.web.AbstractClientBase.MethodInfo(
  pando_api_alarm_v0_centralstationtemplate$model_pb.ModelList,
  /**
   * @param {!proto.central_station.GetConfigurationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_alarm_v0_centralstationtemplate$model_pb.ModelList.deserializeBinary
);


/**
 * @param {!proto.central_station.GetConfigurationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.central_station_template.ModelList)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.central_station_template.ModelList>|undefined}
 *     The XHR Node Readable Stream
 */
proto.central_station.CentralStationServiceClient.prototype.getTemplateList =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/central_station.CentralStationService/GetTemplateList',
      request,
      metadata || {},
      methodDescriptor_CentralStationService_GetTemplateList,
      callback);
};


/**
 * @param {!proto.central_station.GetConfigurationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.central_station_template.ModelList>}
 *     Promise that resolves to the response
 */
proto.central_station.CentralStationServicePromiseClient.prototype.getTemplateList =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/central_station.CentralStationService/GetTemplateList',
      request,
      metadata || {},
      methodDescriptor_CentralStationService_GetTemplateList);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.central_station.GetConfigurationRequest,
 *   !proto.central_station.Configuration>}
 */
const methodDescriptor_CentralStationService_GetConfiguration = new grpc.web.MethodDescriptor(
  '/central_station.CentralStationService/GetConfiguration',
  grpc.web.MethodType.UNARY,
  proto.central_station.GetConfigurationRequest,
  proto.central_station.Configuration,
  /**
   * @param {!proto.central_station.GetConfigurationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.central_station.Configuration.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.central_station.GetConfigurationRequest,
 *   !proto.central_station.Configuration>}
 */
const methodInfo_CentralStationService_GetConfiguration = new grpc.web.AbstractClientBase.MethodInfo(
  proto.central_station.Configuration,
  /**
   * @param {!proto.central_station.GetConfigurationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.central_station.Configuration.deserializeBinary
);


/**
 * @param {!proto.central_station.GetConfigurationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.central_station.Configuration)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.central_station.Configuration>|undefined}
 *     The XHR Node Readable Stream
 */
proto.central_station.CentralStationServiceClient.prototype.getConfiguration =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/central_station.CentralStationService/GetConfiguration',
      request,
      metadata || {},
      methodDescriptor_CentralStationService_GetConfiguration,
      callback);
};


/**
 * @param {!proto.central_station.GetConfigurationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.central_station.Configuration>}
 *     Promise that resolves to the response
 */
proto.central_station.CentralStationServicePromiseClient.prototype.getConfiguration =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/central_station.CentralStationService/GetConfiguration',
      request,
      metadata || {},
      methodDescriptor_CentralStationService_GetConfiguration);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.central_station.GetConfigurationListRequest,
 *   !proto.central_station.ConfigurationList>}
 */
const methodDescriptor_CentralStationService_GetConfigurationList = new grpc.web.MethodDescriptor(
  '/central_station.CentralStationService/GetConfigurationList',
  grpc.web.MethodType.UNARY,
  proto.central_station.GetConfigurationListRequest,
  proto.central_station.ConfigurationList,
  /**
   * @param {!proto.central_station.GetConfigurationListRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.central_station.ConfigurationList.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.central_station.GetConfigurationListRequest,
 *   !proto.central_station.ConfigurationList>}
 */
const methodInfo_CentralStationService_GetConfigurationList = new grpc.web.AbstractClientBase.MethodInfo(
  proto.central_station.ConfigurationList,
  /**
   * @param {!proto.central_station.GetConfigurationListRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.central_station.ConfigurationList.deserializeBinary
);


/**
 * @param {!proto.central_station.GetConfigurationListRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.central_station.ConfigurationList)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.central_station.ConfigurationList>|undefined}
 *     The XHR Node Readable Stream
 */
proto.central_station.CentralStationServiceClient.prototype.getConfigurationList =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/central_station.CentralStationService/GetConfigurationList',
      request,
      metadata || {},
      methodDescriptor_CentralStationService_GetConfigurationList,
      callback);
};


/**
 * @param {!proto.central_station.GetConfigurationListRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.central_station.ConfigurationList>}
 *     Promise that resolves to the response
 */
proto.central_station.CentralStationServicePromiseClient.prototype.getConfigurationList =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/central_station.CentralStationService/GetConfigurationList',
      request,
      metadata || {},
      methodDescriptor_CentralStationService_GetConfigurationList);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.central_station.GetTypeRequest,
 *   !proto.central_station.ConfigurationList>}
 */
const methodDescriptor_CentralStationService_GetConfigurationsFromType = new grpc.web.MethodDescriptor(
  '/central_station.CentralStationService/GetConfigurationsFromType',
  grpc.web.MethodType.UNARY,
  proto.central_station.GetTypeRequest,
  proto.central_station.ConfigurationList,
  /**
   * @param {!proto.central_station.GetTypeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.central_station.ConfigurationList.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.central_station.GetTypeRequest,
 *   !proto.central_station.ConfigurationList>}
 */
const methodInfo_CentralStationService_GetConfigurationsFromType = new grpc.web.AbstractClientBase.MethodInfo(
  proto.central_station.ConfigurationList,
  /**
   * @param {!proto.central_station.GetTypeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.central_station.ConfigurationList.deserializeBinary
);


/**
 * @param {!proto.central_station.GetTypeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.central_station.ConfigurationList)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.central_station.ConfigurationList>|undefined}
 *     The XHR Node Readable Stream
 */
proto.central_station.CentralStationServiceClient.prototype.getConfigurationsFromType =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/central_station.CentralStationService/GetConfigurationsFromType',
      request,
      metadata || {},
      methodDescriptor_CentralStationService_GetConfigurationsFromType,
      callback);
};


/**
 * @param {!proto.central_station.GetTypeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.central_station.ConfigurationList>}
 *     Promise that resolves to the response
 */
proto.central_station.CentralStationServicePromiseClient.prototype.getConfigurationsFromType =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/central_station.CentralStationService/GetConfigurationsFromType',
      request,
      metadata || {},
      methodDescriptor_CentralStationService_GetConfigurationsFromType);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.central_station.Type,
 *   !proto.central_station.TypeList>}
 */
const methodDescriptor_CentralStationService_CreateType = new grpc.web.MethodDescriptor(
  '/central_station.CentralStationService/CreateType',
  grpc.web.MethodType.UNARY,
  proto.central_station.Type,
  proto.central_station.TypeList,
  /**
   * @param {!proto.central_station.Type} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.central_station.TypeList.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.central_station.Type,
 *   !proto.central_station.TypeList>}
 */
const methodInfo_CentralStationService_CreateType = new grpc.web.AbstractClientBase.MethodInfo(
  proto.central_station.TypeList,
  /**
   * @param {!proto.central_station.Type} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.central_station.TypeList.deserializeBinary
);


/**
 * @param {!proto.central_station.Type} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.central_station.TypeList)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.central_station.TypeList>|undefined}
 *     The XHR Node Readable Stream
 */
proto.central_station.CentralStationServiceClient.prototype.createType =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/central_station.CentralStationService/CreateType',
      request,
      metadata || {},
      methodDescriptor_CentralStationService_CreateType,
      callback);
};


/**
 * @param {!proto.central_station.Type} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.central_station.TypeList>}
 *     Promise that resolves to the response
 */
proto.central_station.CentralStationServicePromiseClient.prototype.createType =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/central_station.CentralStationService/CreateType',
      request,
      metadata || {},
      methodDescriptor_CentralStationService_CreateType);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.central_station.Type,
 *   !proto.central_station.TypeList>}
 */
const methodDescriptor_CentralStationService_UpdateType = new grpc.web.MethodDescriptor(
  '/central_station.CentralStationService/UpdateType',
  grpc.web.MethodType.UNARY,
  proto.central_station.Type,
  proto.central_station.TypeList,
  /**
   * @param {!proto.central_station.Type} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.central_station.TypeList.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.central_station.Type,
 *   !proto.central_station.TypeList>}
 */
const methodInfo_CentralStationService_UpdateType = new grpc.web.AbstractClientBase.MethodInfo(
  proto.central_station.TypeList,
  /**
   * @param {!proto.central_station.Type} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.central_station.TypeList.deserializeBinary
);


/**
 * @param {!proto.central_station.Type} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.central_station.TypeList)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.central_station.TypeList>|undefined}
 *     The XHR Node Readable Stream
 */
proto.central_station.CentralStationServiceClient.prototype.updateType =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/central_station.CentralStationService/UpdateType',
      request,
      metadata || {},
      methodDescriptor_CentralStationService_UpdateType,
      callback);
};


/**
 * @param {!proto.central_station.Type} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.central_station.TypeList>}
 *     Promise that resolves to the response
 */
proto.central_station.CentralStationServicePromiseClient.prototype.updateType =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/central_station.CentralStationService/UpdateType',
      request,
      metadata || {},
      methodDescriptor_CentralStationService_UpdateType);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.central_station.Setting,
 *   !proto.central_station.SettingList>}
 */
const methodDescriptor_CentralStationService_CreateSetting = new grpc.web.MethodDescriptor(
  '/central_station.CentralStationService/CreateSetting',
  grpc.web.MethodType.UNARY,
  proto.central_station.Setting,
  proto.central_station.SettingList,
  /**
   * @param {!proto.central_station.Setting} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.central_station.SettingList.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.central_station.Setting,
 *   !proto.central_station.SettingList>}
 */
const methodInfo_CentralStationService_CreateSetting = new grpc.web.AbstractClientBase.MethodInfo(
  proto.central_station.SettingList,
  /**
   * @param {!proto.central_station.Setting} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.central_station.SettingList.deserializeBinary
);


/**
 * @param {!proto.central_station.Setting} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.central_station.SettingList)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.central_station.SettingList>|undefined}
 *     The XHR Node Readable Stream
 */
proto.central_station.CentralStationServiceClient.prototype.createSetting =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/central_station.CentralStationService/CreateSetting',
      request,
      metadata || {},
      methodDescriptor_CentralStationService_CreateSetting,
      callback);
};


/**
 * @param {!proto.central_station.Setting} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.central_station.SettingList>}
 *     Promise that resolves to the response
 */
proto.central_station.CentralStationServicePromiseClient.prototype.createSetting =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/central_station.CentralStationService/CreateSetting',
      request,
      metadata || {},
      methodDescriptor_CentralStationService_CreateSetting);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.central_station.Setting,
 *   !proto.central_station.SettingList>}
 */
const methodDescriptor_CentralStationService_UpdateSetting = new grpc.web.MethodDescriptor(
  '/central_station.CentralStationService/UpdateSetting',
  grpc.web.MethodType.UNARY,
  proto.central_station.Setting,
  proto.central_station.SettingList,
  /**
   * @param {!proto.central_station.Setting} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.central_station.SettingList.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.central_station.Setting,
 *   !proto.central_station.SettingList>}
 */
const methodInfo_CentralStationService_UpdateSetting = new grpc.web.AbstractClientBase.MethodInfo(
  proto.central_station.SettingList,
  /**
   * @param {!proto.central_station.Setting} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.central_station.SettingList.deserializeBinary
);


/**
 * @param {!proto.central_station.Setting} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.central_station.SettingList)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.central_station.SettingList>|undefined}
 *     The XHR Node Readable Stream
 */
proto.central_station.CentralStationServiceClient.prototype.updateSetting =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/central_station.CentralStationService/UpdateSetting',
      request,
      metadata || {},
      methodDescriptor_CentralStationService_UpdateSetting,
      callback);
};


/**
 * @param {!proto.central_station.Setting} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.central_station.SettingList>}
 *     Promise that resolves to the response
 */
proto.central_station.CentralStationServicePromiseClient.prototype.updateSetting =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/central_station.CentralStationService/UpdateSetting',
      request,
      metadata || {},
      methodDescriptor_CentralStationService_UpdateSetting);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.central_station.SettingValue,
 *   !proto.central_station.Configuration>}
 */
const methodDescriptor_CentralStationService_UpdateSettingValue = new grpc.web.MethodDescriptor(
  '/central_station.CentralStationService/UpdateSettingValue',
  grpc.web.MethodType.UNARY,
  proto.central_station.SettingValue,
  proto.central_station.Configuration,
  /**
   * @param {!proto.central_station.SettingValue} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.central_station.Configuration.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.central_station.SettingValue,
 *   !proto.central_station.Configuration>}
 */
const methodInfo_CentralStationService_UpdateSettingValue = new grpc.web.AbstractClientBase.MethodInfo(
  proto.central_station.Configuration,
  /**
   * @param {!proto.central_station.SettingValue} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.central_station.Configuration.deserializeBinary
);


/**
 * @param {!proto.central_station.SettingValue} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.central_station.Configuration)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.central_station.Configuration>|undefined}
 *     The XHR Node Readable Stream
 */
proto.central_station.CentralStationServiceClient.prototype.updateSettingValue =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/central_station.CentralStationService/UpdateSettingValue',
      request,
      metadata || {},
      methodDescriptor_CentralStationService_UpdateSettingValue,
      callback);
};


/**
 * @param {!proto.central_station.SettingValue} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.central_station.Configuration>}
 *     Promise that resolves to the response
 */
proto.central_station.CentralStationServicePromiseClient.prototype.updateSettingValue =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/central_station.CentralStationService/UpdateSettingValue',
      request,
      metadata || {},
      methodDescriptor_CentralStationService_UpdateSettingValue);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.central_station_template.Model,
 *   !proto.central_station_template.ModelList>}
 */
const methodDescriptor_CentralStationService_CreateTemplate = new grpc.web.MethodDescriptor(
  '/central_station.CentralStationService/CreateTemplate',
  grpc.web.MethodType.UNARY,
  pando_api_alarm_v0_centralstationtemplate$model_pb.Model,
  pando_api_alarm_v0_centralstationtemplate$model_pb.ModelList,
  /**
   * @param {!proto.central_station_template.Model} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_alarm_v0_centralstationtemplate$model_pb.ModelList.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.central_station_template.Model,
 *   !proto.central_station_template.ModelList>}
 */
const methodInfo_CentralStationService_CreateTemplate = new grpc.web.AbstractClientBase.MethodInfo(
  pando_api_alarm_v0_centralstationtemplate$model_pb.ModelList,
  /**
   * @param {!proto.central_station_template.Model} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_alarm_v0_centralstationtemplate$model_pb.ModelList.deserializeBinary
);


/**
 * @param {!proto.central_station_template.Model} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.central_station_template.ModelList)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.central_station_template.ModelList>|undefined}
 *     The XHR Node Readable Stream
 */
proto.central_station.CentralStationServiceClient.prototype.createTemplate =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/central_station.CentralStationService/CreateTemplate',
      request,
      metadata || {},
      methodDescriptor_CentralStationService_CreateTemplate,
      callback);
};


/**
 * @param {!proto.central_station_template.Model} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.central_station_template.ModelList>}
 *     Promise that resolves to the response
 */
proto.central_station.CentralStationServicePromiseClient.prototype.createTemplate =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/central_station.CentralStationService/CreateTemplate',
      request,
      metadata || {},
      methodDescriptor_CentralStationService_CreateTemplate);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.central_station_template.Model,
 *   !proto.central_station_template.ModelList>}
 */
const methodDescriptor_CentralStationService_UpdateTemplate = new grpc.web.MethodDescriptor(
  '/central_station.CentralStationService/UpdateTemplate',
  grpc.web.MethodType.UNARY,
  pando_api_alarm_v0_centralstationtemplate$model_pb.Model,
  pando_api_alarm_v0_centralstationtemplate$model_pb.ModelList,
  /**
   * @param {!proto.central_station_template.Model} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_alarm_v0_centralstationtemplate$model_pb.ModelList.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.central_station_template.Model,
 *   !proto.central_station_template.ModelList>}
 */
const methodInfo_CentralStationService_UpdateTemplate = new grpc.web.AbstractClientBase.MethodInfo(
  pando_api_alarm_v0_centralstationtemplate$model_pb.ModelList,
  /**
   * @param {!proto.central_station_template.Model} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_alarm_v0_centralstationtemplate$model_pb.ModelList.deserializeBinary
);


/**
 * @param {!proto.central_station_template.Model} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.central_station_template.ModelList)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.central_station_template.ModelList>|undefined}
 *     The XHR Node Readable Stream
 */
proto.central_station.CentralStationServiceClient.prototype.updateTemplate =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/central_station.CentralStationService/UpdateTemplate',
      request,
      metadata || {},
      methodDescriptor_CentralStationService_UpdateTemplate,
      callback);
};


/**
 * @param {!proto.central_station_template.Model} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.central_station_template.ModelList>}
 *     Promise that resolves to the response
 */
proto.central_station.CentralStationServicePromiseClient.prototype.updateTemplate =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/central_station.CentralStationService/UpdateTemplate',
      request,
      metadata || {},
      methodDescriptor_CentralStationService_UpdateTemplate);
};


module.exports = proto.central_station;

