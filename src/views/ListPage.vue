<script>
import Sidebar from '../components/contents/Sidebar.vue'
import ImageItem from '../components/contents/items/ImageItem.vue'
</script>

<template>
    <main>
        <Sidebar />
        <div class="list-container">
            <h3>読んでる本</h3>
            <ImageItem />
        </div>

    </main>
</template>

<style>
    main{
        display: flex;
    }
</style>