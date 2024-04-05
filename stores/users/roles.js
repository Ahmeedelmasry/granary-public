import { defineStore } from "pinia";

export const userRoles = defineStore("userRoles", {
  state: () => ({
    the_user_roles: {
      SUPPLYINVOICE: {
        title: "فواتير التوريد",
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
      // reports: {
      //   title: "التقارير",
      //   obj: {
      //     invoices: {
      //       name: "فواتير التوريد",
      //       value: false,
      //     },
      //     clientDaily: {
      //       name: "يوميات العملاء",
      //       value: false,
      //     },
      //     supplierDues: {
      //       name: "مستحقات الموردين",
      //       value: false,
      //     },
      //     supplierPayments: {
      //       name: "سدادات الموردين",
      //       value: false,
      //     },
      //     clientPayments: {
      //       name: "سدادات الشركة",
      //       value: false,
      //     },
      //   },
      // },
    },
  }),
});
