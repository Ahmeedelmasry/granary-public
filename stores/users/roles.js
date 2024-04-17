import { defineStore } from "pinia";

export const userRoles = defineStore("userRoles", {
  state: () => ({
    the_user_roles: {
      SUPPLYINVOICE: {
        title: "فواتير التوريد",
        selectAll: false,
        obj: {
          GETALL: {
            name: "عرض",
            value: false,
          },
          ADD: {
            name: "اضافة",
            value: false,
          },
          UPDATE: {
            name: "تعديل",
            value: false,
          },
          DELETE: {
            name: "حذف",
            value: false,
          },
        },
      },
      SUPPLIERPAYMENT: {
        title: "سدادات الموردين",
        selectAll: false,
        obj: {
          GETALL: {
            name: "عرض",
            value: false,
          },
          ADD: {
            name: "اضافة",
            value: false,
          },
          UPDATE: {
            name: "تعديل",
            value: false,
          },
          DELETE: {
            name: "حذف",
            value: false,
          },
        },
      },
      COMPANYDUES: {
        title: "مستحقات الشركة",
        selectAll: false,
        obj: {
          GETALL: {
            name: "عرض",
            value: false,
          },
          ADD: {
            name: "اضافة",
            value: false,
          },
          UPDATE: {
            name: "تعديل",
            value: false,
          },
          DELETE: {
            name: "حذف",
            value: false,
          },
        },
      },
      PRODUCTTYPE: {
        title: "فروزات المنتج",
        selectAll: false,
        obj: {
          GETALL: {
            name: "عرض",
            value: false,
          },
          ADD: {
            name: "اضافة",
            value: false,
          },
          UPDATE: {
            name: "تعديل",
            value: false,
          },
          DELETE: {
            name: "حذف",
            value: false,
          },
        },
      },
      PRODUCT: {
        title: "المنتجات",
        selectAll: false,
        obj: {
          GETALL: {
            name: "عرض",
            value: false,
          },
          ADD: {
            name: "اضافة",
            value: false,
          },
          UPDATE: {
            name: "تعديل",
            value: false,
          },
          DELETE: {
            name: "حذف",
            value: false,
          },
        },
      },
      GRANARY: {
        title: "الصوامع",
        selectAll: false,
        obj: {
          GETALL: {
            name: "عرض",
            value: false,
          },
          ADD: {
            name: "اضافة",
            value: false,
          },
          UPDATE: {
            name: "تعديل",
            value: false,
          },
          DELETE: {
            name: "حذف",
            value: false,
          },
        },
      },
      CLIENT: {
        title: "العملاء",
        selectAll: false,
        obj: {
          GETALL: {
            name: "عرض",
            value: false,
          },
          ADD: {
            name: "اضافة",
            value: false,
          },
          UPDATE: {
            name: "تعديل",
            value: false,
          },
          DELETE: {
            name: "حذف",
            value: false,
          },
        },
      },
      SUPPLIER: {
        title: "الموردين",
        selectAll: false,
        obj: {
          GETALL: {
            name: "عرض",
            value: false,
          },
          ADD: {
            name: "اضافة",
            value: false,
          },
          UPDATE: {
            name: "تعديل",
            value: false,
          },
          DELETE: {
            name: "حذف",
            value: false,
          },
        },
      },
      PACKAGEUNIT: {
        title: "وحدات الفوارغ",
        selectAll: false,
        obj: {
          GETALL: {
            name: "عرض",
            value: false,
          },
          ADD: {
            name: "اضافة",
            value: false,
          },
          UPDATE: {
            name: "تعديل",
            value: false,
          },
          DELETE: {
            name: "حذف",
            value: false,
          },
        },
      },
      TAX: {
        title: "الضرائب",
        selectAll: false,
        obj: {
          GETALL: {
            name: "عرض",
            value: false,
          },
          ADD: {
            name: "اضافة",
            value: false,
          },
          UPDATE: {
            name: "تعديل",
            value: false,
          },
          DELETE: {
            name: "حذف",
            value: false,
          },
        },
      },
      USER: {
        title: "المستخدمين",
        obj: {
          GETALL: {
            name: "عرض",
            value: false,
          },
          ADD: {
            name: "اضافة",
            value: false,
          },
          UPDATE: {
            name: "تعديل",
            value: false,
          },
          DELETE: {
            name: "حذف",
            value: false,
          },
        },
      },
      "": {
        title: "التقارير",
        obj: {
          SUPPLYINVOICE_REPORT: {
            name: "يوميات العملاء",
            value: false,
          },
          SUPPLIERPAYMENT_REPORT2: {
            name: "مستحقات الموردين",
            value: false,
          },
          SUPPLIERPAYMENT_REPORT1: {
            name: "سدادات الموردين",
            value: false,
          },
          GETCOMPANYDUESPAYMENTS_REPORT: {
            name: "مستحقات الشركة",
            value: false,
          },
        },
      },
    },
  }),
});
