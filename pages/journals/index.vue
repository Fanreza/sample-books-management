<script setup lang="ts">
const books = [
	{
		id: 1,
		title: "Pengembangan Sistem Informasi Praktik Kerja Lapangan (PKL) Siswa Berbasis Website Menggunakan Metode Extreme Programming (Studi Kasus: SMK Negeri 1 Sumenep) ",
		author: "M. Ro'if, Tri Afirianto, Satrio Hadi Wijoyo ",
		datePublished: "29-02-2024",
		description:
			"Dalam pelaksanaannya, kegiatan Praktik Kerja Lapangan (PKL) di SMK Negeri 1 Sumenep masih kurang efektif karena dalam pelaksanaannya masih dilaksanakan secara manual, sehingga proses manajemen kegiatan PKL masih kurang efektif. Berdasarkan permasalahan tersebut, implementasi suatu sistem dibutuhkan untuk mengelola kebutuhan PKL sehingga kegiatan PKL dapat terlaksana secara efektif dan efisien. Peneliti melakukan pengembangan sistem informasi PKL berbasis website di SMK Negeri 1 Sumenep. Peneliti menggunakan metode pengembangan Extreme Programming (XP) dengan harapan sistem dapat dikembangkan dengan cepat dan agile sehingga semua kebutuhan yang diinginkan oleh stakeholder dapat tercapai. Hasil pengujian unit testing secara keseluruhan menghasilkan total 45 tests case dan 119 assertions, dan untuk pengujian acceptance testing menghasilkan total 69 tests case dengan nilai 100% accepted. Hasil pengujian system usability scale (SUS) keseluruhan sistem memiliki nilai rata-rata 76,88 yang berada dalam range 70 – 80 dengan nilai “C” atau “Good”. Sehingga dapat disimpulkan bahwa sistem informasi PKL berbasis website berada dalam acceptability range “acceptable”.",
	},

	{
		id: 2,
		title: "Segmentasi Pelanggan B2B Berdasarkan Perilaku Pembelian dan Firmografi pada PT. Sukses Riau Permata (SRP)",
		author: "Siti monalisa, Novia Nurahmah",
		datePublished: "29-02-2024",
		description:
			"Aset yang memberi pengaruh besar pada proses bisnis perusahaan retail adalah pelanggan. PT. Sukses Riau Permata (SRP) adalah badan usaha yang bergerak dalam bidang distribusi barang konsumsi yang pelanggannya banyak berjenis Business to Business (B2B). Permasalahan yang muncul pada PT. SRP ini adalah menurunnya jumlah konsumen sebanyak 27% yang terjadi pada 6 bulan terakhir Tahun 2021 dikarenakan strategi bisnis perusahaan belum mengaplikasikan Customer Relationship Management (CRM). PT. SRP belum mengidentifikasi pelanggan mana yang berkontribusi dan mana yang tidak memberikan keuntungan pada perusahaan akibatnya program pemasaran masih diberlakukan seragam kepada semua pelanggan. Maka dari itu pada penelitian ini dilakukan pengelompokan pelanggan berdasar kepada perilaku pembelian dan firmografi dengan algoritma Fuzzy C-Means. Indeks Davies Bouldin (DBI) digunakan untuk memverifikasi validitas hasil klasterisasi. Dari proses klasterisasi pelanggan dihasilkan 6 klaster yang dianalisis sesuai karakteristik segmen dengan segmen pelanggan terbaik yaitu cluster 4 (Superstar Segment) yang memiliki 383 pelanggan. Sedangkan segmen pelanggan terparah, yaitu cluster 6 (New Dormant Segment) yang memiliki 298 pelanggan. Adapun di akhir penelitian didapatkan hasil yaitu usulan strategi penjualan terbaik yang sesuai dengan deskripsi karakteristik dan kebutuhan segmen pelanggan",
	},
];
</script>

<template>
	<div class="w-full p-20">
		<div class="table-action flex justify-between">
			<Input class="max-w-[500px]" type="text" placeholder="Search journals" />

			<Button class="flex items-center gap-x-2">Add Journal <IconPlus /> </Button>
		</div>

		<Table class="mt-10">
			<TableHeader>
				<TableRow>
					<TableHead class="w-[100px]"> Action </TableHead>
					<TableHead>Title</TableHead>
					<TableHead>Author</TableHead>
					<TableHead>Date Published</TableHead>
					<TableHead>Description</TableHead>
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
					<TableCell>{{ book.title }}</TableCell>
					<TableCell>{{ book.author }}</TableCell>
					<TableCell>{{ book.datePublished }}</TableCell>
					<TableCell class="w-[500px]">
						<p class="line-clamp-4 text-ellipsis">
							{{ book.description }}
						</p>
					</TableCell>
				</TableRow>
			</TableBody>
		</Table>
	</div>
</template>

<style scoped></style>
