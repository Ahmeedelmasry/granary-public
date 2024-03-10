<template>
  <div class="dues_supplier_payments">
    <table
      class="w-100 text-right"
      dir="rtl"
      style="
        border: 1px solid rgb(179, 179, 179);
        border-radius: 12px;
        padding: 13px;
        background: #f0f0f0ba;
      "
      id="not_styled_print"
    >
      <tbody>
        <tr>
          <th class="pb-2">اسم العميل:</th>
          <td class="pb-2">
            {{ selectedClient ? selectedClient.name : "الكل" }}
          </td>
          <th class="pb-2">اسم الصومعة:</th>
          <td class="pb-2">
            {{ selectedGranary ? selectedGranary.name : "الكل" }}
          </td>
        </tr>
        <tr>
          <th class="pb-2">تاريخ من</th>
          <td class="pb-2">
            {{ fromDate ? fromDate : "الكل" }}
          </td>
          <th class="pb-2">تاريخ الي</th>
          <td>
            {{ toDate ? toDate : "الكل" }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import moment from "moment";

const props = defineProps([
  "selectedClient",
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
