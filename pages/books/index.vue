<script setup lang="ts">
definePageMeta({
	path: "/",
});

const books = [
	{
		id: 1,
		isbn: "9780358380252, 0358380251",
		title: "The Return of the King",
		author: "John Ronald Reuel Tolkien",
		publisher: "HarperCollins",
		datePublished: "October 6, 2020",
		description:
			"Begin your journey into Middle-earth... A New Legend Begins on Prime Video, in The Lord of the Rings: The Rings of Power. The Return of the King is the third part of J.R.R. Tolkien's epic adventure, The Lord of the Rings. One Ring to rule them all, One Ring to find them, One Ring to bring them all and in the darkness bind them. J.R.R. Tolkien's classic epic fantasy trilogy The Lord of the Rings, now with a fresh new package for Book 3, The Return of the King. As the Shadow of Mordor grows across the land, the Companions of the Ring have become involved in separate adventures. Aragorn, revealed as the hidden heir of the ancient Kings of the West, has joined with the Riders of Rohan against the forces of Isengard and takes part in the desperate victory of the Hornburg. Merry and Pippin, captured by Orcs, escape into Fangorn Forest and there encounter the Ents. Gandalf has miraculously returned and defeated the evil wizard, Saruman. Sam has left his master for dead after a battle with the giant spider, Shelob; but Frodo is still alive--now in the foul hands of the Orcs. And all the while the armies of the Dark Lord are massing as the One Ring draws ever nearer to the Cracks of Doom. Source: Publisher",
		thumbnail: "/images/return-of-king.jpg",
	},
	{
		id: 2,
		isbn: "9780358380245, 0358380243",
		title: "The Two Towers",
		author: "John Ronald Reuel Tolkien",
		publisher: "HarperCollins",
		datePublished: "February 15, 2012",
		description:
			"The second volume in J.R.R. Tolkien's epic adventure THE LORD OF THE RINGS One Ring to rule them all, One Ring to find them, One Ring to bring them all and in the darkness bind themFrodo and his Companions of the Ring have been beset by danger during their quest to prevent the Ruling Ring from falling into the hands of the Dark Lord by destroying it in the Cracks of Doom. They have lost the wizard, Gandalf, in a battle in the Mines of Moria. And Boromir, seduced by the power of the Ring, tried to seize it by force. While Frodo and Sam made their escape, the rest of the company was attacked by Orcs. Now they continue the journey alone down the great River Anduin—alone, that is, save for the mysterious creeping figure that follows wherever they go.“Among the gratest works of imaginative fiction of the twentieth century. The book presents us with the richest profusion of new lands and creatures, from the beauty of Lothlórien to the horror of Mordor.” – Sunday Telegrap Source: Publisher",
		thumbnail: "/images/two-tower.jpg",
	},
	{
		id: 3,
		isbn: "9780358380238, 0358380235",
		title: "The Fellowship of the Ring",
		author: "John Ronald Reuel Tolkien",
		publisher: "HarperCollins",
		datePublished: " February 15, 2012",
		description:
			"The first volume in J.R.R. Tolkien's epic adventure THE LORD OF THE RINGS One Ring to rule them all, One Ring to find them, One Ring to bring them all and in the darkness bind themIn ancient times the Rings of Power were crafted by the Elven-smiths, and Sauron, the Dark Lord, forged the One Ring, filling it with his own power so that he could rule all others. But the One Ring was taken from him, and though he sought it throughout Middle-earth, it remained lost to him. After many ages it fell by chance into the hands of the hobbit Bilbo Baggins. From Sauron's fastness in the Dark Tower of Mordor, his power spread far and wide. Sauron gathered all the Great Rings to him, but always he searched for the One Ring that would complete his dominion. When Bilbo reached his eleventy-first birthday he disappeared, bequeathing to his young cousin Frodo the Ruling Ring and a perilous quest: to journey across Middle-earth, deep into the shadow of the Dark Lord, and destroy the Ring by casting it into the Cracks of Doom. The Lord of the Rings tells of the great quest undertaken by Frodo and the Fellowship of the Ring: Gandalf the Wizard; the hobbits Merry, Pippin, and Sam; Gimli the Dwarf; Legolas the Elf; Boromir of Gondor; and a tall, mysterious stranger called Strider. Source: Publisher",
		thumbnail: "/images/fellow.jpg",
	},
];
</script>

<template>
	<div class="w-full p-20">
		<div class="table-action flex justify-between">
			<Input class="max-w-[500px]" type="text" placeholder="Search books" />

			<Button class="flex items-center gap-x-2">Add Book <IconPlus /> </Button>
		</div>

		<Table class="mt-10">
			<TableHeader>
				<TableRow>
					<TableHead class="w-[100px]"> Action </TableHead>
					<TableHead>ISBN</TableHead>
					<TableHead>Title</TableHead>
					<TableHead>Author</TableHead>
					<TableHead>Publisher</TableHead>
					<TableHead>Date Published</TableHead>
					<TableHead>Description</TableHead>
					<TableHead>Thumbnail</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				<TableRow v-for="book in books">
					<TableCell>
						<div class="flex items-center flex-col gap-y-5">
							<IconEye class="text-lg text-slate-500 cursor-pointer opacity-50 hover:opacity-100 transition-opacity" />
							<IconEdit class="text-lg text-slate-500 cursor-pointer opacity-50 hover:opacity-100 transition-opacity" />
							<IconTrash class="text-lg text-red-500 cursor-pointer opacity-50 hover:opacity-100 transition-opacity" />
						</div>
					</TableCell>
					<TableCell>{{ book.isbn }}</TableCell>
					<TableCell>{{ book.title }}</TableCell>
					<TableCell>{{ book.author }}</TableCell>
					<TableCell>{{ book.publisher }}</TableCell>
					<TableCell>{{ book.datePublished }}</TableCell>
					<TableCell class="w-[500px]">
						<p class="line-clamp-4 text-ellipsis">
							{{ book.description }}
						</p>
					</TableCell>
					<TableCell>
						<img :src="book.thumbnail" alt="The Return of the King" width="100" height="150" />
					</TableCell>
				</TableRow>
			</TableBody>
		</Table>
	</div>
</template>

<style scoped></style>
