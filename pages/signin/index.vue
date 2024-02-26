<template>
  <div class="sign_in_page pa-0 my-5 pt-6">
    <v-container
      style="
        box-shadow: rgba(0, 0, 0, 0.15) 0px 0.5rem 1rem;
        border-radius: 10px;
        overflow: hidden;
      "
      class="py-0"
    >
      <v-row class="pa-0">
        <v-col cols="12" md="6">
          <SigninFields />
        </v-col>
        <v-col cols="12" md="6" class="pa-0 pe-0 pb-0 d-none d-md-block">
          <SigninImg />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
