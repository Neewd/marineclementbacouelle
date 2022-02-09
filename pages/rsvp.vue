<template>
    <div class="px-64 h-screen bg-beige flex items-center justify-center">


            <div aria-live="assertive" class="fixed inset-0 flex items-end px-4 py-6 pointer-events-none sm:p-6 sm:items-start"
               
            >
                <transition
                    enter-class="transform ease-out duration-300 transition"
                    enter-active-class="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
                    enter-to-class="translate-y-0 opacity-100 sm:translate-x-0"
                    leave-class="transition ease-in duration-100"
                    leave-active-class="opacity-100"
                    leave-to-class="opacity-0"
                >
                    <div class="w-full flex flex-col items-center space-y-4 sm:items-end"
                        v-show="notificationDisplayed"
                    >
                        <div class="max-w-sm w-full bg-white shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden">
                            <div class="p-4">
                                <div class="flex items-start">
                                    <div class="flex-shrink-0">
                                        <!-- Heroicon name: outline/check-circle -->
                                        <svg class="h-6 w-6 text-beige-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
                                            v-if='success'
                                        >
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg"  class="h-6 w-6 text-beige-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                                            v-if="error"
                                        >
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 9v2m0 4h.01" />
                                        </svg>
                                    </div>
                                    <div class="ml-3 w-0 flex-1 pt-0.5"
                                        v-if="success"
                                    >
                                        <p class="text-sm font-medium text-gray-900">
                                        Participation envoyée
                                        </p>
                                        <p class="mt-1 text-sm text-gray-500">
                                        Merci beaucoup pour votre réponse, on à hâte de vous lire
                                        </p>
                                    </div>
                                    <div class="ml-3 w-0 flex-1 pt-0.5"
                                        v-if="error"
                                    >
                                        <p class="text-sm font-medium text-gray-900">
                                            Une erreur est survenue
                                        </p>
                                        <p class="mt-1 text-sm text-gray-500">
                                            Veuillez réessayer ultérieurement
                                        </p>
                                    </div>
                                    <div class="ml-4 flex-shrink-0 flex">
                                        <button class="bg-white rounded-md inline-flex text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-beige-500"
                                            v-on:click="notificationDisplayed = false"
                                        >
                                            <span class="sr-only">Close</span>
                                            <!-- Heroicon name: solid/x -->
                                            <svg class="h-5 w-5 text-beige-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </transition>
            </div>


        <form class="space-y-6 divide-y divide-beige-200">
            <div class="space-y-6 divide-y divide-beige-200">
                <div>
                <div>
                    <h3 class="text-lg leading-6 font-medium text-beige-500">
                    RSVP
                    </h3>
                    <p class="mt-1 text-sm text-beige-500">
                        Nous attendons votre réponse avec impatience
                    </p>
                </div>

                <div class="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                    <div class="sm:col-span-4">
                        <label for="username" class="block text-sm font-medium text-beige-500">
                            Vos noms et prénoms
                        </label>
                        <div class="mt-1 flex rounded-md shadow-sm">
                            <input type="text" name="username" id="username" v-model="fullname" autocomplete="username" class="flex-1 focus:ring-beige-500 focus:border-beige-500 block w-full min-w-0 rounded-md sm:text-sm border-beige-300">
                        </div>
                    </div>
                </div>
                </div>

                <div class="pt-4">
                <div>
                    <h3 class="text-lg leading-6 font-medium text-beige-500">
                    Si vous le savez déjà ...
                    </h3>
                </div>
                <div class="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                    <div class="sm:col-span-3">
                        <label for="first-name" class="block text-sm font-medium text-beige-500">
                            Quand pensez-vous arriver ?
                        </label>
                        <div class="mt-1">
                            <input type="text" name="first-name" id="first-name"  v-model="whenTheyArrive" autocomplete="given-name" class="shadow-sm focus:ring-beige-500 focus:border-beige-500 block w-full sm:text-sm border-beige-300 rounded-md">
                        </div>
                    </div>

                    <div class="sm:col-span-3">
                        <label for="last-name" class="block text-sm font-medium text-beige-500">
                            Vers quelle heure ?
                        </label>
                        <div class="mt-1">
                            <input type="text" name="last-name" id="last-name"  v-model="whatHourTheyArrive" autocomplete="family-name" class="shadow-sm focus:ring-beige-500 focus:border-beige-500 block w-full sm:text-sm border-beige-300 rounded-md">
                        </div>
                    </div>
                </div>
                </div>

                <div class="mt-6">
                    <fieldset>
                        <legend class="text-base font-medium text-beige-500 pt-4">
                            Serez-vous à notre table le :
                        </legend>
                        <div class="mt-4 space-y-4">
                            <div class="relative flex items-start"
                                v-if="this.authorizedFriday"
                            >
                                <div class="flex items-center h-5">
                                    <input id="mealFriday" name="mealFriday" type="checkbox"  v-model="mealToPrepare.fridayEvening" class="focus:ring-beige-500 h-4 w-4 text-beige-500 border-beige-300 rounded">
                                </div>
                                <div class="ml-3 text-sm">
                                    <label for="mealFriday" class="font-medium text-beige-500 hover:cursor-pointer">Vendredi soir</label>
                                </div>
                            </div>
                            <div class="relative flex items-start">
                                <div class="flex items-center h-5">
                                    <input id="mealSaturday" name="mealSaturday" type="checkbox" v-model="mealToPrepare.saturdayNoon" class="focus:ring-beige-500 h-4 w-4 text-beige-500 border-beige-300 rounded">
                                </div>
                                <div class="ml-3 text-sm">
                                    <label for="mealSaturday" class="font-medium text-beige-500 hover:cursor-pointer">Samedi midi</label>
                                </div>
                            </div>
                            <div class="relative flex items-start">
                                <div class="flex items-center h-5">
                                    <input id="mealSunday" name="mealSunday" type="checkbox" v-model="mealToPrepare.sundayNoon" class="focus:ring-beige-500 h-4 w-4 text-beige-500 border-beige-300 rounded">
                                </div>
                                <div class="ml-3 text-sm">
                                    <label for="mealSunday" class="font-medium text-beige-500 hover:cursor-pointer">Dimanche midi (brunch)</label>
                                </div>
                            </div>
                        </div>
                    </fieldset>
                    <fieldset class="mt-6 pt-4">
                        <div>
                            <legend class="text-base font-medium text-beige-500">
                            Êtes-vous intéressé par un logement sur place :
                            </legend>
                            <p class="text-sm text-beige-500">(35€ / personne / nuit)</p>
                        </div>
                        <div class="mt-4 space-y-4">
                            <div class="relative flex items-start"
                                v-if="this.authorizedFriday"
                            >
                                <div class="flex items-center h-5">
                                    <input id="bedsFriday" name="bedsFriday" type="checkbox" v-model="bedsInterest.fridayEvening" class="focus:ring-beige-500 h-4 w-4 text-beige-500 border-beige-300 rounded">
                                </div>
                                <div class="ml-3 text-sm">
                                    <label for="bedsFriday" class="font-medium text-beige-500 hover:cursor-pointer">Vendredi soir</label>
                                </div>
                            </div>
                            <div class="relative flex items-start">
                                <div class="flex items-center h-5">
                                    <input id="bedSaturday" name="bedSaturday" type="checkbox" v-model="bedsInterest.saturdayEvening" class="focus:ring-beige-500 h-4 w-4 text-beige-500 border-beige-300 rounded">
                                </div>
                                <div class="ml-3 text-sm">
                                    <label for="bedSaturday" class="font-medium text-beige-500 hover:cursor-pointer">Samedi soir</label>
                                </div>
                            </div>
                        </div>
                    </fieldset>
                </div>
                <div class="sm:col-span-4 pt-4">
                    <label for="username" class="block text-sm font-medium text-beige-500">
                        Un régime alimentaire particulier ?
                    </label>
                    <div class="mt-1 flex rounded-md shadow-sm">
                        <input type="text" name="username" id="username" autocomplete="username" v-model="diet" class="flex-1 focus:ring-beige-500 focus:border-beige-500 block w-full min-w-0 rounded-md sm:text-sm border-beige-300">
                    </div>
                </div>
                <div class="sm:col-span-4 pt-4">
                    <label for="username" class="block text-sm font-medium text-beige-500">
                        LA chanson sur laquelle vous allez <br> danser jusqu'au bout de la nuit
                    </label>
                    <div class="mt-1 flex rounded-md shadow-sm">
                        <input type="text" name="username" id="username" autocomplete="username" v-model="theOneAndOnlySandTheyDanceFor" class="flex-1 focus:ring-beige-500 focus:border-beige-500 block w-full min-w-0  rounded-md sm:text-sm border-beige-300">
                    </div>
                </div>
                <div class="sm:col-span-4 pt-4">
                    <label for="sweetAttention" class="block text-sm font-medium text-beige-500">
                        Un mot doux ou une suggestion à nous transmettre ?
                    </label>
                    <div class="mt-1 flex rounded-md shadow-sm">
                        <input type="text" name="sweetAttention" id="sweetAttention" autocomplete="sweetAttention" v-model="sweetAttention" class="flex-1 focus:ring-beige-500 focus:border-beige-500 block w-full min-w-0  rounded-md sm:text-sm border-beige-300">
                    </div>
                </div>
            </div>

            <div class="pt-5">
                <div class="flex justify-end">
                <NuxtLink  class="font-bold underline ml-2" to="/">
                    <button type="button" class="bg-white py-2 px-4 border border-beige-300 rounded-md shadow-sm text-sm font-medium text-beige-500 hover:bg-beige-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-beige-500">
                        Revenir
                    </button>
                </NuxtLink> 
                <button type="submit" v-on:click.prevent="sendResponse" class="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-beige-500 hover:bg-beige-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-beige-500">
                    Envoyer
                </button>
                </div>
            </div>
        </form>
    </div>
</template>

<script>

export default {
    data() {
        return {
            authorizedFriday: false,
            notificationDisplayed: false,
            error: false,
            success: false,
            fullname: '',
            whenTheyArrive: '',
            whatHourTheyArrive: '',
            mealToPrepare: {
                fridayEvening: false,
                saturdayNoon: false,
                sundayNoon: false
            },
            bedsInterest: {
                fridayEvening: false,
                saturdayEvening: false
            },
            diet: '',
            theOneAndOnlySandTheyDanceFor: '',
            sweetAttention: ''
        }
    },
    mounted() {
        this.authorizedFriday = localStorage.getItem("marineclement-authorizedFriday") 
        this.authorized = localStorage.getItem("marineclement-authorizedNewVersion")
        if (!this.authorizedFriday && !this.authorized) {
           this.$router.push({
                path: '/'
            })
        }
    },
    methods: {
        async sendResponse() {
            if (!this.dataValid()) {
                return;
            }
            const database = this.$fire.database;
            const idFullName = this.fullname.replaceAll(' ', '');
            const guestsRef = database.ref(`guests/${idFullName}`);
            const dataToSend = {
                username: this.fullname,
                whenTheyArrive: this.whenTheyArrive,
                whatHourTheyArrive : this.whatHourTheyArrive,
                mealToPrepareFriday : this.mealToPrepare.fridayEvening,
                mealToPrepareSaturday : this.mealToPrepare.saturdayNoon,
                mealToPrepareSunday : this.mealToPrepare.sundayNoon,
                bedsInterestFriday : this.bedsInterest.fridayEvening,
                bedsInterestSaturday : this.bedsInterest.saturdayEvening,
                diet : this.diet,
                theOneAndOnlySandTheyDanceFor : this.theOneAndOnlySandTheyDanceFor,
                sweetAttention: this.sweetAttention
            }
            try  {
                await guestsRef.set(dataToSend)
                this.clearForm();
                this.success = true;
            } catch (e) {
                this.error = true
            } finally {
                this.notificationDisplayed = true;
                setTimeout(() =>  {
                    this.notificationDisplayed = false;
                }, 5000)
            }
        },
        dataValid() {
            return this.fullname !== ''
        },
        clearForm() {
            this.fullname = '';
            this.whenTheyArrive = '';
            this.whatHourTheyArrive = '';
            this.diet = '';
            this.theOneAndOnlySandTheyDanceFor = '';
            this.mealToPrepare = {
                fridayEvening: false,
                saturdayNoon: false,
                sundayNoon: false
            };
            this.bedsInterest = {
                fridayEvening: false,
                saturdayEvening: false
            };
        }
    }
}
</script>