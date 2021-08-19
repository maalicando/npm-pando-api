/**
 * @fileoverview gRPC-Web generated client stub for pando.api.survey.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js')

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js')

var pando_api_extensions_pb = require('../../../../pando/api/extensions_pb.js')

var pando_api_shared_pb = require('../../../../pando/api/shared_pb.js')

var pando_api_survey_v1_shared_pb = require('../../../../pando/api/survey/v1/shared_pb.js')
const proto = {};
proto.pando = {};
proto.pando.api = {};
proto.pando.api.survey = {};
proto.pando.api.survey.v1 = require('./survey_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.pando.api.survey.v1.SurveyServiceClient =
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
proto.pando.api.survey.v1.SurveyServicePromiseClient =
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
 *   !proto.pando.api.survey.v1.Answer,
 *   !proto.pando.api.survey.v1.Answer>}
 */
const methodDescriptor_SurveyService_CreateAnswer = new grpc.web.MethodDescriptor(
  '/pando.api.survey.v1.SurveyService/CreateAnswer',
  grpc.web.MethodType.UNARY,
  pando_api_survey_v1_shared_pb.Answer,
  pando_api_survey_v1_shared_pb.Answer,
  /**
   * @param {!proto.pando.api.survey.v1.Answer} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_survey_v1_shared_pb.Answer.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pando.api.survey.v1.Answer,
 *   !proto.pando.api.survey.v1.Answer>}
 */
const methodInfo_SurveyService_CreateAnswer = new grpc.web.AbstractClientBase.MethodInfo(
  pando_api_survey_v1_shared_pb.Answer,
  /**
   * @param {!proto.pando.api.survey.v1.Answer} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_survey_v1_shared_pb.Answer.deserializeBinary
);


/**
 * @param {!proto.pando.api.survey.v1.Answer} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pando.api.survey.v1.Answer)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pando.api.survey.v1.Answer>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pando.api.survey.v1.SurveyServiceClient.prototype.createAnswer =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pando.api.survey.v1.SurveyService/CreateAnswer',
      request,
      metadata || {},
      methodDescriptor_SurveyService_CreateAnswer,
      callback);
};


/**
 * @param {!proto.pando.api.survey.v1.Answer} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pando.api.survey.v1.Answer>}
 *     Promise that resolves to the response
 */
proto.pando.api.survey.v1.SurveyServicePromiseClient.prototype.createAnswer =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pando.api.survey.v1.SurveyService/CreateAnswer',
      request,
      metadata || {},
      methodDescriptor_SurveyService_CreateAnswer);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pando.api.survey.v1.Attempt,
 *   !proto.pando.api.survey.v1.Attempt>}
 */
const methodDescriptor_SurveyService_CreateAttempt = new grpc.web.MethodDescriptor(
  '/pando.api.survey.v1.SurveyService/CreateAttempt',
  grpc.web.MethodType.UNARY,
  pando_api_survey_v1_shared_pb.Attempt,
  pando_api_survey_v1_shared_pb.Attempt,
  /**
   * @param {!proto.pando.api.survey.v1.Attempt} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_survey_v1_shared_pb.Attempt.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pando.api.survey.v1.Attempt,
 *   !proto.pando.api.survey.v1.Attempt>}
 */
const methodInfo_SurveyService_CreateAttempt = new grpc.web.AbstractClientBase.MethodInfo(
  pando_api_survey_v1_shared_pb.Attempt,
  /**
   * @param {!proto.pando.api.survey.v1.Attempt} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_survey_v1_shared_pb.Attempt.deserializeBinary
);


/**
 * @param {!proto.pando.api.survey.v1.Attempt} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pando.api.survey.v1.Attempt)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pando.api.survey.v1.Attempt>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pando.api.survey.v1.SurveyServiceClient.prototype.createAttempt =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pando.api.survey.v1.SurveyService/CreateAttempt',
      request,
      metadata || {},
      methodDescriptor_SurveyService_CreateAttempt,
      callback);
};


/**
 * @param {!proto.pando.api.survey.v1.Attempt} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pando.api.survey.v1.Attempt>}
 *     Promise that resolves to the response
 */
proto.pando.api.survey.v1.SurveyServicePromiseClient.prototype.createAttempt =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pando.api.survey.v1.SurveyService/CreateAttempt',
      request,
      metadata || {},
      methodDescriptor_SurveyService_CreateAttempt);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pando.api.survey.v1.GetInstanceRequest,
 *   !proto.pando.api.survey.v1.Instance>}
 */
const methodDescriptor_SurveyService_GetInstance = new grpc.web.MethodDescriptor(
  '/pando.api.survey.v1.SurveyService/GetInstance',
  grpc.web.MethodType.UNARY,
  proto.pando.api.survey.v1.GetInstanceRequest,
  pando_api_survey_v1_shared_pb.Instance,
  /**
   * @param {!proto.pando.api.survey.v1.GetInstanceRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_survey_v1_shared_pb.Instance.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pando.api.survey.v1.GetInstanceRequest,
 *   !proto.pando.api.survey.v1.Instance>}
 */
const methodInfo_SurveyService_GetInstance = new grpc.web.AbstractClientBase.MethodInfo(
  pando_api_survey_v1_shared_pb.Instance,
  /**
   * @param {!proto.pando.api.survey.v1.GetInstanceRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_survey_v1_shared_pb.Instance.deserializeBinary
);


/**
 * @param {!proto.pando.api.survey.v1.GetInstanceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pando.api.survey.v1.Instance)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pando.api.survey.v1.Instance>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pando.api.survey.v1.SurveyServiceClient.prototype.getInstance =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pando.api.survey.v1.SurveyService/GetInstance',
      request,
      metadata || {},
      methodDescriptor_SurveyService_GetInstance,
      callback);
};


/**
 * @param {!proto.pando.api.survey.v1.GetInstanceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pando.api.survey.v1.Instance>}
 *     Promise that resolves to the response
 */
proto.pando.api.survey.v1.SurveyServicePromiseClient.prototype.getInstance =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pando.api.survey.v1.SurveyService/GetInstance',
      request,
      metadata || {},
      methodDescriptor_SurveyService_GetInstance);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pando.api.survey.v1.GetInstancesRequest,
 *   !proto.pando.api.survey.v1.InstanceList>}
 */
const methodDescriptor_SurveyService_GetInstances = new grpc.web.MethodDescriptor(
  '/pando.api.survey.v1.SurveyService/GetInstances',
  grpc.web.MethodType.UNARY,
  proto.pando.api.survey.v1.GetInstancesRequest,
  pando_api_survey_v1_shared_pb.InstanceList,
  /**
   * @param {!proto.pando.api.survey.v1.GetInstancesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_survey_v1_shared_pb.InstanceList.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pando.api.survey.v1.GetInstancesRequest,
 *   !proto.pando.api.survey.v1.InstanceList>}
 */
const methodInfo_SurveyService_GetInstances = new grpc.web.AbstractClientBase.MethodInfo(
  pando_api_survey_v1_shared_pb.InstanceList,
  /**
   * @param {!proto.pando.api.survey.v1.GetInstancesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_survey_v1_shared_pb.InstanceList.deserializeBinary
);


/**
 * @param {!proto.pando.api.survey.v1.GetInstancesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pando.api.survey.v1.InstanceList)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pando.api.survey.v1.InstanceList>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pando.api.survey.v1.SurveyServiceClient.prototype.getInstances =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pando.api.survey.v1.SurveyService/GetInstances',
      request,
      metadata || {},
      methodDescriptor_SurveyService_GetInstances,
      callback);
};


/**
 * @param {!proto.pando.api.survey.v1.GetInstancesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pando.api.survey.v1.InstanceList>}
 *     Promise that resolves to the response
 */
proto.pando.api.survey.v1.SurveyServicePromiseClient.prototype.getInstances =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pando.api.survey.v1.SurveyService/GetInstances',
      request,
      metadata || {},
      methodDescriptor_SurveyService_GetInstances);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pando.api.survey.v1.GetAttemptRequest,
 *   !proto.pando.api.survey.v1.Attempt>}
 */
const methodDescriptor_SurveyService_GetAttempt = new grpc.web.MethodDescriptor(
  '/pando.api.survey.v1.SurveyService/GetAttempt',
  grpc.web.MethodType.UNARY,
  proto.pando.api.survey.v1.GetAttemptRequest,
  pando_api_survey_v1_shared_pb.Attempt,
  /**
   * @param {!proto.pando.api.survey.v1.GetAttemptRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_survey_v1_shared_pb.Attempt.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pando.api.survey.v1.GetAttemptRequest,
 *   !proto.pando.api.survey.v1.Attempt>}
 */
const methodInfo_SurveyService_GetAttempt = new grpc.web.AbstractClientBase.MethodInfo(
  pando_api_survey_v1_shared_pb.Attempt,
  /**
   * @param {!proto.pando.api.survey.v1.GetAttemptRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_survey_v1_shared_pb.Attempt.deserializeBinary
);


/**
 * @param {!proto.pando.api.survey.v1.GetAttemptRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pando.api.survey.v1.Attempt)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pando.api.survey.v1.Attempt>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pando.api.survey.v1.SurveyServiceClient.prototype.getAttempt =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pando.api.survey.v1.SurveyService/GetAttempt',
      request,
      metadata || {},
      methodDescriptor_SurveyService_GetAttempt,
      callback);
};


/**
 * @param {!proto.pando.api.survey.v1.GetAttemptRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pando.api.survey.v1.Attempt>}
 *     Promise that resolves to the response
 */
proto.pando.api.survey.v1.SurveyServicePromiseClient.prototype.getAttempt =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pando.api.survey.v1.SurveyService/GetAttempt',
      request,
      metadata || {},
      methodDescriptor_SurveyService_GetAttempt);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pando.api.survey.v1.GetAttemptsRequest,
 *   !proto.pando.api.survey.v1.AttemptList>}
 */
const methodDescriptor_SurveyService_GetAttempts = new grpc.web.MethodDescriptor(
  '/pando.api.survey.v1.SurveyService/GetAttempts',
  grpc.web.MethodType.UNARY,
  proto.pando.api.survey.v1.GetAttemptsRequest,
  pando_api_survey_v1_shared_pb.AttemptList,
  /**
   * @param {!proto.pando.api.survey.v1.GetAttemptsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_survey_v1_shared_pb.AttemptList.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pando.api.survey.v1.GetAttemptsRequest,
 *   !proto.pando.api.survey.v1.AttemptList>}
 */
const methodInfo_SurveyService_GetAttempts = new grpc.web.AbstractClientBase.MethodInfo(
  pando_api_survey_v1_shared_pb.AttemptList,
  /**
   * @param {!proto.pando.api.survey.v1.GetAttemptsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_survey_v1_shared_pb.AttemptList.deserializeBinary
);


/**
 * @param {!proto.pando.api.survey.v1.GetAttemptsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pando.api.survey.v1.AttemptList)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pando.api.survey.v1.AttemptList>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pando.api.survey.v1.SurveyServiceClient.prototype.getAttempts =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pando.api.survey.v1.SurveyService/GetAttempts',
      request,
      metadata || {},
      methodDescriptor_SurveyService_GetAttempts,
      callback);
};


/**
 * @param {!proto.pando.api.survey.v1.GetAttemptsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pando.api.survey.v1.AttemptList>}
 *     Promise that resolves to the response
 */
proto.pando.api.survey.v1.SurveyServicePromiseClient.prototype.getAttempts =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pando.api.survey.v1.SurveyService/GetAttempts',
      request,
      metadata || {},
      methodDescriptor_SurveyService_GetAttempts);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pando.api.survey.v1.GetMediaRequest,
 *   !proto.pando.api.FileChunk>}
 */
const methodDescriptor_SurveyService_GetSurveyMedia = new grpc.web.MethodDescriptor(
  '/pando.api.survey.v1.SurveyService/GetSurveyMedia',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.pando.api.survey.v1.GetMediaRequest,
  pando_api_shared_pb.FileChunk,
  /**
   * @param {!proto.pando.api.survey.v1.GetMediaRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_shared_pb.FileChunk.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pando.api.survey.v1.GetMediaRequest,
 *   !proto.pando.api.FileChunk>}
 */
const methodInfo_SurveyService_GetSurveyMedia = new grpc.web.AbstractClientBase.MethodInfo(
  pando_api_shared_pb.FileChunk,
  /**
   * @param {!proto.pando.api.survey.v1.GetMediaRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_shared_pb.FileChunk.deserializeBinary
);


/**
 * @param {!proto.pando.api.survey.v1.GetMediaRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.pando.api.FileChunk>}
 *     The XHR Node Readable Stream
 */
proto.pando.api.survey.v1.SurveyServiceClient.prototype.getSurveyMedia =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/pando.api.survey.v1.SurveyService/GetSurveyMedia',
      request,
      metadata || {},
      methodDescriptor_SurveyService_GetSurveyMedia);
};


/**
 * @param {!proto.pando.api.survey.v1.GetMediaRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.pando.api.FileChunk>}
 *     The XHR Node Readable Stream
 */
proto.pando.api.survey.v1.SurveyServicePromiseClient.prototype.getSurveyMedia =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/pando.api.survey.v1.SurveyService/GetSurveyMedia',
      request,
      metadata || {},
      methodDescriptor_SurveyService_GetSurveyMedia);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pando.api.survey.v1.GetMediaRequest,
 *   !proto.pando.api.FileChunk>}
 */
const methodDescriptor_SurveyService_GetAnswerMedia = new grpc.web.MethodDescriptor(
  '/pando.api.survey.v1.SurveyService/GetAnswerMedia',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.pando.api.survey.v1.GetMediaRequest,
  pando_api_shared_pb.FileChunk,
  /**
   * @param {!proto.pando.api.survey.v1.GetMediaRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_shared_pb.FileChunk.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pando.api.survey.v1.GetMediaRequest,
 *   !proto.pando.api.FileChunk>}
 */
const methodInfo_SurveyService_GetAnswerMedia = new grpc.web.AbstractClientBase.MethodInfo(
  pando_api_shared_pb.FileChunk,
  /**
   * @param {!proto.pando.api.survey.v1.GetMediaRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_shared_pb.FileChunk.deserializeBinary
);


/**
 * @param {!proto.pando.api.survey.v1.GetMediaRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.pando.api.FileChunk>}
 *     The XHR Node Readable Stream
 */
proto.pando.api.survey.v1.SurveyServiceClient.prototype.getAnswerMedia =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/pando.api.survey.v1.SurveyService/GetAnswerMedia',
      request,
      metadata || {},
      methodDescriptor_SurveyService_GetAnswerMedia);
};


/**
 * @param {!proto.pando.api.survey.v1.GetMediaRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.pando.api.FileChunk>}
 *     The XHR Node Readable Stream
 */
proto.pando.api.survey.v1.SurveyServicePromiseClient.prototype.getAnswerMedia =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/pando.api.survey.v1.SurveyService/GetAnswerMedia',
      request,
      metadata || {},
      methodDescriptor_SurveyService_GetAnswerMedia);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pando.api.survey.v1.GetNextQuestionRequest,
 *   !proto.pando.api.survey.v1.GetNextQuestionResponse>}
 */
const methodDescriptor_SurveyService_GetNextQuestion = new grpc.web.MethodDescriptor(
  '/pando.api.survey.v1.SurveyService/GetNextQuestion',
  grpc.web.MethodType.UNARY,
  proto.pando.api.survey.v1.GetNextQuestionRequest,
  proto.pando.api.survey.v1.GetNextQuestionResponse,
  /**
   * @param {!proto.pando.api.survey.v1.GetNextQuestionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pando.api.survey.v1.GetNextQuestionResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pando.api.survey.v1.GetNextQuestionRequest,
 *   !proto.pando.api.survey.v1.GetNextQuestionResponse>}
 */
const methodInfo_SurveyService_GetNextQuestion = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pando.api.survey.v1.GetNextQuestionResponse,
  /**
   * @param {!proto.pando.api.survey.v1.GetNextQuestionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pando.api.survey.v1.GetNextQuestionResponse.deserializeBinary
);


/**
 * @param {!proto.pando.api.survey.v1.GetNextQuestionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pando.api.survey.v1.GetNextQuestionResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pando.api.survey.v1.GetNextQuestionResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pando.api.survey.v1.SurveyServiceClient.prototype.getNextQuestion =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pando.api.survey.v1.SurveyService/GetNextQuestion',
      request,
      metadata || {},
      methodDescriptor_SurveyService_GetNextQuestion,
      callback);
};


/**
 * @param {!proto.pando.api.survey.v1.GetNextQuestionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pando.api.survey.v1.GetNextQuestionResponse>}
 *     Promise that resolves to the response
 */
proto.pando.api.survey.v1.SurveyServicePromiseClient.prototype.getNextQuestion =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pando.api.survey.v1.SurveyService/GetNextQuestion',
      request,
      metadata || {},
      methodDescriptor_SurveyService_GetNextQuestion);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pando.api.survey.v1.SaveAnswerRequest,
 *   !proto.pando.api.survey.v1.Answer>}
 */
const methodDescriptor_SurveyService_SaveAnswer = new grpc.web.MethodDescriptor(
  '/pando.api.survey.v1.SurveyService/SaveAnswer',
  grpc.web.MethodType.UNARY,
  proto.pando.api.survey.v1.SaveAnswerRequest,
  pando_api_survey_v1_shared_pb.Answer,
  /**
   * @param {!proto.pando.api.survey.v1.SaveAnswerRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_survey_v1_shared_pb.Answer.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pando.api.survey.v1.SaveAnswerRequest,
 *   !proto.pando.api.survey.v1.Answer>}
 */
const methodInfo_SurveyService_SaveAnswer = new grpc.web.AbstractClientBase.MethodInfo(
  pando_api_survey_v1_shared_pb.Answer,
  /**
   * @param {!proto.pando.api.survey.v1.SaveAnswerRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_survey_v1_shared_pb.Answer.deserializeBinary
);


/**
 * @param {!proto.pando.api.survey.v1.SaveAnswerRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pando.api.survey.v1.Answer)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pando.api.survey.v1.Answer>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pando.api.survey.v1.SurveyServiceClient.prototype.saveAnswer =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pando.api.survey.v1.SurveyService/SaveAnswer',
      request,
      metadata || {},
      methodDescriptor_SurveyService_SaveAnswer,
      callback);
};


/**
 * @param {!proto.pando.api.survey.v1.SaveAnswerRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pando.api.survey.v1.Answer>}
 *     Promise that resolves to the response
 */
proto.pando.api.survey.v1.SurveyServicePromiseClient.prototype.saveAnswer =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pando.api.survey.v1.SurveyService/SaveAnswer',
      request,
      metadata || {},
      methodDescriptor_SurveyService_SaveAnswer);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pando.api.survey.v1.CompleteSurveyRequest,
 *   !proto.pando.api.survey.v1.Attempt>}
 */
const methodDescriptor_SurveyService_ExecCompleteSurvey = new grpc.web.MethodDescriptor(
  '/pando.api.survey.v1.SurveyService/ExecCompleteSurvey',
  grpc.web.MethodType.UNARY,
  proto.pando.api.survey.v1.CompleteSurveyRequest,
  pando_api_survey_v1_shared_pb.Attempt,
  /**
   * @param {!proto.pando.api.survey.v1.CompleteSurveyRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_survey_v1_shared_pb.Attempt.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pando.api.survey.v1.CompleteSurveyRequest,
 *   !proto.pando.api.survey.v1.Attempt>}
 */
const methodInfo_SurveyService_ExecCompleteSurvey = new grpc.web.AbstractClientBase.MethodInfo(
  pando_api_survey_v1_shared_pb.Attempt,
  /**
   * @param {!proto.pando.api.survey.v1.CompleteSurveyRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_survey_v1_shared_pb.Attempt.deserializeBinary
);


/**
 * @param {!proto.pando.api.survey.v1.CompleteSurveyRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pando.api.survey.v1.Attempt)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pando.api.survey.v1.Attempt>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pando.api.survey.v1.SurveyServiceClient.prototype.execCompleteSurvey =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pando.api.survey.v1.SurveyService/ExecCompleteSurvey',
      request,
      metadata || {},
      methodDescriptor_SurveyService_ExecCompleteSurvey,
      callback);
};


/**
 * @param {!proto.pando.api.survey.v1.CompleteSurveyRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pando.api.survey.v1.Attempt>}
 *     Promise that resolves to the response
 */
proto.pando.api.survey.v1.SurveyServicePromiseClient.prototype.execCompleteSurvey =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pando.api.survey.v1.SurveyService/ExecCompleteSurvey',
      request,
      metadata || {},
      methodDescriptor_SurveyService_ExecCompleteSurvey);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pando.api.survey.v1.FacialRecognitionRequest,
 *   !proto.pando.api.survey.v1.FacialRecognitionResponse>}
 */
const methodDescriptor_SurveyService_ExecFacialRecognition = new grpc.web.MethodDescriptor(
  '/pando.api.survey.v1.SurveyService/ExecFacialRecognition',
  grpc.web.MethodType.UNARY,
  proto.pando.api.survey.v1.FacialRecognitionRequest,
  proto.pando.api.survey.v1.FacialRecognitionResponse,
  /**
   * @param {!proto.pando.api.survey.v1.FacialRecognitionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pando.api.survey.v1.FacialRecognitionResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pando.api.survey.v1.FacialRecognitionRequest,
 *   !proto.pando.api.survey.v1.FacialRecognitionResponse>}
 */
const methodInfo_SurveyService_ExecFacialRecognition = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pando.api.survey.v1.FacialRecognitionResponse,
  /**
   * @param {!proto.pando.api.survey.v1.FacialRecognitionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pando.api.survey.v1.FacialRecognitionResponse.deserializeBinary
);


/**
 * @param {!proto.pando.api.survey.v1.FacialRecognitionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pando.api.survey.v1.FacialRecognitionResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pando.api.survey.v1.FacialRecognitionResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pando.api.survey.v1.SurveyServiceClient.prototype.execFacialRecognition =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pando.api.survey.v1.SurveyService/ExecFacialRecognition',
      request,
      metadata || {},
      methodDescriptor_SurveyService_ExecFacialRecognition,
      callback);
};


/**
 * @param {!proto.pando.api.survey.v1.FacialRecognitionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pando.api.survey.v1.FacialRecognitionResponse>}
 *     Promise that resolves to the response
 */
proto.pando.api.survey.v1.SurveyServicePromiseClient.prototype.execFacialRecognition =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pando.api.survey.v1.SurveyService/ExecFacialRecognition',
      request,
      metadata || {},
      methodDescriptor_SurveyService_ExecFacialRecognition);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pando.api.survey.v1.ExecCompleteQuestionRequest,
 *   !proto.pando.api.survey.v1.ExecCompleteQuestionResponse>}
 */
const methodDescriptor_SurveyService_ExecCompleteQuestion = new grpc.web.MethodDescriptor(
  '/pando.api.survey.v1.SurveyService/ExecCompleteQuestion',
  grpc.web.MethodType.UNARY,
  proto.pando.api.survey.v1.ExecCompleteQuestionRequest,
  proto.pando.api.survey.v1.ExecCompleteQuestionResponse,
  /**
   * @param {!proto.pando.api.survey.v1.ExecCompleteQuestionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pando.api.survey.v1.ExecCompleteQuestionResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pando.api.survey.v1.ExecCompleteQuestionRequest,
 *   !proto.pando.api.survey.v1.ExecCompleteQuestionResponse>}
 */
const methodInfo_SurveyService_ExecCompleteQuestion = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pando.api.survey.v1.ExecCompleteQuestionResponse,
  /**
   * @param {!proto.pando.api.survey.v1.ExecCompleteQuestionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pando.api.survey.v1.ExecCompleteQuestionResponse.deserializeBinary
);


/**
 * @param {!proto.pando.api.survey.v1.ExecCompleteQuestionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pando.api.survey.v1.ExecCompleteQuestionResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pando.api.survey.v1.ExecCompleteQuestionResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pando.api.survey.v1.SurveyServiceClient.prototype.execCompleteQuestion =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pando.api.survey.v1.SurveyService/ExecCompleteQuestion',
      request,
      metadata || {},
      methodDescriptor_SurveyService_ExecCompleteQuestion,
      callback);
};


/**
 * @param {!proto.pando.api.survey.v1.ExecCompleteQuestionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pando.api.survey.v1.ExecCompleteQuestionResponse>}
 *     Promise that resolves to the response
 */
proto.pando.api.survey.v1.SurveyServicePromiseClient.prototype.execCompleteQuestion =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pando.api.survey.v1.SurveyService/ExecCompleteQuestion',
      request,
      metadata || {},
      methodDescriptor_SurveyService_ExecCompleteQuestion);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pando.api.survey.v1.ExecAddInstanceOwnerRequest,
 *   !proto.pando.api.Empty>}
 */
const methodDescriptor_SurveyService_ExecAddInstanceOwner = new grpc.web.MethodDescriptor(
  '/pando.api.survey.v1.SurveyService/ExecAddInstanceOwner',
  grpc.web.MethodType.UNARY,
  proto.pando.api.survey.v1.ExecAddInstanceOwnerRequest,
  pando_api_shared_pb.Empty,
  /**
   * @param {!proto.pando.api.survey.v1.ExecAddInstanceOwnerRequest} request
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
 *   !proto.pando.api.survey.v1.ExecAddInstanceOwnerRequest,
 *   !proto.pando.api.Empty>}
 */
const methodInfo_SurveyService_ExecAddInstanceOwner = new grpc.web.AbstractClientBase.MethodInfo(
  pando_api_shared_pb.Empty,
  /**
   * @param {!proto.pando.api.survey.v1.ExecAddInstanceOwnerRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_shared_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.pando.api.survey.v1.ExecAddInstanceOwnerRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pando.api.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pando.api.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pando.api.survey.v1.SurveyServiceClient.prototype.execAddInstanceOwner =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pando.api.survey.v1.SurveyService/ExecAddInstanceOwner',
      request,
      metadata || {},
      methodDescriptor_SurveyService_ExecAddInstanceOwner,
      callback);
};


/**
 * @param {!proto.pando.api.survey.v1.ExecAddInstanceOwnerRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pando.api.Empty>}
 *     Promise that resolves to the response
 */
proto.pando.api.survey.v1.SurveyServicePromiseClient.prototype.execAddInstanceOwner =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pando.api.survey.v1.SurveyService/ExecAddInstanceOwner',
      request,
      metadata || {},
      methodDescriptor_SurveyService_ExecAddInstanceOwner);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pando.api.survey.v1.ExecRemoveInstanceOwnerRequest,
 *   !proto.pando.api.Empty>}
 */
const methodDescriptor_SurveyService_ExecRemoveInstanceOwner = new grpc.web.MethodDescriptor(
  '/pando.api.survey.v1.SurveyService/ExecRemoveInstanceOwner',
  grpc.web.MethodType.UNARY,
  proto.pando.api.survey.v1.ExecRemoveInstanceOwnerRequest,
  pando_api_shared_pb.Empty,
  /**
   * @param {!proto.pando.api.survey.v1.ExecRemoveInstanceOwnerRequest} request
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
 *   !proto.pando.api.survey.v1.ExecRemoveInstanceOwnerRequest,
 *   !proto.pando.api.Empty>}
 */
const methodInfo_SurveyService_ExecRemoveInstanceOwner = new grpc.web.AbstractClientBase.MethodInfo(
  pando_api_shared_pb.Empty,
  /**
   * @param {!proto.pando.api.survey.v1.ExecRemoveInstanceOwnerRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_shared_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.pando.api.survey.v1.ExecRemoveInstanceOwnerRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pando.api.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pando.api.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pando.api.survey.v1.SurveyServiceClient.prototype.execRemoveInstanceOwner =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pando.api.survey.v1.SurveyService/ExecRemoveInstanceOwner',
      request,
      metadata || {},
      methodDescriptor_SurveyService_ExecRemoveInstanceOwner,
      callback);
};


/**
 * @param {!proto.pando.api.survey.v1.ExecRemoveInstanceOwnerRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pando.api.Empty>}
 *     Promise that resolves to the response
 */
proto.pando.api.survey.v1.SurveyServicePromiseClient.prototype.execRemoveInstanceOwner =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pando.api.survey.v1.SurveyService/ExecRemoveInstanceOwner',
      request,
      metadata || {},
      methodDescriptor_SurveyService_ExecRemoveInstanceOwner);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pando.api.survey.v1.GetSurveyInstanceListRequest,
 *   !proto.pando.api.survey.v1.InstanceList>}
 */
const methodDescriptor_SurveyService_GetIncompleteSurveyInstances = new grpc.web.MethodDescriptor(
  '/pando.api.survey.v1.SurveyService/GetIncompleteSurveyInstances',
  grpc.web.MethodType.UNARY,
  proto.pando.api.survey.v1.GetSurveyInstanceListRequest,
  pando_api_survey_v1_shared_pb.InstanceList,
  /**
   * @param {!proto.pando.api.survey.v1.GetSurveyInstanceListRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_survey_v1_shared_pb.InstanceList.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pando.api.survey.v1.GetSurveyInstanceListRequest,
 *   !proto.pando.api.survey.v1.InstanceList>}
 */
const methodInfo_SurveyService_GetIncompleteSurveyInstances = new grpc.web.AbstractClientBase.MethodInfo(
  pando_api_survey_v1_shared_pb.InstanceList,
  /**
   * @param {!proto.pando.api.survey.v1.GetSurveyInstanceListRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_survey_v1_shared_pb.InstanceList.deserializeBinary
);


/**
 * @param {!proto.pando.api.survey.v1.GetSurveyInstanceListRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pando.api.survey.v1.InstanceList)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pando.api.survey.v1.InstanceList>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pando.api.survey.v1.SurveyServiceClient.prototype.getIncompleteSurveyInstances =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pando.api.survey.v1.SurveyService/GetIncompleteSurveyInstances',
      request,
      metadata || {},
      methodDescriptor_SurveyService_GetIncompleteSurveyInstances,
      callback);
};


/**
 * @param {!proto.pando.api.survey.v1.GetSurveyInstanceListRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pando.api.survey.v1.InstanceList>}
 *     Promise that resolves to the response
 */
proto.pando.api.survey.v1.SurveyServicePromiseClient.prototype.getIncompleteSurveyInstances =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pando.api.survey.v1.SurveyService/GetIncompleteSurveyInstances',
      request,
      metadata || {},
      methodDescriptor_SurveyService_GetIncompleteSurveyInstances);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pando.api.survey.v1.GetSurveyInstanceListRequest,
 *   !proto.pando.api.survey.v1.InstanceList>}
 */
const methodDescriptor_SurveyService_GetCompletedSurveyInstances = new grpc.web.MethodDescriptor(
  '/pando.api.survey.v1.SurveyService/GetCompletedSurveyInstances',
  grpc.web.MethodType.UNARY,
  proto.pando.api.survey.v1.GetSurveyInstanceListRequest,
  pando_api_survey_v1_shared_pb.InstanceList,
  /**
   * @param {!proto.pando.api.survey.v1.GetSurveyInstanceListRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_survey_v1_shared_pb.InstanceList.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pando.api.survey.v1.GetSurveyInstanceListRequest,
 *   !proto.pando.api.survey.v1.InstanceList>}
 */
const methodInfo_SurveyService_GetCompletedSurveyInstances = new grpc.web.AbstractClientBase.MethodInfo(
  pando_api_survey_v1_shared_pb.InstanceList,
  /**
   * @param {!proto.pando.api.survey.v1.GetSurveyInstanceListRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_survey_v1_shared_pb.InstanceList.deserializeBinary
);


/**
 * @param {!proto.pando.api.survey.v1.GetSurveyInstanceListRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pando.api.survey.v1.InstanceList)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pando.api.survey.v1.InstanceList>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pando.api.survey.v1.SurveyServiceClient.prototype.getCompletedSurveyInstances =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pando.api.survey.v1.SurveyService/GetCompletedSurveyInstances',
      request,
      metadata || {},
      methodDescriptor_SurveyService_GetCompletedSurveyInstances,
      callback);
};


/**
 * @param {!proto.pando.api.survey.v1.GetSurveyInstanceListRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pando.api.survey.v1.InstanceList>}
 *     Promise that resolves to the response
 */
proto.pando.api.survey.v1.SurveyServicePromiseClient.prototype.getCompletedSurveyInstances =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pando.api.survey.v1.SurveyService/GetCompletedSurveyInstances',
      request,
      metadata || {},
      methodDescriptor_SurveyService_GetCompletedSurveyInstances);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pando.api.survey.v1.GetSurveyInstanceListRequest,
 *   !proto.pando.api.survey.v1.InstanceList>}
 */
const methodDescriptor_SurveyService_GetRecentlyCompletedSurveyInstances = new grpc.web.MethodDescriptor(
  '/pando.api.survey.v1.SurveyService/GetRecentlyCompletedSurveyInstances',
  grpc.web.MethodType.UNARY,
  proto.pando.api.survey.v1.GetSurveyInstanceListRequest,
  pando_api_survey_v1_shared_pb.InstanceList,
  /**
   * @param {!proto.pando.api.survey.v1.GetSurveyInstanceListRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_survey_v1_shared_pb.InstanceList.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pando.api.survey.v1.GetSurveyInstanceListRequest,
 *   !proto.pando.api.survey.v1.InstanceList>}
 */
const methodInfo_SurveyService_GetRecentlyCompletedSurveyInstances = new grpc.web.AbstractClientBase.MethodInfo(
  pando_api_survey_v1_shared_pb.InstanceList,
  /**
   * @param {!proto.pando.api.survey.v1.GetSurveyInstanceListRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_survey_v1_shared_pb.InstanceList.deserializeBinary
);


/**
 * @param {!proto.pando.api.survey.v1.GetSurveyInstanceListRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pando.api.survey.v1.InstanceList)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pando.api.survey.v1.InstanceList>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pando.api.survey.v1.SurveyServiceClient.prototype.getRecentlyCompletedSurveyInstances =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pando.api.survey.v1.SurveyService/GetRecentlyCompletedSurveyInstances',
      request,
      metadata || {},
      methodDescriptor_SurveyService_GetRecentlyCompletedSurveyInstances,
      callback);
};


/**
 * @param {!proto.pando.api.survey.v1.GetSurveyInstanceListRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pando.api.survey.v1.InstanceList>}
 *     Promise that resolves to the response
 */
proto.pando.api.survey.v1.SurveyServicePromiseClient.prototype.getRecentlyCompletedSurveyInstances =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pando.api.survey.v1.SurveyService/GetRecentlyCompletedSurveyInstances',
      request,
      metadata || {},
      methodDescriptor_SurveyService_GetRecentlyCompletedSurveyInstances);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pando.api.survey.v1.GetSurveyInstanceListRequest,
 *   !proto.pando.api.survey.v1.InstanceList>}
 */
const methodDescriptor_SurveyService_GetSurveyInstancesToDo = new grpc.web.MethodDescriptor(
  '/pando.api.survey.v1.SurveyService/GetSurveyInstancesToDo',
  grpc.web.MethodType.UNARY,
  proto.pando.api.survey.v1.GetSurveyInstanceListRequest,
  pando_api_survey_v1_shared_pb.InstanceList,
  /**
   * @param {!proto.pando.api.survey.v1.GetSurveyInstanceListRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_survey_v1_shared_pb.InstanceList.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pando.api.survey.v1.GetSurveyInstanceListRequest,
 *   !proto.pando.api.survey.v1.InstanceList>}
 */
const methodInfo_SurveyService_GetSurveyInstancesToDo = new grpc.web.AbstractClientBase.MethodInfo(
  pando_api_survey_v1_shared_pb.InstanceList,
  /**
   * @param {!proto.pando.api.survey.v1.GetSurveyInstanceListRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_survey_v1_shared_pb.InstanceList.deserializeBinary
);


/**
 * @param {!proto.pando.api.survey.v1.GetSurveyInstanceListRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pando.api.survey.v1.InstanceList)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pando.api.survey.v1.InstanceList>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pando.api.survey.v1.SurveyServiceClient.prototype.getSurveyInstancesToDo =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pando.api.survey.v1.SurveyService/GetSurveyInstancesToDo',
      request,
      metadata || {},
      methodDescriptor_SurveyService_GetSurveyInstancesToDo,
      callback);
};


/**
 * @param {!proto.pando.api.survey.v1.GetSurveyInstanceListRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pando.api.survey.v1.InstanceList>}
 *     Promise that resolves to the response
 */
proto.pando.api.survey.v1.SurveyServicePromiseClient.prototype.getSurveyInstancesToDo =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pando.api.survey.v1.SurveyService/GetSurveyInstancesToDo',
      request,
      metadata || {},
      methodDescriptor_SurveyService_GetSurveyInstancesToDo);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pando.api.survey.v1.GetAttemptQuestionsRequest,
 *   !proto.pando.api.survey.v1.GetAttemptQuestionsResponse>}
 */
const methodDescriptor_SurveyService_GetAttemptQuestions = new grpc.web.MethodDescriptor(
  '/pando.api.survey.v1.SurveyService/GetAttemptQuestions',
  grpc.web.MethodType.UNARY,
  proto.pando.api.survey.v1.GetAttemptQuestionsRequest,
  proto.pando.api.survey.v1.GetAttemptQuestionsResponse,
  /**
   * @param {!proto.pando.api.survey.v1.GetAttemptQuestionsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pando.api.survey.v1.GetAttemptQuestionsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pando.api.survey.v1.GetAttemptQuestionsRequest,
 *   !proto.pando.api.survey.v1.GetAttemptQuestionsResponse>}
 */
const methodInfo_SurveyService_GetAttemptQuestions = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pando.api.survey.v1.GetAttemptQuestionsResponse,
  /**
   * @param {!proto.pando.api.survey.v1.GetAttemptQuestionsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pando.api.survey.v1.GetAttemptQuestionsResponse.deserializeBinary
);


/**
 * @param {!proto.pando.api.survey.v1.GetAttemptQuestionsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pando.api.survey.v1.GetAttemptQuestionsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pando.api.survey.v1.GetAttemptQuestionsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pando.api.survey.v1.SurveyServiceClient.prototype.getAttemptQuestions =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pando.api.survey.v1.SurveyService/GetAttemptQuestions',
      request,
      metadata || {},
      methodDescriptor_SurveyService_GetAttemptQuestions,
      callback);
};


/**
 * @param {!proto.pando.api.survey.v1.GetAttemptQuestionsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pando.api.survey.v1.GetAttemptQuestionsResponse>}
 *     Promise that resolves to the response
 */
proto.pando.api.survey.v1.SurveyServicePromiseClient.prototype.getAttemptQuestions =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pando.api.survey.v1.SurveyService/GetAttemptQuestions',
      request,
      metadata || {},
      methodDescriptor_SurveyService_GetAttemptQuestions);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pando.api.survey.v1.GetQuestionWithAnswerTimestampsRequest,
 *   !proto.pando.api.survey.v1.GetQuestionWithAnswerTimestampsResponse>}
 */
const methodDescriptor_SurveyService_GetQuestionWithAnswerTimestamps = new grpc.web.MethodDescriptor(
  '/pando.api.survey.v1.SurveyService/GetQuestionWithAnswerTimestamps',
  grpc.web.MethodType.UNARY,
  proto.pando.api.survey.v1.GetQuestionWithAnswerTimestampsRequest,
  proto.pando.api.survey.v1.GetQuestionWithAnswerTimestampsResponse,
  /**
   * @param {!proto.pando.api.survey.v1.GetQuestionWithAnswerTimestampsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pando.api.survey.v1.GetQuestionWithAnswerTimestampsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pando.api.survey.v1.GetQuestionWithAnswerTimestampsRequest,
 *   !proto.pando.api.survey.v1.GetQuestionWithAnswerTimestampsResponse>}
 */
const methodInfo_SurveyService_GetQuestionWithAnswerTimestamps = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pando.api.survey.v1.GetQuestionWithAnswerTimestampsResponse,
  /**
   * @param {!proto.pando.api.survey.v1.GetQuestionWithAnswerTimestampsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pando.api.survey.v1.GetQuestionWithAnswerTimestampsResponse.deserializeBinary
);


/**
 * @param {!proto.pando.api.survey.v1.GetQuestionWithAnswerTimestampsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pando.api.survey.v1.GetQuestionWithAnswerTimestampsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pando.api.survey.v1.GetQuestionWithAnswerTimestampsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pando.api.survey.v1.SurveyServiceClient.prototype.getQuestionWithAnswerTimestamps =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pando.api.survey.v1.SurveyService/GetQuestionWithAnswerTimestamps',
      request,
      metadata || {},
      methodDescriptor_SurveyService_GetQuestionWithAnswerTimestamps,
      callback);
};


/**
 * @param {!proto.pando.api.survey.v1.GetQuestionWithAnswerTimestampsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pando.api.survey.v1.GetQuestionWithAnswerTimestampsResponse>}
 *     Promise that resolves to the response
 */
proto.pando.api.survey.v1.SurveyServicePromiseClient.prototype.getQuestionWithAnswerTimestamps =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pando.api.survey.v1.SurveyService/GetQuestionWithAnswerTimestamps',
      request,
      metadata || {},
      methodDescriptor_SurveyService_GetQuestionWithAnswerTimestamps);
};


module.exports = proto.pando.api.survey.v1;

