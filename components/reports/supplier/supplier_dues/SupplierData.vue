<template>
  <div class="dues_supplier_payments" v-if="selectedSupplier">
    <table
      class="w-100 text-right"
      dir="rtl"
      style="
        border: 1px solid rgb(179, 179, 179);
        border-radius: 12px;
        padding: 13px;
        background: #f0f0f0ba;
      "
    >
      <tbody>
        <tr>
          <th class="pb-2">اسم المورد:</th>
          <td class="pb-2">
            {{
              selectedSupplier && selectedSupplier.supplier
                ? selectedSupplier.supplier.name
                : ""
            }}
          </td>
          <th class="pb-2">اسم الصومعة:</th>
          <td class="pb-2">
            {{
              selectedSupplier && selectedSupplier.granary
                ? selectedSupplier.granary.name
                : ""
            }}
          </td>
        </tr>
        <tr>
          <th class="pb-2">المنتج:</th>
          <td class="pb-2">{{ supplierDues.productName }}</td>
          <th>الكمية الموردة:</th>
          <td>{{ supplierDues.totalAmount }}</td>
        </tr>
        <tr>
          <th>اجمالي مبلغ التوريد:</th>
          <td>{{ Math.round(supplierDues.totalPriceAfterDiscount) }}</td>
        </tr>
        <tr></tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
const props = defineProps(["supplierDues", "selectedSupplier"]);
</script>

<style lang="scss">
td {
  color: rgba(0, 0, 0, 0.69) !important;
  font-size: 14px;
}
th {
  font-size: 14px;
}
</style>
