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
proto.pando.api.vault.v1 = require('./documents_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.pando.api.vault.v1.DocumentServiceClient =
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
proto.pando.api.vault.v1.DocumentServicePromiseClient =
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
 *   !proto.pando.api.vault.v1.GetDocumentRequest,
 *   !proto.pando.api.vault.v1.GetDocumentResponse>}
 */
const methodDescriptor_DocumentService_GetDocument = new grpc.web.MethodDescriptor(
  '/pando.api.vault.v1.DocumentService/GetDocument',
  grpc.web.MethodType.UNARY,
  proto.pando.api.vault.v1.GetDocumentRequest,
  proto.pando.api.vault.v1.GetDocumentResponse,
  /**
   * @param {!proto.pando.api.vault.v1.GetDocumentRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pando.api.vault.v1.GetDocumentResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pando.api.vault.v1.GetDocumentRequest,
 *   !proto.pando.api.vault.v1.GetDocumentResponse>}
 */
const methodInfo_DocumentService_GetDocument = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pando.api.vault.v1.GetDocumentResponse,
  /**
   * @param {!proto.pando.api.vault.v1.GetDocumentRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pando.api.vault.v1.GetDocumentResponse.deserializeBinary
);


/**
 * @param {!proto.pando.api.vault.v1.GetDocumentRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pando.api.vault.v1.GetDocumentResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pando.api.vault.v1.GetDocumentResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pando.api.vault.v1.DocumentServiceClient.prototype.getDocument =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pando.api.vault.v1.DocumentService/GetDocument',
      request,
      metadata || {},
      methodDescriptor_DocumentService_GetDocument,
      callback);
};


/**
 * @param {!proto.pando.api.vault.v1.GetDocumentRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pando.api.vault.v1.GetDocumentResponse>}
 *     Promise that resolves to the response
 */
proto.pando.api.vault.v1.DocumentServicePromiseClient.prototype.getDocument =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pando.api.vault.v1.DocumentService/GetDocument',
      request,
      metadata || {},
      methodDescriptor_DocumentService_GetDocument);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pando.api.vault.v1.Document,
 *   !proto.pando.api.vault.v1.Document>}
 */
const methodDescriptor_DocumentService_UploadDocument = new grpc.web.MethodDescriptor(
  '/pando.api.vault.v1.DocumentService/UploadDocument',
  grpc.web.MethodType.UNARY,
  proto.pando.api.vault.v1.Document,
  proto.pando.api.vault.v1.Document,
  /**
   * @param {!proto.pando.api.vault.v1.Document} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pando.api.vault.v1.Document.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pando.api.vault.v1.Document,
 *   !proto.pando.api.vault.v1.Document>}
 */
const methodInfo_DocumentService_UploadDocument = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pando.api.vault.v1.Document,
  /**
   * @param {!proto.pando.api.vault.v1.Document} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pando.api.vault.v1.Document.deserializeBinary
);


/**
 * @param {!proto.pando.api.vault.v1.Document} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pando.api.vault.v1.Document)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pando.api.vault.v1.Document>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pando.api.vault.v1.DocumentServiceClient.prototype.uploadDocument =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pando.api.vault.v1.DocumentService/UploadDocument',
      request,
      metadata || {},
      methodDescriptor_DocumentService_UploadDocument,
      callback);
};


/**
 * @param {!proto.pando.api.vault.v1.Document} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pando.api.vault.v1.Document>}
 *     Promise that resolves to the response
 */
proto.pando.api.vault.v1.DocumentServicePromiseClient.prototype.uploadDocument =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pando.api.vault.v1.DocumentService/UploadDocument',
      request,
      metadata || {},
      methodDescriptor_DocumentService_UploadDocument);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pando.api.vault.v1.ExecAddDocumentOwnerRequest,
 *   !proto.pando.api.Empty>}
 */
const methodDescriptor_DocumentService_ExecAddDocumentOwner = new grpc.web.MethodDescriptor(
  '/pando.api.vault.v1.DocumentService/ExecAddDocumentOwner',
  grpc.web.MethodType.UNARY,
  proto.pando.api.vault.v1.ExecAddDocumentOwnerRequest,
  pando_api_shared_pb.Empty,
  /**
   * @param {!proto.pando.api.vault.v1.ExecAddDocumentOwnerRequest} request
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
 *   !proto.pando.api.vault.v1.ExecAddDocumentOwnerRequest,
 *   !proto.pando.api.Empty>}
 */
const methodInfo_DocumentService_ExecAddDocumentOwner = new grpc.web.AbstractClientBase.MethodInfo(
  pando_api_shared_pb.Empty,
  /**
   * @param {!proto.pando.api.vault.v1.ExecAddDocumentOwnerRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_shared_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.pando.api.vault.v1.ExecAddDocumentOwnerRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pando.api.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pando.api.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pando.api.vault.v1.DocumentServiceClient.prototype.execAddDocumentOwner =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pando.api.vault.v1.DocumentService/ExecAddDocumentOwner',
      request,
      metadata || {},
      methodDescriptor_DocumentService_ExecAddDocumentOwner,
      callback);
};


/**
 * @param {!proto.pando.api.vault.v1.ExecAddDocumentOwnerRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pando.api.Empty>}
 *     Promise that resolves to the response
 */
proto.pando.api.vault.v1.DocumentServicePromiseClient.prototype.execAddDocumentOwner =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pando.api.vault.v1.DocumentService/ExecAddDocumentOwner',
      request,
      metadata || {},
      methodDescriptor_DocumentService_ExecAddDocumentOwner);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pando.api.vault.v1.ExecRemoveDocumentOwnershipRequest,
 *   !proto.pando.api.Empty>}
 */
const methodDescriptor_DocumentService_ExecRemoveDocumentOwnership = new grpc.web.MethodDescriptor(
  '/pando.api.vault.v1.DocumentService/ExecRemoveDocumentOwnership',
  grpc.web.MethodType.UNARY,
  proto.pando.api.vault.v1.ExecRemoveDocumentOwnershipRequest,
  pando_api_shared_pb.Empty,
  /**
   * @param {!proto.pando.api.vault.v1.ExecRemoveDocumentOwnershipRequest} request
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
 *   !proto.pando.api.vault.v1.ExecRemoveDocumentOwnershipRequest,
 *   !proto.pando.api.Empty>}
 */
const methodInfo_DocumentService_ExecRemoveDocumentOwnership = new grpc.web.AbstractClientBase.MethodInfo(
  pando_api_shared_pb.Empty,
  /**
   * @param {!proto.pando.api.vault.v1.ExecRemoveDocumentOwnershipRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_shared_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.pando.api.vault.v1.ExecRemoveDocumentOwnershipRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pando.api.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pando.api.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pando.api.vault.v1.DocumentServiceClient.prototype.execRemoveDocumentOwnership =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pando.api.vault.v1.DocumentService/ExecRemoveDocumentOwnership',
      request,
      metadata || {},
      methodDescriptor_DocumentService_ExecRemoveDocumentOwnership,
      callback);
};


/**
 * @param {!proto.pando.api.vault.v1.ExecRemoveDocumentOwnershipRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pando.api.Empty>}
 *     Promise that resolves to the response
 */
proto.pando.api.vault.v1.DocumentServicePromiseClient.prototype.execRemoveDocumentOwnership =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pando.api.vault.v1.DocumentService/ExecRemoveDocumentOwnership',
      request,
      metadata || {},
      methodDescriptor_DocumentService_ExecRemoveDocumentOwnership);
};


module.exports = proto.pando.api.vault.v1;

