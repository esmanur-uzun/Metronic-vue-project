<template>
  <div>
    <div class="d-flex">
      <template>
        <div class="col-lg-8">
          <v-text-field label="Ara"></v-text-field>
        </div>
      </template>
      <v-menu>
        <template v-slot:activator="{ on, attrs }">
          <v-btn v-bind="attrs" v-on="on"> Click me </v-btn>
        </template>
        <v-list>
          <v-list-item @click="onClick">
            <v-list-item-title>Option 1</v-list-item-title>
          </v-list-item>

          <v-list-item disabled>
            <v-list-item-title>Option 2</v-list-item-title>
          </v-list-item>

          <v-list-item @click="onClick">
            <v-list-item-title>Option 3</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>
    <div>
      <v-data-table
        v-model="selected"
        :headers="headers"
        :items="desserts"
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
export default {
  data() {
    return {
      singleSelect: false,
      selected: [],
      methods: {
        onClick() {},
      },
      headers: [
        {
          text: "Stok Adı",
          align: "start",
          sortable: false,
          value: "name",
        },
        { text: "SATICI KODU", value: "satıcıkodu" },
        { text: "BİRİM ADI", value: "birimadı" },
        { text: "FİYAT", value: "fiyat" },
        { text: "KDV(%)", value: "kdv" },
        { text: "AKTİFLİK", value: "aktiflik" },
        { text: "OLUŞTURMA TARİHİ", value: "otarihi" },
        { text: "İŞLEMLER", value: "islemler" },
      ],
      desserts: [
        {
          name: "Frozen Yogurt",
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          iron: 1,
        },
        {
          name: "Ice cream sandwich",
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          iron: 1,
        },
        {
          name: "Eclair",
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          iron: 7,
        },
        {
          name: "Cupcake",
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          iron: 8,
        },
        {
          name: "Gingerbread",
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
          iron: 16,
        },
        {
          name: "Jelly bean",
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
          iron: 0,
        },
        {
          name: "Lollipop",
          calories: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0,
          iron: 2,
        },
        {
          name: "Honeycomb",
          calories: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5,
          iron: 45,
        },
        {
          name: "Donut",
          calories: 452,
          fat: 25.0,
          carbs: 51,
          protein: 4.9,
          iron: 22,
        },
        {
          name: "KitKat",
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          iron: 6,
        },
      ],
    };
  },
};
</script>
