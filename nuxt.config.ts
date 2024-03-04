export default defineNuxtConfig({
	ssr: false,
	modules: ["@nuxtjs/tailwindcss", "shadcn-nuxt", "@vueuse/nuxt", "nuxt-lucide-icons"],
	tailwindcss: {
		exposeConfig: true,
	},
	shadcn: {
		prefix: "",
		componentDir: "./components/ui",
	},
	lucide: {
		namePrefix: "Icon",
	},
	hooks: {
		"pages:extend"(pages) {
			const pagesToRemove: NuxtPage[] = [];
			pages.forEach((page) => {
				if (page.path.includes("component")) pagesToRemove.push(page);
			});

			pagesToRemove.forEach((page) => {
				pages.splice(pages.indexOf(page), 1);
			});
		},
	},

	components: [
		"~/components",
		{
			path: "~/pages",
			pattern: "*/components/**",
			pathPrefix: true,
		},
	],
});
