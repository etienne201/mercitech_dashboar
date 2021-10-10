<template>
  <!-- give the sidebar z-50 class so its higher than the navbar if you want to see the logo -->
  <!-- you will need to add a little "X" button next to the logo in order to close it though -->
  <div
    class="fixed z-30 w-1/2 h-screen bg-black border-r  md:w-1/3 lg:w-64 md:top-0 md:left-0 lg:block"
    :class="sideBarOpen ? '' : 'hidden'"
    id="main-nav"
  >
    <div class="flex items-center w-ful h-21 px-4 mb-8">
    <img src="data:image/png;base64,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
    RU5ErkJggg==" alt="" class="ml-9 mt-5 w-20 h-20 ">
      
    </div>
    <div class="px-4 mt-5">
      <div
        class="flex items-center w-full h-10 pl-4 text-blue-400 rounded-lg cursor-pointer  hover:bg-gray-600 active"
      >
        <svg class="w-6 h-6 mr-2 fill-current" viewBox="0 0 20 20">
          <path
            d="M18.121,9.88l-7.832-7.836c-0.155-0.158-0.428-0.155-0.584,0L1.842,9.913c-0.262,0.263-0.073,0.705,0.292,0.705h2.069v7.042c0,0.227,0.187,0.414,0.414,0.414h3.725c0.228,0,0.414-0.188,0.414-0.414v-3.313h2.483v3.313c0,0.227,0.187,0.414,0.413,0.414h3.726c0.229,0,0.414-0.188,0.414-0.414v-7.042h2.068h0.004C18.331,10.617,18.389,10.146,18.121,9.88 M14.963,17.245h-2.896v-3.313c0-0.229-0.186-0.415-0.414-0.415H8.342c-0.228,0-0.414,0.187-0.414,0.415v3.313H5.032v-6.628h9.931V17.245z M3.133,9.79l6.864-6.868l6.867,6.868H3.133z"
          ></path>
        </svg>
        <router-link to="/admin/dashboard" class="text-gray-100">Dashboard</router-link> 
        
      </div>
           <div
        class="flex items-center w-full h-10 pl-4 text-blue-400 rounded-lg cursor-pointer  hover:bg-gray-600"
      >
          <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mr-2 fill-current" viewBox="0 0 20 20">
           <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
          </svg>
         <router-link to="/admin/dashboard/products" class="text-gray-100">Products</router-link> 
      </div>
      <div
        class="flex items-center w-full h-10 pl-4 text-blue-400 rounded-lg cursor-pointer  hover:bg-gray-600"
      >
        
     <svg class="w-6 h-6 mr-2 fill-current" viewBox="0 0 20 20">
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
          />
        </svg>
        <router-link to="/admin/dashboard/sales" class="text-gray-100">Sales</router-link> 
        
      </div>
  

      <div
        class="flex items-center w-full h-10 pl-4 text-blue-400 rounded-lg cursor-pointer  hover:bg-gray-600"
      >
        <svg class="w-6 h-6 mr-2 fill-current" viewBox="0 0 20 20">
          <path
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
        <router-link to="/admin/dashboard/Menbers" class="text-gray-100">Menber</router-link> 
      </div>
      <div
        class="flex items-center w-full h-10 pl-4 text-blue-400 rounded-lg cursor-pointer  hover:bg-gray-600"
      >
        <svg class="w-6 h-6 mr-2 fill-current" viewBox="0 0 20 20">
          <path
            d="M16.557,4.467h-1.64v-0.82c0-0.225-0.183-0.41-0.409-0.41c-0.226,0-0.41,0.185-0.41,0.41v0.82H5.901v-0.82c0-0.225-0.185-0.41-0.41-0.41c-0.226,0-0.41,0.185-0.41,0.41v0.82H3.442c-0.904,0-1.64,0.735-1.64,1.639v9.017c0,0.904,0.736,1.64,1.64,1.64h13.114c0.904,0,1.64-0.735,1.64-1.64V6.106C18.196,5.203,17.461,4.467,16.557,4.467 M17.377,15.123c0,0.453-0.366,0.819-0.82,0.819H3.442c-0.453,0-0.82-0.366-0.82-0.819V8.976h14.754V15.123z M17.377,8.156H2.623V6.106c0-0.453,0.367-0.82,0.82-0.82h1.639v1.23c0,0.225,0.184,0.41,0.41,0.41c0.225,0,0.41-0.185,0.41-0.41v-1.23h8.196v1.23c0,0.225,0.185,0.41,0.41,0.41c0.227,0,0.409-0.185,0.409-0.41v-1.23h1.64c0.454,0,0.82,0.367,0.82,0.82V8.156z"
          ></path>
        </svg>
        <router-link to="/admin/dashboard/analysis" class="text-gray-100">Analyiss</router-link> 
      
      </div>
    </div>
    <div class="px-4 mt-10">
      <div
        class="flex items-center w-full h-10 pl-4 text-blue-400 rounded-lg cursor-pointer  hover:bg-gray-600"
      >
        <svg class="w-6 h-6 mr-2 fill-current" viewBox="0 0 20 20">
          <path
            d="M17.498,11.697c-0.453-0.453-0.704-1.055-0.704-1.697c0-0.642,0.251-1.244,0.704-1.697c0.069-0.071,0.15-0.141,0.257-0.22c0.127-0.097,0.181-0.262,0.137-0.417c-0.164-0.558-0.388-1.093-0.662-1.597c-0.075-0.141-0.231-0.22-0.391-0.199c-0.13,0.02-0.238,0.027-0.336,0.027c-1.325,0-2.401-1.076-2.401-2.4c0-0.099,0.008-0.207,0.027-0.336c0.021-0.158-0.059-0.316-0.199-0.391c-0.503-0.274-1.039-0.498-1.597-0.662c-0.154-0.044-0.32,0.01-0.416,0.137c-0.079,0.106-0.148,0.188-0.22,0.257C11.244,2.956,10.643,3.207,10,3.207c-0.642,0-1.244-0.25-1.697-0.704c-0.071-0.069-0.141-0.15-0.22-0.257C7.987,2.119,7.821,2.065,7.667,2.109C7.109,2.275,6.571,2.497,6.07,2.771C5.929,2.846,5.85,3.004,5.871,3.162c0.02,0.129,0.027,0.237,0.027,0.336c0,1.325-1.076,2.4-2.401,2.4c-0.098,0-0.206-0.007-0.335-0.027C3.001,5.851,2.845,5.929,2.77,6.07C2.496,6.572,2.274,7.109,2.108,7.667c-0.044,0.154,0.01,0.32,0.137,0.417c0.106,0.079,0.187,0.148,0.256,0.22c0.938,0.936,0.938,2.458,0,3.394c-0.069,0.072-0.15,0.141-0.256,0.221c-0.127,0.096-0.181,0.262-0.137,0.416c0.166,0.557,0.388,1.096,0.662,1.596c0.075,0.143,0.231,0.221,0.392,0.199c0.129-0.02,0.237-0.027,0.335-0.027c1.325,0,2.401,1.076,2.401,2.402c0,0.098-0.007,0.205-0.027,0.334C5.85,16.996,5.929,17.154,6.07,17.23c0.501,0.273,1.04,0.496,1.597,0.66c0.154,0.047,0.32-0.008,0.417-0.137c0.079-0.105,0.148-0.186,0.22-0.256c0.454-0.453,1.055-0.703,1.697-0.703c0.643,0,1.244,0.25,1.697,0.703c0.071,0.07,0.141,0.15,0.22,0.256c0.073,0.098,0.188,0.152,0.307,0.152c0.036,0,0.073-0.004,0.109-0.016c0.558-0.164,1.096-0.387,1.597-0.66c0.141-0.076,0.22-0.234,0.199-0.393c-0.02-0.129-0.027-0.236-0.027-0.334c0-1.326,1.076-2.402,2.401-2.402c0.098,0,0.206,0.008,0.336,0.027c0.159,0.021,0.315-0.057,0.391-0.199c0.274-0.5,0.496-1.039,0.662-1.596c0.044-0.154-0.01-0.32-0.137-0.416C17.648,11.838,17.567,11.77,17.498,11.697 M16.671,13.334c-0.059-0.002-0.114-0.002-0.168-0.002c-1.749,0-3.173,1.422-3.173,3.172c0,0.053,0.002,0.109,0.004,0.166c-0.312,0.158-0.64,0.295-0.976,0.406c-0.039-0.045-0.077-0.086-0.115-0.123c-0.601-0.6-1.396-0.93-2.243-0.93s-1.643,0.33-2.243,0.93c-0.039,0.037-0.077,0.078-0.116,0.123c-0.336-0.111-0.664-0.248-0.976-0.406c0.002-0.057,0.004-0.113,0.004-0.166c0-1.75-1.423-3.172-3.172-3.172c-0.054,0-0.11,0-0.168,0.002c-0.158-0.312-0.293-0.639-0.405-0.975c0.044-0.039,0.085-0.078,0.124-0.115c1.236-1.236,1.236-3.25,0-4.486C3.009,7.719,2.969,7.68,2.924,7.642c0.112-0.336,0.247-0.664,0.405-0.976C3.387,6.668,3.443,6.67,3.497,6.67c1.75,0,3.172-1.423,3.172-3.172c0-0.054-0.002-0.11-0.004-0.168c0.312-0.158,0.64-0.293,0.976-0.405C7.68,2.969,7.719,3.01,7.757,3.048c0.6,0.6,1.396,0.93,2.243,0.93s1.643-0.33,2.243-0.93c0.038-0.039,0.076-0.079,0.115-0.123c0.336,0.112,0.663,0.247,0.976,0.405c-0.002,0.058-0.004,0.114-0.004,0.168c0,1.749,1.424,3.172,3.173,3.172c0.054,0,0.109-0.002,0.168-0.004c0.158,0.312,0.293,0.64,0.405,0.976c-0.045,0.038-0.086,0.077-0.124,0.116c-0.6,0.6-0.93,1.396-0.93,2.242c0,0.847,0.33,1.645,0.93,2.244c0.038,0.037,0.079,0.076,0.124,0.115C16.964,12.695,16.829,13.021,16.671,13.334 M10,5.417c-2.528,0-4.584,2.056-4.584,4.583c0,2.529,2.056,4.584,4.584,4.584s4.584-2.055,4.584-4.584C14.584,7.472,12.528,5.417,10,5.417 M10,13.812c-2.102,0-3.812-1.709-3.812-3.812c0-2.102,1.71-3.812,3.812-3.812c2.102,0,3.812,1.71,3.812,3.812C13.812,12.104,12.102,13.812,10,13.812"
          ></path>
        </svg>
        <router-link to="/admin/dashboard/settings" class="text-gray-100">Settings</router-link> 
      </div>
    </div>
  </div>
  
</template>

<script>
import {mapState} from 'vuex';

export default {
  name: 'Sidebar',
 
  computed: {
    ...mapState(['sideBarOpen']),
  },
};
</script>
