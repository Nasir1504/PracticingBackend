export const errorHandler = (err, req, res, next) => {
  if (err.name === "MulterError") {
    return res.status(400).json({
      message: "Only one file allowed for avatar and coverImage"
    });
  }

  res.status(500).json({
    message: err.message || "Internal Server Error"
  });
};