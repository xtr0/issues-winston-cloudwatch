const winston = require('winston');
const WinstonCloudWatch = require('winston-cloudwatch');

const logger = winston.createLogger();

logger.add(new WinstonCloudWatch({
    awsRegion: 'us-east-1',
    logGroupName: 'testing',
    logStreamName: () => `no-eventlogs-test-${new Date().toISOString().replace(/[:.]/g, '-')}`,
    uploadRate: 2000, // <-- increase interval to avoid upload cycle iterations overlap. e.g. to 10000
}));

console.log('!!! LOGGING 111');
logger.info('111');
console.log('!!! LOGGED 111');
