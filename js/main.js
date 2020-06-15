!function(){"use strict";new Glide(".glide",{type:"carousel",startAt:1,perView:3,focusAt:1,gap:30,animationDuration:1e3,hoverpause:!0,breakpoints:{1024:{perView:3},900:{perView:2},600:{perView:1}}}).mount();document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".header__burger"),t=document.querySelector(".header__menu"),r=document.querySelector(".header__burger-line"),o=(document.querySelector(".header__link"),document.querySelector(".header__list")),a=document.getElementsByTagName("body");console.log(a);e.onclick=()=>{e.classList.toggle("header__burger--active"),r.classList.toggle("header__burger-line--active"),t.classList.toggle("header__menu--active"),a.classList.toggle("body__lock")},o.onclick=()=>{e.classList.remove("header__burger--active"),r.classList.remove("header__burger-line--active"),t.classList.remove("header__menu--active"),console.log(event)}});(()=>{const e=document.querySelector(".header");window.onscroll=()=>{window.pageYOffset>550?e.classList.add("header__activ"):window.pageYOffset<550&&e.classList.remove("header__activ")}})()}();

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXMiOlsic3JjL2pzL3NsaWRlci5qcyIsInNyYy9qcy9tYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGNvbmZpZyA9IHtcclxuICB0eXBlOiBcImNhcm91c2VsXCIsXHJcbiAgc3RhcnRBdDogMSxcclxuICBwZXJWaWV3OiAzLFxyXG4gIGZvY3VzQXQ6IDEsXHJcbiAgZ2FwOiAzMCxcclxuICAvLyBhdXRvcGxheTogMzAwMCxcclxuICBhbmltYXRpb25EdXJhdGlvbjogMTAwMCxcclxuICBob3ZlcnBhdXNlOiB0cnVlLFxyXG4gIGJyZWFrcG9pbnRzOiB7XHJcbiAgICAxMDI0OiB7XHJcbiAgICAgIHBlclZpZXc6IDMsXHJcbiAgICB9LFxyXG4gICAgOTAwOiB7XHJcbiAgICAgIHBlclZpZXc6IDIsXHJcbiAgICB9LFxyXG4gICAgNjAwOiB7XHJcbiAgICAgIHBlclZpZXc6IDEsXHJcbiAgICB9LFxyXG4gIH0sXHJcbn07XHJcbmV4cG9ydCBjb25zdCBnbGlkZSA9IG5ldyBHbGlkZShcIi5nbGlkZVwiLCBjb25maWcpLm1vdW50KCk7XHJcbiIsImltcG9ydCB7IGdsaWRlIH0gZnJvbSBcIi4vc2xpZGVyXCI7XHJcbmltcG9ydCB7IHVzZU1hcCB9IGZyb20gXCIuL21hcFwiO1xyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XHJcbiAgY29uc3QgJGJ1cmdlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyX19idXJnZXJcIik7XHJcbiAgY29uc3QgJG1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlYWRlcl9fbWVudVwiKTtcclxuICBjb25zdCAkbGluZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyX19idXJnZXItbGluZVwiKTtcclxuICBjb25zdCAkbGluayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyX19saW5rXCIpO1xyXG4gIGNvbnN0ICRsaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWFkZXJfX2xpc3RcIik7XHJcbiAgY29uc3QgJGJvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImJvZHlcIik7XHJcbiAgY29uc29sZS5sb2coJGJvZHkpO1xyXG4gIC8vIGNvbnNvbGUubG9nKGV2ZW50KTtcclxuICBjb25zdCBhZGRBY3RpdmUgPSAoKSA9PiB7XHJcbiAgICAkYnVyZ2VyLmNsYXNzTGlzdC50b2dnbGUoXCJoZWFkZXJfX2J1cmdlci0tYWN0aXZlXCIpO1xyXG4gICAgJGxpbmUuY2xhc3NMaXN0LnRvZ2dsZShcImhlYWRlcl9fYnVyZ2VyLWxpbmUtLWFjdGl2ZVwiKTtcclxuICAgICRtZW51LmNsYXNzTGlzdC50b2dnbGUoXCJoZWFkZXJfX21lbnUtLWFjdGl2ZVwiKTtcclxuICAgICRib2R5LmNsYXNzTGlzdC50b2dnbGUoXCJib2R5X19sb2NrXCIpO1xyXG5cclxuICAgIC8vICAgY29uc29sZS5sb2coZXZlbnQpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJlbW92ZUFjdGl2ZSA9ICgpID0+IHtcclxuICAgICRidXJnZXIuY2xhc3NMaXN0LnJlbW92ZShcImhlYWRlcl9fYnVyZ2VyLS1hY3RpdmVcIik7XHJcbiAgICAkbGluZS5jbGFzc0xpc3QucmVtb3ZlKFwiaGVhZGVyX19idXJnZXItbGluZS0tYWN0aXZlXCIpO1xyXG4gICAgJG1lbnUuY2xhc3NMaXN0LnJlbW92ZShcImhlYWRlcl9fbWVudS0tYWN0aXZlXCIpO1xyXG4gICAgY29uc29sZS5sb2coZXZlbnQpO1xyXG4gIH07XHJcblxyXG4gICRidXJnZXIub25jbGljayA9IGFkZEFjdGl2ZTtcclxuICAkbGlzdC5vbmNsaWNrID0gcmVtb3ZlQWN0aXZlO1xyXG59KTtcclxuXHJcbmNvbnN0IGhlYWRlckJhY2tHcm91bmQgPSAoKSA9PiB7XHJcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWFkZXJcIik7XHJcbiAgd2luZG93Lm9uc2Nyb2xsID0gKCkgPT4ge1xyXG4gICAgaWYgKHdpbmRvdy5wYWdlWU9mZnNldCA+IDU1MCkge1xyXG4gICAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZChcImhlYWRlcl9fYWN0aXZcIik7XHJcbiAgICB9IGVsc2UgaWYgKHdpbmRvdy5wYWdlWU9mZnNldCA8IDU1MCkge1xyXG4gICAgICBoZWFkZXIuY2xhc3NMaXN0LnJlbW92ZShcImhlYWRlcl9fYWN0aXZcIik7XHJcbiAgICB9XHJcbiAgfTtcclxufTtcclxuXHJcbmhlYWRlckJhY2tHcm91bmQoKTtcclxuIl0sIm5hbWVzIjpbIkdsaWRlIiwidHlwZSIsInN0YXJ0QXQiLCJwZXJWaWV3IiwiZm9jdXNBdCIsImdhcCIsImFuaW1hdGlvbkR1cmF0aW9uIiwiaG92ZXJwYXVzZSIsImJyZWFrcG9pbnRzIiwibW91bnQiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCIkYnVyZ2VyIiwicXVlcnlTZWxlY3RvciIsIiRtZW51IiwiJGxpbmUiLCIkbGlzdCIsIiRib2R5IiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJjb25zb2xlIiwibG9nIiwib25jbGljayIsImNsYXNzTGlzdCIsInRvZ2dsZSIsInJlbW92ZSIsImV2ZW50IiwiaGVhZGVyIiwid2luZG93Iiwib25zY3JvbGwiLCJwYWdlWU9mZnNldCIsImFkZCIsImhlYWRlckJhY2tHcm91bmQiXSwibWFwcGluZ3MiOiJ5QkFxQnFCLElBQUlBLE1BQU0sU0FyQmhCLENBQ2JDLEtBQU0sV0FDTkMsUUFBUyxFQUNUQyxRQUFTLEVBQ1RDLFFBQVMsRUFDVEMsSUFBSyxHQUVMQyxrQkFBbUIsSUFDbkJDLFlBQVksRUFDWkMsWUFBYSxNQUNMLENBQ0pMLFFBQVMsT0FFTixDQUNIQSxRQUFTLE9BRU4sQ0FDSEEsUUFBUyxNQUlrQ00sUUNuQmpEQyxTQUFTQyxpQkFBaUIsbUJBQW9CLFdBQ3RDQyxFQUFVRixTQUFTRyxjQUFjLG1CQUNqQ0MsRUFBUUosU0FBU0csY0FBYyxpQkFDL0JFLEVBQVFMLFNBQVNHLGNBQWMsd0JBRS9CRyxHQURRTixTQUFTRyxjQUFjLGlCQUN2QkgsU0FBU0csY0FBYyxrQkFDL0JJLEVBQVFQLFNBQVNRLHFCQUFxQixRQUM1Q0MsUUFBUUMsSUFBSUgsR0FrQlpMLEVBQVFTLFFBaEJVLEtBQ2hCVCxFQUFRVSxVQUFVQyxPQUFPLDBCQUN6QlIsRUFBTU8sVUFBVUMsT0FBTywrQkFDdkJULEVBQU1RLFVBQVVDLE9BQU8sd0JBQ3ZCTixFQUFNSyxVQUFVQyxPQUFPLGVBYXpCUCxFQUFNSyxRQVJlLEtBQ25CVCxFQUFRVSxVQUFVRSxPQUFPLDBCQUN6QlQsRUFBTU8sVUFBVUUsT0FBTywrQkFDdkJWLEVBQU1RLFVBQVVFLE9BQU8sd0JBQ3ZCTCxRQUFRQyxJQUFJSyxVQU9TLFlBQ2pCQyxFQUFTaEIsU0FBU0csY0FBYyxXQUN0Q2MsT0FBT0MsU0FBVyxLQUNaRCxPQUFPRSxZQUFjLElBQ3ZCSCxFQUFPSixVQUFVUSxJQUFJLGlCQUNaSCxPQUFPRSxZQUFjLEtBQzlCSCxFQUFPSixVQUFVRSxPQUFPLG1CQUs5Qk8ifQ==
