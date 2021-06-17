<template>
  <div class="container">
    <div class="title-wrapper">
      <h1>Add Food Menu</h1>
    </div>
    <div class="form-wrapper">
      <form @submit.prevent="handleAddMenu" class="form">
        <div class="form-group">
          <label for="dishName">Menu Name</label>
          <input
            class="f-input"
            type="text"
            name="dishName"
            id="dishName"
           
            v-model="dishName"
          />
        </div>
        <div class="form-group">
          <label for="desc">Description</label>
          <textarea
            name="desc"
            id="desc"
            cols="30"
            rows="6"
            class="f-input"
            v-model="description"
          ></textarea>
        </div>
        <div class="form-group">
          <label for="category">Category</label>
          <p>Example: Best Seller, Feature in Homepage, Starter, etc.</p>
          <select
            name="category"
            id="category"
            @change="getSelectedOption"
            class="f-input"
          >
            <option value=""></option>
            <option value="Best Seller">Best Seller</option>
            <option value="">Featured Food</option>
            <option value="">Starter</option>
          </select>
        </div>
        <div class="form-group">
          <label for="price">Price</label>
          <input
            class="f-input"
            type="text"
            name="price"
            id="price"           
            v-model="price"
          />
        </div>
        <div class="form-group">
          <label for="fileUpload">Upload Image</label>
          <input
            type="file"
            name="fileUpload"
            id="fileUpload"
            class="f-input"
            @change="handleChange"
          />
        </div>
        <!-- error -->
        <div class="error" v-show="fileError != null">{{ fileError }}</div>
        <!-- buttons  -->
        <div class="form-group">
          <input
            type="submit"
            value="Add"
            class="f-input btn-submit"
            v-if="!isPending"
          />
          <input
            type="submit"
            value="Adding..."
            class="f-input btn-submit-pending"
            v-if="isPending"
            disabled
          />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import useStorage from "@/composables/useStorage";
import useCollection from "@/composables/useCollection";
import getUser from "@/composables/getUser";
import { timestamp } from "@/firebase/config";

export default {
  name: "AdminView",
  setup() {
    const dishName = ref("");
    const description = ref("");
    const selectedCat = ref("")
    const price = ref("");
    const fileRef = ref(null);
    const fileError = ref(null);
    const { url, filePath, uploadImage } = useStorage();
    const { error, addDoc } = useCollection("taramen_db_col");
    const { user } = getUser();
    const isPending = ref(false);

    // accepts data from form to be added to the db
    const handleAddMenu = async () => {
      if (fileRef.value) {
        // start isPending
        isPending.value = true;

        await uploadImage(fileRef.value);
        await addDoc({
          userID: user.value.uid,
          userName: user.value.displayName,
          dishName: dishName.value,
          description: description.value,
          selectedCat: selectedCat.value,
          price: price.value,
          coverImgURL: url.value,
          filePath: filePath.value,
          category: [],
          createdAt: timestamp(),
        });
        // end isPending
        isPending.value = false;

        if (!error.value) {
          console.log("Playlist added...");
        }
      }

      dishName.value = "";
      description.value = "";
      price.value = "";
      // document.querySelector('#category').textContent = "";
      document.querySelector('#fileUpload').value = "";
    };

    // allowed image format
    const imgTypes = [
      "image/png",
      "image/jpeg",
      "image/svg",
      "image/webp",
      "image/jpg",
    ];

    // listens to upload file changes
    const handleChange = (e) => {
      const selected = e.target.files[0];
      if (selected && imgTypes.includes(selected.type)) {
        fileRef.value = selected;
        fileError.value = null;
      } else {
        fileRef.value = null;
        fileError.value =
          "Please select another image file format. Only allows SVG, JPG, PNG and WEBP format type.";
      }
    };

    const getSelectedOption = (e) => {
      const options = e.target.options;      
      const selectOption = options[options.selectedIndex];

      selectedCat.value = selectOption.textContent;      
    };

    return {
      dishName,
      description,
      price,
      handleAddMenu,
      handleChange,
      fileError,
      url,
      filePath,
      uploadImage,
      isPending,
      getSelectedOption,
    };
  },
};
</script>

<style>
.btn-submit-pending {
  background-color: gray;
}
</style>