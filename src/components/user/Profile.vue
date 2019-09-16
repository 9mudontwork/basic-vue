<template>
  <v-container class="fill-height">
    <v-row>
      <v-col class="d-flex justify-center">
        <v-card class="profile-card">
          <div class="profile-card-header">
            <v-card class="grey darken-4">
              <v-card-title>
                <v-icon large left>mdi-account</v-icon>Profile
              </v-card-title>
              <v-card-text>Edit your profile</v-card-text>
            </v-card>
          </div>

          <v-card-text>
            <v-form ref="form" autocomplete="off">
              <v-row>
                <v-col cols="12" sm="6">
                  <v-text-field label="Name" required></v-text-field>
                </v-col>

                <v-col cols="12" sm="6">
                  <v-text-field label="Surname" required></v-text-field>
                </v-col>

                <v-col cols="12" sm="6">
                  <v-text-field label="NickName" required></v-text-field>
                </v-col>

                <v-col cols="12" sm="6">
                  <v-dialog
                    ref="dialog"
                    v-model="modalDatePicker"
                    :return-value.sync="date"
                    persistent
                    full-width
                    width="290px"
                  >
                    <template v-slot:activator="{ on }">
                      <v-text-field
                        v-model="date"
                        label="Birthday"
                        prepend-icon="mdi-calendar"
                        readonly
                        v-on="on"
                      ></v-text-field>
                    </template>
                    <v-date-picker v-model="date" scrollable>
                      <div class="flex-grow-1"></div>
                      <v-btn text color="primary" @click="modalDatePicker = false">Cancel</v-btn>
                      <v-btn text color="primary" @click="$refs.dialog.save(date)">OK</v-btn>
                    </v-date-picker>
                  </v-dialog>
                </v-col>

                <v-col cols="12" sm="8">
                  <v-text-field label="Address" required></v-text-field>
                </v-col>

                <v-col cols="12" sm="4">
                  <v-text-field label="Country" required></v-text-field>
                </v-col>

                <v-col cols="12" sm="4">
                  <v-text-field label="State" required></v-text-field>
                </v-col>

                <v-col cols="12" sm="4">
                  <v-text-field label="City" required></v-text-field>
                </v-col>

                <v-col cols="12" sm="4">
                  <v-text-field label="Postal Code" required></v-text-field>
                </v-col>
              </v-row>

              <div class="d-flex justify-end">
                <v-btn>Save</v-btn>
              </div>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { title: "Dashboard", icon: "mdi-view-dashboard" },
        { title: "Photos", icon: "mdi-image" },
        { title: "About", icon: "mdi-help-box" }
      ],
      right: null,
      date: new Date().toISOString().substr(0, 10),
      modalDatePicker: false
    };
  },

  computed: {
    // ages() {
    //   return Array(108)
    //     .fill(0)
    //     .map((e, i) => i + 13);
    // }
  }
};
</script>

<style>
.profile-card {
  width: 100%;
  max-width: 700px;
  margin-bottom: 24px;
  margin-top: 25px;
}
.profile-card-header {
  margin: 0 auto;
  max-width: calc(100% - 32px);
  position: relative;
  top: -24px;
  margin-bottom: -24px;
}
</style>