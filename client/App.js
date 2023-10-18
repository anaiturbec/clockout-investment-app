import { HomeScreen } from './screens';
import StackNavigation from './components/navigation/StackNavigation';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const client = new QueryClient({
  defaultOptions: { queries: { retry: 2 } },
});

export default function App() {
  return (
    <QueryClientProvider client={client}>
      <StackNavigation>
        <HomeScreen />
      </StackNavigation>
    </QueryClientProvider>
  );
}
