import { registerRootComponent } from 'expo';
import ShopProvider from './contexts/shop.context';
import App from './App';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately

function Root() {
  return (
    <ShopProvider>
      <App />
    </ShopProvider>
  );
}

registerRootComponent(Root);