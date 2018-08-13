let AWS = require('aws-sdk');
let SL_AWS = require('slappforge-sdk-aws');
const sqs = new SL_AWS.SQS(AWS);
const s3 = new AWS.S3();
exports.handler = function (event, context, callback) {

	sqs.sendMessage({
		MessageBody: 'hi',
		QueueUrl: 'https://sqs.us-east-1.amazonaws.com/263248768798/skarolori',
		DelaySeconds: '0',
		MessageAttributes: {}
	}, function (data) {
		// your logic (logging etc) to handle successful message delivery, should be here
	}, function (error) {
		// your logic (logging etc) to handle failures, should be here
	});




	callback(null, 'Successfully executed');
}