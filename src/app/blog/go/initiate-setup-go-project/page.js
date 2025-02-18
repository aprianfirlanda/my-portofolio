import Link from 'next/link';
import CodeBlock from '@/components/CodeBlock';
import {
  BlogList,
  BlogNavigation,
  BlogParagraph,
  BlogSection,
  BlogSubTitle,
  BlogTitle,
} from '@/components/Blogging';

function ContentIntro() {
  return (
    <BlogSection>
      <BlogParagraph content="When developing a backend web application in Go, structuring the project with Hexagonal Architecture ensures maintainability, testability, and flexibility. In this guide, we'll set up a Go backend project with the following technologies:" />
      <BlogList
        contents={[
          'Cobra CLI for command management',
          'Go Fiber for the HTTP server',
          'Swaggo for API documentation',
          'Gorm with PostgreSQL for database interactions',
          'Viper for environment variable management',
          'Logrus for structured logging',
        ]}
      />
    </BlogSection>
  );
}

function ContentInstallGo() {
  return (
    <BlogSection>
      <BlogSubTitle id="install-go" content="Install Go" />
      <p>
        Before starting, you need to install Go. Visit the{' '}
        <Link href={'https://go.dev/doc/install'} target={'_blank'} className="link link-primary">
          official Go website
        </Link>{' '}
        to download the installer. The installation process varies by operating system:
      </p>
      <ul className="list-disc pl-5">
        <li>Windows: Use the MSI installer and follow the setup instructions.</li>
        <li>MacOS: Use Homebrew with brew install go or download the macOS package.</li>
        <li>
          Linux: Use your package manager, such as{' '}
          <code className="badge badge-ghost">sudo apt install golang</code> for Debian-based
          systems or <code className="badge badge-ghost">sudo dnf install golang</code> for Fedora.
        </li>
      </ul>
      <p>After installation, verify it by running:</p>
      <div className="w-full">
        <CodeBlock code={'go version'} />
      </div>
    </BlogSection>
  );
}

function ContentProjectInitialization() {
  return (
    <BlogSection>
      <BlogSubTitle id="project-initialization" content="Project Initialization" />
      <BlogParagraph content="First, create a new directory with the name of backend service" />
      <div className="w-full">
        <CodeBlock code={'mkdir go-fiber-temp && cd go-fiber-temp'} />
      </div>
      <BlogParagraph content="the, initialize go module with this command" />
      <div className="w-full">
        <CodeBlock code={'go mod init go-fiber-temp'} />
      </div>
    </BlogSection>
  );
}

function ContentSetupCobraCli() {
  return (
    <BlogSection>
      <BlogSubTitle id="setup-cobra-cli" content="Setting Up Cobra CLI" />
      <BlogParagraph content="Install cobra-cli, if you already install, you can skip this command" />
      <div className="w-full">
        <CodeBlock code={'go install github.com/spf13/cobra-cli@latest'} />
      </div>
      <BlogParagraph content="Initialize cobra-cli in this backend project" />
      <div className="w-full">
        <CodeBlock code={'cobra-cli init'} />
      </div>
      <BlogParagraph content="Add http command, to handle running http server" />
      <div className="w-full">
        <CodeBlock code={'cobra-cli add http'} />
      </div>
      <BlogParagraph content="after you initiate with cobra-cli, the folder structure will be like this." />
      <div className="w-full">
        <CodeBlock
          language="plaintext"
          code={
            'myapp/\n' +
            '│── cmd/\n' +
            '│   ├── root.go\n' +
            '│   ├── serve.go\n' +
            '│── main.go\n' +
            '│── go.mod\n' +
            '│── go.sum'
          }
        />
      </div>
    </BlogSection>
  );
}

export default function Page() {
  return (
    <div className="container pt-20">
      <BlogTitle content="Initiate Setup Go Project" />
      <div className="flex gap-5">
        <BlogNavigation
          contents={[
            { id: 'install-go', name: 'Install Go' },
            { id: 'project-initialization', name: 'Project Initialization' },
            { id: 'setup-cobra-cli', name: 'Setting Up Cobra CLI' },
          ]}
        />

        <div className="h-[80vh] overflow-auto">
          <ContentIntro />

          <ContentInstallGo />

          <ContentProjectInitialization />

          <ContentSetupCobraCli />
        </div>
      </div>
    </div>
  );
}
