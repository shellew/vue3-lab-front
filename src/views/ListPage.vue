<script>
import Sidebar from '../components/contents/Sidebar.vue'
import ImageItem from '../components/contents/items/ImageItem.vue'
</script>

<template>
    <main>
        <Sidebar />
        <div class="list-container">
            <h4>読んでる本</h4>
            <ImageItem />
        </div>

    </main>
</template>

<style>
    main{
        display: flex;
    }
</style>