import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <h2>Hi, My Name is Kim, I am a Information Technology Student and I'm already on my third year and also I am a working student, a part-time barista at Starbucks, and YES life-work-study balance is INSANELY HARD! </h2>
      
      <section className={utilStyles.headingMd}>
        <h4>My expectation in this subject.</h4>
        <ul className={utilStyles.unorderedList}>
          <li>Learn new things</li>
          <li>Be more knowledgable in backend</li>
          <li>Fast in coding in backend</li>
        </ul>
        </section>

      <section className={utilStyles.headingMd}>
        <p>10 Things That Require Zero Talent</p>
        <ul className={utilStyles.unorderedList}>
          <li>Being On Time</li>
          <li>Making An Effort</li>
          <li>Being High Energy</li>
          <li>Having A Positive Attitude</li>
          <li>Being Passionate</li>
          <li>Using Good Body Language</li>
          <li>Being Coachable</li>
          <li>Doing A Little Extra</li>
          <li>Being Prepared</li>
          <li>Having A Strong Work Ethic</li>
        </ul>
      </section>
    </Layout>
  );
}
