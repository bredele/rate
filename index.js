
/**
 * Change data channel speed limitation.
 * 
 * Examples:
 *
 *   peer.codec(rate());
 *   peer.codec(rate(100));
 *
 * @param {Number} rate
 * @return {Function} codec
 * @api public
 */

module.exports = function(rate) {
  rate = rate || 1638400;
  return function(sdp) {
    var split = sdp.split("b=AS:30");
    if(split.length > 1) {
      sdp = split[0] + "b=AS:" + rate + split[1];
    }
    return sdp;
  };
};
