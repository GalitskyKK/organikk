'use client';

import { ConvexReactClient } from 'convex/react';
import { ConvexProviderWithClerk } from 'convex/react-clerk';
import { ClerkProvider, useAuth } from '@clerk/nextjs';

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

const publishableKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;
if (!publishableKey) {
  throw new Error('Clerk publishable key is not set');
}

export const ConvexClientProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ClerkProvider publishableKey={publishableKey} afterSignOutUrl={'/'}>
      <ConvexProviderWithClerk useAuth={useAuth} client={convex}>
        {children}
      </ConvexProviderWithClerk>
    </ClerkProvider>
  );
};
