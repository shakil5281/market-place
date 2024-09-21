/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      // Specify domains for external images (update based on your needs)
      domains: ['example.com', 'images.unsplash.com', 'cdn.yoursite.com'],
  
      // Enable WebP and AVIF formats for better optimization
      formats: ['image/avif', 'image/webp'],
  
      // Allow device sizes for responsive images (optional)
      deviceSizes: [320, 420, 768, 1024, 1200, 1600],
  
      // Define allowed image sizes (optional)
      imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  
      // Allow SVG images to be used safely
      dangerouslyAllowSVG: true,
  
      // Disable image optimization in development mode for faster build times (optional)
      unoptimized: process.env.NODE_ENV === 'development',
    },
  
    // Enable React strict mode
    reactStrictMode: true,
  
    // Enable SWC minifier for better performance
    swcMinify: true,
  
    // Top-level optimizeFonts option
    optimizeFonts: true, // This is no longer experimental, move to top level
  
    // Additional experimental features (optional, if any)
    experimental: {
      optimizeCss: true, // Still available in the experimental section
    },
  };
  
  export default nextConfig;
  