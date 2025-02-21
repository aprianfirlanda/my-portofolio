'use client';
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
    <BlogSection id="intro">
      <BlogParagraph content="When building a backend web application in Go, structuring the project with Hexagonal Architecture ensures maintainability, testability, and flexibility. In this guide, we'll set up a Go backend project with the following technologies:" />
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
    <BlogSection id="install-go">
      <BlogSubTitle content="Install Go" />
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
      <BlogParagraph>After installation, verify it by running:</BlogParagraph>
      <div className="w-full">
        <CodeBlock code={'go version'} />
      </div>
    </BlogSection>
  );
}

function ContentProjectInitialization() {
  return (
    <BlogSection id="project-initialization">
      <BlogSubTitle content="Project Initialization" />
      <BlogParagraph content="First, create a new directory with the name of backend service" />
      <div className="w-full">
        <CodeBlock code={'mkdir go-fiber-temp && cd go-fiber-temp'} />
      </div>
      <BlogParagraph content="the, initialize go module with this command" />
      <div className="w-full">
        <CodeBlock code={'go mod init go-fiber-temp'} />
      </div>
      <BlogParagraph content="File go.mod will be created." />
      <BlogParagraph content="I will use Hexagonal Architecture Pattern. So, the folder structure will be like this." />
      <div className="w-full">
        <CodeBlock
          language="plaintext"
          code={
            'go-fiber-temp/\n' +
            '│── cmd/                         # Entry points (CLI, HTTP)\n' +
            '│  │── http.go                   # Starts HTTP server\n' +
            '│  │── root.go                   # Root command for CLI (Cobra)\n' +
            '│── config/                      # Configuration files (optional, move inside internal/)\n' +
            '│── db/                          # Database-related logic\n' +
            '│  │── migrations/               # Database migration scripts\n' +
            '│── docs/                        # Swaggo API documentation\n' +
            '│── internal/                    # Internal application logic\n' +
            '│  │── app/                      # Application services (Use cases)\n' +
            '│  │  │── dto/                   # DTOs for HTTP request/response\n' +
            '│  │  │── serviceimpl/           # Service implementations (business logic)\n' +
            '│  │── config/                   # Internal configuration handling\n' +
            '│  │── domain/                   # Domain entities and aggregates\n' +
            '│  │── port/                     # Interfaces (e.g., repository, service, external APIs)\n' +
            '│  │  │── repository/            # Repository interfaces\n' +
            '│  │  │── external/              # External API interface\n' +
            '│  │  │── service/               # Service interfaces\n' +
            '│  │── adapter/                  # Implementations of ports\n' +
            '│  │  │── http/                  # HTTP handlers/controllers\n' +
            '│  │  │── repository/            # Repository implementations (Gorm, etc.)\n' +
            '│  │  │── external/              # External API implementation\n' +
            '│── main.go                      # Application entry point\n' +
            '│── go.mod                       # Go module file\n' +
            '│── go.sum                       # Go dependencies checksum'
          }
        />
      </div>
      <BlogParagraph content="You can use this command to create necesary folder." />
      <div className="w-full">
        <CodeBlock
          language="plaintext"
          code={
            'mkdir -p config db/migrations docs internal/{app/{dto,serviceimpl},config,domain,port/{repository,external,service},adapter/{http,repository,external}}\n' +
            'find . -type d -empty -exec touch {}/.gitkeep \\;'
          }
        />
      </div>
      <BlogParagraph content="* main.go and cmd folder (also file inside it) will be automatically created on setup cobra-cli" />
    </BlogSection>
  );
}

function ContentSetupCobraCli() {
  return (
    <BlogSection id="setup-cobra-cli">
      <BlogSubTitle content="Setting Up Cobra CLI" />
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
      <BlogTitle content="Go Project Setup Guide" />
      <div className="flex gap-5">
        <BlogNavigation
          category="go"
          link="go-project-setup-guide"
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
