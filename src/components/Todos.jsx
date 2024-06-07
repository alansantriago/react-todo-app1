// Mengimpor pustaka React yang dibutuhkan untuk membuat komponen React
import React from 'react';

// Mengimpor komponen TodoItem dari file TodoItem
import TodoItem from './TodoItem';

// Mendefinisikan komponen fungsional Todos yang menerima properti `todos`
const Todos = ({ todos }) => {
  // Mengembalikan JSX yang mendefinisikan elemen div dengan beberapa gaya CSS
  // dan menampilkan daftar TodoItem berdasarkan data yang diterima
  return (
    <div style={styles.container}>
      {/* Melakukan iterasi pada array `todos` dan mengembalikan komponen TodoItem untuk setiap elemen */}
      {todos.map((todo) => {
        // Setiap TodoItem diberi properti `todo` dan kunci unik `key` untuk membantu React mengelola daftar komponen
        return <TodoItem key={todo.id} todo={todo} />
      })}
    </div>
  );
};

// Mendefinisikan objek `styles` yang berisi gaya CSS untuk elemen container
const styles = {
  container: {
    width: '40%',        // Menetapkan lebar container menjadi 40% dari lebar elemen induk
    margin: '0 auto',    // Mengatur margin atas dan bawah menjadi 0, dan auto untuk kiri dan kanan agar container berada di tengah
  },
};

// Mengekspor komponen Todos sebagai komponen default yang bisa digunakan oleh file lain
export default Todos;
