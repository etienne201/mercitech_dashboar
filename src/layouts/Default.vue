<template>
  <div class="leading-normal tracking-normal" id="main-body home">
    <div class="flex flex-wrap">
      <Sidebar />
      <div
        class="w-full min-h-screen pl-0 bg-gray-100 lg:pl-64"
        :class="sideBarOpen ? 'overlay' : ''"
        id="main-content"
      >
        <Navbar />
            <!-- breadcrumb -->
    <nav class="mb-6 text-sm font-semibold" aria-label="Breadcrumb ">
      <ol class="flex p-0 list-none mt-5 ml-5">
        <li class="flex items-center text-blue-500">
          <a href="#" class="text-gray-700">Home</a>
          <svg
            class="w-3 h-3 mx-3 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
          >
            <path
              d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"
            />
          </svg>
        </li>
        <li class="flex items-center">
          <a href="#" class="text-gray-600">Dashboard</a>
        </li>
      </ol>
    </nav>
    <!-- breadcrumb end -->

    <div class="items-center justify-between mb-6 lg:flex ml-5 " id="greeting">
      <p class="mb-2 text-2xl font-semibold lg:mb-0">
       , Joe Emako!
      </p>
      <button
        class="px-6 py-2 font-semibold text-white bg-blue-500 rounded-lg shadow  hover:bg-blue-600 focus:outline-none mr-5"
      >
        View Logs
      </button>
    </div>
        <div class="p-6 mb-20 bg-gray-100">
          <router-view />
        </div>
        
        <Footer />
      </div>
    </div>
  </div>
</template>

<script>
import{mapState} from 'vuex'
 
import Sidebar from '@/components/Sidebar';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default {

  name: 'Dashboard',
  computed: {
    ...mapState(['sideBarOpen']),
  },
 
  components: {
    Sidebar,
    Navbar,
    Footer,
  },
  
};
</script>
