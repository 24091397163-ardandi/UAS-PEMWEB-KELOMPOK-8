const recipes = [
        {
            name: "Bebek Bumbu Hitam Madura",
            image: "Bebek bumbu hitam.jpg",
            history: "Bebek bumbu hitam adalah hidangan khas Madura, Jawa Timur. Hidangan ini menggunakan bebek sebagai bahan utama yang dimasak dengan bumbu hitam yang terbuat dari rempah-rempah seperti ketumbar, kemiri, dan gula aren. Rasanya pedas, manis, dan gurih, sering disajikan dengan sambal dan lalapan. Hidangan ini telah menjadi bagian dari kuliner Madura sejak lama.",
            ingredients: ["2 Ekor Bebek Besar", "1 Buah jeruk nipis", "1 Sdm asam rendam dengan 5 sdm air,ambil airnya", "air untuk merebus,secukupnya minyak untuk menumis"], 
            instructions: "1.Cuci bersih bebek dan hatinya. Potong2 sesuai selera. Lalu kucuri dgn jeruk nipis, diamkan sekitar 30mnt, bilas kembali. Siapkan bumbu halus. Larutkan asam dgn 4-5sdm Air, ambil airnya saja. 2.Tumis bumbu halus hingga harum dengan sedikit minyak goreng. Kemudian masukan daging bebek nya, aduk rata hingga daging berubah warna pucat. Kemudian tuang air, beri garam, penyedap dan gula. Masukan juga air asam jawanya. 3.Masak daging bebek sekitar 40mnt sampai empuk dan air menyusut. Aduk sesekali. Setelah itu angkat dagingnya, biarkan bumbu di dalam panci/wajan tambahkan sisa bumbu ungkep dgn minyak goreng. Masak dgn api kecil sambil terus diaduk2 sampai berubah menghitam. Hati2 gosong ya. Jangan lupa cek rasanya. Jika sudah pas, angkat. Sisihkan. 4.Selanjutnya, panaskan minyak goreng. Goreng daging bebek hingga matang kecoklatan. Angkat, sisihkan. 5.Sajikan bebek bersama bumbu hitamnya beserta lalapan atau sambal"
        },
        {
            name: "Sate Ayam",
            image: "sate.jpg",
            history: "Sate ayam berasal dari Indonesia, khususnya Jawa. Kata 'sate' berasal dari bahasa Jawa 'sate' yang berarti tusuk. Hidangan ini terdiri dari potongan daging ayam yang ditusuk bambu dan dibakar, disajikan dengan bumbu kacang yang terbuat dari kacang tanah, cabai, dan rempah lainnya. Sate ayam sangat populer sebagai makanan jalanan dan hidangan pesta.",
            ingredients: ["500 gr daging ayam (fillet)", "Tusuk sate", "Bumbu kacang (kacang tanah, bawang putih, cabai, gula merah, air asam jawa)", "Kecap manis, jeruk limau, bawang merah iris"],
            instructions: "1. Potong dadu daging ayam, lumuri dengan sedikit bumbu. 2. Tusuk daging ke tusukan sate. 3. Bakar sate di atas arang hingga matang sambil diolesi kecap manis. 4. Sajikan dengan bumbu kacang, irisan bawang merah, dan perasan jeruk limau."
        },
        {
            name: "Nasi Goreng",
            image: "nasigoreng.jpg",
            history: "Nasi goreng adalah hidangan nasional Indonesia yang berasal dari zaman kolonial Belanda. Awalnya, nasi goreng dibuat untuk memanfaatkan sisa nasi yang tidak terpakai. Hidangan ini terdiri dari nasi yang digoreng dengan bumbu seperti bawang putih, bawang merah, cabai, dan kecap manis, sering ditambahkan telur, ayam, atau udang. Nasi goreng telah menjadi simbol kuliner Indonesia di dunia.",
            ingredients: ["2 piring nasi putih dingin", "2 butir telur", "100 gr ayam suwir/udang", "Bumbu halus (bawang putih, bawang merah, cabai)", "Kecap manis, saus tiram, garam, merica", "Sayuran (sawi, kol)"],
            instructions: "1. Tumis bumbu halus hingga wangi. 2. Masukkan telur, orak-arik. Tambahkan ayam/udang dan sayuran. 3. Masukkan nasi, aduk rata. 4. Bumbui dengan kecap manis, saus tiram, garam, dan merica. Masak hingga semua tercampur rata."
        },
        {
            name: "Gado-gado",
            image: "gadogado.jpg",
            history: "Gado-gado adalah salad sayuran khas Indonesia yang berasal dari Jakarta. Kata 'gado-gado' berarti 'campur-campur' dalam bahasa Betawi. Hidangan ini terdiri dari sayuran rebus seperti kangkung, tauge, dan kentang, disiram dengan saus kacang yang terbuat dari kacang tanah, cabai, dan gula aren. Gado-gado sering disajikan dengan lontong dan kerupuk.",
            ingredients: ["Sayuran rebus (kangkung, tauge, kacang panjang, kentang)", "Lontong/nasi", "Tahu dan tempe goreng", "Telur rebus", "Saus kacang", "Kerupuk"],
            instructions: "1. Tata semua sayuran rebus, lontong, tahu, tempe, dan telur di atas piring. 2. Siram dengan saus kacang yang sudah jadi. 3. Taburi dengan bawang goreng dan sajikan dengan kerupuk."
        },
        {
            name: "Soto Ayam",
            image: "soto.jpg",
            history: "Soto ayam adalah sup ayam khas Indonesia yang berasal dari berbagai daerah, seperti Solo dan Lamongan. Hidangan ini terdiri dari kaldu ayam yang kaya rempah, disajikan dengan suwiran ayam, soun, tauge, dan telur. Soto ayam memiliki variasi di setiap daerah, seperti soto Lamongan yang terkenal dengan kuahnya yang gurih.",
            ingredients: ["1/2 ekor ayam", "2 liter air", "Bumbu halus (bawang merah, bawang putih, kemiri, kunyit, jahe)", "Serai, daun salam, daun jeruk", "Soun, tauge, seledri, bawang goreng, telur rebus"],
            instructions: "1. Rebus ayam hingga empuk, angkat dan suwir-suwir. 2. Tumis bumbu halus hingga harum, masukkan ke dalam kaldu rebusan ayam. 3. Tambahkan serai, daun salam, dan daun jeruk. Masak hingga mendidih. 4. Tata soun, tauge, dan suwiran ayam di mangkuk, siram dengan kuah soto panas. Sajikan dengan pelengkap."
        },
        {
            name: "Bakso",
            image: "bakso.jpg",
            history: "Bakso adalah hidangan bola daging yang berasal dari kuliner Tionghoa-Indonesia. Kata 'bakso' berasal dari bahasa Hokkien 'bak-so' yang berarti daging yang digiling. Hidangan ini terdiri dari bola daging sapi yang direbus, disajikan dengan kuah kaldu, mi, dan sayuran. Bakso sangat populer sebagai makanan jalanan di Indonesia.",
            ingredients: ["250 gr daging sapi giling", "50 gr tepung tapioka", "Bawang putih, garam, merica", "Kuah kaldu sapi", "Mi kuning, bihun, sawi hijau", "Bawang goreng, seledri"],
            instructions: "1. Campur daging giling, tepung tapioka, dan bumbu hingga rata. Bentuk menjadi bola-bola. 2. Rebus bola bakso dalam air mendidih hingga mengapung. 3. Siapkan mangkuk, isi dengan mi, bihun, dan sawi. 4. Letakkan bakso di atasnya, siram dengan kuah kaldu panas. Taburi bawang goreng dan seledri."
        },
        {
            name: "Gudeg",
            image: "gudeg.jpg",
            history: "Gudeg adalah hidangan khas Yogyakarta yang berasal dari zaman Mataram. Hidangan ini terbuat dari nangka muda yang dimasak dengan santan dan gula aren selama berjam-jam hingga menjadi manis dan legit. Gudeg sering disajikan dengan ayam, telur, dan sambal krecek. Gudeg telah menjadi ikon kuliner Yogyakarta.",
            ingredients: ["1 kg nangka muda", "500 ml santan kental", "Gula aren", "Bumbu halus (bawang merah, bawang putih, kemiri, ketumbar)", "Daun salam, lengkuas, daun jati"],
            instructions: "1. Rebus nangka muda hingga empuk, tiriskan. 2. Masak nangka bersama santan, bumbu halus, gula aren, dan bumbu lainnya. 3. Gunakan api kecil dan masak selama beberapa jam hingga bumbu meresap dan kuah mengering. Sajikan dengan nasi dan lauk pelengkap."
        },
        {
            name: "Pempek",
            image: "pempek.jpg",
            history: "Pempek adalah hidangan khas Palembang, Sumatera Selatan, yang berasal dari kuliner Tionghoa. Hidangan ini terbuat dari ikan tenggiri yang dicampur sagu, dibentuk dan digoreng, disajikan dengan cuko (saus cuka). Pempek telah menjadi makanan khas Palembang dan populer di seluruh Indonesia.",
            ingredients: ["500 gr daging ikan tenggiri giling", "400 gr tepung sagu", "Air, garam", "Bahan cuko: gula merah, air, cuka, bawang putih, cabai rawit, ebi"],
            instructions: "1. Campurkan daging ikan, air, dan garam. Uleni sambil ditambahkan tepung sagu sedikit demi sedikit hingga adonan kalis. 2. Bentuk adonan (misal: lenjer atau kapal selam dengan isian telur). 3. Rebus pempek hingga matang dan mengapung. 4. Goreng pempek sebelum disajikan. Potong-potong dan siram dengan cuko."
        },
        {
            name: "Opor Ayam",
            image: "opor.jpg",
            history: "Opor ayam adalah hidangan ayam berkuah santan khas Indonesia, sering disajikan saat Lebaran. Hidangan ini berasal dari Jawa, terdiri dari ayam yang dimasak dengan santan, kunyit, dan rempah lainnya. Rasanya gurih dan kaya rempah, namun tidak sepedas kari. Opor ayam adalah bagian dari tradisi kuliner Lebaran.",
            ingredients: ["1 ekor ayam, potong-potong", "800 ml santan", "Bumbu halus (bawang merah, bawang putih, kemiri, ketumbar, jintan, kunyit)", "Serai, lengkuas, daun salam"],
            instructions: "1. Tumis bumbu halus hingga harum bersama serai, lengkuas, dan daun salam. 2. Masukkan potongan ayam, aduk hingga berubah warna. 3. Tuangkan santan, bumbui dengan garam dan gula. 4. Masak dengan api sedang hingga ayam empuk dan kuah mengental."
        },
        {
            name: "Sayur Asem",
            image: "sayurasem.jpg",
            history: "Sayur asem adalah sup sayuran khas Indonesia yang berasal dari Jawa Barat. Hidangan ini terdiri dari sayuran seperti jagung, melinjo, dan kacang panjang yang dimasak dengan air asam jawa, lengkuas, dan cabai. Rasanya asam dan segar, cocok untuk cuaca panas. Sayur asem sering disajikan dengan nasi dan ikan asin.",
            ingredients: ["Jagung manis, labu siam, melinjo, kacang panjang, daun melinjo", "Air", "Bumbu halus (bawang merah, cabai, terasi)", "Asam jawa, lengkuas, daun salam, gula merah"],
            instructions: "1. Didihkan air, masukkan jagung, melinjo, dan labu siam. 2. Masukkan bumbu halus, asam jawa, lengkuas, dan daun salam. 3. Setelah sayuran setengah matang, masukkan kacang panjang dan daun melinjo. Bumbui dengan garam dan gula merah. Masak hingga semua sayuran matang."
        }
    ];

    const recipeList = document.getElementById('recipe-list');
    const modal = document.getElementById('recipe-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalImage = document.getElementById('modal-image');
    const modalHistory = document.getElementById('modal-history');
    const modalIngredients = document.getElementById('modal-ingredients');
    const modalInstructions = document.getElementById('modal-instructions');
    const closeButton = document.querySelector('.close-button');

    if (recipeList) {
        recipes.forEach((recipe, index) => {
            const card = document.createElement('div');
            card.className = 'recipe-card';
            card.innerHTML = `
                <img src="${recipe.image}" alt="${recipe.name}">
                <h3>${recipe.name}</h3>
            `;
            card.addEventListener('click', () => showRecipeDetail(recipe));
            recipeList.appendChild(card);
        });
    }

    
    function showRecipeDetail(recipe) {
        document.getElementById('recipe-list').style.display = 'none';
        if (document.getElementById('feedback')) {
            document.getElementById('feedback').style.display = 'none';
        }

        const detailDiv = document.getElementById('recipe-detail');
        if (detailDiv) {
            detailDiv.classList.remove('hidden');

            const detailTitle = document.getElementById('detail-title');
            if (detailTitle) detailTitle.textContent = recipe.name;

            const detailImage = document.getElementById('detail-image');
            if (detailImage) detailImage.src = recipe.image;

            const detailHistory = document.getElementById('detail-history');
            if (detailHistory) detailHistory.textContent = recipe.history;

            const ingredientsList = document.getElementById('detail-ingredients');
            if (ingredientsList) {
                ingredientsList.innerHTML = '';
                recipe.ingredients.forEach(ingredient => {
                    const li = document.createElement('li');
                    li.textContent = ingredient;
                    ingredientsList.appendChild(li);
                });
            }

            const parts = recipe.instructions.split(/(\d+\.)/);
            const steps = [];
            for (let i = 2; i < parts.length; i += 2) {
                steps.push(parts[i].trim());
            }
            const detailInstructions = document.getElementById('detail-instructions');
            if (detailInstructions) {
                detailInstructions.innerHTML = steps.map((step, index) => `<p><strong>${index + 1}.</strong> ${step}</p>`).join('');
            }
        }
    }

    if (document.getElementById('back-button')) {
        // Fungsi untuk kembali ke beranda
        document.getElementById('back-button').addEventListener('click', () => {
            document.getElementById('recipe-detail').classList.add('hidden');
            document.getElementById('recipe-list').style.display = 'grid';
            // Show feedback section again
            if (document.getElementById('feedback')) {
                document.getElementById('feedback').style.display = 'block';
            }
        });
    }


    function openModal(recipe) {
        modalTitle.textContent = recipe.name;
        modalImage.src = recipe.image;
        modalHistory.textContent = recipe.history;

        modalIngredients.innerHTML = '';
        recipe.ingredients.forEach(ingredient => {
            const li = document.createElement('li');
            li.textContent = ingredient;
            modalIngredients.appendChild(li);
        });

        const parts = recipe.instructions.split(/(\d+\.)/);
        const steps = [];
        for (let i = 2; i < parts.length; i += 2) {
            steps.push(parts[i].trim());
        }
        modalInstructions.innerHTML = steps.map((step, index) => `<p><strong>${index + 1}.</strong> ${step}</p>`).join('');
        
        modal.style.display = 'block';
    }

    
    function closeModal() {
        modal.style.display = 'none';
    }

    if (closeButton) {
        closeButton.addEventListener('click', closeModal);
    }

   
    if (modal) {
        window.addEventListener('click', (event) => {
            if (event.target == modal) {
                closeModal();
            }
        });
    }

    // Feedback Form Handling
    const feedbackForm = document.getElementById('feedback-form');
    const feedbackItems = document.getElementById('feedback-items');

    // Load existing feedback from database
    function loadFeedback() {
        fetch('get_feedback.php')
            .then(response => response.json())
            .then(feedbacks => {
                feedbackItems.innerHTML = '';
                feedbacks.forEach(feedback => {
                    const li = document.createElement('li');
                    li.innerHTML = `<strong>${feedback.name} (${feedback.email}):</strong> ${feedback.message}`;
                    feedbackItems.appendChild(li);
                });
            })
            .catch(error => console.error('Error loading feedback:', error));
    }

    if (feedbackForm) {
        feedbackForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            const formData = new FormData();
            formData.append('name', name);
            formData.append('email', email);
            formData.append('message', message);

            fetch('submit_feedback.php', {
                method: 'POST',
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    alert('Terima kasih atas kritik dan saran Anda!');
                    feedbackForm.reset();
                    loadFeedback();
                } else {
                    alert('Error: ' + data.error);
                }
            })
            .catch(error => {
                console.error('Error submitting feedback:', error);
                alert('Terjadi kesalahan saat mengirim kritik dan saran.');
            });
        });
    }

    // Load feedback on page load
    if (feedbackItems) {
        loadFeedback();
    }

    // Hamburger Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navUl = document.querySelector('header nav ul');

    if (hamburger && navUl) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('open');
            navUl.classList.toggle('show');
        });
    }

    // Close menu when clicking outside or on a link
    document.addEventListener('click', (e) => {
        if (hamburger && navUl && !hamburger.contains(e.target) && !navUl.contains(e.target)) {
            hamburger.classList.remove('open');
            navUl.classList.remove('show');
        }
    });

    // Close menu when clicking on nav links
    const navLinks = document.querySelectorAll('header nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (hamburger && navUl) {
                hamburger.classList.remove('open');
                navUl.classList.remove('show');
            }
        });
    });

    // Event listener untuk back button
    if (document.getElementById('back-to-home')) {
        document.getElementById('back-to-home').addEventListener('click', () => {
            window.location.href = 'Index.Html';
        });
    }

    // Dark Mode Toggle
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const html = document.documentElement;

    function updateDarkMode() {
        if (localStorage.getItem('darkMode') === 'enabled') {
            html.classList.add('dark-mode');
            if (darkModeToggle) darkModeToggle.textContent = '☀️ Light Mode';
        } else {
            html.classList.remove('dark-mode');
            if (darkModeToggle) darkModeToggle.textContent = '🌙 Dark Mode';
        }
    }

    updateDarkMode();

    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', () => {
            if (html.classList.contains('dark-mode')) {
                localStorage.removeItem('darkMode');
            } else {
                localStorage.setItem('darkMode', 'enabled');
            }
            updateDarkMode();
        });
    }

    // Photo Upload Functionality
    const photoInput = document.getElementById('photo-input');
    const uploadBtn = document.getElementById('upload-btn');
    const photoList = document.getElementById('photo-list');

    if (photoInput && uploadBtn && photoList) {
        // Load existing photos from localStorage
        function loadPhotos() {
            const photos = JSON.parse(localStorage.getItem('userPhotos')) || [];
            photoList.innerHTML = '';
            photos.forEach((photoData, index) => {
                const photoItem = document.createElement('div');
                photoItem.className = 'photo-item';
                photoItem.innerHTML = `
                    <img src="${photoData}" alt="Uploaded photo ${index + 1}">
                    <button class="delete-btn" data-index="${index}">×</button>
                `;
                photoList.appendChild(photoItem);
            });

            // Add event listeners to delete buttons
            document.querySelectorAll('.delete-btn').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const index = parseInt(e.target.getAttribute('data-index'));
                    deletePhoto(index);
                });
            });
        }

        // Save photo to localStorage
        function savePhoto(photoData) {
            const photos = JSON.parse(localStorage.getItem('userPhotos')) || [];
            photos.push(photoData);
            localStorage.setItem('userPhotos', JSON.stringify(photos));
        }

        // Delete photo from localStorage
        function deletePhoto(index) {
            const photos = JSON.parse(localStorage.getItem('userPhotos')) || [];
            photos.splice(index, 1);
            localStorage.setItem('userPhotos', JSON.stringify(photos));
            loadPhotos();
        }

        // Handle photo upload
        uploadBtn.addEventListener('click', () => {
            const file = photoInput.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    savePhoto(e.target.result);
                    loadPhotos();
                    photoInput.value = ''; // Reset input
                    alert('Foto berhasil diupload!');
                };
                reader.readAsDataURL(file);
            } else {
                alert('Silakan pilih foto terlebih dahulu.');
            }
        });

        // Load photos on page load
        loadPhotos();
    }
