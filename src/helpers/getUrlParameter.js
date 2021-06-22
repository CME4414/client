export default function getUrlParameter(name) {
  var results = new RegExp(`[\\?&]${name}=([^&#?]*)`).exec(window.location.href);
  if (results == null) { return null; }
  return results[1] || 0;
}
