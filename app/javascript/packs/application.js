import 'cocoon-js'
import 'sweetalert'
import 'bootstrap'
require('@rails/ujs').start();
require('turbolinks').start();
require('@rails/activestorage').start();
require('channels');
require('lib/following');
require('trix');
require('@rails/actiontext');
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)
import './src/application.scss'
require("bootstrap/dist/js/bootstrap")

//= require bootstrap-sprockets
//= require jquery_ujs
//= require gritter
//= require cable
//= require_tree
// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.

import "controllers"