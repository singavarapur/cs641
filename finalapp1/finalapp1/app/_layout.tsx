import { ClerkProvider, ClerkLoaded } from '@clerk/clerk-expo'
import { Slot } from 'expo-router'
import tokenCache from '../utils/tokenCache.util'
import Stack from 'expo-router';
import AuthRoutesLayout from './(auth)/sign-in';



const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY;
console.log(process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY)
if (!publishableKey) {
  throw new Error('Missing EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY');
}

export default function RootLayout() {
  return (   
    <ClerkProvider publishableKey={publishableKey} tokenCache={tokenCache}>
      <ClerkLoaded>
        <Slot />
      </ClerkLoaded>
    </ClerkProvider>

    


  );
}
