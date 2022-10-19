<script setup lang="ts">
import SampleButton from "../components/contents/items/SampleButton.vue";
import SampleModal from "../components/contents/items/SampleModal.vue";

import axios from "axios";
import { ref } from "vue";

type fileType = {
  defaultName: string;
  previewImage: string | ArrayBuffer | null;
  selectedFile: {
    id: number;
    fileId: string;
    name: string;
    image: string | ArrayBuffer | null;
  }[];
};
const fileValue = {
  defaultName: "ファイルが選択されていません",
  previewImage: "",
  selectedFile: [
    {
      id: 0,
      fileId: "file_input__0",
      name: "ファイルが選択されていません",
      image: null,
    },
    {
      id: 1,
      fileId: "file_input__1",
      name: "ファイルが選択されていません",
      image: null,
    },
  ],
};
const file = ref<fileType>(fileValue);
const showModal = ref(false);
//画像入れ込み
const createImage = (image: File, _thisIndexNumber: number) => {
  const reader = new FileReader();
  reader.readAsDataURL(image);
  reader.onload = () => {
    file.value.selectedFile[_thisIndexNumber].name = image.name;
    file.value.selectedFile[_thisIndexNumber].image = reader.result;
  };
};
// 画像データ等取得
const onImageUploaded = (e: Event) => {
  if (e.target instanceof HTMLInputElement) {
    if (e.target.files) {
      const image = e.target.files[0];
      const _thisId = e.target.id;
      let _thisIndex = _thisId.split("__");
      let _thisIndexNumber = Number(_thisIndex[1]);
      createImage(image, _thisIndexNumber);
    }
  }
};
//画像を削除
const deleteImage = (e: Event) => {
  e.preventDefault();
  const _this = e.currentTarget as HTMLElement;
  if (_this) {
    const dataFileId = _this.getAttribute("data-fileId");
    let _thisIndex;
    if (dataFileId) {
      _thisIndex = dataFileId.split("__");
      let _thisIndexNumber = Number(_thisIndex[1]);
      file.value.selectedFile[_thisIndexNumber].name = file.value.defaultName;
      file.value.selectedFile[_thisIndexNumber].image = null;
    }
  }
};
//画像を全て削除
const deleatAllImages = (e: Event) => {
  e.preventDefault();
  const selectedFile = file.value.selectedFile;
  for (let i = 0; i < selectedFile.length; i++) {
    selectedFile[i].name = file.value.defaultName;
    selectedFile[i].image = null;
  }
  file.value.selectedFile = selectedFile;
};
//添付ファイルのセルを１つ追加
const addFileIttem = (e: Event) => {
  e.preventDefault();
  let fileValue = file.value;
  let selectedFile = fileValue.selectedFile;
  const selectedFileLength = selectedFile.length;
  const fileArray = {
    id: selectedFileLength,
    fileId: "file_input__" + selectedFileLength,
    name: fileValue.defaultName,
    image: null,
  };
  selectedFile.push(fileArray);
  file.value.selectedFile = selectedFile;
};
//画像のプレビュー
const previewImage = (e: Event) => {
  e.preventDefault();
  const _this = e.currentTarget as HTMLElement;
  const dataFileId = _this.getAttribute("data-fileId");
  if (dataFileId) {
    let _thisIndex = dataFileId.split("__");
    let _thisIndexNumber = Number(_thisIndex[1]);
    file.value.previewImage = file.value.selectedFile[_thisIndexNumber].image;
  }
  //画像が存在していたらモーダルあげる
  if (file.value.previewImage) {
    showModal.value = true;
  }
};
const formSubmit = () => {
  // 何か送信処理
};
</script>

<template>
  <main>
    <div class="container">
    <div class="form">
      <div class="file-block">
        <div class="file">
          <div class="file-item" v-for="n in file.selectedFile" :key="n.id">
            <div class="file-item-upload">
              <div class="file-item-add-button">
                <input
                  type="file"
                  :id="n.fileId"
                  :name="n.fileId"
                  class="file_input"
                  @change="onImageUploaded"
                />
                <Button :data-fileId="n.fileId" :disabled="false">
                  ファイルを選択
                </Button>
              </div>
              <div class="file-item-name">
                {{ n.name }}
              </div>
            </div>
            <div class="file-item-info">
              <div class="file-item-preview">
                <Button
                  :data-fileId="n.fileId"
                  @click="previewImage"
                  :disabled="!n.image"
                >
                  プレビュー
                </Button>
              </div>
              <div class="file-item-delete">
                <Button
                  :data-fileId="n.fileId"
                  @click="deleteImage"
                  :disabled="!n.image"
                >
                  削除
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div class="file-control">
          <Button
            @click="addFileIttem"
            :disabled="5 <= file.selectedFile.length"
          >
            ファイルの追加
          </Button>
          <Button
            @click="deleatAllImages"
            :disabled="!file.selectedFile.find((value) => value.image)"
          >
            すべて削除
          </Button>
        </div>
      </div>
      <div class="button-block">
        <Button
          tag="button"
          type="button"
          :disabled="!file.selectedFile.find((value) => value.image)"
          @click="formSubmit"
        >
          送信
        </Button>
      </div>
    </div>
  </div>
  <!-- モーダル -->
  <transition name="modal">
    <Modal v-if="showModal" @close="showModal = false">
      <template v-slot:content>
        <div v-if="file.previewImage">
          <img
            :src="
              typeof file.previewImage === 'string' ? file.previewImage : ''
            "
            alt=""
          />
        </div>
      </template>
    </Modal>
  </transition>
  <!-- モーダル -->
  </main>
</template>

<style>
main {
  display: flex;
}

.main-container {
  width: 50%;
}

.contents-item {
  display: block;
  margin: 20px 0 10px;
  font-size: 22px;
}

.select {
  font-size: 14px;
}

.btn-container {
  display: flex;
  justify-content: center;
  margin-top: 25px;
}

.required {
  padding: 3px 5px;
  margin: 0 0 10px 7px;
  background-color: #f56c6c;
  color: #fff;
  font-size: 12px;
  border-radius: 2px;
}

.form {
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
}
.file {
  border-bottom: 1px solid #000;
}
.file-item {
  width: 100%;
  display: flex;
  border-right: 1px solid #000;
}
.file-item > * {
  width: 100%;
  border-left: 1px solid #000;
  border-top: 1px solid #000;
  padding: 10px;
}
.file-control {
  margin-top: 20px;
}
.button-block {
  margin-top: 20px;
}
.file-item-add-button {
  position: relative;
}
.file_input {
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  width: 120px;
  height: 33px;
  z-index: 2;
}
.file_input:hover + .button {
  background: rgb(8, 122, 163);
  color: #fff;
}
.file-item-delete {
  margin-top: 10px;
}
.file-item-name {
  margin-top: 10px;
}
.file-control .button + .button {
  margin-left: 10px;
}
</style>
