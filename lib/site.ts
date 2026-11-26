export const GITHUB = "https://github.com/tessar-ai/tessar";

export const packages = [
    { dir: "core", name: "@tessar/core", desc: "Agent execution, sessions, messages, tools, hooks, state and in-memory storage" },
    { dir: "openai", name: "@tessar/openai", desc: "OpenAI Responses and Chat Completions adapters, including compatible endpoints" },
    { dir: "plugins", name: "@tessar/plugins", desc: "Plugin discovery/loading, npm plugin management and the /logger plugin" },
    { dir: "sqlite", name: "@tessar/sqlite", desc: "SQLite persistence using Node's built-in SQLite API" },
    { dir: "postgresql", name: "@tessar/postgresql", desc: "PostgreSQL persistence" },
    { dir: "mongodb", name: "@tessar/mongodb", desc: "MongoDB persistence" },
];
