import React from 'react';
import '@rainbow-me/rainbowkit/styles.css';
import {
  getDefaultConfig,
  RainbowKitProvider as RainbowKitProviderBase,
  darkTheme,
} from '@rainbow-me/rainbowkit';
import { WagmiProvider } from 'wagmi';
import {
  mainnet,
  polygon,
  optimism,
  arbitrum,
  base,
  sepolia,
} from 'wagmi/chains';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Configure chains & transports
const config = getDefaultConfig({
  appName: 'Impala DeFi',
  projectId: 'impala-defi-app', // Get your own Project ID from https://cloud.walletconnect.com
  chains: [mainnet, polygon, optimism, arbitrum, base, sepolia],
  ssr: false, // If your dApp uses server-side rendering (SSR)
});

const queryClient = new QueryClient();

interface RainbowKitProviderProps {
  children: React.ReactNode;
}

export const RainbowKitProvider: React.FC<RainbowKitProviderProps> = ({
  children,
}) => {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProviderBase
          theme={darkTheme({
            accentColor: '#3b82f6', // blue-500
            accentColorForeground: 'white',
            borderRadius: 'medium',
            fontStack: 'system',
            overlayBlur: 'small',
          })}
          modalSize="compact"
        >
          {children}
        </RainbowKitProviderBase>
      </QueryClientProvider>
    </WagmiProvider>
  );
};

// Note: For production use, you need to:
// 1. Go to https://cloud.walletconnect.com and create a project
// 2. Get your Project ID
// 3. Replace 'impala-defi-app' with your actual Project ID
// 4. Add your app's URL to the Allowed Domains in WalletConnect Cloud

export default RainbowKitProvider;