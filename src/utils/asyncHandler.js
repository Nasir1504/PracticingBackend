
const asyncHandler = (requestHandler) => {
    return (req, res, next) => {
        Promise
        .resolve(requestHandler(req, res, next))
        .catch((err) => next(err))
    }
}


export { asyncHandler }



//NOTE:
// ✅ Promises handle their own internal “try” automatically —
// so whenever something inside a promise (or an async function) throws an error or rejects,
// you don’t need to write try { ... } manually.

// You just attach a .catch() to handle that error