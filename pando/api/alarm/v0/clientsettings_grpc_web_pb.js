/**
 * @fileoverview gRPC-Web generated client stub for client_settings
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.client_settings = require('./clientsettings_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.client_settings.ClientSettingsServiceClient =
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
proto.client_settings.ClientSettingsServicePromiseClient =
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
 *   !proto.client_settings.GetClientSettingsRequest,
 *   !proto.client_settings.GetClientEquipmentResponse>}
 */
const methodDescriptor_ClientSettingsService_GetClientEquipment = new grpc.web.MethodDescriptor(
  '/client_settings.ClientSettingsService/GetClientEquipment',
  grpc.web.MethodType.UNARY,
  proto.client_settings.GetClientSettingsRequest,
  proto.client_settings.GetClientEquipmentResponse,
  /**
   * @param {!proto.client_settings.GetClientSettingsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.client_settings.GetClientEquipmentResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.client_settings.GetClientSettingsRequest,
 *   !proto.client_settings.GetClientEquipmentResponse>}
 */
const methodInfo_ClientSettingsService_GetClientEquipment = new grpc.web.AbstractClientBase.MethodInfo(
  proto.client_settings.GetClientEquipmentResponse,
  /**
   * @param {!proto.client_settings.GetClientSettingsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.client_settings.GetClientEquipmentResponse.deserializeBinary
);


/**
 * @param {!proto.client_settings.GetClientSettingsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.client_settings.GetClientEquipmentResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.client_settings.GetClientEquipmentResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.client_settings.ClientSettingsServiceClient.prototype.getClientEquipment =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/client_settings.ClientSettingsService/GetClientEquipment',
      request,
      metadata || {},
      methodDescriptor_ClientSettingsService_GetClientEquipment,
      callback);
};


/**
 * @param {!proto.client_settings.GetClientSettingsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.client_settings.GetClientEquipmentResponse>}
 *     Promise that resolves to the response
 */
proto.client_settings.ClientSettingsServicePromiseClient.prototype.getClientEquipment =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/client_settings.ClientSettingsService/GetClientEquipment',
      request,
      metadata || {},
      methodDescriptor_ClientSettingsService_GetClientEquipment);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.client_settings.GetClientSettingsRequest,
 *   !proto.client_settings.GetClientPanelTypeResponse>}
 */
const methodDescriptor_ClientSettingsService_GetClientPanelType = new grpc.web.MethodDescriptor(
  '/client_settings.ClientSettingsService/GetClientPanelType',
  grpc.web.MethodType.UNARY,
  proto.client_settings.GetClientSettingsRequest,
  proto.client_settings.GetClientPanelTypeResponse,
  /**
   * @param {!proto.client_settings.GetClientSettingsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.client_settings.GetClientPanelTypeResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.client_settings.GetClientSettingsRequest,
 *   !proto.client_settings.GetClientPanelTypeResponse>}
 */
const methodInfo_ClientSettingsService_GetClientPanelType = new grpc.web.AbstractClientBase.MethodInfo(
  proto.client_settings.GetClientPanelTypeResponse,
  /**
   * @param {!proto.client_settings.GetClientSettingsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.client_settings.GetClientPanelTypeResponse.deserializeBinary
);


/**
 * @param {!proto.client_settings.GetClientSettingsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.client_settings.GetClientPanelTypeResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.client_settings.GetClientPanelTypeResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.client_settings.ClientSettingsServiceClient.prototype.getClientPanelType =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/client_settings.ClientSettingsService/GetClientPanelType',
      request,
      metadata || {},
      methodDescriptor_ClientSettingsService_GetClientPanelType,
      callback);
};


/**
 * @param {!proto.client_settings.GetClientSettingsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.client_settings.GetClientPanelTypeResponse>}
 *     Promise that resolves to the response
 */
proto.client_settings.ClientSettingsServicePromiseClient.prototype.getClientPanelType =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/client_settings.ClientSettingsService/GetClientPanelType',
      request,
      metadata || {},
      methodDescriptor_ClientSettingsService_GetClientPanelType);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.client_settings.ClientEquipment,
 *   !proto.client_settings.GetClientEquipmentResponse>}
 */
const methodDescriptor_ClientSettingsService_AddClientEquipment = new grpc.web.MethodDescriptor(
  '/client_settings.ClientSettingsService/AddClientEquipment',
  grpc.web.MethodType.UNARY,
  proto.client_settings.ClientEquipment,
  proto.client_settings.GetClientEquipmentResponse,
  /**
   * @param {!proto.client_settings.ClientEquipment} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.client_settings.GetClientEquipmentResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.client_settings.ClientEquipment,
 *   !proto.client_settings.GetClientEquipmentResponse>}
 */
const methodInfo_ClientSettingsService_AddClientEquipment = new grpc.web.AbstractClientBase.MethodInfo(
  proto.client_settings.GetClientEquipmentResponse,
  /**
   * @param {!proto.client_settings.ClientEquipment} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.client_settings.GetClientEquipmentResponse.deserializeBinary
);


/**
 * @param {!proto.client_settings.ClientEquipment} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.client_settings.GetClientEquipmentResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.client_settings.GetClientEquipmentResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.client_settings.ClientSettingsServiceClient.prototype.addClientEquipment =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/client_settings.ClientSettingsService/AddClientEquipment',
      request,
      metadata || {},
      methodDescriptor_ClientSettingsService_AddClientEquipment,
      callback);
};


/**
 * @param {!proto.client_settings.ClientEquipment} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.client_settings.GetClientEquipmentResponse>}
 *     Promise that resolves to the response
 */
proto.client_settings.ClientSettingsServicePromiseClient.prototype.addClientEquipment =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/client_settings.ClientSettingsService/AddClientEquipment',
      request,
      metadata || {},
      methodDescriptor_ClientSettingsService_AddClientEquipment);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.client_settings.ClientEquipment,
 *   !proto.client_settings.GetClientEquipmentResponse>}
 */
const methodDescriptor_ClientSettingsService_UpdateClientEquipment = new grpc.web.MethodDescriptor(
  '/client_settings.ClientSettingsService/UpdateClientEquipment',
  grpc.web.MethodType.UNARY,
  proto.client_settings.ClientEquipment,
  proto.client_settings.GetClientEquipmentResponse,
  /**
   * @param {!proto.client_settings.ClientEquipment} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.client_settings.GetClientEquipmentResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.client_settings.ClientEquipment,
 *   !proto.client_settings.GetClientEquipmentResponse>}
 */
const methodInfo_ClientSettingsService_UpdateClientEquipment = new grpc.web.AbstractClientBase.MethodInfo(
  proto.client_settings.GetClientEquipmentResponse,
  /**
   * @param {!proto.client_settings.ClientEquipment} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.client_settings.GetClientEquipmentResponse.deserializeBinary
);


/**
 * @param {!proto.client_settings.ClientEquipment} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.client_settings.GetClientEquipmentResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.client_settings.GetClientEquipmentResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.client_settings.ClientSettingsServiceClient.prototype.updateClientEquipment =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/client_settings.ClientSettingsService/UpdateClientEquipment',
      request,
      metadata || {},
      methodDescriptor_ClientSettingsService_UpdateClientEquipment,
      callback);
};


/**
 * @param {!proto.client_settings.ClientEquipment} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.client_settings.GetClientEquipmentResponse>}
 *     Promise that resolves to the response
 */
proto.client_settings.ClientSettingsServicePromiseClient.prototype.updateClientEquipment =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/client_settings.ClientSettingsService/UpdateClientEquipment',
      request,
      metadata || {},
      methodDescriptor_ClientSettingsService_UpdateClientEquipment);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.client_settings.ClientEquipment,
 *   !proto.client_settings.GetClientEquipmentResponse>}
 */
const methodDescriptor_ClientSettingsService_RemoveClientEquipment = new grpc.web.MethodDescriptor(
  '/client_settings.ClientSettingsService/RemoveClientEquipment',
  grpc.web.MethodType.UNARY,
  proto.client_settings.ClientEquipment,
  proto.client_settings.GetClientEquipmentResponse,
  /**
   * @param {!proto.client_settings.ClientEquipment} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.client_settings.GetClientEquipmentResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.client_settings.ClientEquipment,
 *   !proto.client_settings.GetClientEquipmentResponse>}
 */
const methodInfo_ClientSettingsService_RemoveClientEquipment = new grpc.web.AbstractClientBase.MethodInfo(
  proto.client_settings.GetClientEquipmentResponse,
  /**
   * @param {!proto.client_settings.ClientEquipment} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.client_settings.GetClientEquipmentResponse.deserializeBinary
);


/**
 * @param {!proto.client_settings.ClientEquipment} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.client_settings.GetClientEquipmentResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.client_settings.GetClientEquipmentResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.client_settings.ClientSettingsServiceClient.prototype.removeClientEquipment =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/client_settings.ClientSettingsService/RemoveClientEquipment',
      request,
      metadata || {},
      methodDescriptor_ClientSettingsService_RemoveClientEquipment,
      callback);
};


/**
 * @param {!proto.client_settings.ClientEquipment} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.client_settings.GetClientEquipmentResponse>}
 *     Promise that resolves to the response
 */
proto.client_settings.ClientSettingsServicePromiseClient.prototype.removeClientEquipment =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/client_settings.ClientSettingsService/RemoveClientEquipment',
      request,
      metadata || {},
      methodDescriptor_ClientSettingsService_RemoveClientEquipment);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.client_settings.ClientPanelType,
 *   !proto.client_settings.GetClientPanelTypeResponse>}
 */
const methodDescriptor_ClientSettingsService_AddClientPanelType = new grpc.web.MethodDescriptor(
  '/client_settings.ClientSettingsService/AddClientPanelType',
  grpc.web.MethodType.UNARY,
  proto.client_settings.ClientPanelType,
  proto.client_settings.GetClientPanelTypeResponse,
  /**
   * @param {!proto.client_settings.ClientPanelType} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.client_settings.GetClientPanelTypeResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.client_settings.ClientPanelType,
 *   !proto.client_settings.GetClientPanelTypeResponse>}
 */
const methodInfo_ClientSettingsService_AddClientPanelType = new grpc.web.AbstractClientBase.MethodInfo(
  proto.client_settings.GetClientPanelTypeResponse,
  /**
   * @param {!proto.client_settings.ClientPanelType} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.client_settings.GetClientPanelTypeResponse.deserializeBinary
);


/**
 * @param {!proto.client_settings.ClientPanelType} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.client_settings.GetClientPanelTypeResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.client_settings.GetClientPanelTypeResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.client_settings.ClientSettingsServiceClient.prototype.addClientPanelType =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/client_settings.ClientSettingsService/AddClientPanelType',
      request,
      metadata || {},
      methodDescriptor_ClientSettingsService_AddClientPanelType,
      callback);
};


/**
 * @param {!proto.client_settings.ClientPanelType} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.client_settings.GetClientPanelTypeResponse>}
 *     Promise that resolves to the response
 */
proto.client_settings.ClientSettingsServicePromiseClient.prototype.addClientPanelType =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/client_settings.ClientSettingsService/AddClientPanelType',
      request,
      metadata || {},
      methodDescriptor_ClientSettingsService_AddClientPanelType);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.client_settings.ClientPanelType,
 *   !proto.client_settings.GetClientPanelTypeResponse>}
 */
const methodDescriptor_ClientSettingsService_UpdateClientPanelType = new grpc.web.MethodDescriptor(
  '/client_settings.ClientSettingsService/UpdateClientPanelType',
  grpc.web.MethodType.UNARY,
  proto.client_settings.ClientPanelType,
  proto.client_settings.GetClientPanelTypeResponse,
  /**
   * @param {!proto.client_settings.ClientPanelType} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.client_settings.GetClientPanelTypeResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.client_settings.ClientPanelType,
 *   !proto.client_settings.GetClientPanelTypeResponse>}
 */
const methodInfo_ClientSettingsService_UpdateClientPanelType = new grpc.web.AbstractClientBase.MethodInfo(
  proto.client_settings.GetClientPanelTypeResponse,
  /**
   * @param {!proto.client_settings.ClientPanelType} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.client_settings.GetClientPanelTypeResponse.deserializeBinary
);


/**
 * @param {!proto.client_settings.ClientPanelType} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.client_settings.GetClientPanelTypeResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.client_settings.GetClientPanelTypeResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.client_settings.ClientSettingsServiceClient.prototype.updateClientPanelType =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/client_settings.ClientSettingsService/UpdateClientPanelType',
      request,
      metadata || {},
      methodDescriptor_ClientSettingsService_UpdateClientPanelType,
      callback);
};


/**
 * @param {!proto.client_settings.ClientPanelType} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.client_settings.GetClientPanelTypeResponse>}
 *     Promise that resolves to the response
 */
proto.client_settings.ClientSettingsServicePromiseClient.prototype.updateClientPanelType =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/client_settings.ClientSettingsService/UpdateClientPanelType',
      request,
      metadata || {},
      methodDescriptor_ClientSettingsService_UpdateClientPanelType);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.client_settings.ClientPanelType,
 *   !proto.client_settings.GetClientPanelTypeResponse>}
 */
const methodDescriptor_ClientSettingsService_RemoveClientPanelType = new grpc.web.MethodDescriptor(
  '/client_settings.ClientSettingsService/RemoveClientPanelType',
  grpc.web.MethodType.UNARY,
  proto.client_settings.ClientPanelType,
  proto.client_settings.GetClientPanelTypeResponse,
  /**
   * @param {!proto.client_settings.ClientPanelType} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.client_settings.GetClientPanelTypeResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.client_settings.ClientPanelType,
 *   !proto.client_settings.GetClientPanelTypeResponse>}
 */
const methodInfo_ClientSettingsService_RemoveClientPanelType = new grpc.web.AbstractClientBase.MethodInfo(
  proto.client_settings.GetClientPanelTypeResponse,
  /**
   * @param {!proto.client_settings.ClientPanelType} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.client_settings.GetClientPanelTypeResponse.deserializeBinary
);


/**
 * @param {!proto.client_settings.ClientPanelType} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.client_settings.GetClientPanelTypeResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.client_settings.GetClientPanelTypeResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.client_settings.ClientSettingsServiceClient.prototype.removeClientPanelType =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/client_settings.ClientSettingsService/RemoveClientPanelType',
      request,
      metadata || {},
      methodDescriptor_ClientSettingsService_RemoveClientPanelType,
      callback);
};


/**
 * @param {!proto.client_settings.ClientPanelType} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.client_settings.GetClientPanelTypeResponse>}
 *     Promise that resolves to the response
 */
proto.client_settings.ClientSettingsServicePromiseClient.prototype.removeClientPanelType =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/client_settings.ClientSettingsService/RemoveClientPanelType',
      request,
      metadata || {},
      methodDescriptor_ClientSettingsService_RemoveClientPanelType);
};


module.exports = proto.client_settings;

