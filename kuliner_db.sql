-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 25 Des 2025 pada 12.45
-- Versi server: 10.4.32-MariaDB
-- Versi PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `kuliner_db`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `feedback`
--

CREATE TABLE `feedback` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `message` text NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `feedback`
--

INSERT INTO `feedback` (`id`, `name`, `email`, `message`, `created_at`) VALUES
(1, 'joko', 'joko@gmail.com', 'keren', '2025-12-25 11:32:12');

-- --------------------------------------------------------

--
-- Struktur dari tabel `recipes`
--

CREATE TABLE `recipes` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `origin` varchar(255) DEFAULT NULL,
  `history` text DEFAULT NULL,
  `image` varchar(500) DEFAULT NULL,
  `ingredients` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`ingredients`)),
  `instructions` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`instructions`)),
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `recipes`
--

INSERT INTO `recipes` (`id`, `name`, `origin`, `history`, `image`, `ingredients`, `instructions`, `created_at`, `updated_at`) VALUES
(1, 'Bebek Bumbu Hitam Madura', 'Madura, Jawa Timur', 'Bebek bumbu hitam adalah hidangan khas Madura, Jawa Timur. Hidangan ini menggunakan bebek sebagai bahan utama yang dimasak dengan bumbu hitam yang terbuat dari rempah-rempah seperti ketumbar, kemiri, dan gula aren. Rasanya pedas, manis, dan gurih, sering disajikan dengan sambal dan lalapan. Hidangan ini telah menjadi bagian dari kuliner Madura sejak lama.', 'Bebek bumbu hitam.jpg', '[\"2 Ekor Bebek Besar\", \"1 Buah jeruk nipis\", \"1 Sdm asam rendam dengan 5 sdm air,ambil airnya\", \"air untuk merebus,secukupnya minyak untuk menumis\"]', '[\"1.Cuci bersih bebek dan hatinya. Potong2 sesuai selera. Lalu kucuri dgn jeruk nipis, diamkan sekitar 30mnt, bilas kembali. Siapkan bumbu halus. Larutkan asam dgn 4-5sdm Air, ambil airnya saja.\", \"2.Tumis bumbu halus hingga harum dengan sedikit minyak goreng. Kemudian masukan daging bebek nya, aduk rata hingga daging berubah warna pucat. Kemudian tuang air, beri garam, penyedap dan gula. Masukan juga air asam jawanya.\", \"3.Masak daging bebek sekitar 40mnt sampai empuk dan air menyusut. Aduk sesekali. Setelah itu angkat dagingnya, biarkan bumbu di dalam panci/wajan tambahkan sisa bumbu ungkep dgn minyak goreng. Masak dgn api kecil sambil terus diaduk2 sampai berubah menghitam. Hati2 gosong ya. Jangan lupa cek rasanya. Jika sudah pas, angkat. Sisihkan.\", \"4.Selanjutnya, panaskan minyak goreng. Goreng daging bebek hingga matang kecoklatan. Angkat, sisihkan.\", \"5.Sajikan bebek bersama bumbu hitamnya beserta lalapan atau sambal\"]', '2025-12-25 05:52:39', '2025-12-25 05:52:39'),
(2, 'Sate Ayam', 'Jawa', 'Sate ayam berasal dari Indonesia, khususnya Jawa. Kata \'sate\' berasal dari bahasa Jawa \'sate\' yang berarti tusuk. Hidangan ini terdiri dari potongan daging ayam yang ditusuk bambu dan dibakar, disajikan dengan bumbu kacang yang terbuat dari kacang tanah, cabai, dan rempah lainnya. Sate ayam sangat populer sebagai makanan jalanan dan hidangan pesta.', 'sate.jpg', '[\"500 gr daging ayam (fillet)\", \"Tusuk sate\", \"Bumbu kacang (kacang tanah, bawang putih, cabai, gula merah, air asam jawa)\", \"Kecap manis, jeruk limau, bawang merah iris\"]', '[\"1. Potong dadu daging ayam, lumuri dengan sedikit bumbu.\", \"2. Tusuk daging ke tusukan sate.\", \"3. Bakar sate di atas arang hingga matang sambil diolesi kecap manis.\", \"4. Sajikan dengan bumbu kacang, irisan bawang merah, dan perasan jeruk limau.\"]', '2025-12-25 05:52:39', '2025-12-25 05:52:39'),
(3, 'Nasi Goreng', 'Indonesia', 'Nasi goreng adalah hidangan nasional Indonesia yang berasal dari zaman kolonial Belanda. Awalnya, nasi goreng dibuat untuk memanfaatkan sisa nasi yang tidak terpakai. Hidangan ini terdiri dari nasi yang digoreng dengan bumbu seperti bawang putih, bawang merah, cabai, dan kecap manis, sering ditambahkan telur, ayam, atau udang. Nasi goreng telah menjadi simbol kuliner Indonesia di dunia.', 'nasigoreng.jpg', '[\"2 piring nasi putih dingin\", \"2 butir telur\", \"100 gr ayam suwir/udang\", \"Bumbu halus (bawang putih, bawang merah, cabai)\", \"Kecap manis, saus tiram, garam, merica\", \"Sayuran (sawi, kol)\"]', '[\"1. Tumis bumbu halus hingga wangi.\", \"2. Masukkan telur, orak-arik. Tambahkan ayam/udang dan sayuran.\", \"3. Masukkan nasi, aduk rata.\", \"4. Bumbui dengan kecap manis, saus tiram, garam, dan merica. Masak hingga semua tercampur rata.\"]', '2025-12-25 05:52:39', '2025-12-25 05:52:39'),
(4, 'Gado-gado', 'Jakarta', 'Gado-gado adalah salad sayuran khas Indonesia yang berasal dari Jakarta. Kata \'gado-gado\' berarti \'campur-campur\' dalam bahasa Betawi. Hidangan ini terdiri dari sayuran rebus seperti kangkung, tauge, dan kentang, disiram dengan saus kacang yang terbuat dari kacang tanah, cabai, dan gula aren. Gado-gado sering disajikan dengan lontong dan kerupuk.', 'gadogado.jpg', '[\"Sayuran rebus (kangkung, tauge, kacang panjang, kentang)\", \"Lontong/nasi\", \"Tahu dan tempe goreng\", \"Telur rebus\", \"Saus kacang\", \"Kerupuk\"]', '[\"1. Tata semua sayuran rebus, lontong, tahu, tempe, dan telur di atas piring.\", \"2. Siram dengan saus kacang yang sudah jadi.\", \"3. Taburi dengan bawang goreng dan sajikan dengan kerupuk.\"]', '2025-12-25 05:52:39', '2025-12-25 05:52:39'),
(5, 'Soto Ayam', 'Jawa', 'Soto ayam adalah sup ayam khas Indonesia yang berasal dari berbagai daerah, seperti Solo dan Lamongan. Hidangan ini terdiri dari kaldu ayam yang kaya rempah, disajikan dengan suwiran ayam, soun, tauge, dan telur. Soto ayam memiliki variasi di setiap daerah, seperti soto Lamongan yang terkenal dengan kuahnya yang gurih.', 'soto.jpg', '[\"1/2 ekor ayam\", \"2 liter air\", \"Bumbu halus (bawang merah, bawang putih, kemiri, kunyit, jahe)\", \"Serai, daun salam, daun jeruk\", \"Soun, tauge, seledri, bawang goreng, telur rebus\"]', '[\"1. Rebus ayam hingga empuk, angkat dan suwir-suwir.\", \"2. Tumis bumbu halus hingga harum, masukkan ke dalam kaldu rebusan ayam.\", \"3. Tambahkan serai, daun salam, dan daun jeruk. Masak hingga mendidih.\", \"4. Tata soun, tauge, dan suwiran ayam di mangkuk, siram dengan kuah soto panas. Sajikan dengan pelengkap.\"]', '2025-12-25 05:52:39', '2025-12-25 05:52:39'),
(6, 'Bakso', 'Indonesia', 'Bakso adalah hidangan bola daging yang berasal dari kuliner Tionghoa-Indonesia. Kata \'bakso\' berasal dari bahasa Hokkien \'bak-so\' yang berarti daging yang digiling. Hidangan ini terdiri dari bola daging sapi yang direbus, disajikan dengan kuah kaldu, mi, dan sayuran. Bakso sangat populer sebagai makanan jalanan di Indonesia.', 'bakso.jpg', '[\"250 gr daging sapi giling\", \"50 gr tepung tapioka\", \"Bawang putih, garam, merica\", \"Kuah kaldu sapi\", \"Mi kuning, bihun, sawi hijau\", \"Bawang goreng, seledri\"]', '[\"1. Campur daging giling, tepung tapioka, dan bumbu hingga rata. Bentuk menjadi bola-bola.\", \"2. Rebus bola bakso dalam air mendidih hingga mengapung.\", \"3. Siapkan mangkuk, isi dengan mi, bihun, dan sawi.\", \"4. Letakkan bakso di atasnya, siram dengan kuah kaldu panas. Taburi bawang goreng dan seledri.\"]', '2025-12-25 05:52:39', '2025-12-25 05:52:39'),
(7, 'Gudeg', 'Yogyakarta', 'Gudeg adalah hidangan khas Yogyakarta yang berasal dari zaman Mataram. Hidangan ini terbuat dari nangka muda yang dimasak dengan santan dan gula aren selama berjam-jam hingga menjadi manis dan legit. Gudeg sering disajikan dengan ayam, telur, dan sambal krecek. Gudeg telah menjadi ikon kuliner Yogyakarta.', 'gudeg.jpg', '[\"1 kg nangka muda\", \"500 ml santan kental\", \"Gula aren\", \"Bumbu halus (bawang merah, bawang putih, kemiri, ketumbar)\", \"Daun salam, lengkuas, daun jati\"]', '[\"1. Rebus nangka muda hingga empuk, tiriskan.\", \"2. Masak nangka bersama santan, bumbu halus, gula aren, dan bumbu lainnya.\", \"3. Gunakan api kecil dan masak selama beberapa jam hingga bumbu meresap dan kuah mengering. Sajikan dengan nasi dan lauk pelengkap.\"]', '2025-12-25 05:52:39', '2025-12-25 05:52:39'),
(8, 'Pempek', 'Palembang, Sumatera Selatan', 'Pempek adalah hidangan khas Palembang, Sumatera Selatan, yang berasal dari kuliner Tionghoa. Hidangan ini terbuat dari ikan tenggiri yang dicampur sagu, dibentuk dan digoreng, disajikan dengan cuko (saus cuka). Pempek telah menjadi makanan khas Palembang dan populer di seluruh Indonesia.', 'pempek.jpg', '[\"500 gr daging ikan tenggiri giling\", \"400 gr tepung sagu\", \"Air, garam\", \"Bahan cuko: gula merah, air, cuka, bawang putih, cabai rawit, ebi\"]', '[\"1. Campurkan daging ikan, air, dan garam. Uleni sambil ditambahkan tepung sagu sedikit demi sedikit hingga adonan kalis.\", \"2. Bentuk adonan (misal: lenjer atau kapal selam dengan isian telur).\", \"3. Rebus pempek hingga matang dan mengapung.\", \"4. Goreng pempek sebelum disajikan. Potong-potong dan siram dengan cuko.\"]', '2025-12-25 05:52:39', '2025-12-25 05:52:39'),
(9, 'Opor Ayam', 'Jawa', 'Opor ayam adalah hidangan ayam berkuah santan khas Indonesia, sering disajikan saat Lebaran. Hidangan ini berasal dari Jawa, terdiri dari ayam yang dimasak dengan santan, kunyit, dan rempah lainnya. Rasanya gurih dan kaya rempah, namun tidak sepedas kari. Opor ayam adalah bagian dari tradisi kuliner Lebaran.', 'opor.jpg', '[\"1 ekor ayam, potong-potong\", \"800 ml santan\", \"Bumbu halus (bawang merah, bawang putih, kemiri, ketumbar, jintan, kunyit)\", \"Serai, lengkuas, daun salam\"]', '[\"1. Tumis bumbu halus hingga harum bersama serai, lengkuas, dan daun salam.\", \"2. Masukkan potongan ayam, aduk hingga berubah warna.\", \"3. Tuangkan santan, bumbui dengan garam dan gula.\", \"4. Masak dengan api sedang hingga ayam empuk dan kuah mengental.\"]', '2025-12-25 05:52:39', '2025-12-25 05:52:39'),
(10, 'Sayur Asem', 'Jawa Barat', 'Sayur asem adalah sup sayuran khas Indonesia yang berasal dari Jawa Barat. Hidangan ini terdiri dari sayuran seperti jagung, melinjo, dan kacang panjang yang dimasak dengan air asam jawa, lengkuas, dan cabai. Rasanya asam dan segar, cocok untuk cuaca panas. Sayur asem sering disajikan dengan nasi dan ikan asin.', 'sayurasem.jpg', '[\"Jagung manis, labu siam, melinjo, kacang panjang, daun melinjo\", \"Air\", \"Bumbu halus (bawang merah, cabai, terasi)\", \"Asam jawa, lengkuas, daun salam, gula merah\"]', '[\"1. Didihkan air, masukkan jagung, melinjo, dan labu siam.\", \"2. Masukkan bumbu halus, asam jawa, lengkuas, dan daun salam.\", \"3. Setelah sayuran setengah matang, masukkan kacang panjang dan daun melinjo. Bumbui dengan garam dan gula merah. Masak hingga semua sayuran matang.\"]', '2025-12-25 05:52:39', '2025-12-25 05:52:39');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `feedback`
--
ALTER TABLE `feedback`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `recipes`
--
ALTER TABLE `recipes`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `feedback`
--
ALTER TABLE `feedback`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT untuk tabel `recipes`
--
ALTER TABLE `recipes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
