<template>
  <div>

    <div v-if="authorized || authorizedFriday">
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
            Notre histoire a commencé à la fin de l'été 2013, nous étions alors étudiants dans des branches qui ne se rencontrent habituellement jamais. C’est sans compter ce petit coup de pouce du destin, nous étions tous les deux locataires d'une villa de 20m² sur les hauteurs de Pantin. 
            Depuis ce temps-là, nous avons vécu les 400 coups, en France et à l’étranger mais toujours étape par étape. Premièrement nous avons décidé d'emménager ensemble, dans un appartement un peu plus grand à Tolbiac alias Chinatown, où nous sommes restés 5 ans et que bon nombre d'entre vous ont déjà visité. Même si la vie de locataire était très attrayante nous en avions un peu marre de "jeter notre argent par les fenêtres" et nous avons alors décidé d'acheter notre premier appartement, ensemble à Issy-les-Moulineaux, alias Issy-les-moules. Evidemment avec le plus de travaux possible, histoire de tout casser et de tout refaire à notre image, enfin surtout à l'image de Marine, car on ne va pas se mentir, Clément a surtout approuvé toutes ses idées. 
            Le 23 Décembre 2020 sonna le début d'une nouvelle étape, et quelle étape puisque nous nous sommes fiancés; et si vous êtes sur ce site, c'est que vous êtes conviés à venir faire la fête jusqu’au bout de la nuit avec nous le 16 Juillet 2022 à Alligny-en-Morvan, Bourgogne. 
            On vous embrasse
          </p>
        </div>
      </div>

      <intersect @enter="enterSecondHero()" @leave="leaveSecondHero()">
        <div class="lg:px-72 lg:py-16 w-full grid lg:grid-cols-12 grid-cols-6 gap-4 p-8 bg-beige text-white font-didot"
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

      <div class="relative flex justify-center items-center h-72 lg:h-128 bg-hero-nous-2 bg-center bg-cover bg-no-repeat"></div>

      <div class="flex items-center justify-center py-4 bg-beige-200 text-white text-xl font-didot"> 
        <span class="mr-1">
           RSVP :  
        </span> Nous attendons votre réponse avec impatience et nous avons d'ailleurs quelques questions pour vous
        <NuxtLink  class="font-bold underline ml-2" to="/rsvp">ici</NuxtLink>
      </div>

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
              <svg  class="w-24 h-24 text-beige-200 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              <p class="text-beige-500 text-center">
                Répondez nous au plus vite et  <br> au plus tard le <b>1er mai 2022</b>,  <br> après merci d'apporter votre sandwich
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
      <div class="bg-beige-800 flex items-center"
        v-bind:class="{'px-72': authorizedFriday, 'px-32': !authorizedFriday}">
        <div class="text-9xl text-beige font-didot"  v-if="!authorizedFriday">
          15
        </div>
        <div  v-if="!authorizedFriday"
          class="max-w-7xl mx-auto py-12 px-4 divide-y-2 divide-beige sm:px-6 lg:py-24 lg:px-8 -ml-12 text-justify text-beige-500">
          Pour notre day before nous serons ravis de vous <br> avoir avec nous pour (de)stresser avant le grand jour.  <br>
          Vous êtes les bienvenus à partir de 14h. 
        </div>

        <div class="text-9xl text-beige font-didot">
          16
        </div>
        <div class="max-w-7xl mx-auto py-12 px-4 divide-y-2 divide-beige sm:px-6 lg:py-16 lg:px-8 -ml-12 text-justify text-beige-500">
          Cérémonie laïque aux pieds des séquoïas, <br>suivi d'un cocktail
          autour d'un spritz, d'un diner <br> et d'une fête jusqu'au bout de la nuit.
        </div>
        <div class="text-9xl text-beige font-didot">
          17
        </div>
        <div class="max-w-7xl mx-auto py-12 px-4 divide-y-2 divide-beige sm:px-6 lg:py-16 lg:px-8 -ml-12 text-justify text-beige-500">
          Nous serons ravis de vous revoir autour <br>d'un déjeuner sur l'herbe, à partir de 11h. <br>
          Hangover kits en libre service.
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
          <h2 class="text-3xl text-beige-500 font-saonara sm:text-4xl">
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
                   Le plus simple est de venir en <b>voiture</b>. Le lieu n'est accessible, ni en montgolfière, ni en deltaplane. Il est possible cependant de faire une portion en train puis de venir en taxi ou en voiture.
                    Amis parisiens, nous pouvons vous mettre en contact pour du covoiturage si vous n’avez pas de voiture.
                    <br>
                  
                    Un parking est disponible sur place et pourra accueillir toutes les voitures sans souci.
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
                    60 couchages sont pré-réservés sur le lieu du mariage (lits simples, doubles et dortoirs) donc n’hésitez pas à revenir vers nous si vous êtes intéressé. mais évidemment si vous préférez votre propre logement, vous pouvez chercher sur <a class="underline font-bold" target="_blank" href="https://www.airbnb.fr/s/Alligny~en~Morvan--France/homes?tab_id=home_tab&refinement_paths%5B%5D=%2Fhomes&flexible_trip_dates%5B%5D=april&flexible_trip_dates%5B%5D=may&flexible_trip_lengths%5B%5D=weekend_trip&date_picker_type=calendar&checkin=2021-07-16&checkout=2021-07-18&adults=2&source=structured_search_input_header&search_type=unknown&ne_lat=47.298377763882684&ne_lng=4.292738593750016&sw_lat=47.12229522594573&sw_lng=4.018080390625016&zoom=12&search_by_map=true&query=Alligny-en-Morvan%2C%20France&place_id=ChIJr6dk5TYb8kcRIIwQszTOCQQ">ce site</a> ou encore <a class="underline font-bold" target="_blank" href="https://www.booking.com/searchresults.fr.html?aid=397594&label=gog235jc-1DCAEoggI46AdIDVgDaE2IAQGYAQ24AQfIAQzYAQPoAQH4AQKIAgGoAgO4Apjwy4MGwAIB0gIkYjZlODI0YzktNGFjYS00OTczLTk3NmEtZDcyMDhhZTY3ZDFh2AIE4AIB&lang=fr&sid=2218cdea4769770000e7ddd9feec57cb&sb=1&sb_lp=1&src=index&src_elem=sb&error_url=https%3A%2F%2Fwww.booking.com%2Findex.fr.html%3Faid%3D397594%3Blabel%3Dgog235jc-1DCAEoggI46AdIDVgDaE2IAQGYAQ24AQfIAQzYAQPoAQH4AQKIAgGoAgO4Apjwy4MGwAIB0gIkYjZlODI0YzktNGFjYS00OTczLTk3NmEtZDcyMDhhZTY3ZDFh2AIE4AIB%3Bsid%3D2218cdea4769770000e7ddd9feec57cb%3Bsb_price_type%3Dtotal%26%3B&ss=Alligny-en-Morvan%2C+Bourgogne%2C+France&is_ski_area=&checkin_year=2021&checkin_month=7&checkin_monthday=16&checkout_year=2021&checkout_month=7&checkout_monthday=18&group_adults=2&group_children=0&no_rooms=1&b_h4u_keep_filters=&from_sf=1&ss_raw=Alligny-en-mor&ac_position=0&ac_langcode=fr&ac_click_type=b&dest_id=-1407194&dest_type=city&place_id_lat=47.20023&place_id_lon=4.177&search_pageview_id=fc975e0c43a90142&search_selected=true&search_pageview_id=fc975e0c43a90142&ac_suggestion_list_length=3&ac_suggestion_theme_list_length=0#map_closed">celui-là</a>
                  </p>
                </dd>
              </div>
            </dl>
          </div>


          <div class="mt-6">
            <dl class="space-y-8 divide-y divide-gray-200">
              <div class="pt-6 md:grid md:grid-cols-12 md:gap-8">
                <dt class="text-base font-medium text-beige-200 md:col-span-5">
                  Les enfants sont-ils conviés ?
                </dt>
                <dd class="mt-2 md:mt-0 md:col-span-7">
                  <p class="text-base text-beige-500">
                    Nous avons décidé de faire de notre mariage un évènement réservés aux adultes.
                    <br>
                    Cependant, les enfants sont plus que bienvenus au brunch du lendemain.
                  </p>
                </dd>
              </div>
            </dl>
          </div>

          <div class="mt-6">
            <dl class="space-y-8 divide-y divide-gray-200">
              <div class="pt-6 md:grid md:grid-cols-12 md:gap-8">
                <dt class="text-base font-medium text-beige-200 md:col-span-5">
                  Y a-t-il un dress code ?  
                </dt>
                <dd class="mt-2 md:mt-0 md:col-span-7">
                  <p class="text-base text-beige-500">
                    Pour des raisons évidentes, la tenue blanche est réservée exclusivement à la mariée, sauf si vous voulez vous attirez des problèmes.
                    Plus sérieusement, il n'y a pas de dress code particulier, on sait que vous serez les plus beaux.
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
                    Votre présence et votre amour sera le plus beau cadeau de tous. <br>
                    Mais pour ceux qui le souhaitent, vous pouvez trouvez notre liste de mariage <a href="https://www.millemercismariage.com/marineclementbac/liste.html" class="underline font-bold">ici</a>.
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
              &copy; 2021 - 2022 - Fait avec amour par Marine & Clément 
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
      authorizedFriday: false,
      imageLocation: "/img/nous.jpg",
      password: "16juillet",
      passwordFriday: "withlove",
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
      "color": "#ffffff"
    },
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
    if (localStorage.getItem('marineclement-authorizedNewVersion')) {
      this.authorized = true
    }
        if (localStorage.getItem('marineclement-authorizedNewVersion')) {
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
      if (this.inputPassword === this.password || this.inputPassword === this.passwordFriday) {
        this.wrongPassword = false
        if (this.inputPassword === this.password) {
          localStorage.setItem("marineclement-authorizedNewVersion", 'true')
          this.authorized = true
        }
        if (this.inputPassword === this.passwordFriday) {
          localStorage.setItem("marineclement-authorizedFriday", 'true')
          this.authorizedFriday = true
        }
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