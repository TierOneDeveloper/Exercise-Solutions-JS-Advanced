function requestValidator(obj) {

  const validMethods = ["GET", "POST", "DELETE", "CONNECT"];
  const uriPattern = /^[\w.]+$/g;
  const validVersion = ["HTTP/0.9", "HTTP/1.0", "HTTP/1.1", "HTTP/2.0"];
  const invalidSymbols = ["<", ">", "&", "'", "\"", "\\"];


  if (!validMethods.includes(obj.method)) {
    throw new Error("Invalid request header: Invalid Method");
  }

  if (!obj.uri || !obj.uri === "*" || !obj.uri.match(uriPattern)) {
    throw new Error("Invalid request header: Invalid URI");
  }

  if (!validVersion.includes(obj.version)) {
    throw new Error("Invalid request header: Invalid Version");
  }

  if (!obj.hasOwnProperty("message")) {
    throw new Error("Invalid request header: Invalid Message");
  }

  for (let el of obj.message) {
    if (invalidSymbols.includes(el)) {
      throw new Error("Invalid request header: Invalid Message");
    }
  }

  return obj;
}

console.log(requestValidator({
  method: 'GET',
  uri: 'svn.public.catalog',
  version: 'HTTP/1.1',
  message: ''
}));

// console.log("____________________");

// requestValidator({
//   method: 'OPTIONS',
//   uri: 'git.master',
//   version: 'HTTP/1.1',
//   message: '-recursive'
// })

// console.log("____________________");

// requestValidator({
//   method: 'POST',
//   uri: 'home.bash',
//   message: 'rm -rf /*'
// })