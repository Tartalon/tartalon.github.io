(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

document.querySelector('.burger__icon').addEventListener('click', function () {
  document.querySelector('.header__menu-wrapper').style.display = 'block';
});
document.querySelector('.burger__close').addEventListener('click', function () {
  document.querySelector('.header__menu-wrapper').style.display = 'none';
});
document.querySelector('.cookie__btn').addEventListener('click', function () {
  document.querySelector('.header__cookie').style.display = 'none';
});

},{}]},{},[1])

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJwcm9qZWN0cy8xOF90ZW1wbGF0ZS9zcmMvanMvYXBwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNDQSxRQUFRLENBQUMsYUFBVCxDQUF1QixlQUF2QixFQUF3QyxnQkFBeEMsQ0FBeUQsT0FBekQsRUFBa0UsWUFBWTtBQUM1RSxFQUFBLFFBQVEsQ0FBQyxhQUFULENBQXVCLHVCQUF2QixFQUFnRCxLQUFoRCxDQUFzRCxPQUF0RCxHQUFnRSxPQUFoRTtBQUNELENBRkQ7QUFHQSxRQUFRLENBQUMsYUFBVCxDQUF1QixnQkFBdkIsRUFBeUMsZ0JBQXpDLENBQTBELE9BQTFELEVBQW1FLFlBQVk7QUFDN0UsRUFBQSxRQUFRLENBQUMsYUFBVCxDQUF1Qix1QkFBdkIsRUFBZ0QsS0FBaEQsQ0FBc0QsT0FBdEQsR0FBZ0UsTUFBaEU7QUFDRCxDQUZEO0FBSUEsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsY0FBdkIsRUFBdUMsZ0JBQXZDLENBQXdELE9BQXhELEVBQWlFLFlBQVk7QUFDM0UsRUFBQSxRQUFRLENBQUMsYUFBVCxDQUF1QixpQkFBdkIsRUFBMEMsS0FBMUMsQ0FBZ0QsT0FBaEQsR0FBd0QsTUFBeEQ7QUFDRCxDQUZEIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJcclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ1cmdlcl9faWNvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX21lbnUtd3JhcHBlcicpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG59KTtcclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ1cmdlcl9fY2xvc2UnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19tZW51LXdyYXBwZXInKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG59KTtcclxuXHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb29raWVfX2J0bicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX2Nvb2tpZScpLnN0eWxlLmRpc3BsYXk9J25vbmUnO1xyXG59KSJdLCJwcmVFeGlzdGluZ0NvbW1lbnQiOiIvLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbTV2WkdWZmJXOWtkV3hsY3k5aWNtOTNjMlZ5TFhCaFkyc3ZYM0J5Wld4MVpHVXVhbk1pTENKd2NtOXFaV04wY3k4eE9GOTBaVzF3YkdGMFpTOXpjbU12YW5NdllYQndMbXB6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUpCUVVGQk96czdRVU5EUVN4UlFVRlJMRU5CUVVNc1lVRkJWQ3hEUVVGMVFpeGxRVUYyUWl4RlFVRjNReXhuUWtGQmVFTXNRMEZCZVVRc1QwRkJla1FzUlVGQmEwVXNXVUZCV1R0QlFVTTFSU3hGUVVGQkxGRkJRVkVzUTBGQlF5eGhRVUZVTEVOQlFYVkNMSFZDUVVGMlFpeEZRVUZuUkN4TFFVRm9SQ3hEUVVGelJDeFBRVUYwUkN4SFFVRm5SU3hQUVVGb1JUdEJRVU5FTEVOQlJrUTdRVUZIUVN4UlFVRlJMRU5CUVVNc1lVRkJWQ3hEUVVGMVFpeG5Ra0ZCZGtJc1JVRkJlVU1zWjBKQlFYcERMRU5CUVRCRUxFOUJRVEZFTEVWQlFXMUZMRmxCUVZrN1FVRkROMFVzUlVGQlFTeFJRVUZSTEVOQlFVTXNZVUZCVkN4RFFVRjFRaXgxUWtGQmRrSXNSVUZCWjBRc1MwRkJhRVFzUTBGQmMwUXNUMEZCZEVRc1IwRkJaMFVzVFVGQmFFVTdRVUZEUkN4RFFVWkVPMEZCU1VFc1VVRkJVU3hEUVVGRExHRkJRVlFzUTBGQmRVSXNZMEZCZGtJc1JVRkJkVU1zWjBKQlFYWkRMRU5CUVhkRUxFOUJRWGhFTEVWQlFXbEZMRmxCUVZrN1FVRkRNMFVzUlVGQlFTeFJRVUZSTEVOQlFVTXNZVUZCVkN4RFFVRjFRaXhwUWtGQmRrSXNSVUZCTUVNc1MwRkJNVU1zUTBGQlowUXNUMEZCYUVRc1IwRkJkMFFzVFVGQmVFUTdRVUZEUkN4RFFVWkVJaXdpWm1sc1pTSTZJbWRsYm1WeVlYUmxaQzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lJb1puVnVZM1JwYjI0b0tYdG1kVzVqZEdsdmJpQnlLR1VzYml4MEtYdG1kVzVqZEdsdmJpQnZLR2tzWmlsN2FXWW9JVzViYVYwcGUybG1LQ0ZsVzJsZEtYdDJZWElnWXoxY0ltWjFibU4wYVc5dVhDSTlQWFI1Y0dWdlppQnlaWEYxYVhKbEppWnlaWEYxYVhKbE8ybG1LQ0ZtSmlaaktYSmxkSFZ5YmlCaktHa3NJVEFwTzJsbUtIVXBjbVYwZFhKdUlIVW9hU3doTUNrN2RtRnlJR0U5Ym1WM0lFVnljbTl5S0Z3aVEyRnVibTkwSUdacGJtUWdiVzlrZFd4bElDZGNJaXRwSzF3aUoxd2lLVHQwYUhKdmR5QmhMbU52WkdVOVhDSk5UMFJWVEVWZlRrOVVYMFpQVlU1RVhDSXNZWDEyWVhJZ2NEMXVXMmxkUFh0bGVIQnZjblJ6T250OWZUdGxXMmxkV3pCZExtTmhiR3dvY0M1bGVIQnZjblJ6TEdaMWJtTjBhVzl1S0hJcGUzWmhjaUJ1UFdWYmFWMWJNVjFiY2wwN2NtVjBkWEp1SUc4b2JueDhjaWw5TEhBc2NDNWxlSEJ2Y25SekxISXNaU3h1TEhRcGZYSmxkSFZ5YmlCdVcybGRMbVY0Y0c5eWRITjlabTl5S0haaGNpQjFQVndpWm5WdVkzUnBiMjVjSWowOWRIbHdaVzltSUhKbGNYVnBjbVVtSm5KbGNYVnBjbVVzYVQwd08yazhkQzVzWlc1bmRHZzdhU3NyS1c4b2RGdHBYU2s3Y21WMGRYSnVJRzk5Y21WMGRYSnVJSEo5S1NncElpd2lYSEpjYm1SdlkzVnRaVzUwTG5GMVpYSjVVMlZzWldOMGIzSW9KeTVpZFhKblpYSmZYMmxqYjI0bktTNWhaR1JGZG1WdWRFeHBjM1JsYm1WeUtDZGpiR2xqYXljc0lHWjFibU4wYVc5dUlDZ3BJSHRjY2x4dUlDQmtiMk4xYldWdWRDNXhkV1Z5ZVZObGJHVmpkRzl5S0NjdWFHVmhaR1Z5WDE5dFpXNTFMWGR5WVhCd1pYSW5LUzV6ZEhsc1pTNWthWE53YkdGNUlEMGdKMkpzYjJOckp6dGNjbHh1ZlNrN1hISmNibVJ2WTNWdFpXNTBMbkYxWlhKNVUyVnNaV04wYjNJb0p5NWlkWEpuWlhKZlgyTnNiM05sSnlrdVlXUmtSWFpsYm5STWFYTjBaVzVsY2lnblkyeHBZMnNuTENCbWRXNWpkR2x2YmlBb0tTQjdYSEpjYmlBZ1pHOWpkVzFsYm5RdWNYVmxjbmxUWld4bFkzUnZjaWduTG1obFlXUmxjbDlmYldWdWRTMTNjbUZ3Y0dWeUp5a3VjM1I1YkdVdVpHbHpjR3hoZVNBOUlDZHViMjVsSnp0Y2NseHVmU2s3WEhKY2JseHlYRzVrYjJOMWJXVnVkQzV4ZFdWeWVWTmxiR1ZqZEc5eUtDY3VZMjl2YTJsbFgxOWlkRzRuS1M1aFpHUkZkbVZ1ZEV4cGMzUmxibVZ5S0NkamJHbGpheWNzSUdaMWJtTjBhVzl1SUNncElIdGNjbHh1SUNCa2IyTjFiV1Z1ZEM1eGRXVnllVk5sYkdWamRHOXlLQ2N1YUdWaFpHVnlYMTlqYjI5cmFXVW5LUzV6ZEhsc1pTNWthWE53YkdGNVBTZHViMjVsSnp0Y2NseHVmU2tpWFgwPSJ9
