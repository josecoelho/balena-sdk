// Generated by CoffeeScript 1.12.5
var isEmpty, isProvisioned;

isEmpty = require('lodash/isEmpty');

isProvisioned = require('.').isProvisioned;

exports.normalizeDeviceOsVersion = function(device) {
  if (isEmpty(device.os_version) && isProvisioned(device)) {
    device.os_version = 'Resin OS 1.0.0-pre';
  }
};