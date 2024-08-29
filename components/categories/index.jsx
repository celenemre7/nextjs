import React from 'react'
import Link from 'next/link'
import styles from '@/components/categories/styles.module.css'

function Categories({ categories = [] }) {
  if (!categories || categories.length === 0) {
    return <div>Kategoriler bulunamadı.</div>;
  }

  return (
    <div className={styles.categories}>
      {categories.map((category) => (
        <Link key={category.id} className={styles.category} href={`/${category.id}`}>
          <div className={styles.name}>{category.name}</div>
        </Link>
      ))}
    </div>
  );
}

export default Categories;
