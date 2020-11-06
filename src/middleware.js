
const proxy = require("http-proxy-middleware");

module.exports = app => {
  module.exports = app => {
    app.use(
      "/formeJuridique",
      proxy({
        target:'https://ec2-15-207-110-101.ap-south-1.compute.amazonaws.com:8245/restSociete/1.1/', //original url
        changeOrigin:true
      })
    );
  };
};


/*const express = require("express");
var cors = require('cors')
const app = express();

app.use(cors());
const { createProxyMiddleware } =require('http-proxy-middleware');
app.use('/formeJuridique', createProxyMiddleware({ 
    target:'https://ec2-13-235-87-115.ap-south-1.compute.amazonaws.com:8245/restSociete/1.1/', //original url
    changeOrigin:true, 
    secure: false,
    onProxyRes:function (proxyRes, req, res) {
      proxyRes.headers['Access-Control-Allow-Origin'] = '*';
    }
}));

app.listen(5000);*/