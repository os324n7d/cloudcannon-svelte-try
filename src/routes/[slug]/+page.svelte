<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	let { page, post } = data;
	let { postTitle } = post;
</script>

<h1>{postTitle}</h1>
<svelte:component this={page} />
