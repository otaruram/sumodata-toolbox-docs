# Introduction

Welcome to SumoData Toolbox - your AI-powered Swiss Army Knife for data work.

## What is SumoData Toolbox?

SumoData Toolbox is a VS Code extension that provides **one-click AI tools** specifically designed for:

- 📂 **Data Engineers** - SQL optimization, schema generation
- 📊 **Data Analysts** - Code explanation, data cleaning
- 🤖 **ML Engineers** - Documentation, boilerplate generation

## Why SumoData Toolbox?

### The Problem with Traditional AI Assistants

Traditional AI coding assistants are:
- **Chatty**: Require back-and-forth conversation
- **Token-hungry**: Use lots of API quota
- **Slow**: Wait for context building
- **Generic**: Not specialized for data work

### The SumoData Approach

We're different:
- **One-Click**: Select code, click tool, get results
- **Token-efficient**: Minimalist prompts, no conversation history
- **Fast**: Direct results in 2-10 seconds
- **Specialized**: Built for data professionals

## Core Philosophy

### 1. Swiss Army Knife

Each tool does ONE thing exceptionally well. No bloat, no confusion.

### 2. BYOK (Bring Your Own Key)

You control your API key and costs. No subscription, no vendor lock-in.

### 3. Token Efficiency

Every request is optimized to use minimal tokens while delivering maximum value.

### 4. Context-Aware

Tools appear based on what you're working on (.py or .sql files).

## What Can You Do?

### For Data Engineers

```sql
-- Optimize slow queries
SELECT * FROM users WHERE name LIKE '%john%'
↓
SELECT id, name FROM users WHERE name LIKE 'john%'
-- + Index suggestions
```

### For Data Analysts

```python
# Understand complex pandas code
df.groupby('category').agg({'sales': ['sum', 'mean']})
↓
"Groups data by category, calculates total and average sales"
```

### For ML Engineers

```python
# Generate training loops
def train_model(X, y):
    pass
↓
# Complete PyTorch/Scikit-learn training code with validation
```

## How It Works

```mermaid
graph LR
    A[Select Code] --> B[Choose Tool]
    B --> C[AI Processing]
    C --> D[Results]
    D --> E[Apply Changes]
```

1. **Select** code in your editor
2. **Choose** tool from sidebar or context menu
3. **Wait** 2-10 seconds for AI processing
4. **Review** results in new tab
5. **Apply** by copying or inserting

## Key Features

### 9 Specialized Tools

- **3 for Data Engineering** (Sumo Pipes)
- **3 for Data Analysis** (Sumo Lens)
- **3 for DS/ML** (Sumo Core)

### 6 AI Models

Choose speed vs quality:
- ⚡ Lightning - Fast
- 🔥 Titan Pro - Powerful
- 💨 Flash - Ultra-fast
- And 3 more...

### Multiple Access Methods

- Sidebar buttons
- Right-click context menu
- Command palette

## Who Is This For?

### Perfect For

- Data engineers optimizing pipelines
- Data analysts cleaning datasets
- ML engineers building models
- Teams wanting consistent code quality
- Anyone working with data in VS Code

### Not Ideal For

- General web development
- Non-data programming tasks
- Users without sumopod.com API access

## Getting Started

Ready to boost your productivity?

1. [Install the extension →](/guide/installation)
2. [Get your API key from sumopod.com](https://sumopod.com)
3. [Follow the quick start guide →](/guide/getting-started)

## Community & Support

- **GitHub**: Report issues and contribute
- **Documentation**: Comprehensive guides and examples
- **Discussions**: Share tips and ask questions

---

::: warning Disclaimer
This is an **unofficial, community-powered** extension. Not affiliated with or endorsed by Sumopod.
:::

## Next Steps

- [Install SumoData Toolbox →](/guide/installation)
- [Quick start guide →](/guide/getting-started)
- [Explore all features →](/features/overview)
