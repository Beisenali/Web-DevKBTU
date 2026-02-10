/**
 * JavaScript Fundamentals - The "switch" statement
 * https://javascript.info/switch
 *
 * Task: Rewrite "if" into "switch"
 */

function getBrowser() {
  const browser = 'Chrome';

  switch (browser) {
    case 'Edge':
      return "You've got the Edge!";
    case 'Chrome':
    case 'Firefox':
    case 'Safari':
    case 'Opera':
      return 'Okay we support these browsers too';
    default:
      return 'We hope that this page looks ok!';
  }
}
