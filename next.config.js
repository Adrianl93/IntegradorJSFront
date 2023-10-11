/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  target: "serverless",
  images: {
    unoptimized: true, // Agrega el dominio de la imagen aquí
  },
  

}

module.exports = nextConfig
