<script setup>
import Sidebar from '../components/contents/Sidebar.vue'
import CommentInputItem from '../components/contents/items/CommentInputItem.vue';
import ButtonItem from '../components/contents/items/ButtonItem.vue';
import InputNumber from '../components/contents/items/InputNumber.vue';


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
                <div class="read-time-contents-items">
                    <div class="read-time-contents-item">
                        <label class="read-time-text">読書時間</label>
                        <!-- <input type="number" min="1" max="1440"> -->
                        <InputNumber /><span>分</span>
                    </div>
                    <label class="read-time-text">コメント</label><CommentInputItem />
                </div>
                <div class="button button-item">
                    <ButtonItem>更新</ButtonItem>
                    <ButtonItem>削除</ButtonItem>
                </div>
            </div>
            
        </div>
    </main>
</template>

<style>
    main{
        display: flex;
        font-size: 22px;
    }

    .edit-container{
        display: flex;
        justify-content: space-around;
        width: 1000px;
    }

    .edit-contents{
        width: 200px;
        text-align: center;
        padding-top: 30px;
        padding-right: 70px;
        /* background-color: blanchedalmond; */
    }

    .edit-contents p{
        font-size: 16px;
    }

    .read-time-contents{
        display: block;
        width: 80%;
        padding: 20px;
        /* background-color: aquamarine; */
    }

    .read-time-contents-item{
        display: block;
    }

    .read-time-text{
        display: block;
        margin: 20px 0 10px;
    }

    .button-item{
        display: flex;
        justify-content: center;
        margin-top: 20px;
    }

</style>