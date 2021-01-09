//防抖函数
export function debounce(fn, wait = 100) {
               let timeout = null
               return function() {
                    if(timeout !== null) clearTimeout(timeout)
                    timeout = setTimeout(fn, wait);
               }
          } 
          
//节流函数
export function throttle(fn, delay) {
                   var prev = Date.now()
                   return function() {
                            var now = Date.now()
                            if (now - prev > delay) {
                             fn()
                             prev = Date.now()
                            }
                   }
          }