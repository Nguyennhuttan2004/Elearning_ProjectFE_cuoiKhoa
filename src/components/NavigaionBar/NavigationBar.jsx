import React, { useState } from 'react';
import styles from './NavigationBar.module.css';

const NavigationBar = () => {
  const [activeCategory, setActiveCategory] = useState();

  const mainCategories = [
    'Development', 'Business', 'Finance & Accounting', 'IT & Software',
    'Office Productivity', 'Personal Development', 'Design', 'Marketing',
    'Health & Fitness', 'Music'
  ];

  const subCategories = {
    'Development': ['Web Development', 'Mobile Development', 'Programming Languages', 'Game Development', 'Database Design'],
    'Business': ['Entrepreneurship', 'Communication', 'Management', 'Sales', 'Strategy'],
    'IT & Software': ['IT Certification', 'Network & Security', 'Hardware', 'Operating Systems', 'Other IT & Software'],
  };

  return (
    <nav className={styles.navContainer}>
      <div className={styles.mainCategoriesWrapper}>
        <ul className={styles.mainCategories}>
          {mainCategories.map(category => (
            <li 
              key={category}
              className={`${styles.categoryItem} ${activeCategory === category ? styles.active : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.subCategoriesWrapper}>
        <ul className={styles.subCategories}>
          {subCategories[activeCategory]?.map(subCategory => (
            <li key={subCategory} className={styles.categoryItem}>
              {subCategory}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavigationBar;