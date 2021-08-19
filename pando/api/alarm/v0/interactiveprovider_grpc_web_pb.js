/**
 * @fileoverview gRPC-Web generated client stub for interactive_provider
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var pando_api_extensions_pb = require('../../../../pando/api/extensions_pb.js')

var pando_api_shared_pb = require('../../../../pando/api/shared_pb.js')
const proto = {};
proto.interactive_provider = require('./interactiveprovider_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.interactive_provider.InteractiveProviderServiceClient =
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
proto.interactive_provider.InteractiveProviderServicePromiseClient =
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
 *   !proto.interactive_provider.TypeList>}
 */
const methodDescriptor_InteractiveProviderService_GetAllTypes = new grpc.web.MethodDescriptor(
  '/interactive_provider.InteractiveProviderService/GetAllTypes',
  grpc.web.MethodType.UNARY,
  pando_api_shared_pb.Empty,
  proto.interactive_provider.TypeList,
  /**
   * @param {!proto.pando.api.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.interactive_provider.TypeList.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pando.api.Empty,
 *   !proto.interactive_provider.TypeList>}
 */
const methodInfo_InteractiveProviderService_GetAllTypes = new grpc.web.AbstractClientBase.MethodInfo(
  proto.interactive_provider.TypeList,
  /**
   * @param {!proto.pando.api.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.interactive_provider.TypeList.deserializeBinary
);


/**
 * @param {!proto.pando.api.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.interactive_provider.TypeList)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.interactive_provider.TypeList>|undefined}
 *     The XHR Node Readable Stream
 */
proto.interactive_provider.InteractiveProviderServiceClient.prototype.getAllTypes =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/interactive_provider.InteractiveProviderService/GetAllTypes',
      request,
      metadata || {},
      methodDescriptor_InteractiveProviderService_GetAllTypes,
      callback);
};


/**
 * @param {!proto.pando.api.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.interactive_provider.TypeList>}
 *     Promise that resolves to the response
 */
proto.interactive_provider.InteractiveProviderServicePromiseClient.prototype.getAllTypes =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/interactive_provider.InteractiveProviderService/GetAllTypes',
      request,
      metadata || {},
      methodDescriptor_InteractiveProviderService_GetAllTypes);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pando.api.Empty,
 *   !proto.interactive_provider.ConfigurationList>}
 */
const methodDescriptor_InteractiveProviderService_GetAllConfigurations = new grpc.web.MethodDescriptor(
  '/interactive_provider.InteractiveProviderService/GetAllConfigurations',
  grpc.web.MethodType.UNARY,
  pando_api_shared_pb.Empty,
  proto.interactive_provider.ConfigurationList,
  /**
   * @param {!proto.pando.api.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.interactive_provider.ConfigurationList.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pando.api.Empty,
 *   !proto.interactive_provider.ConfigurationList>}
 */
const methodInfo_InteractiveProviderService_GetAllConfigurations = new grpc.web.AbstractClientBase.MethodInfo(
  proto.interactive_provider.ConfigurationList,
  /**
   * @param {!proto.pando.api.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.interactive_provider.ConfigurationList.deserializeBinary
);


/**
 * @param {!proto.pando.api.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.interactive_provider.ConfigurationList)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.interactive_provider.ConfigurationList>|undefined}
 *     The XHR Node Readable Stream
 */
proto.interactive_provider.InteractiveProviderServiceClient.prototype.getAllConfigurations =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/interactive_provider.InteractiveProviderService/GetAllConfigurations',
      request,
      metadata || {},
      methodDescriptor_InteractiveProviderService_GetAllConfigurations,
      callback);
};


/**
 * @param {!proto.pando.api.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.interactive_provider.ConfigurationList>}
 *     Promise that resolves to the response
 */
proto.interactive_provider.InteractiveProviderServicePromiseClient.prototype.getAllConfigurations =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/interactive_provider.InteractiveProviderService/GetAllConfigurations',
      request,
      metadata || {},
      methodDescriptor_InteractiveProviderService_GetAllConfigurations);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.interactive_provider.GetTypeRequest,
 *   !proto.interactive_provider.Type>}
 */
const methodDescriptor_InteractiveProviderService_GetType = new grpc.web.MethodDescriptor(
  '/interactive_provider.InteractiveProviderService/GetType',
  grpc.web.MethodType.UNARY,
  proto.interactive_provider.GetTypeRequest,
  proto.interactive_provider.Type,
  /**
   * @param {!proto.interactive_provider.GetTypeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.interactive_provider.Type.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.interactive_provider.GetTypeRequest,
 *   !proto.interactive_provider.Type>}
 */
const methodInfo_InteractiveProviderService_GetType = new grpc.web.AbstractClientBase.MethodInfo(
  proto.interactive_provider.Type,
  /**
   * @param {!proto.interactive_provider.GetTypeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.interactive_provider.Type.deserializeBinary
);


/**
 * @param {!proto.interactive_provider.GetTypeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.interactive_provider.Type)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.interactive_provider.Type>|undefined}
 *     The XHR Node Readable Stream
 */
proto.interactive_provider.InteractiveProviderServiceClient.prototype.getType =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/interactive_provider.InteractiveProviderService/GetType',
      request,
      metadata || {},
      methodDescriptor_InteractiveProviderService_GetType,
      callback);
};


/**
 * @param {!proto.interactive_provider.GetTypeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.interactive_provider.Type>}
 *     Promise that resolves to the response
 */
proto.interactive_provider.InteractiveProviderServicePromiseClient.prototype.getType =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/interactive_provider.InteractiveProviderService/GetType',
      request,
      metadata || {},
      methodDescriptor_InteractiveProviderService_GetType);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.interactive_provider.GetConfigurationRequest,
 *   !proto.interactive_provider.Configuration>}
 */
const methodDescriptor_InteractiveProviderService_GetConfiguration = new grpc.web.MethodDescriptor(
  '/interactive_provider.InteractiveProviderService/GetConfiguration',
  grpc.web.MethodType.UNARY,
  proto.interactive_provider.GetConfigurationRequest,
  proto.interactive_provider.Configuration,
  /**
   * @param {!proto.interactive_provider.GetConfigurationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.interactive_provider.Configuration.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.interactive_provider.GetConfigurationRequest,
 *   !proto.interactive_provider.Configuration>}
 */
const methodInfo_InteractiveProviderService_GetConfiguration = new grpc.web.AbstractClientBase.MethodInfo(
  proto.interactive_provider.Configuration,
  /**
   * @param {!proto.interactive_provider.GetConfigurationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.interactive_provider.Configuration.deserializeBinary
);


/**
 * @param {!proto.interactive_provider.GetConfigurationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.interactive_provider.Configuration)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.interactive_provider.Configuration>|undefined}
 *     The XHR Node Readable Stream
 */
proto.interactive_provider.InteractiveProviderServiceClient.prototype.getConfiguration =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/interactive_provider.InteractiveProviderService/GetConfiguration',
      request,
      metadata || {},
      methodDescriptor_InteractiveProviderService_GetConfiguration,
      callback);
};


/**
 * @param {!proto.interactive_provider.GetConfigurationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.interactive_provider.Configuration>}
 *     Promise that resolves to the response
 */
proto.interactive_provider.InteractiveProviderServicePromiseClient.prototype.getConfiguration =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/interactive_provider.InteractiveProviderService/GetConfiguration',
      request,
      metadata || {},
      methodDescriptor_InteractiveProviderService_GetConfiguration);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.interactive_provider.GetConfigurationListRequest,
 *   !proto.interactive_provider.ConfigurationList>}
 */
const methodDescriptor_InteractiveProviderService_GetConfigurationList = new grpc.web.MethodDescriptor(
  '/interactive_provider.InteractiveProviderService/GetConfigurationList',
  grpc.web.MethodType.UNARY,
  proto.interactive_provider.GetConfigurationListRequest,
  proto.interactive_provider.ConfigurationList,
  /**
   * @param {!proto.interactive_provider.GetConfigurationListRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.interactive_provider.ConfigurationList.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.interactive_provider.GetConfigurationListRequest,
 *   !proto.interactive_provider.ConfigurationList>}
 */
const methodInfo_InteractiveProviderService_GetConfigurationList = new grpc.web.AbstractClientBase.MethodInfo(
  proto.interactive_provider.ConfigurationList,
  /**
   * @param {!proto.interactive_provider.GetConfigurationListRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.interactive_provider.ConfigurationList.deserializeBinary
);


/**
 * @param {!proto.interactive_provider.GetConfigurationListRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.interactive_provider.ConfigurationList)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.interactive_provider.ConfigurationList>|undefined}
 *     The XHR Node Readable Stream
 */
proto.interactive_provider.InteractiveProviderServiceClient.prototype.getConfigurationList =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/interactive_provider.InteractiveProviderService/GetConfigurationList',
      request,
      metadata || {},
      methodDescriptor_InteractiveProviderService_GetConfigurationList,
      callback);
};


/**
 * @param {!proto.interactive_provider.GetConfigurationListRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.interactive_provider.ConfigurationList>}
 *     Promise that resolves to the response
 */
proto.interactive_provider.InteractiveProviderServicePromiseClient.prototype.getConfigurationList =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/interactive_provider.InteractiveProviderService/GetConfigurationList',
      request,
      metadata || {},
      methodDescriptor_InteractiveProviderService_GetConfigurationList);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.interactive_provider.GetTypeRequest,
 *   !proto.interactive_provider.ConfigurationList>}
 */
const methodDescriptor_InteractiveProviderService_GetConfigurationFromType = new grpc.web.MethodDescriptor(
  '/interactive_provider.InteractiveProviderService/GetConfigurationFromType',
  grpc.web.MethodType.UNARY,
  proto.interactive_provider.GetTypeRequest,
  proto.interactive_provider.ConfigurationList,
  /**
   * @param {!proto.interactive_provider.GetTypeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.interactive_provider.ConfigurationList.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.interactive_provider.GetTypeRequest,
 *   !proto.interactive_provider.ConfigurationList>}
 */
const methodInfo_InteractiveProviderService_GetConfigurationFromType = new grpc.web.AbstractClientBase.MethodInfo(
  proto.interactive_provider.ConfigurationList,
  /**
   * @param {!proto.interactive_provider.GetTypeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.interactive_provider.ConfigurationList.deserializeBinary
);


/**
 * @param {!proto.interactive_provider.GetTypeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.interactive_provider.ConfigurationList)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.interactive_provider.ConfigurationList>|undefined}
 *     The XHR Node Readable Stream
 */
proto.interactive_provider.InteractiveProviderServiceClient.prototype.getConfigurationFromType =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/interactive_provider.InteractiveProviderService/GetConfigurationFromType',
      request,
      metadata || {},
      methodDescriptor_InteractiveProviderService_GetConfigurationFromType,
      callback);
};


/**
 * @param {!proto.interactive_provider.GetTypeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.interactive_provider.ConfigurationList>}
 *     Promise that resolves to the response
 */
proto.interactive_provider.InteractiveProviderServicePromiseClient.prototype.getConfigurationFromType =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/interactive_provider.InteractiveProviderService/GetConfigurationFromType',
      request,
      metadata || {},
      methodDescriptor_InteractiveProviderService_GetConfigurationFromType);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.interactive_provider.Type,
 *   !proto.interactive_provider.TypeList>}
 */
const methodDescriptor_InteractiveProviderService_CreateType = new grpc.web.MethodDescriptor(
  '/interactive_provider.InteractiveProviderService/CreateType',
  grpc.web.MethodType.UNARY,
  proto.interactive_provider.Type,
  proto.interactive_provider.TypeList,
  /**
   * @param {!proto.interactive_provider.Type} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.interactive_provider.TypeList.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.interactive_provider.Type,
 *   !proto.interactive_provider.TypeList>}
 */
const methodInfo_InteractiveProviderService_CreateType = new grpc.web.AbstractClientBase.MethodInfo(
  proto.interactive_provider.TypeList,
  /**
   * @param {!proto.interactive_provider.Type} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.interactive_provider.TypeList.deserializeBinary
);


/**
 * @param {!proto.interactive_provider.Type} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.interactive_provider.TypeList)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.interactive_provider.TypeList>|undefined}
 *     The XHR Node Readable Stream
 */
proto.interactive_provider.InteractiveProviderServiceClient.prototype.createType =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/interactive_provider.InteractiveProviderService/CreateType',
      request,
      metadata || {},
      methodDescriptor_InteractiveProviderService_CreateType,
      callback);
};


/**
 * @param {!proto.interactive_provider.Type} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.interactive_provider.TypeList>}
 *     Promise that resolves to the response
 */
proto.interactive_provider.InteractiveProviderServicePromiseClient.prototype.createType =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/interactive_provider.InteractiveProviderService/CreateType',
      request,
      metadata || {},
      methodDescriptor_InteractiveProviderService_CreateType);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.interactive_provider.Type,
 *   !proto.interactive_provider.TypeList>}
 */
const methodDescriptor_InteractiveProviderService_UpdateType = new grpc.web.MethodDescriptor(
  '/interactive_provider.InteractiveProviderService/UpdateType',
  grpc.web.MethodType.UNARY,
  proto.interactive_provider.Type,
  proto.interactive_provider.TypeList,
  /**
   * @param {!proto.interactive_provider.Type} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.interactive_provider.TypeList.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.interactive_provider.Type,
 *   !proto.interactive_provider.TypeList>}
 */
const methodInfo_InteractiveProviderService_UpdateType = new grpc.web.AbstractClientBase.MethodInfo(
  proto.interactive_provider.TypeList,
  /**
   * @param {!proto.interactive_provider.Type} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.interactive_provider.TypeList.deserializeBinary
);


/**
 * @param {!proto.interactive_provider.Type} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.interactive_provider.TypeList)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.interactive_provider.TypeList>|undefined}
 *     The XHR Node Readable Stream
 */
proto.interactive_provider.InteractiveProviderServiceClient.prototype.updateType =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/interactive_provider.InteractiveProviderService/UpdateType',
      request,
      metadata || {},
      methodDescriptor_InteractiveProviderService_UpdateType,
      callback);
};


/**
 * @param {!proto.interactive_provider.Type} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.interactive_provider.TypeList>}
 *     Promise that resolves to the response
 */
proto.interactive_provider.InteractiveProviderServicePromiseClient.prototype.updateType =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/interactive_provider.InteractiveProviderService/UpdateType',
      request,
      metadata || {},
      methodDescriptor_InteractiveProviderService_UpdateType);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.interactive_provider.Setting,
 *   !proto.interactive_provider.SettingList>}
 */
const methodDescriptor_InteractiveProviderService_CreateSetting = new grpc.web.MethodDescriptor(
  '/interactive_provider.InteractiveProviderService/CreateSetting',
  grpc.web.MethodType.UNARY,
  proto.interactive_provider.Setting,
  proto.interactive_provider.SettingList,
  /**
   * @param {!proto.interactive_provider.Setting} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.interactive_provider.SettingList.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.interactive_provider.Setting,
 *   !proto.interactive_provider.SettingList>}
 */
const methodInfo_InteractiveProviderService_CreateSetting = new grpc.web.AbstractClientBase.MethodInfo(
  proto.interactive_provider.SettingList,
  /**
   * @param {!proto.interactive_provider.Setting} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.interactive_provider.SettingList.deserializeBinary
);


/**
 * @param {!proto.interactive_provider.Setting} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.interactive_provider.SettingList)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.interactive_provider.SettingList>|undefined}
 *     The XHR Node Readable Stream
 */
proto.interactive_provider.InteractiveProviderServiceClient.prototype.createSetting =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/interactive_provider.InteractiveProviderService/CreateSetting',
      request,
      metadata || {},
      methodDescriptor_InteractiveProviderService_CreateSetting,
      callback);
};


/**
 * @param {!proto.interactive_provider.Setting} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.interactive_provider.SettingList>}
 *     Promise that resolves to the response
 */
proto.interactive_provider.InteractiveProviderServicePromiseClient.prototype.createSetting =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/interactive_provider.InteractiveProviderService/CreateSetting',
      request,
      metadata || {},
      methodDescriptor_InteractiveProviderService_CreateSetting);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.interactive_provider.Setting,
 *   !proto.interactive_provider.SettingList>}
 */
const methodDescriptor_InteractiveProviderService_UpdateSetting = new grpc.web.MethodDescriptor(
  '/interactive_provider.InteractiveProviderService/UpdateSetting',
  grpc.web.MethodType.UNARY,
  proto.interactive_provider.Setting,
  proto.interactive_provider.SettingList,
  /**
   * @param {!proto.interactive_provider.Setting} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.interactive_provider.SettingList.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.interactive_provider.Setting,
 *   !proto.interactive_provider.SettingList>}
 */
const methodInfo_InteractiveProviderService_UpdateSetting = new grpc.web.AbstractClientBase.MethodInfo(
  proto.interactive_provider.SettingList,
  /**
   * @param {!proto.interactive_provider.Setting} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.interactive_provider.SettingList.deserializeBinary
);


/**
 * @param {!proto.interactive_provider.Setting} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.interactive_provider.SettingList)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.interactive_provider.SettingList>|undefined}
 *     The XHR Node Readable Stream
 */
proto.interactive_provider.InteractiveProviderServiceClient.prototype.updateSetting =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/interactive_provider.InteractiveProviderService/UpdateSetting',
      request,
      metadata || {},
      methodDescriptor_InteractiveProviderService_UpdateSetting,
      callback);
};


/**
 * @param {!proto.interactive_provider.Setting} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.interactive_provider.SettingList>}
 *     Promise that resolves to the response
 */
proto.interactive_provider.InteractiveProviderServicePromiseClient.prototype.updateSetting =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/interactive_provider.InteractiveProviderService/UpdateSetting',
      request,
      metadata || {},
      methodDescriptor_InteractiveProviderService_UpdateSetting);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.interactive_provider.SettingValue,
 *   !proto.interactive_provider.Configuration>}
 */
const methodDescriptor_InteractiveProviderService_UpdateSettingValue = new grpc.web.MethodDescriptor(
  '/interactive_provider.InteractiveProviderService/UpdateSettingValue',
  grpc.web.MethodType.UNARY,
  proto.interactive_provider.SettingValue,
  proto.interactive_provider.Configuration,
  /**
   * @param {!proto.interactive_provider.SettingValue} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.interactive_provider.Configuration.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.interactive_provider.SettingValue,
 *   !proto.interactive_provider.Configuration>}
 */
const methodInfo_InteractiveProviderService_UpdateSettingValue = new grpc.web.AbstractClientBase.MethodInfo(
  proto.interactive_provider.Configuration,
  /**
   * @param {!proto.interactive_provider.SettingValue} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.interactive_provider.Configuration.deserializeBinary
);


/**
 * @param {!proto.interactive_provider.SettingValue} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.interactive_provider.Configuration)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.interactive_provider.Configuration>|undefined}
 *     The XHR Node Readable Stream
 */
proto.interactive_provider.InteractiveProviderServiceClient.prototype.updateSettingValue =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/interactive_provider.InteractiveProviderService/UpdateSettingValue',
      request,
      metadata || {},
      methodDescriptor_InteractiveProviderService_UpdateSettingValue,
      callback);
};


/**
 * @param {!proto.interactive_provider.SettingValue} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.interactive_provider.Configuration>}
 *     Promise that resolves to the response
 */
proto.interactive_provider.InteractiveProviderServicePromiseClient.prototype.updateSettingValue =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/interactive_provider.InteractiveProviderService/UpdateSettingValue',
      request,
      metadata || {},
      methodDescriptor_InteractiveProviderService_UpdateSettingValue);
};


module.exports = proto.interactive_provider;

