import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.leo.app',
  appName: 'leo',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
