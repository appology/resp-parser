# Release Notes

## v0.1.2 - v0.1.6

### Updates
- README changes.

## v0.1.1

### Updates
- Tested and fixed package installation from npm.

## v0.0.8

### Breaking Changes
- RespParser: .results property returns an object instead of an array.

### Updates
- Added support & tests for:
  - Simple Strings
  - Null Bulk Strings
  - Null Arrays
  - Errors
  - Pipelining

## v0.0.7

### Updates
- Removed webpack. Using babel-cli instead.
- Renamed tests folder to test, as it seemed more consistent with the testing community.
- Added wallaby.js config.

## v0.0.6

### Breaking Changes
- RespParser: Removed .parse() instance method. Use .results property instead.

### Updates
- Added tests.
- Reorganized code.
- Refactored code to use ES6.
- Added babel, eslint, and webpack.
- Added travis-ci config.

## v0.0.5

### Updates
- Initial public release.
- Basic support for Integers, BulkStrings and Arrays.