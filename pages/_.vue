<template>
  <div class="container sm:px-16 px-6 pt-8 max-w-5xl">
    <div v-if="$fetchState.pending">
      Fetching post #{{ $route.params.id }}...
    </div>
    <div v-else>
      <h1 class="text-5xl avenir font-bold leading-none text-gray-800 pb-6">
        {{ item.title }}
      </h1>

      <span v-for="block in item.body" :key="block.id" id="streamfield">
        <div v-if="block.type == 'heading'">
          <h2 class="text-xl pb-4 leading-tight">{{ block.value }}</h2>
        </div>

        <div v-else-if="block.type == 'paragraph'">
          <!-- v-interpolation converts internal links to nuxt links -->
          <!-- see https://dev.to/wearethreebears/handle-api-driven-content-links-in-nuxt-js-3afj -->
          <p class="copy" v-interpolation v-html="block.value" />
        </div>
        <div v-else-if="block.type == 'image'">
          <img
            :src="block.value.medium.src"
            :width="block.value.medium.width / 2"
            :height="block.value.medium.height / 2"
            class="my-2 rounded"
          />
        </div>
        <div v-else-if="block.type == 'embed'">
          <div class="my-2" v-html="block.value.html" />
        </div>
      </span>
      <p class="athelas text-xl py-4 text-gray-600">
        {{ item.date | datify }}
      </p>
    </div>
  </div>
</template>

<script>
import utils from "../components/lib";

export default {
  data() {
    return {
      item: { meta: {} },
    };
  },
  head() {
    return {
      title: this.item.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.item.meta.search_description,
        },
      ],
    };
  },
  async fetch() {
    if (typeof this.$route.query.token !== "undefined") {
      this.item = await this.$axios.$get(
        `${process.env.baseApiUrl}/page_preview/1/?content_type=blog.blogpage&token=${this.$route.query.token}&format=json`
      );
    } else {
      // flatten paths deeper than the root
      // 1. remove leading and trailing slashes
      var slug = this.$route.path.replace(/^\/|\/$/g, "");
      var slug_parts = slug.split("/");
      // 2. if the requested path is deeper than the root,
      // ignore everything up to the last part
      if (slug_parts.length > 1) {
        slug = slug_parts[slug_parts.length - 1];
      }
      this.item = await this.$axios.$get(
        `${process.env.baseApiUrl}/pages/${slug}/`
      );
    }
  },
  filters: {
    datify: utils.datify,
  },
};
</script>

<style>
.athelas {
  font-family: "Source Serif Pro", athelas, georgia, serif;
}
.copy {
  @apply athelas;
  @apply leading-normal text-gray-800 max-w-2xl mt-5;
  font-size: 1.4rem;
}
.copy p {
  @apply mt-5;
}
.copy p a {
  @apply bg-teal-100;
}
.avenir {
  font-family: "avenir next", avenir, -apple-system, BlinkMacSystemFont,
    "helvetica neue", helvetica, ubuntu, roboto, noto, "segoe ui", arial,
    sans-serif;
}
</style>
