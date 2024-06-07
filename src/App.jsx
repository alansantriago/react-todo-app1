// Mengimpor pustaka React dan hook useState dari React
import React, { useState } from 'react';

// Mengimpor komponen Todos dari direktori components
import Todos from './components/Todos';

function App() {
  // Mendefinisikan state `todos` dengan nilai awal berupa array objek todo
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'Finish Progate React Course',
      completed: false,
    },
    {
      id: 2,
      title: 'Have lunch with Guru Domba',
      completed: false,
    },
    {
      id: 3,
      title: 'Study React with Ninja Ken',
      completed: false,
    },
  ]);

  // Mencetak nilai state `todos` ke konsol untuk tujuan debugging
  console.log(todos);

  // Mengembalikan JSX yang mendefinisikan struktur tampilan aplikasi
  return (
    <div style={styles.container}>
      {/* Menampilkan judul aplikasi */}
      <h1 style={styles.title}>My Todo List</h1>
      {/* Menyediakan komponen Todos dengan properti `todos` yang berisi daftar todo */}
      <Todos todos={todos} />
    </div>
  );
}

// Mendefinisikan objek `styles` yang berisi gaya CSS untuk elemen container dan title
const styles = {
  container: {
    textAlign: 'center', // Mengatur teks agar berada di tengah secara horizontal
    padding: '12px',     // Menambahkan padding sebesar 12px di sekitar container
  },
  title: {
    fontSize: '36px',    // Menetapkan ukuran font untuk judul menjadi 36px
  },
};

// Mengekspor komponen App sebagai komponen default yang bisa digunakan oleh file lain
export default App;
