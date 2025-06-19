export const handleError = ((err, req, res, next) => {

    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error";
      res?.status(statusCode).json({ error : "Something Went Wrong , Please Try again later" ,err: message});
    })