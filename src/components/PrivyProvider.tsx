import React from 'react';
import { PrivyProvider as PrivyProviderBase } from '@privy-io/react-auth';
import { sepolia, mainnet, polygon, optimism, arbitrum, base } from 'wagmi/chains';
import { WagmiProvider } from 'wagmi';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createConfig } from '@privy-io/wagmi';
import { http } from 'viem';

// Create a wagmi config with Privy
const wagmiConfig = createConfig({
  chains: [mainnet, sepolia, polygon, optimism, arbitrum, base],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
    [polygon.id]: http(),
    [optimism.id]: http(),
    [arbitrum.id]: http(),
    [base.id]: http(),
  },
});

const queryClient = new QueryClient();

interface PrivyProviderProps {
  children: React.ReactNode;
}

export const PrivyProvider: React.FC<PrivyProviderProps> = ({ children }) => {
  return (
    <PrivyProviderBase
      appId={import.meta.env.VITE_PRIVY_APP_ID || 'placeholder-app-id'}
      config={{
        // Customize Privy's appearance in your app
        appearance: {
          theme: 'dark',
          accentColor: '#3b82f6',
          logo: '/vite.svg',
        },
        // Create embedded wallets for users who don't have a wallet
        embeddedWallets: {
          ethereum: {
            createOnLogin: 'users-without-wallets',
          },
        },
        // Configure supported login methods
        loginMethods: ['email', 'wallet', 'google', 'twitter', 'discord'],
        // Set default chain
        defaultChain: sepolia,
        // Enable multi-wallet support
        supportedChains: [mainnet, sepolia, polygon, optimism, arbitrum, base],
      }}
    >
      <WagmiProvider config={wagmiConfig}>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </WagmiProvider>
    </PrivyProviderBase>
  );
};

export default PrivyProvider;
