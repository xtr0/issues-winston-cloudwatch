Output of `!!! interval` was added here

```javascript
    debug('creating interval');
    self.intervalId = setInterval(function() {
      debug('!! interval');
      self.submit(function(err) {

```

```
DEBUG: constructor finished
!!! LOGGING 111
DEBUG: log (called by winston) {
  message: '111',
  level: 'info',
  [Symbol(level)]: 'info',
  [Symbol(message)]: '{"message":"111","level":"info"}'
}
DEBUG: add log to queue {
  message: '111',
  level: 'info',
  [Symbol(level)]: 'info',
  [Symbol(message)]: '{"message":"111","level":"info"}'
}
DEBUG: creating interval
!!! LOGGED 111
DEBUG: !! interval
DEBUG: upload [ { message: 'info - 111', timestamp: 1597320587959 } ]
DEBUG: ensure group present
DEBUG: ensure stream present
DEBUG: create stream
DEBUG: !! interval
DEBUG: upload [ { message: 'info - 111', timestamp: 1597320587959 } ]
DEBUG: ensure group present
DEBUG: ensure stream present
DEBUG: token found undefined
DEBUG: send to aws no-eventlogs-test-2020-08-13T12-09-49-962Z
DEBUG: sent to aws, err:  null  data:  {
  nextSequenceToken: '49605526618658505959912901996493233800562588370239743362'
}
DEBUG: ensure stream present
DEBUG: create stream
DEBUG: !! interval
DEBUG: ensure stream present
DEBUG: token found undefined
DEBUG: send to aws no-eventlogs-test-2020-08-13T12-09-51-962Z
DEBUG: sent to aws, err:  InvalidParameterException: 1 validation error detected: Value '[]' at 'logEvents' failed to satisfy constraint: Member must have length greater than or equal to 1
    at Request.extractError (D:\Projects\issues-winston-cloudwatch\node_modules\aws-sdk\lib\protocol\json.js:51:27)
    at Request.callListeners (D:\Projects\issues-winston-cloudwatch\node_modules\aws-sdk\lib\sequential_executor.js:106:20)
    at Request.emit (D:\Projects\issues-winston-cloudwatch\node_modules\aws-sdk\lib\sequential_executor.js:78:10)
    at Request.emit (D:\Projects\issues-winston-cloudwatch\node_modules\aws-sdk\lib\request.js:688:14)
    at Request.transition (D:\Projects\issues-winston-cloudwatch\node_modules\aws-sdk\lib\request.js:22:10)
    at AcceptorStateMachine.runTo (D:\Projects\issues-winston-cloudwatch\node_modules\aws-sdk\lib\state_machine.js:14:12)
    at D:\Projects\issues-winston-cloudwatch\node_modules\aws-sdk\lib\state_machine.js:26:10
    at Request.<anonymous> (D:\Projects\issues-winston-cloudwatch\node_modules\aws-sdk\lib\request.js:38:9)
    at Request.<anonymous> (D:\Projects\issues-winston-cloudwatch\node_modules\aws-sdk\lib\request.js:690:12)
    at Request.callListeners (D:\Projects\issues-winston-cloudwatch\node_modules\aws-sdk\lib\sequential_executor.js:116:18) {
  code: 'InvalidParameterException',
  time: 2020-08-13T12:09:54.520Z,
  requestId: '03084d24-e427-4a1e-bcda-b1b30dc14b0c',
  statusCode: 400,
  retryable: false,
  retryDelay: 7.612733525622328
}  data:  null
DEBUG: error during putLogEvents InvalidParameterException: 1 validation error detected: Value '[]' at 'logEvents' failed to satisfy constraint: Member must have length greater than or equal to 1
    at Request.extractError (D:\Projects\issues-winston-cloudwatch\node_modules\aws-sdk\lib\protocol\json.js:51:27)
    at Request.callListeners (D:\Projects\issues-winston-cloudwatch\node_modules\aws-sdk\lib\sequential_executor.js:106:20)
    at Request.emit (D:\Projects\issues-winston-cloudwatch\node_modules\aws-sdk\lib\sequential_executor.js:78:10)
    at Request.emit (D:\Projects\issues-winston-cloudwatch\node_modules\aws-sdk\lib\request.js:688:14)
    at Request.transition (D:\Projects\issues-winston-cloudwatch\node_modules\aws-sdk\lib\request.js:22:10)
    at AcceptorStateMachine.runTo (D:\Projects\issues-winston-cloudwatch\node_modules\aws-sdk\lib\state_machine.js:14:12)
    at D:\Projects\issues-winston-cloudwatch\node_modules\aws-sdk\lib\state_machine.js:26:10
    at Request.<anonymous> (D:\Projects\issues-winston-cloudwatch\node_modules\aws-sdk\lib\request.js:38:9)
    at Request.<anonymous> (D:\Projects\issues-winston-cloudwatch\node_modules\aws-sdk\lib\request.js:690:12)
    at Request.callListeners (D:\Projects\issues-winston-cloudwatch\node_modules\aws-sdk\lib\sequential_executor.js:116:18) {
  code: 'InvalidParameterException',
  time: 2020-08-13T12:09:54.520Z,
  requestId: '03084d24-e427-4a1e-bcda-b1b30dc14b0c',
  statusCode: 400,
  retryable: false,
  retryDelay: 7.612733525622328
}
DEBUG: retrying to upload 3 more times
DEBUG: retrying to upload 2 more times
DEBUG: retrying to upload 1 more times
DEBUG: !! interval
DEBUG: retrying to upload 0 more times
DEBUG: error during submit InvalidParameterException: 1 validation error detected: Value '[]' at 'logEvents' failed to satisfy constraint: Member must have length greater than or equal to 1
    at Request.extractError (D:\Projects\issues-winston-cloudwatch\node_modules\aws-sdk\lib\protocol\json.js:51:27)
    at Request.callListeners (D:\Projects\issues-winston-cloudwatch\node_modules\aws-sdk\lib\sequential_executor.js:106:20)
    at Request.emit (D:\Projects\issues-winston-cloudwatch\node_modules\aws-sdk\lib\sequential_executor.js:78:10)
    at Request.emit (D:\Projects\issues-winston-cloudwatch\node_modules\aws-sdk\lib\request.js:688:14)
    at Request.transition (D:\Projects\issues-winston-cloudwatch\node_modules\aws-sdk\lib\request.js:22:10)
    at AcceptorStateMachine.runTo (D:\Projects\issues-winston-cloudwatch\node_modules\aws-sdk\lib\state_machine.js:14:12)
    at D:\Projects\issues-winston-cloudwatch\node_modules\aws-sdk\lib\state_machine.js:26:10
    at Request.<anonymous> (D:\Projects\issues-winston-cloudwatch\node_modules\aws-sdk\lib\request.js:38:9)
    at Request.<anonymous> (D:\Projects\issues-winston-cloudwatch\node_modules\aws-sdk\lib\request.js:690:12)
    at Request.callListeners (D:\Projects\issues-winston-cloudwatch\node_modules\aws-sdk\lib\sequential_executor.js:116:18) {
  code: 'InvalidParameterException',
  time: 2020-08-13T12:09:56.810Z,
  requestId: 'a8c98a9d-bc86-43d3-837e-c4661fe7ce4a',
  statusCode: 400,
  retryable: false,
  retryDelay: 43.52593587019673
}
InvalidParameterException: 1 validation error detected: Value '[]' at 'logEvents' failed to satisfy constraint: Member must have length greater than or equal to 1
    at Request.extractError (D:\Projects\issues-winston-cloudwatch\node_modules\aws-sdk\lib\protocol\json.js:51:27)
    at Request.callListeners (D:\Projects\issues-winston-cloudwatch\node_modules\aws-sdk\lib\sequential_executor.js:106:20)
    at Request.emit (D:\Projects\issues-winston-cloudwatch\node_modules\aws-sdk\lib\sequential_executor.js:78:10)
    at Request.emit (D:\Projects\issues-winston-cloudwatch\node_modules\aws-sdk\lib\request.js:688:14)
    at Request.transition (D:\Projects\issues-winston-cloudwatch\node_modules\aws-sdk\lib\request.js:22:10)
    at AcceptorStateMachine.runTo (D:\Projects\issues-winston-cloudwatch\node_modules\aws-sdk\lib\state_machine.js:14:12)
    at D:\Projects\issues-winston-cloudwatch\node_modules\aws-sdk\lib\state_machine.js:26:10
    at Request.<anonymous> (D:\Projects\issues-winston-cloudwatch\node_modules\aws-sdk\lib\request.js:38:9)
    at Request.<anonymous> (D:\Projects\issues-winston-cloudwatch\node_modules\aws-sdk\lib\request.js:690:12)
    at Request.callListeners (D:\Projects\issues-winston-cloudwatch\node_modules\aws-sdk\lib\sequential_executor.js:116:18) {
  code: 'InvalidParameterException',
  time: 2020-08-13T12:09:56.810Z,
  requestId: 'a8c98a9d-bc86-43d3-837e-c4661fe7ce4a',
  statusCode: 400,
  retryable: false,
  retryDelay: 43.52593587019673
}
DEBUG: !! interval
DEBUG: !! interval
DEBUG: !! interval
DEBUG: !! interval
DEBUG: !! interval
```