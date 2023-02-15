<template>
  <div>
    <div class="d-flex">
      <template>
        <div class="col-lg-8">
          <v-text-field v-model="search" label="Ara"></v-text-field>
        </div>
      </template>
      <v-btn variant="flat" class="searchBtn" @click="filterProduct">
        <i class="fas fa-search"></i>
        Ara</v-btn
      >
      <Popup></Popup>
    </div>
    <div>
      <v-data-table
        :headers="headers"
        :items="filterProduct"
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
import { action } from "../../utils/appAxios";
import Popup from "../../components/Popup.vue";
export default {
  components:{Popup},
  data() {
    return {
      search: "",
      dialog: false,
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
      stocks: [],
    };
  },
  methods: {
    // async deneme(){
    //     const {data} = await action.stocks();
    //     this.stocks=data.Content
    //     console.log(this.stocks)
    //   }
  },
  computed: {
    filterProduct() {
      return this.stocks.filter((product) =>
        product.Name.toLowerCase().includes(this.search.toLowerCase())
      );
    },
  },
  async created() {
    const { data } = await action.stocks();
    this.stocks = data.Content;
  },
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
