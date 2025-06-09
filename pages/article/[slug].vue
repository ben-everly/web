<template>
  <div class="flex flex-col items-center">
    <NuxtLink class="flex" to="/">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6 mb-4"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M12 19l-7-7 7-7" />
      </svg>
      Home
    </NuxtLink>
    <h1>Article Title</h1>
    <dl class="flex gap-2">
      <dt>Date:</dt>
      <dd>
        <NuxtTime
          datetime="2025-06-09T17:26:00Z"
          relative
          numeric="auto"
          style="long"
        />
      </dd>
    </dl>
    <p>This is the article page.</p>
  </div>
</template>
