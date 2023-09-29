<template>
  <div class="sticky top-0">
    <nav class="bg-black flex flex-row">
        <div>
            <img class="p-2 w-20 2xl:w-32 rounded-full" src="http://www.radiomoroleon.mx/inicio/images/banners/logo_inicio.jpg" alt="logo_inicio">
        </div>
        <div class="text-[9px] md:text-[13px] 2xl:text-[20px] text-gray-50 font-bold  md:grid md:grid-cols-4 md:gap-4 md:flex md:grow md:items-center md:justify-items-center hidden">
          <div>EMPRESA</div>
          <div>GALERÍA</div>
          <div>CONTACTO</div>
          <div class="bg-rose-600 grow container h-full flex grow items-center justify-items-center">
            <div class="grow text-center">EN VIVO</div>
          </div>
        </div>
        <div class="flex grow place-content-end items-center md:hidden">
          <div class="text-[9px] md:text-[13px] text-gray-50 font-bold bg-rose-600 h-full flex items-center px-4">
            <div class="grow text-center">EN VIVO</div>
          </div>
          <div class="bg-blue-500 h-full flex items-center px-4">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-7 fill-white stroke-2">
              <path fill-rule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clip-rule="evenodd" />
            </svg>
          </div>
        </div>
    </nav>
  </div>
</template>

<script>
export default {
    name: 'Navbar'
}
</script>

<style>

</style>