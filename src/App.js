import files from "./files";
import PhotoListItem from "./PhotoListItem";

// PhotoListItem bileşeni oluşturup, files array'ini kullanarak görüntülemeye çalışın.
// 1. Verileri bir prop olarak geçirin ve her bir öğeyi PhotoListItem bileşeni içinde görüntüleyin.
// 2. Tailwind kullanarak aşağıdaki değişiklikleri yapın:
//    - Görselin hover durumunda hafif bir büyüme efekti (scale) ve gölge ekleyin.
//    - Görsel başlığını (file.title) daha belirgin hale getirmek için font ağırlığını artırın ve rengi değiştirin.
//    - Görsel boyutunu (file.size)  gri tonda daha küçük bir font ile gösterin.
// 3. Görseller arasındaki boşluğu (grid gap) artırmak için gap değerlerini düzenleyin.
// 4. files array'ine yeni bir öğe ekleyerek tasarımın doğru şekilde çalıştığını test edin.

function PhotoList() {
  return (
    <ul
      role="list"
      className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
    >
      {files.map((file) => (
        <PhotoListItem file={file} />
      ))}
    </ul>
  );
}

export default function App() {
  return (
    <div className="bg-purple-100">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <PhotoList />
      </div>
    </div>
  );
}
