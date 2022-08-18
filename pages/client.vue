<template>
    <div id="page-content" class='container'>
        <div class="flex w-full">
            <h1 class='page-heading text-6xl text-center mx-auto mt-32 font-light text-gray-800 mb-8'>Clients</h1>
        </div>
        <div class="page-body">
            <div class="flex flex-row flex-wrap">
                <div class="w-1/2 md:w-1/4 px-2" v-for="(client,index) in $store.state.client" :key="index">
                    <div class="card bg-white shadow-2xl rounded-lg px-5 py-5 mb-2" >
                        <div class="d-flex flex-col text-center">
                            <i :class="client.icon" v-if="!!client.icon" class='text-6xl'></i>
                            <img :src="client.icon_url" v-else :alt="client.name" class='h-16 mx-auto'>
                            <h5 class='ml-2 text-xl mt-5 mb-2 font-medium text-gray-800'>{{client.name}}</h5>
                            <p><span class='font-bold'>{{ client.years }}</span> of experience.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {

}
</script>
