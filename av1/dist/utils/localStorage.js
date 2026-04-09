"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.localStorage = void 0;
const node_localstorage_1 = require("node-localstorage");
exports.localStorage = new node_localstorage_1.LocalStorage('./data/local_storage');
