'use client';
import Link from 'next/link';
import CodeBlock from '@/components/CodeBlock';
import { BlogList } from '@/components/blogs/BlogList';
import { BlogSection } from '@/components/blogs/BlogSection';
import { BlogParagraph } from '@/components/blogs/BlogParagraph';
import { BlogSubTitle } from '@/components/blogs/BlogSubTitle';
import { BlogTitle } from '@/components/blogs/BlogTitle';
import { BlogMenu } from '@/components/blogs/BlogMenu';
import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

function ContentIntro({ onVisible }) {
  const id = 'intro';
  const { ref, inView } = useInView({
    threshold: 1,
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView) {
      onVisible(id);
    }
  }, [inView]);

  return (
    <BlogSection ref={ref} id={id}>
      <div className="flex w-full justify-center">
        <Image
          src={'/images/blogs/go-project-setup-guide.png'}
          alt={'init setup go project image'}
          width={467}
          height={315}
          priority
        />
      </div>
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

function ContentInstallGo({ onVisible }) {
  const id = 'install-go';
  const { ref, inView } = useInView({
    threshold: 1,
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView) {
      onVisible(id);
    }
  }, [inView]);

  return (
    <BlogSection ref={ref} id={id}>
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

function ContentProjectInitialization({ onVisible }) {
  const id = 'project-initialization';
  const { ref, inView } = useInView({
    threshold: 0.6,
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView) {
      onVisible(id);
    }
  }, [inView]);

  return (
    <BlogSection ref={ref} id={id}>
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
            'mkdir -p db/migrations docs internal/{app/{dto,serviceimpl},config,domain,port/{repository,external,service},adapter/{http,repository,external}}\n' +
            'find . -type d -empty -exec touch {}/.gitkeep \\;'
          }
        />
      </div>
      <BlogParagraph content="* main.go and cmd folder (also file inside it) will be automatically created on setup cobra-cli" />
      <BlogParagraph content="Install testify lib for testing on project." />
      <div className="w-full">
        <CodeBlock code={'go get github.com/stretchr/testify'} />
      </div>
    </BlogSection>
  );
}

function ContentSetupCobraCli({ onVisible }) {
  const id = 'setup-cobra-cli';
  const { ref, inView } = useInView({
    threshold: 1,
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView) {
      onVisible(id);
    }
  }, [inView]);

  return (
    <BlogSection ref={ref} id={id}>
      <BlogSubTitle content="Setting Up Cobra CLI" />
      <BlogParagraph content="Install cobra-cli, if you already install, you can skip this command" />
      <div className="w-full">
        <CodeBlock code={'go install github.com/spf13/cobra-cli@latest'} />
      </div>
      <BlogParagraph content="Initialize cobra-cli in this backend project" />
      <div className="w-full">
        <CodeBlock code={'cobra-cli init'} />
      </div>
      <BlogParagraph content="after you initiate with cobra-cli, the folder structure will be like this." />
      <div className="w-full">
        <CodeBlock
          language="plaintext"
          code={'go-fiber-temp/\n' + '│── cmd/\n' + '│   ├── root.go\n' + '│── main.go\n'}
        />
      </div>
    </BlogSection>
  );
}

function ContentSetupCobraCliHTTP({ onVisible }) {
  const id = 'setup-cobra-cli/http';
  const { ref, inView } = useInView({
    threshold: 1,
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView) {
      onVisible(id);
    }
  }, [inView]);

  return (
    <BlogSection ref={ref} id={id}>
      <BlogSubTitle content="# HTTP Server" />
      <BlogParagraph content="Add http command, to handle running http server" />
      <div className="w-full">
        <CodeBlock code={'cobra-cli add http'} />
      </div>
      <BlogParagraph content="There will be http.go file under cmd folder" />
      <div className="w-full">
        <CodeBlock
          language="plaintext"
          code={'go-fiber-temp/\n' + '│── cmd/\n' + '│   ├── root.go\n' + '│   ├── http.go\n'}
        />
      </div>
    </BlogSection>
  );
}

function ContentSetupConfig({ onVisible }) {
  const id = 'setup-config';
  const { ref, inView } = useInView({
    threshold: 1,
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView) {
      onVisible(id);
    }
  }, [inView]);

  return (
    <BlogSection ref={ref} id={id}>
      <BlogSubTitle content="Setting Up Configuration" />
      <BlogParagraph content="There is a few setup that need to be done" />
    </BlogSection>
  );
}

function ContentSetupConfigViper({ onVisible }) {
  const id = 'setup-config/viper';
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView) {
      onVisible(id);
    }
  }, [inView]);

  return (
    <BlogSection ref={ref} id={id}>
      <BlogSubTitle content="# Viper" />
      <BlogParagraph content="Install dependency" />
      <div className="w-full">
        <CodeBlock code={'go get github.com/spf13/viper'} />
      </div>
      <BlogParagraph content="Create new file .env (Only needed while running local. So, put this file on .gitignore). For production mode, we will use os env variable." />
      <div className="w-full">
        <CodeBlock code={'touch .env'} />
      </div>
      <div className="w-full">
        <CodeBlock
          language="ini"
          code={
            'HTTP_PORT=8080\n' +
            '\n' +
            'DB_HOST=localhost\n' +
            'DB_PORT=5432\n' +
            'DB_USER=postgres\n' +
            'DB_PASSWORD=password\n' +
            'DB_NAME=userdb\n' +
            '\n' +
            'LOG_LEVEL=info\n'
          }
        />
      </div>
      <BlogParagraph content="Create new file internal/config/viper.go" />
      <div className="w-full">
        <CodeBlock code={'touch internal/config/viper.go'} />
      </div>
      <div className="w-full">
        <CodeBlock
          language="go"
          code={
            'package config\n\nimport (\n	"fmt"\n	"github.com/spf13/viper"\n)\n\nfunc LoadConfig(fileName string) {\n	viper.AutomaticEnv()\n\n	viper.SetConfigFile(fileName)\n	viper.SetConfigType("env")\n	if err := viper.ReadInConfig(); err != nil {\n		fmt.Println("There is no env file. It is a problem if you run in local mode. If it is not, then it is ok.")\n	}\n}\n'
          }
        />
      </div>
      <BlogParagraph content="Create unit test to check, are we can get value from env variable on dev or prod mod." />
      <div className="w-full">
        <CodeBlock code={'touch internal/config/viper_test.go'} />
      </div>
      <div className="w-full">
        <CodeBlock
          language="go"
          code={
            'package config\n\nimport (\n	"os"\n	"testing"\n\n	"github.com/spf13/viper"\n	"github.com/stretchr/testify/assert"\n	"github.com/stretchr/testify/require"\n)\n\n// Test LoadConfig in production mode (reading from OS environment variables)\nfunc TestLoadConfig_Production(t *testing.T) {\n	defer os.Clearenv()\n	os.Setenv("HTTP_PORT", "9090")\n	os.Setenv("DB_HOST", "prod-db")\n	os.Setenv("DB_PORT", "5433")\n	os.Setenv("DB_USER", "prod_user")\n	os.Setenv("DB_PASSWORD", "prod_password")\n	os.Setenv("DB_NAME", "prod_db")\n	os.Setenv("LOG_LEVEL", "warn")\n\n	viper.Reset()\n	LoadConfig("")\n\n	assert.Equal(t, "9090", viper.GetString("HTTP_PORT"))\n	assert.Equal(t, "prod-db", viper.GetString("DB_HOST"))\n	assert.Equal(t, 5433, viper.GetInt("DB_PORT"))\n	assert.Equal(t, "prod_user", viper.GetString("DB_USER"))\n	assert.Equal(t, "prod_password", viper.GetString("DB_PASSWORD"))\n	assert.Equal(t, "prod_db", viper.GetString("DB_NAME"))\n	assert.Equal(t, "warn", viper.GetString("LOG_LEVEL"))\n}\n\n// Test LoadConfig in development mode (reading from .env)\nfunc TestLoadConfig_Development(t *testing.T) {\n	fileName := ".env.test"\n	mockEnv := `HTTP_PORT=8080\n				\n				DB_HOST=localhost\n				DB_PORT=5432\n				DB_USER=postgres\n				DB_PASSWORD=password\n				DB_NAME=userdb\n				\n				LOG_LEVEL=info\n				`\n	err := os.WriteFile(fileName, []byte(mockEnv), 0644)\n	require.NoError(t, err)\n	defer os.Remove(fileName)\n\n	viper.Reset()\n	LoadConfig(fileName)\n\n	assert.Equal(t, "8080", viper.GetString("HTTP_PORT"))\n	assert.Equal(t, "localhost", viper.GetString("DB_HOST"))\n	assert.Equal(t, 5432, viper.GetInt("DB_PORT"))\n	assert.Equal(t, "postgres", viper.GetString("DB_USER"))\n	assert.Equal(t, "password", viper.GetString("DB_PASSWORD"))\n	assert.Equal(t, "userdb", viper.GetString("DB_NAME"))\n	assert.Equal(t, "info", viper.GetString("LOG_LEVEL"))\n}\n'
          }
        />
      </div>
    </BlogSection>
  );
}

function ContentSetupConfigLogrus({ onVisible }) {
  const id = 'setup-config/logrus';
  const { ref, inView } = useInView({
    threshold: 0.4,
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView) {
      onVisible(id);
    }
  }, [inView]);

  return (
    <BlogSection ref={ref} id={id}>
      <BlogSubTitle content="# Viper" />
      <BlogParagraph content="Install dependency" />
      <div className="w-full">
        <CodeBlock code={'go get github.com/sirupsen/logrus'} />
      </div>
      <BlogParagraph content="Create new file internal/config/logrus.go. Get the log level from env variable. if there is not set, then the log level is info. I also using json formatter for the log." />
      <div className="w-full">
        <CodeBlock code={'touch internal/config/logrus.go'} />
      </div>
      <div className="w-full">
        <CodeBlock
          language="go"
          code={
            'package config\n\nimport (\n	"github.com/sirupsen/logrus"\n	"github.com/spf13/viper"\n)\n\nvar Logger *logrus.Logger\n\nfunc InitLogger() {\n	Logger = logrus.New()\n\n	level, err := logrus.ParseLevel(viper.GetString("LOG_LEVEL"))\n	if err != nil {\n		level = logrus.InfoLevel\n	}\n	Logger.SetLevel(level)\n\n	Logger.SetFormatter(&logrus.JSONFormatter{})\n}\n'
          }
        />
      </div>
      <BlogParagraph content="Create unit test to check setting log level with table test" />
      <div className="w-full">
        <CodeBlock code={'touch internal/config/logrus_test.go'} />
      </div>
      <div className="w-full">
        <CodeBlock
          language="go"
          code={
            'package config\n\nimport (\n	"os"\n	"testing"\n\n	"github.com/sirupsen/logrus"\n	"github.com/spf13/viper"\n	"github.com/stretchr/testify/assert"\n)\n\nfunc TestInitLogger(t *testing.T) {\n	originalLogLevel := os.Getenv("LOG_LEVEL")\n	defer os.Setenv("LOG_LEVEL", originalLogLevel)\n\n	testCases := []struct {\n		name          string\n		logLevel      string\n		expectedLevel logrus.Level\n	}{\n		{"Default Level (INFO)", "", logrus.InfoLevel},\n		{"Debug Level", "debug", logrus.DebugLevel},\n		{"Warn Level", "warn", logrus.WarnLevel},\n		{"Error Level", "error", logrus.ErrorLevel},\n		{"Invalid Level (Fallback to INFO)", "invalid", logrus.InfoLevel},\n	}\n\n	for _, tc := range testCases {\n		t.Run(tc.name, func(t *testing.T) {\n			os.Setenv("LOG_LEVEL", tc.logLevel)\n			viper.AutomaticEnv()\n			InitLogger()\n\n			assert.Equal(t, tc.expectedLevel, Logger.GetLevel())\n		})\n	}\n}\n'
          }
        />
      </div>
    </BlogSection>
  );
}

function ContentSetupConfigGorm({ onVisible }) {
  const id = 'setup-config/gorm';
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView) {
      onVisible(id);
    }
  }, [inView]);

  return (
    <BlogSection ref={ref} id={id}>
      <BlogSubTitle content="# GORM" />
      <BlogParagraph content="I use posgresql on docker for development mode." />
      <div className="w-full">
        <CodeBlock code={'touch docker-compose.yml'} />
      </div>
      <div className="w-full">
        <CodeBlock
          language="yml"
          code={
            'services:\n' +
            '  db:\n' +
            '    image: postgres\n' +
            '    restart: always\n' +
            '    environment:\n' +
            '      POSTGRES_USER: user\n' +
            '      POSTGRES_PASSWORD: password\n' +
            '      POSTGRES_DB: mydatabase\n' +
            '    ports:\n' +
            '      - "5432:5432"\n'
          }
        />
      </div>
      <BlogParagraph content="Then you can run it with this command." />
      <div className="w-full">
        <CodeBlock code={'docker compose up -d'} />
      </div>
      <BlogParagraph content="Install dependency" />
      <div className="w-full">
        <CodeBlock code={'go get -u gorm.io/gorm gorm.io/driver/postgres'} />
      </div>
      <BlogParagraph content="Create new file internal/config/logrus.go. I use postgre database." />
      <div className="w-full">
        <CodeBlock code={'touch internal/config/gorm.go'} />
      </div>
      <div className="w-full">
        <CodeBlock
          language="go"
          code={
            'package config\n\nimport (\n	"fmt"\n	"log"\n	"time"\n\n	"github.com/spf13/viper"\n	"gorm.io/driver/postgres"\n	"gorm.io/gorm"\n	"gorm.io/gorm/logger"\n)\n\nvar DB *gorm.DB\n\nfunc InitDB() {\n	dsn := fmt.Sprintf("host=%s port=%d user=%s password=%s dbname=%s sslmode=disable",\n		viper.GetString("DB_HOST"),\n		viper.GetInt("DB_PORT"),\n		viper.GetString("DB_USER"),\n		viper.GetString("DB_PASSWORD"),\n		viper.GetString("DB_NAME"),\n	)\n\n	gormConfig := &gorm.Config{\n		Logger: logger.Default.LogMode(logger.Info), // Show SQL queries\n	}\n\n	db, err := gorm.Open(postgres.Open(dsn), gormConfig)\n	if err != nil {\n		log.Fatalf("Failed to connect to database: %v", err)\n	}\n\n	sqlDB, err := db.DB()\n	if err != nil {\n		log.Fatalf("Failed to get database instance: %v", err)\n	}\n\n	sqlDB.SetMaxIdleConns(10)\n	sqlDB.SetMaxOpenConns(100)\n	sqlDB.SetConnMaxLifetime(5 * time.Minute)\n\n	DB = db\n	log.Println("Database connection established successfully!")\n}\n'
          }
        />
      </div>
      <BlogParagraph content="Create unit test to check setting log level with table test" />
      <div className="w-full">
        <CodeBlock code={'touch internal/config/gorm_test.go'} />
      </div>
      <div className="w-full">
        <CodeBlock
          language="go"
          code={
            'package config\n\nimport (\n	"os"\n	"testing"\n\n	"github.com/spf13/viper"\n	"github.com/stretchr/testify/assert"\n)\n\n// TestInitDB tests if the database initializes without errors\nfunc TestInitDB(t *testing.T) {\n	os.Setenv("DB_HOST", "localhost")\n	os.Setenv("DB_PORT", "5432")\n	os.Setenv("DB_USER", "user")\n	os.Setenv("DB_PASSWORD", "password")\n	os.Setenv("DB_NAME", "mydatabase")\n\n	viper.AutomaticEnv()\n	InitDB()\n\n	assert.NotNil(t, DB, "Database instance should not be nil")\n	sqlDB, err := DB.DB()\n	assert.NoError(t, err, "Should retrieve database instance without errors")\n	assert.NoError(t, sqlDB.Ping(), "Database should be reachable")\n}\n'
          }
        />
      </div>
    </BlogSection>
  );
}

export default function Page() {
  const [activeSectionId, setActiveSectionId] = useState('intro');

  useEffect(() => {
    window.history.replaceState(null, '', `#${activeSectionId}`);
  }, [activeSectionId]);

  return (
    <div className="container pt-20">
      <BlogTitle content="Go Project Setup Guide" />
      <div className="flex gap-5">
        <BlogMenu
          activeId={activeSectionId}
          category="go"
          link="go-project-setup-guide"
          contents={[
            { id: 'intro', name: 'Introduction' },
            { id: 'install-go', name: 'Install Go' },
            { id: 'project-initialization', name: 'Project Initialization' },
            {
              id: 'setup-cobra-cli',
              name: 'Setting Up Cobra CLI',
              children: [{ id: 'setup-cobra-cli/http', name: 'HTTP Server' }],
            },
            {
              id: 'setup-config',
              name: 'Setup Config',
              children: [
                { id: 'setup-config/viper', name: 'Viper' },
                { id: 'setup-config/logrus', name: 'Logrus' },
                { id: 'setup-config/gorm', name: 'GORM' },
                { id: 'setup-config/swaggo', name: 'Swaggo' },
              ],
            },
          ]}
        />

        <div className="h-[80vh] overflow-auto">
          <ContentIntro onVisible={setActiveSectionId} />

          <ContentInstallGo onVisible={setActiveSectionId} />

          <ContentProjectInitialization onVisible={setActiveSectionId} />

          <ContentSetupCobraCli onVisible={setActiveSectionId} />
          <ContentSetupCobraCliHTTP onVisible={setActiveSectionId} />

          <ContentSetupConfig onVisible={setActiveSectionId} />
          <ContentSetupConfigViper onVisible={setActiveSectionId} />
          <ContentSetupConfigLogrus onVisible={setActiveSectionId} />
          <ContentSetupConfigGorm onVisible={setActiveSectionId} />
        </div>
      </div>
    </div>
  );
}
