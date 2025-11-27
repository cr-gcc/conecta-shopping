import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useLayoutStore = defineStore('layout', () => {
  // Hero State
  const heroVisible = ref(false);
  const heroType = ref('none'); // 'image', 'color', 'none'
  const heroValue = ref(''); // URL or Color Hex
  const heroTitle = ref('');

  // Header State
  const headerStyle = ref('white'); // 'white', 'transparent', 'color'
  const headerColor = ref(''); // Custom color if needed

  // Footer State
  const footerVisible = ref(true);

  function setLayout(options) {
    heroVisible.value = options.heroVisible ?? false;
    heroType.value = options.heroType ?? 'none';
    heroValue.value = options.heroValue ?? '';
    heroTitle.value = options.heroTitle ?? '';
    
    headerStyle.value = options.headerStyle ?? 'white';
    headerColor.value = options.headerColor ?? '';

    footerVisible.value = options.footerVisible ?? true;
  }

  return {
    heroVisible,
    heroType,
    heroValue,
    heroTitle,
    headerStyle,
    headerColor,
    footerVisible,
    setLayout
  };
});
