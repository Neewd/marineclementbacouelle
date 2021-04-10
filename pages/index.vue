<template>
  <div>

    <div v-if="authorized">
      <div class="relative flex justify-center items-center h-screen bg-center bg-cover bg-no-repeat"
            ref="heroDiv">
        <transition 
          enter-active-class="transform transition duration-500 ease-in"
          leave-active-class="transform transition duration-500 ease-out"
          enter-class="opacity-0 -translate-y-8"
          enter-to-class="opacity-100 translate-y-0"
          leave-class="opacity-100 translate-y-0"
          leave-to-class="opacity-0 -translate-y-8">
          <div v-if="saveOurDateVisible">
            <img 
              src="img/ecriture.png" 
              class="pt-64 z-50" 
              alt="Sigle Marine + Clément sauve la date pour le 16 Juillet 2022">  
          </div>
        </transition>
      </div>

      <div class="w-full bg-white flex lg:py-24 lg:px-32 p-8">
        <div class="">
          <h1 class="text-center text-3xl mb-4 font-didot uppercase text-beige-200">Notre histoire</h1>
          <p class="lg:px-64 px-8 text-justify text-beige-200">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus, provident. Officiis quos distinctio sint vitae earum harum dolor ut possimus sunt. Dignissimos laborum aut eligendi debitis omnis fugiat necessitatibus maxime.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus, provident. Officiis quos distinctio sint vitae earum harum dolor ut possimus sunt. Dignissimos laborum aut eligendi debitis omnis fugiat necessitatibus maxime.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus, provident. Officiis quos distinctio sint vitae earum harum dolor ut possimus sunt. Dignissimos laborum aut eligendi debitis omnis fugiat necessitatibus maxime.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus, provident. Officiis quos distinctio sint vitae earum harum dolor ut possimus sunt. Dignissimos laborum aut eligendi debitis omnis fugiat necessitatibus maxime.
          
          </p>
        </div>
      </div>

      <intersect @enter="enterSecondHero()" @leave="leaveSecondHero()">
        <div class="lg:px-96 lg:py-16 w-full grid lg:grid-cols-12 grid-cols-6 gap-4 p-8 bg-beige text-white font-didot"
            v-if="countdownToWeddingDate">
            <div class="flex flex-col items-center col-start-1 col-span-3 lg:col-start-2 lg:col-span-2"
                v-if="countdownToWeddingDate.months">
                <span class="text-8xl">
                  {{ countdownToWeddingDate.months | putZeroBefore }}
                </span>
                <span>
                  mois
                </span>
            </div>
            <div class="flex flex-col items-center col-span-3 lg:col-span-2">
                <span class="text-8xl">
                  {{ countdownToWeddingDate.days | putZeroBefore }}
                </span>
                <span>
                  jours
                </span>
            </div>
            <div class="flex flex-col items-center col-span-3 lg:col-span-2">
                <span class="text-8xl">
                  {{ countdownToWeddingDate.hours | putZeroBefore }}
                </span>
                <span>
                  heures
                </span>
            </div>
            <div class="flex flex-col items-center col-span-3 lg:col-span-2">
                <span class="text-8xl">
                  {{ countdownToWeddingDate.minutes | putZeroBefore }}
                </span>
                <span>
                  minutes
                </span>
            </div>
            <div class="flex flex-col items-center col-start-2 col-span-4 lg:col-span-2">
                <span class="text-8xl">
                  {{ countdownToWeddingDate.seconds | putZeroBefore }}
                </span>
                <span>
                  secondes
                </span>
            </div>
        </div>
      </intersect>

      <div class="relative flex justify-center items-center h-72 bg-hero-nous-2 bg-center bg-cover bg-no-repeat"></div>

      <div class="lg:p-8 p-6 flex lg:flex-row flex-col">
        <div class="bg-beige-200 w-full lg:w-1/3 lg:h-96 h-64 flex justify-center items-center">
          <h1 class="font-didot uppercase text-4xl lg:text-6xl text-white">
            Lieu, <br> 
            <span class="relative">
              programme <span class="text-beige text-6xl lg:text-8xl absolute bottom-0"> & </span>
            </span>
            <br> hébergement
          </h1> 
        </div>
        <div class="lg:w-2/3  flex lg:flex-row flex-col py-6">
            <div class="flex-1 flex justify-center items-center flex-col mb-6">
              <svg class="w-24 h-24 text-beige-200 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
              <p class="text-beige-500 text-center">
                Domaine de la chaux <br>
                Alligny en Morvan <br>
                Bourgogne
              </p>
            </div>
            <div class="flex justify-center items-center flex-col flex-1 mb-6">
              <svg class="w-24 h-24 text-beige-200 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
              <p class="text-beige-500 text-center">
                Cérémonie, cocktail, <br>
                repas et brunch du lendemain <br>
                sur place
              </p>
            </div>
            <div class="flex justify-center items-center flex-col flex-1 mb-6">
              <svg class="w-24 h-24 text-beige-200 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>
              <p class="text-beige-500 text-center">
                60 couchages sur place, <br>
                nous contacter <br>
                pour plus d'informations
              </p>
            </div>
        </div>
      </div>

      <div>
        <GmapMap
          class="h-96"
          :center="{lat:47.22451496121833, lng: 4.139397474911592}"
          :zoom="15"
          :options="options"
        >
        </GmapMap>
      </div>

      <div class="bg-beige-800">
        <div class="max-w-7xl mx-auto py-12 px-4 divide-y-2 divide-beige sm:px-6 lg:py-16 lg:px-8">
          <h2 class="text-3xl text-beige-500 font-saonara sm:text-4xl text-white">
            Les questions que vous allez nous poser...
          </h2>
          <div class="mt-6">
            <dl class="space-y-8 divide-y divide-gray-200">
              <div class="pt-6 md:grid md:grid-cols-12 md:gap-8">
                <dt class="text-base font-medium text-beige-200 md:col-span-5">
                  Comment se rendre sur place ?
                </dt>
                <dd class="mt-2 md:mt-0 md:col-span-7">
                  <p class="text-base text-beige-500">
                    Le plus simple est de venir en <b>voiture</b>, le lieu n'est pas accessible, ni en montgolfière, ni en deltaplane.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse corporis repudiandae non cumque consequuntur molestiae facere quam tempore quae eaque consequatur perferendis similique nihil, vero dolores, reiciendis expedita nam ea.
                  </p>
                </dd>
              </div>
            </dl>
          </div>

          <div class="mt-6">
            <dl class="space-y-8 divide-y divide-gray-200">
              <div class="pt-6 md:grid md:grid-cols-12 md:gap-8">
                <dt class="text-base font-medium text-beige-200 md:col-span-5">
                  Où dormir ?
                </dt>
                <dd class="mt-2 md:mt-0 md:col-span-7">
                  <p class="text-base text-beige-500">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse repellat officiis id ducimus debitis doloremque vitae velit neque! Porro, cupiditate amet. Dignissimos blanditiis atque eligendi ipsam doloribus quas. Facere, id.
                  </p>
                </dd>
              </div>
            </dl>
          </div>

          <div class="mt-6">
            <dl class="space-y-8 divide-y divide-gray-200">
              <div class="pt-6 md:grid md:grid-cols-12 md:gap-8">
                <dt class="text-base font-medium text-beige-200 md:col-span-5">
                  Quel sera le programme du week-end ?
                </dt>
                <dd class="mt-2 md:mt-0 md:col-span-7">
                  <p class="text-base text-beige-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse corporis repudiandae non cumque consequuntur molestiae facere quam tempore quae eaque consequatur perferendis similique nihil, vero dolores, reiciendis expedita nam ea.
                  </p>
                </dd>
              </div>
            </dl>
          </div>

          <div class="mt-6">
            <dl class="space-y-8 divide-y divide-gray-200">
              <div class="pt-6 md:grid md:grid-cols-12 md:gap-8">
                <dt class="text-base font-medium text-beige-200 md:col-span-5">
                  Et si on veut vous faire un cadeau ?
                </dt>
                <dd class="mt-2 md:mt-0 md:col-span-7">
                  <p class="text-base text-beige-500">
                    Le plus simple est de venir faire la fête avec nous,
                  </p>
                </dd>
              </div>

            </dl>
          </div>
        </div>
      </div>

      <footer class="bg-white">
        <div class="max-w-7xl mx-auto py-4 px-4 sm:px-6 flex justify-center items-center lg:px-8">
          <div class="lg:mt-8 md:mt-0 md:order-1">
            <p class="text-center text-base text-beige-500">
              &copy; 2021 - Fait avec amour par Marine & Clément 
            </p>
          </div>
        </div>
      </footer>
    </div>

    <div v-else
      class="h-screen w-screen flex justify-center items-center bg-beige-800">
      <div>
        <h1 class="font-didot uppercase font-extrabold text-3xl mb-8">
          Espace réservé
        </h1>
        <div>
          <div class="mt-1">
            <input v-model="inputPassword" v-on:keyup="validatePassword" type="password" name="password" id="password" class="mb-4 shadow-sm focus:ring-beige-500 focus:border-beige-500 block w-full sm:text-sm border-gray-300 rounded-md" placeholder="On vous aime !" aria-describedby="password-description">
          </div>
          <div v-if="wrongPassword" class="mb-4 -mt-2">
            Mauvais mot de passe
          </div>
        </div>

        <button @click="enterInRestrictedArea" type="button" class="w-full justify-center text-center inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-beige-200 hover:bg-beige-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-beige-500">
          Entrer
        </button>
      </div>
    </div>
  </div>

</template>

<script lang="ts">
import Vue from 'vue'
import Intersect from 'vue-intersect'
import countdown from 'countdown'

export default Vue.extend({
  components: { Intersect },
  data() {
    return {
      authorized: false,
      imageLocation: "/img/nous.jpg",
      password: "Show2022",
      inputPassword: '',
      saveOurDateVisible: false,
      options: {
        streetViewControl: false,
        fullscreenControl: false,
        zoomControl: true,
        mapTypeControl: false,
        styles: [
{
  "elementType": "geometry",
  "stylers": [
    {
      "color": "#e8ded4"
    },
    {
      "lightness": -20
    }
  ]
},
{
  "elementType": "labels.icon",
  "stylers": [
    {
      "visibility": "off"
    }
  ]
},
{
  "elementType": "labels.text.fill",
  "stylers": [
    {
      "color": "#616161"
    }
  ]
},
{
  "elementType": "labels.text.stroke",
  "stylers": [
    {
      "color": "#f5f5f5"
    }
  ]
},
{
  "featureType": "poi",
  "elementType": "geometry",
  "stylers": [
    {
      "color": "#eeeeee"
    }
  ]
},
{
  "featureType": "poi",
  "elementType": "labels.text.fill",
  "stylers": [
    {
      "color": "#757575"
    }
  ]
},
{
  "featureType": "poi.park",
  "elementType": "geometry",
  "stylers": [
    {
      "color": "#ffffff"
    }
  ]
},
{
  "featureType": "poi.park",
  "elementType": "labels.text.fill",
  "stylers": [
    {
      "color": "#9e9e9e"
    }
  ]
},
{
  "featureType": "road",
  "elementType": "geometry",
  "stylers": [
    {
      "color": "#e8ded4"
    },
    {
      "lightness": -15
    }
  ]
},
{
  "featureType": "road.arterial",
  "elementType": "labels",
  "stylers": [
    {
      "visibility": "off"
    }
  ]
},
{
  "featureType": "road.arterial",
  "elementType": "labels.text.fill",
  "stylers": [
    {
      "color": "#757575"
    }
  ]
},
{
  "featureType": "road.highway",
  "elementType": "labels",
  "stylers": [
    {
      "visibility": "off"
    }
  ]
},
{
  "featureType": "road.highway",
  "elementType": "labels.text.fill",
  "stylers": [
    {
      "color": "#616161"
    }
  ]
},
{
  "featureType": "road.local",
  "elementType": "geometry",
  "stylers": [
    {
      "color": "#e8ded4"
    },
    {
      "lightness": 40
    }
  ]
},
{
  "featureType": "road.local",
  "elementType": "labels.text.fill",
  "stylers": [
    {
      "color": "#9e9e9e"
    }
  ]
},
{
  "featureType": "transit.line",
  "elementType": "geometry",
  "stylers": [
    {
      "color": "#e5e5e5"
    }
  ]
},
{
  "featureType": "transit.station",
  "elementType": "geometry",
  "stylers": [
    {
      "color": "#eeeeee"
    }
  ]
},
{
  "featureType": "water",
  "elementType": "geometry",
  "stylers": [
    {
      "color": "#e8ded4"
    },
    {
      "lightness": 45
    }
  ]
},
{
  "featureType": "water",
  "elementType": "labels.text.fill",
  "stylers": [
    {
      "color": "#9e9e9e"
    }
  ]
}
        ]
      },
      weddingDate: new Date('2022/07/16 17:00:00').getTime(),
      countdownToWeddingDate: null,
      wrongPassword: false
    }
  },
  beforeMount() {
    setInterval(this.computeCountdown, 1000)
    if (localStorage.getItem('marineclement-authorized')) {
      this.authorized = true
    }
  },
  mounted() {
    const bgImg = new Image()
    bgImg.onload = () => {
      const heroDiv = this.$refs.heroDiv
      heroDiv.style.backgroundImage = 'url(' + bgImg.src + ')';
      setTimeout(() => {
        this.saveOurDateVisible = true
      }, 250)
    };  
    bgImg.src = this.imageLocation;
    
  },
  methods: {
    enterSecondHero() {
      this.saveOurDateVisible = false
    },

    leaveSecondHero() {
      this.saveOurDateVisible = true
    },

    computeCountdown() {
        this.countdownToWeddingDate = countdown(this.weddingDate, null, ~(countdown.WEEKS | countdown.YEARS));
    },

    enterInRestrictedArea() {
      if (this.inputPassword === this.password) {
        this.wrongPassword = false
        localStorage.setItem("marineclement-authorized", 'true')
        this.authorized = true
        const bgImg = new Image()
        bgImg.onload = () => {
          const heroDiv = this.$refs.heroDiv
          heroDiv.style.backgroundImage = 'url(' + bgImg.src + ')';
          setTimeout(() => {
            this.saveOurDateVisible = true
          }, 250)
        };  
        bgImg.src = this.imageLocation;
      } else {
        this.wrongPassword = true
        this.inputPassword = ''
      }
    },

    validatePassword(event) {
      if (event.keyCode === 13) {
        this.enterInRestrictedArea();
      }  
    }
  },
  filters: {
    putZeroBefore(value) {
      if (value < 10) {
        return '0' + value.toString()
      }
      return value.toString()
    }
  }
})
</script>