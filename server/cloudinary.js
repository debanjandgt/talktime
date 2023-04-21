const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: "deor0e3av",
  api_key: "186663438631888",
  api_secret: "3x7UUvUyUrO7iCRg33vXJA2ZA04",
});

module.exports = cloudinary;