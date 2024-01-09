/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname:'code3035.s3.amazonaws.com',

            },
            {
                protocol: 'https',
                hostname:'cdn-icons-png.flaticon.com',
            }
        ]
    }
}

module.exports = nextConfig
