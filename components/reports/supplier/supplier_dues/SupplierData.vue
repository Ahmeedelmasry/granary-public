<template>
  <div class="dues_supplier_payments">
    <table
      class="w-100 text-right"
      dir="rtl"
      style="border-radius: 12px; padding: 13px; background: #f0f0f0ba"
      id="not_styled_print"
    >
      <tbody>
        <tr>
          <th class="pb-2">اسم المورد:</th>
          <td class="pb-2">
            {{ selectedSupplier ? selectedSupplier.name : "الكل" }}
          </td>
          <th class="pb-2">اسم الصومعة:</th>
          <td class="pb-2">
            {{ selectedGranary ? selectedGranary.name : "الكل" }}
          </td>
        </tr>
        <tr>
          <th class="pb-2">تاريخ من</th>
          <td class="pb-2">
            {{ fromDate || "الكل" }}
          </td>
          <th class="pb-2">تاريخ الي</th>
          <td>
            {{ toDate || "الكل" }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import moment from "moment";

const props = defineProps([
  "supplierDues",
  "selectedSupplier",
  "selectedGranary",
  "fromDate",
  "toDate",
]);
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
