import { onMounted } from 'vue';
import { useLayoutStore } from '@/stores/layout';

export function usePageLayout(options) {
  const layoutStore = useLayoutStore();

  // Set layout immediately when the component using this composable is set up
  // or use onMounted if we want to ensure it happens after navigation
  // Using immediate execution is usually fine for route changes in Vue 3 setup
  layoutStore.setLayout(options);

  // Optional: Reset on unmount? 
  // Usually better to let the next page set its own layout, 
  // but we could set a default here if needed.
}
