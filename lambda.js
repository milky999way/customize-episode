process.env.IN_LAMBDA = '1'
process.env.NODE_ENV = 'production'

const serverless = require('aws-serverless-express')
const app = require('./server')

const binaryMimeTypes = [
  'application/javascript',
  'application/json',
  'application/octet-stream',
  'application/xml',
  'font/eot',
  'font/opentype',
  'font/otf',
  'font/ttf',
  'image/gif',
  'image/jpeg',
  'image/png',
  'image/svg+xml',
  'image/x-icon',
  'text/comma-separated-values',
  'text/css',
  'text/html',
  'text/javascript',
  'text/plain',
  'text/text',
  'text/xml',
  'audio/mpeg'
]

const server = serverless.createServer(app, null, binaryMimeTypes)
exports.handler = (event, context) => { serverless.proxy(server, event, context) }
