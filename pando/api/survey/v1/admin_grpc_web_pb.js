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

var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js')

var pando_api_extensions_pb = require('../../../../pando/api/extensions_pb.js')

var pando_api_shared_pb = require('../../../../pando/api/shared_pb.js')

var pando_api_survey_v1_shared_pb = require('../../../../pando/api/survey/v1/shared_pb.js')
const proto = {};
proto.pando = {};
proto.pando.api = {};
proto.pando.api.survey = {};
proto.pando.api.survey.v1 = require('./admin_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.pando.api.survey.v1.SurveyAdminServiceClient =
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
proto.pando.api.survey.v1.SurveyAdminServicePromiseClient =
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
 *   !proto.pando.api.survey.v1.Survey,
 *   !proto.pando.api.survey.v1.Survey>}
 */
const methodDescriptor_SurveyAdminService_CreateSurvey = new grpc.web.MethodDescriptor(
  '/pando.api.survey.v1.SurveyAdminService/CreateSurvey',
  grpc.web.MethodType.UNARY,
  pando_api_survey_v1_shared_pb.Survey,
  pando_api_survey_v1_shared_pb.Survey,
  /**
   * @param {!proto.pando.api.survey.v1.Survey} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_survey_v1_shared_pb.Survey.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pando.api.survey.v1.Survey,
 *   !proto.pando.api.survey.v1.Survey>}
 */
const methodInfo_SurveyAdminService_CreateSurvey = new grpc.web.AbstractClientBase.MethodInfo(
  pando_api_survey_v1_shared_pb.Survey,
  /**
   * @param {!proto.pando.api.survey.v1.Survey} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_survey_v1_shared_pb.Survey.deserializeBinary
);


/**
 * @param {!proto.pando.api.survey.v1.Survey} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pando.api.survey.v1.Survey)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pando.api.survey.v1.Survey>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pando.api.survey.v1.SurveyAdminServiceClient.prototype.createSurvey =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pando.api.survey.v1.SurveyAdminService/CreateSurvey',
      request,
      metadata || {},
      methodDescriptor_SurveyAdminService_CreateSurvey,
      callback);
};


/**
 * @param {!proto.pando.api.survey.v1.Survey} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pando.api.survey.v1.Survey>}
 *     Promise that resolves to the response
 */
proto.pando.api.survey.v1.SurveyAdminServicePromiseClient.prototype.createSurvey =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pando.api.survey.v1.SurveyAdminService/CreateSurvey',
      request,
      metadata || {},
      methodDescriptor_SurveyAdminService_CreateSurvey);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pando.api.survey.v1.Question,
 *   !proto.pando.api.survey.v1.Question>}
 */
const methodDescriptor_SurveyAdminService_CreateQuestion = new grpc.web.MethodDescriptor(
  '/pando.api.survey.v1.SurveyAdminService/CreateQuestion',
  grpc.web.MethodType.UNARY,
  pando_api_survey_v1_shared_pb.Question,
  pando_api_survey_v1_shared_pb.Question,
  /**
   * @param {!proto.pando.api.survey.v1.Question} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_survey_v1_shared_pb.Question.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pando.api.survey.v1.Question,
 *   !proto.pando.api.survey.v1.Question>}
 */
const methodInfo_SurveyAdminService_CreateQuestion = new grpc.web.AbstractClientBase.MethodInfo(
  pando_api_survey_v1_shared_pb.Question,
  /**
   * @param {!proto.pando.api.survey.v1.Question} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_survey_v1_shared_pb.Question.deserializeBinary
);


/**
 * @param {!proto.pando.api.survey.v1.Question} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pando.api.survey.v1.Question)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pando.api.survey.v1.Question>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pando.api.survey.v1.SurveyAdminServiceClient.prototype.createQuestion =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pando.api.survey.v1.SurveyAdminService/CreateQuestion',
      request,
      metadata || {},
      methodDescriptor_SurveyAdminService_CreateQuestion,
      callback);
};


/**
 * @param {!proto.pando.api.survey.v1.Question} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pando.api.survey.v1.Question>}
 *     Promise that resolves to the response
 */
proto.pando.api.survey.v1.SurveyAdminServicePromiseClient.prototype.createQuestion =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pando.api.survey.v1.SurveyAdminService/CreateQuestion',
      request,
      metadata || {},
      methodDescriptor_SurveyAdminService_CreateQuestion);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pando.api.survey.v1.PlaybackData,
 *   !proto.pando.api.survey.v1.PlaybackData>}
 */
const methodDescriptor_SurveyAdminService_CreatePlaybackData = new grpc.web.MethodDescriptor(
  '/pando.api.survey.v1.SurveyAdminService/CreatePlaybackData',
  grpc.web.MethodType.UNARY,
  pando_api_survey_v1_shared_pb.PlaybackData,
  pando_api_survey_v1_shared_pb.PlaybackData,
  /**
   * @param {!proto.pando.api.survey.v1.PlaybackData} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_survey_v1_shared_pb.PlaybackData.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pando.api.survey.v1.PlaybackData,
 *   !proto.pando.api.survey.v1.PlaybackData>}
 */
const methodInfo_SurveyAdminService_CreatePlaybackData = new grpc.web.AbstractClientBase.MethodInfo(
  pando_api_survey_v1_shared_pb.PlaybackData,
  /**
   * @param {!proto.pando.api.survey.v1.PlaybackData} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_survey_v1_shared_pb.PlaybackData.deserializeBinary
);


/**
 * @param {!proto.pando.api.survey.v1.PlaybackData} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pando.api.survey.v1.PlaybackData)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pando.api.survey.v1.PlaybackData>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pando.api.survey.v1.SurveyAdminServiceClient.prototype.createPlaybackData =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pando.api.survey.v1.SurveyAdminService/CreatePlaybackData',
      request,
      metadata || {},
      methodDescriptor_SurveyAdminService_CreatePlaybackData,
      callback);
};


/**
 * @param {!proto.pando.api.survey.v1.PlaybackData} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pando.api.survey.v1.PlaybackData>}
 *     Promise that resolves to the response
 */
proto.pando.api.survey.v1.SurveyAdminServicePromiseClient.prototype.createPlaybackData =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pando.api.survey.v1.SurveyAdminService/CreatePlaybackData',
      request,
      metadata || {},
      methodDescriptor_SurveyAdminService_CreatePlaybackData);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pando.api.survey.v1.SurveyQuestionDestination,
 *   !proto.pando.api.survey.v1.SurveyQuestionDestination>}
 */
const methodDescriptor_SurveyAdminService_CreateSurveyQuestionDestination = new grpc.web.MethodDescriptor(
  '/pando.api.survey.v1.SurveyAdminService/CreateSurveyQuestionDestination',
  grpc.web.MethodType.UNARY,
  pando_api_survey_v1_shared_pb.SurveyQuestionDestination,
  pando_api_survey_v1_shared_pb.SurveyQuestionDestination,
  /**
   * @param {!proto.pando.api.survey.v1.SurveyQuestionDestination} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_survey_v1_shared_pb.SurveyQuestionDestination.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pando.api.survey.v1.SurveyQuestionDestination,
 *   !proto.pando.api.survey.v1.SurveyQuestionDestination>}
 */
const methodInfo_SurveyAdminService_CreateSurveyQuestionDestination = new grpc.web.AbstractClientBase.MethodInfo(
  pando_api_survey_v1_shared_pb.SurveyQuestionDestination,
  /**
   * @param {!proto.pando.api.survey.v1.SurveyQuestionDestination} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_survey_v1_shared_pb.SurveyQuestionDestination.deserializeBinary
);


/**
 * @param {!proto.pando.api.survey.v1.SurveyQuestionDestination} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pando.api.survey.v1.SurveyQuestionDestination)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pando.api.survey.v1.SurveyQuestionDestination>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pando.api.survey.v1.SurveyAdminServiceClient.prototype.createSurveyQuestionDestination =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pando.api.survey.v1.SurveyAdminService/CreateSurveyQuestionDestination',
      request,
      metadata || {},
      methodDescriptor_SurveyAdminService_CreateSurveyQuestionDestination,
      callback);
};


/**
 * @param {!proto.pando.api.survey.v1.SurveyQuestionDestination} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pando.api.survey.v1.SurveyQuestionDestination>}
 *     Promise that resolves to the response
 */
proto.pando.api.survey.v1.SurveyAdminServicePromiseClient.prototype.createSurveyQuestionDestination =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pando.api.survey.v1.SurveyAdminService/CreateSurveyQuestionDestination',
      request,
      metadata || {},
      methodDescriptor_SurveyAdminService_CreateSurveyQuestionDestination);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pando.api.survey.v1.SurveyVariable,
 *   !proto.pando.api.survey.v1.SurveyVariable>}
 */
const methodDescriptor_SurveyAdminService_CreateSurveyVariable = new grpc.web.MethodDescriptor(
  '/pando.api.survey.v1.SurveyAdminService/CreateSurveyVariable',
  grpc.web.MethodType.UNARY,
  proto.pando.api.survey.v1.SurveyVariable,
  proto.pando.api.survey.v1.SurveyVariable,
  /**
   * @param {!proto.pando.api.survey.v1.SurveyVariable} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pando.api.survey.v1.SurveyVariable.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pando.api.survey.v1.SurveyVariable,
 *   !proto.pando.api.survey.v1.SurveyVariable>}
 */
const methodInfo_SurveyAdminService_CreateSurveyVariable = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pando.api.survey.v1.SurveyVariable,
  /**
   * @param {!proto.pando.api.survey.v1.SurveyVariable} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pando.api.survey.v1.SurveyVariable.deserializeBinary
);


/**
 * @param {!proto.pando.api.survey.v1.SurveyVariable} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pando.api.survey.v1.SurveyVariable)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pando.api.survey.v1.SurveyVariable>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pando.api.survey.v1.SurveyAdminServiceClient.prototype.createSurveyVariable =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pando.api.survey.v1.SurveyAdminService/CreateSurveyVariable',
      request,
      metadata || {},
      methodDescriptor_SurveyAdminService_CreateSurveyVariable,
      callback);
};


/**
 * @param {!proto.pando.api.survey.v1.SurveyVariable} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pando.api.survey.v1.SurveyVariable>}
 *     Promise that resolves to the response
 */
proto.pando.api.survey.v1.SurveyAdminServicePromiseClient.prototype.createSurveyVariable =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pando.api.survey.v1.SurveyAdminService/CreateSurveyVariable',
      request,
      metadata || {},
      methodDescriptor_SurveyAdminService_CreateSurveyVariable);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pando.api.survey.v1.Variable,
 *   !proto.pando.api.survey.v1.Variable>}
 */
const methodDescriptor_SurveyAdminService_CreateVariable = new grpc.web.MethodDescriptor(
  '/pando.api.survey.v1.SurveyAdminService/CreateVariable',
  grpc.web.MethodType.UNARY,
  pando_api_survey_v1_shared_pb.Variable,
  pando_api_survey_v1_shared_pb.Variable,
  /**
   * @param {!proto.pando.api.survey.v1.Variable} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_survey_v1_shared_pb.Variable.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pando.api.survey.v1.Variable,
 *   !proto.pando.api.survey.v1.Variable>}
 */
const methodInfo_SurveyAdminService_CreateVariable = new grpc.web.AbstractClientBase.MethodInfo(
  pando_api_survey_v1_shared_pb.Variable,
  /**
   * @param {!proto.pando.api.survey.v1.Variable} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_survey_v1_shared_pb.Variable.deserializeBinary
);


/**
 * @param {!proto.pando.api.survey.v1.Variable} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pando.api.survey.v1.Variable)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pando.api.survey.v1.Variable>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pando.api.survey.v1.SurveyAdminServiceClient.prototype.createVariable =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pando.api.survey.v1.SurveyAdminService/CreateVariable',
      request,
      metadata || {},
      methodDescriptor_SurveyAdminService_CreateVariable,
      callback);
};


/**
 * @param {!proto.pando.api.survey.v1.Variable} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pando.api.survey.v1.Variable>}
 *     Promise that resolves to the response
 */
proto.pando.api.survey.v1.SurveyAdminServicePromiseClient.prototype.createVariable =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pando.api.survey.v1.SurveyAdminService/CreateVariable',
      request,
      metadata || {},
      methodDescriptor_SurveyAdminService_CreateVariable);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pando.api.survey.v1.CreateVariablesRequest,
 *   !proto.pando.api.survey.v1.VariableList>}
 */
const methodDescriptor_SurveyAdminService_CreateVariables = new grpc.web.MethodDescriptor(
  '/pando.api.survey.v1.SurveyAdminService/CreateVariables',
  grpc.web.MethodType.UNARY,
  proto.pando.api.survey.v1.CreateVariablesRequest,
  pando_api_survey_v1_shared_pb.VariableList,
  /**
   * @param {!proto.pando.api.survey.v1.CreateVariablesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_survey_v1_shared_pb.VariableList.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pando.api.survey.v1.CreateVariablesRequest,
 *   !proto.pando.api.survey.v1.VariableList>}
 */
const methodInfo_SurveyAdminService_CreateVariables = new grpc.web.AbstractClientBase.MethodInfo(
  pando_api_survey_v1_shared_pb.VariableList,
  /**
   * @param {!proto.pando.api.survey.v1.CreateVariablesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_survey_v1_shared_pb.VariableList.deserializeBinary
);


/**
 * @param {!proto.pando.api.survey.v1.CreateVariablesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pando.api.survey.v1.VariableList)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pando.api.survey.v1.VariableList>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pando.api.survey.v1.SurveyAdminServiceClient.prototype.createVariables =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pando.api.survey.v1.SurveyAdminService/CreateVariables',
      request,
      metadata || {},
      methodDescriptor_SurveyAdminService_CreateVariables,
      callback);
};


/**
 * @param {!proto.pando.api.survey.v1.CreateVariablesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pando.api.survey.v1.VariableList>}
 *     Promise that resolves to the response
 */
proto.pando.api.survey.v1.SurveyAdminServicePromiseClient.prototype.createVariables =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pando.api.survey.v1.SurveyAdminService/CreateVariables',
      request,
      metadata || {},
      methodDescriptor_SurveyAdminService_CreateVariables);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pando.api.survey.v1.CreateInstanceRequest,
 *   !proto.pando.api.survey.v1.Instance>}
 */
const methodDescriptor_SurveyAdminService_CreateInstance = new grpc.web.MethodDescriptor(
  '/pando.api.survey.v1.SurveyAdminService/CreateInstance',
  grpc.web.MethodType.UNARY,
  proto.pando.api.survey.v1.CreateInstanceRequest,
  pando_api_survey_v1_shared_pb.Instance,
  /**
   * @param {!proto.pando.api.survey.v1.CreateInstanceRequest} request
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
 *   !proto.pando.api.survey.v1.CreateInstanceRequest,
 *   !proto.pando.api.survey.v1.Instance>}
 */
const methodInfo_SurveyAdminService_CreateInstance = new grpc.web.AbstractClientBase.MethodInfo(
  pando_api_survey_v1_shared_pb.Instance,
  /**
   * @param {!proto.pando.api.survey.v1.CreateInstanceRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_survey_v1_shared_pb.Instance.deserializeBinary
);


/**
 * @param {!proto.pando.api.survey.v1.CreateInstanceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pando.api.survey.v1.Instance)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pando.api.survey.v1.Instance>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pando.api.survey.v1.SurveyAdminServiceClient.prototype.createInstance =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pando.api.survey.v1.SurveyAdminService/CreateInstance',
      request,
      metadata || {},
      methodDescriptor_SurveyAdminService_CreateInstance,
      callback);
};


/**
 * @param {!proto.pando.api.survey.v1.CreateInstanceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pando.api.survey.v1.Instance>}
 *     Promise that resolves to the response
 */
proto.pando.api.survey.v1.SurveyAdminServicePromiseClient.prototype.createInstance =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pando.api.survey.v1.SurveyAdminService/CreateInstance',
      request,
      metadata || {},
      methodDescriptor_SurveyAdminService_CreateInstance);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pando.api.survey.v1.AnswerOption,
 *   !proto.pando.api.survey.v1.AnswerOption>}
 */
const methodDescriptor_SurveyAdminService_CreateAnswerOption = new grpc.web.MethodDescriptor(
  '/pando.api.survey.v1.SurveyAdminService/CreateAnswerOption',
  grpc.web.MethodType.UNARY,
  pando_api_survey_v1_shared_pb.AnswerOption,
  pando_api_survey_v1_shared_pb.AnswerOption,
  /**
   * @param {!proto.pando.api.survey.v1.AnswerOption} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_survey_v1_shared_pb.AnswerOption.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pando.api.survey.v1.AnswerOption,
 *   !proto.pando.api.survey.v1.AnswerOption>}
 */
const methodInfo_SurveyAdminService_CreateAnswerOption = new grpc.web.AbstractClientBase.MethodInfo(
  pando_api_survey_v1_shared_pb.AnswerOption,
  /**
   * @param {!proto.pando.api.survey.v1.AnswerOption} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_survey_v1_shared_pb.AnswerOption.deserializeBinary
);


/**
 * @param {!proto.pando.api.survey.v1.AnswerOption} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pando.api.survey.v1.AnswerOption)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pando.api.survey.v1.AnswerOption>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pando.api.survey.v1.SurveyAdminServiceClient.prototype.createAnswerOption =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pando.api.survey.v1.SurveyAdminService/CreateAnswerOption',
      request,
      metadata || {},
      methodDescriptor_SurveyAdminService_CreateAnswerOption,
      callback);
};


/**
 * @param {!proto.pando.api.survey.v1.AnswerOption} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pando.api.survey.v1.AnswerOption>}
 *     Promise that resolves to the response
 */
proto.pando.api.survey.v1.SurveyAdminServicePromiseClient.prototype.createAnswerOption =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pando.api.survey.v1.SurveyAdminService/CreateAnswerOption',
      request,
      metadata || {},
      methodDescriptor_SurveyAdminService_CreateAnswerOption);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pando.api.survey.v1.CreateSurveyVersionRequest,
 *   !proto.pando.api.survey.v1.Survey>}
 */
const methodDescriptor_SurveyAdminService_CreateSurveyVersion = new grpc.web.MethodDescriptor(
  '/pando.api.survey.v1.SurveyAdminService/CreateSurveyVersion',
  grpc.web.MethodType.UNARY,
  proto.pando.api.survey.v1.CreateSurveyVersionRequest,
  pando_api_survey_v1_shared_pb.Survey,
  /**
   * @param {!proto.pando.api.survey.v1.CreateSurveyVersionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_survey_v1_shared_pb.Survey.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pando.api.survey.v1.CreateSurveyVersionRequest,
 *   !proto.pando.api.survey.v1.Survey>}
 */
const methodInfo_SurveyAdminService_CreateSurveyVersion = new grpc.web.AbstractClientBase.MethodInfo(
  pando_api_survey_v1_shared_pb.Survey,
  /**
   * @param {!proto.pando.api.survey.v1.CreateSurveyVersionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_survey_v1_shared_pb.Survey.deserializeBinary
);


/**
 * @param {!proto.pando.api.survey.v1.CreateSurveyVersionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pando.api.survey.v1.Survey)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pando.api.survey.v1.Survey>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pando.api.survey.v1.SurveyAdminServiceClient.prototype.createSurveyVersion =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pando.api.survey.v1.SurveyAdminService/CreateSurveyVersion',
      request,
      metadata || {},
      methodDescriptor_SurveyAdminService_CreateSurveyVersion,
      callback);
};


/**
 * @param {!proto.pando.api.survey.v1.CreateSurveyVersionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pando.api.survey.v1.Survey>}
 *     Promise that resolves to the response
 */
proto.pando.api.survey.v1.SurveyAdminServicePromiseClient.prototype.createSurveyVersion =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pando.api.survey.v1.SurveyAdminService/CreateSurveyVersion',
      request,
      metadata || {},
      methodDescriptor_SurveyAdminService_CreateSurveyVersion);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pando.api.survey.v1.GetSurveyRequest,
 *   !proto.pando.api.survey.v1.Survey>}
 */
const methodDescriptor_SurveyAdminService_GetSurvey = new grpc.web.MethodDescriptor(
  '/pando.api.survey.v1.SurveyAdminService/GetSurvey',
  grpc.web.MethodType.UNARY,
  proto.pando.api.survey.v1.GetSurveyRequest,
  pando_api_survey_v1_shared_pb.Survey,
  /**
   * @param {!proto.pando.api.survey.v1.GetSurveyRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_survey_v1_shared_pb.Survey.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pando.api.survey.v1.GetSurveyRequest,
 *   !proto.pando.api.survey.v1.Survey>}
 */
const methodInfo_SurveyAdminService_GetSurvey = new grpc.web.AbstractClientBase.MethodInfo(
  pando_api_survey_v1_shared_pb.Survey,
  /**
   * @param {!proto.pando.api.survey.v1.GetSurveyRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_survey_v1_shared_pb.Survey.deserializeBinary
);


/**
 * @param {!proto.pando.api.survey.v1.GetSurveyRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pando.api.survey.v1.Survey)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pando.api.survey.v1.Survey>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pando.api.survey.v1.SurveyAdminServiceClient.prototype.getSurvey =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pando.api.survey.v1.SurveyAdminService/GetSurvey',
      request,
      metadata || {},
      methodDescriptor_SurveyAdminService_GetSurvey,
      callback);
};


/**
 * @param {!proto.pando.api.survey.v1.GetSurveyRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pando.api.survey.v1.Survey>}
 *     Promise that resolves to the response
 */
proto.pando.api.survey.v1.SurveyAdminServicePromiseClient.prototype.getSurvey =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pando.api.survey.v1.SurveyAdminService/GetSurvey',
      request,
      metadata || {},
      methodDescriptor_SurveyAdminService_GetSurvey);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pando.api.survey.v1.GetSurveysRequest,
 *   !proto.pando.api.survey.v1.SurveyDetailList>}
 */
const methodDescriptor_SurveyAdminService_GetSurveys = new grpc.web.MethodDescriptor(
  '/pando.api.survey.v1.SurveyAdminService/GetSurveys',
  grpc.web.MethodType.UNARY,
  proto.pando.api.survey.v1.GetSurveysRequest,
  pando_api_survey_v1_shared_pb.SurveyDetailList,
  /**
   * @param {!proto.pando.api.survey.v1.GetSurveysRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_survey_v1_shared_pb.SurveyDetailList.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pando.api.survey.v1.GetSurveysRequest,
 *   !proto.pando.api.survey.v1.SurveyDetailList>}
 */
const methodInfo_SurveyAdminService_GetSurveys = new grpc.web.AbstractClientBase.MethodInfo(
  pando_api_survey_v1_shared_pb.SurveyDetailList,
  /**
   * @param {!proto.pando.api.survey.v1.GetSurveysRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_survey_v1_shared_pb.SurveyDetailList.deserializeBinary
);


/**
 * @param {!proto.pando.api.survey.v1.GetSurveysRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pando.api.survey.v1.SurveyDetailList)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pando.api.survey.v1.SurveyDetailList>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pando.api.survey.v1.SurveyAdminServiceClient.prototype.getSurveys =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pando.api.survey.v1.SurveyAdminService/GetSurveys',
      request,
      metadata || {},
      methodDescriptor_SurveyAdminService_GetSurveys,
      callback);
};


/**
 * @param {!proto.pando.api.survey.v1.GetSurveysRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pando.api.survey.v1.SurveyDetailList>}
 *     Promise that resolves to the response
 */
proto.pando.api.survey.v1.SurveyAdminServicePromiseClient.prototype.getSurveys =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pando.api.survey.v1.SurveyAdminService/GetSurveys',
      request,
      metadata || {},
      methodDescriptor_SurveyAdminService_GetSurveys);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pando.api.survey.v1.GetQuestionRequest,
 *   !proto.pando.api.survey.v1.Question>}
 */
const methodDescriptor_SurveyAdminService_GetQuestion = new grpc.web.MethodDescriptor(
  '/pando.api.survey.v1.SurveyAdminService/GetQuestion',
  grpc.web.MethodType.UNARY,
  proto.pando.api.survey.v1.GetQuestionRequest,
  pando_api_survey_v1_shared_pb.Question,
  /**
   * @param {!proto.pando.api.survey.v1.GetQuestionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_survey_v1_shared_pb.Question.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pando.api.survey.v1.GetQuestionRequest,
 *   !proto.pando.api.survey.v1.Question>}
 */
const methodInfo_SurveyAdminService_GetQuestion = new grpc.web.AbstractClientBase.MethodInfo(
  pando_api_survey_v1_shared_pb.Question,
  /**
   * @param {!proto.pando.api.survey.v1.GetQuestionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_survey_v1_shared_pb.Question.deserializeBinary
);


/**
 * @param {!proto.pando.api.survey.v1.GetQuestionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pando.api.survey.v1.Question)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pando.api.survey.v1.Question>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pando.api.survey.v1.SurveyAdminServiceClient.prototype.getQuestion =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pando.api.survey.v1.SurveyAdminService/GetQuestion',
      request,
      metadata || {},
      methodDescriptor_SurveyAdminService_GetQuestion,
      callback);
};


/**
 * @param {!proto.pando.api.survey.v1.GetQuestionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pando.api.survey.v1.Question>}
 *     Promise that resolves to the response
 */
proto.pando.api.survey.v1.SurveyAdminServicePromiseClient.prototype.getQuestion =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pando.api.survey.v1.SurveyAdminService/GetQuestion',
      request,
      metadata || {},
      methodDescriptor_SurveyAdminService_GetQuestion);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pando.api.survey.v1.GetQuestionsRequest,
 *   !proto.pando.api.survey.v1.SurveyQuestionList>}
 */
const methodDescriptor_SurveyAdminService_GetQuestions = new grpc.web.MethodDescriptor(
  '/pando.api.survey.v1.SurveyAdminService/GetQuestions',
  grpc.web.MethodType.UNARY,
  proto.pando.api.survey.v1.GetQuestionsRequest,
  pando_api_survey_v1_shared_pb.SurveyQuestionList,
  /**
   * @param {!proto.pando.api.survey.v1.GetQuestionsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_survey_v1_shared_pb.SurveyQuestionList.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pando.api.survey.v1.GetQuestionsRequest,
 *   !proto.pando.api.survey.v1.SurveyQuestionList>}
 */
const methodInfo_SurveyAdminService_GetQuestions = new grpc.web.AbstractClientBase.MethodInfo(
  pando_api_survey_v1_shared_pb.SurveyQuestionList,
  /**
   * @param {!proto.pando.api.survey.v1.GetQuestionsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_survey_v1_shared_pb.SurveyQuestionList.deserializeBinary
);


/**
 * @param {!proto.pando.api.survey.v1.GetQuestionsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pando.api.survey.v1.SurveyQuestionList)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pando.api.survey.v1.SurveyQuestionList>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pando.api.survey.v1.SurveyAdminServiceClient.prototype.getQuestions =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pando.api.survey.v1.SurveyAdminService/GetQuestions',
      request,
      metadata || {},
      methodDescriptor_SurveyAdminService_GetQuestions,
      callback);
};


/**
 * @param {!proto.pando.api.survey.v1.GetQuestionsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pando.api.survey.v1.SurveyQuestionList>}
 *     Promise that resolves to the response
 */
proto.pando.api.survey.v1.SurveyAdminServicePromiseClient.prototype.getQuestions =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pando.api.survey.v1.SurveyAdminService/GetQuestions',
      request,
      metadata || {},
      methodDescriptor_SurveyAdminService_GetQuestions);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pando.api.survey.v1.GetAnswerOptionRequest,
 *   !proto.pando.api.survey.v1.AnswerOption>}
 */
const methodDescriptor_SurveyAdminService_GetAnswerOption = new grpc.web.MethodDescriptor(
  '/pando.api.survey.v1.SurveyAdminService/GetAnswerOption',
  grpc.web.MethodType.UNARY,
  proto.pando.api.survey.v1.GetAnswerOptionRequest,
  pando_api_survey_v1_shared_pb.AnswerOption,
  /**
   * @param {!proto.pando.api.survey.v1.GetAnswerOptionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_survey_v1_shared_pb.AnswerOption.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pando.api.survey.v1.GetAnswerOptionRequest,
 *   !proto.pando.api.survey.v1.AnswerOption>}
 */
const methodInfo_SurveyAdminService_GetAnswerOption = new grpc.web.AbstractClientBase.MethodInfo(
  pando_api_survey_v1_shared_pb.AnswerOption,
  /**
   * @param {!proto.pando.api.survey.v1.GetAnswerOptionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_survey_v1_shared_pb.AnswerOption.deserializeBinary
);


/**
 * @param {!proto.pando.api.survey.v1.GetAnswerOptionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pando.api.survey.v1.AnswerOption)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pando.api.survey.v1.AnswerOption>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pando.api.survey.v1.SurveyAdminServiceClient.prototype.getAnswerOption =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pando.api.survey.v1.SurveyAdminService/GetAnswerOption',
      request,
      metadata || {},
      methodDescriptor_SurveyAdminService_GetAnswerOption,
      callback);
};


/**
 * @param {!proto.pando.api.survey.v1.GetAnswerOptionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pando.api.survey.v1.AnswerOption>}
 *     Promise that resolves to the response
 */
proto.pando.api.survey.v1.SurveyAdminServicePromiseClient.prototype.getAnswerOption =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pando.api.survey.v1.SurveyAdminService/GetAnswerOption',
      request,
      metadata || {},
      methodDescriptor_SurveyAdminService_GetAnswerOption);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pando.api.survey.v1.GetAnswerOptionsRequest,
 *   !proto.pando.api.survey.v1.AnswerOptionList>}
 */
const methodDescriptor_SurveyAdminService_GetAnswerOptions = new grpc.web.MethodDescriptor(
  '/pando.api.survey.v1.SurveyAdminService/GetAnswerOptions',
  grpc.web.MethodType.UNARY,
  proto.pando.api.survey.v1.GetAnswerOptionsRequest,
  pando_api_survey_v1_shared_pb.AnswerOptionList,
  /**
   * @param {!proto.pando.api.survey.v1.GetAnswerOptionsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_survey_v1_shared_pb.AnswerOptionList.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pando.api.survey.v1.GetAnswerOptionsRequest,
 *   !proto.pando.api.survey.v1.AnswerOptionList>}
 */
const methodInfo_SurveyAdminService_GetAnswerOptions = new grpc.web.AbstractClientBase.MethodInfo(
  pando_api_survey_v1_shared_pb.AnswerOptionList,
  /**
   * @param {!proto.pando.api.survey.v1.GetAnswerOptionsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_survey_v1_shared_pb.AnswerOptionList.deserializeBinary
);


/**
 * @param {!proto.pando.api.survey.v1.GetAnswerOptionsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pando.api.survey.v1.AnswerOptionList)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pando.api.survey.v1.AnswerOptionList>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pando.api.survey.v1.SurveyAdminServiceClient.prototype.getAnswerOptions =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pando.api.survey.v1.SurveyAdminService/GetAnswerOptions',
      request,
      metadata || {},
      methodDescriptor_SurveyAdminService_GetAnswerOptions,
      callback);
};


/**
 * @param {!proto.pando.api.survey.v1.GetAnswerOptionsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pando.api.survey.v1.AnswerOptionList>}
 *     Promise that resolves to the response
 */
proto.pando.api.survey.v1.SurveyAdminServicePromiseClient.prototype.getAnswerOptions =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pando.api.survey.v1.SurveyAdminService/GetAnswerOptions',
      request,
      metadata || {},
      methodDescriptor_SurveyAdminService_GetAnswerOptions);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pando.api.survey.v1.GetPlaybackDataListRequest,
 *   !proto.pando.api.survey.v1.PlaybackDataList>}
 */
const methodDescriptor_SurveyAdminService_GetPlaybackDataList = new grpc.web.MethodDescriptor(
  '/pando.api.survey.v1.SurveyAdminService/GetPlaybackDataList',
  grpc.web.MethodType.UNARY,
  proto.pando.api.survey.v1.GetPlaybackDataListRequest,
  pando_api_survey_v1_shared_pb.PlaybackDataList,
  /**
   * @param {!proto.pando.api.survey.v1.GetPlaybackDataListRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_survey_v1_shared_pb.PlaybackDataList.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pando.api.survey.v1.GetPlaybackDataListRequest,
 *   !proto.pando.api.survey.v1.PlaybackDataList>}
 */
const methodInfo_SurveyAdminService_GetPlaybackDataList = new grpc.web.AbstractClientBase.MethodInfo(
  pando_api_survey_v1_shared_pb.PlaybackDataList,
  /**
   * @param {!proto.pando.api.survey.v1.GetPlaybackDataListRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_survey_v1_shared_pb.PlaybackDataList.deserializeBinary
);


/**
 * @param {!proto.pando.api.survey.v1.GetPlaybackDataListRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pando.api.survey.v1.PlaybackDataList)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pando.api.survey.v1.PlaybackDataList>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pando.api.survey.v1.SurveyAdminServiceClient.prototype.getPlaybackDataList =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pando.api.survey.v1.SurveyAdminService/GetPlaybackDataList',
      request,
      metadata || {},
      methodDescriptor_SurveyAdminService_GetPlaybackDataList,
      callback);
};


/**
 * @param {!proto.pando.api.survey.v1.GetPlaybackDataListRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pando.api.survey.v1.PlaybackDataList>}
 *     Promise that resolves to the response
 */
proto.pando.api.survey.v1.SurveyAdminServicePromiseClient.prototype.getPlaybackDataList =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pando.api.survey.v1.SurveyAdminService/GetPlaybackDataList',
      request,
      metadata || {},
      methodDescriptor_SurveyAdminService_GetPlaybackDataList);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pando.api.survey.v1.GetSurveyQuestionDestinationRequest,
 *   !proto.pando.api.survey.v1.SurveyQuestionDestination>}
 */
const methodDescriptor_SurveyAdminService_GetSurveyQuestionDestination = new grpc.web.MethodDescriptor(
  '/pando.api.survey.v1.SurveyAdminService/GetSurveyQuestionDestination',
  grpc.web.MethodType.UNARY,
  proto.pando.api.survey.v1.GetSurveyQuestionDestinationRequest,
  pando_api_survey_v1_shared_pb.SurveyQuestionDestination,
  /**
   * @param {!proto.pando.api.survey.v1.GetSurveyQuestionDestinationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_survey_v1_shared_pb.SurveyQuestionDestination.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pando.api.survey.v1.GetSurveyQuestionDestinationRequest,
 *   !proto.pando.api.survey.v1.SurveyQuestionDestination>}
 */
const methodInfo_SurveyAdminService_GetSurveyQuestionDestination = new grpc.web.AbstractClientBase.MethodInfo(
  pando_api_survey_v1_shared_pb.SurveyQuestionDestination,
  /**
   * @param {!proto.pando.api.survey.v1.GetSurveyQuestionDestinationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_survey_v1_shared_pb.SurveyQuestionDestination.deserializeBinary
);


/**
 * @param {!proto.pando.api.survey.v1.GetSurveyQuestionDestinationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pando.api.survey.v1.SurveyQuestionDestination)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pando.api.survey.v1.SurveyQuestionDestination>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pando.api.survey.v1.SurveyAdminServiceClient.prototype.getSurveyQuestionDestination =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pando.api.survey.v1.SurveyAdminService/GetSurveyQuestionDestination',
      request,
      metadata || {},
      methodDescriptor_SurveyAdminService_GetSurveyQuestionDestination,
      callback);
};


/**
 * @param {!proto.pando.api.survey.v1.GetSurveyQuestionDestinationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pando.api.survey.v1.SurveyQuestionDestination>}
 *     Promise that resolves to the response
 */
proto.pando.api.survey.v1.SurveyAdminServicePromiseClient.prototype.getSurveyQuestionDestination =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pando.api.survey.v1.SurveyAdminService/GetSurveyQuestionDestination',
      request,
      metadata || {},
      methodDescriptor_SurveyAdminService_GetSurveyQuestionDestination);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pando.api.survey.v1.GetSurveyQuestionDestinationsRequest,
 *   !proto.pando.api.survey.v1.SurveyQuestionDestinationList>}
 */
const methodDescriptor_SurveyAdminService_GetSurveyQuestionDestinations = new grpc.web.MethodDescriptor(
  '/pando.api.survey.v1.SurveyAdminService/GetSurveyQuestionDestinations',
  grpc.web.MethodType.UNARY,
  proto.pando.api.survey.v1.GetSurveyQuestionDestinationsRequest,
  pando_api_survey_v1_shared_pb.SurveyQuestionDestinationList,
  /**
   * @param {!proto.pando.api.survey.v1.GetSurveyQuestionDestinationsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_survey_v1_shared_pb.SurveyQuestionDestinationList.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pando.api.survey.v1.GetSurveyQuestionDestinationsRequest,
 *   !proto.pando.api.survey.v1.SurveyQuestionDestinationList>}
 */
const methodInfo_SurveyAdminService_GetSurveyQuestionDestinations = new grpc.web.AbstractClientBase.MethodInfo(
  pando_api_survey_v1_shared_pb.SurveyQuestionDestinationList,
  /**
   * @param {!proto.pando.api.survey.v1.GetSurveyQuestionDestinationsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_survey_v1_shared_pb.SurveyQuestionDestinationList.deserializeBinary
);


/**
 * @param {!proto.pando.api.survey.v1.GetSurveyQuestionDestinationsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pando.api.survey.v1.SurveyQuestionDestinationList)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pando.api.survey.v1.SurveyQuestionDestinationList>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pando.api.survey.v1.SurveyAdminServiceClient.prototype.getSurveyQuestionDestinations =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pando.api.survey.v1.SurveyAdminService/GetSurveyQuestionDestinations',
      request,
      metadata || {},
      methodDescriptor_SurveyAdminService_GetSurveyQuestionDestinations,
      callback);
};


/**
 * @param {!proto.pando.api.survey.v1.GetSurveyQuestionDestinationsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pando.api.survey.v1.SurveyQuestionDestinationList>}
 *     Promise that resolves to the response
 */
proto.pando.api.survey.v1.SurveyAdminServicePromiseClient.prototype.getSurveyQuestionDestinations =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pando.api.survey.v1.SurveyAdminService/GetSurveyQuestionDestinations',
      request,
      metadata || {},
      methodDescriptor_SurveyAdminService_GetSurveyQuestionDestinations);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pando.api.survey.v1.GetVariableRequest,
 *   !proto.pando.api.survey.v1.Variable>}
 */
const methodDescriptor_SurveyAdminService_GetVariable = new grpc.web.MethodDescriptor(
  '/pando.api.survey.v1.SurveyAdminService/GetVariable',
  grpc.web.MethodType.UNARY,
  proto.pando.api.survey.v1.GetVariableRequest,
  pando_api_survey_v1_shared_pb.Variable,
  /**
   * @param {!proto.pando.api.survey.v1.GetVariableRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_survey_v1_shared_pb.Variable.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pando.api.survey.v1.GetVariableRequest,
 *   !proto.pando.api.survey.v1.Variable>}
 */
const methodInfo_SurveyAdminService_GetVariable = new grpc.web.AbstractClientBase.MethodInfo(
  pando_api_survey_v1_shared_pb.Variable,
  /**
   * @param {!proto.pando.api.survey.v1.GetVariableRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_survey_v1_shared_pb.Variable.deserializeBinary
);


/**
 * @param {!proto.pando.api.survey.v1.GetVariableRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pando.api.survey.v1.Variable)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pando.api.survey.v1.Variable>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pando.api.survey.v1.SurveyAdminServiceClient.prototype.getVariable =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pando.api.survey.v1.SurveyAdminService/GetVariable',
      request,
      metadata || {},
      methodDescriptor_SurveyAdminService_GetVariable,
      callback);
};


/**
 * @param {!proto.pando.api.survey.v1.GetVariableRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pando.api.survey.v1.Variable>}
 *     Promise that resolves to the response
 */
proto.pando.api.survey.v1.SurveyAdminServicePromiseClient.prototype.getVariable =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pando.api.survey.v1.SurveyAdminService/GetVariable',
      request,
      metadata || {},
      methodDescriptor_SurveyAdminService_GetVariable);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pando.api.survey.v1.GetVariablesRequest,
 *   !proto.pando.api.survey.v1.VariableList>}
 */
const methodDescriptor_SurveyAdminService_GetVariables = new grpc.web.MethodDescriptor(
  '/pando.api.survey.v1.SurveyAdminService/GetVariables',
  grpc.web.MethodType.UNARY,
  proto.pando.api.survey.v1.GetVariablesRequest,
  pando_api_survey_v1_shared_pb.VariableList,
  /**
   * @param {!proto.pando.api.survey.v1.GetVariablesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_survey_v1_shared_pb.VariableList.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pando.api.survey.v1.GetVariablesRequest,
 *   !proto.pando.api.survey.v1.VariableList>}
 */
const methodInfo_SurveyAdminService_GetVariables = new grpc.web.AbstractClientBase.MethodInfo(
  pando_api_survey_v1_shared_pb.VariableList,
  /**
   * @param {!proto.pando.api.survey.v1.GetVariablesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_survey_v1_shared_pb.VariableList.deserializeBinary
);


/**
 * @param {!proto.pando.api.survey.v1.GetVariablesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pando.api.survey.v1.VariableList)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pando.api.survey.v1.VariableList>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pando.api.survey.v1.SurveyAdminServiceClient.prototype.getVariables =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pando.api.survey.v1.SurveyAdminService/GetVariables',
      request,
      metadata || {},
      methodDescriptor_SurveyAdminService_GetVariables,
      callback);
};


/**
 * @param {!proto.pando.api.survey.v1.GetVariablesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pando.api.survey.v1.VariableList>}
 *     Promise that resolves to the response
 */
proto.pando.api.survey.v1.SurveyAdminServicePromiseClient.prototype.getVariables =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pando.api.survey.v1.SurveyAdminService/GetVariables',
      request,
      metadata || {},
      methodDescriptor_SurveyAdminService_GetVariables);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pando.api.survey.v1.GetSurveyVariablesRequest,
 *   !proto.pando.api.survey.v1.VariableList>}
 */
const methodDescriptor_SurveyAdminService_GetSurveyVariables = new grpc.web.MethodDescriptor(
  '/pando.api.survey.v1.SurveyAdminService/GetSurveyVariables',
  grpc.web.MethodType.UNARY,
  proto.pando.api.survey.v1.GetSurveyVariablesRequest,
  pando_api_survey_v1_shared_pb.VariableList,
  /**
   * @param {!proto.pando.api.survey.v1.GetSurveyVariablesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_survey_v1_shared_pb.VariableList.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pando.api.survey.v1.GetSurveyVariablesRequest,
 *   !proto.pando.api.survey.v1.VariableList>}
 */
const methodInfo_SurveyAdminService_GetSurveyVariables = new grpc.web.AbstractClientBase.MethodInfo(
  pando_api_survey_v1_shared_pb.VariableList,
  /**
   * @param {!proto.pando.api.survey.v1.GetSurveyVariablesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_survey_v1_shared_pb.VariableList.deserializeBinary
);


/**
 * @param {!proto.pando.api.survey.v1.GetSurveyVariablesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pando.api.survey.v1.VariableList)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pando.api.survey.v1.VariableList>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pando.api.survey.v1.SurveyAdminServiceClient.prototype.getSurveyVariables =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pando.api.survey.v1.SurveyAdminService/GetSurveyVariables',
      request,
      metadata || {},
      methodDescriptor_SurveyAdminService_GetSurveyVariables,
      callback);
};


/**
 * @param {!proto.pando.api.survey.v1.GetSurveyVariablesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pando.api.survey.v1.VariableList>}
 *     Promise that resolves to the response
 */
proto.pando.api.survey.v1.SurveyAdminServicePromiseClient.prototype.getSurveyVariables =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pando.api.survey.v1.SurveyAdminService/GetSurveyVariables',
      request,
      metadata || {},
      methodDescriptor_SurveyAdminService_GetSurveyVariables);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pando.api.survey.v1.GetSurveyMediaListRequest,
 *   !proto.pando.api.survey.v1.MediaList>}
 */
const methodDescriptor_SurveyAdminService_GetSurveyMediaList = new grpc.web.MethodDescriptor(
  '/pando.api.survey.v1.SurveyAdminService/GetSurveyMediaList',
  grpc.web.MethodType.UNARY,
  proto.pando.api.survey.v1.GetSurveyMediaListRequest,
  pando_api_survey_v1_shared_pb.MediaList,
  /**
   * @param {!proto.pando.api.survey.v1.GetSurveyMediaListRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_survey_v1_shared_pb.MediaList.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pando.api.survey.v1.GetSurveyMediaListRequest,
 *   !proto.pando.api.survey.v1.MediaList>}
 */
const methodInfo_SurveyAdminService_GetSurveyMediaList = new grpc.web.AbstractClientBase.MethodInfo(
  pando_api_survey_v1_shared_pb.MediaList,
  /**
   * @param {!proto.pando.api.survey.v1.GetSurveyMediaListRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_survey_v1_shared_pb.MediaList.deserializeBinary
);


/**
 * @param {!proto.pando.api.survey.v1.GetSurveyMediaListRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pando.api.survey.v1.MediaList)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pando.api.survey.v1.MediaList>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pando.api.survey.v1.SurveyAdminServiceClient.prototype.getSurveyMediaList =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pando.api.survey.v1.SurveyAdminService/GetSurveyMediaList',
      request,
      metadata || {},
      methodDescriptor_SurveyAdminService_GetSurveyMediaList,
      callback);
};


/**
 * @param {!proto.pando.api.survey.v1.GetSurveyMediaListRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pando.api.survey.v1.MediaList>}
 *     Promise that resolves to the response
 */
proto.pando.api.survey.v1.SurveyAdminServicePromiseClient.prototype.getSurveyMediaList =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pando.api.survey.v1.SurveyAdminService/GetSurveyMediaList',
      request,
      metadata || {},
      methodDescriptor_SurveyAdminService_GetSurveyMediaList);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pando.api.survey.v1.GetVariableMediaListRequest,
 *   !proto.pando.api.survey.v1.MediaList>}
 */
const methodDescriptor_SurveyAdminService_GetVariableMediaList = new grpc.web.MethodDescriptor(
  '/pando.api.survey.v1.SurveyAdminService/GetVariableMediaList',
  grpc.web.MethodType.UNARY,
  proto.pando.api.survey.v1.GetVariableMediaListRequest,
  pando_api_survey_v1_shared_pb.MediaList,
  /**
   * @param {!proto.pando.api.survey.v1.GetVariableMediaListRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_survey_v1_shared_pb.MediaList.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pando.api.survey.v1.GetVariableMediaListRequest,
 *   !proto.pando.api.survey.v1.MediaList>}
 */
const methodInfo_SurveyAdminService_GetVariableMediaList = new grpc.web.AbstractClientBase.MethodInfo(
  pando_api_survey_v1_shared_pb.MediaList,
  /**
   * @param {!proto.pando.api.survey.v1.GetVariableMediaListRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_survey_v1_shared_pb.MediaList.deserializeBinary
);


/**
 * @param {!proto.pando.api.survey.v1.GetVariableMediaListRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pando.api.survey.v1.MediaList)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pando.api.survey.v1.MediaList>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pando.api.survey.v1.SurveyAdminServiceClient.prototype.getVariableMediaList =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pando.api.survey.v1.SurveyAdminService/GetVariableMediaList',
      request,
      metadata || {},
      methodDescriptor_SurveyAdminService_GetVariableMediaList,
      callback);
};


/**
 * @param {!proto.pando.api.survey.v1.GetVariableMediaListRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pando.api.survey.v1.MediaList>}
 *     Promise that resolves to the response
 */
proto.pando.api.survey.v1.SurveyAdminServicePromiseClient.prototype.getVariableMediaList =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pando.api.survey.v1.SurveyAdminService/GetVariableMediaList',
      request,
      metadata || {},
      methodDescriptor_SurveyAdminService_GetVariableMediaList);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pando.api.survey.v1.GetSurveyVersionsRequest,
 *   !proto.pando.api.survey.v1.SurveyList>}
 */
const methodDescriptor_SurveyAdminService_GetSurveyVersions = new grpc.web.MethodDescriptor(
  '/pando.api.survey.v1.SurveyAdminService/GetSurveyVersions',
  grpc.web.MethodType.UNARY,
  proto.pando.api.survey.v1.GetSurveyVersionsRequest,
  pando_api_survey_v1_shared_pb.SurveyList,
  /**
   * @param {!proto.pando.api.survey.v1.GetSurveyVersionsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_survey_v1_shared_pb.SurveyList.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pando.api.survey.v1.GetSurveyVersionsRequest,
 *   !proto.pando.api.survey.v1.SurveyList>}
 */
const methodInfo_SurveyAdminService_GetSurveyVersions = new grpc.web.AbstractClientBase.MethodInfo(
  pando_api_survey_v1_shared_pb.SurveyList,
  /**
   * @param {!proto.pando.api.survey.v1.GetSurveyVersionsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_survey_v1_shared_pb.SurveyList.deserializeBinary
);


/**
 * @param {!proto.pando.api.survey.v1.GetSurveyVersionsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pando.api.survey.v1.SurveyList)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pando.api.survey.v1.SurveyList>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pando.api.survey.v1.SurveyAdminServiceClient.prototype.getSurveyVersions =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pando.api.survey.v1.SurveyAdminService/GetSurveyVersions',
      request,
      metadata || {},
      methodDescriptor_SurveyAdminService_GetSurveyVersions,
      callback);
};


/**
 * @param {!proto.pando.api.survey.v1.GetSurveyVersionsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pando.api.survey.v1.SurveyList>}
 *     Promise that resolves to the response
 */
proto.pando.api.survey.v1.SurveyAdminServicePromiseClient.prototype.getSurveyVersions =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pando.api.survey.v1.SurveyAdminService/GetSurveyVersions',
      request,
      metadata || {},
      methodDescriptor_SurveyAdminService_GetSurveyVersions);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pando.api.survey.v1.GetSurveyDocumentsRequest,
 *   !proto.pando.api.survey.v1.SurveyDocumentList>}
 */
const methodDescriptor_SurveyAdminService_GetSurveyDocuments = new grpc.web.MethodDescriptor(
  '/pando.api.survey.v1.SurveyAdminService/GetSurveyDocuments',
  grpc.web.MethodType.UNARY,
  proto.pando.api.survey.v1.GetSurveyDocumentsRequest,
  pando_api_survey_v1_shared_pb.SurveyDocumentList,
  /**
   * @param {!proto.pando.api.survey.v1.GetSurveyDocumentsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_survey_v1_shared_pb.SurveyDocumentList.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pando.api.survey.v1.GetSurveyDocumentsRequest,
 *   !proto.pando.api.survey.v1.SurveyDocumentList>}
 */
const methodInfo_SurveyAdminService_GetSurveyDocuments = new grpc.web.AbstractClientBase.MethodInfo(
  pando_api_survey_v1_shared_pb.SurveyDocumentList,
  /**
   * @param {!proto.pando.api.survey.v1.GetSurveyDocumentsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_survey_v1_shared_pb.SurveyDocumentList.deserializeBinary
);


/**
 * @param {!proto.pando.api.survey.v1.GetSurveyDocumentsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pando.api.survey.v1.SurveyDocumentList)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pando.api.survey.v1.SurveyDocumentList>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pando.api.survey.v1.SurveyAdminServiceClient.prototype.getSurveyDocuments =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pando.api.survey.v1.SurveyAdminService/GetSurveyDocuments',
      request,
      metadata || {},
      methodDescriptor_SurveyAdminService_GetSurveyDocuments,
      callback);
};


/**
 * @param {!proto.pando.api.survey.v1.GetSurveyDocumentsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pando.api.survey.v1.SurveyDocumentList>}
 *     Promise that resolves to the response
 */
proto.pando.api.survey.v1.SurveyAdminServicePromiseClient.prototype.getSurveyDocuments =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pando.api.survey.v1.SurveyAdminService/GetSurveyDocuments',
      request,
      metadata || {},
      methodDescriptor_SurveyAdminService_GetSurveyDocuments);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pando.api.survey.v1.GetVariableTemplateRequest,
 *   !proto.pando.api.survey.v1.GetVariableTemplateResponse>}
 */
const methodDescriptor_SurveyAdminService_GetVariableTemplate = new grpc.web.MethodDescriptor(
  '/pando.api.survey.v1.SurveyAdminService/GetVariableTemplate',
  grpc.web.MethodType.UNARY,
  proto.pando.api.survey.v1.GetVariableTemplateRequest,
  proto.pando.api.survey.v1.GetVariableTemplateResponse,
  /**
   * @param {!proto.pando.api.survey.v1.GetVariableTemplateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pando.api.survey.v1.GetVariableTemplateResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pando.api.survey.v1.GetVariableTemplateRequest,
 *   !proto.pando.api.survey.v1.GetVariableTemplateResponse>}
 */
const methodInfo_SurveyAdminService_GetVariableTemplate = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pando.api.survey.v1.GetVariableTemplateResponse,
  /**
   * @param {!proto.pando.api.survey.v1.GetVariableTemplateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pando.api.survey.v1.GetVariableTemplateResponse.deserializeBinary
);


/**
 * @param {!proto.pando.api.survey.v1.GetVariableTemplateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pando.api.survey.v1.GetVariableTemplateResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pando.api.survey.v1.GetVariableTemplateResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pando.api.survey.v1.SurveyAdminServiceClient.prototype.getVariableTemplate =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pando.api.survey.v1.SurveyAdminService/GetVariableTemplate',
      request,
      metadata || {},
      methodDescriptor_SurveyAdminService_GetVariableTemplate,
      callback);
};


/**
 * @param {!proto.pando.api.survey.v1.GetVariableTemplateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pando.api.survey.v1.GetVariableTemplateResponse>}
 *     Promise that resolves to the response
 */
proto.pando.api.survey.v1.SurveyAdminServicePromiseClient.prototype.getVariableTemplate =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pando.api.survey.v1.SurveyAdminService/GetVariableTemplate',
      request,
      metadata || {},
      methodDescriptor_SurveyAdminService_GetVariableTemplate);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pando.api.survey.v1.UpdateSurveyRequest,
 *   !proto.pando.api.survey.v1.Survey>}
 */
const methodDescriptor_SurveyAdminService_UpdateSurvey = new grpc.web.MethodDescriptor(
  '/pando.api.survey.v1.SurveyAdminService/UpdateSurvey',
  grpc.web.MethodType.UNARY,
  proto.pando.api.survey.v1.UpdateSurveyRequest,
  pando_api_survey_v1_shared_pb.Survey,
  /**
   * @param {!proto.pando.api.survey.v1.UpdateSurveyRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_survey_v1_shared_pb.Survey.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pando.api.survey.v1.UpdateSurveyRequest,
 *   !proto.pando.api.survey.v1.Survey>}
 */
const methodInfo_SurveyAdminService_UpdateSurvey = new grpc.web.AbstractClientBase.MethodInfo(
  pando_api_survey_v1_shared_pb.Survey,
  /**
   * @param {!proto.pando.api.survey.v1.UpdateSurveyRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_survey_v1_shared_pb.Survey.deserializeBinary
);


/**
 * @param {!proto.pando.api.survey.v1.UpdateSurveyRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pando.api.survey.v1.Survey)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pando.api.survey.v1.Survey>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pando.api.survey.v1.SurveyAdminServiceClient.prototype.updateSurvey =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pando.api.survey.v1.SurveyAdminService/UpdateSurvey',
      request,
      metadata || {},
      methodDescriptor_SurveyAdminService_UpdateSurvey,
      callback);
};


/**
 * @param {!proto.pando.api.survey.v1.UpdateSurveyRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pando.api.survey.v1.Survey>}
 *     Promise that resolves to the response
 */
proto.pando.api.survey.v1.SurveyAdminServicePromiseClient.prototype.updateSurvey =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pando.api.survey.v1.SurveyAdminService/UpdateSurvey',
      request,
      metadata || {},
      methodDescriptor_SurveyAdminService_UpdateSurvey);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pando.api.survey.v1.UpdateQuestionRequest,
 *   !proto.pando.api.survey.v1.Question>}
 */
const methodDescriptor_SurveyAdminService_UpdateQuestion = new grpc.web.MethodDescriptor(
  '/pando.api.survey.v1.SurveyAdminService/UpdateQuestion',
  grpc.web.MethodType.UNARY,
  proto.pando.api.survey.v1.UpdateQuestionRequest,
  pando_api_survey_v1_shared_pb.Question,
  /**
   * @param {!proto.pando.api.survey.v1.UpdateQuestionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_survey_v1_shared_pb.Question.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pando.api.survey.v1.UpdateQuestionRequest,
 *   !proto.pando.api.survey.v1.Question>}
 */
const methodInfo_SurveyAdminService_UpdateQuestion = new grpc.web.AbstractClientBase.MethodInfo(
  pando_api_survey_v1_shared_pb.Question,
  /**
   * @param {!proto.pando.api.survey.v1.UpdateQuestionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_survey_v1_shared_pb.Question.deserializeBinary
);


/**
 * @param {!proto.pando.api.survey.v1.UpdateQuestionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pando.api.survey.v1.Question)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pando.api.survey.v1.Question>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pando.api.survey.v1.SurveyAdminServiceClient.prototype.updateQuestion =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pando.api.survey.v1.SurveyAdminService/UpdateQuestion',
      request,
      metadata || {},
      methodDescriptor_SurveyAdminService_UpdateQuestion,
      callback);
};


/**
 * @param {!proto.pando.api.survey.v1.UpdateQuestionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pando.api.survey.v1.Question>}
 *     Promise that resolves to the response
 */
proto.pando.api.survey.v1.SurveyAdminServicePromiseClient.prototype.updateQuestion =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pando.api.survey.v1.SurveyAdminService/UpdateQuestion',
      request,
      metadata || {},
      methodDescriptor_SurveyAdminService_UpdateQuestion);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pando.api.survey.v1.UpdatePlaybackDataRequest,
 *   !proto.pando.api.survey.v1.PlaybackData>}
 */
const methodDescriptor_SurveyAdminService_UpdatePlaybackData = new grpc.web.MethodDescriptor(
  '/pando.api.survey.v1.SurveyAdminService/UpdatePlaybackData',
  grpc.web.MethodType.UNARY,
  proto.pando.api.survey.v1.UpdatePlaybackDataRequest,
  pando_api_survey_v1_shared_pb.PlaybackData,
  /**
   * @param {!proto.pando.api.survey.v1.UpdatePlaybackDataRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_survey_v1_shared_pb.PlaybackData.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pando.api.survey.v1.UpdatePlaybackDataRequest,
 *   !proto.pando.api.survey.v1.PlaybackData>}
 */
const methodInfo_SurveyAdminService_UpdatePlaybackData = new grpc.web.AbstractClientBase.MethodInfo(
  pando_api_survey_v1_shared_pb.PlaybackData,
  /**
   * @param {!proto.pando.api.survey.v1.UpdatePlaybackDataRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_survey_v1_shared_pb.PlaybackData.deserializeBinary
);


/**
 * @param {!proto.pando.api.survey.v1.UpdatePlaybackDataRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pando.api.survey.v1.PlaybackData)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pando.api.survey.v1.PlaybackData>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pando.api.survey.v1.SurveyAdminServiceClient.prototype.updatePlaybackData =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pando.api.survey.v1.SurveyAdminService/UpdatePlaybackData',
      request,
      metadata || {},
      methodDescriptor_SurveyAdminService_UpdatePlaybackData,
      callback);
};


/**
 * @param {!proto.pando.api.survey.v1.UpdatePlaybackDataRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pando.api.survey.v1.PlaybackData>}
 *     Promise that resolves to the response
 */
proto.pando.api.survey.v1.SurveyAdminServicePromiseClient.prototype.updatePlaybackData =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pando.api.survey.v1.SurveyAdminService/UpdatePlaybackData',
      request,
      metadata || {},
      methodDescriptor_SurveyAdminService_UpdatePlaybackData);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pando.api.survey.v1.UpdateSurveyQuestionDestinationRequest,
 *   !proto.pando.api.survey.v1.SurveyQuestionDestination>}
 */
const methodDescriptor_SurveyAdminService_UpdateSurveyQuestionDestination = new grpc.web.MethodDescriptor(
  '/pando.api.survey.v1.SurveyAdminService/UpdateSurveyQuestionDestination',
  grpc.web.MethodType.UNARY,
  proto.pando.api.survey.v1.UpdateSurveyQuestionDestinationRequest,
  pando_api_survey_v1_shared_pb.SurveyQuestionDestination,
  /**
   * @param {!proto.pando.api.survey.v1.UpdateSurveyQuestionDestinationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_survey_v1_shared_pb.SurveyQuestionDestination.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pando.api.survey.v1.UpdateSurveyQuestionDestinationRequest,
 *   !proto.pando.api.survey.v1.SurveyQuestionDestination>}
 */
const methodInfo_SurveyAdminService_UpdateSurveyQuestionDestination = new grpc.web.AbstractClientBase.MethodInfo(
  pando_api_survey_v1_shared_pb.SurveyQuestionDestination,
  /**
   * @param {!proto.pando.api.survey.v1.UpdateSurveyQuestionDestinationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_survey_v1_shared_pb.SurveyQuestionDestination.deserializeBinary
);


/**
 * @param {!proto.pando.api.survey.v1.UpdateSurveyQuestionDestinationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pando.api.survey.v1.SurveyQuestionDestination)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pando.api.survey.v1.SurveyQuestionDestination>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pando.api.survey.v1.SurveyAdminServiceClient.prototype.updateSurveyQuestionDestination =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pando.api.survey.v1.SurveyAdminService/UpdateSurveyQuestionDestination',
      request,
      metadata || {},
      methodDescriptor_SurveyAdminService_UpdateSurveyQuestionDestination,
      callback);
};


/**
 * @param {!proto.pando.api.survey.v1.UpdateSurveyQuestionDestinationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pando.api.survey.v1.SurveyQuestionDestination>}
 *     Promise that resolves to the response
 */
proto.pando.api.survey.v1.SurveyAdminServicePromiseClient.prototype.updateSurveyQuestionDestination =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pando.api.survey.v1.SurveyAdminService/UpdateSurveyQuestionDestination',
      request,
      metadata || {},
      methodDescriptor_SurveyAdminService_UpdateSurveyQuestionDestination);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pando.api.survey.v1.UpdateVariableRequest,
 *   !proto.pando.api.survey.v1.Variable>}
 */
const methodDescriptor_SurveyAdminService_UpdateVariable = new grpc.web.MethodDescriptor(
  '/pando.api.survey.v1.SurveyAdminService/UpdateVariable',
  grpc.web.MethodType.UNARY,
  proto.pando.api.survey.v1.UpdateVariableRequest,
  pando_api_survey_v1_shared_pb.Variable,
  /**
   * @param {!proto.pando.api.survey.v1.UpdateVariableRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_survey_v1_shared_pb.Variable.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pando.api.survey.v1.UpdateVariableRequest,
 *   !proto.pando.api.survey.v1.Variable>}
 */
const methodInfo_SurveyAdminService_UpdateVariable = new grpc.web.AbstractClientBase.MethodInfo(
  pando_api_survey_v1_shared_pb.Variable,
  /**
   * @param {!proto.pando.api.survey.v1.UpdateVariableRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_survey_v1_shared_pb.Variable.deserializeBinary
);


/**
 * @param {!proto.pando.api.survey.v1.UpdateVariableRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pando.api.survey.v1.Variable)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pando.api.survey.v1.Variable>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pando.api.survey.v1.SurveyAdminServiceClient.prototype.updateVariable =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pando.api.survey.v1.SurveyAdminService/UpdateVariable',
      request,
      metadata || {},
      methodDescriptor_SurveyAdminService_UpdateVariable,
      callback);
};


/**
 * @param {!proto.pando.api.survey.v1.UpdateVariableRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pando.api.survey.v1.Variable>}
 *     Promise that resolves to the response
 */
proto.pando.api.survey.v1.SurveyAdminServicePromiseClient.prototype.updateVariable =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pando.api.survey.v1.SurveyAdminService/UpdateVariable',
      request,
      metadata || {},
      methodDescriptor_SurveyAdminService_UpdateVariable);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pando.api.survey.v1.UpdateAnswerOptionRequest,
 *   !proto.pando.api.survey.v1.AnswerOption>}
 */
const methodDescriptor_SurveyAdminService_UpdateAnswerOption = new grpc.web.MethodDescriptor(
  '/pando.api.survey.v1.SurveyAdminService/UpdateAnswerOption',
  grpc.web.MethodType.UNARY,
  proto.pando.api.survey.v1.UpdateAnswerOptionRequest,
  pando_api_survey_v1_shared_pb.AnswerOption,
  /**
   * @param {!proto.pando.api.survey.v1.UpdateAnswerOptionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_survey_v1_shared_pb.AnswerOption.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pando.api.survey.v1.UpdateAnswerOptionRequest,
 *   !proto.pando.api.survey.v1.AnswerOption>}
 */
const methodInfo_SurveyAdminService_UpdateAnswerOption = new grpc.web.AbstractClientBase.MethodInfo(
  pando_api_survey_v1_shared_pb.AnswerOption,
  /**
   * @param {!proto.pando.api.survey.v1.UpdateAnswerOptionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_survey_v1_shared_pb.AnswerOption.deserializeBinary
);


/**
 * @param {!proto.pando.api.survey.v1.UpdateAnswerOptionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pando.api.survey.v1.AnswerOption)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pando.api.survey.v1.AnswerOption>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pando.api.survey.v1.SurveyAdminServiceClient.prototype.updateAnswerOption =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pando.api.survey.v1.SurveyAdminService/UpdateAnswerOption',
      request,
      metadata || {},
      methodDescriptor_SurveyAdminService_UpdateAnswerOption,
      callback);
};


/**
 * @param {!proto.pando.api.survey.v1.UpdateAnswerOptionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pando.api.survey.v1.AnswerOption>}
 *     Promise that resolves to the response
 */
proto.pando.api.survey.v1.SurveyAdminServicePromiseClient.prototype.updateAnswerOption =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pando.api.survey.v1.SurveyAdminService/UpdateAnswerOption',
      request,
      metadata || {},
      methodDescriptor_SurveyAdminService_UpdateAnswerOption);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pando.api.survey.v1.DeleteSurveyRequest,
 *   !proto.pando.api.Empty>}
 */
const methodDescriptor_SurveyAdminService_DeleteSurvey = new grpc.web.MethodDescriptor(
  '/pando.api.survey.v1.SurveyAdminService/DeleteSurvey',
  grpc.web.MethodType.UNARY,
  proto.pando.api.survey.v1.DeleteSurveyRequest,
  pando_api_shared_pb.Empty,
  /**
   * @param {!proto.pando.api.survey.v1.DeleteSurveyRequest} request
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
 *   !proto.pando.api.survey.v1.DeleteSurveyRequest,
 *   !proto.pando.api.Empty>}
 */
const methodInfo_SurveyAdminService_DeleteSurvey = new grpc.web.AbstractClientBase.MethodInfo(
  pando_api_shared_pb.Empty,
  /**
   * @param {!proto.pando.api.survey.v1.DeleteSurveyRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_shared_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.pando.api.survey.v1.DeleteSurveyRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pando.api.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pando.api.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pando.api.survey.v1.SurveyAdminServiceClient.prototype.deleteSurvey =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pando.api.survey.v1.SurveyAdminService/DeleteSurvey',
      request,
      metadata || {},
      methodDescriptor_SurveyAdminService_DeleteSurvey,
      callback);
};


/**
 * @param {!proto.pando.api.survey.v1.DeleteSurveyRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pando.api.Empty>}
 *     Promise that resolves to the response
 */
proto.pando.api.survey.v1.SurveyAdminServicePromiseClient.prototype.deleteSurvey =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pando.api.survey.v1.SurveyAdminService/DeleteSurvey',
      request,
      metadata || {},
      methodDescriptor_SurveyAdminService_DeleteSurvey);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pando.api.survey.v1.DeleteQuestionRequest,
 *   !proto.pando.api.Empty>}
 */
const methodDescriptor_SurveyAdminService_DeleteQuestion = new grpc.web.MethodDescriptor(
  '/pando.api.survey.v1.SurveyAdminService/DeleteQuestion',
  grpc.web.MethodType.UNARY,
  proto.pando.api.survey.v1.DeleteQuestionRequest,
  pando_api_shared_pb.Empty,
  /**
   * @param {!proto.pando.api.survey.v1.DeleteQuestionRequest} request
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
 *   !proto.pando.api.survey.v1.DeleteQuestionRequest,
 *   !proto.pando.api.Empty>}
 */
const methodInfo_SurveyAdminService_DeleteQuestion = new grpc.web.AbstractClientBase.MethodInfo(
  pando_api_shared_pb.Empty,
  /**
   * @param {!proto.pando.api.survey.v1.DeleteQuestionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_shared_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.pando.api.survey.v1.DeleteQuestionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pando.api.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pando.api.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pando.api.survey.v1.SurveyAdminServiceClient.prototype.deleteQuestion =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pando.api.survey.v1.SurveyAdminService/DeleteQuestion',
      request,
      metadata || {},
      methodDescriptor_SurveyAdminService_DeleteQuestion,
      callback);
};


/**
 * @param {!proto.pando.api.survey.v1.DeleteQuestionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pando.api.Empty>}
 *     Promise that resolves to the response
 */
proto.pando.api.survey.v1.SurveyAdminServicePromiseClient.prototype.deleteQuestion =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pando.api.survey.v1.SurveyAdminService/DeleteQuestion',
      request,
      metadata || {},
      methodDescriptor_SurveyAdminService_DeleteQuestion);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pando.api.survey.v1.DeletePlaybackDataRequest,
 *   !proto.pando.api.Empty>}
 */
const methodDescriptor_SurveyAdminService_DeletePlaybackData = new grpc.web.MethodDescriptor(
  '/pando.api.survey.v1.SurveyAdminService/DeletePlaybackData',
  grpc.web.MethodType.UNARY,
  proto.pando.api.survey.v1.DeletePlaybackDataRequest,
  pando_api_shared_pb.Empty,
  /**
   * @param {!proto.pando.api.survey.v1.DeletePlaybackDataRequest} request
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
 *   !proto.pando.api.survey.v1.DeletePlaybackDataRequest,
 *   !proto.pando.api.Empty>}
 */
const methodInfo_SurveyAdminService_DeletePlaybackData = new grpc.web.AbstractClientBase.MethodInfo(
  pando_api_shared_pb.Empty,
  /**
   * @param {!proto.pando.api.survey.v1.DeletePlaybackDataRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_shared_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.pando.api.survey.v1.DeletePlaybackDataRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pando.api.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pando.api.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pando.api.survey.v1.SurveyAdminServiceClient.prototype.deletePlaybackData =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pando.api.survey.v1.SurveyAdminService/DeletePlaybackData',
      request,
      metadata || {},
      methodDescriptor_SurveyAdminService_DeletePlaybackData,
      callback);
};


/**
 * @param {!proto.pando.api.survey.v1.DeletePlaybackDataRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pando.api.Empty>}
 *     Promise that resolves to the response
 */
proto.pando.api.survey.v1.SurveyAdminServicePromiseClient.prototype.deletePlaybackData =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pando.api.survey.v1.SurveyAdminService/DeletePlaybackData',
      request,
      metadata || {},
      methodDescriptor_SurveyAdminService_DeletePlaybackData);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pando.api.survey.v1.DeleteInstanceRequest,
 *   !proto.pando.api.Empty>}
 */
const methodDescriptor_SurveyAdminService_DeleteInstance = new grpc.web.MethodDescriptor(
  '/pando.api.survey.v1.SurveyAdminService/DeleteInstance',
  grpc.web.MethodType.UNARY,
  proto.pando.api.survey.v1.DeleteInstanceRequest,
  pando_api_shared_pb.Empty,
  /**
   * @param {!proto.pando.api.survey.v1.DeleteInstanceRequest} request
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
 *   !proto.pando.api.survey.v1.DeleteInstanceRequest,
 *   !proto.pando.api.Empty>}
 */
const methodInfo_SurveyAdminService_DeleteInstance = new grpc.web.AbstractClientBase.MethodInfo(
  pando_api_shared_pb.Empty,
  /**
   * @param {!proto.pando.api.survey.v1.DeleteInstanceRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_shared_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.pando.api.survey.v1.DeleteInstanceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pando.api.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pando.api.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pando.api.survey.v1.SurveyAdminServiceClient.prototype.deleteInstance =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pando.api.survey.v1.SurveyAdminService/DeleteInstance',
      request,
      metadata || {},
      methodDescriptor_SurveyAdminService_DeleteInstance,
      callback);
};


/**
 * @param {!proto.pando.api.survey.v1.DeleteInstanceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pando.api.Empty>}
 *     Promise that resolves to the response
 */
proto.pando.api.survey.v1.SurveyAdminServicePromiseClient.prototype.deleteInstance =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pando.api.survey.v1.SurveyAdminService/DeleteInstance',
      request,
      metadata || {},
      methodDescriptor_SurveyAdminService_DeleteInstance);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pando.api.survey.v1.DeleteMediaRequest,
 *   !proto.pando.api.Empty>}
 */
const methodDescriptor_SurveyAdminService_DeleteMedia = new grpc.web.MethodDescriptor(
  '/pando.api.survey.v1.SurveyAdminService/DeleteMedia',
  grpc.web.MethodType.UNARY,
  proto.pando.api.survey.v1.DeleteMediaRequest,
  pando_api_shared_pb.Empty,
  /**
   * @param {!proto.pando.api.survey.v1.DeleteMediaRequest} request
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
 *   !proto.pando.api.survey.v1.DeleteMediaRequest,
 *   !proto.pando.api.Empty>}
 */
const methodInfo_SurveyAdminService_DeleteMedia = new grpc.web.AbstractClientBase.MethodInfo(
  pando_api_shared_pb.Empty,
  /**
   * @param {!proto.pando.api.survey.v1.DeleteMediaRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_shared_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.pando.api.survey.v1.DeleteMediaRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pando.api.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pando.api.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pando.api.survey.v1.SurveyAdminServiceClient.prototype.deleteMedia =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pando.api.survey.v1.SurveyAdminService/DeleteMedia',
      request,
      metadata || {},
      methodDescriptor_SurveyAdminService_DeleteMedia,
      callback);
};


/**
 * @param {!proto.pando.api.survey.v1.DeleteMediaRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pando.api.Empty>}
 *     Promise that resolves to the response
 */
proto.pando.api.survey.v1.SurveyAdminServicePromiseClient.prototype.deleteMedia =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pando.api.survey.v1.SurveyAdminService/DeleteMedia',
      request,
      metadata || {},
      methodDescriptor_SurveyAdminService_DeleteMedia);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pando.api.survey.v1.DeleteAnswerOptionRequest,
 *   !proto.pando.api.Empty>}
 */
const methodDescriptor_SurveyAdminService_DeleteAnswerOption = new grpc.web.MethodDescriptor(
  '/pando.api.survey.v1.SurveyAdminService/DeleteAnswerOption',
  grpc.web.MethodType.UNARY,
  proto.pando.api.survey.v1.DeleteAnswerOptionRequest,
  pando_api_shared_pb.Empty,
  /**
   * @param {!proto.pando.api.survey.v1.DeleteAnswerOptionRequest} request
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
 *   !proto.pando.api.survey.v1.DeleteAnswerOptionRequest,
 *   !proto.pando.api.Empty>}
 */
const methodInfo_SurveyAdminService_DeleteAnswerOption = new grpc.web.AbstractClientBase.MethodInfo(
  pando_api_shared_pb.Empty,
  /**
   * @param {!proto.pando.api.survey.v1.DeleteAnswerOptionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_shared_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.pando.api.survey.v1.DeleteAnswerOptionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pando.api.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pando.api.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pando.api.survey.v1.SurveyAdminServiceClient.prototype.deleteAnswerOption =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pando.api.survey.v1.SurveyAdminService/DeleteAnswerOption',
      request,
      metadata || {},
      methodDescriptor_SurveyAdminService_DeleteAnswerOption,
      callback);
};


/**
 * @param {!proto.pando.api.survey.v1.DeleteAnswerOptionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pando.api.Empty>}
 *     Promise that resolves to the response
 */
proto.pando.api.survey.v1.SurveyAdminServicePromiseClient.prototype.deleteAnswerOption =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pando.api.survey.v1.SurveyAdminService/DeleteAnswerOption',
      request,
      metadata || {},
      methodDescriptor_SurveyAdminService_DeleteAnswerOption);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pando.api.survey.v1.DeleteSurveyMediaRequest,
 *   !proto.pando.api.Empty>}
 */
const methodDescriptor_SurveyAdminService_DeleteSurveyMedia = new grpc.web.MethodDescriptor(
  '/pando.api.survey.v1.SurveyAdminService/DeleteSurveyMedia',
  grpc.web.MethodType.UNARY,
  proto.pando.api.survey.v1.DeleteSurveyMediaRequest,
  pando_api_shared_pb.Empty,
  /**
   * @param {!proto.pando.api.survey.v1.DeleteSurveyMediaRequest} request
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
 *   !proto.pando.api.survey.v1.DeleteSurveyMediaRequest,
 *   !proto.pando.api.Empty>}
 */
const methodInfo_SurveyAdminService_DeleteSurveyMedia = new grpc.web.AbstractClientBase.MethodInfo(
  pando_api_shared_pb.Empty,
  /**
   * @param {!proto.pando.api.survey.v1.DeleteSurveyMediaRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_shared_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.pando.api.survey.v1.DeleteSurveyMediaRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pando.api.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pando.api.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pando.api.survey.v1.SurveyAdminServiceClient.prototype.deleteSurveyMedia =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pando.api.survey.v1.SurveyAdminService/DeleteSurveyMedia',
      request,
      metadata || {},
      methodDescriptor_SurveyAdminService_DeleteSurveyMedia,
      callback);
};


/**
 * @param {!proto.pando.api.survey.v1.DeleteSurveyMediaRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pando.api.Empty>}
 *     Promise that resolves to the response
 */
proto.pando.api.survey.v1.SurveyAdminServicePromiseClient.prototype.deleteSurveyMedia =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pando.api.survey.v1.SurveyAdminService/DeleteSurveyMedia',
      request,
      metadata || {},
      methodDescriptor_SurveyAdminService_DeleteSurveyMedia);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pando.api.survey.v1.DeleteSurveyVariableRequest,
 *   !proto.pando.api.Empty>}
 */
const methodDescriptor_SurveyAdminService_DeleteSurveyVariable = new grpc.web.MethodDescriptor(
  '/pando.api.survey.v1.SurveyAdminService/DeleteSurveyVariable',
  grpc.web.MethodType.UNARY,
  proto.pando.api.survey.v1.DeleteSurveyVariableRequest,
  pando_api_shared_pb.Empty,
  /**
   * @param {!proto.pando.api.survey.v1.DeleteSurveyVariableRequest} request
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
 *   !proto.pando.api.survey.v1.DeleteSurveyVariableRequest,
 *   !proto.pando.api.Empty>}
 */
const methodInfo_SurveyAdminService_DeleteSurveyVariable = new grpc.web.AbstractClientBase.MethodInfo(
  pando_api_shared_pb.Empty,
  /**
   * @param {!proto.pando.api.survey.v1.DeleteSurveyVariableRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_shared_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.pando.api.survey.v1.DeleteSurveyVariableRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pando.api.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pando.api.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pando.api.survey.v1.SurveyAdminServiceClient.prototype.deleteSurveyVariable =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pando.api.survey.v1.SurveyAdminService/DeleteSurveyVariable',
      request,
      metadata || {},
      methodDescriptor_SurveyAdminService_DeleteSurveyVariable,
      callback);
};


/**
 * @param {!proto.pando.api.survey.v1.DeleteSurveyVariableRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pando.api.Empty>}
 *     Promise that resolves to the response
 */
proto.pando.api.survey.v1.SurveyAdminServicePromiseClient.prototype.deleteSurveyVariable =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pando.api.survey.v1.SurveyAdminService/DeleteSurveyVariable',
      request,
      metadata || {},
      methodDescriptor_SurveyAdminService_DeleteSurveyVariable);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pando.api.survey.v1.DeleteVariableMediaRequest,
 *   !proto.pando.api.Empty>}
 */
const methodDescriptor_SurveyAdminService_DeleteVariableMedia = new grpc.web.MethodDescriptor(
  '/pando.api.survey.v1.SurveyAdminService/DeleteVariableMedia',
  grpc.web.MethodType.UNARY,
  proto.pando.api.survey.v1.DeleteVariableMediaRequest,
  pando_api_shared_pb.Empty,
  /**
   * @param {!proto.pando.api.survey.v1.DeleteVariableMediaRequest} request
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
 *   !proto.pando.api.survey.v1.DeleteVariableMediaRequest,
 *   !proto.pando.api.Empty>}
 */
const methodInfo_SurveyAdminService_DeleteVariableMedia = new grpc.web.AbstractClientBase.MethodInfo(
  pando_api_shared_pb.Empty,
  /**
   * @param {!proto.pando.api.survey.v1.DeleteVariableMediaRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_shared_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.pando.api.survey.v1.DeleteVariableMediaRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pando.api.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pando.api.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pando.api.survey.v1.SurveyAdminServiceClient.prototype.deleteVariableMedia =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pando.api.survey.v1.SurveyAdminService/DeleteVariableMedia',
      request,
      metadata || {},
      methodDescriptor_SurveyAdminService_DeleteVariableMedia,
      callback);
};


/**
 * @param {!proto.pando.api.survey.v1.DeleteVariableMediaRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pando.api.Empty>}
 *     Promise that resolves to the response
 */
proto.pando.api.survey.v1.SurveyAdminServicePromiseClient.prototype.deleteVariableMedia =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pando.api.survey.v1.SurveyAdminService/DeleteVariableMedia',
      request,
      metadata || {},
      methodDescriptor_SurveyAdminService_DeleteVariableMedia);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pando.api.survey.v1.DeleteSurveyQuestionDestinationRequest,
 *   !proto.pando.api.Empty>}
 */
const methodDescriptor_SurveyAdminService_DeleteSurveyQuestionDestination = new grpc.web.MethodDescriptor(
  '/pando.api.survey.v1.SurveyAdminService/DeleteSurveyQuestionDestination',
  grpc.web.MethodType.UNARY,
  proto.pando.api.survey.v1.DeleteSurveyQuestionDestinationRequest,
  pando_api_shared_pb.Empty,
  /**
   * @param {!proto.pando.api.survey.v1.DeleteSurveyQuestionDestinationRequest} request
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
 *   !proto.pando.api.survey.v1.DeleteSurveyQuestionDestinationRequest,
 *   !proto.pando.api.Empty>}
 */
const methodInfo_SurveyAdminService_DeleteSurveyQuestionDestination = new grpc.web.AbstractClientBase.MethodInfo(
  pando_api_shared_pb.Empty,
  /**
   * @param {!proto.pando.api.survey.v1.DeleteSurveyQuestionDestinationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_shared_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.pando.api.survey.v1.DeleteSurveyQuestionDestinationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pando.api.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pando.api.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pando.api.survey.v1.SurveyAdminServiceClient.prototype.deleteSurveyQuestionDestination =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pando.api.survey.v1.SurveyAdminService/DeleteSurveyQuestionDestination',
      request,
      metadata || {},
      methodDescriptor_SurveyAdminService_DeleteSurveyQuestionDestination,
      callback);
};


/**
 * @param {!proto.pando.api.survey.v1.DeleteSurveyQuestionDestinationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pando.api.Empty>}
 *     Promise that resolves to the response
 */
proto.pando.api.survey.v1.SurveyAdminServicePromiseClient.prototype.deleteSurveyQuestionDestination =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pando.api.survey.v1.SurveyAdminService/DeleteSurveyQuestionDestination',
      request,
      metadata || {},
      methodDescriptor_SurveyAdminService_DeleteSurveyQuestionDestination);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pando.api.survey.v1.DeleteSurveyVersionRequest,
 *   !proto.pando.api.Empty>}
 */
const methodDescriptor_SurveyAdminService_DeleteSurveyVersion = new grpc.web.MethodDescriptor(
  '/pando.api.survey.v1.SurveyAdminService/DeleteSurveyVersion',
  grpc.web.MethodType.UNARY,
  proto.pando.api.survey.v1.DeleteSurveyVersionRequest,
  pando_api_shared_pb.Empty,
  /**
   * @param {!proto.pando.api.survey.v1.DeleteSurveyVersionRequest} request
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
 *   !proto.pando.api.survey.v1.DeleteSurveyVersionRequest,
 *   !proto.pando.api.Empty>}
 */
const methodInfo_SurveyAdminService_DeleteSurveyVersion = new grpc.web.AbstractClientBase.MethodInfo(
  pando_api_shared_pb.Empty,
  /**
   * @param {!proto.pando.api.survey.v1.DeleteSurveyVersionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_shared_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.pando.api.survey.v1.DeleteSurveyVersionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pando.api.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pando.api.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pando.api.survey.v1.SurveyAdminServiceClient.prototype.deleteSurveyVersion =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pando.api.survey.v1.SurveyAdminService/DeleteSurveyVersion',
      request,
      metadata || {},
      methodDescriptor_SurveyAdminService_DeleteSurveyVersion,
      callback);
};


/**
 * @param {!proto.pando.api.survey.v1.DeleteSurveyVersionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pando.api.Empty>}
 *     Promise that resolves to the response
 */
proto.pando.api.survey.v1.SurveyAdminServicePromiseClient.prototype.deleteSurveyVersion =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pando.api.survey.v1.SurveyAdminService/DeleteSurveyVersion',
      request,
      metadata || {},
      methodDescriptor_SurveyAdminService_DeleteSurveyVersion);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pando.api.survey.v1.DeleteVariableRequest,
 *   !proto.pando.api.Empty>}
 */
const methodDescriptor_SurveyAdminService_DeleteVariable = new grpc.web.MethodDescriptor(
  '/pando.api.survey.v1.SurveyAdminService/DeleteVariable',
  grpc.web.MethodType.UNARY,
  proto.pando.api.survey.v1.DeleteVariableRequest,
  pando_api_shared_pb.Empty,
  /**
   * @param {!proto.pando.api.survey.v1.DeleteVariableRequest} request
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
 *   !proto.pando.api.survey.v1.DeleteVariableRequest,
 *   !proto.pando.api.Empty>}
 */
const methodInfo_SurveyAdminService_DeleteVariable = new grpc.web.AbstractClientBase.MethodInfo(
  pando_api_shared_pb.Empty,
  /**
   * @param {!proto.pando.api.survey.v1.DeleteVariableRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_shared_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.pando.api.survey.v1.DeleteVariableRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pando.api.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pando.api.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pando.api.survey.v1.SurveyAdminServiceClient.prototype.deleteVariable =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pando.api.survey.v1.SurveyAdminService/DeleteVariable',
      request,
      metadata || {},
      methodDescriptor_SurveyAdminService_DeleteVariable,
      callback);
};


/**
 * @param {!proto.pando.api.survey.v1.DeleteVariableRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pando.api.Empty>}
 *     Promise that resolves to the response
 */
proto.pando.api.survey.v1.SurveyAdminServicePromiseClient.prototype.deleteVariable =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pando.api.survey.v1.SurveyAdminService/DeleteVariable',
      request,
      metadata || {},
      methodDescriptor_SurveyAdminService_DeleteVariable);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pando.api.survey.v1.SurveyESignTemplate,
 *   !proto.pando.api.survey.v1.SurveyESignTemplate>}
 */
const methodDescriptor_SurveyAdminService_ExecAddSurveyESignTemplate = new grpc.web.MethodDescriptor(
  '/pando.api.survey.v1.SurveyAdminService/ExecAddSurveyESignTemplate',
  grpc.web.MethodType.UNARY,
  proto.pando.api.survey.v1.SurveyESignTemplate,
  proto.pando.api.survey.v1.SurveyESignTemplate,
  /**
   * @param {!proto.pando.api.survey.v1.SurveyESignTemplate} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pando.api.survey.v1.SurveyESignTemplate.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pando.api.survey.v1.SurveyESignTemplate,
 *   !proto.pando.api.survey.v1.SurveyESignTemplate>}
 */
const methodInfo_SurveyAdminService_ExecAddSurveyESignTemplate = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pando.api.survey.v1.SurveyESignTemplate,
  /**
   * @param {!proto.pando.api.survey.v1.SurveyESignTemplate} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pando.api.survey.v1.SurveyESignTemplate.deserializeBinary
);


/**
 * @param {!proto.pando.api.survey.v1.SurveyESignTemplate} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pando.api.survey.v1.SurveyESignTemplate)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pando.api.survey.v1.SurveyESignTemplate>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pando.api.survey.v1.SurveyAdminServiceClient.prototype.execAddSurveyESignTemplate =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pando.api.survey.v1.SurveyAdminService/ExecAddSurveyESignTemplate',
      request,
      metadata || {},
      methodDescriptor_SurveyAdminService_ExecAddSurveyESignTemplate,
      callback);
};


/**
 * @param {!proto.pando.api.survey.v1.SurveyESignTemplate} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pando.api.survey.v1.SurveyESignTemplate>}
 *     Promise that resolves to the response
 */
proto.pando.api.survey.v1.SurveyAdminServicePromiseClient.prototype.execAddSurveyESignTemplate =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pando.api.survey.v1.SurveyAdminService/ExecAddSurveyESignTemplate',
      request,
      metadata || {},
      methodDescriptor_SurveyAdminService_ExecAddSurveyESignTemplate);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pando.api.survey.v1.SurveyESignTemplate,
 *   !proto.pando.api.Empty>}
 */
const methodDescriptor_SurveyAdminService_ExecRemoveSurveyESignTemplate = new grpc.web.MethodDescriptor(
  '/pando.api.survey.v1.SurveyAdminService/ExecRemoveSurveyESignTemplate',
  grpc.web.MethodType.UNARY,
  proto.pando.api.survey.v1.SurveyESignTemplate,
  pando_api_shared_pb.Empty,
  /**
   * @param {!proto.pando.api.survey.v1.SurveyESignTemplate} request
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
 *   !proto.pando.api.survey.v1.SurveyESignTemplate,
 *   !proto.pando.api.Empty>}
 */
const methodInfo_SurveyAdminService_ExecRemoveSurveyESignTemplate = new grpc.web.AbstractClientBase.MethodInfo(
  pando_api_shared_pb.Empty,
  /**
   * @param {!proto.pando.api.survey.v1.SurveyESignTemplate} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_shared_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.pando.api.survey.v1.SurveyESignTemplate} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pando.api.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pando.api.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pando.api.survey.v1.SurveyAdminServiceClient.prototype.execRemoveSurveyESignTemplate =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pando.api.survey.v1.SurveyAdminService/ExecRemoveSurveyESignTemplate',
      request,
      metadata || {},
      methodDescriptor_SurveyAdminService_ExecRemoveSurveyESignTemplate,
      callback);
};


/**
 * @param {!proto.pando.api.survey.v1.SurveyESignTemplate} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pando.api.Empty>}
 *     Promise that resolves to the response
 */
proto.pando.api.survey.v1.SurveyAdminServicePromiseClient.prototype.execRemoveSurveyESignTemplate =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pando.api.survey.v1.SurveyAdminService/ExecRemoveSurveyESignTemplate',
      request,
      metadata || {},
      methodDescriptor_SurveyAdminService_ExecRemoveSurveyESignTemplate);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pando.api.survey.v1.SendInstanceLink,
 *   !proto.pando.api.survey.v1.SendInstanceLink>}
 */
const methodDescriptor_SurveyAdminService_ExecSendInstanceLink = new grpc.web.MethodDescriptor(
  '/pando.api.survey.v1.SurveyAdminService/ExecSendInstanceLink',
  grpc.web.MethodType.UNARY,
  proto.pando.api.survey.v1.SendInstanceLink,
  proto.pando.api.survey.v1.SendInstanceLink,
  /**
   * @param {!proto.pando.api.survey.v1.SendInstanceLink} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pando.api.survey.v1.SendInstanceLink.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pando.api.survey.v1.SendInstanceLink,
 *   !proto.pando.api.survey.v1.SendInstanceLink>}
 */
const methodInfo_SurveyAdminService_ExecSendInstanceLink = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pando.api.survey.v1.SendInstanceLink,
  /**
   * @param {!proto.pando.api.survey.v1.SendInstanceLink} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pando.api.survey.v1.SendInstanceLink.deserializeBinary
);


/**
 * @param {!proto.pando.api.survey.v1.SendInstanceLink} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pando.api.survey.v1.SendInstanceLink)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pando.api.survey.v1.SendInstanceLink>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pando.api.survey.v1.SurveyAdminServiceClient.prototype.execSendInstanceLink =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pando.api.survey.v1.SurveyAdminService/ExecSendInstanceLink',
      request,
      metadata || {},
      methodDescriptor_SurveyAdminService_ExecSendInstanceLink,
      callback);
};


/**
 * @param {!proto.pando.api.survey.v1.SendInstanceLink} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pando.api.survey.v1.SendInstanceLink>}
 *     Promise that resolves to the response
 */
proto.pando.api.survey.v1.SurveyAdminServicePromiseClient.prototype.execSendInstanceLink =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pando.api.survey.v1.SurveyAdminService/ExecSendInstanceLink',
      request,
      metadata || {},
      methodDescriptor_SurveyAdminService_ExecSendInstanceLink);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pando.api.survey.v1.SurveyInstanceESignSignatory,
 *   !proto.pando.api.survey.v1.SurveyInstanceESignSignatory>}
 */
const methodDescriptor_SurveyAdminService_ExecAddSurveyInstanceESignSignatory = new grpc.web.MethodDescriptor(
  '/pando.api.survey.v1.SurveyAdminService/ExecAddSurveyInstanceESignSignatory',
  grpc.web.MethodType.UNARY,
  proto.pando.api.survey.v1.SurveyInstanceESignSignatory,
  proto.pando.api.survey.v1.SurveyInstanceESignSignatory,
  /**
   * @param {!proto.pando.api.survey.v1.SurveyInstanceESignSignatory} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pando.api.survey.v1.SurveyInstanceESignSignatory.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pando.api.survey.v1.SurveyInstanceESignSignatory,
 *   !proto.pando.api.survey.v1.SurveyInstanceESignSignatory>}
 */
const methodInfo_SurveyAdminService_ExecAddSurveyInstanceESignSignatory = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pando.api.survey.v1.SurveyInstanceESignSignatory,
  /**
   * @param {!proto.pando.api.survey.v1.SurveyInstanceESignSignatory} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pando.api.survey.v1.SurveyInstanceESignSignatory.deserializeBinary
);


/**
 * @param {!proto.pando.api.survey.v1.SurveyInstanceESignSignatory} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pando.api.survey.v1.SurveyInstanceESignSignatory)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pando.api.survey.v1.SurveyInstanceESignSignatory>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pando.api.survey.v1.SurveyAdminServiceClient.prototype.execAddSurveyInstanceESignSignatory =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pando.api.survey.v1.SurveyAdminService/ExecAddSurveyInstanceESignSignatory',
      request,
      metadata || {},
      methodDescriptor_SurveyAdminService_ExecAddSurveyInstanceESignSignatory,
      callback);
};


/**
 * @param {!proto.pando.api.survey.v1.SurveyInstanceESignSignatory} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pando.api.survey.v1.SurveyInstanceESignSignatory>}
 *     Promise that resolves to the response
 */
proto.pando.api.survey.v1.SurveyAdminServicePromiseClient.prototype.execAddSurveyInstanceESignSignatory =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pando.api.survey.v1.SurveyAdminService/ExecAddSurveyInstanceESignSignatory',
      request,
      metadata || {},
      methodDescriptor_SurveyAdminService_ExecAddSurveyInstanceESignSignatory);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pando.api.survey.v1.SurveyInstanceESignSignatory,
 *   !proto.pando.api.Empty>}
 */
const methodDescriptor_SurveyAdminService_ExecRemoveSurveyInstanceESignSignatory = new grpc.web.MethodDescriptor(
  '/pando.api.survey.v1.SurveyAdminService/ExecRemoveSurveyInstanceESignSignatory',
  grpc.web.MethodType.UNARY,
  proto.pando.api.survey.v1.SurveyInstanceESignSignatory,
  pando_api_shared_pb.Empty,
  /**
   * @param {!proto.pando.api.survey.v1.SurveyInstanceESignSignatory} request
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
 *   !proto.pando.api.survey.v1.SurveyInstanceESignSignatory,
 *   !proto.pando.api.Empty>}
 */
const methodInfo_SurveyAdminService_ExecRemoveSurveyInstanceESignSignatory = new grpc.web.AbstractClientBase.MethodInfo(
  pando_api_shared_pb.Empty,
  /**
   * @param {!proto.pando.api.survey.v1.SurveyInstanceESignSignatory} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_shared_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.pando.api.survey.v1.SurveyInstanceESignSignatory} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pando.api.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pando.api.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pando.api.survey.v1.SurveyAdminServiceClient.prototype.execRemoveSurveyInstanceESignSignatory =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pando.api.survey.v1.SurveyAdminService/ExecRemoveSurveyInstanceESignSignatory',
      request,
      metadata || {},
      methodDescriptor_SurveyAdminService_ExecRemoveSurveyInstanceESignSignatory,
      callback);
};


/**
 * @param {!proto.pando.api.survey.v1.SurveyInstanceESignSignatory} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pando.api.Empty>}
 *     Promise that resolves to the response
 */
proto.pando.api.survey.v1.SurveyAdminServicePromiseClient.prototype.execRemoveSurveyInstanceESignSignatory =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pando.api.survey.v1.SurveyAdminService/ExecRemoveSurveyInstanceESignSignatory',
      request,
      metadata || {},
      methodDescriptor_SurveyAdminService_ExecRemoveSurveyInstanceESignSignatory);
};


module.exports = proto.pando.api.survey.v1;

