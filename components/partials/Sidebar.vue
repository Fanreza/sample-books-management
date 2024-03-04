<script setup lang="ts">
const { width } = useWindowSize();

const links = [
	{
		name: "Books",
		route: "/",
		icon: resolveComponent("IconLibrary"),
	},
	{
		name: "Journal",
		route: "/journals",
		icon: resolveComponent("IconNotebookText"),
	},
];
</script>

<template>
	<nav class="w-[80px]">
		<div class="sidebar min-h-screen border-r border-slate-200 hidden sm:block">
			<div class="flex flex-col items-center justify-center h-full">
				<div class="flex flex-col items-center gap-y-10 mt-10">
					<nuxt-link :to="link.route" class="text-black px-4 p-3 rounded-md transition-colors duration-500" v-for="link in links">
						<TooltipProvider :delayDuration="0">
							<Tooltip>
								<TooltipTrigger> <component :is="link.icon" class="text-2xl" /></TooltipTrigger>
								<TooltipContent align="center" side="right">
									<p>{{ link.name }}</p>
								</TooltipContent>
							</Tooltip>
						</TooltipProvider>
					</nuxt-link>
				</div>
			</div>
		</div>

		<Sheet class="sm:hidden" v-if="width < 640">
			<SheetTrigger class="sm:hidden">
				<IconMenu class="text-2xl" />
			</SheetTrigger>
			<SheetContent side="bottom" class="sm:hidden">
				<SheetHeader>
					<SheetDescription>
						<ul class="flex flex-col gap-y-5">
							<li v-for="link in links" :key="link.name" class="font-medium text-white/70 text-lg">
								<nuxt-link :to="link.route" class="hover:text-white">
									{{ link.name }}
								</nuxt-link>
							</li>
						</ul>
					</SheetDescription>
				</SheetHeader>
			</SheetContent>
		</Sheet>
	</nav>
</template>

<style scoped lang="postcss">
.router-link-active {
	@apply bg-slate-800 text-white;
}
</style>
