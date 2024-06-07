// Mengimpor pustaka React yang dibutuhkan untuk membuat komponen React
import React from 'react';

// Mendefinisikan komponen fungsional TodoItem yang menerima properti `todo`
const TodoItem = ({ todo }) => {
  // Mengembalikan JSX yang mendefinisikan elemen div dengan beberapa gaya CSS
  // dan menampilkan judul todo yang diterima dari properti
  return (
    <div style={styles.todoItem}>
      <p>{todo.title}</p> {/* Menampilkan judul todo di dalam elemen paragraf */}
    </div>
  );
};

// Mendefinisikan objek `styles` yang berisi gaya CSS untuk elemen TodoItem
const styles = {
  todoItem: {
    border: '2px solid #f4f4f4', // Menetapkan border dengan ketebalan 2px dan warna abu-abu muda
    fontSize: '24px',             // Menetapkan ukuran font menjadi 24px
  },
};

// Mengekspor komponen TodoItem sebagai komponen default yang bisa digunakan oleh file lain
export default TodoItem;
