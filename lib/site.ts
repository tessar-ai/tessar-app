export const GITHUB = "https://github.com/tessar-ai/tessar";

export const guides = [
    { slug: "agent", title: "Agent", desc: "Generate, messages, instructions and model overrides" },
    { slug: "stream", title: "Streaming", desc: "Text/reasoning deltas, tools and token usage" },
    { slug: "tools", title: "Tools and messages", desc: "Zod schemas, tool context and ToolMessage" },
    { slug: "sessions", title: "Controller and Session", desc: "Conversations, queues, subscriptions and threads" },
    { slug: "plugins", title: "Plugins", desc: "Custom plugins, hooks, logging and loading plugins after packaging" },
    { slug: "storage", title: "Storage", desc: "SQLite, PostgreSQL, MongoDB and restoring conversations" },
];

export const packages = [
    { dir: "core", name: "@tessar/core", desc: "Agent execution, sessions, messages, tools, hooks, state and in-memory storage" },
    { dir: "openai", name: "@tessar/openai", desc: "OpenAI Responses and Chat Completions adapters, including compatible endpoints" },
    { dir: "plugins", name: "@tessar/plugins", desc: "Plugin discovery/loading, npm plugin management and the /logger plugin" },
    { dir: "sqlite", name: "@tessar/sqlite", desc: "SQLite persistence using Node's built-in SQLite API" },
    { dir: "postgresql", name: "@tessar/postgresql", desc: "PostgreSQL persistence" },
    { dir: "mongodb", name: "@tessar/mongodb", desc: "MongoDB persistence" },
];