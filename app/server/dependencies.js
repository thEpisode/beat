function dependencies(args) {
  var _dependencies;

  const setup = () => {
    _dependencies = {};

    instantiateDependencies();
  }

  const instantiateDependencies = () => {
    let express = require("express");
    let server = express();

    _dependencies = {
      express: express,
      httpServer: server,
      path: require('path'),
      http: require('http').Server(server),
      bodyParser: require('body-parser'),
      jwt: require('jsonwebtoken'), // used to create, sign, and verify tokens
      open: require('open'),
      colors: require('colors/safe'),
      cors: require('cors'),
      config: require('config'),
      firebase: require('firebase-admin'),
      request: require('request'),
      root: args.root,
      isJsonString: (str) => {
        try {
          JSON.parse(str);
        } catch (e) {
          return false;
        }
        return true;
      }
    }
    console.log(_dependencies.colors.green(' Boilerplate: ') + 'Dependencies imported');
  }

  const getDependencies = () => {
    return _dependencies;
  }

  const addDependency = (dependency, name)=>{
    _dependencies[name] = dependency;
  }

  setup();
  return {
    get: getDependencies,
    add: addDependency
  }
}

module.exports = dependencies;