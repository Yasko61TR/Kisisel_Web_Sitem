// BURASI SENİN BİLGİLERİN - SADECE BURAYI DÜZENLE
const kullaniciBilgileri = {
    isim: "Yasin Uzun",
    unvan: "Yazılım Mühendisliği Öğrencisi",
    hakkimda: "Merhaba! Ben yazılım dünyasına yeni adım atmış, öğrenmeye aç bir mühendis adayıyım. Şu an algoritmaların mantığını kavrıyor ve temel diller üzerinde çalışıyorum. Hedefim temiz kod yazan, global projelerde yer alan bir geliştirici olmak.",
    
    // Sosyal Medya Linklerin (Varsa linki yapıştır, yoksa boş bırak)
    linkler: {
        github: "https://github.com/Yasko61TR",
        linkedin: "https://www.linkedin.com/in/yasin-uzun-b06027382?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
        instagram: "https://www.instagram.com/yasko_u?igsh=MW55bjZibnR6NG8ycQ%3D%3D&utm_source=qr" // YENİ: Instagram linkini buraya yapıştır
    
    },

    // Yeteneklerin (Yeni öğrendikçe buraya virgül koyup ekle)
    yetenekler: [
        "C Programlama (Temel)",
        "Algoritma Mantığı",
        "İngilizce (Learning...)",
        "Araştırma & Dokümantasyon",
        "C++ (Yakında...)" 
    ]
};

// --- AŞAĞISI SİHİR KISMI (DOKUNMANA GEREK YOK) ---
// Bu kodlar yukarıdaki verileri alıp sayfaya yerleştirir.
document.addEventListener("DOMContentLoaded", () => {
    // İsim ve Ünvanı Yaz
    document.getElementById('isim').innerText = kullaniciBilgileri.isim;
    document.getElementById('unvan').innerText = kullaniciBilgileri.unvan;
    document.getElementById('hakkimda-metin').innerText = kullaniciBilgileri.hakkimda;

    // Linkleri Güncelle
    document.getElementById('github-link').href = kullaniciBilgileri.linkler.github;
    document.getElementById('linkedin-link').href = kullaniciBilgileri.linkler.linkedin;
    document.getElementById('instagram-link').href = kullaniciBilgileri.linkler.instagram;
    // Yetenekleri Listele (Döngü Mantığı)
    const yetenekKutusu = document.getElementById('yetenek-listesi');
    yetenekKutusu.innerHTML = ''; 
    kullaniciBilgileri.yetenekler.forEach(yetenek => {
        let etiket = document.createElement('span');
        etiket.className = 'yetenek-etiketi';
        etiket.innerText = yetenek;
        yetenekKutusu.appendChild(etiket);
    });
});