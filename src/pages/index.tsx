import type {ReactNode} from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="Lewis Edward Sauerwein"
      description="Thoughts and publications by Lewis Edward Sauerwein"
    >
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">Welcome, Pop-pop!</h1>
          <p className="hero__subtitle">Here's how to get started publishing your writings.</p>
        </div>
      </header>

      <main className="container margin-vert--lg">
        <section className={styles.instructionsSection}>
          <h2>1. Generate an SSH Key</h2>
          <ul>
            <li>
              <code>ssh-keygen -t ed25519 -C "your_email@example.com"</code><br/>
              <em>Creates a key pair under <code>~/.ssh</code>.</em>
            </li>
            <li>
              <code>eval "$(ssh-agent -s)" && ssh-add ~/.ssh/id_ed25519</code><br/>
              <em>Starts agent & adds your private key.</em>
            </li>
            <li>
              <code>cat ~/.ssh/id_ed25519.pub</code><br/>
              <em>Copy/paste that public key to share with Joel.  Joel will use this public key to grant you access to the repository.</em>
            </li>
            <li>
              <code>echo 'eval "$(ssh-agent -s)" &amp;&amp; ssh-add ~/.ssh/id_ed25519' &gt;&gt; ~/.bashrc</code><br/>
              <em>Adds the SSH agent startup and key add command to your <code>~/.bashrc</code> for automatic execution on terminal startup. Run this command only once.</em>
            </li>
          </ul>

          <h2>2. Configure Git</h2>
          <ul>
            <li>
              <code>sudo apt-get update && sudo apt-get install git -y</code><br/>
              <em>Installs Git if not already present.</em>
            </li>
            <li>
              <code>git config --global user.name "Lewis Sauerwein"</code>
            </li>
            <li>
              <code>git config --global user.email "your_email@example.com"</code>
            </li>
            <li>
              <code>git --version</code><br/>
              <em>Confirm Git is installed and set up.</em>
            </li>
          </ul>

          <h2>3. Install Node via NVM</h2>
          <ul>
            <li>
              <code>curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash</code><br/>
              <em>Installs NVM.</em>
            </li>
            <li>
              <code>source ~/.bashrc && nvm install 18 && nvm use 18</code><br/>
              <em>Loads NVM, installs Node 18, sets it active.</em>
            </li>
            <li>
              <code>node -v</code><br/>
              <em>Check your Node version (should be 18.x.x).</em>
            </li>
          </ul>

          <h2>4. Clone the Project Repository</h2>
          <ul>
            <li>
              <code>git clone git@github.com:JoelAlexander/les-docusaurus.git</code><br/>
              <em>Uses SSH to clone the repo. You will need your SSH key set up in GitHub.</em>
            </li>
            <li>
              <code>cd les-docusaurus && npm install</code><br/>
              <em>Installs all required packages.</em>
            </li>
            <li>
              <code>npm start</code><br/>
              <em>Starts local dev server. Visit <code>http://localhost:3000</code> in a browser.</em>
            </li>
            <li>
              <em>To iterate on changes, edit your files. You should be able to see updates instantly in the browser</em>
            </li>
          </ul>

          <h2>5. Make and Publish Changes</h2>
          <ul>
            <li>
              Edit any file, e.g. <code>pages/index.tsx</code>, and save changes.
            </li>
            <li>
              <code>git add . && git commit -m "Hello world"</code><br/>
              <em>Commits your changes locally.</em>
            </li>
            <li>
              <code>git push origin main</code><br/>
              <em>Pushes changes. Once CI finishes, your updates should appear on the live site.</em>
            </li>
          </ul>
        </section>
      </main>
    </Layout>
  );
}
