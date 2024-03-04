<script setup>
useSeoMeta({
	title: "Librarian",
});
</script>

<template>
	<Html lang="id">
		<Link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🤓</text></svg>" />
		<div>
			<NuxtLayout>
				<main class="w-full">
					<NuxtLoadingIndicator color="#B68A62" />
					<NuxtPage />
				</main>
			</NuxtLayout>
		</div>
	</Html>
</template>

<style lang="postcss" scoped>
main {
	@apply pb-10;
}

.page-enter-active,
.page-leave-active {
	transition: all 0.1s;
}
.page-enter-from,
.page-leave-to {
	opacity: 0;
	filter: blur(1rem);
}
</style>
