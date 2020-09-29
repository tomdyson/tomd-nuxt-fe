<template>
  <div>
    <header
      class="sm:px-16 px-4 pt-8 pb-6 border-b border-gray-200 border-opacity-75"
    >
      <h4 class="text-xl avenir font-normal">
        <a href="/" class="no-underline">tomd.org</a>
        <span class="text-gray-600">~</span>
        <a href="/about" class="no-underline">about</a>
      </h4>
    </header>
    <Nuxt />
  </div>
</template>

<style>
/* source-serif-pro-regular - latin */
@font-face {
  font-family: "Source Serif Pro";
  font-style: normal;
  font-weight: 400;
  src: local("Source Serif Pro"), local("SourceSerifPro-Regular"),
    url("~assets/fonts/source-serif-pro-v10-latin-regular.woff2")
      format("woff2"),
    /* Chrome 26+, Opera 23+, Firefox 39+ */
      url("~assets/fonts/source-serif-pro-v10-latin-regular.woff")
      format("woff"); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}

/* source-serif-pro-italic - latin */
@font-face {
  font-family: "Source Serif Pro";
  font-style: italic;
  font-weight: 400;
  src: local("Source Serif Pro Italic"), local("SourceSerifPro-It"),
    url("~assets/fonts/source-serif-pro-v10-latin-italic.woff2") format("woff2"),
    /* Chrome 26+, Opera 23+, Firefox 39+ */
      url("~assets/fonts/source-serif-pro-v10-latin-italic.woff") format("woff"); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}

.avenir {
  font-family: "avenir next", avenir, -apple-system, BlinkMacSystemFont,
    "helvetica neue", helvetica, ubuntu, roboto, noto, "segoe ui", arial,
    sans-serif;
}
</style>
