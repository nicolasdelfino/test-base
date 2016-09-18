(function(win) {
   win.base = (function() {
      function hi() {
         return "hello"
      }

      return {
         hi: hi
      }
   })();
})(window);