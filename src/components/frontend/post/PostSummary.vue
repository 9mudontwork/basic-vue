<template>
  <v-container class="postsummary-row">
    <v-row>
      <v-col cols="12" sm="6" v-for="post in post" :key="post.id">
        <v-card>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="headline">{{post.title}}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-card-text>{{post.description}}</v-card-text>

          <v-list-item>
            <v-list-item-avatar color="grey"></v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title class="body-2">{{post.author}}</v-list-item-title>
              <v-list-item-subtitle class="caption">{{post.postDate}}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      post: [
        {
          id: "d9ab37f9e436a9729360f43360f2311f",
          title: "Home Fries",
          description:
            "lacus morbi sem mauris laoreet ut rhoncus aliquet pulvinar sed nisl nunc rhoncus dui vel sem sed",
          author: "cbudcock0",
          authorId: "4c0c8fbd7706a7d89c6edf07699153e3",
          postDate: "8/3/2015"
        },
        {
          id: "b1dd1fea43e275472fcb48c2ad8b93ee",
          title: "Mooz-lum",
          description:
            "sit amet diam in magna bibendum imperdiet nullam orci pede venenatis",
          author: "gandrelli1",
          authorId: "53460956b13a79d0f926033bcdea8fe7",
          postDate: "8/15/2015"
        },
        {
          id: "d7133da4ec069cfb78deae329038db0f",
          title: "Governess, The",
          description:
            "duis bibendum felis sed interdum venenatis turpis enim blandit mi",
          author: "benevold2",
          authorId: "4e9fa2e17c7c4df7c03da179dcb32f73",
          postDate: "1/25/2015"
        },
        {
          id: "f1a273070dea3e5e3f57b2af4a511df9",
          title: "His Private Secretary",
          description:
            "sem mauris laoreet ut rhoncus aliquet pulvinar sed nisl nunc rhoncus dui",
          author: "tambrosio3",
          authorId: "1b8587c13c48014faaac7f18d09d8cfa",
          postDate: "6/29/2015"
        },
        {
          id: "97f9439911cdcb3de03aab4ef5412eae",
          title: "Past, The (Le passé)",
          description:
            "sodales sed tincidunt eu felis fusce posuere felis sed lacus morbi sem mauris laoreet ut rhoncus",
          author: "gweathers4",
          authorId: "5f4f22eff415188238d649dcdfd54508",
          postDate: "9/5/2015"
        },
        {
          id: "cb90f847aa739afedb49ebffe0410ed4",
          title: "Army of Crime (L'armée du crime)",
          description: "in felis donec semper sapien a libero nam dui proin",
          author: "jbavister5",
          authorId: "7482e13b09b77e181d0db2e433dc9843",
          postDate: "8/25/2015"
        },
        {
          id: "6e360fb09bbcd018d484d3a4458fe9a5",
          title: "American Ninja 5",
          description:
            "sit amet nunc viverra dapibus nulla suscipit ligula in lacus curabitur at ipsum ac tellus",
          author: "mwilbore6",
          authorId: "10d62802f6e1c0c7a61e4b1389d89865",
          postDate: "7/31/2015"
        },
        {
          id: "1cbfb857098c61d3cc46b420843147ea",
          title: "Glass Menagerie, The",
          description:
            "sapien urna pretium nisl ut volutpat sapien arcu sed augue aliquam erat volutpat in congue etiam justo etiam",
          author: "oantonietti7",
          authorId: "83a08a67845122dd6279ebb0a3f0273a",
          postDate: "11/9/2014"
        },
        {
          id: "d6a3f0a5cfc4c1e1b658b3c58a51a94c",
          title: "Alien Nation: Dark Horizon",
          description:
            "non velit donec diam neque vestibulum eget vulputate ut ultrices vel augue",
          author: "tmatteau8",
          authorId: "9722018de05f905eb4eb460c43a6fc84",
          postDate: "9/19/2015"
        },
        {
          id: "86e6304c114379bb2545dc1ce0372fae",
          title: "Hanging Up",
          description:
            "tortor sollicitudin mi sit amet lobortis sapien sapien non mi integer ac neque duis bibendum",
          author: "emcardle9",
          authorId: "96b23e48da123a43ada9c4dbaca7e8ec",
          postDate: "10/8/2014"
        }
      ]
    };
  }
};
</script>

<style>
.postsummary-row {
  max-width: 900px;
}
</style>