<script setup>
    import Sidebar from '../components/contents/Sidebar.vue'
    import CommentInputItem from '../components/contents/items/CommentInputItem.vue';
</script>
    
<template>
    <main>
        <Sidebar />

        <div class="edit-container">
            <div class="edit-contents">
                <img src="/images/item1.jpg" alt="" width="150">
                <p>タイトル</p>
                <p>著者</p>
                <p>ISBN</p>
                <p>読んでる本</p>
            </div>

            <div class="read-time-contents">
                <p>読書時間</p>
                <p>◯分</p>
                <p>コメント</p><CommentInputItem />
            </div>
        </div>
    </main>
</template>

<style>
    main{
        display: flex;
    }

    .edit-container{
        display: flex;
        justify-content: space-around;
        width: 1000px;
        background-color: aquamarine;
    }

    .edit-contents{
        width: 200px;
        background-color: bisque;
    }

    .read-time-contents{
        width: 80%;
    }
</style>