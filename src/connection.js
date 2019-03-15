const ftpClient = require('ftp-client');
var config = {
  host: 'ftp.cluster021.hosting.ovh.net',
  port: 21,
  user: 'onetlogica',
  password: 'DaVbBSNaSBaK'
};
var options = {
    logging: 'basic'
};

const client = new ftpClient(config, options);

client.connect(function () {
		console.log('succes')
    // client.upload(['test/**'], '/public_html/test', {
    //     baseDir: 'test',
    //     overwrite: 'older'
    // }, function (result) {
    //     console.log(result);
});
