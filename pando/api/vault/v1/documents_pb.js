// source: pando/api/vault/v1/documents.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js');
goog.object.extend(proto, google_api_annotations_pb);
var pando_api_extensions_pb = require('../../../../pando/api/extensions_pb.js');
goog.object.extend(proto, pando_api_extensions_pb);
var pando_api_shared_pb = require('../../../../pando/api/shared_pb.js');
goog.object.extend(proto, pando_api_shared_pb);
goog.exportSymbol('proto.pando.api.vault.v1.Document', null, global);
goog.exportSymbol('proto.pando.api.vault.v1.ExecAddDocumentOwnerRequest', null, global);
goog.exportSymbol('proto.pando.api.vault.v1.ExecRemoveDocumentOwnershipRequest', null, global);
goog.exportSymbol('proto.pando.api.vault.v1.GetDocumentRequest', null, global);
goog.exportSymbol('proto.pando.api.vault.v1.GetDocumentResponse', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pando.api.vault.v1.GetDocumentRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pando.api.vault.v1.GetDocumentRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pando.api.vault.v1.GetDocumentRequest.displayName = 'proto.pando.api.vault.v1.GetDocumentRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pando.api.vault.v1.GetDocumentResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pando.api.vault.v1.GetDocumentResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pando.api.vault.v1.GetDocumentResponse.displayName = 'proto.pando.api.vault.v1.GetDocumentResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pando.api.vault.v1.Document = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pando.api.vault.v1.Document, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pando.api.vault.v1.Document.displayName = 'proto.pando.api.vault.v1.Document';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pando.api.vault.v1.ExecAddDocumentOwnerRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.pando.api.vault.v1.ExecAddDocumentOwnerRequest.repeatedFields_, null);
};
goog.inherits(proto.pando.api.vault.v1.ExecAddDocumentOwnerRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pando.api.vault.v1.ExecAddDocumentOwnerRequest.displayName = 'proto.pando.api.vault.v1.ExecAddDocumentOwnerRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pando.api.vault.v1.ExecRemoveDocumentOwnershipRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pando.api.vault.v1.ExecRemoveDocumentOwnershipRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pando.api.vault.v1.ExecRemoveDocumentOwnershipRequest.displayName = 'proto.pando.api.vault.v1.ExecRemoveDocumentOwnershipRequest';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pando.api.vault.v1.GetDocumentRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pando.api.vault.v1.GetDocumentRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pando.api.vault.v1.GetDocumentRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pando.api.vault.v1.GetDocumentRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    documentId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pando.api.vault.v1.GetDocumentRequest}
 */
proto.pando.api.vault.v1.GetDocumentRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pando.api.vault.v1.GetDocumentRequest;
  return proto.pando.api.vault.v1.GetDocumentRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pando.api.vault.v1.GetDocumentRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pando.api.vault.v1.GetDocumentRequest}
 */
proto.pando.api.vault.v1.GetDocumentRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDocumentId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pando.api.vault.v1.GetDocumentRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pando.api.vault.v1.GetDocumentRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pando.api.vault.v1.GetDocumentRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pando.api.vault.v1.GetDocumentRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDocumentId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string document_id = 1;
 * @return {string}
 */
proto.pando.api.vault.v1.GetDocumentRequest.prototype.getDocumentId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.pando.api.vault.v1.GetDocumentRequest} returns this
 */
proto.pando.api.vault.v1.GetDocumentRequest.prototype.setDocumentId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pando.api.vault.v1.GetDocumentResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.pando.api.vault.v1.GetDocumentResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pando.api.vault.v1.GetDocumentResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pando.api.vault.v1.GetDocumentResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    document: (f = msg.getDocument()) && proto.pando.api.vault.v1.Document.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pando.api.vault.v1.GetDocumentResponse}
 */
proto.pando.api.vault.v1.GetDocumentResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pando.api.vault.v1.GetDocumentResponse;
  return proto.pando.api.vault.v1.GetDocumentResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pando.api.vault.v1.GetDocumentResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pando.api.vault.v1.GetDocumentResponse}
 */
proto.pando.api.vault.v1.GetDocumentResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.pando.api.vault.v1.Document;
      reader.readMessage(value,proto.pando.api.vault.v1.Document.deserializeBinaryFromReader);
      msg.setDocument(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pando.api.vault.v1.GetDocumentResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pando.api.vault.v1.GetDocumentResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pando.api.vault.v1.GetDocumentResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pando.api.vault.v1.GetDocumentResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDocument();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.pando.api.vault.v1.Document.serializeBinaryToWriter
    );
  }
};


/**
 * optional Document document = 1;
 * @return {?proto.pando.api.vault.v1.Document}
 */
proto.pando.api.vault.v1.GetDocumentResponse.prototype.getDocument = function() {
  return /** @type{?proto.pando.api.vault.v1.Document} */ (
    jspb.Message.getWrapperField(this, proto.pando.api.vault.v1.Document, 1));
};


/**
 * @param {?proto.pando.api.vault.v1.Document|undefined} value
 * @return {!proto.pando.api.vault.v1.GetDocumentResponse} returns this
*/
proto.pando.api.vault.v1.GetDocumentResponse.prototype.setDocument = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pando.api.vault.v1.GetDocumentResponse} returns this
 */
proto.pando.api.vault.v1.GetDocumentResponse.prototype.clearDocument = function() {
  return this.setDocument(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pando.api.vault.v1.GetDocumentResponse.prototype.hasDocument = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pando.api.vault.v1.Document.prototype.toObject = function(opt_includeInstance) {
  return proto.pando.api.vault.v1.Document.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pando.api.vault.v1.Document} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pando.api.vault.v1.Document.toObject = function(includeInstance, msg) {
  var f, obj = {
    documentId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    file: msg.getFile_asB64(),
    mediaType: jspb.Message.getFieldWithDefault(msg, 3, ""),
    organizationCode: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pando.api.vault.v1.Document}
 */
proto.pando.api.vault.v1.Document.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pando.api.vault.v1.Document;
  return proto.pando.api.vault.v1.Document.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pando.api.vault.v1.Document} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pando.api.vault.v1.Document}
 */
proto.pando.api.vault.v1.Document.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDocumentId(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setFile(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setMediaType(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrganizationCode(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pando.api.vault.v1.Document.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pando.api.vault.v1.Document.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pando.api.vault.v1.Document} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pando.api.vault.v1.Document.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDocumentId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getFile_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
  f = message.getMediaType();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getOrganizationCode();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string document_id = 1;
 * @return {string}
 */
proto.pando.api.vault.v1.Document.prototype.getDocumentId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.pando.api.vault.v1.Document} returns this
 */
proto.pando.api.vault.v1.Document.prototype.setDocumentId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bytes file = 2;
 * @return {string}
 */
proto.pando.api.vault.v1.Document.prototype.getFile = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes file = 2;
 * This is a type-conversion wrapper around `getFile()`
 * @return {string}
 */
proto.pando.api.vault.v1.Document.prototype.getFile_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getFile()));
};


/**
 * optional bytes file = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getFile()`
 * @return {!Uint8Array}
 */
proto.pando.api.vault.v1.Document.prototype.getFile_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getFile()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.pando.api.vault.v1.Document} returns this
 */
proto.pando.api.vault.v1.Document.prototype.setFile = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};


/**
 * optional string media_type = 3;
 * @return {string}
 */
proto.pando.api.vault.v1.Document.prototype.getMediaType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.pando.api.vault.v1.Document} returns this
 */
proto.pando.api.vault.v1.Document.prototype.setMediaType = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string organization_code = 4;
 * @return {string}
 */
proto.pando.api.vault.v1.Document.prototype.getOrganizationCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.pando.api.vault.v1.Document} returns this
 */
proto.pando.api.vault.v1.Document.prototype.setOrganizationCode = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.pando.api.vault.v1.ExecAddDocumentOwnerRequest.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pando.api.vault.v1.ExecAddDocumentOwnerRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pando.api.vault.v1.ExecAddDocumentOwnerRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pando.api.vault.v1.ExecAddDocumentOwnerRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pando.api.vault.v1.ExecAddDocumentOwnerRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    documentGuid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    userIdsList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pando.api.vault.v1.ExecAddDocumentOwnerRequest}
 */
proto.pando.api.vault.v1.ExecAddDocumentOwnerRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pando.api.vault.v1.ExecAddDocumentOwnerRequest;
  return proto.pando.api.vault.v1.ExecAddDocumentOwnerRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pando.api.vault.v1.ExecAddDocumentOwnerRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pando.api.vault.v1.ExecAddDocumentOwnerRequest}
 */
proto.pando.api.vault.v1.ExecAddDocumentOwnerRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDocumentGuid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addUserIds(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pando.api.vault.v1.ExecAddDocumentOwnerRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pando.api.vault.v1.ExecAddDocumentOwnerRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pando.api.vault.v1.ExecAddDocumentOwnerRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pando.api.vault.v1.ExecAddDocumentOwnerRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDocumentGuid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getUserIdsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
};


/**
 * optional string document_guid = 1;
 * @return {string}
 */
proto.pando.api.vault.v1.ExecAddDocumentOwnerRequest.prototype.getDocumentGuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.pando.api.vault.v1.ExecAddDocumentOwnerRequest} returns this
 */
proto.pando.api.vault.v1.ExecAddDocumentOwnerRequest.prototype.setDocumentGuid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated string user_ids = 2;
 * @return {!Array<string>}
 */
proto.pando.api.vault.v1.ExecAddDocumentOwnerRequest.prototype.getUserIdsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.pando.api.vault.v1.ExecAddDocumentOwnerRequest} returns this
 */
proto.pando.api.vault.v1.ExecAddDocumentOwnerRequest.prototype.setUserIdsList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.pando.api.vault.v1.ExecAddDocumentOwnerRequest} returns this
 */
proto.pando.api.vault.v1.ExecAddDocumentOwnerRequest.prototype.addUserIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.pando.api.vault.v1.ExecAddDocumentOwnerRequest} returns this
 */
proto.pando.api.vault.v1.ExecAddDocumentOwnerRequest.prototype.clearUserIdsList = function() {
  return this.setUserIdsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pando.api.vault.v1.ExecRemoveDocumentOwnershipRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pando.api.vault.v1.ExecRemoveDocumentOwnershipRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pando.api.vault.v1.ExecRemoveDocumentOwnershipRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pando.api.vault.v1.ExecRemoveDocumentOwnershipRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    documentGuid: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pando.api.vault.v1.ExecRemoveDocumentOwnershipRequest}
 */
proto.pando.api.vault.v1.ExecRemoveDocumentOwnershipRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pando.api.vault.v1.ExecRemoveDocumentOwnershipRequest;
  return proto.pando.api.vault.v1.ExecRemoveDocumentOwnershipRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pando.api.vault.v1.ExecRemoveDocumentOwnershipRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pando.api.vault.v1.ExecRemoveDocumentOwnershipRequest}
 */
proto.pando.api.vault.v1.ExecRemoveDocumentOwnershipRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDocumentGuid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pando.api.vault.v1.ExecRemoveDocumentOwnershipRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pando.api.vault.v1.ExecRemoveDocumentOwnershipRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pando.api.vault.v1.ExecRemoveDocumentOwnershipRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pando.api.vault.v1.ExecRemoveDocumentOwnershipRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDocumentGuid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string document_guid = 1;
 * @return {string}
 */
proto.pando.api.vault.v1.ExecRemoveDocumentOwnershipRequest.prototype.getDocumentGuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.pando.api.vault.v1.ExecRemoveDocumentOwnershipRequest} returns this
 */
proto.pando.api.vault.v1.ExecRemoveDocumentOwnershipRequest.prototype.setDocumentGuid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


goog.object.extend(exports, proto.pando.api.vault.v1);