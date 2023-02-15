<template>
  <div>
    <div class="d-flex">
      <template>
        <div class="col-lg-8">
          <v-text-field v-model="Name" label="Ara"></v-text-field>
        </div>
      </template>
      <v-btn variant="flat" class="searchBtn">
        <i class="fas fa-search"></i>
        Ara</v-btn
      >
      <v-btn variant="flat" class="addBtn">
        <i class="fas fa-plus"></i>
        Ekle
      </v-btn>
    </div>
    <div>
      <v-data-table
        v-model="selected"
        :headers="headers"
        :items="stocks"
        :single-select="singleSelect"
        item-key="name"
        show-select
        class="elevation-1"
      >
      </v-data-table>
    </div>
  </div>
</template>
<script>
// import appAxios from "../../utils/appAxios";
import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios'
Vue.use(VueAxios,axios)
export default {
  data() {
    return {
      singleSelect: false,
      headers: [
        {
          text: "Stok Adı",
          align: "start",
          sortable: false,
          value: "Name",
        },
        { text: "SATICI KODU", value: "SellerCode" },
        { text: "BİRİM ADI", value: "UnitName" },
        { text: "FİYAT", value: "Price" },
        { text: "KDV(%)", value: "TaxPercent" },
        { text: "AKTİFLİK", value: "IsActive" },
        { text: "OLUŞTURMA TARİHİ", value: "CreatedDate" },
        { text: "İŞLEMLER", value: "islemler" },
      ],
      stocks: [
        {
          Name: "Frozen Yogurt",
          SellerCode: 159,
          UnitName: 6.0,
          Price: 24,
          TaxPercent: 4.0,
          CreatedDate: 1,
        },
        {
          Name: "esma",
          SellerCode: 159,
          UnitName: 6.0,
          Price: 24,
          TaxPercent: 4.0,
          CreatedDate: 1,
        },
        {
          Name: "nur",
          SellerCode: 159,
          UnitName: 6.0,
          Price: 24,
          TaxPercent: 4.0,
          CreatedDate: 1,
        },
      ],
      search:""
    };
  },
  // async created() {
  //   await appAxios.get("general/Stocks").then((res) => {
  //     console.log(res);
  //   });
  // },
  mounted(){
    Vue.axios.get("https://apitest.nilvera.com/general/Stocks").then(res=>{
      console.log(res);
    })
  }
};
</script>
<style scoped>
.addBtn {
  background-color: rgb(49, 203, 214) !important;
  color: white !important;
  margin-top: 20px;
}
.searchBtn {
  background-color: rgb(42, 91, 236) !important;
  color: white !important;
  margin-top: 20px;
  margin-right: 5px;
}
i {
  color: white !important;
  margin-right: 2px;
}
</style>
