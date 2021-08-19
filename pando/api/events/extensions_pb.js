// source: pando/api/events/extensions.proto
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

var google_protobuf_descriptor_pb = require('google-protobuf/google/protobuf/descriptor_pb.js');
goog.object.extend(proto, google_protobuf_descriptor_pb);
goog.exportSymbol('proto.pando.api.events.EventMetadata', null, global);
goog.exportSymbol('proto.pando.api.events.event', null, global);
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
proto.pando.api.events.EventMetadata = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pando.api.events.EventMetadata, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pando.api.events.EventMetadata.displayName = 'proto.pando.api.events.EventMetadata';
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
proto.pando.api.events.EventMetadata.prototype.toObject = function(opt_includeInstance) {
  return proto.pando.api.events.EventMetadata.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pando.api.events.EventMetadata} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pando.api.events.EventMetadata.toObject = function(includeInstance, msg) {
  var f, obj = {
    dataSchema: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.pando.api.events.EventMetadata}
 */
proto.pando.api.events.EventMetadata.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pando.api.events.EventMetadata;
  return proto.pando.api.events.EventMetadata.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pando.api.events.EventMetadata} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pando.api.events.EventMetadata}
 */
proto.pando.api.events.EventMetadata.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDataSchema(value);
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
proto.pando.api.events.EventMetadata.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pando.api.events.EventMetadata.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pando.api.events.EventMetadata} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pando.api.events.EventMetadata.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDataSchema();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string data_schema = 1;
 * @return {string}
 */
proto.pando.api.events.EventMetadata.prototype.getDataSchema = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.pando.api.events.EventMetadata} returns this
 */
proto.pando.api.events.EventMetadata.prototype.setDataSchema = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * A tuple of {field number, class constructor} for the extension
 * field named `event`.
 * @type {!jspb.ExtensionFieldInfo<!proto.pando.api.events.EventMetadata>}
 */
proto.pando.api.events.event = new jspb.ExtensionFieldInfo(
    84058,
    {event: 0},
    proto.pando.api.events.EventMetadata,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         proto.pando.api.events.EventMetadata.toObject),
    0);

google_protobuf_descriptor_pb.MessageOptions.extensionsBinary[84058] = new jspb.ExtensionFieldBinaryInfo(
    proto.pando.api.events.event,
    jspb.BinaryReader.prototype.readMessage,
    jspb.BinaryWriter.prototype.writeMessage,
    proto.pando.api.events.EventMetadata.serializeBinaryToWriter,
    proto.pando.api.events.EventMetadata.deserializeBinaryFromReader,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.MessageOptions.extensions[84058] = proto.pando.api.events.event;

goog.object.extend(exports, proto.pando.api.events);
