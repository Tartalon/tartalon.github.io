(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

$('.img-box__carousel').slick({
  autoplay: true,
  arrows: false,
  fade: true,
  speed: 2000,
  autoplaySpeed: 2000
});
$('.description__img--box').slick({
  autoplay: true,
  arrows: false,
  fade: true,
  speed: 2000,
  autoplaySpeed: 2000
}); // MENU=======

$(document).ready(function () {
  $('.header__nav--toggle, .nav__link').click(function (event) {
    $('.header__nav--toggle').toggleClass('toggle__active');
    $('.nav__list').toggleClass('nav__active');
  });
}); // btnTop=======

$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('.scrollup').fadeIn();
    } else {
      $('.scrollup').fadeOut();
    }
  });
  $('.scrollup').click(function () {
    $("html, body").animate({
      scrollTop: 0
    }, 600);
    return false;
  });
});

},{}]},{},[1])

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJwcm9qZWN0cy9ncmFkdWF0aW9uX3Byb2plY3Qvc3JjL2pzL2FwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUEsQ0FBQyxDQUFDLG9CQUFELENBQUQsQ0FBd0IsS0FBeEIsQ0FBOEI7QUFDN0IsRUFBQSxRQUFRLEVBQUUsSUFEbUI7QUFFN0IsRUFBQSxNQUFNLEVBQUUsS0FGcUI7QUFHN0IsRUFBQSxJQUFJLEVBQUUsSUFIdUI7QUFJN0IsRUFBQSxLQUFLLEVBQUUsSUFKc0I7QUFLN0IsRUFBQSxhQUFhLEVBQUU7QUFMYyxDQUE5QjtBQVFBLENBQUMsQ0FBQyx3QkFBRCxDQUFELENBQTRCLEtBQTVCLENBQWtDO0FBQ2pDLEVBQUEsUUFBUSxFQUFFLElBRHVCO0FBRWpDLEVBQUEsTUFBTSxFQUFFLEtBRnlCO0FBR2pDLEVBQUEsSUFBSSxFQUFFLElBSDJCO0FBSWpDLEVBQUEsS0FBSyxFQUFFLElBSjBCO0FBS2pDLEVBQUEsYUFBYSxFQUFFO0FBTGtCLENBQWxDLEUsQ0FTQTs7QUFDQSxDQUFDLENBQUMsUUFBRCxDQUFELENBQVksS0FBWixDQUFrQixZQUFXO0FBQzVCLEVBQUEsQ0FBQyxDQUFDLGtDQUFELENBQUQsQ0FBc0MsS0FBdEMsQ0FBNEMsVUFBUyxLQUFULEVBQWdCO0FBQzNELElBQUEsQ0FBQyxDQUFDLHNCQUFELENBQUQsQ0FBMEIsV0FBMUIsQ0FBc0MsZ0JBQXRDO0FBQ0EsSUFBQSxDQUFDLENBQUMsWUFBRCxDQUFELENBQWdCLFdBQWhCLENBQTRCLGFBQTVCO0FBQ0EsR0FIRDtBQUlBLENBTEQsRSxDQVFBOztBQUNBLENBQUMsQ0FBQyxRQUFELENBQUQsQ0FBWSxLQUFaLENBQWtCLFlBQVU7QUFFNUIsRUFBQSxDQUFDLENBQUMsTUFBRCxDQUFELENBQVUsTUFBVixDQUFpQixZQUFVO0FBQzNCLFFBQUksQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRLFNBQVIsS0FBc0IsR0FBMUIsRUFBK0I7QUFDL0IsTUFBQSxDQUFDLENBQUMsV0FBRCxDQUFELENBQWUsTUFBZjtBQUNDLEtBRkQsTUFFTztBQUNQLE1BQUEsQ0FBQyxDQUFDLFdBQUQsQ0FBRCxDQUFlLE9BQWY7QUFDQztBQUNBLEdBTkQ7QUFRQSxFQUFBLENBQUMsQ0FBQyxXQUFELENBQUQsQ0FBZSxLQUFmLENBQXFCLFlBQVU7QUFDL0IsSUFBQSxDQUFDLENBQUMsWUFBRCxDQUFELENBQWdCLE9BQWhCLENBQXdCO0FBQUUsTUFBQSxTQUFTLEVBQUU7QUFBYixLQUF4QixFQUEwQyxHQUExQztBQUNBLFdBQU8sS0FBUDtBQUNDLEdBSEQ7QUFLQyxDQWZEIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCIkKCcuaW1nLWJveF9fY2Fyb3VzZWwnKS5zbGljayh7XHJcblx0YXV0b3BsYXk6IHRydWUsXHJcblx0YXJyb3dzOiBmYWxzZSxcclxuXHRmYWRlOiB0cnVlLFxyXG5cdHNwZWVkOiAyMDAwLFxyXG5cdGF1dG9wbGF5U3BlZWQ6IDIwMDBcclxufSk7XHJcblxyXG4kKCcuZGVzY3JpcHRpb25fX2ltZy0tYm94Jykuc2xpY2soe1xyXG5cdGF1dG9wbGF5OiB0cnVlLFxyXG5cdGFycm93czogZmFsc2UsXHJcblx0ZmFkZTogdHJ1ZSxcclxuXHRzcGVlZDogMjAwMCxcclxuXHRhdXRvcGxheVNwZWVkOiAyMDAwXHJcbn0pO1xyXG5cclxuXHJcbi8vIE1FTlU9PT09PT09XHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG5cdCQoJy5oZWFkZXJfX25hdi0tdG9nZ2xlLCAubmF2X19saW5rJykuY2xpY2soZnVuY3Rpb24oZXZlbnQpIHtcclxuXHRcdCQoJy5oZWFkZXJfX25hdi0tdG9nZ2xlJykudG9nZ2xlQ2xhc3MoJ3RvZ2dsZV9fYWN0aXZlJyk7XHJcblx0XHQkKCcubmF2X19saXN0JykudG9nZ2xlQ2xhc3MoJ25hdl9fYWN0aXZlJyk7XHJcblx0fSk7XHJcbn0pO1xyXG5cclxuXHJcbi8vIGJ0blRvcD09PT09PT1cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcclxuXHJcbiQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24oKXtcclxuaWYgKCQodGhpcykuc2Nyb2xsVG9wKCkgPiAxMDApIHtcclxuJCgnLnNjcm9sbHVwJykuZmFkZUluKCk7XHJcbn0gZWxzZSB7XHJcbiQoJy5zY3JvbGx1cCcpLmZhZGVPdXQoKTtcclxufVxyXG59KTtcclxuXHJcbiQoJy5zY3JvbGx1cCcpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcbiQoXCJodG1sLCBib2R5XCIpLmFuaW1hdGUoeyBzY3JvbGxUb3A6IDAgfSwgNjAwKTtcclxucmV0dXJuIGZhbHNlO1xyXG59KTtcclxuXHJcbn0pOyJdLCJwcmVFeGlzdGluZ0NvbW1lbnQiOiIvLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbTV2WkdWZmJXOWtkV3hsY3k5aWNtOTNjMlZ5TFhCaFkyc3ZYM0J5Wld4MVpHVXVhbk1pTENKd2NtOXFaV04wY3k5bmNtRmtkV0YwYVc5dVgzQnliMnBsWTNRdmMzSmpMMnB6TDJGd2NDNXFjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lRVUZCUVRzN08wRkRRVUVzUTBGQlF5eERRVUZETEc5Q1FVRkVMRU5CUVVRc1EwRkJkMElzUzBGQmVFSXNRMEZCT0VJN1FVRkROMElzUlVGQlFTeFJRVUZSTEVWQlFVVXNTVUZFYlVJN1FVRkZOMElzUlVGQlFTeE5RVUZOTEVWQlFVVXNTMEZHY1VJN1FVRkhOMElzUlVGQlFTeEpRVUZKTEVWQlFVVXNTVUZJZFVJN1FVRkpOMElzUlVGQlFTeExRVUZMTEVWQlFVVXNTVUZLYzBJN1FVRkxOMElzUlVGQlFTeGhRVUZoTEVWQlFVVTdRVUZNWXl4RFFVRTVRanRCUVZGQkxFTkJRVU1zUTBGQlF5eDNRa0ZCUkN4RFFVRkVMRU5CUVRSQ0xFdEJRVFZDTEVOQlFXdERPMEZCUTJwRExFVkJRVUVzVVVGQlVTeEZRVUZGTEVsQlJIVkNPMEZCUldwRExFVkJRVUVzVFVGQlRTeEZRVUZGTEV0QlJubENPMEZCUjJwRExFVkJRVUVzU1VGQlNTeEZRVUZGTEVsQlNESkNPMEZCU1dwRExFVkJRVUVzUzBGQlN5eEZRVUZGTEVsQlNqQkNPMEZCUzJwRExFVkJRVUVzWVVGQllTeEZRVUZGTzBGQlRHdENMRU5CUVd4RExFVXNRMEZUUVRzN1FVRkRRU3hEUVVGRExFTkJRVU1zVVVGQlJDeERRVUZFTEVOQlFWa3NTMEZCV2l4RFFVRnJRaXhaUVVGWE8wRkJRelZDTEVWQlFVRXNRMEZCUXl4RFFVRkRMR3REUVVGRUxFTkJRVVFzUTBGQmMwTXNTMEZCZEVNc1EwRkJORU1zVlVGQlV5eExRVUZVTEVWQlFXZENPMEZCUXpORUxFbEJRVUVzUTBGQlF5eERRVUZETEhOQ1FVRkVMRU5CUVVRc1EwRkJNRUlzVjBGQk1VSXNRMEZCYzBNc1owSkJRWFJETzBGQlEwRXNTVUZCUVN4RFFVRkRMRU5CUVVNc1dVRkJSQ3hEUVVGRUxFTkJRV2RDTEZkQlFXaENMRU5CUVRSQ0xHRkJRVFZDTzBGQlEwRXNSMEZJUkR0QlFVbEJMRU5CVEVRc1JTeERRVkZCT3p0QlFVTkJMRU5CUVVNc1EwRkJReXhSUVVGRUxFTkJRVVFzUTBGQldTeExRVUZhTEVOQlFXdENMRmxCUVZVN1FVRkZOVUlzUlVGQlFTeERRVUZETEVOQlFVTXNUVUZCUkN4RFFVRkVMRU5CUVZVc1RVRkJWaXhEUVVGcFFpeFpRVUZWTzBGQlF6TkNMRkZCUVVrc1EwRkJReXhEUVVGRExFbEJRVVFzUTBGQlJDeERRVUZSTEZOQlFWSXNTMEZCYzBJc1IwRkJNVUlzUlVGQkswSTdRVUZETDBJc1RVRkJRU3hEUVVGRExFTkJRVU1zVjBGQlJDeERRVUZFTEVOQlFXVXNUVUZCWmp0QlFVTkRMRXRCUmtRc1RVRkZUenRCUVVOUUxFMUJRVUVzUTBGQlF5eERRVUZETEZkQlFVUXNRMEZCUkN4RFFVRmxMRTlCUVdZN1FVRkRRenRCUVVOQkxFZEJUa1E3UVVGUlFTeEZRVUZCTEVOQlFVTXNRMEZCUXl4WFFVRkVMRU5CUVVRc1EwRkJaU3hMUVVGbUxFTkJRWEZDTEZsQlFWVTdRVUZETDBJc1NVRkJRU3hEUVVGRExFTkJRVU1zV1VGQlJDeERRVUZFTEVOQlFXZENMRTlCUVdoQ0xFTkJRWGRDTzBGQlFVVXNUVUZCUVN4VFFVRlRMRVZCUVVVN1FVRkJZaXhMUVVGNFFpeEZRVUV3UXl4SFFVRXhRenRCUVVOQkxGZEJRVThzUzBGQlVEdEJRVU5ETEVkQlNFUTdRVUZMUXl4RFFXWkVJaXdpWm1sc1pTSTZJbWRsYm1WeVlYUmxaQzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lJb1puVnVZM1JwYjI0b0tYdG1kVzVqZEdsdmJpQnlLR1VzYml4MEtYdG1kVzVqZEdsdmJpQnZLR2tzWmlsN2FXWW9JVzViYVYwcGUybG1LQ0ZsVzJsZEtYdDJZWElnWXoxY0ltWjFibU4wYVc5dVhDSTlQWFI1Y0dWdlppQnlaWEYxYVhKbEppWnlaWEYxYVhKbE8ybG1LQ0ZtSmlaaktYSmxkSFZ5YmlCaktHa3NJVEFwTzJsbUtIVXBjbVYwZFhKdUlIVW9hU3doTUNrN2RtRnlJR0U5Ym1WM0lFVnljbTl5S0Z3aVEyRnVibTkwSUdacGJtUWdiVzlrZFd4bElDZGNJaXRwSzF3aUoxd2lLVHQwYUhKdmR5QmhMbU52WkdVOVhDSk5UMFJWVEVWZlRrOVVYMFpQVlU1RVhDSXNZWDEyWVhJZ2NEMXVXMmxkUFh0bGVIQnZjblJ6T250OWZUdGxXMmxkV3pCZExtTmhiR3dvY0M1bGVIQnZjblJ6TEdaMWJtTjBhVzl1S0hJcGUzWmhjaUJ1UFdWYmFWMWJNVjFiY2wwN2NtVjBkWEp1SUc4b2JueDhjaWw5TEhBc2NDNWxlSEJ2Y25SekxISXNaU3h1TEhRcGZYSmxkSFZ5YmlCdVcybGRMbVY0Y0c5eWRITjlabTl5S0haaGNpQjFQVndpWm5WdVkzUnBiMjVjSWowOWRIbHdaVzltSUhKbGNYVnBjbVVtSm5KbGNYVnBjbVVzYVQwd08yazhkQzVzWlc1bmRHZzdhU3NyS1c4b2RGdHBYU2s3Y21WMGRYSnVJRzk5Y21WMGRYSnVJSEo5S1NncElpd2lKQ2duTG1sdFp5MWliM2hmWDJOaGNtOTFjMlZzSnlrdWMyeHBZMnNvZTF4eVhHNWNkR0YxZEc5d2JHRjVPaUIwY25WbExGeHlYRzVjZEdGeWNtOTNjem9nWm1Gc2MyVXNYSEpjYmx4MFptRmtaVG9nZEhKMVpTeGNjbHh1WEhSemNHVmxaRG9nTWpBd01DeGNjbHh1WEhSaGRYUnZjR3hoZVZOd1pXVmtPaUF5TURBd1hISmNibjBwTzF4eVhHNWNjbHh1SkNnbkxtUmxjMk55YVhCMGFXOXVYMTlwYldjdExXSnZlQ2NwTG5Oc2FXTnJLSHRjY2x4dVhIUmhkWFJ2Y0d4aGVUb2dkSEoxWlN4Y2NseHVYSFJoY25KdmQzTTZJR1poYkhObExGeHlYRzVjZEdaaFpHVTZJSFJ5ZFdVc1hISmNibHgwYzNCbFpXUTZJREl3TURBc1hISmNibHgwWVhWMGIzQnNZWGxUY0dWbFpEb2dNakF3TUZ4eVhHNTlLVHRjY2x4dVhISmNibHh5WEc0dkx5Qk5SVTVWUFQwOVBUMDlQVnh5WEc0a0tHUnZZM1Z0Wlc1MEtTNXlaV0ZrZVNobWRXNWpkR2x2YmlncElIdGNjbHh1WEhRa0tDY3VhR1ZoWkdWeVgxOXVZWFl0TFhSdloyZHNaU3dnTG01aGRsOWZiR2x1YXljcExtTnNhV05yS0daMWJtTjBhVzl1S0dWMlpXNTBLU0I3WEhKY2JseDBYSFFrS0NjdWFHVmhaR1Z5WDE5dVlYWXRMWFJ2WjJkc1pTY3BMblJ2WjJkc1pVTnNZWE56S0NkMGIyZG5iR1ZmWDJGamRHbDJaU2NwTzF4eVhHNWNkRngwSkNnbkxtNWhkbDlmYkdsemRDY3BMblJ2WjJkc1pVTnNZWE56S0NkdVlYWmZYMkZqZEdsMlpTY3BPMXh5WEc1Y2RIMHBPMXh5WEc1OUtUdGNjbHh1WEhKY2JseHlYRzR2THlCaWRHNVViM0E5UFQwOVBUMDlYSEpjYmlRb1pHOWpkVzFsYm5RcExuSmxZV1I1S0daMWJtTjBhVzl1S0NsN1hISmNibHh5WEc0a0tIZHBibVJ2ZHlrdWMyTnliMnhzS0daMWJtTjBhVzl1S0NsN1hISmNibWxtSUNna0tIUm9hWE1wTG5OamNtOXNiRlJ2Y0NncElENGdNVEF3S1NCN1hISmNiaVFvSnk1elkzSnZiR3gxY0NjcExtWmhaR1ZKYmlncE8xeHlYRzU5SUdWc2MyVWdlMXh5WEc0a0tDY3VjMk55YjJ4c2RYQW5LUzVtWVdSbFQzVjBLQ2s3WEhKY2JuMWNjbHh1ZlNrN1hISmNibHh5WEc0a0tDY3VjMk55YjJ4c2RYQW5LUzVqYkdsamF5aG1kVzVqZEdsdmJpZ3BlMXh5WEc0a0tGd2lhSFJ0YkN3Z1ltOWtlVndpS1M1aGJtbHRZWFJsS0hzZ2MyTnliMnhzVkc5d09pQXdJSDBzSURZd01DazdYSEpjYm5KbGRIVnliaUJtWVd4elpUdGNjbHh1ZlNrN1hISmNibHh5WEc1OUtUc2lYWDA9In0=
