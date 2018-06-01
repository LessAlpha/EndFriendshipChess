var $protobuf = window.protobuf;
$protobuf.roots.default=window;
// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.game = (function() {

    /**
     * Namespace game.
     * @exports game
     * @namespace
     */
    var game = {};

    game.LoginReq = (function() {

        /**
         * Properties of a LoginReq.
         * @memberof game
         * @interface ILoginReq
         * @property {string|null} [uId] LoginReq uId
         * @property {string|null} [nick] LoginReq nick
         * @property {string|null} [photo] LoginReq photo
         * @property {string|null} [psw] LoginReq psw
         */

        /**
         * Constructs a new LoginReq.
         * @memberof game
         * @classdesc Represents a LoginReq.
         * @implements ILoginReq
         * @constructor
         * @param {game.ILoginReq=} [properties] Properties to set
         */
        function LoginReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LoginReq uId.
         * @member {string} uId
         * @memberof game.LoginReq
         * @instance
         */
        LoginReq.prototype.uId = "";

        /**
         * LoginReq nick.
         * @member {string} nick
         * @memberof game.LoginReq
         * @instance
         */
        LoginReq.prototype.nick = "";

        /**
         * LoginReq photo.
         * @member {string} photo
         * @memberof game.LoginReq
         * @instance
         */
        LoginReq.prototype.photo = "";

        /**
         * LoginReq psw.
         * @member {string} psw
         * @memberof game.LoginReq
         * @instance
         */
        LoginReq.prototype.psw = "";

        /**
         * Creates a new LoginReq instance using the specified properties.
         * @function create
         * @memberof game.LoginReq
         * @static
         * @param {game.ILoginReq=} [properties] Properties to set
         * @returns {game.LoginReq} LoginReq instance
         */
        LoginReq.create = function create(properties) {
            return new LoginReq(properties);
        };

        /**
         * Encodes the specified LoginReq message. Does not implicitly {@link game.LoginReq.verify|verify} messages.
         * @function encode
         * @memberof game.LoginReq
         * @static
         * @param {game.ILoginReq} message LoginReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.uId != null && message.hasOwnProperty("uId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.uId);
            if (message.nick != null && message.hasOwnProperty("nick"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.nick);
            if (message.photo != null && message.hasOwnProperty("photo"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.photo);
            if (message.psw != null && message.hasOwnProperty("psw"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.psw);
            return writer;
        };

        /**
         * Encodes the specified LoginReq message, length delimited. Does not implicitly {@link game.LoginReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.LoginReq
         * @static
         * @param {game.ILoginReq} message LoginReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LoginReq message from the specified reader or buffer.
         * @function decode
         * @memberof game.LoginReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.LoginReq} LoginReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.LoginReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.uId = reader.string();
                    break;
                case 2:
                    message.nick = reader.string();
                    break;
                case 3:
                    message.photo = reader.string();
                    break;
                case 4:
                    message.psw = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a LoginReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.LoginReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.LoginReq} LoginReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LoginReq message.
         * @function verify
         * @memberof game.LoginReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LoginReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.uId != null && message.hasOwnProperty("uId"))
                if (!$util.isString(message.uId))
                    return "uId: string expected";
            if (message.nick != null && message.hasOwnProperty("nick"))
                if (!$util.isString(message.nick))
                    return "nick: string expected";
            if (message.photo != null && message.hasOwnProperty("photo"))
                if (!$util.isString(message.photo))
                    return "photo: string expected";
            if (message.psw != null && message.hasOwnProperty("psw"))
                if (!$util.isString(message.psw))
                    return "psw: string expected";
            return null;
        };

        /**
         * Creates a LoginReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.LoginReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.LoginReq} LoginReq
         */
        LoginReq.fromObject = function fromObject(object) {
            if (object instanceof $root.game.LoginReq)
                return object;
            var message = new $root.game.LoginReq();
            if (object.uId != null)
                message.uId = String(object.uId);
            if (object.nick != null)
                message.nick = String(object.nick);
            if (object.photo != null)
                message.photo = String(object.photo);
            if (object.psw != null)
                message.psw = String(object.psw);
            return message;
        };

        /**
         * Creates a plain object from a LoginReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.LoginReq
         * @static
         * @param {game.LoginReq} message LoginReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LoginReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.uId = "";
                object.nick = "";
                object.photo = "";
                object.psw = "";
            }
            if (message.uId != null && message.hasOwnProperty("uId"))
                object.uId = message.uId;
            if (message.nick != null && message.hasOwnProperty("nick"))
                object.nick = message.nick;
            if (message.photo != null && message.hasOwnProperty("photo"))
                object.photo = message.photo;
            if (message.psw != null && message.hasOwnProperty("psw"))
                object.psw = message.psw;
            return object;
        };

        /**
         * Converts this LoginReq to JSON.
         * @function toJSON
         * @memberof game.LoginReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LoginReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return LoginReq;
    })();

    game.LoginResp = (function() {

        /**
         * Properties of a LoginResp.
         * @memberof game
         * @interface ILoginResp
         * @property {number|null} [res] LoginResp res
         */

        /**
         * Constructs a new LoginResp.
         * @memberof game
         * @classdesc Represents a LoginResp.
         * @implements ILoginResp
         * @constructor
         * @param {game.ILoginResp=} [properties] Properties to set
         */
        function LoginResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LoginResp res.
         * @member {number} res
         * @memberof game.LoginResp
         * @instance
         */
        LoginResp.prototype.res = 0;

        /**
         * Creates a new LoginResp instance using the specified properties.
         * @function create
         * @memberof game.LoginResp
         * @static
         * @param {game.ILoginResp=} [properties] Properties to set
         * @returns {game.LoginResp} LoginResp instance
         */
        LoginResp.create = function create(properties) {
            return new LoginResp(properties);
        };

        /**
         * Encodes the specified LoginResp message. Does not implicitly {@link game.LoginResp.verify|verify} messages.
         * @function encode
         * @memberof game.LoginResp
         * @static
         * @param {game.ILoginResp} message LoginResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.res != null && message.hasOwnProperty("res"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.res);
            return writer;
        };

        /**
         * Encodes the specified LoginResp message, length delimited. Does not implicitly {@link game.LoginResp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.LoginResp
         * @static
         * @param {game.ILoginResp} message LoginResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LoginResp message from the specified reader or buffer.
         * @function decode
         * @memberof game.LoginResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.LoginResp} LoginResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.LoginResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.res = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a LoginResp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.LoginResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.LoginResp} LoginResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LoginResp message.
         * @function verify
         * @memberof game.LoginResp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LoginResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.res != null && message.hasOwnProperty("res"))
                if (!$util.isInteger(message.res))
                    return "res: integer expected";
            return null;
        };

        /**
         * Creates a LoginResp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.LoginResp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.LoginResp} LoginResp
         */
        LoginResp.fromObject = function fromObject(object) {
            if (object instanceof $root.game.LoginResp)
                return object;
            var message = new $root.game.LoginResp();
            if (object.res != null)
                message.res = object.res | 0;
            return message;
        };

        /**
         * Creates a plain object from a LoginResp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.LoginResp
         * @static
         * @param {game.LoginResp} message LoginResp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LoginResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.res = 0;
            if (message.res != null && message.hasOwnProperty("res"))
                object.res = message.res;
            return object;
        };

        /**
         * Converts this LoginResp to JSON.
         * @function toJSON
         * @memberof game.LoginResp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LoginResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return LoginResp;
    })();

    game.CreateRoomReq = (function() {

        /**
         * Properties of a CreateRoomReq.
         * @memberof game
         * @interface ICreateRoomReq
         * @property {number|null} [nSumUser] CreateRoomReq nSumUser
         * @property {number|null} [skin] CreateRoomReq skin
         */

        /**
         * Constructs a new CreateRoomReq.
         * @memberof game
         * @classdesc Represents a CreateRoomReq.
         * @implements ICreateRoomReq
         * @constructor
         * @param {game.ICreateRoomReq=} [properties] Properties to set
         */
        function CreateRoomReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CreateRoomReq nSumUser.
         * @member {number} nSumUser
         * @memberof game.CreateRoomReq
         * @instance
         */
        CreateRoomReq.prototype.nSumUser = 0;

        /**
         * CreateRoomReq skin.
         * @member {number} skin
         * @memberof game.CreateRoomReq
         * @instance
         */
        CreateRoomReq.prototype.skin = 0;

        /**
         * Creates a new CreateRoomReq instance using the specified properties.
         * @function create
         * @memberof game.CreateRoomReq
         * @static
         * @param {game.ICreateRoomReq=} [properties] Properties to set
         * @returns {game.CreateRoomReq} CreateRoomReq instance
         */
        CreateRoomReq.create = function create(properties) {
            return new CreateRoomReq(properties);
        };

        /**
         * Encodes the specified CreateRoomReq message. Does not implicitly {@link game.CreateRoomReq.verify|verify} messages.
         * @function encode
         * @memberof game.CreateRoomReq
         * @static
         * @param {game.ICreateRoomReq} message CreateRoomReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateRoomReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.nSumUser != null && message.hasOwnProperty("nSumUser"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.nSumUser);
            if (message.skin != null && message.hasOwnProperty("skin"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.skin);
            return writer;
        };

        /**
         * Encodes the specified CreateRoomReq message, length delimited. Does not implicitly {@link game.CreateRoomReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.CreateRoomReq
         * @static
         * @param {game.ICreateRoomReq} message CreateRoomReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateRoomReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CreateRoomReq message from the specified reader or buffer.
         * @function decode
         * @memberof game.CreateRoomReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.CreateRoomReq} CreateRoomReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateRoomReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.CreateRoomReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.nSumUser = reader.int32();
                    break;
                case 2:
                    message.skin = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CreateRoomReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.CreateRoomReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.CreateRoomReq} CreateRoomReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateRoomReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CreateRoomReq message.
         * @function verify
         * @memberof game.CreateRoomReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CreateRoomReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.nSumUser != null && message.hasOwnProperty("nSumUser"))
                if (!$util.isInteger(message.nSumUser))
                    return "nSumUser: integer expected";
            if (message.skin != null && message.hasOwnProperty("skin"))
                if (!$util.isInteger(message.skin))
                    return "skin: integer expected";
            return null;
        };

        /**
         * Creates a CreateRoomReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.CreateRoomReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.CreateRoomReq} CreateRoomReq
         */
        CreateRoomReq.fromObject = function fromObject(object) {
            if (object instanceof $root.game.CreateRoomReq)
                return object;
            var message = new $root.game.CreateRoomReq();
            if (object.nSumUser != null)
                message.nSumUser = object.nSumUser | 0;
            if (object.skin != null)
                message.skin = object.skin | 0;
            return message;
        };

        /**
         * Creates a plain object from a CreateRoomReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.CreateRoomReq
         * @static
         * @param {game.CreateRoomReq} message CreateRoomReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CreateRoomReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.nSumUser = 0;
                object.skin = 0;
            }
            if (message.nSumUser != null && message.hasOwnProperty("nSumUser"))
                object.nSumUser = message.nSumUser;
            if (message.skin != null && message.hasOwnProperty("skin"))
                object.skin = message.skin;
            return object;
        };

        /**
         * Converts this CreateRoomReq to JSON.
         * @function toJSON
         * @memberof game.CreateRoomReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CreateRoomReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CreateRoomReq;
    })();

    game.CreateRoomResp = (function() {

        /**
         * Properties of a CreateRoomResp.
         * @memberof game
         * @interface ICreateRoomResp
         * @property {number|null} [res] CreateRoomResp res
         * @property {number|null} [nIdRoom] CreateRoomResp nIdRoom
         * @property {number|null} [nSumUser] CreateRoomResp nSumUser
         */

        /**
         * Constructs a new CreateRoomResp.
         * @memberof game
         * @classdesc Represents a CreateRoomResp.
         * @implements ICreateRoomResp
         * @constructor
         * @param {game.ICreateRoomResp=} [properties] Properties to set
         */
        function CreateRoomResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CreateRoomResp res.
         * @member {number} res
         * @memberof game.CreateRoomResp
         * @instance
         */
        CreateRoomResp.prototype.res = 0;

        /**
         * CreateRoomResp nIdRoom.
         * @member {number} nIdRoom
         * @memberof game.CreateRoomResp
         * @instance
         */
        CreateRoomResp.prototype.nIdRoom = 0;

        /**
         * CreateRoomResp nSumUser.
         * @member {number} nSumUser
         * @memberof game.CreateRoomResp
         * @instance
         */
        CreateRoomResp.prototype.nSumUser = 0;

        /**
         * Creates a new CreateRoomResp instance using the specified properties.
         * @function create
         * @memberof game.CreateRoomResp
         * @static
         * @param {game.ICreateRoomResp=} [properties] Properties to set
         * @returns {game.CreateRoomResp} CreateRoomResp instance
         */
        CreateRoomResp.create = function create(properties) {
            return new CreateRoomResp(properties);
        };

        /**
         * Encodes the specified CreateRoomResp message. Does not implicitly {@link game.CreateRoomResp.verify|verify} messages.
         * @function encode
         * @memberof game.CreateRoomResp
         * @static
         * @param {game.ICreateRoomResp} message CreateRoomResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateRoomResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.res != null && message.hasOwnProperty("res"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.res);
            if (message.nIdRoom != null && message.hasOwnProperty("nIdRoom"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.nIdRoom);
            if (message.nSumUser != null && message.hasOwnProperty("nSumUser"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.nSumUser);
            return writer;
        };

        /**
         * Encodes the specified CreateRoomResp message, length delimited. Does not implicitly {@link game.CreateRoomResp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.CreateRoomResp
         * @static
         * @param {game.ICreateRoomResp} message CreateRoomResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateRoomResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CreateRoomResp message from the specified reader or buffer.
         * @function decode
         * @memberof game.CreateRoomResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.CreateRoomResp} CreateRoomResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateRoomResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.CreateRoomResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.res = reader.int32();
                    break;
                case 2:
                    message.nIdRoom = reader.int32();
                    break;
                case 4:
                    message.nSumUser = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CreateRoomResp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.CreateRoomResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.CreateRoomResp} CreateRoomResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateRoomResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CreateRoomResp message.
         * @function verify
         * @memberof game.CreateRoomResp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CreateRoomResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.res != null && message.hasOwnProperty("res"))
                if (!$util.isInteger(message.res))
                    return "res: integer expected";
            if (message.nIdRoom != null && message.hasOwnProperty("nIdRoom"))
                if (!$util.isInteger(message.nIdRoom))
                    return "nIdRoom: integer expected";
            if (message.nSumUser != null && message.hasOwnProperty("nSumUser"))
                if (!$util.isInteger(message.nSumUser))
                    return "nSumUser: integer expected";
            return null;
        };

        /**
         * Creates a CreateRoomResp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.CreateRoomResp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.CreateRoomResp} CreateRoomResp
         */
        CreateRoomResp.fromObject = function fromObject(object) {
            if (object instanceof $root.game.CreateRoomResp)
                return object;
            var message = new $root.game.CreateRoomResp();
            if (object.res != null)
                message.res = object.res | 0;
            if (object.nIdRoom != null)
                message.nIdRoom = object.nIdRoom | 0;
            if (object.nSumUser != null)
                message.nSumUser = object.nSumUser | 0;
            return message;
        };

        /**
         * Creates a plain object from a CreateRoomResp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.CreateRoomResp
         * @static
         * @param {game.CreateRoomResp} message CreateRoomResp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CreateRoomResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.res = 0;
                object.nIdRoom = 0;
                object.nSumUser = 0;
            }
            if (message.res != null && message.hasOwnProperty("res"))
                object.res = message.res;
            if (message.nIdRoom != null && message.hasOwnProperty("nIdRoom"))
                object.nIdRoom = message.nIdRoom;
            if (message.nSumUser != null && message.hasOwnProperty("nSumUser"))
                object.nSumUser = message.nSumUser;
            return object;
        };

        /**
         * Converts this CreateRoomResp to JSON.
         * @function toJSON
         * @memberof game.CreateRoomResp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CreateRoomResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CreateRoomResp;
    })();

    game.JoinRoomReq = (function() {

        /**
         * Properties of a JoinRoomReq.
         * @memberof game
         * @interface IJoinRoomReq
         * @property {number|null} [nIdRoom] JoinRoomReq nIdRoom
         */

        /**
         * Constructs a new JoinRoomReq.
         * @memberof game
         * @classdesc Represents a JoinRoomReq.
         * @implements IJoinRoomReq
         * @constructor
         * @param {game.IJoinRoomReq=} [properties] Properties to set
         */
        function JoinRoomReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * JoinRoomReq nIdRoom.
         * @member {number} nIdRoom
         * @memberof game.JoinRoomReq
         * @instance
         */
        JoinRoomReq.prototype.nIdRoom = 0;

        /**
         * Creates a new JoinRoomReq instance using the specified properties.
         * @function create
         * @memberof game.JoinRoomReq
         * @static
         * @param {game.IJoinRoomReq=} [properties] Properties to set
         * @returns {game.JoinRoomReq} JoinRoomReq instance
         */
        JoinRoomReq.create = function create(properties) {
            return new JoinRoomReq(properties);
        };

        /**
         * Encodes the specified JoinRoomReq message. Does not implicitly {@link game.JoinRoomReq.verify|verify} messages.
         * @function encode
         * @memberof game.JoinRoomReq
         * @static
         * @param {game.IJoinRoomReq} message JoinRoomReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JoinRoomReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.nIdRoom != null && message.hasOwnProperty("nIdRoom"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.nIdRoom);
            return writer;
        };

        /**
         * Encodes the specified JoinRoomReq message, length delimited. Does not implicitly {@link game.JoinRoomReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.JoinRoomReq
         * @static
         * @param {game.IJoinRoomReq} message JoinRoomReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JoinRoomReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a JoinRoomReq message from the specified reader or buffer.
         * @function decode
         * @memberof game.JoinRoomReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.JoinRoomReq} JoinRoomReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JoinRoomReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.JoinRoomReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.nIdRoom = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a JoinRoomReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.JoinRoomReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.JoinRoomReq} JoinRoomReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JoinRoomReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a JoinRoomReq message.
         * @function verify
         * @memberof game.JoinRoomReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        JoinRoomReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.nIdRoom != null && message.hasOwnProperty("nIdRoom"))
                if (!$util.isInteger(message.nIdRoom))
                    return "nIdRoom: integer expected";
            return null;
        };

        /**
         * Creates a JoinRoomReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.JoinRoomReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.JoinRoomReq} JoinRoomReq
         */
        JoinRoomReq.fromObject = function fromObject(object) {
            if (object instanceof $root.game.JoinRoomReq)
                return object;
            var message = new $root.game.JoinRoomReq();
            if (object.nIdRoom != null)
                message.nIdRoom = object.nIdRoom | 0;
            return message;
        };

        /**
         * Creates a plain object from a JoinRoomReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.JoinRoomReq
         * @static
         * @param {game.JoinRoomReq} message JoinRoomReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        JoinRoomReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.nIdRoom = 0;
            if (message.nIdRoom != null && message.hasOwnProperty("nIdRoom"))
                object.nIdRoom = message.nIdRoom;
            return object;
        };

        /**
         * Converts this JoinRoomReq to JSON.
         * @function toJSON
         * @memberof game.JoinRoomReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        JoinRoomReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return JoinRoomReq;
    })();

    game.JoinRoomResp = (function() {

        /**
         * Properties of a JoinRoomResp.
         * @memberof game
         * @interface IJoinRoomResp
         * @property {number|null} [res] JoinRoomResp res
         * @property {number|null} [nIdRoom] JoinRoomResp nIdRoom
         * @property {number|null} [nSumUser] JoinRoomResp nSumUser
         * @property {string|null} [uIdHost] JoinRoomResp uIdHost
         * @property {Array.<game.IUserJoin>|null} [users] JoinRoomResp users
         */

        /**
         * Constructs a new JoinRoomResp.
         * @memberof game
         * @classdesc Represents a JoinRoomResp.
         * @implements IJoinRoomResp
         * @constructor
         * @param {game.IJoinRoomResp=} [properties] Properties to set
         */
        function JoinRoomResp(properties) {
            this.users = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * JoinRoomResp res.
         * @member {number} res
         * @memberof game.JoinRoomResp
         * @instance
         */
        JoinRoomResp.prototype.res = 0;

        /**
         * JoinRoomResp nIdRoom.
         * @member {number} nIdRoom
         * @memberof game.JoinRoomResp
         * @instance
         */
        JoinRoomResp.prototype.nIdRoom = 0;

        /**
         * JoinRoomResp nSumUser.
         * @member {number} nSumUser
         * @memberof game.JoinRoomResp
         * @instance
         */
        JoinRoomResp.prototype.nSumUser = 0;

        /**
         * JoinRoomResp uIdHost.
         * @member {string} uIdHost
         * @memberof game.JoinRoomResp
         * @instance
         */
        JoinRoomResp.prototype.uIdHost = "";

        /**
         * JoinRoomResp users.
         * @member {Array.<game.IUserJoin>} users
         * @memberof game.JoinRoomResp
         * @instance
         */
        JoinRoomResp.prototype.users = $util.emptyArray;

        /**
         * Creates a new JoinRoomResp instance using the specified properties.
         * @function create
         * @memberof game.JoinRoomResp
         * @static
         * @param {game.IJoinRoomResp=} [properties] Properties to set
         * @returns {game.JoinRoomResp} JoinRoomResp instance
         */
        JoinRoomResp.create = function create(properties) {
            return new JoinRoomResp(properties);
        };

        /**
         * Encodes the specified JoinRoomResp message. Does not implicitly {@link game.JoinRoomResp.verify|verify} messages.
         * @function encode
         * @memberof game.JoinRoomResp
         * @static
         * @param {game.IJoinRoomResp} message JoinRoomResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JoinRoomResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.res != null && message.hasOwnProperty("res"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.res);
            if (message.nIdRoom != null && message.hasOwnProperty("nIdRoom"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.nIdRoom);
            if (message.nSumUser != null && message.hasOwnProperty("nSumUser"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.nSumUser);
            if (message.uIdHost != null && message.hasOwnProperty("uIdHost"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.uIdHost);
            if (message.users != null && message.users.length)
                for (var i = 0; i < message.users.length; ++i)
                    $root.game.UserJoin.encode(message.users[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified JoinRoomResp message, length delimited. Does not implicitly {@link game.JoinRoomResp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.JoinRoomResp
         * @static
         * @param {game.IJoinRoomResp} message JoinRoomResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JoinRoomResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a JoinRoomResp message from the specified reader or buffer.
         * @function decode
         * @memberof game.JoinRoomResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.JoinRoomResp} JoinRoomResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JoinRoomResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.JoinRoomResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.res = reader.int32();
                    break;
                case 2:
                    message.nIdRoom = reader.int32();
                    break;
                case 3:
                    message.nSumUser = reader.int32();
                    break;
                case 4:
                    message.uIdHost = reader.string();
                    break;
                case 5:
                    if (!(message.users && message.users.length))
                        message.users = [];
                    message.users.push($root.game.UserJoin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a JoinRoomResp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.JoinRoomResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.JoinRoomResp} JoinRoomResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JoinRoomResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a JoinRoomResp message.
         * @function verify
         * @memberof game.JoinRoomResp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        JoinRoomResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.res != null && message.hasOwnProperty("res"))
                if (!$util.isInteger(message.res))
                    return "res: integer expected";
            if (message.nIdRoom != null && message.hasOwnProperty("nIdRoom"))
                if (!$util.isInteger(message.nIdRoom))
                    return "nIdRoom: integer expected";
            if (message.nSumUser != null && message.hasOwnProperty("nSumUser"))
                if (!$util.isInteger(message.nSumUser))
                    return "nSumUser: integer expected";
            if (message.uIdHost != null && message.hasOwnProperty("uIdHost"))
                if (!$util.isString(message.uIdHost))
                    return "uIdHost: string expected";
            if (message.users != null && message.hasOwnProperty("users")) {
                if (!Array.isArray(message.users))
                    return "users: array expected";
                for (var i = 0; i < message.users.length; ++i) {
                    var error = $root.game.UserJoin.verify(message.users[i]);
                    if (error)
                        return "users." + error;
                }
            }
            return null;
        };

        /**
         * Creates a JoinRoomResp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.JoinRoomResp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.JoinRoomResp} JoinRoomResp
         */
        JoinRoomResp.fromObject = function fromObject(object) {
            if (object instanceof $root.game.JoinRoomResp)
                return object;
            var message = new $root.game.JoinRoomResp();
            if (object.res != null)
                message.res = object.res | 0;
            if (object.nIdRoom != null)
                message.nIdRoom = object.nIdRoom | 0;
            if (object.nSumUser != null)
                message.nSumUser = object.nSumUser | 0;
            if (object.uIdHost != null)
                message.uIdHost = String(object.uIdHost);
            if (object.users) {
                if (!Array.isArray(object.users))
                    throw TypeError(".game.JoinRoomResp.users: array expected");
                message.users = [];
                for (var i = 0; i < object.users.length; ++i) {
                    if (typeof object.users[i] !== "object")
                        throw TypeError(".game.JoinRoomResp.users: object expected");
                    message.users[i] = $root.game.UserJoin.fromObject(object.users[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a JoinRoomResp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.JoinRoomResp
         * @static
         * @param {game.JoinRoomResp} message JoinRoomResp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        JoinRoomResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.users = [];
            if (options.defaults) {
                object.res = 0;
                object.nIdRoom = 0;
                object.nSumUser = 0;
                object.uIdHost = "";
            }
            if (message.res != null && message.hasOwnProperty("res"))
                object.res = message.res;
            if (message.nIdRoom != null && message.hasOwnProperty("nIdRoom"))
                object.nIdRoom = message.nIdRoom;
            if (message.nSumUser != null && message.hasOwnProperty("nSumUser"))
                object.nSumUser = message.nSumUser;
            if (message.uIdHost != null && message.hasOwnProperty("uIdHost"))
                object.uIdHost = message.uIdHost;
            if (message.users && message.users.length) {
                object.users = [];
                for (var j = 0; j < message.users.length; ++j)
                    object.users[j] = $root.game.UserJoin.toObject(message.users[j], options);
            }
            return object;
        };

        /**
         * Converts this JoinRoomResp to JSON.
         * @function toJSON
         * @memberof game.JoinRoomResp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        JoinRoomResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return JoinRoomResp;
    })();

    game.UserJoin = (function() {

        /**
         * Properties of a UserJoin.
         * @memberof game
         * @interface IUserJoin
         * @property {string|null} [uId] UserJoin uId
         * @property {string|null} [nick] UserJoin nick
         * @property {string|null} [photo] UserJoin photo
         * @property {number|null} [nPos] UserJoin nPos
         * @property {number|null} [skin] UserJoin skin
         */

        /**
         * Constructs a new UserJoin.
         * @memberof game
         * @classdesc Represents a UserJoin.
         * @implements IUserJoin
         * @constructor
         * @param {game.IUserJoin=} [properties] Properties to set
         */
        function UserJoin(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UserJoin uId.
         * @member {string} uId
         * @memberof game.UserJoin
         * @instance
         */
        UserJoin.prototype.uId = "";

        /**
         * UserJoin nick.
         * @member {string} nick
         * @memberof game.UserJoin
         * @instance
         */
        UserJoin.prototype.nick = "";

        /**
         * UserJoin photo.
         * @member {string} photo
         * @memberof game.UserJoin
         * @instance
         */
        UserJoin.prototype.photo = "";

        /**
         * UserJoin nPos.
         * @member {number} nPos
         * @memberof game.UserJoin
         * @instance
         */
        UserJoin.prototype.nPos = 0;

        /**
         * UserJoin skin.
         * @member {number} skin
         * @memberof game.UserJoin
         * @instance
         */
        UserJoin.prototype.skin = 0;

        /**
         * Creates a new UserJoin instance using the specified properties.
         * @function create
         * @memberof game.UserJoin
         * @static
         * @param {game.IUserJoin=} [properties] Properties to set
         * @returns {game.UserJoin} UserJoin instance
         */
        UserJoin.create = function create(properties) {
            return new UserJoin(properties);
        };

        /**
         * Encodes the specified UserJoin message. Does not implicitly {@link game.UserJoin.verify|verify} messages.
         * @function encode
         * @memberof game.UserJoin
         * @static
         * @param {game.IUserJoin} message UserJoin message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserJoin.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.uId != null && message.hasOwnProperty("uId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.uId);
            if (message.nick != null && message.hasOwnProperty("nick"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.nick);
            if (message.photo != null && message.hasOwnProperty("photo"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.photo);
            if (message.nPos != null && message.hasOwnProperty("nPos"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.nPos);
            if (message.skin != null && message.hasOwnProperty("skin"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.skin);
            return writer;
        };

        /**
         * Encodes the specified UserJoin message, length delimited. Does not implicitly {@link game.UserJoin.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.UserJoin
         * @static
         * @param {game.IUserJoin} message UserJoin message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserJoin.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserJoin message from the specified reader or buffer.
         * @function decode
         * @memberof game.UserJoin
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.UserJoin} UserJoin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserJoin.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.UserJoin();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.uId = reader.string();
                    break;
                case 2:
                    message.nick = reader.string();
                    break;
                case 3:
                    message.photo = reader.string();
                    break;
                case 4:
                    message.nPos = reader.int32();
                    break;
                case 5:
                    message.skin = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a UserJoin message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.UserJoin
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.UserJoin} UserJoin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserJoin.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UserJoin message.
         * @function verify
         * @memberof game.UserJoin
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserJoin.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.uId != null && message.hasOwnProperty("uId"))
                if (!$util.isString(message.uId))
                    return "uId: string expected";
            if (message.nick != null && message.hasOwnProperty("nick"))
                if (!$util.isString(message.nick))
                    return "nick: string expected";
            if (message.photo != null && message.hasOwnProperty("photo"))
                if (!$util.isString(message.photo))
                    return "photo: string expected";
            if (message.nPos != null && message.hasOwnProperty("nPos"))
                if (!$util.isInteger(message.nPos))
                    return "nPos: integer expected";
            if (message.skin != null && message.hasOwnProperty("skin"))
                if (!$util.isInteger(message.skin))
                    return "skin: integer expected";
            return null;
        };

        /**
         * Creates a UserJoin message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.UserJoin
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.UserJoin} UserJoin
         */
        UserJoin.fromObject = function fromObject(object) {
            if (object instanceof $root.game.UserJoin)
                return object;
            var message = new $root.game.UserJoin();
            if (object.uId != null)
                message.uId = String(object.uId);
            if (object.nick != null)
                message.nick = String(object.nick);
            if (object.photo != null)
                message.photo = String(object.photo);
            if (object.nPos != null)
                message.nPos = object.nPos | 0;
            if (object.skin != null)
                message.skin = object.skin | 0;
            return message;
        };

        /**
         * Creates a plain object from a UserJoin message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.UserJoin
         * @static
         * @param {game.UserJoin} message UserJoin
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserJoin.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.uId = "";
                object.nick = "";
                object.photo = "";
                object.nPos = 0;
                object.skin = 0;
            }
            if (message.uId != null && message.hasOwnProperty("uId"))
                object.uId = message.uId;
            if (message.nick != null && message.hasOwnProperty("nick"))
                object.nick = message.nick;
            if (message.photo != null && message.hasOwnProperty("photo"))
                object.photo = message.photo;
            if (message.nPos != null && message.hasOwnProperty("nPos"))
                object.nPos = message.nPos;
            if (message.skin != null && message.hasOwnProperty("skin"))
                object.skin = message.skin;
            return object;
        };

        /**
         * Converts this UserJoin to JSON.
         * @function toJSON
         * @memberof game.UserJoin
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserJoin.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserJoin;
    })();

    game.StartGameReq = (function() {

        /**
         * Properties of a StartGameReq.
         * @memberof game
         * @interface IStartGameReq
         * @property {string|null} [n] StartGameReq n
         */

        /**
         * Constructs a new StartGameReq.
         * @memberof game
         * @classdesc Represents a StartGameReq.
         * @implements IStartGameReq
         * @constructor
         * @param {game.IStartGameReq=} [properties] Properties to set
         */
        function StartGameReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * StartGameReq n.
         * @member {string} n
         * @memberof game.StartGameReq
         * @instance
         */
        StartGameReq.prototype.n = "";

        /**
         * Creates a new StartGameReq instance using the specified properties.
         * @function create
         * @memberof game.StartGameReq
         * @static
         * @param {game.IStartGameReq=} [properties] Properties to set
         * @returns {game.StartGameReq} StartGameReq instance
         */
        StartGameReq.create = function create(properties) {
            return new StartGameReq(properties);
        };

        /**
         * Encodes the specified StartGameReq message. Does not implicitly {@link game.StartGameReq.verify|verify} messages.
         * @function encode
         * @memberof game.StartGameReq
         * @static
         * @param {game.IStartGameReq} message StartGameReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StartGameReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.n != null && message.hasOwnProperty("n"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.n);
            return writer;
        };

        /**
         * Encodes the specified StartGameReq message, length delimited. Does not implicitly {@link game.StartGameReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.StartGameReq
         * @static
         * @param {game.IStartGameReq} message StartGameReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StartGameReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a StartGameReq message from the specified reader or buffer.
         * @function decode
         * @memberof game.StartGameReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.StartGameReq} StartGameReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StartGameReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.StartGameReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.n = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a StartGameReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.StartGameReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.StartGameReq} StartGameReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StartGameReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a StartGameReq message.
         * @function verify
         * @memberof game.StartGameReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        StartGameReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.n != null && message.hasOwnProperty("n"))
                if (!$util.isString(message.n))
                    return "n: string expected";
            return null;
        };

        /**
         * Creates a StartGameReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.StartGameReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.StartGameReq} StartGameReq
         */
        StartGameReq.fromObject = function fromObject(object) {
            if (object instanceof $root.game.StartGameReq)
                return object;
            var message = new $root.game.StartGameReq();
            if (object.n != null)
                message.n = String(object.n);
            return message;
        };

        /**
         * Creates a plain object from a StartGameReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.StartGameReq
         * @static
         * @param {game.StartGameReq} message StartGameReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        StartGameReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.n = "";
            if (message.n != null && message.hasOwnProperty("n"))
                object.n = message.n;
            return object;
        };

        /**
         * Converts this StartGameReq to JSON.
         * @function toJSON
         * @memberof game.StartGameReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        StartGameReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return StartGameReq;
    })();

    game.StartGameResp = (function() {

        /**
         * Properties of a StartGameResp.
         * @memberof game
         * @interface IStartGameResp
         * @property {number|null} [res] StartGameResp res
         */

        /**
         * Constructs a new StartGameResp.
         * @memberof game
         * @classdesc Represents a StartGameResp.
         * @implements IStartGameResp
         * @constructor
         * @param {game.IStartGameResp=} [properties] Properties to set
         */
        function StartGameResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * StartGameResp res.
         * @member {number} res
         * @memberof game.StartGameResp
         * @instance
         */
        StartGameResp.prototype.res = 0;

        /**
         * Creates a new StartGameResp instance using the specified properties.
         * @function create
         * @memberof game.StartGameResp
         * @static
         * @param {game.IStartGameResp=} [properties] Properties to set
         * @returns {game.StartGameResp} StartGameResp instance
         */
        StartGameResp.create = function create(properties) {
            return new StartGameResp(properties);
        };

        /**
         * Encodes the specified StartGameResp message. Does not implicitly {@link game.StartGameResp.verify|verify} messages.
         * @function encode
         * @memberof game.StartGameResp
         * @static
         * @param {game.IStartGameResp} message StartGameResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StartGameResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.res != null && message.hasOwnProperty("res"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.res);
            return writer;
        };

        /**
         * Encodes the specified StartGameResp message, length delimited. Does not implicitly {@link game.StartGameResp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.StartGameResp
         * @static
         * @param {game.IStartGameResp} message StartGameResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StartGameResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a StartGameResp message from the specified reader or buffer.
         * @function decode
         * @memberof game.StartGameResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.StartGameResp} StartGameResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StartGameResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.StartGameResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.res = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a StartGameResp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.StartGameResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.StartGameResp} StartGameResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StartGameResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a StartGameResp message.
         * @function verify
         * @memberof game.StartGameResp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        StartGameResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.res != null && message.hasOwnProperty("res"))
                if (!$util.isInteger(message.res))
                    return "res: integer expected";
            return null;
        };

        /**
         * Creates a StartGameResp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.StartGameResp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.StartGameResp} StartGameResp
         */
        StartGameResp.fromObject = function fromObject(object) {
            if (object instanceof $root.game.StartGameResp)
                return object;
            var message = new $root.game.StartGameResp();
            if (object.res != null)
                message.res = object.res | 0;
            return message;
        };

        /**
         * Creates a plain object from a StartGameResp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.StartGameResp
         * @static
         * @param {game.StartGameResp} message StartGameResp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        StartGameResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.res = 0;
            if (message.res != null && message.hasOwnProperty("res"))
                object.res = message.res;
            return object;
        };

        /**
         * Converts this StartGameResp to JSON.
         * @function toJSON
         * @memberof game.StartGameResp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        StartGameResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return StartGameResp;
    })();

    game.OperateLuckyNextResp = (function() {

        /**
         * Properties of an OperateLuckyNextResp.
         * @memberof game
         * @interface IOperateLuckyNextResp
         * @property {number|null} [nPos] OperateLuckyNextResp nPos
         */

        /**
         * Constructs a new OperateLuckyNextResp.
         * @memberof game
         * @classdesc Represents an OperateLuckyNextResp.
         * @implements IOperateLuckyNextResp
         * @constructor
         * @param {game.IOperateLuckyNextResp=} [properties] Properties to set
         */
        function OperateLuckyNextResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * OperateLuckyNextResp nPos.
         * @member {number} nPos
         * @memberof game.OperateLuckyNextResp
         * @instance
         */
        OperateLuckyNextResp.prototype.nPos = 0;

        /**
         * Creates a new OperateLuckyNextResp instance using the specified properties.
         * @function create
         * @memberof game.OperateLuckyNextResp
         * @static
         * @param {game.IOperateLuckyNextResp=} [properties] Properties to set
         * @returns {game.OperateLuckyNextResp} OperateLuckyNextResp instance
         */
        OperateLuckyNextResp.create = function create(properties) {
            return new OperateLuckyNextResp(properties);
        };

        /**
         * Encodes the specified OperateLuckyNextResp message. Does not implicitly {@link game.OperateLuckyNextResp.verify|verify} messages.
         * @function encode
         * @memberof game.OperateLuckyNextResp
         * @static
         * @param {game.IOperateLuckyNextResp} message OperateLuckyNextResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        OperateLuckyNextResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.nPos != null && message.hasOwnProperty("nPos"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.nPos);
            return writer;
        };

        /**
         * Encodes the specified OperateLuckyNextResp message, length delimited. Does not implicitly {@link game.OperateLuckyNextResp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.OperateLuckyNextResp
         * @static
         * @param {game.IOperateLuckyNextResp} message OperateLuckyNextResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        OperateLuckyNextResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an OperateLuckyNextResp message from the specified reader or buffer.
         * @function decode
         * @memberof game.OperateLuckyNextResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.OperateLuckyNextResp} OperateLuckyNextResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        OperateLuckyNextResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.OperateLuckyNextResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.nPos = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an OperateLuckyNextResp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.OperateLuckyNextResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.OperateLuckyNextResp} OperateLuckyNextResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        OperateLuckyNextResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an OperateLuckyNextResp message.
         * @function verify
         * @memberof game.OperateLuckyNextResp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        OperateLuckyNextResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.nPos != null && message.hasOwnProperty("nPos"))
                if (!$util.isInteger(message.nPos))
                    return "nPos: integer expected";
            return null;
        };

        /**
         * Creates an OperateLuckyNextResp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.OperateLuckyNextResp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.OperateLuckyNextResp} OperateLuckyNextResp
         */
        OperateLuckyNextResp.fromObject = function fromObject(object) {
            if (object instanceof $root.game.OperateLuckyNextResp)
                return object;
            var message = new $root.game.OperateLuckyNextResp();
            if (object.nPos != null)
                message.nPos = object.nPos | 0;
            return message;
        };

        /**
         * Creates a plain object from an OperateLuckyNextResp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.OperateLuckyNextResp
         * @static
         * @param {game.OperateLuckyNextResp} message OperateLuckyNextResp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        OperateLuckyNextResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.nPos = 0;
            if (message.nPos != null && message.hasOwnProperty("nPos"))
                object.nPos = message.nPos;
            return object;
        };

        /**
         * Converts this OperateLuckyNextResp to JSON.
         * @function toJSON
         * @memberof game.OperateLuckyNextResp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        OperateLuckyNextResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return OperateLuckyNextResp;
    })();

    game.OperateLuckyEndReq = (function() {

        /**
         * Properties of an OperateLuckyEndReq.
         * @memberof game
         * @interface IOperateLuckyEndReq
         * @property {number|null} [nPos] OperateLuckyEndReq nPos
         */

        /**
         * Constructs a new OperateLuckyEndReq.
         * @memberof game
         * @classdesc Represents an OperateLuckyEndReq.
         * @implements IOperateLuckyEndReq
         * @constructor
         * @param {game.IOperateLuckyEndReq=} [properties] Properties to set
         */
        function OperateLuckyEndReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * OperateLuckyEndReq nPos.
         * @member {number} nPos
         * @memberof game.OperateLuckyEndReq
         * @instance
         */
        OperateLuckyEndReq.prototype.nPos = 0;

        /**
         * Creates a new OperateLuckyEndReq instance using the specified properties.
         * @function create
         * @memberof game.OperateLuckyEndReq
         * @static
         * @param {game.IOperateLuckyEndReq=} [properties] Properties to set
         * @returns {game.OperateLuckyEndReq} OperateLuckyEndReq instance
         */
        OperateLuckyEndReq.create = function create(properties) {
            return new OperateLuckyEndReq(properties);
        };

        /**
         * Encodes the specified OperateLuckyEndReq message. Does not implicitly {@link game.OperateLuckyEndReq.verify|verify} messages.
         * @function encode
         * @memberof game.OperateLuckyEndReq
         * @static
         * @param {game.IOperateLuckyEndReq} message OperateLuckyEndReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        OperateLuckyEndReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.nPos != null && message.hasOwnProperty("nPos"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.nPos);
            return writer;
        };

        /**
         * Encodes the specified OperateLuckyEndReq message, length delimited. Does not implicitly {@link game.OperateLuckyEndReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.OperateLuckyEndReq
         * @static
         * @param {game.IOperateLuckyEndReq} message OperateLuckyEndReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        OperateLuckyEndReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an OperateLuckyEndReq message from the specified reader or buffer.
         * @function decode
         * @memberof game.OperateLuckyEndReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.OperateLuckyEndReq} OperateLuckyEndReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        OperateLuckyEndReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.OperateLuckyEndReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.nPos = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an OperateLuckyEndReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.OperateLuckyEndReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.OperateLuckyEndReq} OperateLuckyEndReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        OperateLuckyEndReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an OperateLuckyEndReq message.
         * @function verify
         * @memberof game.OperateLuckyEndReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        OperateLuckyEndReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.nPos != null && message.hasOwnProperty("nPos"))
                if (!$util.isInteger(message.nPos))
                    return "nPos: integer expected";
            return null;
        };

        /**
         * Creates an OperateLuckyEndReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.OperateLuckyEndReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.OperateLuckyEndReq} OperateLuckyEndReq
         */
        OperateLuckyEndReq.fromObject = function fromObject(object) {
            if (object instanceof $root.game.OperateLuckyEndReq)
                return object;
            var message = new $root.game.OperateLuckyEndReq();
            if (object.nPos != null)
                message.nPos = object.nPos | 0;
            return message;
        };

        /**
         * Creates a plain object from an OperateLuckyEndReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.OperateLuckyEndReq
         * @static
         * @param {game.OperateLuckyEndReq} message OperateLuckyEndReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        OperateLuckyEndReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.nPos = 0;
            if (message.nPos != null && message.hasOwnProperty("nPos"))
                object.nPos = message.nPos;
            return object;
        };

        /**
         * Converts this OperateLuckyEndReq to JSON.
         * @function toJSON
         * @memberof game.OperateLuckyEndReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        OperateLuckyEndReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return OperateLuckyEndReq;
    })();

    game.OperateLuckyEndResp = (function() {

        /**
         * Properties of an OperateLuckyEndResp.
         * @memberof game
         * @interface IOperateLuckyEndResp
         * @property {number|null} [res] OperateLuckyEndResp res
         * @property {number|null} [nPos] OperateLuckyEndResp nPos
         * @property {number|null} [n] OperateLuckyEndResp n
         */

        /**
         * Constructs a new OperateLuckyEndResp.
         * @memberof game
         * @classdesc Represents an OperateLuckyEndResp.
         * @implements IOperateLuckyEndResp
         * @constructor
         * @param {game.IOperateLuckyEndResp=} [properties] Properties to set
         */
        function OperateLuckyEndResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * OperateLuckyEndResp res.
         * @member {number} res
         * @memberof game.OperateLuckyEndResp
         * @instance
         */
        OperateLuckyEndResp.prototype.res = 0;

        /**
         * OperateLuckyEndResp nPos.
         * @member {number} nPos
         * @memberof game.OperateLuckyEndResp
         * @instance
         */
        OperateLuckyEndResp.prototype.nPos = 0;

        /**
         * OperateLuckyEndResp n.
         * @member {number} n
         * @memberof game.OperateLuckyEndResp
         * @instance
         */
        OperateLuckyEndResp.prototype.n = 0;

        /**
         * Creates a new OperateLuckyEndResp instance using the specified properties.
         * @function create
         * @memberof game.OperateLuckyEndResp
         * @static
         * @param {game.IOperateLuckyEndResp=} [properties] Properties to set
         * @returns {game.OperateLuckyEndResp} OperateLuckyEndResp instance
         */
        OperateLuckyEndResp.create = function create(properties) {
            return new OperateLuckyEndResp(properties);
        };

        /**
         * Encodes the specified OperateLuckyEndResp message. Does not implicitly {@link game.OperateLuckyEndResp.verify|verify} messages.
         * @function encode
         * @memberof game.OperateLuckyEndResp
         * @static
         * @param {game.IOperateLuckyEndResp} message OperateLuckyEndResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        OperateLuckyEndResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.res != null && message.hasOwnProperty("res"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.res);
            if (message.nPos != null && message.hasOwnProperty("nPos"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.nPos);
            if (message.n != null && message.hasOwnProperty("n"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.n);
            return writer;
        };

        /**
         * Encodes the specified OperateLuckyEndResp message, length delimited. Does not implicitly {@link game.OperateLuckyEndResp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.OperateLuckyEndResp
         * @static
         * @param {game.IOperateLuckyEndResp} message OperateLuckyEndResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        OperateLuckyEndResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an OperateLuckyEndResp message from the specified reader or buffer.
         * @function decode
         * @memberof game.OperateLuckyEndResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.OperateLuckyEndResp} OperateLuckyEndResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        OperateLuckyEndResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.OperateLuckyEndResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.res = reader.int32();
                    break;
                case 2:
                    message.nPos = reader.int32();
                    break;
                case 3:
                    message.n = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an OperateLuckyEndResp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.OperateLuckyEndResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.OperateLuckyEndResp} OperateLuckyEndResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        OperateLuckyEndResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an OperateLuckyEndResp message.
         * @function verify
         * @memberof game.OperateLuckyEndResp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        OperateLuckyEndResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.res != null && message.hasOwnProperty("res"))
                if (!$util.isInteger(message.res))
                    return "res: integer expected";
            if (message.nPos != null && message.hasOwnProperty("nPos"))
                if (!$util.isInteger(message.nPos))
                    return "nPos: integer expected";
            if (message.n != null && message.hasOwnProperty("n"))
                if (!$util.isInteger(message.n))
                    return "n: integer expected";
            return null;
        };

        /**
         * Creates an OperateLuckyEndResp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.OperateLuckyEndResp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.OperateLuckyEndResp} OperateLuckyEndResp
         */
        OperateLuckyEndResp.fromObject = function fromObject(object) {
            if (object instanceof $root.game.OperateLuckyEndResp)
                return object;
            var message = new $root.game.OperateLuckyEndResp();
            if (object.res != null)
                message.res = object.res | 0;
            if (object.nPos != null)
                message.nPos = object.nPos | 0;
            if (object.n != null)
                message.n = object.n | 0;
            return message;
        };

        /**
         * Creates a plain object from an OperateLuckyEndResp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.OperateLuckyEndResp
         * @static
         * @param {game.OperateLuckyEndResp} message OperateLuckyEndResp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        OperateLuckyEndResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.res = 0;
                object.nPos = 0;
                object.n = 0;
            }
            if (message.res != null && message.hasOwnProperty("res"))
                object.res = message.res;
            if (message.nPos != null && message.hasOwnProperty("nPos"))
                object.nPos = message.nPos;
            if (message.n != null && message.hasOwnProperty("n"))
                object.n = message.n;
            return object;
        };

        /**
         * Converts this OperateLuckyEndResp to JSON.
         * @function toJSON
         * @memberof game.OperateLuckyEndResp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        OperateLuckyEndResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return OperateLuckyEndResp;
    })();

    game.OperateFlyReq = (function() {

        /**
         * Properties of an OperateFlyReq.
         * @memberof game
         * @interface IOperateFlyReq
         * @property {number|null} [fInd] OperateFlyReq fInd
         */

        /**
         * Constructs a new OperateFlyReq.
         * @memberof game
         * @classdesc Represents an OperateFlyReq.
         * @implements IOperateFlyReq
         * @constructor
         * @param {game.IOperateFlyReq=} [properties] Properties to set
         */
        function OperateFlyReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * OperateFlyReq fInd.
         * @member {number} fInd
         * @memberof game.OperateFlyReq
         * @instance
         */
        OperateFlyReq.prototype.fInd = 0;

        /**
         * Creates a new OperateFlyReq instance using the specified properties.
         * @function create
         * @memberof game.OperateFlyReq
         * @static
         * @param {game.IOperateFlyReq=} [properties] Properties to set
         * @returns {game.OperateFlyReq} OperateFlyReq instance
         */
        OperateFlyReq.create = function create(properties) {
            return new OperateFlyReq(properties);
        };

        /**
         * Encodes the specified OperateFlyReq message. Does not implicitly {@link game.OperateFlyReq.verify|verify} messages.
         * @function encode
         * @memberof game.OperateFlyReq
         * @static
         * @param {game.IOperateFlyReq} message OperateFlyReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        OperateFlyReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.fInd != null && message.hasOwnProperty("fInd"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.fInd);
            return writer;
        };

        /**
         * Encodes the specified OperateFlyReq message, length delimited. Does not implicitly {@link game.OperateFlyReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.OperateFlyReq
         * @static
         * @param {game.IOperateFlyReq} message OperateFlyReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        OperateFlyReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an OperateFlyReq message from the specified reader or buffer.
         * @function decode
         * @memberof game.OperateFlyReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.OperateFlyReq} OperateFlyReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        OperateFlyReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.OperateFlyReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.fInd = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an OperateFlyReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.OperateFlyReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.OperateFlyReq} OperateFlyReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        OperateFlyReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an OperateFlyReq message.
         * @function verify
         * @memberof game.OperateFlyReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        OperateFlyReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.fInd != null && message.hasOwnProperty("fInd"))
                if (!$util.isInteger(message.fInd))
                    return "fInd: integer expected";
            return null;
        };

        /**
         * Creates an OperateFlyReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.OperateFlyReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.OperateFlyReq} OperateFlyReq
         */
        OperateFlyReq.fromObject = function fromObject(object) {
            if (object instanceof $root.game.OperateFlyReq)
                return object;
            var message = new $root.game.OperateFlyReq();
            if (object.fInd != null)
                message.fInd = object.fInd | 0;
            return message;
        };

        /**
         * Creates a plain object from an OperateFlyReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.OperateFlyReq
         * @static
         * @param {game.OperateFlyReq} message OperateFlyReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        OperateFlyReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.fInd = 0;
            if (message.fInd != null && message.hasOwnProperty("fInd"))
                object.fInd = message.fInd;
            return object;
        };

        /**
         * Converts this OperateFlyReq to JSON.
         * @function toJSON
         * @memberof game.OperateFlyReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        OperateFlyReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return OperateFlyReq;
    })();

    game.OperateFlyResp = (function() {

        /**
         * Properties of an OperateFlyResp.
         * @memberof game
         * @interface IOperateFlyResp
         * @property {number|null} [nPos] OperateFlyResp nPos
         * @property {number|null} [fInd] OperateFlyResp fInd
         * @property {number|null} [nStep] OperateFlyResp nStep
         * @property {number|null} [nDesti] OperateFlyResp nDesti
         * @property {number|null} [res] OperateFlyResp res
         */

        /**
         * Constructs a new OperateFlyResp.
         * @memberof game
         * @classdesc Represents an OperateFlyResp.
         * @implements IOperateFlyResp
         * @constructor
         * @param {game.IOperateFlyResp=} [properties] Properties to set
         */
        function OperateFlyResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * OperateFlyResp nPos.
         * @member {number} nPos
         * @memberof game.OperateFlyResp
         * @instance
         */
        OperateFlyResp.prototype.nPos = 0;

        /**
         * OperateFlyResp fInd.
         * @member {number} fInd
         * @memberof game.OperateFlyResp
         * @instance
         */
        OperateFlyResp.prototype.fInd = 0;

        /**
         * OperateFlyResp nStep.
         * @member {number} nStep
         * @memberof game.OperateFlyResp
         * @instance
         */
        OperateFlyResp.prototype.nStep = 0;

        /**
         * OperateFlyResp nDesti.
         * @member {number} nDesti
         * @memberof game.OperateFlyResp
         * @instance
         */
        OperateFlyResp.prototype.nDesti = 0;

        /**
         * OperateFlyResp res.
         * @member {number} res
         * @memberof game.OperateFlyResp
         * @instance
         */
        OperateFlyResp.prototype.res = 0;

        /**
         * Creates a new OperateFlyResp instance using the specified properties.
         * @function create
         * @memberof game.OperateFlyResp
         * @static
         * @param {game.IOperateFlyResp=} [properties] Properties to set
         * @returns {game.OperateFlyResp} OperateFlyResp instance
         */
        OperateFlyResp.create = function create(properties) {
            return new OperateFlyResp(properties);
        };

        /**
         * Encodes the specified OperateFlyResp message. Does not implicitly {@link game.OperateFlyResp.verify|verify} messages.
         * @function encode
         * @memberof game.OperateFlyResp
         * @static
         * @param {game.IOperateFlyResp} message OperateFlyResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        OperateFlyResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.nPos != null && message.hasOwnProperty("nPos"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.nPos);
            if (message.fInd != null && message.hasOwnProperty("fInd"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.fInd);
            if (message.nStep != null && message.hasOwnProperty("nStep"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.nStep);
            if (message.nDesti != null && message.hasOwnProperty("nDesti"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.nDesti);
            if (message.res != null && message.hasOwnProperty("res"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.res);
            return writer;
        };

        /**
         * Encodes the specified OperateFlyResp message, length delimited. Does not implicitly {@link game.OperateFlyResp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.OperateFlyResp
         * @static
         * @param {game.IOperateFlyResp} message OperateFlyResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        OperateFlyResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an OperateFlyResp message from the specified reader or buffer.
         * @function decode
         * @memberof game.OperateFlyResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.OperateFlyResp} OperateFlyResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        OperateFlyResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.OperateFlyResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.nPos = reader.int32();
                    break;
                case 2:
                    message.fInd = reader.int32();
                    break;
                case 3:
                    message.nStep = reader.int32();
                    break;
                case 4:
                    message.nDesti = reader.int32();
                    break;
                case 5:
                    message.res = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an OperateFlyResp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.OperateFlyResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.OperateFlyResp} OperateFlyResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        OperateFlyResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an OperateFlyResp message.
         * @function verify
         * @memberof game.OperateFlyResp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        OperateFlyResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.nPos != null && message.hasOwnProperty("nPos"))
                if (!$util.isInteger(message.nPos))
                    return "nPos: integer expected";
            if (message.fInd != null && message.hasOwnProperty("fInd"))
                if (!$util.isInteger(message.fInd))
                    return "fInd: integer expected";
            if (message.nStep != null && message.hasOwnProperty("nStep"))
                if (!$util.isInteger(message.nStep))
                    return "nStep: integer expected";
            if (message.nDesti != null && message.hasOwnProperty("nDesti"))
                if (!$util.isInteger(message.nDesti))
                    return "nDesti: integer expected";
            if (message.res != null && message.hasOwnProperty("res"))
                if (!$util.isInteger(message.res))
                    return "res: integer expected";
            return null;
        };

        /**
         * Creates an OperateFlyResp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.OperateFlyResp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.OperateFlyResp} OperateFlyResp
         */
        OperateFlyResp.fromObject = function fromObject(object) {
            if (object instanceof $root.game.OperateFlyResp)
                return object;
            var message = new $root.game.OperateFlyResp();
            if (object.nPos != null)
                message.nPos = object.nPos | 0;
            if (object.fInd != null)
                message.fInd = object.fInd | 0;
            if (object.nStep != null)
                message.nStep = object.nStep | 0;
            if (object.nDesti != null)
                message.nDesti = object.nDesti | 0;
            if (object.res != null)
                message.res = object.res | 0;
            return message;
        };

        /**
         * Creates a plain object from an OperateFlyResp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.OperateFlyResp
         * @static
         * @param {game.OperateFlyResp} message OperateFlyResp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        OperateFlyResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.nPos = 0;
                object.fInd = 0;
                object.nStep = 0;
                object.nDesti = 0;
                object.res = 0;
            }
            if (message.nPos != null && message.hasOwnProperty("nPos"))
                object.nPos = message.nPos;
            if (message.fInd != null && message.hasOwnProperty("fInd"))
                object.fInd = message.fInd;
            if (message.nStep != null && message.hasOwnProperty("nStep"))
                object.nStep = message.nStep;
            if (message.nDesti != null && message.hasOwnProperty("nDesti"))
                object.nDesti = message.nDesti;
            if (message.res != null && message.hasOwnProperty("res"))
                object.res = message.res;
            return object;
        };

        /**
         * Converts this OperateFlyResp to JSON.
         * @function toJSON
         * @memberof game.OperateFlyResp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        OperateFlyResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return OperateFlyResp;
    })();

    game.BroadcastRoomInfo = (function() {

        /**
         * Properties of a BroadcastRoomInfo.
         * @memberof game
         * @interface IBroadcastRoomInfo
         * @property {number|null} [operate] BroadcastRoomInfo operate
         * @property {string|null} [uId] BroadcastRoomInfo uId
         * @property {string|null} [nick] BroadcastRoomInfo nick
         * @property {string|null} [photo] BroadcastRoomInfo photo
         * @property {number|null} [nPos] BroadcastRoomInfo nPos
         * @property {string|null} [skin] BroadcastRoomInfo skin
         */

        /**
         * Constructs a new BroadcastRoomInfo.
         * @memberof game
         * @classdesc Represents a BroadcastRoomInfo.
         * @implements IBroadcastRoomInfo
         * @constructor
         * @param {game.IBroadcastRoomInfo=} [properties] Properties to set
         */
        function BroadcastRoomInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BroadcastRoomInfo operate.
         * @member {number} operate
         * @memberof game.BroadcastRoomInfo
         * @instance
         */
        BroadcastRoomInfo.prototype.operate = 0;

        /**
         * BroadcastRoomInfo uId.
         * @member {string} uId
         * @memberof game.BroadcastRoomInfo
         * @instance
         */
        BroadcastRoomInfo.prototype.uId = "";

        /**
         * BroadcastRoomInfo nick.
         * @member {string} nick
         * @memberof game.BroadcastRoomInfo
         * @instance
         */
        BroadcastRoomInfo.prototype.nick = "";

        /**
         * BroadcastRoomInfo photo.
         * @member {string} photo
         * @memberof game.BroadcastRoomInfo
         * @instance
         */
        BroadcastRoomInfo.prototype.photo = "";

        /**
         * BroadcastRoomInfo nPos.
         * @member {number} nPos
         * @memberof game.BroadcastRoomInfo
         * @instance
         */
        BroadcastRoomInfo.prototype.nPos = 0;

        /**
         * BroadcastRoomInfo skin.
         * @member {string} skin
         * @memberof game.BroadcastRoomInfo
         * @instance
         */
        BroadcastRoomInfo.prototype.skin = "";

        /**
         * Creates a new BroadcastRoomInfo instance using the specified properties.
         * @function create
         * @memberof game.BroadcastRoomInfo
         * @static
         * @param {game.IBroadcastRoomInfo=} [properties] Properties to set
         * @returns {game.BroadcastRoomInfo} BroadcastRoomInfo instance
         */
        BroadcastRoomInfo.create = function create(properties) {
            return new BroadcastRoomInfo(properties);
        };

        /**
         * Encodes the specified BroadcastRoomInfo message. Does not implicitly {@link game.BroadcastRoomInfo.verify|verify} messages.
         * @function encode
         * @memberof game.BroadcastRoomInfo
         * @static
         * @param {game.IBroadcastRoomInfo} message BroadcastRoomInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BroadcastRoomInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.operate != null && message.hasOwnProperty("operate"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.operate);
            if (message.uId != null && message.hasOwnProperty("uId"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.uId);
            if (message.nick != null && message.hasOwnProperty("nick"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.nick);
            if (message.photo != null && message.hasOwnProperty("photo"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.photo);
            if (message.nPos != null && message.hasOwnProperty("nPos"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.nPos);
            if (message.skin != null && message.hasOwnProperty("skin"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.skin);
            return writer;
        };

        /**
         * Encodes the specified BroadcastRoomInfo message, length delimited. Does not implicitly {@link game.BroadcastRoomInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.BroadcastRoomInfo
         * @static
         * @param {game.IBroadcastRoomInfo} message BroadcastRoomInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BroadcastRoomInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BroadcastRoomInfo message from the specified reader or buffer.
         * @function decode
         * @memberof game.BroadcastRoomInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.BroadcastRoomInfo} BroadcastRoomInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BroadcastRoomInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.BroadcastRoomInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.operate = reader.int32();
                    break;
                case 2:
                    message.uId = reader.string();
                    break;
                case 3:
                    message.nick = reader.string();
                    break;
                case 4:
                    message.photo = reader.string();
                    break;
                case 5:
                    message.nPos = reader.int32();
                    break;
                case 6:
                    message.skin = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a BroadcastRoomInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.BroadcastRoomInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.BroadcastRoomInfo} BroadcastRoomInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BroadcastRoomInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BroadcastRoomInfo message.
         * @function verify
         * @memberof game.BroadcastRoomInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BroadcastRoomInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.operate != null && message.hasOwnProperty("operate"))
                if (!$util.isInteger(message.operate))
                    return "operate: integer expected";
            if (message.uId != null && message.hasOwnProperty("uId"))
                if (!$util.isString(message.uId))
                    return "uId: string expected";
            if (message.nick != null && message.hasOwnProperty("nick"))
                if (!$util.isString(message.nick))
                    return "nick: string expected";
            if (message.photo != null && message.hasOwnProperty("photo"))
                if (!$util.isString(message.photo))
                    return "photo: string expected";
            if (message.nPos != null && message.hasOwnProperty("nPos"))
                if (!$util.isInteger(message.nPos))
                    return "nPos: integer expected";
            if (message.skin != null && message.hasOwnProperty("skin"))
                if (!$util.isString(message.skin))
                    return "skin: string expected";
            return null;
        };

        /**
         * Creates a BroadcastRoomInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.BroadcastRoomInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.BroadcastRoomInfo} BroadcastRoomInfo
         */
        BroadcastRoomInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.game.BroadcastRoomInfo)
                return object;
            var message = new $root.game.BroadcastRoomInfo();
            if (object.operate != null)
                message.operate = object.operate | 0;
            if (object.uId != null)
                message.uId = String(object.uId);
            if (object.nick != null)
                message.nick = String(object.nick);
            if (object.photo != null)
                message.photo = String(object.photo);
            if (object.nPos != null)
                message.nPos = object.nPos | 0;
            if (object.skin != null)
                message.skin = String(object.skin);
            return message;
        };

        /**
         * Creates a plain object from a BroadcastRoomInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.BroadcastRoomInfo
         * @static
         * @param {game.BroadcastRoomInfo} message BroadcastRoomInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BroadcastRoomInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.operate = 0;
                object.uId = "";
                object.nick = "";
                object.photo = "";
                object.nPos = 0;
                object.skin = "";
            }
            if (message.operate != null && message.hasOwnProperty("operate"))
                object.operate = message.operate;
            if (message.uId != null && message.hasOwnProperty("uId"))
                object.uId = message.uId;
            if (message.nick != null && message.hasOwnProperty("nick"))
                object.nick = message.nick;
            if (message.photo != null && message.hasOwnProperty("photo"))
                object.photo = message.photo;
            if (message.nPos != null && message.hasOwnProperty("nPos"))
                object.nPos = message.nPos;
            if (message.skin != null && message.hasOwnProperty("skin"))
                object.skin = message.skin;
            return object;
        };

        /**
         * Converts this BroadcastRoomInfo to JSON.
         * @function toJSON
         * @memberof game.BroadcastRoomInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BroadcastRoomInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BroadcastRoomInfo;
    })();

    game.BroadcastOperateInfo = (function() {

        /**
         * Properties of a BroadcastOperateInfo.
         * @memberof game
         * @interface IBroadcastOperateInfo
         * @property {number|null} [operate] BroadcastOperateInfo operate
         * @property {string|null} [uId] BroadcastOperateInfo uId
         * @property {string|null} [nick] BroadcastOperateInfo nick
         * @property {string|null} [photo] BroadcastOperateInfo photo
         * @property {number|null} [nPos] BroadcastOperateInfo nPos
         */

        /**
         * Constructs a new BroadcastOperateInfo.
         * @memberof game
         * @classdesc Represents a BroadcastOperateInfo.
         * @implements IBroadcastOperateInfo
         * @constructor
         * @param {game.IBroadcastOperateInfo=} [properties] Properties to set
         */
        function BroadcastOperateInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BroadcastOperateInfo operate.
         * @member {number} operate
         * @memberof game.BroadcastOperateInfo
         * @instance
         */
        BroadcastOperateInfo.prototype.operate = 0;

        /**
         * BroadcastOperateInfo uId.
         * @member {string} uId
         * @memberof game.BroadcastOperateInfo
         * @instance
         */
        BroadcastOperateInfo.prototype.uId = "";

        /**
         * BroadcastOperateInfo nick.
         * @member {string} nick
         * @memberof game.BroadcastOperateInfo
         * @instance
         */
        BroadcastOperateInfo.prototype.nick = "";

        /**
         * BroadcastOperateInfo photo.
         * @member {string} photo
         * @memberof game.BroadcastOperateInfo
         * @instance
         */
        BroadcastOperateInfo.prototype.photo = "";

        /**
         * BroadcastOperateInfo nPos.
         * @member {number} nPos
         * @memberof game.BroadcastOperateInfo
         * @instance
         */
        BroadcastOperateInfo.prototype.nPos = 0;

        /**
         * Creates a new BroadcastOperateInfo instance using the specified properties.
         * @function create
         * @memberof game.BroadcastOperateInfo
         * @static
         * @param {game.IBroadcastOperateInfo=} [properties] Properties to set
         * @returns {game.BroadcastOperateInfo} BroadcastOperateInfo instance
         */
        BroadcastOperateInfo.create = function create(properties) {
            return new BroadcastOperateInfo(properties);
        };

        /**
         * Encodes the specified BroadcastOperateInfo message. Does not implicitly {@link game.BroadcastOperateInfo.verify|verify} messages.
         * @function encode
         * @memberof game.BroadcastOperateInfo
         * @static
         * @param {game.IBroadcastOperateInfo} message BroadcastOperateInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BroadcastOperateInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.operate != null && message.hasOwnProperty("operate"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.operate);
            if (message.uId != null && message.hasOwnProperty("uId"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.uId);
            if (message.nick != null && message.hasOwnProperty("nick"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.nick);
            if (message.photo != null && message.hasOwnProperty("photo"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.photo);
            if (message.nPos != null && message.hasOwnProperty("nPos"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.nPos);
            return writer;
        };

        /**
         * Encodes the specified BroadcastOperateInfo message, length delimited. Does not implicitly {@link game.BroadcastOperateInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.BroadcastOperateInfo
         * @static
         * @param {game.IBroadcastOperateInfo} message BroadcastOperateInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BroadcastOperateInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BroadcastOperateInfo message from the specified reader or buffer.
         * @function decode
         * @memberof game.BroadcastOperateInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.BroadcastOperateInfo} BroadcastOperateInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BroadcastOperateInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.BroadcastOperateInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.operate = reader.int32();
                    break;
                case 2:
                    message.uId = reader.string();
                    break;
                case 3:
                    message.nick = reader.string();
                    break;
                case 4:
                    message.photo = reader.string();
                    break;
                case 5:
                    message.nPos = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a BroadcastOperateInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.BroadcastOperateInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.BroadcastOperateInfo} BroadcastOperateInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BroadcastOperateInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BroadcastOperateInfo message.
         * @function verify
         * @memberof game.BroadcastOperateInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BroadcastOperateInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.operate != null && message.hasOwnProperty("operate"))
                if (!$util.isInteger(message.operate))
                    return "operate: integer expected";
            if (message.uId != null && message.hasOwnProperty("uId"))
                if (!$util.isString(message.uId))
                    return "uId: string expected";
            if (message.nick != null && message.hasOwnProperty("nick"))
                if (!$util.isString(message.nick))
                    return "nick: string expected";
            if (message.photo != null && message.hasOwnProperty("photo"))
                if (!$util.isString(message.photo))
                    return "photo: string expected";
            if (message.nPos != null && message.hasOwnProperty("nPos"))
                if (!$util.isInteger(message.nPos))
                    return "nPos: integer expected";
            return null;
        };

        /**
         * Creates a BroadcastOperateInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.BroadcastOperateInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.BroadcastOperateInfo} BroadcastOperateInfo
         */
        BroadcastOperateInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.game.BroadcastOperateInfo)
                return object;
            var message = new $root.game.BroadcastOperateInfo();
            if (object.operate != null)
                message.operate = object.operate | 0;
            if (object.uId != null)
                message.uId = String(object.uId);
            if (object.nick != null)
                message.nick = String(object.nick);
            if (object.photo != null)
                message.photo = String(object.photo);
            if (object.nPos != null)
                message.nPos = object.nPos | 0;
            return message;
        };

        /**
         * Creates a plain object from a BroadcastOperateInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.BroadcastOperateInfo
         * @static
         * @param {game.BroadcastOperateInfo} message BroadcastOperateInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BroadcastOperateInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.operate = 0;
                object.uId = "";
                object.nick = "";
                object.photo = "";
                object.nPos = 0;
            }
            if (message.operate != null && message.hasOwnProperty("operate"))
                object.operate = message.operate;
            if (message.uId != null && message.hasOwnProperty("uId"))
                object.uId = message.uId;
            if (message.nick != null && message.hasOwnProperty("nick"))
                object.nick = message.nick;
            if (message.photo != null && message.hasOwnProperty("photo"))
                object.photo = message.photo;
            if (message.nPos != null && message.hasOwnProperty("nPos"))
                object.nPos = message.nPos;
            return object;
        };

        /**
         * Converts this BroadcastOperateInfo to JSON.
         * @function toJSON
         * @memberof game.BroadcastOperateInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BroadcastOperateInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BroadcastOperateInfo;
    })();

    game.example = (function() {

        /**
         * Properties of an example.
         * @memberof game
         * @interface Iexample
         * @property {string|null} [cityId] example cityId
         * @property {game.ILoginResp|null} [info] example info
         * @property {boolean|null} [bo] example bo
         * @property {Array.<string>|null} [buildingId] example buildingId
         * @property {number|null} [soldierType] example soldierType
         */

        /**
         * Constructs a new example.
         * @memberof game
         * @classdesc Represents an example.
         * @implements Iexample
         * @constructor
         * @param {game.Iexample=} [properties] Properties to set
         */
        function example(properties) {
            this.buildingId = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * example cityId.
         * @member {string} cityId
         * @memberof game.example
         * @instance
         */
        example.prototype.cityId = "";

        /**
         * example info.
         * @member {game.ILoginResp|null|undefined} info
         * @memberof game.example
         * @instance
         */
        example.prototype.info = null;

        /**
         * example bo.
         * @member {boolean} bo
         * @memberof game.example
         * @instance
         */
        example.prototype.bo = false;

        /**
         * example buildingId.
         * @member {Array.<string>} buildingId
         * @memberof game.example
         * @instance
         */
        example.prototype.buildingId = $util.emptyArray;

        /**
         * example soldierType.
         * @member {number} soldierType
         * @memberof game.example
         * @instance
         */
        example.prototype.soldierType = 0;

        /**
         * Creates a new example instance using the specified properties.
         * @function create
         * @memberof game.example
         * @static
         * @param {game.Iexample=} [properties] Properties to set
         * @returns {game.example} example instance
         */
        example.create = function create(properties) {
            return new example(properties);
        };

        /**
         * Encodes the specified example message. Does not implicitly {@link game.example.verify|verify} messages.
         * @function encode
         * @memberof game.example
         * @static
         * @param {game.Iexample} message example message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        example.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.cityId != null && message.hasOwnProperty("cityId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.cityId);
            if (message.info != null && message.hasOwnProperty("info"))
                $root.game.LoginResp.encode(message.info, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.bo != null && message.hasOwnProperty("bo"))
                writer.uint32(/* id 3, wireType 0 =*/24).bool(message.bo);
            if (message.buildingId != null && message.buildingId.length)
                for (var i = 0; i < message.buildingId.length; ++i)
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.buildingId[i]);
            if (message.soldierType != null && message.hasOwnProperty("soldierType"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.soldierType);
            return writer;
        };

        /**
         * Encodes the specified example message, length delimited. Does not implicitly {@link game.example.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.example
         * @static
         * @param {game.Iexample} message example message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        example.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an example message from the specified reader or buffer.
         * @function decode
         * @memberof game.example
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.example} example
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        example.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.example();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.cityId = reader.string();
                    break;
                case 2:
                    message.info = $root.game.LoginResp.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.bo = reader.bool();
                    break;
                case 4:
                    if (!(message.buildingId && message.buildingId.length))
                        message.buildingId = [];
                    message.buildingId.push(reader.string());
                    break;
                case 5:
                    message.soldierType = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an example message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.example
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.example} example
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        example.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an example message.
         * @function verify
         * @memberof game.example
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        example.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.cityId != null && message.hasOwnProperty("cityId"))
                if (!$util.isString(message.cityId))
                    return "cityId: string expected";
            if (message.info != null && message.hasOwnProperty("info")) {
                var error = $root.game.LoginResp.verify(message.info);
                if (error)
                    return "info." + error;
            }
            if (message.bo != null && message.hasOwnProperty("bo"))
                if (typeof message.bo !== "boolean")
                    return "bo: boolean expected";
            if (message.buildingId != null && message.hasOwnProperty("buildingId")) {
                if (!Array.isArray(message.buildingId))
                    return "buildingId: array expected";
                for (var i = 0; i < message.buildingId.length; ++i)
                    if (!$util.isString(message.buildingId[i]))
                        return "buildingId: string[] expected";
            }
            if (message.soldierType != null && message.hasOwnProperty("soldierType"))
                if (!$util.isInteger(message.soldierType))
                    return "soldierType: integer expected";
            return null;
        };

        /**
         * Creates an example message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.example
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.example} example
         */
        example.fromObject = function fromObject(object) {
            if (object instanceof $root.game.example)
                return object;
            var message = new $root.game.example();
            if (object.cityId != null)
                message.cityId = String(object.cityId);
            if (object.info != null) {
                if (typeof object.info !== "object")
                    throw TypeError(".game.example.info: object expected");
                message.info = $root.game.LoginResp.fromObject(object.info);
            }
            if (object.bo != null)
                message.bo = Boolean(object.bo);
            if (object.buildingId) {
                if (!Array.isArray(object.buildingId))
                    throw TypeError(".game.example.buildingId: array expected");
                message.buildingId = [];
                for (var i = 0; i < object.buildingId.length; ++i)
                    message.buildingId[i] = String(object.buildingId[i]);
            }
            if (object.soldierType != null)
                message.soldierType = object.soldierType | 0;
            return message;
        };

        /**
         * Creates a plain object from an example message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.example
         * @static
         * @param {game.example} message example
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        example.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.buildingId = [];
            if (options.defaults) {
                object.cityId = "";
                object.info = null;
                object.bo = false;
                object.soldierType = 0;
            }
            if (message.cityId != null && message.hasOwnProperty("cityId"))
                object.cityId = message.cityId;
            if (message.info != null && message.hasOwnProperty("info"))
                object.info = $root.game.LoginResp.toObject(message.info, options);
            if (message.bo != null && message.hasOwnProperty("bo"))
                object.bo = message.bo;
            if (message.buildingId && message.buildingId.length) {
                object.buildingId = [];
                for (var j = 0; j < message.buildingId.length; ++j)
                    object.buildingId[j] = message.buildingId[j];
            }
            if (message.soldierType != null && message.hasOwnProperty("soldierType"))
                object.soldierType = message.soldierType;
            return object;
        };

        /**
         * Converts this example to JSON.
         * @function toJSON
         * @memberof game.example
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        example.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return example;
    })();

    return game;
})();