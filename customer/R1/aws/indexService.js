'use strict';
      //var CustomerFD = require('./Customer.json')
  var CustomerFD = require('./v1/Customer.json');
    var CustomerData = CustomerFD;
          exports.getCustomer = function(event, cb) {
    cb(null, CustomerData);
  }
                      exports.putCustomer = function(event, cb) {
      CustomerData.push(event.body);
      cb(null, 'Item inserted successfully');
  }
              exports.postCustomer = function(event, cb) {
      CustomerData.push(event.body);
      cb(null, 'Item inserted successfully');
  }
              exports.patchCustomer = function(event, cb) {
      CustomerData.push(event.body);
      cb(null, 'Item patched successfully');
  }
            exports.deleteCustomer = function(event, cb) {
      var index = CustomerData.indexOf(event.body);
      if (index > -1) {
          CustomerData.splice(index, 1);
          cb(null, 'Item deleted successfully');
      }else{
        cb(null, 'Item does not exist');
      }
  }
            