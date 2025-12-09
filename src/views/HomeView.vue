<template>
  <div class="py-4 px-36 mt-10">
    <Introduction :title="title" :message="msg"/>
    <div class="mb-10">
      <div role="tablist" class="tabs tabs-lift tabs-lg justify-center">
        <input type="radio" name="my_tabs_3" class="tab" aria-label="Premios" checked="checked"/>
        <div class="tab-content bg-base-100 border-base-300 p-6">
          <p class="text-gray-500 text-justify">Los premios son recompensas que se otorgan a los miembros por su lealtad y participación en la comunidad. Cada premio tiene un valor en puntos y una descripción. A continuación se muestra el ranking de los premios más valorados.</p>
          <div class="overflow-x-auto">
            <table class="table">
              <!-- head -->
              <thead>
                <tr class="text-rose-600">
                  <th>#</th>
                  <th>Imagen</th>
                  <th>Premio</th>
                  <th>Puntos</th>
                  <th>Información</th>
                </tr>
              </thead>
              <tbody>
                <!-- row 1 -->
                <tr class="hover:bg-rose-400 hover:text-white hover:font-bold text-rose-400">
                  <th>1</th>
                  <td>
                    <img src="https://cdn5.coppel.com/pm/2095323-1.jpg" class="h-16" alt="iPhone 17 Pro Max">
                  </td>
                  <td>iPhone 17 Pro Max</td>
                  <td>1000</td>
                  <td>
                    <button class="btn btn-xs">Ver más</button>
                  </td>
                </tr>
                <!-- row 2 -->
                <tr class="hover:bg-rose-400 hover:text-white hover:font-bold text-rose-400">
                  <th>2</th>
                  <td>
                    <img src="https://m.media-amazon.com/images/I/71shKXvCIEL._AC_SL1500_.jpg" class="h-16" alt="Asus ROG Strix G18">
                  </td>
                  <td>Asus ROG Strix G18</td>
                  <td>2000</td>
                  <td>
                    <button class="btn btn-xs">Ver más</button>
                  </td>
                </tr>
                <!-- row 3 -->
                <tr class="hover:bg-rose-400 hover:text-white hover:font-bold text-rose-400">
                  <th>3</th>
                  <td>
                    <img src="https://m.media-amazon.com/images/I/612juLR95TL._AC_SX679_.jpg" class="h-16" alt="Garmin Venu 4">
                  </td>
                  <td>Garmin Venu 4 </td>
                  <td>1850</td>
                  <td>
                    <button class="btn btn-xs">Ver más</button>
                  </td>
                </tr>
                <!-- row 4 -->
                <tr class="hover:bg-rose-400 hover:text-white hover:font-bold text-rose-400">
                  <th>4</th>
                  <td>
                    <img src="https://cdn5.coppel.com/pm/2866823-1.jpg" class="h-16" alt="Nintendo Switch 2">
                  </td>
                  <td>Nintendo Switch 2</td>
                  <td>4600</td>
                  <td>
                    <button class="btn btn-xs">Ver más</button>
                  </td>
                </tr>
                <!-- row 5 -->
                <tr class="hover:bg-rose-400 hover:text-white hover:font-bold text-rose-400">
                  <th>5</th>
                  <td>
                    <img src="https://alubike.com.mx/cdn/shop/files/310381_1.jpg" class="h-16" alt="Bicicleta de montaña Alubike SM">
                  </td>
                  <td>Bicicleta de montaña Alubike SM</td>
                  <td>2300</td>
                  <td>
                    <button class="btn btn-xs">Ver más</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>

        <input type="radio" name="my_tabs_3" class="tab" aria-label="Promociones" checked="checked" />
        <div class="tab-content bg-base-100 border-base-300 p-6">Tab content 2</div>

        <input type="radio" name="my_tabs_3" class="tab" aria-label="Productos" />
        <div class="tab-content bg-base-100 border-base-300 p-6">Tab content 3</div>

        <input type="radio" name="my_tabs_3" class="tab" aria-label="Miembros" />
        <div class="tab-content bg-base-100 border-base-300 p-6">Tab content 4</div>
      </div>
    </div>
  </div>
</template>
<script setup>
  import { usePageLayout } from '@/composables/usePageLayout';
  import Introduction from '@/components/IntroductionComponent.vue';

  const title = 'Bienvenido a Conecta';
  const msg = 'A continuación encontrarás el ranking de los miembros con más estrellas y los mejores premios, promociones y productos que tenemos para ti';

  usePageLayout({
    heroVisible: true,
    heroType: 'image',
    heroValue: '/conecta/img/banners/banner-home.jpg',
    heroTitle: '', 
    headerStyle: 'white',
    footerVisible: true
  });
</script>