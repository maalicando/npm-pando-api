/**
 * @fileoverview gRPC-Web generated client stub for pando.api.canvassing.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js')

var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js')

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js')

var pando_api_extensions_pb = require('../../../../pando/api/extensions_pb.js')

var pando_api_shared_pb = require('../../../../pando/api/shared_pb.js')
const proto = {};
proto.pando = {};
proto.pando.api = {};
proto.pando.api.canvassing = {};
proto.pando.api.canvassing.v1 = require('./canvassing_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.pando.api.canvassing.v1.CanvassingServiceClient =
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
proto.pando.api.canvassing.v1.CanvassingServicePromiseClient =
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
 *   !proto.pando.api.canvassing.v1.CreateAreaRequest,
 *   !proto.pando.api.canvassing.v1.Area>}
 */
const methodDescriptor_CanvassingService_CreateArea = new grpc.web.MethodDescriptor(
  '/pando.api.canvassing.v1.CanvassingService/CreateArea',
  grpc.web.MethodType.UNARY,
  proto.pando.api.canvassing.v1.CreateAreaRequest,
  proto.pando.api.canvassing.v1.Area,
  /**
   * @param {!proto.pando.api.canvassing.v1.CreateAreaRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pando.api.canvassing.v1.Area.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pando.api.canvassing.v1.CreateAreaRequest,
 *   !proto.pando.api.canvassing.v1.Area>}
 */
const methodInfo_CanvassingService_CreateArea = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pando.api.canvassing.v1.Area,
  /**
   * @param {!proto.pando.api.canvassing.v1.CreateAreaRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pando.api.canvassing.v1.Area.deserializeBinary
);


/**
 * @param {!proto.pando.api.canvassing.v1.CreateAreaRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pando.api.canvassing.v1.Area)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pando.api.canvassing.v1.Area>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pando.api.canvassing.v1.CanvassingServiceClient.prototype.createArea =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pando.api.canvassing.v1.CanvassingService/CreateArea',
      request,
      metadata || {},
      methodDescriptor_CanvassingService_CreateArea,
      callback);
};


/**
 * @param {!proto.pando.api.canvassing.v1.CreateAreaRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pando.api.canvassing.v1.Area>}
 *     Promise that resolves to the response
 */
proto.pando.api.canvassing.v1.CanvassingServicePromiseClient.prototype.createArea =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pando.api.canvassing.v1.CanvassingService/CreateArea',
      request,
      metadata || {},
      methodDescriptor_CanvassingService_CreateArea);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pando.api.canvassing.v1.AreaIdRequest,
 *   !proto.pando.api.Empty>}
 */
const methodDescriptor_CanvassingService_DeleteArea = new grpc.web.MethodDescriptor(
  '/pando.api.canvassing.v1.CanvassingService/DeleteArea',
  grpc.web.MethodType.UNARY,
  proto.pando.api.canvassing.v1.AreaIdRequest,
  pando_api_shared_pb.Empty,
  /**
   * @param {!proto.pando.api.canvassing.v1.AreaIdRequest} request
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
 *   !proto.pando.api.canvassing.v1.AreaIdRequest,
 *   !proto.pando.api.Empty>}
 */
const methodInfo_CanvassingService_DeleteArea = new grpc.web.AbstractClientBase.MethodInfo(
  pando_api_shared_pb.Empty,
  /**
   * @param {!proto.pando.api.canvassing.v1.AreaIdRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_shared_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.pando.api.canvassing.v1.AreaIdRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pando.api.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pando.api.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pando.api.canvassing.v1.CanvassingServiceClient.prototype.deleteArea =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pando.api.canvassing.v1.CanvassingService/DeleteArea',
      request,
      metadata || {},
      methodDescriptor_CanvassingService_DeleteArea,
      callback);
};


/**
 * @param {!proto.pando.api.canvassing.v1.AreaIdRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pando.api.Empty>}
 *     Promise that resolves to the response
 */
proto.pando.api.canvassing.v1.CanvassingServicePromiseClient.prototype.deleteArea =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pando.api.canvassing.v1.CanvassingService/DeleteArea',
      request,
      metadata || {},
      methodDescriptor_CanvassingService_DeleteArea);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pando.api.canvassing.v1.AreaIdRequest,
 *   !proto.pando.api.canvassing.v1.Area>}
 */
const methodDescriptor_CanvassingService_GetArea = new grpc.web.MethodDescriptor(
  '/pando.api.canvassing.v1.CanvassingService/GetArea',
  grpc.web.MethodType.UNARY,
  proto.pando.api.canvassing.v1.AreaIdRequest,
  proto.pando.api.canvassing.v1.Area,
  /**
   * @param {!proto.pando.api.canvassing.v1.AreaIdRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pando.api.canvassing.v1.Area.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pando.api.canvassing.v1.AreaIdRequest,
 *   !proto.pando.api.canvassing.v1.Area>}
 */
const methodInfo_CanvassingService_GetArea = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pando.api.canvassing.v1.Area,
  /**
   * @param {!proto.pando.api.canvassing.v1.AreaIdRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pando.api.canvassing.v1.Area.deserializeBinary
);


/**
 * @param {!proto.pando.api.canvassing.v1.AreaIdRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pando.api.canvassing.v1.Area)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pando.api.canvassing.v1.Area>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pando.api.canvassing.v1.CanvassingServiceClient.prototype.getArea =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pando.api.canvassing.v1.CanvassingService/GetArea',
      request,
      metadata || {},
      methodDescriptor_CanvassingService_GetArea,
      callback);
};


/**
 * @param {!proto.pando.api.canvassing.v1.AreaIdRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pando.api.canvassing.v1.Area>}
 *     Promise that resolves to the response
 */
proto.pando.api.canvassing.v1.CanvassingServicePromiseClient.prototype.getArea =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pando.api.canvassing.v1.CanvassingService/GetArea',
      request,
      metadata || {},
      methodDescriptor_CanvassingService_GetArea);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pando.api.canvassing.v1.UpdateAreaRequest,
 *   !proto.pando.api.canvassing.v1.Area>}
 */
const methodDescriptor_CanvassingService_UpdateArea = new grpc.web.MethodDescriptor(
  '/pando.api.canvassing.v1.CanvassingService/UpdateArea',
  grpc.web.MethodType.UNARY,
  proto.pando.api.canvassing.v1.UpdateAreaRequest,
  proto.pando.api.canvassing.v1.Area,
  /**
   * @param {!proto.pando.api.canvassing.v1.UpdateAreaRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pando.api.canvassing.v1.Area.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pando.api.canvassing.v1.UpdateAreaRequest,
 *   !proto.pando.api.canvassing.v1.Area>}
 */
const methodInfo_CanvassingService_UpdateArea = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pando.api.canvassing.v1.Area,
  /**
   * @param {!proto.pando.api.canvassing.v1.UpdateAreaRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pando.api.canvassing.v1.Area.deserializeBinary
);


/**
 * @param {!proto.pando.api.canvassing.v1.UpdateAreaRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pando.api.canvassing.v1.Area)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pando.api.canvassing.v1.Area>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pando.api.canvassing.v1.CanvassingServiceClient.prototype.updateArea =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pando.api.canvassing.v1.CanvassingService/UpdateArea',
      request,
      metadata || {},
      methodDescriptor_CanvassingService_UpdateArea,
      callback);
};


/**
 * @param {!proto.pando.api.canvassing.v1.UpdateAreaRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pando.api.canvassing.v1.Area>}
 *     Promise that resolves to the response
 */
proto.pando.api.canvassing.v1.CanvassingServicePromiseClient.prototype.updateArea =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pando.api.canvassing.v1.CanvassingService/UpdateArea',
      request,
      metadata || {},
      methodDescriptor_CanvassingService_UpdateArea);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pando.api.canvassing.v1.AssignMemberRequest,
 *   !proto.pando.api.canvassing.v1.AreaMember>}
 */
const methodDescriptor_CanvassingService_ExecAssignAreaMember = new grpc.web.MethodDescriptor(
  '/pando.api.canvassing.v1.CanvassingService/ExecAssignAreaMember',
  grpc.web.MethodType.UNARY,
  proto.pando.api.canvassing.v1.AssignMemberRequest,
  proto.pando.api.canvassing.v1.AreaMember,
  /**
   * @param {!proto.pando.api.canvassing.v1.AssignMemberRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pando.api.canvassing.v1.AreaMember.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pando.api.canvassing.v1.AssignMemberRequest,
 *   !proto.pando.api.canvassing.v1.AreaMember>}
 */
const methodInfo_CanvassingService_ExecAssignAreaMember = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pando.api.canvassing.v1.AreaMember,
  /**
   * @param {!proto.pando.api.canvassing.v1.AssignMemberRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pando.api.canvassing.v1.AreaMember.deserializeBinary
);


/**
 * @param {!proto.pando.api.canvassing.v1.AssignMemberRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pando.api.canvassing.v1.AreaMember)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pando.api.canvassing.v1.AreaMember>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pando.api.canvassing.v1.CanvassingServiceClient.prototype.execAssignAreaMember =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pando.api.canvassing.v1.CanvassingService/ExecAssignAreaMember',
      request,
      metadata || {},
      methodDescriptor_CanvassingService_ExecAssignAreaMember,
      callback);
};


/**
 * @param {!proto.pando.api.canvassing.v1.AssignMemberRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pando.api.canvassing.v1.AreaMember>}
 *     Promise that resolves to the response
 */
proto.pando.api.canvassing.v1.CanvassingServicePromiseClient.prototype.execAssignAreaMember =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pando.api.canvassing.v1.CanvassingService/ExecAssignAreaMember',
      request,
      metadata || {},
      methodDescriptor_CanvassingService_ExecAssignAreaMember);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pando.api.canvassing.v1.AssignMemberRequest,
 *   !proto.pando.api.Empty>}
 */
const methodDescriptor_CanvassingService_ExecUnassignAreaMember = new grpc.web.MethodDescriptor(
  '/pando.api.canvassing.v1.CanvassingService/ExecUnassignAreaMember',
  grpc.web.MethodType.UNARY,
  proto.pando.api.canvassing.v1.AssignMemberRequest,
  pando_api_shared_pb.Empty,
  /**
   * @param {!proto.pando.api.canvassing.v1.AssignMemberRequest} request
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
 *   !proto.pando.api.canvassing.v1.AssignMemberRequest,
 *   !proto.pando.api.Empty>}
 */
const methodInfo_CanvassingService_ExecUnassignAreaMember = new grpc.web.AbstractClientBase.MethodInfo(
  pando_api_shared_pb.Empty,
  /**
   * @param {!proto.pando.api.canvassing.v1.AssignMemberRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_shared_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.pando.api.canvassing.v1.AssignMemberRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pando.api.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pando.api.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pando.api.canvassing.v1.CanvassingServiceClient.prototype.execUnassignAreaMember =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pando.api.canvassing.v1.CanvassingService/ExecUnassignAreaMember',
      request,
      metadata || {},
      methodDescriptor_CanvassingService_ExecUnassignAreaMember,
      callback);
};


/**
 * @param {!proto.pando.api.canvassing.v1.AssignMemberRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pando.api.Empty>}
 *     Promise that resolves to the response
 */
proto.pando.api.canvassing.v1.CanvassingServicePromiseClient.prototype.execUnassignAreaMember =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pando.api.canvassing.v1.CanvassingService/ExecUnassignAreaMember',
      request,
      metadata || {},
      methodDescriptor_CanvassingService_ExecUnassignAreaMember);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pando.api.canvassing.v1.CreateAreaNoteRequest,
 *   !proto.pando.api.canvassing.v1.AreaNote>}
 */
const methodDescriptor_CanvassingService_CreateAreaNote = new grpc.web.MethodDescriptor(
  '/pando.api.canvassing.v1.CanvassingService/CreateAreaNote',
  grpc.web.MethodType.UNARY,
  proto.pando.api.canvassing.v1.CreateAreaNoteRequest,
  proto.pando.api.canvassing.v1.AreaNote,
  /**
   * @param {!proto.pando.api.canvassing.v1.CreateAreaNoteRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pando.api.canvassing.v1.AreaNote.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pando.api.canvassing.v1.CreateAreaNoteRequest,
 *   !proto.pando.api.canvassing.v1.AreaNote>}
 */
const methodInfo_CanvassingService_CreateAreaNote = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pando.api.canvassing.v1.AreaNote,
  /**
   * @param {!proto.pando.api.canvassing.v1.CreateAreaNoteRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pando.api.canvassing.v1.AreaNote.deserializeBinary
);


/**
 * @param {!proto.pando.api.canvassing.v1.CreateAreaNoteRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pando.api.canvassing.v1.AreaNote)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pando.api.canvassing.v1.AreaNote>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pando.api.canvassing.v1.CanvassingServiceClient.prototype.createAreaNote =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pando.api.canvassing.v1.CanvassingService/CreateAreaNote',
      request,
      metadata || {},
      methodDescriptor_CanvassingService_CreateAreaNote,
      callback);
};


/**
 * @param {!proto.pando.api.canvassing.v1.CreateAreaNoteRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pando.api.canvassing.v1.AreaNote>}
 *     Promise that resolves to the response
 */
proto.pando.api.canvassing.v1.CanvassingServicePromiseClient.prototype.createAreaNote =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pando.api.canvassing.v1.CanvassingService/CreateAreaNote',
      request,
      metadata || {},
      methodDescriptor_CanvassingService_CreateAreaNote);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pando.api.canvassing.v1.AreaIdRequest,
 *   !proto.pando.api.canvassing.v1.AreaNoteList>}
 */
const methodDescriptor_CanvassingService_GetAreaNoteList = new grpc.web.MethodDescriptor(
  '/pando.api.canvassing.v1.CanvassingService/GetAreaNoteList',
  grpc.web.MethodType.UNARY,
  proto.pando.api.canvassing.v1.AreaIdRequest,
  proto.pando.api.canvassing.v1.AreaNoteList,
  /**
   * @param {!proto.pando.api.canvassing.v1.AreaIdRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pando.api.canvassing.v1.AreaNoteList.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pando.api.canvassing.v1.AreaIdRequest,
 *   !proto.pando.api.canvassing.v1.AreaNoteList>}
 */
const methodInfo_CanvassingService_GetAreaNoteList = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pando.api.canvassing.v1.AreaNoteList,
  /**
   * @param {!proto.pando.api.canvassing.v1.AreaIdRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pando.api.canvassing.v1.AreaNoteList.deserializeBinary
);


/**
 * @param {!proto.pando.api.canvassing.v1.AreaIdRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pando.api.canvassing.v1.AreaNoteList)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pando.api.canvassing.v1.AreaNoteList>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pando.api.canvassing.v1.CanvassingServiceClient.prototype.getAreaNoteList =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pando.api.canvassing.v1.CanvassingService/GetAreaNoteList',
      request,
      metadata || {},
      methodDescriptor_CanvassingService_GetAreaNoteList,
      callback);
};


/**
 * @param {!proto.pando.api.canvassing.v1.AreaIdRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pando.api.canvassing.v1.AreaNoteList>}
 *     Promise that resolves to the response
 */
proto.pando.api.canvassing.v1.CanvassingServicePromiseClient.prototype.getAreaNoteList =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pando.api.canvassing.v1.CanvassingService/GetAreaNoteList',
      request,
      metadata || {},
      methodDescriptor_CanvassingService_GetAreaNoteList);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pando.api.canvassing.v1.NoteIdRequest,
 *   !proto.pando.api.Empty>}
 */
const methodDescriptor_CanvassingService_DeleteAreaNote = new grpc.web.MethodDescriptor(
  '/pando.api.canvassing.v1.CanvassingService/DeleteAreaNote',
  grpc.web.MethodType.UNARY,
  proto.pando.api.canvassing.v1.NoteIdRequest,
  pando_api_shared_pb.Empty,
  /**
   * @param {!proto.pando.api.canvassing.v1.NoteIdRequest} request
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
 *   !proto.pando.api.canvassing.v1.NoteIdRequest,
 *   !proto.pando.api.Empty>}
 */
const methodInfo_CanvassingService_DeleteAreaNote = new grpc.web.AbstractClientBase.MethodInfo(
  pando_api_shared_pb.Empty,
  /**
   * @param {!proto.pando.api.canvassing.v1.NoteIdRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_shared_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.pando.api.canvassing.v1.NoteIdRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pando.api.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pando.api.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pando.api.canvassing.v1.CanvassingServiceClient.prototype.deleteAreaNote =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pando.api.canvassing.v1.CanvassingService/DeleteAreaNote',
      request,
      metadata || {},
      methodDescriptor_CanvassingService_DeleteAreaNote,
      callback);
};


/**
 * @param {!proto.pando.api.canvassing.v1.NoteIdRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pando.api.Empty>}
 *     Promise that resolves to the response
 */
proto.pando.api.canvassing.v1.CanvassingServicePromiseClient.prototype.deleteAreaNote =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pando.api.canvassing.v1.CanvassingService/DeleteAreaNote',
      request,
      metadata || {},
      methodDescriptor_CanvassingService_DeleteAreaNote);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pando.api.canvassing.v1.CreateLeadRequest,
 *   !proto.pando.api.canvassing.v1.Lead>}
 */
const methodDescriptor_CanvassingService_CreateLead = new grpc.web.MethodDescriptor(
  '/pando.api.canvassing.v1.CanvassingService/CreateLead',
  grpc.web.MethodType.UNARY,
  proto.pando.api.canvassing.v1.CreateLeadRequest,
  proto.pando.api.canvassing.v1.Lead,
  /**
   * @param {!proto.pando.api.canvassing.v1.CreateLeadRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pando.api.canvassing.v1.Lead.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pando.api.canvassing.v1.CreateLeadRequest,
 *   !proto.pando.api.canvassing.v1.Lead>}
 */
const methodInfo_CanvassingService_CreateLead = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pando.api.canvassing.v1.Lead,
  /**
   * @param {!proto.pando.api.canvassing.v1.CreateLeadRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pando.api.canvassing.v1.Lead.deserializeBinary
);


/**
 * @param {!proto.pando.api.canvassing.v1.CreateLeadRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pando.api.canvassing.v1.Lead)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pando.api.canvassing.v1.Lead>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pando.api.canvassing.v1.CanvassingServiceClient.prototype.createLead =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pando.api.canvassing.v1.CanvassingService/CreateLead',
      request,
      metadata || {},
      methodDescriptor_CanvassingService_CreateLead,
      callback);
};


/**
 * @param {!proto.pando.api.canvassing.v1.CreateLeadRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pando.api.canvassing.v1.Lead>}
 *     Promise that resolves to the response
 */
proto.pando.api.canvassing.v1.CanvassingServicePromiseClient.prototype.createLead =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pando.api.canvassing.v1.CanvassingService/CreateLead',
      request,
      metadata || {},
      methodDescriptor_CanvassingService_CreateLead);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pando.api.canvassing.v1.UpdateLeadRequest,
 *   !proto.pando.api.canvassing.v1.Lead>}
 */
const methodDescriptor_CanvassingService_UpdateLead = new grpc.web.MethodDescriptor(
  '/pando.api.canvassing.v1.CanvassingService/UpdateLead',
  grpc.web.MethodType.UNARY,
  proto.pando.api.canvassing.v1.UpdateLeadRequest,
  proto.pando.api.canvassing.v1.Lead,
  /**
   * @param {!proto.pando.api.canvassing.v1.UpdateLeadRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pando.api.canvassing.v1.Lead.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pando.api.canvassing.v1.UpdateLeadRequest,
 *   !proto.pando.api.canvassing.v1.Lead>}
 */
const methodInfo_CanvassingService_UpdateLead = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pando.api.canvassing.v1.Lead,
  /**
   * @param {!proto.pando.api.canvassing.v1.UpdateLeadRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pando.api.canvassing.v1.Lead.deserializeBinary
);


/**
 * @param {!proto.pando.api.canvassing.v1.UpdateLeadRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pando.api.canvassing.v1.Lead)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pando.api.canvassing.v1.Lead>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pando.api.canvassing.v1.CanvassingServiceClient.prototype.updateLead =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pando.api.canvassing.v1.CanvassingService/UpdateLead',
      request,
      metadata || {},
      methodDescriptor_CanvassingService_UpdateLead,
      callback);
};


/**
 * @param {!proto.pando.api.canvassing.v1.UpdateLeadRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pando.api.canvassing.v1.Lead>}
 *     Promise that resolves to the response
 */
proto.pando.api.canvassing.v1.CanvassingServicePromiseClient.prototype.updateLead =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pando.api.canvassing.v1.CanvassingService/UpdateLead',
      request,
      metadata || {},
      methodDescriptor_CanvassingService_UpdateLead);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pando.api.canvassing.v1.LeadIdRequest,
 *   !proto.pando.api.canvassing.v1.Lead>}
 */
const methodDescriptor_CanvassingService_GetLead = new grpc.web.MethodDescriptor(
  '/pando.api.canvassing.v1.CanvassingService/GetLead',
  grpc.web.MethodType.UNARY,
  proto.pando.api.canvassing.v1.LeadIdRequest,
  proto.pando.api.canvassing.v1.Lead,
  /**
   * @param {!proto.pando.api.canvassing.v1.LeadIdRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pando.api.canvassing.v1.Lead.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pando.api.canvassing.v1.LeadIdRequest,
 *   !proto.pando.api.canvassing.v1.Lead>}
 */
const methodInfo_CanvassingService_GetLead = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pando.api.canvassing.v1.Lead,
  /**
   * @param {!proto.pando.api.canvassing.v1.LeadIdRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pando.api.canvassing.v1.Lead.deserializeBinary
);


/**
 * @param {!proto.pando.api.canvassing.v1.LeadIdRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pando.api.canvassing.v1.Lead)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pando.api.canvassing.v1.Lead>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pando.api.canvassing.v1.CanvassingServiceClient.prototype.getLead =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pando.api.canvassing.v1.CanvassingService/GetLead',
      request,
      metadata || {},
      methodDescriptor_CanvassingService_GetLead,
      callback);
};


/**
 * @param {!proto.pando.api.canvassing.v1.LeadIdRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pando.api.canvassing.v1.Lead>}
 *     Promise that resolves to the response
 */
proto.pando.api.canvassing.v1.CanvassingServicePromiseClient.prototype.getLead =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pando.api.canvassing.v1.CanvassingService/GetLead',
      request,
      metadata || {},
      methodDescriptor_CanvassingService_GetLead);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pando.api.canvassing.v1.LeadIdRequest,
 *   !proto.pando.api.Empty>}
 */
const methodDescriptor_CanvassingService_DeleteLead = new grpc.web.MethodDescriptor(
  '/pando.api.canvassing.v1.CanvassingService/DeleteLead',
  grpc.web.MethodType.UNARY,
  proto.pando.api.canvassing.v1.LeadIdRequest,
  pando_api_shared_pb.Empty,
  /**
   * @param {!proto.pando.api.canvassing.v1.LeadIdRequest} request
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
 *   !proto.pando.api.canvassing.v1.LeadIdRequest,
 *   !proto.pando.api.Empty>}
 */
const methodInfo_CanvassingService_DeleteLead = new grpc.web.AbstractClientBase.MethodInfo(
  pando_api_shared_pb.Empty,
  /**
   * @param {!proto.pando.api.canvassing.v1.LeadIdRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_shared_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.pando.api.canvassing.v1.LeadIdRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pando.api.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pando.api.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pando.api.canvassing.v1.CanvassingServiceClient.prototype.deleteLead =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pando.api.canvassing.v1.CanvassingService/DeleteLead',
      request,
      metadata || {},
      methodDescriptor_CanvassingService_DeleteLead,
      callback);
};


/**
 * @param {!proto.pando.api.canvassing.v1.LeadIdRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pando.api.Empty>}
 *     Promise that resolves to the response
 */
proto.pando.api.canvassing.v1.CanvassingServicePromiseClient.prototype.deleteLead =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pando.api.canvassing.v1.CanvassingService/DeleteLead',
      request,
      metadata || {},
      methodDescriptor_CanvassingService_DeleteLead);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pando.api.canvassing.v1.SetLeadTypeRequest,
 *   !proto.pando.api.canvassing.v1.Lead>}
 */
const methodDescriptor_CanvassingService_ExecSetLeadType = new grpc.web.MethodDescriptor(
  '/pando.api.canvassing.v1.CanvassingService/ExecSetLeadType',
  grpc.web.MethodType.UNARY,
  proto.pando.api.canvassing.v1.SetLeadTypeRequest,
  proto.pando.api.canvassing.v1.Lead,
  /**
   * @param {!proto.pando.api.canvassing.v1.SetLeadTypeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pando.api.canvassing.v1.Lead.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pando.api.canvassing.v1.SetLeadTypeRequest,
 *   !proto.pando.api.canvassing.v1.Lead>}
 */
const methodInfo_CanvassingService_ExecSetLeadType = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pando.api.canvassing.v1.Lead,
  /**
   * @param {!proto.pando.api.canvassing.v1.SetLeadTypeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pando.api.canvassing.v1.Lead.deserializeBinary
);


/**
 * @param {!proto.pando.api.canvassing.v1.SetLeadTypeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pando.api.canvassing.v1.Lead)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pando.api.canvassing.v1.Lead>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pando.api.canvassing.v1.CanvassingServiceClient.prototype.execSetLeadType =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pando.api.canvassing.v1.CanvassingService/ExecSetLeadType',
      request,
      metadata || {},
      methodDescriptor_CanvassingService_ExecSetLeadType,
      callback);
};


/**
 * @param {!proto.pando.api.canvassing.v1.SetLeadTypeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pando.api.canvassing.v1.Lead>}
 *     Promise that resolves to the response
 */
proto.pando.api.canvassing.v1.CanvassingServicePromiseClient.prototype.execSetLeadType =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pando.api.canvassing.v1.CanvassingService/ExecSetLeadType',
      request,
      metadata || {},
      methodDescriptor_CanvassingService_ExecSetLeadType);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pando.api.canvassing.v1.CreateLeadNoteRequest,
 *   !proto.pando.api.canvassing.v1.LeadNote>}
 */
const methodDescriptor_CanvassingService_CreateLeadNote = new grpc.web.MethodDescriptor(
  '/pando.api.canvassing.v1.CanvassingService/CreateLeadNote',
  grpc.web.MethodType.UNARY,
  proto.pando.api.canvassing.v1.CreateLeadNoteRequest,
  proto.pando.api.canvassing.v1.LeadNote,
  /**
   * @param {!proto.pando.api.canvassing.v1.CreateLeadNoteRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pando.api.canvassing.v1.LeadNote.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pando.api.canvassing.v1.CreateLeadNoteRequest,
 *   !proto.pando.api.canvassing.v1.LeadNote>}
 */
const methodInfo_CanvassingService_CreateLeadNote = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pando.api.canvassing.v1.LeadNote,
  /**
   * @param {!proto.pando.api.canvassing.v1.CreateLeadNoteRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pando.api.canvassing.v1.LeadNote.deserializeBinary
);


/**
 * @param {!proto.pando.api.canvassing.v1.CreateLeadNoteRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pando.api.canvassing.v1.LeadNote)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pando.api.canvassing.v1.LeadNote>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pando.api.canvassing.v1.CanvassingServiceClient.prototype.createLeadNote =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pando.api.canvassing.v1.CanvassingService/CreateLeadNote',
      request,
      metadata || {},
      methodDescriptor_CanvassingService_CreateLeadNote,
      callback);
};


/**
 * @param {!proto.pando.api.canvassing.v1.CreateLeadNoteRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pando.api.canvassing.v1.LeadNote>}
 *     Promise that resolves to the response
 */
proto.pando.api.canvassing.v1.CanvassingServicePromiseClient.prototype.createLeadNote =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pando.api.canvassing.v1.CanvassingService/CreateLeadNote',
      request,
      metadata || {},
      methodDescriptor_CanvassingService_CreateLeadNote);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pando.api.canvassing.v1.LeadNoteIdRequest,
 *   !proto.pando.api.Empty>}
 */
const methodDescriptor_CanvassingService_DeleteLeadNote = new grpc.web.MethodDescriptor(
  '/pando.api.canvassing.v1.CanvassingService/DeleteLeadNote',
  grpc.web.MethodType.UNARY,
  proto.pando.api.canvassing.v1.LeadNoteIdRequest,
  pando_api_shared_pb.Empty,
  /**
   * @param {!proto.pando.api.canvassing.v1.LeadNoteIdRequest} request
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
 *   !proto.pando.api.canvassing.v1.LeadNoteIdRequest,
 *   !proto.pando.api.Empty>}
 */
const methodInfo_CanvassingService_DeleteLeadNote = new grpc.web.AbstractClientBase.MethodInfo(
  pando_api_shared_pb.Empty,
  /**
   * @param {!proto.pando.api.canvassing.v1.LeadNoteIdRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_shared_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.pando.api.canvassing.v1.LeadNoteIdRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pando.api.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pando.api.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pando.api.canvassing.v1.CanvassingServiceClient.prototype.deleteLeadNote =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pando.api.canvassing.v1.CanvassingService/DeleteLeadNote',
      request,
      metadata || {},
      methodDescriptor_CanvassingService_DeleteLeadNote,
      callback);
};


/**
 * @param {!proto.pando.api.canvassing.v1.LeadNoteIdRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pando.api.Empty>}
 *     Promise that resolves to the response
 */
proto.pando.api.canvassing.v1.CanvassingServicePromiseClient.prototype.deleteLeadNote =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pando.api.canvassing.v1.CanvassingService/DeleteLeadNote',
      request,
      metadata || {},
      methodDescriptor_CanvassingService_DeleteLeadNote);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pando.api.canvassing.v1.LeadIdRequest,
 *   !proto.pando.api.canvassing.v1.LeadNoteList>}
 */
const methodDescriptor_CanvassingService_GetLeadNoteList = new grpc.web.MethodDescriptor(
  '/pando.api.canvassing.v1.CanvassingService/GetLeadNoteList',
  grpc.web.MethodType.UNARY,
  proto.pando.api.canvassing.v1.LeadIdRequest,
  proto.pando.api.canvassing.v1.LeadNoteList,
  /**
   * @param {!proto.pando.api.canvassing.v1.LeadIdRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pando.api.canvassing.v1.LeadNoteList.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pando.api.canvassing.v1.LeadIdRequest,
 *   !proto.pando.api.canvassing.v1.LeadNoteList>}
 */
const methodInfo_CanvassingService_GetLeadNoteList = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pando.api.canvassing.v1.LeadNoteList,
  /**
   * @param {!proto.pando.api.canvassing.v1.LeadIdRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pando.api.canvassing.v1.LeadNoteList.deserializeBinary
);


/**
 * @param {!proto.pando.api.canvassing.v1.LeadIdRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pando.api.canvassing.v1.LeadNoteList)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pando.api.canvassing.v1.LeadNoteList>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pando.api.canvassing.v1.CanvassingServiceClient.prototype.getLeadNoteList =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pando.api.canvassing.v1.CanvassingService/GetLeadNoteList',
      request,
      metadata || {},
      methodDescriptor_CanvassingService_GetLeadNoteList,
      callback);
};


/**
 * @param {!proto.pando.api.canvassing.v1.LeadIdRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pando.api.canvassing.v1.LeadNoteList>}
 *     Promise that resolves to the response
 */
proto.pando.api.canvassing.v1.CanvassingServicePromiseClient.prototype.getLeadNoteList =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pando.api.canvassing.v1.CanvassingService/GetLeadNoteList',
      request,
      metadata || {},
      methodDescriptor_CanvassingService_GetLeadNoteList);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pando.api.canvassing.v1.CreateLeadTypeRequest,
 *   !proto.pando.api.canvassing.v1.LeadType>}
 */
const methodDescriptor_CanvassingService_CreateLeadType = new grpc.web.MethodDescriptor(
  '/pando.api.canvassing.v1.CanvassingService/CreateLeadType',
  grpc.web.MethodType.UNARY,
  proto.pando.api.canvassing.v1.CreateLeadTypeRequest,
  proto.pando.api.canvassing.v1.LeadType,
  /**
   * @param {!proto.pando.api.canvassing.v1.CreateLeadTypeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pando.api.canvassing.v1.LeadType.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pando.api.canvassing.v1.CreateLeadTypeRequest,
 *   !proto.pando.api.canvassing.v1.LeadType>}
 */
const methodInfo_CanvassingService_CreateLeadType = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pando.api.canvassing.v1.LeadType,
  /**
   * @param {!proto.pando.api.canvassing.v1.CreateLeadTypeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pando.api.canvassing.v1.LeadType.deserializeBinary
);


/**
 * @param {!proto.pando.api.canvassing.v1.CreateLeadTypeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pando.api.canvassing.v1.LeadType)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pando.api.canvassing.v1.LeadType>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pando.api.canvassing.v1.CanvassingServiceClient.prototype.createLeadType =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pando.api.canvassing.v1.CanvassingService/CreateLeadType',
      request,
      metadata || {},
      methodDescriptor_CanvassingService_CreateLeadType,
      callback);
};


/**
 * @param {!proto.pando.api.canvassing.v1.CreateLeadTypeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pando.api.canvassing.v1.LeadType>}
 *     Promise that resolves to the response
 */
proto.pando.api.canvassing.v1.CanvassingServicePromiseClient.prototype.createLeadType =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pando.api.canvassing.v1.CanvassingService/CreateLeadType',
      request,
      metadata || {},
      methodDescriptor_CanvassingService_CreateLeadType);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pando.api.canvassing.v1.LeadTypeIdRequest,
 *   !proto.pando.api.canvassing.v1.LeadType>}
 */
const methodDescriptor_CanvassingService_GetLeadType = new grpc.web.MethodDescriptor(
  '/pando.api.canvassing.v1.CanvassingService/GetLeadType',
  grpc.web.MethodType.UNARY,
  proto.pando.api.canvassing.v1.LeadTypeIdRequest,
  proto.pando.api.canvassing.v1.LeadType,
  /**
   * @param {!proto.pando.api.canvassing.v1.LeadTypeIdRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pando.api.canvassing.v1.LeadType.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pando.api.canvassing.v1.LeadTypeIdRequest,
 *   !proto.pando.api.canvassing.v1.LeadType>}
 */
const methodInfo_CanvassingService_GetLeadType = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pando.api.canvassing.v1.LeadType,
  /**
   * @param {!proto.pando.api.canvassing.v1.LeadTypeIdRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pando.api.canvassing.v1.LeadType.deserializeBinary
);


/**
 * @param {!proto.pando.api.canvassing.v1.LeadTypeIdRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pando.api.canvassing.v1.LeadType)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pando.api.canvassing.v1.LeadType>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pando.api.canvassing.v1.CanvassingServiceClient.prototype.getLeadType =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pando.api.canvassing.v1.CanvassingService/GetLeadType',
      request,
      metadata || {},
      methodDescriptor_CanvassingService_GetLeadType,
      callback);
};


/**
 * @param {!proto.pando.api.canvassing.v1.LeadTypeIdRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pando.api.canvassing.v1.LeadType>}
 *     Promise that resolves to the response
 */
proto.pando.api.canvassing.v1.CanvassingServicePromiseClient.prototype.getLeadType =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pando.api.canvassing.v1.CanvassingService/GetLeadType',
      request,
      metadata || {},
      methodDescriptor_CanvassingService_GetLeadType);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pando.api.canvassing.v1.LeadTypeListRequest,
 *   !proto.pando.api.canvassing.v1.LeadTypeList>}
 */
const methodDescriptor_CanvassingService_GetLeadTypeList = new grpc.web.MethodDescriptor(
  '/pando.api.canvassing.v1.CanvassingService/GetLeadTypeList',
  grpc.web.MethodType.UNARY,
  proto.pando.api.canvassing.v1.LeadTypeListRequest,
  proto.pando.api.canvassing.v1.LeadTypeList,
  /**
   * @param {!proto.pando.api.canvassing.v1.LeadTypeListRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pando.api.canvassing.v1.LeadTypeList.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pando.api.canvassing.v1.LeadTypeListRequest,
 *   !proto.pando.api.canvassing.v1.LeadTypeList>}
 */
const methodInfo_CanvassingService_GetLeadTypeList = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pando.api.canvassing.v1.LeadTypeList,
  /**
   * @param {!proto.pando.api.canvassing.v1.LeadTypeListRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pando.api.canvassing.v1.LeadTypeList.deserializeBinary
);


/**
 * @param {!proto.pando.api.canvassing.v1.LeadTypeListRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pando.api.canvassing.v1.LeadTypeList)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pando.api.canvassing.v1.LeadTypeList>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pando.api.canvassing.v1.CanvassingServiceClient.prototype.getLeadTypeList =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pando.api.canvassing.v1.CanvassingService/GetLeadTypeList',
      request,
      metadata || {},
      methodDescriptor_CanvassingService_GetLeadTypeList,
      callback);
};


/**
 * @param {!proto.pando.api.canvassing.v1.LeadTypeListRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pando.api.canvassing.v1.LeadTypeList>}
 *     Promise that resolves to the response
 */
proto.pando.api.canvassing.v1.CanvassingServicePromiseClient.prototype.getLeadTypeList =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pando.api.canvassing.v1.CanvassingService/GetLeadTypeList',
      request,
      metadata || {},
      methodDescriptor_CanvassingService_GetLeadTypeList);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pando.api.canvassing.v1.UpdateLeadTypeRequest,
 *   !proto.pando.api.canvassing.v1.LeadType>}
 */
const methodDescriptor_CanvassingService_UpdateLeadType = new grpc.web.MethodDescriptor(
  '/pando.api.canvassing.v1.CanvassingService/UpdateLeadType',
  grpc.web.MethodType.UNARY,
  proto.pando.api.canvassing.v1.UpdateLeadTypeRequest,
  proto.pando.api.canvassing.v1.LeadType,
  /**
   * @param {!proto.pando.api.canvassing.v1.UpdateLeadTypeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pando.api.canvassing.v1.LeadType.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pando.api.canvassing.v1.UpdateLeadTypeRequest,
 *   !proto.pando.api.canvassing.v1.LeadType>}
 */
const methodInfo_CanvassingService_UpdateLeadType = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pando.api.canvassing.v1.LeadType,
  /**
   * @param {!proto.pando.api.canvassing.v1.UpdateLeadTypeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pando.api.canvassing.v1.LeadType.deserializeBinary
);


/**
 * @param {!proto.pando.api.canvassing.v1.UpdateLeadTypeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pando.api.canvassing.v1.LeadType)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pando.api.canvassing.v1.LeadType>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pando.api.canvassing.v1.CanvassingServiceClient.prototype.updateLeadType =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pando.api.canvassing.v1.CanvassingService/UpdateLeadType',
      request,
      metadata || {},
      methodDescriptor_CanvassingService_UpdateLeadType,
      callback);
};


/**
 * @param {!proto.pando.api.canvassing.v1.UpdateLeadTypeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pando.api.canvassing.v1.LeadType>}
 *     Promise that resolves to the response
 */
proto.pando.api.canvassing.v1.CanvassingServicePromiseClient.prototype.updateLeadType =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pando.api.canvassing.v1.CanvassingService/UpdateLeadType',
      request,
      metadata || {},
      methodDescriptor_CanvassingService_UpdateLeadType);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pando.api.canvassing.v1.LeadTypeIdRequest,
 *   !proto.pando.api.Empty>}
 */
const methodDescriptor_CanvassingService_DeleteLeadType = new grpc.web.MethodDescriptor(
  '/pando.api.canvassing.v1.CanvassingService/DeleteLeadType',
  grpc.web.MethodType.UNARY,
  proto.pando.api.canvassing.v1.LeadTypeIdRequest,
  pando_api_shared_pb.Empty,
  /**
   * @param {!proto.pando.api.canvassing.v1.LeadTypeIdRequest} request
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
 *   !proto.pando.api.canvassing.v1.LeadTypeIdRequest,
 *   !proto.pando.api.Empty>}
 */
const methodInfo_CanvassingService_DeleteLeadType = new grpc.web.AbstractClientBase.MethodInfo(
  pando_api_shared_pb.Empty,
  /**
   * @param {!proto.pando.api.canvassing.v1.LeadTypeIdRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_shared_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.pando.api.canvassing.v1.LeadTypeIdRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pando.api.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pando.api.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pando.api.canvassing.v1.CanvassingServiceClient.prototype.deleteLeadType =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pando.api.canvassing.v1.CanvassingService/DeleteLeadType',
      request,
      metadata || {},
      methodDescriptor_CanvassingService_DeleteLeadType,
      callback);
};


/**
 * @param {!proto.pando.api.canvassing.v1.LeadTypeIdRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pando.api.Empty>}
 *     Promise that resolves to the response
 */
proto.pando.api.canvassing.v1.CanvassingServicePromiseClient.prototype.deleteLeadType =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pando.api.canvassing.v1.CanvassingService/DeleteLeadType',
      request,
      metadata || {},
      methodDescriptor_CanvassingService_DeleteLeadType);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pando.api.canvassing.v1.BoundsRequest,
 *   !proto.pando.api.canvassing.v1.AreaBoundsResponse>}
 */
const methodDescriptor_CanvassingService_GetAreasWithinBounds = new grpc.web.MethodDescriptor(
  '/pando.api.canvassing.v1.CanvassingService/GetAreasWithinBounds',
  grpc.web.MethodType.UNARY,
  proto.pando.api.canvassing.v1.BoundsRequest,
  proto.pando.api.canvassing.v1.AreaBoundsResponse,
  /**
   * @param {!proto.pando.api.canvassing.v1.BoundsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pando.api.canvassing.v1.AreaBoundsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pando.api.canvassing.v1.BoundsRequest,
 *   !proto.pando.api.canvassing.v1.AreaBoundsResponse>}
 */
const methodInfo_CanvassingService_GetAreasWithinBounds = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pando.api.canvassing.v1.AreaBoundsResponse,
  /**
   * @param {!proto.pando.api.canvassing.v1.BoundsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pando.api.canvassing.v1.AreaBoundsResponse.deserializeBinary
);


/**
 * @param {!proto.pando.api.canvassing.v1.BoundsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pando.api.canvassing.v1.AreaBoundsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pando.api.canvassing.v1.AreaBoundsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pando.api.canvassing.v1.CanvassingServiceClient.prototype.getAreasWithinBounds =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pando.api.canvassing.v1.CanvassingService/GetAreasWithinBounds',
      request,
      metadata || {},
      methodDescriptor_CanvassingService_GetAreasWithinBounds,
      callback);
};


/**
 * @param {!proto.pando.api.canvassing.v1.BoundsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pando.api.canvassing.v1.AreaBoundsResponse>}
 *     Promise that resolves to the response
 */
proto.pando.api.canvassing.v1.CanvassingServicePromiseClient.prototype.getAreasWithinBounds =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pando.api.canvassing.v1.CanvassingService/GetAreasWithinBounds',
      request,
      metadata || {},
      methodDescriptor_CanvassingService_GetAreasWithinBounds);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pando.api.canvassing.v1.BoundsRequest,
 *   !proto.pando.api.canvassing.v1.LeadBoundsResponse>}
 */
const methodDescriptor_CanvassingService_GetLeadsWithinBounds = new grpc.web.MethodDescriptor(
  '/pando.api.canvassing.v1.CanvassingService/GetLeadsWithinBounds',
  grpc.web.MethodType.UNARY,
  proto.pando.api.canvassing.v1.BoundsRequest,
  proto.pando.api.canvassing.v1.LeadBoundsResponse,
  /**
   * @param {!proto.pando.api.canvassing.v1.BoundsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pando.api.canvassing.v1.LeadBoundsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pando.api.canvassing.v1.BoundsRequest,
 *   !proto.pando.api.canvassing.v1.LeadBoundsResponse>}
 */
const methodInfo_CanvassingService_GetLeadsWithinBounds = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pando.api.canvassing.v1.LeadBoundsResponse,
  /**
   * @param {!proto.pando.api.canvassing.v1.BoundsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pando.api.canvassing.v1.LeadBoundsResponse.deserializeBinary
);


/**
 * @param {!proto.pando.api.canvassing.v1.BoundsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pando.api.canvassing.v1.LeadBoundsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pando.api.canvassing.v1.LeadBoundsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pando.api.canvassing.v1.CanvassingServiceClient.prototype.getLeadsWithinBounds =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pando.api.canvassing.v1.CanvassingService/GetLeadsWithinBounds',
      request,
      metadata || {},
      methodDescriptor_CanvassingService_GetLeadsWithinBounds,
      callback);
};


/**
 * @param {!proto.pando.api.canvassing.v1.BoundsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pando.api.canvassing.v1.LeadBoundsResponse>}
 *     Promise that resolves to the response
 */
proto.pando.api.canvassing.v1.CanvassingServicePromiseClient.prototype.getLeadsWithinBounds =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pando.api.canvassing.v1.CanvassingService/GetLeadsWithinBounds',
      request,
      metadata || {},
      methodDescriptor_CanvassingService_GetLeadsWithinBounds);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pando.api.canvassing.v1.CreateLeadAttributeRequest,
 *   !proto.pando.api.canvassing.v1.LeadAttribute>}
 */
const methodDescriptor_CanvassingService_CreateLeadAttribute = new grpc.web.MethodDescriptor(
  '/pando.api.canvassing.v1.CanvassingService/CreateLeadAttribute',
  grpc.web.MethodType.UNARY,
  proto.pando.api.canvassing.v1.CreateLeadAttributeRequest,
  proto.pando.api.canvassing.v1.LeadAttribute,
  /**
   * @param {!proto.pando.api.canvassing.v1.CreateLeadAttributeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pando.api.canvassing.v1.LeadAttribute.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pando.api.canvassing.v1.CreateLeadAttributeRequest,
 *   !proto.pando.api.canvassing.v1.LeadAttribute>}
 */
const methodInfo_CanvassingService_CreateLeadAttribute = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pando.api.canvassing.v1.LeadAttribute,
  /**
   * @param {!proto.pando.api.canvassing.v1.CreateLeadAttributeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pando.api.canvassing.v1.LeadAttribute.deserializeBinary
);


/**
 * @param {!proto.pando.api.canvassing.v1.CreateLeadAttributeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pando.api.canvassing.v1.LeadAttribute)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pando.api.canvassing.v1.LeadAttribute>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pando.api.canvassing.v1.CanvassingServiceClient.prototype.createLeadAttribute =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pando.api.canvassing.v1.CanvassingService/CreateLeadAttribute',
      request,
      metadata || {},
      methodDescriptor_CanvassingService_CreateLeadAttribute,
      callback);
};


/**
 * @param {!proto.pando.api.canvassing.v1.CreateLeadAttributeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pando.api.canvassing.v1.LeadAttribute>}
 *     Promise that resolves to the response
 */
proto.pando.api.canvassing.v1.CanvassingServicePromiseClient.prototype.createLeadAttribute =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pando.api.canvassing.v1.CanvassingService/CreateLeadAttribute',
      request,
      metadata || {},
      methodDescriptor_CanvassingService_CreateLeadAttribute);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pando.api.canvassing.v1.UpdateLeadAttributeRequest,
 *   !proto.pando.api.canvassing.v1.LeadAttribute>}
 */
const methodDescriptor_CanvassingService_UpdateLeadAttribute = new grpc.web.MethodDescriptor(
  '/pando.api.canvassing.v1.CanvassingService/UpdateLeadAttribute',
  grpc.web.MethodType.UNARY,
  proto.pando.api.canvassing.v1.UpdateLeadAttributeRequest,
  proto.pando.api.canvassing.v1.LeadAttribute,
  /**
   * @param {!proto.pando.api.canvassing.v1.UpdateLeadAttributeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pando.api.canvassing.v1.LeadAttribute.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pando.api.canvassing.v1.UpdateLeadAttributeRequest,
 *   !proto.pando.api.canvassing.v1.LeadAttribute>}
 */
const methodInfo_CanvassingService_UpdateLeadAttribute = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pando.api.canvassing.v1.LeadAttribute,
  /**
   * @param {!proto.pando.api.canvassing.v1.UpdateLeadAttributeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pando.api.canvassing.v1.LeadAttribute.deserializeBinary
);


/**
 * @param {!proto.pando.api.canvassing.v1.UpdateLeadAttributeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pando.api.canvassing.v1.LeadAttribute)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pando.api.canvassing.v1.LeadAttribute>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pando.api.canvassing.v1.CanvassingServiceClient.prototype.updateLeadAttribute =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pando.api.canvassing.v1.CanvassingService/UpdateLeadAttribute',
      request,
      metadata || {},
      methodDescriptor_CanvassingService_UpdateLeadAttribute,
      callback);
};


/**
 * @param {!proto.pando.api.canvassing.v1.UpdateLeadAttributeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pando.api.canvassing.v1.LeadAttribute>}
 *     Promise that resolves to the response
 */
proto.pando.api.canvassing.v1.CanvassingServicePromiseClient.prototype.updateLeadAttribute =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pando.api.canvassing.v1.CanvassingService/UpdateLeadAttribute',
      request,
      metadata || {},
      methodDescriptor_CanvassingService_UpdateLeadAttribute);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pando.api.canvassing.v1.LeadAttributeIdRequest,
 *   !proto.pando.api.Empty>}
 */
const methodDescriptor_CanvassingService_DeleteLeadAttribute = new grpc.web.MethodDescriptor(
  '/pando.api.canvassing.v1.CanvassingService/DeleteLeadAttribute',
  grpc.web.MethodType.UNARY,
  proto.pando.api.canvassing.v1.LeadAttributeIdRequest,
  pando_api_shared_pb.Empty,
  /**
   * @param {!proto.pando.api.canvassing.v1.LeadAttributeIdRequest} request
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
 *   !proto.pando.api.canvassing.v1.LeadAttributeIdRequest,
 *   !proto.pando.api.Empty>}
 */
const methodInfo_CanvassingService_DeleteLeadAttribute = new grpc.web.AbstractClientBase.MethodInfo(
  pando_api_shared_pb.Empty,
  /**
   * @param {!proto.pando.api.canvassing.v1.LeadAttributeIdRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_shared_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.pando.api.canvassing.v1.LeadAttributeIdRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pando.api.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pando.api.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pando.api.canvassing.v1.CanvassingServiceClient.prototype.deleteLeadAttribute =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pando.api.canvassing.v1.CanvassingService/DeleteLeadAttribute',
      request,
      metadata || {},
      methodDescriptor_CanvassingService_DeleteLeadAttribute,
      callback);
};


/**
 * @param {!proto.pando.api.canvassing.v1.LeadAttributeIdRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pando.api.Empty>}
 *     Promise that resolves to the response
 */
proto.pando.api.canvassing.v1.CanvassingServicePromiseClient.prototype.deleteLeadAttribute =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pando.api.canvassing.v1.CanvassingService/DeleteLeadAttribute',
      request,
      metadata || {},
      methodDescriptor_CanvassingService_DeleteLeadAttribute);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pando.api.canvassing.v1.ListLeadAttributeRequest,
 *   !proto.pando.api.canvassing.v1.LeadAttributeList>}
 */
const methodDescriptor_CanvassingService_GetLeadAttributeList = new grpc.web.MethodDescriptor(
  '/pando.api.canvassing.v1.CanvassingService/GetLeadAttributeList',
  grpc.web.MethodType.UNARY,
  proto.pando.api.canvassing.v1.ListLeadAttributeRequest,
  proto.pando.api.canvassing.v1.LeadAttributeList,
  /**
   * @param {!proto.pando.api.canvassing.v1.ListLeadAttributeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pando.api.canvassing.v1.LeadAttributeList.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pando.api.canvassing.v1.ListLeadAttributeRequest,
 *   !proto.pando.api.canvassing.v1.LeadAttributeList>}
 */
const methodInfo_CanvassingService_GetLeadAttributeList = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pando.api.canvassing.v1.LeadAttributeList,
  /**
   * @param {!proto.pando.api.canvassing.v1.ListLeadAttributeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pando.api.canvassing.v1.LeadAttributeList.deserializeBinary
);


/**
 * @param {!proto.pando.api.canvassing.v1.ListLeadAttributeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pando.api.canvassing.v1.LeadAttributeList)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pando.api.canvassing.v1.LeadAttributeList>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pando.api.canvassing.v1.CanvassingServiceClient.prototype.getLeadAttributeList =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pando.api.canvassing.v1.CanvassingService/GetLeadAttributeList',
      request,
      metadata || {},
      methodDescriptor_CanvassingService_GetLeadAttributeList,
      callback);
};


/**
 * @param {!proto.pando.api.canvassing.v1.ListLeadAttributeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pando.api.canvassing.v1.LeadAttributeList>}
 *     Promise that resolves to the response
 */
proto.pando.api.canvassing.v1.CanvassingServicePromiseClient.prototype.getLeadAttributeList =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pando.api.canvassing.v1.CanvassingService/GetLeadAttributeList',
      request,
      metadata || {},
      methodDescriptor_CanvassingService_GetLeadAttributeList);
};


module.exports = proto.pando.api.canvassing.v1;

