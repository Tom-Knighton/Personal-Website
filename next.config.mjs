// @ts-check
 
/**
 * @type {import('next').NextConfig}
 */
import { withPayload } from "@payloadcms/next/withPayload";

const nextConfig = {
  /* config options here */
  images: {
    domains: ['tomk.online'],
  }
};

export default withPayload(nextConfig);
