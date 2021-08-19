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
proto.pando.api.survey.v1 = require('./reports_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.pando.api.survey.v1.SurveyReportServiceClient =
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
proto.pando.api.survey.v1.SurveyReportServicePromiseClient =
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
 *   !proto.pando.api.survey.v1.GetInstancesReportRequest,
 *   !proto.pando.api.survey.v1.InstanceList>}
 */
const methodDescriptor_SurveyReportService_GetIncompleteSurveyInstances = new grpc.web.MethodDescriptor(
  '/pando.api.survey.v1.SurveyReportService/GetIncompleteSurveyInstances',
  grpc.web.MethodType.UNARY,
  proto.pando.api.survey.v1.GetInstancesReportRequest,
  pando_api_survey_v1_shared_pb.InstanceList,
  /**
   * @param {!proto.pando.api.survey.v1.GetInstancesReportRequest} request
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
 *   !proto.pando.api.survey.v1.GetInstancesReportRequest,
 *   !proto.pando.api.survey.v1.InstanceList>}
 */
const methodInfo_SurveyReportService_GetIncompleteSurveyInstances = new grpc.web.AbstractClientBase.MethodInfo(
  pando_api_survey_v1_shared_pb.InstanceList,
  /**
   * @param {!proto.pando.api.survey.v1.GetInstancesReportRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_survey_v1_shared_pb.InstanceList.deserializeBinary
);


/**
 * @param {!proto.pando.api.survey.v1.GetInstancesReportRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pando.api.survey.v1.InstanceList)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pando.api.survey.v1.InstanceList>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pando.api.survey.v1.SurveyReportServiceClient.prototype.getIncompleteSurveyInstances =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pando.api.survey.v1.SurveyReportService/GetIncompleteSurveyInstances',
      request,
      metadata || {},
      methodDescriptor_SurveyReportService_GetIncompleteSurveyInstances,
      callback);
};


/**
 * @param {!proto.pando.api.survey.v1.GetInstancesReportRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pando.api.survey.v1.InstanceList>}
 *     Promise that resolves to the response
 */
proto.pando.api.survey.v1.SurveyReportServicePromiseClient.prototype.getIncompleteSurveyInstances =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pando.api.survey.v1.SurveyReportService/GetIncompleteSurveyInstances',
      request,
      metadata || {},
      methodDescriptor_SurveyReportService_GetIncompleteSurveyInstances);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pando.api.survey.v1.GetInstancesReportRequest,
 *   !proto.pando.api.survey.v1.InstanceList>}
 */
const methodDescriptor_SurveyReportService_GetCompletedSurveyInstances = new grpc.web.MethodDescriptor(
  '/pando.api.survey.v1.SurveyReportService/GetCompletedSurveyInstances',
  grpc.web.MethodType.UNARY,
  proto.pando.api.survey.v1.GetInstancesReportRequest,
  pando_api_survey_v1_shared_pb.InstanceList,
  /**
   * @param {!proto.pando.api.survey.v1.GetInstancesReportRequest} request
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
 *   !proto.pando.api.survey.v1.GetInstancesReportRequest,
 *   !proto.pando.api.survey.v1.InstanceList>}
 */
const methodInfo_SurveyReportService_GetCompletedSurveyInstances = new grpc.web.AbstractClientBase.MethodInfo(
  pando_api_survey_v1_shared_pb.InstanceList,
  /**
   * @param {!proto.pando.api.survey.v1.GetInstancesReportRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_survey_v1_shared_pb.InstanceList.deserializeBinary
);


/**
 * @param {!proto.pando.api.survey.v1.GetInstancesReportRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pando.api.survey.v1.InstanceList)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pando.api.survey.v1.InstanceList>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pando.api.survey.v1.SurveyReportServiceClient.prototype.getCompletedSurveyInstances =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pando.api.survey.v1.SurveyReportService/GetCompletedSurveyInstances',
      request,
      metadata || {},
      methodDescriptor_SurveyReportService_GetCompletedSurveyInstances,
      callback);
};


/**
 * @param {!proto.pando.api.survey.v1.GetInstancesReportRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pando.api.survey.v1.InstanceList>}
 *     Promise that resolves to the response
 */
proto.pando.api.survey.v1.SurveyReportServicePromiseClient.prototype.getCompletedSurveyInstances =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pando.api.survey.v1.SurveyReportService/GetCompletedSurveyInstances',
      request,
      metadata || {},
      methodDescriptor_SurveyReportService_GetCompletedSurveyInstances);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pando.api.survey.v1.GetInstancesReportRequest,
 *   !proto.pando.api.survey.v1.InstanceList>}
 */
const methodDescriptor_SurveyReportService_GetRecentlyCompletedSurveyInstances = new grpc.web.MethodDescriptor(
  '/pando.api.survey.v1.SurveyReportService/GetRecentlyCompletedSurveyInstances',
  grpc.web.MethodType.UNARY,
  proto.pando.api.survey.v1.GetInstancesReportRequest,
  pando_api_survey_v1_shared_pb.InstanceList,
  /**
   * @param {!proto.pando.api.survey.v1.GetInstancesReportRequest} request
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
 *   !proto.pando.api.survey.v1.GetInstancesReportRequest,
 *   !proto.pando.api.survey.v1.InstanceList>}
 */
const methodInfo_SurveyReportService_GetRecentlyCompletedSurveyInstances = new grpc.web.AbstractClientBase.MethodInfo(
  pando_api_survey_v1_shared_pb.InstanceList,
  /**
   * @param {!proto.pando.api.survey.v1.GetInstancesReportRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_survey_v1_shared_pb.InstanceList.deserializeBinary
);


/**
 * @param {!proto.pando.api.survey.v1.GetInstancesReportRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pando.api.survey.v1.InstanceList)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pando.api.survey.v1.InstanceList>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pando.api.survey.v1.SurveyReportServiceClient.prototype.getRecentlyCompletedSurveyInstances =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pando.api.survey.v1.SurveyReportService/GetRecentlyCompletedSurveyInstances',
      request,
      metadata || {},
      methodDescriptor_SurveyReportService_GetRecentlyCompletedSurveyInstances,
      callback);
};


/**
 * @param {!proto.pando.api.survey.v1.GetInstancesReportRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pando.api.survey.v1.InstanceList>}
 *     Promise that resolves to the response
 */
proto.pando.api.survey.v1.SurveyReportServicePromiseClient.prototype.getRecentlyCompletedSurveyInstances =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pando.api.survey.v1.SurveyReportService/GetRecentlyCompletedSurveyInstances',
      request,
      metadata || {},
      methodDescriptor_SurveyReportService_GetRecentlyCompletedSurveyInstances);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pando.api.survey.v1.GetSurveyInstanceStatusesRequest,
 *   !proto.pando.api.survey.v1.SurveyInstancesStatusList>}
 */
const methodDescriptor_SurveyReportService_GetSurveyInstanceStatuses = new grpc.web.MethodDescriptor(
  '/pando.api.survey.v1.SurveyReportService/GetSurveyInstanceStatuses',
  grpc.web.MethodType.UNARY,
  proto.pando.api.survey.v1.GetSurveyInstanceStatusesRequest,
  proto.pando.api.survey.v1.SurveyInstancesStatusList,
  /**
   * @param {!proto.pando.api.survey.v1.GetSurveyInstanceStatusesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pando.api.survey.v1.SurveyInstancesStatusList.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pando.api.survey.v1.GetSurveyInstanceStatusesRequest,
 *   !proto.pando.api.survey.v1.SurveyInstancesStatusList>}
 */
const methodInfo_SurveyReportService_GetSurveyInstanceStatuses = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pando.api.survey.v1.SurveyInstancesStatusList,
  /**
   * @param {!proto.pando.api.survey.v1.GetSurveyInstanceStatusesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pando.api.survey.v1.SurveyInstancesStatusList.deserializeBinary
);


/**
 * @param {!proto.pando.api.survey.v1.GetSurveyInstanceStatusesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pando.api.survey.v1.SurveyInstancesStatusList)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pando.api.survey.v1.SurveyInstancesStatusList>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pando.api.survey.v1.SurveyReportServiceClient.prototype.getSurveyInstanceStatuses =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pando.api.survey.v1.SurveyReportService/GetSurveyInstanceStatuses',
      request,
      metadata || {},
      methodDescriptor_SurveyReportService_GetSurveyInstanceStatuses,
      callback);
};


/**
 * @param {!proto.pando.api.survey.v1.GetSurveyInstanceStatusesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pando.api.survey.v1.SurveyInstancesStatusList>}
 *     Promise that resolves to the response
 */
proto.pando.api.survey.v1.SurveyReportServicePromiseClient.prototype.getSurveyInstanceStatuses =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pando.api.survey.v1.SurveyReportService/GetSurveyInstanceStatuses',
      request,
      metadata || {},
      methodDescriptor_SurveyReportService_GetSurveyInstanceStatuses);
};


module.exports = proto.pando.api.survey.v1;

