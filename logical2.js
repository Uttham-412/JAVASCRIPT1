/**
 * Logical Operator with truthy and falsy values
 * 1. OR || ⚡ 
 * 2. AND && 🔥
 */

/**
 * Truthy
 * Falsy Values - "", 0, null, undefined
 */


// const firstName = null;
// const nickName = "";

// const userName = firstName || nickName || "HiddenGeek"; // Short Circuiting
// console.log(`Name - ${userName}`)

// let a = 12;
// let b;

// console.log(a + (b || 0));




// const firstName = "Prakash";
// const nickName = "Anna";

// const userName = firstName && nickName && "HiddenGeek";
// console.log(`Name - ${userName}`);




















 console.log(3 || 2 || 1)
 console.log("" || 0 || 2)
console.log("" || 0 || undefined)
 console.log("" || "null" || 2)

 console.log(3 && 2 && 1)
  console.log("" && 0 && 2)
 console.log("undefined" && "null" && "")


// console.log(3 || 2 || 1) // true || true || true
console.log("undefined" && "key" && "null"); // true && true && true