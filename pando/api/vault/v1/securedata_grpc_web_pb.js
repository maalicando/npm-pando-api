/**
 * @fileoverview gRPC-Web generated client stub for pando.api.vault.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js')

var pando_api_extensions_pb = require('../../../../pando/api/extensions_pb.js')

var pando_api_shared_pb = require('../../../../pando/api/shared_pb.js')
const proto = {};
proto.pando = {};
proto.pando.api = {};
proto.pando.api.vault = {};
proto.pando.api.vault.v1 = require('./securedata_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.pando.api.vault.v1.SecureDataServiceClient =
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
proto.pando.api.vault.v1.SecureDataServicePromiseClient =
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
 *   !proto.pando.api.vault.v1.UploadSecureDataRequest,
 *   !proto.pando.api.vault.v1.UploadSecureDataResponse>}
 */
const methodDescriptor_SecureDataService_UploadSecureData = new grpc.web.MethodDescriptor(
  '/pando.api.vault.v1.SecureDataService/UploadSecureData',
  grpc.web.MethodType.UNARY,
  proto.pando.api.vault.v1.UploadSecureDataRequest,
  proto.pando.api.vault.v1.UploadSecureDataResponse,
  /**
   * @param {!proto.pando.api.vault.v1.UploadSecureDataRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pando.api.vault.v1.UploadSecureDataResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pando.api.vault.v1.UploadSecureDataRequest,
 *   !proto.pando.api.vault.v1.UploadSecureDataResponse>}
 */
const methodInfo_SecureDataService_UploadSecureData = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pando.api.vault.v1.UploadSecureDataResponse,
  /**
   * @param {!proto.pando.api.vault.v1.UploadSecureDataRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pando.api.vault.v1.UploadSecureDataResponse.deserializeBinary
);


/**
 * @param {!proto.pando.api.vault.v1.UploadSecureDataRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pando.api.vault.v1.UploadSecureDataResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pando.api.vault.v1.UploadSecureDataResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pando.api.vault.v1.SecureDataServiceClient.prototype.uploadSecureData =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pando.api.vault.v1.SecureDataService/UploadSecureData',
      request,
      metadata || {},
      methodDescriptor_SecureDataService_UploadSecureData,
      callback);
};


/**
 * @param {!proto.pando.api.vault.v1.UploadSecureDataRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pando.api.vault.v1.UploadSecureDataResponse>}
 *     Promise that resolves to the response
 */
proto.pando.api.vault.v1.SecureDataServicePromiseClient.prototype.uploadSecureData =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pando.api.vault.v1.SecureDataService/UploadSecureData',
      request,
      metadata || {},
      methodDescriptor_SecureDataService_UploadSecureData);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pando.api.vault.v1.AppendSecureDataRequest,
 *   !proto.pando.api.vault.v1.AppendSecureDataResponse>}
 */
const methodDescriptor_SecureDataService_AppendSecureData = new grpc.web.MethodDescriptor(
  '/pando.api.vault.v1.SecureDataService/AppendSecureData',
  grpc.web.MethodType.UNARY,
  proto.pando.api.vault.v1.AppendSecureDataRequest,
  proto.pando.api.vault.v1.AppendSecureDataResponse,
  /**
   * @param {!proto.pando.api.vault.v1.AppendSecureDataRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pando.api.vault.v1.AppendSecureDataResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pando.api.vault.v1.AppendSecureDataRequest,
 *   !proto.pando.api.vault.v1.AppendSecureDataResponse>}
 */
const methodInfo_SecureDataService_AppendSecureData = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pando.api.vault.v1.AppendSecureDataResponse,
  /**
   * @param {!proto.pando.api.vault.v1.AppendSecureDataRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pando.api.vault.v1.AppendSecureDataResponse.deserializeBinary
);


/**
 * @param {!proto.pando.api.vault.v1.AppendSecureDataRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pando.api.vault.v1.AppendSecureDataResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pando.api.vault.v1.AppendSecureDataResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pando.api.vault.v1.SecureDataServiceClient.prototype.appendSecureData =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pando.api.vault.v1.SecureDataService/AppendSecureData',
      request,
      metadata || {},
      methodDescriptor_SecureDataService_AppendSecureData,
      callback);
};


/**
 * @param {!proto.pando.api.vault.v1.AppendSecureDataRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pando.api.vault.v1.AppendSecureDataResponse>}
 *     Promise that resolves to the response
 */
proto.pando.api.vault.v1.SecureDataServicePromiseClient.prototype.appendSecureData =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pando.api.vault.v1.SecureDataService/AppendSecureData',
      request,
      metadata || {},
      methodDescriptor_SecureDataService_AppendSecureData);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pando.api.vault.v1.GetSecureDataRequest,
 *   !proto.pando.api.vault.v1.SecureDataModel>}
 */
const methodDescriptor_SecureDataService_GetSecureData = new grpc.web.MethodDescriptor(
  '/pando.api.vault.v1.SecureDataService/GetSecureData',
  grpc.web.MethodType.UNARY,
  proto.pando.api.vault.v1.GetSecureDataRequest,
  proto.pando.api.vault.v1.SecureDataModel,
  /**
   * @param {!proto.pando.api.vault.v1.GetSecureDataRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pando.api.vault.v1.SecureDataModel.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pando.api.vault.v1.GetSecureDataRequest,
 *   !proto.pando.api.vault.v1.SecureDataModel>}
 */
const methodInfo_SecureDataService_GetSecureData = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pando.api.vault.v1.SecureDataModel,
  /**
   * @param {!proto.pando.api.vault.v1.GetSecureDataRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pando.api.vault.v1.SecureDataModel.deserializeBinary
);


/**
 * @param {!proto.pando.api.vault.v1.GetSecureDataRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pando.api.vault.v1.SecureDataModel)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pando.api.vault.v1.SecureDataModel>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pando.api.vault.v1.SecureDataServiceClient.prototype.getSecureData =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pando.api.vault.v1.SecureDataService/GetSecureData',
      request,
      metadata || {},
      methodDescriptor_SecureDataService_GetSecureData,
      callback);
};


/**
 * @param {!proto.pando.api.vault.v1.GetSecureDataRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pando.api.vault.v1.SecureDataModel>}
 *     Promise that resolves to the response
 */
proto.pando.api.vault.v1.SecureDataServicePromiseClient.prototype.getSecureData =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pando.api.vault.v1.SecureDataService/GetSecureData',
      request,
      metadata || {},
      methodDescriptor_SecureDataService_GetSecureData);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pando.api.vault.v1.DeleteSecureDataRequest,
 *   !proto.pando.api.Empty>}
 */
const methodDescriptor_SecureDataService_DeleteSecureData = new grpc.web.MethodDescriptor(
  '/pando.api.vault.v1.SecureDataService/DeleteSecureData',
  grpc.web.MethodType.UNARY,
  proto.pando.api.vault.v1.DeleteSecureDataRequest,
  pando_api_shared_pb.Empty,
  /**
   * @param {!proto.pando.api.vault.v1.DeleteSecureDataRequest} request
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
 *   !proto.pando.api.vault.v1.DeleteSecureDataRequest,
 *   !proto.pando.api.Empty>}
 */
const methodInfo_SecureDataService_DeleteSecureData = new grpc.web.AbstractClientBase.MethodInfo(
  pando_api_shared_pb.Empty,
  /**
   * @param {!proto.pando.api.vault.v1.DeleteSecureDataRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_shared_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.pando.api.vault.v1.DeleteSecureDataRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pando.api.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pando.api.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pando.api.vault.v1.SecureDataServiceClient.prototype.deleteSecureData =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pando.api.vault.v1.SecureDataService/DeleteSecureData',
      request,
      metadata || {},
      methodDescriptor_SecureDataService_DeleteSecureData,
      callback);
};


/**
 * @param {!proto.pando.api.vault.v1.DeleteSecureDataRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pando.api.Empty>}
 *     Promise that resolves to the response
 */
proto.pando.api.vault.v1.SecureDataServicePromiseClient.prototype.deleteSecureData =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pando.api.vault.v1.SecureDataService/DeleteSecureData',
      request,
      metadata || {},
      methodDescriptor_SecureDataService_DeleteSecureData);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pando.api.vault.v1.ExecAddRecordOwnerRequest,
 *   !proto.pando.api.Empty>}
 */
const methodDescriptor_SecureDataService_ExecAddRecordOwner = new grpc.web.MethodDescriptor(
  '/pando.api.vault.v1.SecureDataService/ExecAddRecordOwner',
  grpc.web.MethodType.UNARY,
  proto.pando.api.vault.v1.ExecAddRecordOwnerRequest,
  pando_api_shared_pb.Empty,
  /**
   * @param {!proto.pando.api.vault.v1.ExecAddRecordOwnerRequest} request
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
 *   !proto.pando.api.vault.v1.ExecAddRecordOwnerRequest,
 *   !proto.pando.api.Empty>}
 */
const methodInfo_SecureDataService_ExecAddRecordOwner = new grpc.web.AbstractClientBase.MethodInfo(
  pando_api_shared_pb.Empty,
  /**
   * @param {!proto.pando.api.vault.v1.ExecAddRecordOwnerRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_shared_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.pando.api.vault.v1.ExecAddRecordOwnerRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pando.api.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pando.api.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pando.api.vault.v1.SecureDataServiceClient.prototype.execAddRecordOwner =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pando.api.vault.v1.SecureDataService/ExecAddRecordOwner',
      request,
      metadata || {},
      methodDescriptor_SecureDataService_ExecAddRecordOwner,
      callback);
};


/**
 * @param {!proto.pando.api.vault.v1.ExecAddRecordOwnerRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pando.api.Empty>}
 *     Promise that resolves to the response
 */
proto.pando.api.vault.v1.SecureDataServicePromiseClient.prototype.execAddRecordOwner =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pando.api.vault.v1.SecureDataService/ExecAddRecordOwner',
      request,
      metadata || {},
      methodDescriptor_SecureDataService_ExecAddRecordOwner);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pando.api.vault.v1.ExecRemoveRecordOwnershipRequest,
 *   !proto.pando.api.Empty>}
 */
const methodDescriptor_SecureDataService_ExecRemoveRecordOwnership = new grpc.web.MethodDescriptor(
  '/pando.api.vault.v1.SecureDataService/ExecRemoveRecordOwnership',
  grpc.web.MethodType.UNARY,
  proto.pando.api.vault.v1.ExecRemoveRecordOwnershipRequest,
  pando_api_shared_pb.Empty,
  /**
   * @param {!proto.pando.api.vault.v1.ExecRemoveRecordOwnershipRequest} request
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
 *   !proto.pando.api.vault.v1.ExecRemoveRecordOwnershipRequest,
 *   !proto.pando.api.Empty>}
 */
const methodInfo_SecureDataService_ExecRemoveRecordOwnership = new grpc.web.AbstractClientBase.MethodInfo(
  pando_api_shared_pb.Empty,
  /**
   * @param {!proto.pando.api.vault.v1.ExecRemoveRecordOwnershipRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_shared_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.pando.api.vault.v1.ExecRemoveRecordOwnershipRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pando.api.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pando.api.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pando.api.vault.v1.SecureDataServiceClient.prototype.execRemoveRecordOwnership =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pando.api.vault.v1.SecureDataService/ExecRemoveRecordOwnership',
      request,
      metadata || {},
      methodDescriptor_SecureDataService_ExecRemoveRecordOwnership,
      callback);
};


/**
 * @param {!proto.pando.api.vault.v1.ExecRemoveRecordOwnershipRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pando.api.Empty>}
 *     Promise that resolves to the response
 */
proto.pando.api.vault.v1.SecureDataServicePromiseClient.prototype.execRemoveRecordOwnership =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pando.api.vault.v1.SecureDataService/ExecRemoveRecordOwnership',
      request,
      metadata || {},
      methodDescriptor_SecureDataService_ExecRemoveRecordOwnership);
};


module.exports = proto.pando.api.vault.v1;

