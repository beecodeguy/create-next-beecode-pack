import styles from "app/page.module.css";
import ThemeSwitch from "components/common/ThemeSwitch/ThemeSwitch";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className="w-full flex justify-end gap-4 p-12 border dark:border-slate-100 dark:bg-black-darkCardBg">
        <p>Switch Modes:</p>
        <ThemeSwitch />
      </div>
      <h1 className="text-center text-3xl underline">Next Js Template File</h1>
      <p className="text-center">Start your Coding with Every necessary Setup built for your scalable Project</p>
    </main>
  );
}
