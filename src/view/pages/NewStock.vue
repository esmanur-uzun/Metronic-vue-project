<template>
  <form>
    <v-text-field v-model="data.Name" label="Stok adı" required></v-text-field>
    <v-text-field
      v-model="data.SellerCode"
      label="Satıcı kodu"
      required
    ></v-text-field>
    <v-text-field
      v-model="data.UnitName"
      label="Birim adı"
      required
    ></v-text-field>
    <v-text-field v-model="data.Price" label="Fiyat" required></v-text-field>
    <v-text-field v-model="data.TaxPercent" label="KDV" required></v-text-field>
    <v-text-field
      v-model="data.IsActive"
      label="Aktiflik"
      required
    ></v-text-field>

    <v-btn class="mr-4" @click="submit"> submit </v-btn>
    <v-btn @click="clear"> clear </v-btn>
  </form>
</template>
<script>
import axios from "axios";
export default {
  data: () => ({
    data: {
      Name: "",
      SellerCode: "",
      UnitName: "",
      Price: "",
      TaxPercent: "",
      IsActive: "",
    },
  }),
  methods: {
    async submit() {
      await axios
        .post("https://apitest.nilvera.com/general/Stocks", this.data)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          this.errorMessage = error.message;
          console.error("There was an error!", error);
        });
    },
    clear() {
      this.data.Name = "";
      this.data.IsActive = "";
      this.data.UnitName = "";
      this.data.SellerCode = "";
      this.data.TaxPercent = "";
      this.data.Price = "";
    },
  },
};
</script>
