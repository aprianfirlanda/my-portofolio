import Link from 'next/link';
import CodeBlock from '@/components/CodeBlock';

export default function Page() {
  return (
    <div className="container pt-20">
      <div className="flex gap-5 mt-5">
        <ul className="menu bg-base-200 rounded-box w-56 h-[80vh] shrink-0">
          <li>
            <Link href={`/blog/go/initiate-setup-go-project#install-go`}>Install Go</Link>
          </li>
          <li>
            <a>Item 3</a>
          </li>
        </ul>
        <div>
          <h1 className="text-4xl font-bold">Initiate Setup Go Project</h1>
          <p className="py-3">
            When developing a backend web application in Go, structuring the project with Hexagonal
            Architecture ensures maintainability, testability, and flexibility. In this guide, we'll
            set up a Go backend project with the following technologies:
          </p>
          <ul className="list-disc list-inside">
            <li>Cobra CLI for command management</li>
            <li>Go Fiber for the HTTP server</li>
            <li>Swaggo for API documentation</li>
            <li>Gorm with PostgreSQL for database interactions</li>
            <li>Viper for environment variable management</li>
            <li>Logrus for structured logging</li>
          </ul>
          <h2 id="install-go" className="text-2xl font-semibold pt-3 pb-1">
            # Install Go
          </h2>
          <p>
            Before starting, you need to install Go. Visit the{' '}
            <Link
              href={'https://go.dev/doc/install'}
              target={'_blank'}
              className="link link-primary"
            >
              official Go website
            </Link>{' '}
            to download the installer. The installation process varies by operating system:
          </p>
          <ul className="list-disc list-inside">
            <li>Windows: Use the MSI installer and follow the setup instructions.</li>
            <li>MacOS: Use Homebrew with brew install go or download the macOS package.</li>
            <li>
              Linux: Use your package manager, such as{' '}
              <code className="badge badge-ghost">sudo apt install golang</code> for Debian-based
              systems or <code className="badge badge-ghost">sudo dnf install golang</code> for
              Fedora.
            </li>
          </ul>
          <p>After installation, verify it by running:</p>
          <div className="w-40">
            <CodeBlock code={'go version'} />
          </div>
        </div>
      </div>
    </div>
  );
}
