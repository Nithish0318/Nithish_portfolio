export const portfolioData = {
  personal: {
    name: "NithishKumar S",
    title: "Full-Stack Software Engineer",
    subtitle: "Flutter Mobile & Web • Go (Golang) Microservices • Document AI & OCR Pipelines",
    tagline: "Engineering high-throughput microservices, offline-capable POS systems, and intuitive cross-platform Flutter experiences with 1.9+ years of production impact.",
    experience: "1 Year 10 Months",
    company: "Radpro Infotech",
    companyRole: "Software Engineer",
    email: "nithishks2004@gmail.com",
    location: "Tamil Nadu, India",
    status: "Open to exciting opportunities & high-impact projects",
    socials: {
      github: "https://github.com/Nithish0318",
      linkedin: "https://www.linkedin.com/in/nithishkumar-s-012503246/",
      email: "nithishks2004@gmail.com"
    },
    bio: [
      "I am a passionate Full-Stack Software Engineer with 1 year and 10 months of hands-on production experience at Radpro Infotech. My core expertise bridges high-performance backend engineering with modern cross-platform mobile and web applications.",
      "On the backend, I design and build resilient microservices and local background daemons in Go (Golang) utilizing Gin, MongoDB, embedded bbolt, and Bleve search engine for type-ahead fuzzy autocomplete. I've engineered dynamic reporting pipelines using wkhtmltopdf and integrated automated dispatch systems via Meta WhatsApp Cloud API and AWS SES.",
      "On the frontend, I architect enterprise Flutter monorepos managed with Melos, shipping scalable multi-tenant apps across web, mobile, and desktop. I specialize in complex state management, thermal receipt printing (ESC/POS), barcode/OCR scanning, and fluid user experiences.",
      "Additionally, I have implemented intelligent Document AI & OCR pipelines combining Google Cloud Vision, Google Gemini API, OpenRouter, and Ollama to parse unformatted financial records and receipts directly into verified structured accounting schemas."
    ],
    stats: [
      { label: "Production Experience", value: "1.9+ Yrs", desc: "Enterprise development at Radpro Infotech" },
      { label: "Core Enterprise Apps", value: "5+", desc: "EzBroker, EzKart, Store POS & Admin suites" },
      { label: "Enterprise Integrations", value: "10+", desc: "WhatsApp API, Gemini AI, Tally Prime, Razorpay" },
      { label: "Automated Reports/Month", value: "50K+", desc: "Dynamic PDFs & WhatsApp notifications" }
    ]
  },

  skills: {
    frontend: [
      { name: "Flutter", level: "Expert", desc: "Cross-platform mobile, web, and desktop applications" },
      { name: "Dart", level: "Expert", desc: "Object-oriented, reactive programming & async streams" },
      { name: "Melos Monorepo", level: "Advanced", desc: "Multi-package architecture & shared modules" },
      { name: "State Management", level: "Advanced", desc: "Provider, Riverpod, reactive UI architecture" },
      { name: "Thermal POS Printing", level: "Advanced", desc: "ESC/POS receipt formatting & hardware interfacing" },
      { name: "Typeahead & Data Grids", level: "Advanced", desc: "Custom search widgets, autocomplete dialogs & virtualized lists" }
    ],
    backend: [
      { name: "Go (Golang)", level: "Advanced", desc: "High-performance microservices & background daemons" },
      { name: "Gin Framework", level: "Advanced", desc: "RESTful API design, middleware & route management" },
      { name: "Bleve Search Engine", level: "Advanced", desc: "Full-text indexing, facets, prefix wildcard autocomplete" },
      { name: "Python / FastAPI", level: "Intermediate", desc: "Persistent OCR servers & document processing microservices" },
      { name: "Windows Services", level: "Advanced", desc: "Offline-first local service daemon (kardianos/service)" },
      { name: "WebSockets & MQTT", level: "Intermediate", desc: "Real-time communication & event streaming" }
    ],
    aiAndOcr: [
      { name: "Google Gemini API", level: "Advanced", desc: "LLM-assisted document parsing & structured extraction" },
      { name: "Google Cloud Vision", level: "Advanced", desc: "Text detection, OCR extraction & layout analysis" },
      { name: "Ollama & Local LLMs", level: "Intermediate", desc: "Local schema-guided invoice & receipt extraction" },
      { name: "Surya OCR Models", level: "Intermediate", desc: "High-accuracy multilingual line-level document OCR" },
      { name: "PDF Plumber", level: "Intermediate", desc: "Bank statement tabular extraction & normalization" }
    ],
    integrations: [
      { name: "Meta WhatsApp Cloud API", level: "Advanced", desc: "Automated delivery of dynamic PDF reports & notifications" },
      { name: "Tally Prime ERP", level: "Advanced", desc: "Automated ledger export & XML accounting sync" },
      { name: "Razorpay Gateway", level: "Advanced", desc: "Payment flow, webhooks & checkout reconciliation" },
      { name: "AWS SES", level: "Intermediate", desc: "Transactional email delivery & PDF attachments" },
      { name: "Firebase (FCM, Auth)", level: "Advanced", desc: "Push notifications, cloud messaging & auth" }
    ],
    databases: [
      { name: "MongoDB", level: "Advanced", desc: "Connection pooling, aggregation pipelines & normalization" },
      { name: "bbolt (BoltDB)", level: "Advanced", desc: "Embedded ACID key-value store for offline POS reliability" },
      { name: "SQLite / DBs", level: "Intermediate", desc: "Local caching & client-side state persistence" }
    ]
  },

  projects: [
    {
      id: "ezbroker",
      title: "EzBroker Enterprise Suite",
      category: "frontend",
      subtitle: "Multi-Role Brokerage & Trading Platform",
      badge: "Production Flutter Monorepo",
      description: "Comprehensive enterprise trading & brokerage platform managing high-volume order entry, supply matching, client affiliation, and financial settlement workflows.",
      highlights: [
        "Architected complete Flutter UI modules with reusable typeahead search widgets (BrokerSearchFields) for instant product & broker lookup.",
        "Built responsive order entry, receipt generation, and payment settlement screens with soft-delete & audit tracking.",
        "Created an interactive batch OCR verification interface allowing brokers to inspect scanned documents alongside parsed fields before commit.",
        "Integrated dynamic PDF report generation and WhatsApp sharing triggers directly within the broker dashboard."
      ],
      tags: ["Flutter", "Dart", "Melos", "Provider", "Typeahead", "REST APIs", "OCR UI"],
      repoContext: "C:\\projects\\ezapps (apps/ezbroker)"
    },
    {
      id: "reporting-engine",
      title: "High-Performance Dynamic Reporting & WhatsApp Engine",
      category: "backend",
      subtitle: "Template-Based PDF Engine & Automated WhatsApp Dispatch",
      badge: "Go Microservice & Meta API",
      description: "Scalable reporting microservice written in Go that pulls normalized data from MongoDB, renders pixel-perfect HTML/CSS templates into PDFs via wkhtmltopdf, and dispatches them automatically via Meta WhatsApp Cloud API and AWS SES.",
      highlights: [
        "Built dynamic report generation controllers supporting order confirmations, buyer/seller cancellation slips, and monthly broker ledgers.",
        "Engineered Meta WhatsApp Cloud API integration with automatic retries, media uploads, and delivery status tracking.",
        "Implemented flexible MongoDB filtering and data normalization to process complex aggregation pipelines in milliseconds.",
        "Generated and dispatched over 50,000+ automated business reports monthly with zero downtime."
      ],
      tags: ["Go (Golang)", "Gin", "MongoDB", "wkhtmltopdf", "WhatsApp Cloud API", "AWS SES", "HTML/CSS"],
      repoContext: "C:\\projects\\webpage (services/reporting, controllers/reports)"
    },
    {
      id: "ocr-pipeline",
      title: "Intelligent Document AI & Multi-Model OCR Pipeline",
      category: "ai",
      subtitle: "Structured Financial Document Extraction Pipeline",
      badge: "Go • Python • Gemini • Google Vision",
      description: "End-to-end intelligent document processing pipeline that parses unstructured physical receipts, vendor invoices, and bank statements into validated JSON schemas for accounting systems.",
      highlights: [
        "Multi-provider OCR architecture combining Google Cloud Vision, Google Gemini API, OpenRouter, and Ollama for schema-validated extraction.",
        "Built a persistent FastAPI OCR server with preloaded Surya models and supporting Go background service controllers.",
        "Engineered bank statement PDF extraction utilizing PDF Plumber and dynamic data normalization into double-entry ledgers.",
        "Stored raw OCR text and structured JSON responses into MongoDB for auditability and continuous model refinement."
      ],
      tags: ["Go", "FastAPI", "Python", "Google Gemini API", "Google Cloud Vision", "Ollama", "Surya OCR", "MongoDB"],
      repoContext: "C:\\projects\\webpage (services/ocr, scripts/ocr)"
    },
    {
      id: "ezkart-monorepo",
      title: "EzKart Monorepo Ecosystem",
      category: "frontend",
      subtitle: "Consumer Marketplace & Multi-Tenant Operations App",
      badge: "Flutter Monorepo with Melos",
      description: "Large-scale e-commerce and logistics platform containing a consumer-facing shopping application (EzKart) and an administrative app (EzKart Admin) for farmers, drivers, and system administrators.",
      highlights: [
        "Managed shared UI widgets, data models, and services across multiple applications using a Melos-powered monorepo architecture.",
        "Integrated Razorpay payment gateway, Google Mobile Ads, and Firebase push notifications.",
        "Built role-based administrative interfaces for inventory tracking, driver dispatch routing, and smart vending machine configuration.",
        "Optimized app startup performance and network payload caching for low-bandwidth rural operations."
      ],
      tags: ["Flutter", "Dart", "Melos", "Razorpay", "Firebase", "State Management", "Clean Architecture"],
      repoContext: "C:\\projects\\ezapps (apps/ezkart, apps/ezkartadmin, packages/shared)"
    },
    {
      id: "ezpos-daemon",
      title: "EzPOS Local Service Daemon & Bleve Search Engine",
      category: "backend",
      subtitle: "Offline-First Enterprise Retail Background Service",
      badge: "Go • Windows Service • Bleve Engine",
      description: "Reliable, offline-first local POS microservice that runs as a Windows background service (`kardianos/service`) to power retail store checkout counters with zero cloud dependency.",
      highlights: [
        "Integrated Bleve full-text search engine with custom analyzers supporting prefix queries (`Nama*`), wildcard search, and real-time type-ahead autocomplete.",
        "Leveraged embedded bbolt (BoltDB) for ACID transactions and instant local persistence during network outages.",
        "Built thermal receipt printing pipeline supporting ESC/POS commands over USB and local network printers.",
        "Implemented WebSocket and MQTT protocols for bidirectional sync between store counters and central servers."
      ],
      tags: ["Go", "Bleve Search", "bbolt", "Gin", "Windows Service", "WebSockets", "Thermal POS"],
      repoContext: "C:\\projects\\webpage (ez_pos_local_service)"
    },
    {
      id: "tally-integration",
      title: "Tally Prime ERP Automated Sync Bridge",
      category: "backend",
      subtitle: "Financial Voucher & Ledger Automation Engine",
      badge: "Go • Python • XML/REST",
      description: "Automated ledger bridge converting transactional data from store sales, broker commissions, and bank statements directly into Tally Prime ERP compatible XML format.",
      highlights: [
        "Built date-and-type filtered export controllers for accounting vouchers, sales registers, and purchase orders.",
        "Integrated automated reconciliation between bank statement OCR outputs and Tally ledgers.",
        "Eliminated manual accounting data entry, cutting financial reconciliation time by 85%."
      ],
      tags: ["Go", "Tally Prime", "XML", "Accounting Domain", "MongoDB", "Data Normalization"],
      repoContext: "C:\\projects\\webpage (services/tally)"
    }
  ],

  experience: [
    {
      role: "Software Engineer",
      company: "Radpro Infotech",
      period: "2024 - Present (1 Year 10 Months)",
      location: "Tamil Nadu, India",
      type: "Full-Time",
      description: "Core engineer driving development of enterprise retail POS, e-commerce monorepo applications, and Go microservices across the EzeeInfo / EzKart product lines.",
      keyAchievements: [
        "Architected and maintained the Flutter monorepo with Melos containing EzKart, EzKart Admin, and EzBroker applications.",
        "Engineered Go backend services for dynamic PDF reporting, Bleve full-text search indexing, and WhatsApp Cloud API dispatch.",
        "Implemented end-to-end AI Document OCR pipelines integrating Google Cloud Vision and Google Gemini for receipt/invoice parsing.",
        "Built offline-first local background service daemons with bbolt and Bleve for retail point-of-sale hardware and thermal printers.",
        "Integrated Tally Prime ERP sync, automating ledger entry from daily store transactions and broker settlements."
      ],
      technologies: ["Flutter", "Dart", "Go (Golang)", "Gin", "Melos", "MongoDB", "Bleve Search", "Gemini API", "bbolt", "WhatsApp Cloud API", "Tally Prime"]
    }
  ],

  architectureShowcase: {
    title: "Enterprise Offline-First & Cloud Hybrid Architecture",
    description: "How my frontend apps, Go local services, and cloud integrations work in unison across distributed retail and brokerage environments.",
    layers: [
      {
        name: "Client Layer (Frontend)",
        tech: "Flutter Monorepo (Melos) • Web, Mobile & Desktop",
        desc: "EzKart, EzKart Admin & EzBroker apps utilizing shared domain models, typeahead search, and thermal print drivers."
      },
      {
        name: "Local Service Layer (Edge)",
        tech: "Go Local POS Service Daemon • bbolt • Bleve",
        desc: "Runs locally on Windows as a service for offline resilience, Bleve type-ahead search, and instant sub-millisecond local caching."
      },
      {
        name: "Document Intelligence (AI)",
        tech: "Python FastAPI • Surya OCR • Gemini API • Ollama",
        desc: "Ingests scanned receipts, invoices, and bank statements to produce structured, validated accounting schemas."
      },
      {
        name: "Cloud Backend & Notification Layer",
        tech: "Go Microservices • MongoDB • Meta WhatsApp • AWS SES",
        desc: "Handles central synchronization, dynamic PDF report generation with wkhtmltopdf, and automated WhatsApp/Email delivery."
      }
    ]
  },

  codeHighlights: [
    {
      language: "Go",
      title: "Dynamic Report & WhatsApp Dispatcher",
      filename: "services/reporting/report_service.go",
      code: `// GenerateAndSendReport creates a dynamic PDF report and dispatches via Meta WhatsApp
func (s *ReportService) GenerateAndSendBrokerReport(ctx context.Context, brokerID string, filter ReportFilter) (*ReportResult, error) {
    // 1. Fetch normalized ledger entries from MongoDB
    data, err := s.brokerRepo.GetNormalizedTransactions(ctx, brokerID, filter)
    if err != nil {
        return nil, fmt.Errorf("failed fetching broker data: %w", err)
    }

    // 2. Render HTML template with custom currency & date formatters
    htmlContent, err := s.templateEngine.Render("broker_statement.html", data)
    if err != nil {
        return nil, fmt.Errorf("template render failed: %w", err)
    }

    // 3. Compile to PDF with wkhtmltopdf options
    pdfBytes, err := s.pdfGenerator.GenerateFromHTML(htmlContent)
    if err != nil {
        return nil, fmt.Errorf("pdf generation failed: %w", err)
    }

    // 4. Dispatch automated statement via Meta WhatsApp Cloud API
    msgID, err := s.whatsappService.SendDocument(ctx, data.PhoneNumber, pdfBytes, "Broker_Statement.pdf")
    if err != nil {
        s.logger.Error("WhatsApp dispatch failed, falling back to AWS SES", zap.Error(err))
        return s.emailService.SendEmailWithAttachment(ctx, data.Email, pdfBytes)
    }

    return &ReportResult{Status: "DELIVERED", MessageID: msgID}, nil
}`
    },
    {
      language: "Dart",
      title: "Reusable Typeahead Autocomplete Field",
      filename: "packages/shared/widgets/broker_search_fields.dart",
      code: `// High-performance autocomplete search field with Bleve backend prefix search
class BrokerSearchField<T> extends StatelessWidget {
  final String label;
  final Future<List<T>> Function(String query) suggestionsCallback;
  final Widget Function(BuildContext, T) itemBuilder;
  final void Function(T) onSelected;

  const BrokerSearchField({
    super.key,
    required this.label,
    required this.suggestionsCallback,
    required this.itemBuilder,
    required this.onSelected,
  });

  @override
  Widget build(BuildContext context) {
    return TypeAheadField<T>(
      debounceDuration: const Duration(milliseconds: 250),
      suggestionsCallback: (pattern) async {
        if (pattern.trim().isEmpty) return const [];
        return await suggestionsCallback(pattern.trim());
      },
      itemBuilder: itemBuilder,
      onSelected: onSelected,
      emptyBuilder: (context) => const Padding(
        padding: EdgeInsets.all(12),
        child: Text('No matching records found', style: TextStyle(color: Colors.grey)),
      ),
    );
  }
}`
    }
  ]
};

