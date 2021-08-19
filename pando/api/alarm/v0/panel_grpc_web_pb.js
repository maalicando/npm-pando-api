/**
 * @fileoverview gRPC-Web generated client stub for panel_service
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var pando_api_alarm_v0_equipment$model_pb = require('../../../../pando/api/alarm/v0/equipment-model_pb.js')

var pando_api_alarm_v0_panel$model_pb = require('../../../../pando/api/alarm/v0/panel-model_pb.js')

var pando_api_extensions_pb = require('../../../../pando/api/extensions_pb.js')

var pando_api_shared_pb = require('../../../../pando/api/shared_pb.js')
const proto = {};
proto.panel_service = require('./panel_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.panel_service.PanelServiceClient =
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
proto.panel_service.PanelServicePromiseClient =
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
 *   !proto.panel.TypeList>}
 */
const methodDescriptor_PanelService_GetAllTypes = new grpc.web.MethodDescriptor(
  '/panel_service.PanelService/GetAllTypes',
  grpc.web.MethodType.UNARY,
  pando_api_shared_pb.Empty,
  pando_api_alarm_v0_panel$model_pb.TypeList,
  /**
   * @param {!proto.pando.api.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_alarm_v0_panel$model_pb.TypeList.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pando.api.Empty,
 *   !proto.panel.TypeList>}
 */
const methodInfo_PanelService_GetAllTypes = new grpc.web.AbstractClientBase.MethodInfo(
  pando_api_alarm_v0_panel$model_pb.TypeList,
  /**
   * @param {!proto.pando.api.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_alarm_v0_panel$model_pb.TypeList.deserializeBinary
);


/**
 * @param {!proto.pando.api.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.panel.TypeList)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.panel.TypeList>|undefined}
 *     The XHR Node Readable Stream
 */
proto.panel_service.PanelServiceClient.prototype.getAllTypes =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/panel_service.PanelService/GetAllTypes',
      request,
      metadata || {},
      methodDescriptor_PanelService_GetAllTypes,
      callback);
};


/**
 * @param {!proto.pando.api.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.panel.TypeList>}
 *     Promise that resolves to the response
 */
proto.panel_service.PanelServicePromiseClient.prototype.getAllTypes =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/panel_service.PanelService/GetAllTypes',
      request,
      metadata || {},
      methodDescriptor_PanelService_GetAllTypes);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.panel_service.GetPanelTypeRequest,
 *   !proto.panel.Type>}
 */
const methodDescriptor_PanelService_GetType = new grpc.web.MethodDescriptor(
  '/panel_service.PanelService/GetType',
  grpc.web.MethodType.UNARY,
  proto.panel_service.GetPanelTypeRequest,
  pando_api_alarm_v0_panel$model_pb.Type,
  /**
   * @param {!proto.panel_service.GetPanelTypeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_alarm_v0_panel$model_pb.Type.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.panel_service.GetPanelTypeRequest,
 *   !proto.panel.Type>}
 */
const methodInfo_PanelService_GetType = new grpc.web.AbstractClientBase.MethodInfo(
  pando_api_alarm_v0_panel$model_pb.Type,
  /**
   * @param {!proto.panel_service.GetPanelTypeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_alarm_v0_panel$model_pb.Type.deserializeBinary
);


/**
 * @param {!proto.panel_service.GetPanelTypeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.panel.Type)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.panel.Type>|undefined}
 *     The XHR Node Readable Stream
 */
proto.panel_service.PanelServiceClient.prototype.getType =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/panel_service.PanelService/GetType',
      request,
      metadata || {},
      methodDescriptor_PanelService_GetType,
      callback);
};


/**
 * @param {!proto.panel_service.GetPanelTypeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.panel.Type>}
 *     Promise that resolves to the response
 */
proto.panel_service.PanelServicePromiseClient.prototype.getType =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/panel_service.PanelService/GetType',
      request,
      metadata || {},
      methodDescriptor_PanelService_GetType);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.panel_service.GetPanelConfigurationRequest,
 *   !proto.panel.Configuration>}
 */
const methodDescriptor_PanelService_GetConfiguration = new grpc.web.MethodDescriptor(
  '/panel_service.PanelService/GetConfiguration',
  grpc.web.MethodType.UNARY,
  proto.panel_service.GetPanelConfigurationRequest,
  pando_api_alarm_v0_panel$model_pb.Configuration,
  /**
   * @param {!proto.panel_service.GetPanelConfigurationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_alarm_v0_panel$model_pb.Configuration.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.panel_service.GetPanelConfigurationRequest,
 *   !proto.panel.Configuration>}
 */
const methodInfo_PanelService_GetConfiguration = new grpc.web.AbstractClientBase.MethodInfo(
  pando_api_alarm_v0_panel$model_pb.Configuration,
  /**
   * @param {!proto.panel_service.GetPanelConfigurationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_alarm_v0_panel$model_pb.Configuration.deserializeBinary
);


/**
 * @param {!proto.panel_service.GetPanelConfigurationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.panel.Configuration)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.panel.Configuration>|undefined}
 *     The XHR Node Readable Stream
 */
proto.panel_service.PanelServiceClient.prototype.getConfiguration =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/panel_service.PanelService/GetConfiguration',
      request,
      metadata || {},
      methodDescriptor_PanelService_GetConfiguration,
      callback);
};


/**
 * @param {!proto.panel_service.GetPanelConfigurationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.panel.Configuration>}
 *     Promise that resolves to the response
 */
proto.panel_service.PanelServicePromiseClient.prototype.getConfiguration =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/panel_service.PanelService/GetConfiguration',
      request,
      metadata || {},
      methodDescriptor_PanelService_GetConfiguration);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.panel_service.GetPanelConfigurationGuidListRequest,
 *   !proto.panel.ConfigurationList>}
 */
const methodDescriptor_PanelService_GetConfigurationFromGuildList = new grpc.web.MethodDescriptor(
  '/panel_service.PanelService/GetConfigurationFromGuildList',
  grpc.web.MethodType.UNARY,
  proto.panel_service.GetPanelConfigurationGuidListRequest,
  pando_api_alarm_v0_panel$model_pb.ConfigurationList,
  /**
   * @param {!proto.panel_service.GetPanelConfigurationGuidListRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_alarm_v0_panel$model_pb.ConfigurationList.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.panel_service.GetPanelConfigurationGuidListRequest,
 *   !proto.panel.ConfigurationList>}
 */
const methodInfo_PanelService_GetConfigurationFromGuildList = new grpc.web.AbstractClientBase.MethodInfo(
  pando_api_alarm_v0_panel$model_pb.ConfigurationList,
  /**
   * @param {!proto.panel_service.GetPanelConfigurationGuidListRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_alarm_v0_panel$model_pb.ConfigurationList.deserializeBinary
);


/**
 * @param {!proto.panel_service.GetPanelConfigurationGuidListRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.panel.ConfigurationList)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.panel.ConfigurationList>|undefined}
 *     The XHR Node Readable Stream
 */
proto.panel_service.PanelServiceClient.prototype.getConfigurationFromGuildList =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/panel_service.PanelService/GetConfigurationFromGuildList',
      request,
      metadata || {},
      methodDescriptor_PanelService_GetConfigurationFromGuildList,
      callback);
};


/**
 * @param {!proto.panel_service.GetPanelConfigurationGuidListRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.panel.ConfigurationList>}
 *     Promise that resolves to the response
 */
proto.panel_service.PanelServicePromiseClient.prototype.getConfigurationFromGuildList =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/panel_service.PanelService/GetConfigurationFromGuildList',
      request,
      metadata || {},
      methodDescriptor_PanelService_GetConfigurationFromGuildList);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.panel_service.GetPanelTypeRequest,
 *   !proto.panel.ConfigurationList>}
 */
const methodDescriptor_PanelService_GetConfigurationList = new grpc.web.MethodDescriptor(
  '/panel_service.PanelService/GetConfigurationList',
  grpc.web.MethodType.UNARY,
  proto.panel_service.GetPanelTypeRequest,
  pando_api_alarm_v0_panel$model_pb.ConfigurationList,
  /**
   * @param {!proto.panel_service.GetPanelTypeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_alarm_v0_panel$model_pb.ConfigurationList.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.panel_service.GetPanelTypeRequest,
 *   !proto.panel.ConfigurationList>}
 */
const methodInfo_PanelService_GetConfigurationList = new grpc.web.AbstractClientBase.MethodInfo(
  pando_api_alarm_v0_panel$model_pb.ConfigurationList,
  /**
   * @param {!proto.panel_service.GetPanelTypeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_alarm_v0_panel$model_pb.ConfigurationList.deserializeBinary
);


/**
 * @param {!proto.panel_service.GetPanelTypeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.panel.ConfigurationList)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.panel.ConfigurationList>|undefined}
 *     The XHR Node Readable Stream
 */
proto.panel_service.PanelServiceClient.prototype.getConfigurationList =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/panel_service.PanelService/GetConfigurationList',
      request,
      metadata || {},
      methodDescriptor_PanelService_GetConfigurationList,
      callback);
};


/**
 * @param {!proto.panel_service.GetPanelTypeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.panel.ConfigurationList>}
 *     Promise that resolves to the response
 */
proto.panel_service.PanelServicePromiseClient.prototype.getConfigurationList =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/panel_service.PanelService/GetConfigurationList',
      request,
      metadata || {},
      methodDescriptor_PanelService_GetConfigurationList);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.panel_service.GetPanelTypeRequest,
 *   !proto.panel.PanelEquipmentList>}
 */
const methodDescriptor_PanelService_GetPanelEquipmentList = new grpc.web.MethodDescriptor(
  '/panel_service.PanelService/GetPanelEquipmentList',
  grpc.web.MethodType.UNARY,
  proto.panel_service.GetPanelTypeRequest,
  pando_api_alarm_v0_panel$model_pb.PanelEquipmentList,
  /**
   * @param {!proto.panel_service.GetPanelTypeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_alarm_v0_panel$model_pb.PanelEquipmentList.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.panel_service.GetPanelTypeRequest,
 *   !proto.panel.PanelEquipmentList>}
 */
const methodInfo_PanelService_GetPanelEquipmentList = new grpc.web.AbstractClientBase.MethodInfo(
  pando_api_alarm_v0_panel$model_pb.PanelEquipmentList,
  /**
   * @param {!proto.panel_service.GetPanelTypeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_alarm_v0_panel$model_pb.PanelEquipmentList.deserializeBinary
);


/**
 * @param {!proto.panel_service.GetPanelTypeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.panel.PanelEquipmentList)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.panel.PanelEquipmentList>|undefined}
 *     The XHR Node Readable Stream
 */
proto.panel_service.PanelServiceClient.prototype.getPanelEquipmentList =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/panel_service.PanelService/GetPanelEquipmentList',
      request,
      metadata || {},
      methodDescriptor_PanelService_GetPanelEquipmentList,
      callback);
};


/**
 * @param {!proto.panel_service.GetPanelTypeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.panel.PanelEquipmentList>}
 *     Promise that resolves to the response
 */
proto.panel_service.PanelServicePromiseClient.prototype.getPanelEquipmentList =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/panel_service.PanelService/GetPanelEquipmentList',
      request,
      metadata || {},
      methodDescriptor_PanelService_GetPanelEquipmentList);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.panel_service.GetPanelTypeRequest,
 *   !proto.equipment.ModelList>}
 */
const methodDescriptor_PanelService_GetCompatibleEquipmentList = new grpc.web.MethodDescriptor(
  '/panel_service.PanelService/GetCompatibleEquipmentList',
  grpc.web.MethodType.UNARY,
  proto.panel_service.GetPanelTypeRequest,
  pando_api_alarm_v0_equipment$model_pb.ModelList,
  /**
   * @param {!proto.panel_service.GetPanelTypeRequest} request
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
 *   !proto.panel_service.GetPanelTypeRequest,
 *   !proto.equipment.ModelList>}
 */
const methodInfo_PanelService_GetCompatibleEquipmentList = new grpc.web.AbstractClientBase.MethodInfo(
  pando_api_alarm_v0_equipment$model_pb.ModelList,
  /**
   * @param {!proto.panel_service.GetPanelTypeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_alarm_v0_equipment$model_pb.ModelList.deserializeBinary
);


/**
 * @param {!proto.panel_service.GetPanelTypeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.equipment.ModelList)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.equipment.ModelList>|undefined}
 *     The XHR Node Readable Stream
 */
proto.panel_service.PanelServiceClient.prototype.getCompatibleEquipmentList =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/panel_service.PanelService/GetCompatibleEquipmentList',
      request,
      metadata || {},
      methodDescriptor_PanelService_GetCompatibleEquipmentList,
      callback);
};


/**
 * @param {!proto.panel_service.GetPanelTypeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.equipment.ModelList>}
 *     Promise that resolves to the response
 */
proto.panel_service.PanelServicePromiseClient.prototype.getCompatibleEquipmentList =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/panel_service.PanelService/GetCompatibleEquipmentList',
      request,
      metadata || {},
      methodDescriptor_PanelService_GetCompatibleEquipmentList);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.panel_service.GetPanelEquipmentGroupsRequest,
 *   !proto.panel.PanelEquipmentGroupList>}
 */
const methodDescriptor_PanelService_GetPanelEquipmentGroups = new grpc.web.MethodDescriptor(
  '/panel_service.PanelService/GetPanelEquipmentGroups',
  grpc.web.MethodType.UNARY,
  proto.panel_service.GetPanelEquipmentGroupsRequest,
  pando_api_alarm_v0_panel$model_pb.PanelEquipmentGroupList,
  /**
   * @param {!proto.panel_service.GetPanelEquipmentGroupsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_alarm_v0_panel$model_pb.PanelEquipmentGroupList.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.panel_service.GetPanelEquipmentGroupsRequest,
 *   !proto.panel.PanelEquipmentGroupList>}
 */
const methodInfo_PanelService_GetPanelEquipmentGroups = new grpc.web.AbstractClientBase.MethodInfo(
  pando_api_alarm_v0_panel$model_pb.PanelEquipmentGroupList,
  /**
   * @param {!proto.panel_service.GetPanelEquipmentGroupsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_alarm_v0_panel$model_pb.PanelEquipmentGroupList.deserializeBinary
);


/**
 * @param {!proto.panel_service.GetPanelEquipmentGroupsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.panel.PanelEquipmentGroupList)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.panel.PanelEquipmentGroupList>|undefined}
 *     The XHR Node Readable Stream
 */
proto.panel_service.PanelServiceClient.prototype.getPanelEquipmentGroups =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/panel_service.PanelService/GetPanelEquipmentGroups',
      request,
      metadata || {},
      methodDescriptor_PanelService_GetPanelEquipmentGroups,
      callback);
};


/**
 * @param {!proto.panel_service.GetPanelEquipmentGroupsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.panel.PanelEquipmentGroupList>}
 *     Promise that resolves to the response
 */
proto.panel_service.PanelServicePromiseClient.prototype.getPanelEquipmentGroups =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/panel_service.PanelService/GetPanelEquipmentGroups',
      request,
      metadata || {},
      methodDescriptor_PanelService_GetPanelEquipmentGroups);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.panel.Type,
 *   !proto.panel.TypeList>}
 */
const methodDescriptor_PanelService_CreateType = new grpc.web.MethodDescriptor(
  '/panel_service.PanelService/CreateType',
  grpc.web.MethodType.UNARY,
  pando_api_alarm_v0_panel$model_pb.Type,
  pando_api_alarm_v0_panel$model_pb.TypeList,
  /**
   * @param {!proto.panel.Type} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_alarm_v0_panel$model_pb.TypeList.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.panel.Type,
 *   !proto.panel.TypeList>}
 */
const methodInfo_PanelService_CreateType = new grpc.web.AbstractClientBase.MethodInfo(
  pando_api_alarm_v0_panel$model_pb.TypeList,
  /**
   * @param {!proto.panel.Type} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_alarm_v0_panel$model_pb.TypeList.deserializeBinary
);


/**
 * @param {!proto.panel.Type} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.panel.TypeList)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.panel.TypeList>|undefined}
 *     The XHR Node Readable Stream
 */
proto.panel_service.PanelServiceClient.prototype.createType =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/panel_service.PanelService/CreateType',
      request,
      metadata || {},
      methodDescriptor_PanelService_CreateType,
      callback);
};


/**
 * @param {!proto.panel.Type} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.panel.TypeList>}
 *     Promise that resolves to the response
 */
proto.panel_service.PanelServicePromiseClient.prototype.createType =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/panel_service.PanelService/CreateType',
      request,
      metadata || {},
      methodDescriptor_PanelService_CreateType);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.panel.Type,
 *   !proto.panel.TypeList>}
 */
const methodDescriptor_PanelService_UpdateType = new grpc.web.MethodDescriptor(
  '/panel_service.PanelService/UpdateType',
  grpc.web.MethodType.UNARY,
  pando_api_alarm_v0_panel$model_pb.Type,
  pando_api_alarm_v0_panel$model_pb.TypeList,
  /**
   * @param {!proto.panel.Type} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_alarm_v0_panel$model_pb.TypeList.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.panel.Type,
 *   !proto.panel.TypeList>}
 */
const methodInfo_PanelService_UpdateType = new grpc.web.AbstractClientBase.MethodInfo(
  pando_api_alarm_v0_panel$model_pb.TypeList,
  /**
   * @param {!proto.panel.Type} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_alarm_v0_panel$model_pb.TypeList.deserializeBinary
);


/**
 * @param {!proto.panel.Type} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.panel.TypeList)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.panel.TypeList>|undefined}
 *     The XHR Node Readable Stream
 */
proto.panel_service.PanelServiceClient.prototype.updateType =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/panel_service.PanelService/UpdateType',
      request,
      metadata || {},
      methodDescriptor_PanelService_UpdateType,
      callback);
};


/**
 * @param {!proto.panel.Type} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.panel.TypeList>}
 *     Promise that resolves to the response
 */
proto.panel_service.PanelServicePromiseClient.prototype.updateType =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/panel_service.PanelService/UpdateType',
      request,
      metadata || {},
      methodDescriptor_PanelService_UpdateType);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.panel.Configuration,
 *   !proto.panel.ConfigurationList>}
 */
const methodDescriptor_PanelService_CreateConfiguration = new grpc.web.MethodDescriptor(
  '/panel_service.PanelService/CreateConfiguration',
  grpc.web.MethodType.UNARY,
  pando_api_alarm_v0_panel$model_pb.Configuration,
  pando_api_alarm_v0_panel$model_pb.ConfigurationList,
  /**
   * @param {!proto.panel.Configuration} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_alarm_v0_panel$model_pb.ConfigurationList.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.panel.Configuration,
 *   !proto.panel.ConfigurationList>}
 */
const methodInfo_PanelService_CreateConfiguration = new grpc.web.AbstractClientBase.MethodInfo(
  pando_api_alarm_v0_panel$model_pb.ConfigurationList,
  /**
   * @param {!proto.panel.Configuration} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_alarm_v0_panel$model_pb.ConfigurationList.deserializeBinary
);


/**
 * @param {!proto.panel.Configuration} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.panel.ConfigurationList)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.panel.ConfigurationList>|undefined}
 *     The XHR Node Readable Stream
 */
proto.panel_service.PanelServiceClient.prototype.createConfiguration =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/panel_service.PanelService/CreateConfiguration',
      request,
      metadata || {},
      methodDescriptor_PanelService_CreateConfiguration,
      callback);
};


/**
 * @param {!proto.panel.Configuration} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.panel.ConfigurationList>}
 *     Promise that resolves to the response
 */
proto.panel_service.PanelServicePromiseClient.prototype.createConfiguration =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/panel_service.PanelService/CreateConfiguration',
      request,
      metadata || {},
      methodDescriptor_PanelService_CreateConfiguration);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.panel.Configuration,
 *   !proto.panel.ConfigurationList>}
 */
const methodDescriptor_PanelService_UpdateConfiguration = new grpc.web.MethodDescriptor(
  '/panel_service.PanelService/UpdateConfiguration',
  grpc.web.MethodType.UNARY,
  pando_api_alarm_v0_panel$model_pb.Configuration,
  pando_api_alarm_v0_panel$model_pb.ConfigurationList,
  /**
   * @param {!proto.panel.Configuration} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_alarm_v0_panel$model_pb.ConfigurationList.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.panel.Configuration,
 *   !proto.panel.ConfigurationList>}
 */
const methodInfo_PanelService_UpdateConfiguration = new grpc.web.AbstractClientBase.MethodInfo(
  pando_api_alarm_v0_panel$model_pb.ConfigurationList,
  /**
   * @param {!proto.panel.Configuration} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_alarm_v0_panel$model_pb.ConfigurationList.deserializeBinary
);


/**
 * @param {!proto.panel.Configuration} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.panel.ConfigurationList)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.panel.ConfigurationList>|undefined}
 *     The XHR Node Readable Stream
 */
proto.panel_service.PanelServiceClient.prototype.updateConfiguration =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/panel_service.PanelService/UpdateConfiguration',
      request,
      metadata || {},
      methodDescriptor_PanelService_UpdateConfiguration,
      callback);
};


/**
 * @param {!proto.panel.Configuration} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.panel.ConfigurationList>}
 *     Promise that resolves to the response
 */
proto.panel_service.PanelServicePromiseClient.prototype.updateConfiguration =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/panel_service.PanelService/UpdateConfiguration',
      request,
      metadata || {},
      methodDescriptor_PanelService_UpdateConfiguration);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.panel_service.EditCompatibleEquipmentRequest,
 *   !proto.equipment.ModelList>}
 */
const methodDescriptor_PanelService_AddPanelCompatibleEquipment = new grpc.web.MethodDescriptor(
  '/panel_service.PanelService/AddPanelCompatibleEquipment',
  grpc.web.MethodType.UNARY,
  proto.panel_service.EditCompatibleEquipmentRequest,
  pando_api_alarm_v0_equipment$model_pb.ModelList,
  /**
   * @param {!proto.panel_service.EditCompatibleEquipmentRequest} request
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
 *   !proto.panel_service.EditCompatibleEquipmentRequest,
 *   !proto.equipment.ModelList>}
 */
const methodInfo_PanelService_AddPanelCompatibleEquipment = new grpc.web.AbstractClientBase.MethodInfo(
  pando_api_alarm_v0_equipment$model_pb.ModelList,
  /**
   * @param {!proto.panel_service.EditCompatibleEquipmentRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_alarm_v0_equipment$model_pb.ModelList.deserializeBinary
);


/**
 * @param {!proto.panel_service.EditCompatibleEquipmentRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.equipment.ModelList)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.equipment.ModelList>|undefined}
 *     The XHR Node Readable Stream
 */
proto.panel_service.PanelServiceClient.prototype.addPanelCompatibleEquipment =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/panel_service.PanelService/AddPanelCompatibleEquipment',
      request,
      metadata || {},
      methodDescriptor_PanelService_AddPanelCompatibleEquipment,
      callback);
};


/**
 * @param {!proto.panel_service.EditCompatibleEquipmentRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.equipment.ModelList>}
 *     Promise that resolves to the response
 */
proto.panel_service.PanelServicePromiseClient.prototype.addPanelCompatibleEquipment =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/panel_service.PanelService/AddPanelCompatibleEquipment',
      request,
      metadata || {},
      methodDescriptor_PanelService_AddPanelCompatibleEquipment);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.panel_service.EditCompatibleEquipmentRequest,
 *   !proto.equipment.ModelList>}
 */
const methodDescriptor_PanelService_RemovePanelCompatibleEquipment = new grpc.web.MethodDescriptor(
  '/panel_service.PanelService/RemovePanelCompatibleEquipment',
  grpc.web.MethodType.UNARY,
  proto.panel_service.EditCompatibleEquipmentRequest,
  pando_api_alarm_v0_equipment$model_pb.ModelList,
  /**
   * @param {!proto.panel_service.EditCompatibleEquipmentRequest} request
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
 *   !proto.panel_service.EditCompatibleEquipmentRequest,
 *   !proto.equipment.ModelList>}
 */
const methodInfo_PanelService_RemovePanelCompatibleEquipment = new grpc.web.AbstractClientBase.MethodInfo(
  pando_api_alarm_v0_equipment$model_pb.ModelList,
  /**
   * @param {!proto.panel_service.EditCompatibleEquipmentRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_alarm_v0_equipment$model_pb.ModelList.deserializeBinary
);


/**
 * @param {!proto.panel_service.EditCompatibleEquipmentRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.equipment.ModelList)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.equipment.ModelList>|undefined}
 *     The XHR Node Readable Stream
 */
proto.panel_service.PanelServiceClient.prototype.removePanelCompatibleEquipment =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/panel_service.PanelService/RemovePanelCompatibleEquipment',
      request,
      metadata || {},
      methodDescriptor_PanelService_RemovePanelCompatibleEquipment,
      callback);
};


/**
 * @param {!proto.panel_service.EditCompatibleEquipmentRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.equipment.ModelList>}
 *     Promise that resolves to the response
 */
proto.panel_service.PanelServicePromiseClient.prototype.removePanelCompatibleEquipment =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/panel_service.PanelService/RemovePanelCompatibleEquipment',
      request,
      metadata || {},
      methodDescriptor_PanelService_RemovePanelCompatibleEquipment);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.panel_service.EditPanelEquipmentRequest,
 *   !proto.panel.PanelEquipmentList>}
 */
const methodDescriptor_PanelService_AddPanelEquipment = new grpc.web.MethodDescriptor(
  '/panel_service.PanelService/AddPanelEquipment',
  grpc.web.MethodType.UNARY,
  proto.panel_service.EditPanelEquipmentRequest,
  pando_api_alarm_v0_panel$model_pb.PanelEquipmentList,
  /**
   * @param {!proto.panel_service.EditPanelEquipmentRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_alarm_v0_panel$model_pb.PanelEquipmentList.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.panel_service.EditPanelEquipmentRequest,
 *   !proto.panel.PanelEquipmentList>}
 */
const methodInfo_PanelService_AddPanelEquipment = new grpc.web.AbstractClientBase.MethodInfo(
  pando_api_alarm_v0_panel$model_pb.PanelEquipmentList,
  /**
   * @param {!proto.panel_service.EditPanelEquipmentRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_alarm_v0_panel$model_pb.PanelEquipmentList.deserializeBinary
);


/**
 * @param {!proto.panel_service.EditPanelEquipmentRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.panel.PanelEquipmentList)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.panel.PanelEquipmentList>|undefined}
 *     The XHR Node Readable Stream
 */
proto.panel_service.PanelServiceClient.prototype.addPanelEquipment =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/panel_service.PanelService/AddPanelEquipment',
      request,
      metadata || {},
      methodDescriptor_PanelService_AddPanelEquipment,
      callback);
};


/**
 * @param {!proto.panel_service.EditPanelEquipmentRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.panel.PanelEquipmentList>}
 *     Promise that resolves to the response
 */
proto.panel_service.PanelServicePromiseClient.prototype.addPanelEquipment =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/panel_service.PanelService/AddPanelEquipment',
      request,
      metadata || {},
      methodDescriptor_PanelService_AddPanelEquipment);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.panel_service.EditPanelEquipmentRequest,
 *   !proto.panel.PanelEquipmentList>}
 */
const methodDescriptor_PanelService_RemovePanelEquipment = new grpc.web.MethodDescriptor(
  '/panel_service.PanelService/RemovePanelEquipment',
  grpc.web.MethodType.UNARY,
  proto.panel_service.EditPanelEquipmentRequest,
  pando_api_alarm_v0_panel$model_pb.PanelEquipmentList,
  /**
   * @param {!proto.panel_service.EditPanelEquipmentRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_alarm_v0_panel$model_pb.PanelEquipmentList.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.panel_service.EditPanelEquipmentRequest,
 *   !proto.panel.PanelEquipmentList>}
 */
const methodInfo_PanelService_RemovePanelEquipment = new grpc.web.AbstractClientBase.MethodInfo(
  pando_api_alarm_v0_panel$model_pb.PanelEquipmentList,
  /**
   * @param {!proto.panel_service.EditPanelEquipmentRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_alarm_v0_panel$model_pb.PanelEquipmentList.deserializeBinary
);


/**
 * @param {!proto.panel_service.EditPanelEquipmentRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.panel.PanelEquipmentList)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.panel.PanelEquipmentList>|undefined}
 *     The XHR Node Readable Stream
 */
proto.panel_service.PanelServiceClient.prototype.removePanelEquipment =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/panel_service.PanelService/RemovePanelEquipment',
      request,
      metadata || {},
      methodDescriptor_PanelService_RemovePanelEquipment,
      callback);
};


/**
 * @param {!proto.panel_service.EditPanelEquipmentRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.panel.PanelEquipmentList>}
 *     Promise that resolves to the response
 */
proto.panel_service.PanelServicePromiseClient.prototype.removePanelEquipment =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/panel_service.PanelService/RemovePanelEquipment',
      request,
      metadata || {},
      methodDescriptor_PanelService_RemovePanelEquipment);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.panel.PanelEquipmentGroup,
 *   !proto.panel.PanelEquipmentGroupList>}
 */
const methodDescriptor_PanelService_CreatePanelEquipmentGroup = new grpc.web.MethodDescriptor(
  '/panel_service.PanelService/CreatePanelEquipmentGroup',
  grpc.web.MethodType.UNARY,
  pando_api_alarm_v0_panel$model_pb.PanelEquipmentGroup,
  pando_api_alarm_v0_panel$model_pb.PanelEquipmentGroupList,
  /**
   * @param {!proto.panel.PanelEquipmentGroup} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_alarm_v0_panel$model_pb.PanelEquipmentGroupList.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.panel.PanelEquipmentGroup,
 *   !proto.panel.PanelEquipmentGroupList>}
 */
const methodInfo_PanelService_CreatePanelEquipmentGroup = new grpc.web.AbstractClientBase.MethodInfo(
  pando_api_alarm_v0_panel$model_pb.PanelEquipmentGroupList,
  /**
   * @param {!proto.panel.PanelEquipmentGroup} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_alarm_v0_panel$model_pb.PanelEquipmentGroupList.deserializeBinary
);


/**
 * @param {!proto.panel.PanelEquipmentGroup} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.panel.PanelEquipmentGroupList)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.panel.PanelEquipmentGroupList>|undefined}
 *     The XHR Node Readable Stream
 */
proto.panel_service.PanelServiceClient.prototype.createPanelEquipmentGroup =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/panel_service.PanelService/CreatePanelEquipmentGroup',
      request,
      metadata || {},
      methodDescriptor_PanelService_CreatePanelEquipmentGroup,
      callback);
};


/**
 * @param {!proto.panel.PanelEquipmentGroup} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.panel.PanelEquipmentGroupList>}
 *     Promise that resolves to the response
 */
proto.panel_service.PanelServicePromiseClient.prototype.createPanelEquipmentGroup =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/panel_service.PanelService/CreatePanelEquipmentGroup',
      request,
      metadata || {},
      methodDescriptor_PanelService_CreatePanelEquipmentGroup);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.panel.PanelEquipmentGroup,
 *   !proto.panel.PanelEquipmentGroupList>}
 */
const methodDescriptor_PanelService_UpdatePanelEquipmentGroup = new grpc.web.MethodDescriptor(
  '/panel_service.PanelService/UpdatePanelEquipmentGroup',
  grpc.web.MethodType.UNARY,
  pando_api_alarm_v0_panel$model_pb.PanelEquipmentGroup,
  pando_api_alarm_v0_panel$model_pb.PanelEquipmentGroupList,
  /**
   * @param {!proto.panel.PanelEquipmentGroup} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_alarm_v0_panel$model_pb.PanelEquipmentGroupList.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.panel.PanelEquipmentGroup,
 *   !proto.panel.PanelEquipmentGroupList>}
 */
const methodInfo_PanelService_UpdatePanelEquipmentGroup = new grpc.web.AbstractClientBase.MethodInfo(
  pando_api_alarm_v0_panel$model_pb.PanelEquipmentGroupList,
  /**
   * @param {!proto.panel.PanelEquipmentGroup} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_alarm_v0_panel$model_pb.PanelEquipmentGroupList.deserializeBinary
);


/**
 * @param {!proto.panel.PanelEquipmentGroup} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.panel.PanelEquipmentGroupList)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.panel.PanelEquipmentGroupList>|undefined}
 *     The XHR Node Readable Stream
 */
proto.panel_service.PanelServiceClient.prototype.updatePanelEquipmentGroup =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/panel_service.PanelService/UpdatePanelEquipmentGroup',
      request,
      metadata || {},
      methodDescriptor_PanelService_UpdatePanelEquipmentGroup,
      callback);
};


/**
 * @param {!proto.panel.PanelEquipmentGroup} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.panel.PanelEquipmentGroupList>}
 *     Promise that resolves to the response
 */
proto.panel_service.PanelServicePromiseClient.prototype.updatePanelEquipmentGroup =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/panel_service.PanelService/UpdatePanelEquipmentGroup',
      request,
      metadata || {},
      methodDescriptor_PanelService_UpdatePanelEquipmentGroup);
};


module.exports = proto.panel_service;

