import { defineStore } from "pinia";

export const userRoles = defineStore("userRoles", {
  state: () => ({
    the_user_roles: {
      invoices: {
        title: "فواتير التوريد",
        obj: {
          list: {
            name: "عرض",
            value: false,
          },
          add: {
            name: "اضافة",
            value: false,
          },
          update: {
            name: "تعديل",
            value: false,
          },
          delete: {
            name: "حذف",
            value: false,
          },
        },
      },
      supplierPayment: {
        title: "سدادات الموردين",
        obj: {
          list: {
            name: "عرض",
            value: false,
          },
          add: {
            name: "اضافة",
            value: false,
          },
          update: {
            name: "تعديل",
            value: false,
          },
          delete: {
            name: "حذف",
            value: false,
          },
        },
      },
      companyDues: {
        title: "مستحقات الشركة",
        obj: {
          list: {
            name: "عرض",
            value: false,
          },
          add: {
            name: "اضافة",
            value: false,
          },
          update: {
            name: "تعديل",
            value: false,
          },
          delete: {
            name: "حذف",
            value: false,
          },
        },
      },
      productTypes: {
        title: "فروزات المنتج",
        obj: {
          list: {
            name: "عرض",
            value: false,
          },
          add: {
            name: "اضافة",
            value: false,
          },
          update: {
            name: "تعديل",
            value: false,
          },
          delete: {
            name: "حذف",
            value: false,
          },
        },
      },
      products: {
        title: "المنتجات",
        obj: {
          list: {
            name: "عرض",
            value: false,
          },
          add: {
            name: "اضافة",
            value: false,
          },
          update: {
            name: "تعديل",
            value: false,
          },
          delete: {
            name: "حذف",
            value: false,
          },
        },
      },
      granaries: {
        title: "الصوامع",
        obj: {
          list: {
            name: "عرض",
            value: false,
          },
          add: {
            name: "اضافة",
            value: false,
          },
          update: {
            name: "تعديل",
            value: false,
          },
          delete: {
            name: "حذف",
            value: false,
          },
        },
      },
      clients: {
        title: "العملاء",
        obj: {
          list: {
            name: "عرض",
            value: false,
          },
          add: {
            name: "اضافة",
            value: false,
          },
          update: {
            name: "تعديل",
            value: false,
          },
          delete: {
            name: "حذف",
            value: false,
          },
        },
      },
      suppliers: {
        title: "الموردين",
        obj: {
          list: {
            name: "عرض",
            value: false,
          },
          add: {
            name: "اضافة",
            value: false,
          },
          update: {
            name: "تعديل",
            value: false,
          },
          delete: {
            name: "حذف",
            value: false,
          },
        },
      },
      productUnits: {
        title: "وحدات الفوارغ",
        obj: {
          list: {
            name: "عرض",
            value: false,
          },
          add: {
            name: "اضافة",
            value: false,
          },
          update: {
            name: "تعديل",
            value: false,
          },
          delete: {
            name: "حذف",
            value: false,
          },
        },
      },
      taxes: {
        title: "الضرائب",
        obj: {
          list: {
            name: "عرض",
            value: false,
          },
          add: {
            name: "اضافة",
            value: false,
          },
          update: {
            name: "تعديل",
            value: false,
          },
          delete: {
            name: "حذف",
            value: false,
          },
        },
      },
      users: {
        title: "المستخدمين",
        obj: {
          list: {
            name: "عرض",
            value: false,
          },
          add: {
            name: "اضافة",
            value: false,
          },
          update: {
            name: "تعديل",
            value: false,
          },
          delete: {
            name: "حذف",
            value: false,
          },
        },
      },
      reports: {
        title: "التقارير",
        obj: {
          invoices: {
            name: "فواتير التوريد",
            value: false,
          },
          clientDaily: {
            name: "يوميات العملاء",
            value: false,
          },
          supplierDues: {
            name: "مستحقات الموردين",
            value: false,
          },
          supplierPayments: {
            name: "سدادات الموردين",
            value: false,
          },
          clientPayments: {
            name: "سدادات الشركة",
            value: false,
          },
        },
      },
    },
  }),
  //   actions: {
  //     changeLang(language) {
  //       this.lang = [language];
  //     },
  //     switchDashboard(val) {
  //       this.isDashboard = val;
  //     },
  //   },
});
