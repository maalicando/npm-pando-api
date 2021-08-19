/**
 * @fileoverview gRPC-Web generated client stub for pando.api.esign.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js')

var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js')

var pando_api_extensions_pb = require('../../../../pando/api/extensions_pb.js')

var pando_api_esign_v1_shared_pb = require('../../../../pando/api/esign/v1/shared_pb.js')

var pando_api_shared_pb = require('../../../../pando/api/shared_pb.js')
const proto = {};
proto.pando = {};
proto.pando.api = {};
proto.pando.api.esign = {};
proto.pando.api.esign.v1 = require('./esign_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.pando.api.esign.v1.ESignServiceClient =
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
proto.pando.api.esign.v1.ESignServicePromiseClient =
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
 *   !proto.pando.api.esign.v1.AdoptSignatureRequest,
 *   !proto.pando.api.esign.v1.SignatoryRequestDetail>}
 */
const methodDescriptor_ESignService_AdoptSignature = new grpc.web.MethodDescriptor(
  '/pando.api.esign.v1.ESignService/AdoptSignature',
  grpc.web.MethodType.UNARY,
  proto.pando.api.esign.v1.AdoptSignatureRequest,
  proto.pando.api.esign.v1.SignatoryRequestDetail,
  /**
   * @param {!proto.pando.api.esign.v1.AdoptSignatureRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pando.api.esign.v1.SignatoryRequestDetail.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pando.api.esign.v1.AdoptSignatureRequest,
 *   !proto.pando.api.esign.v1.SignatoryRequestDetail>}
 */
const methodInfo_ESignService_AdoptSignature = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pando.api.esign.v1.SignatoryRequestDetail,
  /**
   * @param {!proto.pando.api.esign.v1.AdoptSignatureRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pando.api.esign.v1.SignatoryRequestDetail.deserializeBinary
);


/**
 * @param {!proto.pando.api.esign.v1.AdoptSignatureRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pando.api.esign.v1.SignatoryRequestDetail)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pando.api.esign.v1.SignatoryRequestDetail>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pando.api.esign.v1.ESignServiceClient.prototype.adoptSignature =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pando.api.esign.v1.ESignService/AdoptSignature',
      request,
      metadata || {},
      methodDescriptor_ESignService_AdoptSignature,
      callback);
};


/**
 * @param {!proto.pando.api.esign.v1.AdoptSignatureRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pando.api.esign.v1.SignatoryRequestDetail>}
 *     Promise that resolves to the response
 */
proto.pando.api.esign.v1.ESignServicePromiseClient.prototype.adoptSignature =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pando.api.esign.v1.ESignService/AdoptSignature',
      request,
      metadata || {},
      methodDescriptor_ESignService_AdoptSignature);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pando.api.esign.v1.GetESignRequestDetail,
 *   !proto.pando.api.esign.v1.SignatoryRequestDetail>}
 */
const methodDescriptor_ESignService_GetRequestDetail = new grpc.web.MethodDescriptor(
  '/pando.api.esign.v1.ESignService/GetRequestDetail',
  grpc.web.MethodType.UNARY,
  proto.pando.api.esign.v1.GetESignRequestDetail,
  proto.pando.api.esign.v1.SignatoryRequestDetail,
  /**
   * @param {!proto.pando.api.esign.v1.GetESignRequestDetail} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pando.api.esign.v1.SignatoryRequestDetail.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pando.api.esign.v1.GetESignRequestDetail,
 *   !proto.pando.api.esign.v1.SignatoryRequestDetail>}
 */
const methodInfo_ESignService_GetRequestDetail = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pando.api.esign.v1.SignatoryRequestDetail,
  /**
   * @param {!proto.pando.api.esign.v1.GetESignRequestDetail} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pando.api.esign.v1.SignatoryRequestDetail.deserializeBinary
);


/**
 * @param {!proto.pando.api.esign.v1.GetESignRequestDetail} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pando.api.esign.v1.SignatoryRequestDetail)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pando.api.esign.v1.SignatoryRequestDetail>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pando.api.esign.v1.ESignServiceClient.prototype.getRequestDetail =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pando.api.esign.v1.ESignService/GetRequestDetail',
      request,
      metadata || {},
      methodDescriptor_ESignService_GetRequestDetail,
      callback);
};


/**
 * @param {!proto.pando.api.esign.v1.GetESignRequestDetail} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pando.api.esign.v1.SignatoryRequestDetail>}
 *     Promise that resolves to the response
 */
proto.pando.api.esign.v1.ESignServicePromiseClient.prototype.getRequestDetail =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pando.api.esign.v1.ESignService/GetRequestDetail',
      request,
      metadata || {},
      methodDescriptor_ESignService_GetRequestDetail);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pando.api.esign.v1.GetDocumentRequest,
 *   !proto.pando.api.esign.v1.Document>}
 */
const methodDescriptor_ESignService_GetDocument = new grpc.web.MethodDescriptor(
  '/pando.api.esign.v1.ESignService/GetDocument',
  grpc.web.MethodType.UNARY,
  proto.pando.api.esign.v1.GetDocumentRequest,
  pando_api_esign_v1_shared_pb.Document,
  /**
   * @param {!proto.pando.api.esign.v1.GetDocumentRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_esign_v1_shared_pb.Document.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pando.api.esign.v1.GetDocumentRequest,
 *   !proto.pando.api.esign.v1.Document>}
 */
const methodInfo_ESignService_GetDocument = new grpc.web.AbstractClientBase.MethodInfo(
  pando_api_esign_v1_shared_pb.Document,
  /**
   * @param {!proto.pando.api.esign.v1.GetDocumentRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_esign_v1_shared_pb.Document.deserializeBinary
);


/**
 * @param {!proto.pando.api.esign.v1.GetDocumentRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pando.api.esign.v1.Document)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pando.api.esign.v1.Document>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pando.api.esign.v1.ESignServiceClient.prototype.getDocument =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pando.api.esign.v1.ESignService/GetDocument',
      request,
      metadata || {},
      methodDescriptor_ESignService_GetDocument,
      callback);
};


/**
 * @param {!proto.pando.api.esign.v1.GetDocumentRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pando.api.esign.v1.Document>}
 *     Promise that resolves to the response
 */
proto.pando.api.esign.v1.ESignServicePromiseClient.prototype.getDocument =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pando.api.esign.v1.ESignService/GetDocument',
      request,
      metadata || {},
      methodDescriptor_ESignService_GetDocument);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pando.api.esign.v1.GetDocumentListRequest,
 *   !proto.pando.api.esign.v1.DocumentList>}
 */
const methodDescriptor_ESignService_GetDocumentList = new grpc.web.MethodDescriptor(
  '/pando.api.esign.v1.ESignService/GetDocumentList',
  grpc.web.MethodType.UNARY,
  proto.pando.api.esign.v1.GetDocumentListRequest,
  pando_api_esign_v1_shared_pb.DocumentList,
  /**
   * @param {!proto.pando.api.esign.v1.GetDocumentListRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_esign_v1_shared_pb.DocumentList.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pando.api.esign.v1.GetDocumentListRequest,
 *   !proto.pando.api.esign.v1.DocumentList>}
 */
const methodInfo_ESignService_GetDocumentList = new grpc.web.AbstractClientBase.MethodInfo(
  pando_api_esign_v1_shared_pb.DocumentList,
  /**
   * @param {!proto.pando.api.esign.v1.GetDocumentListRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_esign_v1_shared_pb.DocumentList.deserializeBinary
);


/**
 * @param {!proto.pando.api.esign.v1.GetDocumentListRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pando.api.esign.v1.DocumentList)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pando.api.esign.v1.DocumentList>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pando.api.esign.v1.ESignServiceClient.prototype.getDocumentList =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pando.api.esign.v1.ESignService/GetDocumentList',
      request,
      metadata || {},
      methodDescriptor_ESignService_GetDocumentList,
      callback);
};


/**
 * @param {!proto.pando.api.esign.v1.GetDocumentListRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pando.api.esign.v1.DocumentList>}
 *     Promise that resolves to the response
 */
proto.pando.api.esign.v1.ESignServicePromiseClient.prototype.getDocumentList =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pando.api.esign.v1.ESignService/GetDocumentList',
      request,
      metadata || {},
      methodDescriptor_ESignService_GetDocumentList);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pando.api.esign.v1.GetDocumentSummaryRequest,
 *   !proto.pando.api.esign.v1.DocumentList>}
 */
const methodDescriptor_ESignService_GetToDoDocumentList = new grpc.web.MethodDescriptor(
  '/pando.api.esign.v1.ESignService/GetToDoDocumentList',
  grpc.web.MethodType.UNARY,
  proto.pando.api.esign.v1.GetDocumentSummaryRequest,
  pando_api_esign_v1_shared_pb.DocumentList,
  /**
   * @param {!proto.pando.api.esign.v1.GetDocumentSummaryRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_esign_v1_shared_pb.DocumentList.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pando.api.esign.v1.GetDocumentSummaryRequest,
 *   !proto.pando.api.esign.v1.DocumentList>}
 */
const methodInfo_ESignService_GetToDoDocumentList = new grpc.web.AbstractClientBase.MethodInfo(
  pando_api_esign_v1_shared_pb.DocumentList,
  /**
   * @param {!proto.pando.api.esign.v1.GetDocumentSummaryRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_esign_v1_shared_pb.DocumentList.deserializeBinary
);


/**
 * @param {!proto.pando.api.esign.v1.GetDocumentSummaryRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pando.api.esign.v1.DocumentList)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pando.api.esign.v1.DocumentList>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pando.api.esign.v1.ESignServiceClient.prototype.getToDoDocumentList =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pando.api.esign.v1.ESignService/GetToDoDocumentList',
      request,
      metadata || {},
      methodDescriptor_ESignService_GetToDoDocumentList,
      callback);
};


/**
 * @param {!proto.pando.api.esign.v1.GetDocumentSummaryRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pando.api.esign.v1.DocumentList>}
 *     Promise that resolves to the response
 */
proto.pando.api.esign.v1.ESignServicePromiseClient.prototype.getToDoDocumentList =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pando.api.esign.v1.ESignService/GetToDoDocumentList',
      request,
      metadata || {},
      methodDescriptor_ESignService_GetToDoDocumentList);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pando.api.esign.v1.GetDocumentSummaryRequest,
 *   !proto.pando.api.esign.v1.DocumentList>}
 */
const methodDescriptor_ESignService_GetRecentlyCompletedDocumentList = new grpc.web.MethodDescriptor(
  '/pando.api.esign.v1.ESignService/GetRecentlyCompletedDocumentList',
  grpc.web.MethodType.UNARY,
  proto.pando.api.esign.v1.GetDocumentSummaryRequest,
  pando_api_esign_v1_shared_pb.DocumentList,
  /**
   * @param {!proto.pando.api.esign.v1.GetDocumentSummaryRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_esign_v1_shared_pb.DocumentList.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pando.api.esign.v1.GetDocumentSummaryRequest,
 *   !proto.pando.api.esign.v1.DocumentList>}
 */
const methodInfo_ESignService_GetRecentlyCompletedDocumentList = new grpc.web.AbstractClientBase.MethodInfo(
  pando_api_esign_v1_shared_pb.DocumentList,
  /**
   * @param {!proto.pando.api.esign.v1.GetDocumentSummaryRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_esign_v1_shared_pb.DocumentList.deserializeBinary
);


/**
 * @param {!proto.pando.api.esign.v1.GetDocumentSummaryRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pando.api.esign.v1.DocumentList)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pando.api.esign.v1.DocumentList>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pando.api.esign.v1.ESignServiceClient.prototype.getRecentlyCompletedDocumentList =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pando.api.esign.v1.ESignService/GetRecentlyCompletedDocumentList',
      request,
      metadata || {},
      methodDescriptor_ESignService_GetRecentlyCompletedDocumentList,
      callback);
};


/**
 * @param {!proto.pando.api.esign.v1.GetDocumentSummaryRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pando.api.esign.v1.DocumentList>}
 *     Promise that resolves to the response
 */
proto.pando.api.esign.v1.ESignServicePromiseClient.prototype.getRecentlyCompletedDocumentList =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pando.api.esign.v1.ESignService/GetRecentlyCompletedDocumentList',
      request,
      metadata || {},
      methodDescriptor_ESignService_GetRecentlyCompletedDocumentList);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pando.api.esign.v1.GetDocumentSummaryRequest,
 *   !proto.pando.api.esign.v1.DocumentList>}
 */
const methodDescriptor_ESignService_GetCompletedDocumentList = new grpc.web.MethodDescriptor(
  '/pando.api.esign.v1.ESignService/GetCompletedDocumentList',
  grpc.web.MethodType.UNARY,
  proto.pando.api.esign.v1.GetDocumentSummaryRequest,
  pando_api_esign_v1_shared_pb.DocumentList,
  /**
   * @param {!proto.pando.api.esign.v1.GetDocumentSummaryRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_esign_v1_shared_pb.DocumentList.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pando.api.esign.v1.GetDocumentSummaryRequest,
 *   !proto.pando.api.esign.v1.DocumentList>}
 */
const methodInfo_ESignService_GetCompletedDocumentList = new grpc.web.AbstractClientBase.MethodInfo(
  pando_api_esign_v1_shared_pb.DocumentList,
  /**
   * @param {!proto.pando.api.esign.v1.GetDocumentSummaryRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_esign_v1_shared_pb.DocumentList.deserializeBinary
);


/**
 * @param {!proto.pando.api.esign.v1.GetDocumentSummaryRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pando.api.esign.v1.DocumentList)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pando.api.esign.v1.DocumentList>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pando.api.esign.v1.ESignServiceClient.prototype.getCompletedDocumentList =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pando.api.esign.v1.ESignService/GetCompletedDocumentList',
      request,
      metadata || {},
      methodDescriptor_ESignService_GetCompletedDocumentList,
      callback);
};


/**
 * @param {!proto.pando.api.esign.v1.GetDocumentSummaryRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pando.api.esign.v1.DocumentList>}
 *     Promise that resolves to the response
 */
proto.pando.api.esign.v1.ESignServicePromiseClient.prototype.getCompletedDocumentList =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pando.api.esign.v1.ESignService/GetCompletedDocumentList',
      request,
      metadata || {},
      methodDescriptor_ESignService_GetCompletedDocumentList);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pando.api.esign.v1.GetDocumentSummaryRequest,
 *   !proto.pando.api.esign.v1.DocumentList>}
 */
const methodDescriptor_ESignService_GetIncompleteDocumentList = new grpc.web.MethodDescriptor(
  '/pando.api.esign.v1.ESignService/GetIncompleteDocumentList',
  grpc.web.MethodType.UNARY,
  proto.pando.api.esign.v1.GetDocumentSummaryRequest,
  pando_api_esign_v1_shared_pb.DocumentList,
  /**
   * @param {!proto.pando.api.esign.v1.GetDocumentSummaryRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_esign_v1_shared_pb.DocumentList.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pando.api.esign.v1.GetDocumentSummaryRequest,
 *   !proto.pando.api.esign.v1.DocumentList>}
 */
const methodInfo_ESignService_GetIncompleteDocumentList = new grpc.web.AbstractClientBase.MethodInfo(
  pando_api_esign_v1_shared_pb.DocumentList,
  /**
   * @param {!proto.pando.api.esign.v1.GetDocumentSummaryRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_esign_v1_shared_pb.DocumentList.deserializeBinary
);


/**
 * @param {!proto.pando.api.esign.v1.GetDocumentSummaryRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pando.api.esign.v1.DocumentList)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pando.api.esign.v1.DocumentList>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pando.api.esign.v1.ESignServiceClient.prototype.getIncompleteDocumentList =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pando.api.esign.v1.ESignService/GetIncompleteDocumentList',
      request,
      metadata || {},
      methodDescriptor_ESignService_GetIncompleteDocumentList,
      callback);
};


/**
 * @param {!proto.pando.api.esign.v1.GetDocumentSummaryRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pando.api.esign.v1.DocumentList>}
 *     Promise that resolves to the response
 */
proto.pando.api.esign.v1.ESignServicePromiseClient.prototype.getIncompleteDocumentList =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pando.api.esign.v1.ESignService/GetIncompleteDocumentList',
      request,
      metadata || {},
      methodDescriptor_ESignService_GetIncompleteDocumentList);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pando.api.esign.v1.SignDocumentRequest,
 *   !proto.pando.api.esign.v1.ESignRequestShort>}
 */
const methodDescriptor_ESignService_ExecSignDocument = new grpc.web.MethodDescriptor(
  '/pando.api.esign.v1.ESignService/ExecSignDocument',
  grpc.web.MethodType.UNARY,
  proto.pando.api.esign.v1.SignDocumentRequest,
  proto.pando.api.esign.v1.ESignRequestShort,
  /**
   * @param {!proto.pando.api.esign.v1.SignDocumentRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pando.api.esign.v1.ESignRequestShort.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pando.api.esign.v1.SignDocumentRequest,
 *   !proto.pando.api.esign.v1.ESignRequestShort>}
 */
const methodInfo_ESignService_ExecSignDocument = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pando.api.esign.v1.ESignRequestShort,
  /**
   * @param {!proto.pando.api.esign.v1.SignDocumentRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pando.api.esign.v1.ESignRequestShort.deserializeBinary
);


/**
 * @param {!proto.pando.api.esign.v1.SignDocumentRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pando.api.esign.v1.ESignRequestShort)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pando.api.esign.v1.ESignRequestShort>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pando.api.esign.v1.ESignServiceClient.prototype.execSignDocument =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pando.api.esign.v1.ESignService/ExecSignDocument',
      request,
      metadata || {},
      methodDescriptor_ESignService_ExecSignDocument,
      callback);
};


/**
 * @param {!proto.pando.api.esign.v1.SignDocumentRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pando.api.esign.v1.ESignRequestShort>}
 *     Promise that resolves to the response
 */
proto.pando.api.esign.v1.ESignServicePromiseClient.prototype.execSignDocument =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pando.api.esign.v1.ESignService/ExecSignDocument',
      request,
      metadata || {},
      methodDescriptor_ESignService_ExecSignDocument);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pando.api.esign.v1.SignDocumentRequest,
 *   !proto.pando.api.esign.v1.ESignRequestShort>}
 */
const methodDescriptor_ESignService_ExecAcknowledgeDocument = new grpc.web.MethodDescriptor(
  '/pando.api.esign.v1.ESignService/ExecAcknowledgeDocument',
  grpc.web.MethodType.UNARY,
  proto.pando.api.esign.v1.SignDocumentRequest,
  proto.pando.api.esign.v1.ESignRequestShort,
  /**
   * @param {!proto.pando.api.esign.v1.SignDocumentRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pando.api.esign.v1.ESignRequestShort.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pando.api.esign.v1.SignDocumentRequest,
 *   !proto.pando.api.esign.v1.ESignRequestShort>}
 */
const methodInfo_ESignService_ExecAcknowledgeDocument = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pando.api.esign.v1.ESignRequestShort,
  /**
   * @param {!proto.pando.api.esign.v1.SignDocumentRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pando.api.esign.v1.ESignRequestShort.deserializeBinary
);


/**
 * @param {!proto.pando.api.esign.v1.SignDocumentRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pando.api.esign.v1.ESignRequestShort)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pando.api.esign.v1.ESignRequestShort>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pando.api.esign.v1.ESignServiceClient.prototype.execAcknowledgeDocument =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pando.api.esign.v1.ESignService/ExecAcknowledgeDocument',
      request,
      metadata || {},
      methodDescriptor_ESignService_ExecAcknowledgeDocument,
      callback);
};


/**
 * @param {!proto.pando.api.esign.v1.SignDocumentRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pando.api.esign.v1.ESignRequestShort>}
 *     Promise that resolves to the response
 */
proto.pando.api.esign.v1.ESignServicePromiseClient.prototype.execAcknowledgeDocument =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pando.api.esign.v1.ESignService/ExecAcknowledgeDocument',
      request,
      metadata || {},
      methodDescriptor_ESignService_ExecAcknowledgeDocument);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pando.api.esign.v1.SignDocumentRequest,
 *   !proto.pando.api.esign.v1.ESignRequestShort>}
 */
const methodDescriptor_ESignService_ExecDeclineDocument = new grpc.web.MethodDescriptor(
  '/pando.api.esign.v1.ESignService/ExecDeclineDocument',
  grpc.web.MethodType.UNARY,
  proto.pando.api.esign.v1.SignDocumentRequest,
  proto.pando.api.esign.v1.ESignRequestShort,
  /**
   * @param {!proto.pando.api.esign.v1.SignDocumentRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pando.api.esign.v1.ESignRequestShort.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pando.api.esign.v1.SignDocumentRequest,
 *   !proto.pando.api.esign.v1.ESignRequestShort>}
 */
const methodInfo_ESignService_ExecDeclineDocument = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pando.api.esign.v1.ESignRequestShort,
  /**
   * @param {!proto.pando.api.esign.v1.SignDocumentRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pando.api.esign.v1.ESignRequestShort.deserializeBinary
);


/**
 * @param {!proto.pando.api.esign.v1.SignDocumentRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pando.api.esign.v1.ESignRequestShort)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pando.api.esign.v1.ESignRequestShort>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pando.api.esign.v1.ESignServiceClient.prototype.execDeclineDocument =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pando.api.esign.v1.ESignService/ExecDeclineDocument',
      request,
      metadata || {},
      methodDescriptor_ESignService_ExecDeclineDocument,
      callback);
};


/**
 * @param {!proto.pando.api.esign.v1.SignDocumentRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pando.api.esign.v1.ESignRequestShort>}
 *     Promise that resolves to the response
 */
proto.pando.api.esign.v1.ESignServicePromiseClient.prototype.execDeclineDocument =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pando.api.esign.v1.ESignService/ExecDeclineDocument',
      request,
      metadata || {},
      methodDescriptor_ESignService_ExecDeclineDocument);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pando.api.esign.v1.SignDocumentRequest,
 *   !proto.pando.api.esign.v1.ESignRequestShort>}
 */
const methodDescriptor_ESignService_ExecOptInDocument = new grpc.web.MethodDescriptor(
  '/pando.api.esign.v1.ESignService/ExecOptInDocument',
  grpc.web.MethodType.UNARY,
  proto.pando.api.esign.v1.SignDocumentRequest,
  proto.pando.api.esign.v1.ESignRequestShort,
  /**
   * @param {!proto.pando.api.esign.v1.SignDocumentRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pando.api.esign.v1.ESignRequestShort.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pando.api.esign.v1.SignDocumentRequest,
 *   !proto.pando.api.esign.v1.ESignRequestShort>}
 */
const methodInfo_ESignService_ExecOptInDocument = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pando.api.esign.v1.ESignRequestShort,
  /**
   * @param {!proto.pando.api.esign.v1.SignDocumentRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pando.api.esign.v1.ESignRequestShort.deserializeBinary
);


/**
 * @param {!proto.pando.api.esign.v1.SignDocumentRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pando.api.esign.v1.ESignRequestShort)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pando.api.esign.v1.ESignRequestShort>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pando.api.esign.v1.ESignServiceClient.prototype.execOptInDocument =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pando.api.esign.v1.ESignService/ExecOptInDocument',
      request,
      metadata || {},
      methodDescriptor_ESignService_ExecOptInDocument,
      callback);
};


/**
 * @param {!proto.pando.api.esign.v1.SignDocumentRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pando.api.esign.v1.ESignRequestShort>}
 *     Promise that resolves to the response
 */
proto.pando.api.esign.v1.ESignServicePromiseClient.prototype.execOptInDocument =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pando.api.esign.v1.ESignService/ExecOptInDocument',
      request,
      metadata || {},
      methodDescriptor_ESignService_ExecOptInDocument);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pando.api.esign.v1.SignDocumentRequest,
 *   !proto.pando.api.esign.v1.ESignRequestShort>}
 */
const methodDescriptor_ESignService_ExecOptOutDocument = new grpc.web.MethodDescriptor(
  '/pando.api.esign.v1.ESignService/ExecOptOutDocument',
  grpc.web.MethodType.UNARY,
  proto.pando.api.esign.v1.SignDocumentRequest,
  proto.pando.api.esign.v1.ESignRequestShort,
  /**
   * @param {!proto.pando.api.esign.v1.SignDocumentRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pando.api.esign.v1.ESignRequestShort.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pando.api.esign.v1.SignDocumentRequest,
 *   !proto.pando.api.esign.v1.ESignRequestShort>}
 */
const methodInfo_ESignService_ExecOptOutDocument = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pando.api.esign.v1.ESignRequestShort,
  /**
   * @param {!proto.pando.api.esign.v1.SignDocumentRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pando.api.esign.v1.ESignRequestShort.deserializeBinary
);


/**
 * @param {!proto.pando.api.esign.v1.SignDocumentRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pando.api.esign.v1.ESignRequestShort)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pando.api.esign.v1.ESignRequestShort>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pando.api.esign.v1.ESignServiceClient.prototype.execOptOutDocument =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pando.api.esign.v1.ESignService/ExecOptOutDocument',
      request,
      metadata || {},
      methodDescriptor_ESignService_ExecOptOutDocument,
      callback);
};


/**
 * @param {!proto.pando.api.esign.v1.SignDocumentRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pando.api.esign.v1.ESignRequestShort>}
 *     Promise that resolves to the response
 */
proto.pando.api.esign.v1.ESignServicePromiseClient.prototype.execOptOutDocument =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pando.api.esign.v1.ESignService/ExecOptOutDocument',
      request,
      metadata || {},
      methodDescriptor_ESignService_ExecOptOutDocument);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pando.api.esign.v1.ExecAddSignatoryOwnerRequest,
 *   !proto.pando.api.Empty>}
 */
const methodDescriptor_ESignService_ExecAddSignatoryOwner = new grpc.web.MethodDescriptor(
  '/pando.api.esign.v1.ESignService/ExecAddSignatoryOwner',
  grpc.web.MethodType.UNARY,
  proto.pando.api.esign.v1.ExecAddSignatoryOwnerRequest,
  pando_api_shared_pb.Empty,
  /**
   * @param {!proto.pando.api.esign.v1.ExecAddSignatoryOwnerRequest} request
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
 *   !proto.pando.api.esign.v1.ExecAddSignatoryOwnerRequest,
 *   !proto.pando.api.Empty>}
 */
const methodInfo_ESignService_ExecAddSignatoryOwner = new grpc.web.AbstractClientBase.MethodInfo(
  pando_api_shared_pb.Empty,
  /**
   * @param {!proto.pando.api.esign.v1.ExecAddSignatoryOwnerRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_shared_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.pando.api.esign.v1.ExecAddSignatoryOwnerRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pando.api.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pando.api.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pando.api.esign.v1.ESignServiceClient.prototype.execAddSignatoryOwner =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pando.api.esign.v1.ESignService/ExecAddSignatoryOwner',
      request,
      metadata || {},
      methodDescriptor_ESignService_ExecAddSignatoryOwner,
      callback);
};


/**
 * @param {!proto.pando.api.esign.v1.ExecAddSignatoryOwnerRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pando.api.Empty>}
 *     Promise that resolves to the response
 */
proto.pando.api.esign.v1.ESignServicePromiseClient.prototype.execAddSignatoryOwner =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pando.api.esign.v1.ESignService/ExecAddSignatoryOwner',
      request,
      metadata || {},
      methodDescriptor_ESignService_ExecAddSignatoryOwner);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pando.api.esign.v1.ExecRemoveSignatoryOwnerRequest,
 *   !proto.pando.api.Empty>}
 */
const methodDescriptor_ESignService_ExecRemoveSignatoryOwner = new grpc.web.MethodDescriptor(
  '/pando.api.esign.v1.ESignService/ExecRemoveSignatoryOwner',
  grpc.web.MethodType.UNARY,
  proto.pando.api.esign.v1.ExecRemoveSignatoryOwnerRequest,
  pando_api_shared_pb.Empty,
  /**
   * @param {!proto.pando.api.esign.v1.ExecRemoveSignatoryOwnerRequest} request
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
 *   !proto.pando.api.esign.v1.ExecRemoveSignatoryOwnerRequest,
 *   !proto.pando.api.Empty>}
 */
const methodInfo_ESignService_ExecRemoveSignatoryOwner = new grpc.web.AbstractClientBase.MethodInfo(
  pando_api_shared_pb.Empty,
  /**
   * @param {!proto.pando.api.esign.v1.ExecRemoveSignatoryOwnerRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_shared_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.pando.api.esign.v1.ExecRemoveSignatoryOwnerRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pando.api.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pando.api.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pando.api.esign.v1.ESignServiceClient.prototype.execRemoveSignatoryOwner =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pando.api.esign.v1.ESignService/ExecRemoveSignatoryOwner',
      request,
      metadata || {},
      methodDescriptor_ESignService_ExecRemoveSignatoryOwner,
      callback);
};


/**
 * @param {!proto.pando.api.esign.v1.ExecRemoveSignatoryOwnerRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pando.api.Empty>}
 *     Promise that resolves to the response
 */
proto.pando.api.esign.v1.ESignServicePromiseClient.prototype.execRemoveSignatoryOwner =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pando.api.esign.v1.ESignService/ExecRemoveSignatoryOwner',
      request,
      metadata || {},
      methodDescriptor_ESignService_ExecRemoveSignatoryOwner);
};


module.exports = proto.pando.api.esign.v1;

