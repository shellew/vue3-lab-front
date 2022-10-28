<script lang="ts" setup>
// import HomeSidebar from "../components/contents/HomeSidebar.vue";
// import CommentInputItem from "../components/contents/items/CommentInputItem.vue";
// import StatusOptionItem from "../components/contents/items/StatusOptionItem.vue";
// import InfoInput from "../components/contents/items/InfoInput.vue";
import ButtonItem from "../components/contents/items/ButtonItem.vue";
import { ElNotification } from "element-plus";
import type { FormInstance, FormRules } from "element-plus";
import axios from "axios";
import { ref, onMounted, reactive } from "vue";

const books = ref([]);
const ruleForm = ref({
  title: "",
  author: "",
  memo: "",
});
const status = ref("");

//本のデータを取得
onMounted(() => {
  axios
    .get("http://localhost/api/book_masters/39") //←idに固定の数字を入れている
    .then((response) => {
      books.value = response.data; //画面に表示するため
      // ruleForm.title.value = response.data[0].title;
      // ruleForm.title.value = books.value[0].title;
      // author.value = response.data[0].author;
      // status.value = response.data[0].status;
      // memo.value = response.data[0].memo;
      // console.log(books.value);
    })
    .catch((error) => console.log(error));
});

//本のデータをデフォルトで表示
// const getBookTitle = title;
// const getBookAuthor = author;
// const getBookMemo = memo;

//編集された情報を更新
const updateBook = () => {
  axios
    .put("http://localhost/api/book_masters/39", {
      //←idに固定の数字を入れている
      title: ruleForm.title,
      author: "テスト",
      status: status.value,
      memo: "テスト",
    })
    .then((response) => {
      console.log(response);
      // book.value = ruleForm.value;
      // book.title = response.data.title;
      // book.author = response.data.author;
      // book.status = response.data.status;
      // book.memo = response.data.memo;
      // console.log(ruleForm.value);
    })
    .catch((error) => console.log(error));
};

//更新情報を通知
const openUpdate = () => {
  ElNotification.success({
    title: "通知",
    message: "更新しました",
    showClose: false,
    duration: 4500,
  });
};

const multipleHandlerUpdate = () => {
  updateBook();
  openUpdate();
};

//本を削除
const deleteBook = (id) => {
  axios
    .delete("http://localhost/api/book_masters/29") //←idに固定の数字を入れている
    .then(() => console.log("delete book" + id.value))
    .catch((error) => console.log(error));
};

//削除を通知
const openDelete = () => {
  ElNotification.success({
    title: "通知",
    message: "削除しました",
    showClose: false,
    duration: 4500,
  });
};

const multipleHandlerDelete = () => {
  deleteBook();
  openDelete();
};


//読書時間を表示
const times = ref([]);
onMounted(() => {
  axios
    .get("http://localhost/api/read_times/8") //←idに固定の数字を入れている
    .then((response) => {
      times.value.read_minute = response.data[0].totalTime;
    })
    .catch((error) => console.log(error));
});

//バリデーション
const ruleFormRef = ref<FormInstance>()
// 変更
// const ruleForm = reactive({
//   title: "",
//   author: "",
//   memo: "",
// })

const rules = reactive<FormRules>({
  title: [{ required: true, message: "タイトルを入力してください", trigger: "blur"}],
  author: [{ required: true, message: "著者を入力してください", trigger: "blur"}],
  memo: [{ required: true, message: "メモを入力してください", trigger: "blur"}],
})
</script>

<template>
  <main>
    <HomeSidebar />

    <div class="edit-container">
      <div class="edit-contents">
        <img src="/images/item1.jpg" alt="" width="150" />
        <p v-for="(book, key) in books" :key="key">
          タイトル：{{ book.title }}
        </p>
        <p v-for="book in books" :key="book.author">
          著者：{{ book.author }}
        </p>
        <p v-for="book in books" :key="book.status">
          ステータス：{{ book.status }}
        </p>
        <p v-for="book in books" :key="book.memo">
          コメント<br />{{ book.memo }}
        </p>
        <p>読書時間：{{ times.read_minute }}分</p>
      </div>
      
      <div class="edit-blocks">
        <div class="edit-block-items">
          <div class="edit-block-item">
            <el-form ref="ruleFormRef" :model="ruleForm" status-icon :rules="rules">
                <el-form-item prop="title">
                  <p>タイトル</p>
                  <InfoInput v-model="ruleForm.title" /> 
                </el-form-item>

                <el-form-item prop="author">
                  <p>著者</p>
                  <InfoInput v-model="ruleForm.author" />
                </el-form-item>

                <el-form-item prop="passBookStatus">
                  <p>ステータス</p>
                  <StatusOptionItem v-model="status" />
                </el-form-item>

                <el-form-item prop="memo">
                  <p>メモ</p>
                  <CommentInputItem v-model="ruleForm.memo" />
                </el-form-item>
            </el-form>

            <!-- <el-form ref="ruleFormRef" :model="ruleForm" status-icon :rules="rules">
                <el-form-item prop="title">
                  <p>タイトル</p>
                  <InfoInput :getBookTitle="getBookTitle" v-model="ruleForm.title" /> 
                </el-form-item>

                <el-form-item prop="author">
                  <p>著者</p>
                  <InfoInput :getBookAuthor="getBookAuthor" v-model="ruleForm.author" />
                </el-form-item>

                <el-form-item prop="passBookStatus">
                  <p>ステータス</p>
                  <StatusOptionItem v-model="status" />
                </el-form-item>

                <el-form-item prop="memo">
                  <p>メモ</p>
                  <CommentInputItem :getBookMemo="getBookMemo" v-model="ruleForm.memo" />
                </el-form-item>
            </el-form> -->
          </div>
        </div>
        <div class="button-item">
          <div class="button">
            <ButtonItem @click="multipleHandlerUpdate">更新</ButtonItem>
          </div>
          <div class="button">
            <ButtonItem @click="multipleHandlerDelete">削除</ButtonItem>
          </div>
          <RouterLink to="/readtime">
            <ButtonItem>読書時間を記録する</ButtonItem>
          </RouterLink>
        </div>
      </div>
    </div>
  </main>
</template>

<style>
main {
  display: flex;
  font-size: 22px;
}

.edit-container {
  display: flex;
  justify-content: space-around;
  width: 1000px;
}

.edit-contents {
  width: 200px;
  text-align: center;
}

.edit-contents p {
  font-size: 16px;
}

.edit-blocks {
  display: block;
  width: 80%;
  padding: 20px;
}

.edit-block-item {
  display: block;
}

.edit-contents-item {
  display: block;
  margin-right: 100px;
}
/* 
.edit-contents-item:first-of-type {
  margin-right: 100px;
} */

.edit-text {
  display: block;
  margin: 20px 0 10px;
  padding-bottom: 15px;
}

.button-item {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.button {
  margin-right: 50px;
}
</style>
