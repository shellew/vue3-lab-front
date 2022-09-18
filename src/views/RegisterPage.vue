<script setup>
import Sidebar from '../components/contents/Sidebar.vue'
import InfoInput from '../components/contents/items/InfoInput.vue';
import StatusOptionItem from '../components/contents/items/StatusOptionItem.vue';
import CommentInputItem from '../components/contents/items/CommentInputItem.vue';
</script>
    
<template>
    <main>
        <Sidebar />
        <div class="main-container">
            <p>タイトル</p><InfoInput />
            <p>著者</p><InfoInput />
            <p>ISBN</p><InfoInput />
            <p>ステータス</p><StatusOptionItem />
            <p>コメント</p><CommentInputItem />
        </div>
    </main>
</template>

<style>
    main{
        display: flex;
    }
</style>