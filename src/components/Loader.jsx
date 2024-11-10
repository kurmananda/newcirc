import styles from '@/components/styles/LoaderCSS.module.css';

const Loader = () => {
  return (
    <div className={styles.loader}>
      <div className={styles.inner_loader}></div>
    </div>
  );
};

export default Loader;
