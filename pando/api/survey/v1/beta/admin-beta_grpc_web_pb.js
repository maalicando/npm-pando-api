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


var google_api_annotations_pb = require('../../../../../google/api/annotations_pb.js')

var pando_api_extensions_pb = require('../../../../../pando/api/extensions_pb.js')

var pando_api_survey_v1_shared_pb = require('../../../../../pando/api/survey/v1/shared_pb.js')
const proto = {};
proto.pando = {};
proto.pando.api = {};
proto.pando.api.survey = {};
proto.pando.api.survey.v1 = require('./admin-beta_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.pando.api.survey.v1.SurveyAdminBetaServiceClient =
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
proto.pando.api.survey.v1.SurveyAdminBetaServicePromiseClient =
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
 *   !proto.pando.api.survey.v1.PublishSurveyRequest,
 *   !proto.pando.api.survey.v1.Survey>}
 */
const methodDescriptor_SurveyAdminBetaService_ExecPublishSurvey = new grpc.web.MethodDescriptor(
  '/pando.api.survey.v1.SurveyAdminBetaService/ExecPublishSurvey',
  grpc.web.MethodType.UNARY,
  proto.pando.api.survey.v1.PublishSurveyRequest,
  pando_api_survey_v1_shared_pb.Survey,
  /**
   * @param {!proto.pando.api.survey.v1.PublishSurveyRequest} request
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
 *   !proto.pando.api.survey.v1.PublishSurveyRequest,
 *   !proto.pando.api.survey.v1.Survey>}
 */
const methodInfo_SurveyAdminBetaService_ExecPublishSurvey = new grpc.web.AbstractClientBase.MethodInfo(
  pando_api_survey_v1_shared_pb.Survey,
  /**
   * @param {!proto.pando.api.survey.v1.PublishSurveyRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pando_api_survey_v1_shared_pb.Survey.deserializeBinary
);


/**
 * @param {!proto.pando.api.survey.v1.PublishSurveyRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pando.api.survey.v1.Survey)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pando.api.survey.v1.Survey>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pando.api.survey.v1.SurveyAdminBetaServiceClient.prototype.execPublishSurvey =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pando.api.survey.v1.SurveyAdminBetaService/ExecPublishSurvey',
      request,
      metadata || {},
      methodDescriptor_SurveyAdminBetaService_ExecPublishSurvey,
      callback);
};


/**
 * @param {!proto.pando.api.survey.v1.PublishSurveyRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pando.api.survey.v1.Survey>}
 *     Promise that resolves to the response
 */
proto.pando.api.survey.v1.SurveyAdminBetaServicePromiseClient.prototype.execPublishSurvey =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pando.api.survey.v1.SurveyAdminBetaService/ExecPublishSurvey',
      request,
      metadata || {},
      methodDescriptor_SurveyAdminBetaService_ExecPublishSurvey);
};


module.exports = proto.pando.api.survey.v1;

